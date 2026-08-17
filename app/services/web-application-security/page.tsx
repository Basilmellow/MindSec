import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Terminal, Check, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export const metadata = {
  title: `Web Application Penetration Testing | ${BRAND_CONFIG.name}`,
  description: "Web application penetration testing by KRAXXSEC. Manual deep testing for authentication logic, authorization boundaries, BOLA/IDOR, XSS, CSRF, and business logic flaws.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/services/web-application-security`,
  },
};

export default function WebAppSecurityPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="services" />

      {/* Breadcrumb Header */}
      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-text-primary">Services</a>
            <span>/</span>
            <span className="text-orange-accent">Web Application Security</span>
          </nav>

          <div className="eyebrow">
            <Terminal className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC CORE CAPABILITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Web Application Penetration Testing
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            Manual security assessments that uncover complex authorization logic bypasses, session flaws, and business-logic vulnerabilities before attackers do.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* What We Test */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary uppercase">
              THE BUSINESS PROBLEM
            </h2>
            <p className="text-text-secondary leading-relaxed font-sans text-base">
              Automated web scanners check for superficial pattern matches, but fail to comprehend application state, multi-role permission boundaries, and custom business logic. Modern web applications require manual security analysis by a dedicated practitioner who inspects how authentication state, session tokens, and API requests behave under adversarial conditions.
            </p>

            <h3 className="font-heading text-xl font-bold text-text-primary pt-4 uppercase">
              WHAT WE TEST IN YOUR WEB APP:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {[
                'Authentication & Password Reset Logic',
                'Broken Object Level Authorization (BOLA / IDOR)',
                'Function-Level Access Control Bypasses',
                'Business Logic Flaws & Race Conditions',
                'Session Token Hijacking & Cookie Hardening',
                'Cross-Site Scripting (XSS) & Injection',
                'Cross-Site Request Forgery (CSRF)',
                'File Upload Vulnerabilities & Path Traversal',
                'Server-Side Request Forgery (SSRF)',
                'Third-Party Dependency & Known CVE Audit',
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded bg-bg-surface border border-border-color flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-orange-accent shrink-0 mt-0.5" />
                  <span className="text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Scope Box */}
          <div className="lg:col-span-5 bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] font-mono text-xs">
            <div className="border-b border-border-color pb-4">
              <span className="text-text-muted text-[10px] uppercase tracking-widest">ENGAGEMENT BASELINE</span>
              <h3 className="font-heading text-xl font-bold text-text-primary mt-1">STARTING AT $499</h3>
              <p className="text-text-secondary text-xs mt-1">Indicative rate for 1 authenticated role / up to 15 views</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">METHODOLOGY</span>
                <span className="text-orange-accent font-bold">MANUAL-FIRST + OWASP</span>
              </div>
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">DELIVERABLE</span>
                <span className="text-text-primary font-bold">ACTIONABLE PDF & SNIPPETS</span>
              </div>
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">RETESTING</span>
                <span className="text-text-primary font-bold">INCLUDED IN SCOPE</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-text-muted">AUTHORIZATION</span>
                <span className="text-text-primary font-bold">WRITTEN ROE REQUIRED</span>
              </div>
            </div>

            <a href="/security-assessment" className="btn-nw btn-nw-solid w-full justify-center text-xs py-3">
              <span>[ REQUEST WEB APP ASSESSMENT ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6 border-t border-border-color pt-16">
          <h2 className="font-heading text-2xl font-bold text-text-primary uppercase">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
            <div className="bg-bg-surface p-6 rounded-lg border border-border-color space-y-2">
              <h3 className="font-bold text-text-primary text-sm">What is a web application penetration test?</h3>
              <p className="text-text-secondary leading-relaxed font-sans">
                A web application penetration test is an authorized simulated attack against your web application to discover vulnerabilities in authentication, access controls, input handling, and session logic.
              </p>
            </div>

            <div className="bg-bg-surface p-6 rounded-lg border border-border-color space-y-2">
              <h3 className="font-bold text-text-primary text-sm">Do you test authenticated multi-role applications?</h3>
              <p className="text-text-secondary leading-relaxed font-sans">
                Yes. Multi-role testing (e.g., User vs Admin vs Manager) is essential to identify Broken Object Level Authorization (BOLA/IDOR) where one user accesses another user's private data.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
