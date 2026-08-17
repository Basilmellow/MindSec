import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Lock, Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `Cybersecurity Security Audit & Assessment | ${BRAND_CONFIG.name}`,
  description: "Comprehensive cybersecurity audit and architecture assessment by KRAXXSEC. Review system configurations, permission boundaries, and compliance readiness.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/services/security-audit`,
  },
};

export default function SecurityAuditPage() {
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
            <span className="text-orange-accent">Security Audit</span>
          </nav>

          <div className="eyebrow">
            <Lock className="h-4 w-4 text-orange-accent" />
            <span>ARCHITECTURE & AUDIT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Cybersecurity Security Audit & Assessment
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            In-depth evaluation of application architecture, authentication standards, and cloud permission models for modern tech stacks.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary uppercase">
              COMPREHENSIVE SECURITY AUDITING
            </h2>
            <p className="text-text-secondary leading-relaxed font-sans text-base">
              A Security Audit evaluates your application's design, identity providers, and cloud configuration against security best practices. We review authentication flows, sensitive data storage, and third-party integrations to prevent architectural flaws before launch.
            </p>

            <h3 className="font-heading text-xl font-bold text-text-primary pt-4 uppercase">
              AUDIT INSPECTION AREAS:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {[
                'Authentication Architecture Review',
                'IAM & Role Permission Matrix Audit',
                'Data Encryption at Rest & in Transit',
                'Third-Party API & SaaS Integration Risks',
                'Cloud Infrastructure & Storage Buckets',
                'Security Headers & Cookie Policies',
                'Logging, Monitoring & Audit Trails',
                'Development Pipeline & Dependency Hygiene',
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
              <span className="text-text-muted text-[10px] uppercase tracking-widest">AUDIT ENGAGEMENT</span>
              <h3 className="font-heading text-xl font-bold text-text-primary mt-1">CUSTOM SCOPE</h3>
              <p className="text-text-secondary text-xs mt-1">Scoped based on system complexity & endpoints</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">FOCUS</span>
                <span className="text-orange-accent font-bold">ARCHITECTURE & CONFIG</span>
              </div>
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">DELIVERABLE</span>
                <span className="text-text-primary font-bold">AUDIT REPORT & STRATEGY</span>
              </div>
            </div>

            <a href="/security-assessment" className="btn-nw btn-nw-solid w-full justify-center text-xs py-3">
              <span>[ REQUEST SECURITY AUDIT ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
