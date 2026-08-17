import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Github, Linkedin, Mail, ShieldCheck, Terminal } from 'lucide-react';

export const metadata = {
  title: `Mohamed Basil | Founder & Principal Cybersecurity Consultant | ${BRAND_CONFIG.name}`,
  description: "Mohamed Basil is the Founder and Principal Cybersecurity Consultant at KRAXXSEC. Specialized in web application security testing, API penetration testing, and security engineering.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/about/mohamed-basil`,
  },
};

export default function MohamedBasilProfilePage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="about" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <a href="/about" className="hover:text-text-primary">About</a>
            <span>/</span>
            <span className="text-orange-accent">Mohamed Basil</span>
          </nav>

          <div className="eyebrow">
            <Terminal className="h-4 w-4 text-orange-accent" />
            <span>FOUNDER PROFILE // PRINCIPAL CONSULTANT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Mohamed Basil
          </h1>

          <p className="text-lg sm:text-xl text-orange-accent font-mono">
            {BRAND_CONFIG.founder.role} — KRAXXSEC
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 space-y-6 font-sans">
            <h2 className="font-heading text-2xl font-bold text-text-primary uppercase">
              PRACTICE PHILOSOPHY
            </h2>
            <p className="text-text-secondary leading-relaxed text-base">
              As the Founder and Principal Cybersecurity Consultant at KRAXXSEC, Mohamed Basil leads hands-on security assessments for web applications, REST/GraphQL APIs, and digital perimeters.
            </p>
            <p className="text-text-secondary leading-relaxed text-base">
              The practice emphasizes manual-first vulnerability discovery—inspecting authorization boundaries, BOLA/IDOR flaws, session token integrity, and custom business logic that automated scanners routinely miss.
            </p>

            <h3 className="font-heading text-xl font-bold text-text-primary uppercase pt-4">
              SPECIALIZATIONS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded bg-bg-surface border border-border-color space-y-1">
                <span className="text-orange-accent font-bold">WEB APP PENTESTING</span>
                <p className="text-text-secondary text-[11px]">OWASP Top 10, authentication bypasses, session vulnerabilities.</p>
              </div>
              <div className="p-4 rounded bg-bg-surface border border-border-color space-y-1">
                <span className="text-orange-accent font-bold">API SECURITY AUDITS</span>
                <p className="text-text-secondary text-[11px]">BOLA, IDOR, JWT signature flaws, OAuth 2.0 redirection risks.</p>
              </div>
              <div className="p-4 rounded bg-bg-surface border border-border-color space-y-1">
                <span className="text-orange-accent font-bold">BUSINESS LOGIC TESTING</span>
                <p className="text-text-secondary text-[11px]">Multi-tenant isolation testing, permission escalation, race conditions.</p>
              </div>
              <div className="p-4 rounded bg-bg-surface border border-border-color space-y-1">
                <span className="text-orange-accent font-bold">REMEDIATION GUIDANCE</span>
                <p className="text-text-secondary text-[11px]">Developer-ready code fixes and patch verification retesting.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] font-mono text-xs">
            <div className="border-b border-border-color pb-4">
              <span className="text-text-muted text-[10px] uppercase tracking-widest">VERIFIED ENTITY LINKS</span>
              <h3 className="font-heading text-lg font-bold text-text-primary mt-1">DIRECT CONTACT & PROFILES</h3>
            </div>

            <div className="space-y-3">
              <a
                href={BRAND_CONFIG.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 rounded bg-bg-card border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent transition-all"
              >
                <Github className="h-4 w-4 text-orange-accent" />
                <span>GitHub: @Basilmellow</span>
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
              <a
                href={`mailto:${BRAND_CONFIG.contactEmail}`}
                className="flex items-center space-x-3 p-3 rounded bg-bg-card border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent transition-all"
              >
                <Mail className="h-4 w-4 text-orange-accent" />
                <span>{BRAND_CONFIG.contactEmail}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
