import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { ShieldCheck, Mail } from 'lucide-react';

export const metadata = {
  title: `Responsible Disclosure Policy | ${BRAND_CONFIG.name}`,
  description: `Responsible disclosure policy for ${BRAND_CONFIG.name}. Guidelines for reporting security vulnerabilities in our digital assets responsibly.`,
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/responsible-disclosure`,
  },
};

export default function ResponsibleDisclosurePage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="about" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="eyebrow">
            <ShieldCheck className="h-4 w-4 text-orange-accent" />
            <span>DISCLOSURE PROTOCOL // KRAXXSEC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Responsible Disclosure Policy
          </h1>
          <p className="font-mono text-xs text-text-muted">Last Updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-6 leading-relaxed text-text-secondary text-sm">
        <p>
          At KRAXXSEC, security is our primary focus. If you believe you have discovered a vulnerability in our website or public infrastructure, we encourage you to report it to us responsibly.
        </p>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">REPORTING GUIDELINES</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Email details of your finding to <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-orange-accent font-mono underline">{BRAND_CONFIG.contactEmail}</a>.</li>
          <li>Include steps to reproduce, HTTP requests/responses, or proof-of-concept code where applicable.</li>
          <li>Do not access, modify, or destroy data belonging to KRAXXSEC or third parties.</li>
          <li>Do not execute Denial of Service (DoS/DDoS) or social engineering attacks against our staff.</li>
          <li>Allow us reasonable time to investigate and remediate the issue prior to public disclosure.</li>
        </ul>

        <h2 className="font-heading text-xl font-bold text-text-primary uppercase">OUR COMMITMENT</h2>
        <p>
          We acknowledge receipt of valid vulnerability reports within 1 business day and work diligently to fix verified issues.
        </p>

        <div className="p-6 rounded-xl bg-bg-surface border border-border-color space-y-2 font-mono text-xs mt-8">
          <span className="text-orange-accent font-bold uppercase">SECURITY CONTACT:</span>
          <p className="text-text-primary">
            Primary email: <a href={`mailto:${BRAND_CONFIG.contactEmail}`} className="text-orange-accent underline">{BRAND_CONFIG.contactEmail}</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
