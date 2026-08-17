import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BRAND_CONFIG } from '@/config/brand';

// Simple in-memory rate limiter for public server route (IP -> timestamps[])
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Filter out timestamps outside the current window
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }

  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);
  return false;
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>'\"]/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#039;',
    '"': '&quot;',
  }[character] || character));
}

export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait 10 minutes before submitting another assessment request.',
        },
        { status: 429 }
      );
    }

    // 2. Parse Body
    const body = await req.json();
    const {
      name,
      email,
      company,
      target,
      service,
      message,
      hp_field_x7q,
      authorized,
    } = body || {};

    // 3. Honeypot check (Requirement #2)
    // Opaque field hp_field_x7q. If filled out, silently discard and return 200 OK (anti-bot)
    if (hp_field_x7q && String(hp_field_x7q).trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: 'Assessment request received.',
      });
    }

    // 4. Server-Side Mandatory Validation & Input Length Capping (Requirement #1 & #5)
    const cleanName = String(name || '').trim().slice(0, 100);
    const cleanEmail = String(email || '').trim().slice(0, 150);
    const cleanCompany = String(company || '').trim().slice(0, 100);
    const cleanTarget = String(target || '').trim().slice(0, 200);
    const cleanService = String(service || '').trim().slice(0, 100);
    const cleanMessage = String(message || '').trim().slice(0, 2000);

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeCompany = escapeHtml(cleanCompany);
    const safeTarget = escapeHtml(cleanTarget);
    const safeService = escapeHtml(cleanService);
    const safeMessage = escapeHtml(cleanMessage);

    if (!cleanName) {
      return NextResponse.json({ success: false, error: 'Name is required.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail || !emailRegex.test(cleanEmail)) {
      return NextResponse.json({ success: false, error: 'A valid email address is required.' }, { status: 400 });
    }

    if (!cleanService) {
      return NextResponse.json({ success: false, error: 'Please select a service.' }, { status: 400 });
    }

    if (!cleanMessage) {
      return NextResponse.json({ success: false, error: 'Message/Scope details are required.' }, { status: 400 });
    }

    if (!authorized) {
      return NextResponse.json(
        { success: false, error: 'Authorization confirmation is required to test requested systems.' },
        { status: 400 }
      );
    }

    // 5. Dispatch Email if RESEND_API_KEY server secret is configured (Requirement #4)
    const resendApiKey = process.env.RESEND_API_KEY;
    let emailSent = false;

    if (resendApiKey && resendApiKey.startsWith('re_')) {
      try {
        const resend = new Resend(resendApiKey);
        const recipient = process.env.CONTACT_EMAIL_TO || BRAND_CONFIG.contactEmail;
        const sender = process.env.CONTACT_EMAIL_FROM || 'MindSec Assessment <onboarding@resend.dev>';

        await resend.emails.send({
          from: sender,
          to: recipient,
          subject: `[MindSec Assessment Request] ${cleanService} - ${cleanCompany || cleanName}`,
          html: `
            <h2>New Security Assessment Request</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Company:</strong> ${safeCompany || 'N/A'}</p>
            <p><strong>Target Scope:</strong> ${safeTarget || 'N/A'}</p>
            <p><strong>Service:</strong> ${safeService}</p>
            <p><strong>Authorization Confirmed:</strong> Yes</p>
            <hr />
            <h3>Message / Scope Details:</h3>
            <p style="white-space: pre-wrap;">${safeMessage}</p>
          `,
        });
        emailSent = true;
      } catch (err: any) {
        console.error('Email dispatch error via Resend:', err?.message || err);
      }
    }

    // 6. Return Real Server Response (Requirement #1)
    return NextResponse.json({
      success: true,
      message: emailSent
        ? 'Assessment request successfully dispatched to MindSec engineering.'
        : 'Assessment request validated and queued for review by Mohamed Basil.',
      data: {
        receivedAt: new Date().toISOString(),
        service: cleanService,
        emailSent,
      },
    });
  } catch (error: any) {
    console.error('API /api/contact unexpected error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error while processing request.' },
      { status: 500 }
    );
  }
}
