import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { BookOpen, Terminal, ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `BOLA vs IDOR: Understanding Broken Object-Level Authorization | ${BRAND_CONFIG.name} Research`,
  description: "Technical guide by Mohamed Basil explaining BOLA vs IDOR vulnerabilities in web APIs, authorization bypass vectors, and code-level remediation patterns.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/research/bola-vs-idor`,
  },
};

export default function BolaVsIdorArticle() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="research" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <a href="/research" className="hover:text-text-primary">Research</a>
            <span>/</span>
            <span className="text-orange-accent">BOLA vs IDOR</span>
          </nav>

          <div className="eyebrow">
            <BookOpen className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC RESEARCH ARTICLE // API SECURITY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary uppercase tracking-tight leading-tight">
            BOLA vs IDOR: Understanding Broken Object-Level Authorization
          </h1>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-text-muted border-t border-border-color pt-4">
            <span>Author: <a href="/about/mohamed-basil" className="text-orange-accent font-bold hover:underline">Mohamed Basil</a></span>
            <span>•</span>
            <span>Published: August 2026</span>
            <span>•</span>
            <span>Organization: KRAXXSEC (A KRAXX Company)</span>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-8 leading-relaxed text-text-secondary text-base">
        <div className="p-6 rounded-xl bg-bg-surface border border-border-color space-y-2 font-mono text-xs text-text-primary">
          <span className="text-orange-accent font-bold uppercase">EXECUTIVE TAKEAWAY:</span>
          <p>
            BOLA (Broken Object Level Authorization) holds the #1 spot on the OWASP API Security Top 10. It occurs when an API endpoint accepts an object identifier (e.g. `/api/v1/invoices/9482`) without validating whether the requesting authenticated session actually owns that resource.
          </p>
        </div>

        <h2 className="font-heading text-2xl font-bold text-text-primary uppercase">
          WHAT IS THE DIFFERENCE BETWEEN BOLA AND IDOR?
        </h2>
        <p>
          Historically, <strong>IDOR (Insecure Direct Object Reference)</strong> referred to web applications displaying sequential database keys (like `user_id=102`) in GET requests or form parameters.
        </p>
        <p>
          <strong>BOLA (Broken Object Level Authorization)</strong> expands this concept specifically to REST, GraphQL, and microservice APIs. In modern API architectures, resources are queried directly via unique identifiers (UUIDs or integer IDs) in URL paths or JSON body payloads. When the backend controller fails to execute an access-control verification against the authenticated user token, BOLA occurs.
        </p>

        <h2 className="font-heading text-2xl font-bold text-text-primary uppercase">
          ANATOMY OF A BOLA VULNERABILITY
        </h2>
        <p>Consider an API endpoint that updates user profile settings:</p>

        <pre className="p-4 rounded-lg bg-bg-surface border border-border-color font-mono text-xs text-text-primary overflow-x-auto">
{`POST /api/v1/users/8841/settings HTTP/1.1
Host: api.targetapp.com
Authorization: Bearer eyJhbGciOiJIUzI1Ni... (Logged in as User 5012)
Content-Type: application/json

{
  "email": "attacker@domain.com",
  "role": "admin"
}`}
        </pre>

        <p>
          If the server checks that the JWT token is valid for User 5012, but fails to check whether User 5012 is authorized to modify User 8841's record, User 5012 can compromise any account on the platform simply by incrementing or supplying target user IDs.
        </p>

        <h2 className="font-heading text-2xl font-bold text-text-primary uppercase">
          REMEDIATION & SECURE DESIGN PATTERNS
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Enforce object-level access control checks at every database access boundary.</li>
          <li>Never rely on client-side state or hidden inputs for user identity.</li>
          <li>Use random, unguessable UUIDv4 identifiers for public references.</li>
          <li>Write automated unit & integration tests that attempt cross-tenant access.</li>
        </ul>

        {/* Bottom Related Service Link */}
        <div className="mt-12 p-8 rounded-xl bg-bg-surface-2 border border-border-color flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-orange-accent font-bold block mb-1">[ RELATED KRAXXSEC SERVICE ]</span>
            <span className="text-text-primary font-heading text-lg font-bold block">API Security Testing & Penetration Testing</span>
          </div>
          <a href="/services/api-security" className="btn-nw btn-nw-solid shrink-0">
            <span>[ EXPLORE API SERVICE ]</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
