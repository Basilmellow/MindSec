import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `Web Application Penetration Testing: What Does It Include? | ${BRAND_CONFIG.name} Research`,
  description: "Comprehensive guide by Mohamed Basil explaining the methodology, scope, and deliverables of web application penetration testing for SaaS platforms.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/research/web-application-penetration-testing-guide`,
  },
};

export default function WebPentestGuideArticle() {
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
            <span className="text-orange-accent">Web Pentesting Guide</span>
          </nav>

          <div className="eyebrow">
            <BookOpen className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC RESEARCH ARTICLE // WEB SECURITY</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary uppercase tracking-tight leading-tight">
            Web Application Penetration Testing: What Does It Include?
          </h1>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-text-muted border-t border-border-color pt-4">
            <span>Author: <a href="/about/mohamed-basil" className="text-orange-accent font-bold hover:underline">Mohamed Basil</a></span>
            <span>•</span>
            <span>Published: August 2026</span>
            <span>•</span>
            <span>Organization: KRAXXSEC</span>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 font-sans space-y-8 leading-relaxed text-text-secondary text-base">
        <p>
          A web application penetration test is an in-depth security assessment designed to identify vulnerabilities in web applications before hostile threat actors exploit them. At KRAXXSEC, web penetration testing is manual-first, focusing on complex business-logic flaws and permission boundaries.
        </p>

        <h2 className="font-heading text-2xl font-bold text-text-primary uppercase">
          STAGES OF A WEB PENETRATION TEST
        </h2>

        <h3 className="font-heading text-xl font-bold text-text-primary uppercase">1. RECONNAISSANCE & MAPPING</h3>
        <p>
          Mapping client-side components, API endpoints, authentication flows, user roles, and third-party dependencies.
        </p>

        <h3 className="font-heading text-xl font-bold text-text-primary uppercase">2. AUTHENTICATION & ACCESS CONTROL TESTING</h3>
        <p>
          Testing multi-factor authentication bypasses, password reset workflows, session token security, and cross-tenant privilege escalation (BOLA/IDOR).
        </p>

        <h3 className="font-heading text-xl font-bold text-text-primary uppercase">3. CLIENT-SIDE & INPUT VALIDATION</h3>
        <p>
          Testing for Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Server-Side Request Forgery (SSRF), file upload vulnerabilities, and SQL/NoSQL injection vectors.
        </p>

        <h3 className="font-heading text-xl font-bold text-text-primary uppercase">4. REPORTING & REMEDIATION VERIFICATION</h3>
        <p>
          Delivering an executive summary and detailed engineering findings with developer-ready code fix snippets, followed by retesting.
        </p>

        <div className="mt-12 p-8 rounded-xl bg-bg-surface-2 border border-border-color flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-orange-accent font-bold block mb-1">[ RELATED KRAXXSEC SERVICE ]</span>
            <span className="text-text-primary font-heading text-lg font-bold block">Web Application Penetration Testing</span>
          </div>
          <a href="/services/web-application-security" className="btn-nw btn-nw-solid shrink-0">
            <span>[ VIEW WEB PENTEST SERVICE ]</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
