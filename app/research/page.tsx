import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Terminal, ArrowRight, BookOpen, Cpu, ShieldCheck } from 'lucide-react';

export const metadata = {
  title: `Cybersecurity Research & Guides | ${BRAND_CONFIG.name}`,
  description: "Technical security research, API authorization guides, penetration testing methodologies, and web security vulnerability analyses by KRAXXSEC.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/research`,
  },
};

const ARTICLES = [
  {
    slug: "bola-vs-idor",
    title: "BOLA vs IDOR: Understanding Broken Object-Level Authorization",
    summary: "Detailed breakdown of Broken Object-Level Authorization (BOLA) and Insecure Direct Object References (IDOR), how they manifest in APIs, and how to test for them.",
    author: "Mohamed Basil",
    date: "August 2026",
    category: "API Security",
  },
  {
    slug: "api-security-testing-guide",
    title: "What Is API Security Testing? A Practical Guide",
    summary: "A practical guide to testing REST and GraphQL endpoints for authentication flaws, rate limiting bypasses, and excessive data exposure.",
    author: "Mohamed Basil",
    date: "August 2026",
    category: "API Security",
  },
  {
    slug: "web-application-penetration-testing-guide",
    title: "Web Application Penetration Testing: What Does It Include?",
    summary: "Comprehensive walkthrough of what a manual web application security assessment covers across authentication, access control, XSS, and business logic.",
    author: "Mohamed Basil",
    date: "August 2026",
    category: "Web Security",
  },
  {
    slug: "vulnerability-assessment-vs-penetration-testing",
    title: "Cybersecurity Vulnerability Assessment vs Penetration Testing",
    summary: "Understanding the operational differences between automated surface scans and deep manual penetration testing for modern engineering teams.",
    author: "Mohamed Basil",
    date: "August 2026",
    category: "Security Strategy",
  },
];

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="research" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="eyebrow">
            <Terminal className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC TECHNICAL RESEARCH & CLUSTERS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Security Research & Technical Guides
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            In-depth technical articles, vulnerability breakdowns, and penetration testing methodologies written by principal cybersecurity consultant Mohamed Basil.
          </p>
        </div>
      </section>

      {/* Cluster Category Nav */}
      <section className="py-8 bg-bg-surface-2 border-b border-border-color font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-4">
          <span className="text-text-muted font-bold uppercase">TOPICAL CLUSTERS:</span>
          <a href="/research/api-security" className="nw-badge hover:text-orange-accent">API Security</a>
          <a href="/research/web-security" className="nw-badge hover:text-orange-accent">Web Security</a>
          <a href="/research/cloud-security" className="nw-badge hover:text-orange-accent">Cloud Security</a>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARTICLES.map((art) => (
            <article
              key={art.slug}
              className="bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-orange-accent/60 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs border-b border-border-color pb-3">
                  <span className="text-orange-accent font-bold">[{art.category}]</span>
                  <span className="text-text-muted">{art.date}</span>
                </div>

                <h2 className="font-heading font-bold text-2xl text-text-primary">
                  <a href={`/research/${art.slug}`} className="hover:text-orange-accent transition-colors">
                    {art.title}
                  </a>
                </h2>

                <p className="text-sm text-text-secondary leading-relaxed font-sans">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border-color flex items-center justify-between font-mono text-xs">
                <span className="text-text-muted">Author: <strong className="text-text-primary">{art.author}</strong></span>
                <a href={`/research/${art.slug}`} className="text-orange-accent font-bold hover:underline flex items-center gap-1">
                  <span>[ READ ARTICLE → ]</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
