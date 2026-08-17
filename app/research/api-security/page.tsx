import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Cpu, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `API Security Cluster & Guides | ${BRAND_CONFIG.name} Research`,
  description: "Explore API security research articles, BOLA vs IDOR guides, JWT authentication analyses, and REST API vulnerability methodologies by KRAXXSEC.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/research/api-security`,
  },
};

export default function ApiSecurityClusterPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="research" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <a href="/research" className="hover:text-text-primary">Research</a>
            <span>/</span>
            <span className="text-orange-accent">API Security Cluster</span>
          </nav>

          <div className="eyebrow">
            <Cpu className="h-4 w-4 text-orange-accent" />
            <span>TOPICAL CLUSTER // API SECURITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            API Security Cluster & Guides
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            In-depth technical guides covering BOLA, IDOR, JWT manipulation, OAuth 2.0 flow vulnerabilities, and REST API authorization testing.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-bg-surface border border-border-color rounded-xl p-8 space-y-4">
            <span className="font-mono text-xs text-orange-accent font-bold">[ARTICLE 01]</span>
            <h2 className="font-heading font-bold text-2xl text-text-primary">
              <a href="/research/bola-vs-idor" className="hover:text-orange-accent transition-colors">
                BOLA vs IDOR: Understanding Broken Object-Level Authorization
              </a>
            </h2>
            <p className="text-sm text-text-secondary font-sans leading-relaxed">
              Detailed breakdown of Broken Object-Level Authorization (BOLA) and Insecure Direct Object References (IDOR), how they manifest in APIs, and remediation patterns.
            </p>
            <a href="/research/bola-vs-idor" className="inline-flex items-center gap-1 font-mono text-xs text-orange-accent hover:underline">
              <span>[ READ FULL ARTICLE → ]</span>
            </a>
          </article>

          <article className="bg-bg-surface border border-border-color rounded-xl p-8 space-y-4">
            <span className="font-mono text-xs text-orange-accent font-bold">[ARTICLE 02]</span>
            <h2 className="font-heading font-bold text-2xl text-text-primary">
              <a href="/research/api-security-testing-guide" className="hover:text-orange-accent transition-colors">
                What Is API Security Testing? A Practical Guide
              </a>
            </h2>
            <p className="text-sm text-text-secondary font-sans leading-relaxed">
              A practical guide to testing REST and GraphQL endpoints for authentication flaws, rate limiting bypasses, and excessive data exposure.
            </p>
            <a href="/research/api-security-testing-guide" className="inline-flex items-center gap-1 font-mono text-xs text-orange-accent hover:underline">
              <span>[ READ FULL ARTICLE → ]</span>
            </a>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
