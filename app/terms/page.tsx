import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';

export const metadata = {
  title: `Terms of Service | ${BRAND_CONFIG.name}`,
  description: `Terms of Service for ${BRAND_CONFIG.name} (${BRAND_CONFIG.siteUrl}). Governs website usage and preliminary engagement terms.`,
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="about" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="eyebrow">
            <span>TERMS & GOVERNANCE // KRAXXSEC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Terms of Service
          </h1>
          <p className="font-mono text-xs text-text-muted">Last Updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-6 leading-relaxed text-text-secondary text-sm">
        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">1. AUTHORIZED TESTING ONLY</h2>
        <p>
          KRAXXSEC provides security assessment, web application penetration testing, and API auditing services exclusively to authorized system owners or their designated representatives. No security testing is executed without explicit, signed Rules of Engagement (ROE).
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">2. WEBSITE USE</h2>
        <p>
          By accessing this website ({BRAND_CONFIG.siteUrl}), you agree not to use the website, its content, or its forms for unauthorized scanning, spamming, or unlawful activities.
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">3. PRICING & SCOPE DEFINITION</h2>
        <p>
          All prices listed on this website are indicative starting points for defined scope baselines. Final pricing, timeline, and deliverables are formally confirmed after scope verification and authorization.
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">4. CONTACT</h2>
        <p>
          For contractual inquiries, contact: <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-orange-accent font-mono underline">{BRAND_CONFIG.contactEmail}</a>.
        </p>
      </section>

      <Footer />
    </main>
  );
}
