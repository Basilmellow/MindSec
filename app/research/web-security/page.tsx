import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Terminal, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `Web Security Cluster & Guides | ${BRAND_CONFIG.name} Research`,
  description: "Explore web security research articles, OWASP Top 10 walkthroughs, XSS/CSRF analyses, and web application penetration testing methodologies by KRAXXSEC.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/research/web-security`,
  },
};

export default function WebSecurityClusterPage() {
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
            <span className="text-orange-accent">Web Security Cluster</span>
          </nav>

          <div className="eyebrow">
            <Terminal className="h-4 w-4 text-orange-accent" />
            <span>TOPICAL CLUSTER // WEB SECURITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Web Security Cluster & Guides
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            In-depth guides covering web application security testing, authentication boundaries, session handling, and client-side execution risks.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-bg-surface border border-border-color rounded-xl p-8 space-y-4">
            <span className="font-mono text-xs text-orange-accent font-bold">[ARTICLE 01]</span>
            <h2 className="font-heading font-bold text-2xl text-text-primary">
              <a href="/research/web-application-penetration-testing-guide" className="hover:text-orange-accent transition-colors">
                Web Application Penetration Testing: What Does It Include?
              </a>
            </h2>
            <p className="text-sm text-text-secondary font-sans leading-relaxed">
              Comprehensive walkthrough of what a manual web application security assessment covers across authentication, access control, XSS, and business logic.
            </p>
            <a href="/research/web-application-penetration-testing-guide" className="inline-flex items-center gap-1 font-mono text-xs text-orange-accent hover:underline">
              <span>[ READ FULL ARTICLE → ]</span>
            </a>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
