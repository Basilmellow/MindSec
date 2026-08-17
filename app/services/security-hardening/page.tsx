import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { FileCode2, Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `Security Hardening & Remediation | ${BRAND_CONFIG.name}`,
  description: "Security hardening and remediation services by KRAXXSEC. Developer-ready code fix snippets, CSP design, session refactoring guidance, and retest verification.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/services/security-hardening`,
  },
};

export default function SecurityHardeningPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="services" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-text-primary">Services</a>
            <span>/</span>
            <span className="text-orange-accent">Security Hardening</span>
          </nav>

          <div className="eyebrow">
            <FileCode2 className="h-4 w-4 text-orange-accent" />
            <span>REMEDIATION ENGINEERING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Security Hardening & Remediation
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            Hands-on technical guidance to help your development team fix identified security flaws with developer-ready code snippets and retest verification.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary uppercase">
              FIXING THE RISK, NOT JUST FINDING IT
            </h2>
            <p className="text-text-secondary leading-relaxed font-sans text-base">
              A security report is only valuable if your engineering team can easily implement the fixes. KRAXXSEC provides concrete remediation guidance, code snippets, Content Security Policy (CSP) headers, and direct technical Q&A to ensure vulnerabilities are eliminated safely.
            </p>

            <h3 className="font-heading text-xl font-bold text-text-primary pt-4 uppercase">
              HARDENING & FIX CAPABILITIES:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {[
                'Developer-Ready Fix Snippets & Code Examples',
                'Content Security Policy (CSP) Policy Design',
                'Authentication & Session Refactoring Advice',
                'Input Sanitization & Parameter Validation',
                'Security Headers Configuration (HSTS, Referrer)',
                '1x Retest Verification Included in Scope',
                'Direct Technical Consultation with Mohamed Basil',
                'Patch Verification & Final Sign-Off',
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded bg-bg-surface border border-border-color flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-orange-accent shrink-0 mt-0.5" />
                  <span className="text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] font-mono text-xs">
            <div className="border-b border-border-color pb-4">
              <span className="text-text-muted text-[10px] uppercase tracking-widest">REMEDIATION SUPPORT</span>
              <h3 className="font-heading text-xl font-bold text-text-primary mt-1">INCLUDED IN SCOPE</h3>
              <p className="text-text-secondary text-xs mt-1">Provided alongside Web App & API Assessment reports</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">FORMAT</span>
                <span className="text-orange-accent font-bold">CODE SNIPPETS & RULES</span>
              </div>
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">RETEST</span>
                <span className="text-text-primary font-bold">VERIFICATION INCLUDED</span>
              </div>
            </div>

            <a href="/security-assessment" className="btn-nw btn-nw-solid w-full justify-center text-xs py-3">
              <span>[ REQUEST SECURITY ASSESSMENT ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
