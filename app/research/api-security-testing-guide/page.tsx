import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { BookOpen, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `What Is API Security Testing? A Practical Guide | ${BRAND_CONFIG.name} Research`,
  description: "A practical guide to API security testing by Mohamed Basil. Learn how REST and GraphQL APIs are evaluated for authorization flaws, token manipulation, and payload risks.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/research/api-security-testing-guide`,
  },
};

export default function ApiSecurityGuideArticle() {
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
            <span className="text-orange-accent">API Security Guide</span>
          </nav>

          <div className="eyebrow">
            <BookOpen className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC RESEARCH ARTICLE // API TESTING</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary uppercase tracking-tight leading-tight">
            What Is API Security Testing? A Practical Guide
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
          API security testing is the practice of evaluating application programming interfaces (REST, GraphQL, gRPC) for security weaknesses, access control bypasses, and data leakage. Unlike traditional web applications that return rendered HTML, APIs return raw structured data (JSON/XML), exposing backend object references directly to client applications.
        </p>

        <h2 className="font-heading text-2xl font-bold text-text-primary uppercase">
          KEY VECTORS IN API SECURITY TESTING
        </h2>

        <h3 className="font-heading text-xl font-bold text-text-primary uppercase">1. AUTHENTICATION & JWT SECURITY</h3>
        <p>
          APIs frequently rely on JSON Web Tokens (JWT) or OAuth 2.0 bearer tokens. Security testing verifies whether signature verification can be bypassed (e.g. `alg: none` attack), whether token expiration is enforced, and whether secret keys can be brute-forced.
        </p>

        <h3 className="font-heading text-xl font-bold text-text-primary uppercase">2. BROKEN FUNCTION LEVEL AUTHORIZATION (BFLA)</h3>
        <p>
          BFLA occurs when regular API clients can invoke administrative endpoints (e.g. `/api/v1/admin/users/delete`) simply by guessing endpoint URLs without role validation.
        </p>

        <h3 className="font-heading text-xl font-bold text-text-primary uppercase">3. EXCESSIVE DATA EXPOSURE</h3>
        <p>
          Many API endpoints return complete database objects to the frontend, relying on the client UI to filter sensitive fields. An attacker inspecting raw API responses can extract PII, password hashes, or internal metrics.
        </p>

        <div className="mt-12 p-8 rounded-xl bg-bg-surface-2 border border-border-color flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
          <div>
            <span className="text-orange-accent font-bold block mb-1">[ RELATED KRAXXSEC SERVICE ]</span>
            <span className="text-text-primary font-heading text-lg font-bold block">API Security Testing & Penetration Testing</span>
          </div>
          <a href="/services/api-security" className="btn-nw btn-nw-solid shrink-0">
            <span>[ REQUEST API PENTEST ]</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
