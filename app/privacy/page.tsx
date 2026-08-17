import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';

export const metadata = {
  title: `Privacy Policy | ${BRAND_CONFIG.name}`,
  description: `Privacy Policy for ${BRAND_CONFIG.name} (${BRAND_CONFIG.siteUrl}). Learn how we handle assessment contact information and technical data responsibly.`,
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/privacy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="about" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="eyebrow">
            <span>LEGAL & PRIVACY // KRAXXSEC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Privacy Policy
          </h1>
          <p className="font-mono text-xs text-text-muted">Last Updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-6 leading-relaxed text-text-secondary text-sm">
        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">1. OVERVIEW</h2>
        <p>
          KRAXXSEC (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;), a security division of KRAXX, respects your privacy. This Privacy Policy describes how we collect, use, and handle information submitted through our website ({BRAND_CONFIG.siteUrl}) and assessment initiation forms.
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">2. INFORMATION WE COLLECT</h2>
        <p>
          We only collect personal information that you voluntarily submit when requesting a security assessment or contacting us directly (e.g. name, business email, company name, target scope details, and assessment requirements).
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">3. USE OF INFORMATION</h2>
        <p>
          Submitted contact and scope information is strictly used to evaluate assessment requests, communicate with you regarding Rules of Engagement, and deliver authorized security consulting services. We do not sell or trade your data to third parties.
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">4. CONFIDENTIALITY & ASSESSMENT DATA</h2>
        <p>
          All technical findings, system credentials, API tokens, and scope information shared during security assessments are treated as strictly confidential under signed Non-Disclosure Agreements (NDA) and Rules of Engagement.
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">5. CONTACT</h2>
        <p>
          For privacy inquiries or data requests, contact us at: <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-orange-accent font-mono underline">{BRAND_CONFIG.contactEmail}</a>.
        </p>
      </section>

      <Footer />
    </main>
  );
}
