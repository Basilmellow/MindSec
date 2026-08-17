import React from 'react';
import Metadata from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { ShieldCheck, Cpu, Terminal, FileCode2, Lock, ArrowRight, Check } from 'lucide-react';

export const metadata = {
  title: `Cybersecurity Services & Penetration Testing | ${BRAND_CONFIG.name}`,
  description: "Explore KRAXXSEC cybersecurity services: web application penetration testing, API security testing, vulnerability assessments, security audits, and security hardening.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/services`,
  },
};

const SERVICES_LIST = [
  {
    slug: "web-application-security",
    title: "Web Application Penetration Testing",
    short: "Manual OWASP-focused security testing for web applications, session boundaries, and business logic flaws.",
    icon: Terminal,
    deliverable: "Actionable PDF & Code Fix Snippets",
    starting: "Starting at $499",
  },
  {
    slug: "api-security",
    title: "API Security Testing & Penetration Testing",
    short: "Targeted technical audit of REST, GraphQL, and gRPC endpoints for BOLA/IDOR, JWT flaws, and data leakage.",
    icon: Cpu,
    deliverable: "Endpoint Vulnerability Matrix",
    starting: "Starting at $399",
  },
  {
    slug: "vulnerability-assessment",
    title: "Cybersecurity Vulnerability Assessment",
    short: "External attack-surface reconnaissance, open port auditing, and TLS/DNS configuration verification.",
    icon: ShieldCheck,
    deliverable: "Surface Risk Snapshot",
    starting: "Starting at $149",
  },
  {
    slug: "security-audit",
    title: "Cybersecurity Security Audit & Assessment",
    short: "Comprehensive architectural security review, configuration hardening audit, and compliance readiness.",
    icon: Lock,
    deliverable: "Audit Report & Strategy",
    starting: "Custom Scope",
  },
  {
    slug: "security-hardening",
    title: "Security Hardening & Remediation",
    short: "Hands-on engineering support to implement code patches, Content Security Policies, and access controls.",
    icon: FileCode2,
    deliverable: "Patch Retest & Verification",
    starting: "Included in Scope",
  },
  {
    slug: "cybersecurity-consulting",
    title: "Cybersecurity Consulting",
    short: "Strategic advisory for founders and engineering leaders without a full-time internal security team.",
    icon: ShieldCheck,
    deliverable: "Continuous Advisory",
    starting: "Monthly / Retainer",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="services" />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="eyebrow">
            <span>KRAXXSEC SERVICES // A KRAXX DIVISION</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Cybersecurity & Security Engineering Services
          </h1>
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            Hands-on vulnerability testing, API inspection, and security engineering tailored to modern technology platforms and growing development teams.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((srv) => {
            const IconComp = srv.icon;
            return (
              <article
                key={srv.slug}
                className="bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-orange-accent/60 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border-color pb-4">
                    <div className="p-2.5 rounded bg-orange-accent/15 text-orange-accent">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs text-orange-accent font-bold">
                      {srv.starting}
                    </span>
                  </div>

                  <h2 className="font-heading font-bold text-xl text-text-primary">
                    <a href={`/services/${srv.slug}`} className="hover:text-orange-accent transition-colors">
                      {srv.title}
                    </a>
                  </h2>

                  <p className="text-sm text-text-secondary leading-relaxed font-sans">
                    {srv.short}
                  </p>
                </div>

                <div className="pt-4 border-t border-border-color space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-text-muted">
                    <span>DELIVERABLE:</span>
                    <span className="text-text-primary font-medium">{srv.deliverable}</span>
                  </div>

                  <a
                    href={`/services/${srv.slug}`}
                    className="btn-nw btn-nw-ghost w-full justify-center text-xs"
                  >
                    <span>[ EXPLORE SERVICE SCOPE ]</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-16 bg-bg-surface border-t border-border-color text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="font-heading text-3xl font-bold text-text-primary uppercase">
            READY TO TEST YOUR APPLICATION SECURITY?
          </h2>
          <p className="text-text-secondary text-base max-w-xl mx-auto font-light">
            Testing begins only after defined scope agreement and explicit written authorization.
          </p>
          <div>
            <a href="/security-assessment" className="btn-nw btn-nw-solid text-sm py-3 px-6">
              [ REQUEST A SECURITY ASSESSMENT ]
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
