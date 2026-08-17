import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Terminal, Shield, Github, Linkedin, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `About KRAXXSEC | Cybersecurity & Security Engineering`,
  description: "Learn about KRAXXSEC, the cybersecurity division of KRAXX. Boutique practice focused on manual application penetration testing, API security, and vulnerability discovery.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="about" />

      {/* Header */}
      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <span className="text-orange-accent">About</span>
          </nav>

          <div className="eyebrow">
            <Terminal className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC // PRACTICE OVERVIEW</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            About KRAXXSEC
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            KRAXXSEC is a specialized cybersecurity practice focused on hands-on application security, API testing, vulnerability assessments, and remediation engineering.
          </p>
        </div>
      </section>

      {/* Brand Architecture Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs text-orange-accent font-bold tracking-widest uppercase">
              BRAND ARCHITECTURE & PARENT RELATION
            </span>
            <h2 className="font-heading text-3xl font-bold text-text-primary uppercase">
              A KRAXX SECURITY DIVISION
            </h2>
            <p className="text-text-secondary leading-relaxed font-sans text-base">
              KRAXXSEC operates as the dedicated cybersecurity division of <strong>KRAXX</strong>. While our sister unit <strong>KRAXX STUDIO</strong> focuses on creative digital services, KRAXXSEC provides deep technical vulnerability discovery, API authorization audits, and security engineering for modern software platforms.
            </p>

            <div className="p-6 rounded-xl bg-bg-surface border border-border-color space-y-3 font-mono text-xs">
              <div className="text-orange-accent font-bold">KRAXX (MASTER BRAND)</div>
              <div className="pl-4 border-l border-border-color space-y-2 text-text-secondary">
                <div>└── <strong>KRAXXSEC</strong> (Cybersecurity & Security Engineering)</div>
                <div>└── <strong>KRAXX STUDIO</strong> (Creative & Digital Services)</div>
              </div>
            </div>
          </div>

          {/* Founder Box */}
          <div className="lg:col-span-5 bg-bg-surface border border-border-color rounded-xl p-8 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] font-mono text-xs">
            <div className="border-b border-border-color pb-4">
              <span className="text-text-muted text-[10px] uppercase tracking-widest">FOUNDER & PRINCIPAL</span>
              <h3 className="font-heading text-2xl font-bold text-text-primary mt-1">
                {BRAND_CONFIG.founder.name}
              </h3>
              <p className="text-orange-accent text-xs mt-1">{BRAND_CONFIG.founder.role}</p>
            </div>

            <p className="text-text-secondary leading-relaxed font-sans text-sm">
              {BRAND_CONFIG.founder.bio}
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={BRAND_CONFIG.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded bg-bg-card border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent transition-all"
              >
                <Github className="h-4 w-4 text-orange-accent" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={BRAND_CONFIG.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded bg-bg-card border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent transition-all"
              >
                <Linkedin className="h-4 w-4 text-orange-accent" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

            <a href="/about/mohamed-basil" className="btn-nw btn-nw-ghost w-full justify-center text-xs">
              <span>[ VIEW FULL FOUNDER PROFILE ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
