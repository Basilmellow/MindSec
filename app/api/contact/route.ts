import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { BRAND_CONFIG } from '@/config/brand';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, target, service, message, hp_field_x7q, authorized } = body;

    // Honeypot anti-spam check
    if (hp_field_x7q && hp_field_x7q.trim().length > 0) {
      return NextResponse.json({ success: true, message: 'Request received.' }, { status: 200 });
    }

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json({ error: 'Valid name is required (2-100 characters).' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email) || email.length > 150) {
      return NextResponse.json({ error: 'Valid business email address is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10 || message.length > 2500) {
      return NextResponse.json({ error: 'Assessment details must be between 10 and 2500 characters.' }, { status: 400 });
    }

    if (!authorized) {
      return NextResponse.json({ error: 'Confirmation of authorization is required before submitting testing requests.' }, { status: 400 });
    }

    // HTML sanitization helper
    const sanitize = (str: string) =>
      String(str || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeCompany = sanitize(company || 'N/A');
    const safeTarget = sanitize(target || 'Not specified');
    const safeService = sanitize(service || 'Web Application Security');
    const safeMessage = sanitize(message);

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: `KRAXXSEC <${process.env.RESEND_FROM_EMAIL || 'assessment@kraxxsec.com'}>`,
        to: [process.env.NOTIFICATION_EMAIL || BRAND_CONFIG.contactEmail],
        replyTo: safeEmail,
        subject: `[KRAXXSEC ASSESSMENT REQUEST] ${safeService} - ${safeCompany}`,
        html: `
          <div style="font-family: monospace; background: #08090C; color: #F2F2EE; padding: 24px; border-radius: 8px;">
            <h2 style="color: #F97316; border-b: 1px solid #252A31; padding-bottom: 8px;">KRAXXSEC ASSESSMENT REQUEST</h2>
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Company:</strong> ${safeCompany}</p>
            <p><strong>Selected Service:</strong> ${safeService}</p>
            <p><strong>Target Scope:</strong> ${safeTarget}</p>
            <p><strong>Authorization Confirmed:</strong> YES</p>
            <hr style="border-color: #252A31; margin: 16px 0;" />
            <h4 style="color: #D6A15D;">SCOPE & DETAILS:</h4>
            <p style="white-space: pre-wrap; background: #101319; padding: 12px; border-radius: 4px;">${safeMessage}</p>
            <footer style="margin-top: 24px; font-size: 11px; color: #9299A3;">
              KRAXXSEC Security Engineering • A KRAXX Company
            </footer>
          </div>
        `,
      });
    } else {
      console.log('[KRAXXSEC DEV MODE] Contact Request Received:', {
        safeName,
        safeEmail,
        safeCompany,
        safeTarget,
        safeService,
        safeMessage,
      });
    }

    return NextResponse.json({
      success: true,
      message: 'Your assessment request has been received. Mohamed Basil will review your scope within 1 business day.',
    });
  } catch (error: any) {
    console.error('[KRAXXSEC API ERROR]', error);
    return NextResponse.json({ error: 'An unexpected error occurred while processing your request.' }, { status: 500 });
  }
}
