import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `Cloud Security Cluster & Guides | ${BRAND_CONFIG.name} Research`,
  description: "Explore cloud perimeter security, public storage bucket exposure, TLS cipher hardening, and external infrastructure vulnerability guides by KRAXXSEC.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/research/cloud-security`,
  },
};

export default function CloudSecurityClusterPage() {
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
            <span className="text-orange-accent">Cloud Security Cluster</span>
          </nav>

          <div className="eyebrow">
            <ShieldCheck className="h-4 w-4 text-orange-accent" />
            <span>TOPICAL CLUSTER // CLOUD SECURITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Cloud Security Cluster & Guides
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            External cloud perimeter hardening, public object storage risk mitigation, and TLS cipher optimization.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="bg-bg-surface border border-border-color rounded-xl p-8 space-y-4">
            <span className="font-mono text-xs text-orange-accent font-bold">[ARTICLE 01]</span>
            <h2 className="font-heading font-bold text-2xl text-text-primary">
              <a href="/research/vulnerability-assessment-vs-penetration-testing" className="hover:text-orange-accent transition-colors">
                Cybersecurity Vulnerability Assessment vs Penetration Testing
              </a>
            </h2>
            <p className="text-sm text-text-secondary font-sans leading-relaxed">
              Understanding the operational differences between automated surface scans and deep manual penetration testing for modern engineering teams.
            </p>
            <a href="/research/vulnerability-assessment-vs-penetration-testing" className="inline-flex items-center gap-1 font-mono text-xs text-orange-accent hover:underline">
              <span>[ READ FULL ARTICLE → ]</span>
            </a>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
