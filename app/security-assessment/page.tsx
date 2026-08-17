import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { PricingSection } from '@/components/PricingSection';
import { BRAND_CONFIG } from '@/config/brand';
import { ShieldCheck, Check, ArrowRight, Lock, FileCheck2, Terminal, Cpu, Clock, RefreshCw } from 'lucide-react';

export const metadata = {
  title: `Security Assessment for Your Application | ${BRAND_CONFIG.name}`,
  description: "Request a hands-on security assessment for your web application or API with KRAXXSEC. Authorized testing, manual vulnerability discovery, clear deliverables, and retesting.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/security-assessment`,
  },
};

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'SCOPE DEFINITION & ARCHITECTURE REVIEW',
    description: 'We review your target domains, API routes, user role permissions, and environment setup to establish exact boundaries.',
    icon: Terminal,
  },
  {
    number: '02',
    title: 'AUTHORIZATION & RULES OF ENGAGEMENT',
    description: 'Testing executes exclusively upon signed Rules of Engagement (ROE) and explicit written authorization.',
    icon: Lock,
  },
  {
    number: '03',
    title: 'MANUAL-FIRST SECURITY TESTING',
    description: 'We execute manual vulnerability testing against authentication logic, BOLA/IDOR, session tokens, and business flaws.',
    icon: ShieldCheck,
  },
  {
    number: '04',
    title: 'ACTIONABLE REPORT DELIVERY',
    description: 'You receive an executive summary and detailed findings with developer-ready code fix snippets.',
    icon: FileCheck2,
  },
  {
    number: '05',
    title: 'RETESTING & VERIFICATION',
    description: 'After your engineering team deploys patches, we retest identified vulnerabilities to confirm effective risk remediation.',
    icon: RefreshCw,
  },
];

export default function SecurityAssessmentLandingPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="contact" />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <span className="text-orange-accent">Security Assessment</span>
          </nav>

          <div className="eyebrow">
            <ShieldCheck className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC CONVERSION LANDING // AUTHORIZED TESTING</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Security Assessment for Your Application
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            Hands-on manual security testing for web applications, APIs, and cloud perimeters. Identify authorization flaws and logic vulnerabilities before launch.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
            <a href="#request-form" className="btn-nw btn-nw-solid py-3 px-6">
              [ REQUEST A SECURITY ASSESSMENT ]
            </a>
            <a href="#process" className="btn-nw btn-nw-ghost py-3 px-6">
              [ DISCUSS YOUR SCOPE ]
            </a>
          </div>
        </div>
      </section>

      {/* 1. What We Assess */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 border-b border-border-color">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs text-orange-accent font-bold uppercase tracking-wider">01 // TARGET BOUNDARIES</span>
          <h2 className="font-heading text-3xl font-bold text-text-primary uppercase">WHAT WE ASSESS</h2>
          <p className="text-text-secondary font-sans text-base">
            We inspect modern software systems where vulnerabilities impact client privacy or business logic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-bg-surface border border-border-color p-6 rounded-xl space-y-4">
            <Terminal className="h-6 w-6 text-orange-accent" />
            <h3 className="font-heading font-bold text-xl text-text-primary">WEB APPLICATIONS</h3>
            <p className="text-text-secondary text-xs leading-relaxed font-sans">
              Single-page apps, SaaS platforms, multi-tenant portals, and custom web frontends.
            </p>
          </div>

          <div className="bg-bg-surface border border-border-color p-6 rounded-xl space-y-4">
            <Cpu className="h-6 w-6 text-orange-accent" />
            <h3 className="font-heading font-bold text-xl text-text-primary">API ENDPOINTS</h3>
            <p className="text-text-secondary text-xs leading-relaxed font-sans">
              REST, GraphQL, and gRPC backends, JWT token validation, BOLA/IDOR, and rate limiting.
            </p>
          </div>

          <div className="bg-bg-surface border border-border-color p-6 rounded-xl space-y-4">
            <ShieldCheck className="h-6 w-6 text-orange-accent" />
            <h3 className="font-heading font-bold text-xl text-text-primary">EXTERNAL PERIMETERS</h3>
            <p className="text-text-secondary text-xs leading-relaxed font-sans">
              Domain recon, exposed admin portals, staging environments, and cloud storage security.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Engagement Process Section with id="process" */}
      <section id="process" className="py-20 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs text-orange-accent font-bold uppercase tracking-wider">02 // ENGAGEMENT METHODOLOGY</span>
            <h2 className="font-heading text-3xl font-bold text-text-primary uppercase">TYPICAL ENGAGEMENT PROCESS</h2>
            <p className="text-text-secondary font-sans text-base">
              A structured 5-step engineering process that ensures thorough testing and clear remediation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            {PROCESS_STEPS.map((step) => {
              const IconComp = step.icon;
              return (
                <div key={step.number} className="bg-bg-card border border-border-color rounded-xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-orange-accent font-bold text-lg">{step.number}</span>
                    <IconComp className="h-5 w-5 text-text-muted" />
                  </div>
                  <h3 className="font-heading font-bold text-sm text-text-primary">{step.title}</h3>
                  <p className="text-text-secondary text-xs font-sans leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Pricing Starting Points */}
      <PricingSection />

      {/* 4. Request Assessment Form */}
      <div id="request-form">
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
