import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { ShieldCheck, Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `Cybersecurity Consulting & Strategic Advisory | ${BRAND_CONFIG.name}`,
  description: "Cybersecurity consulting and strategic advisory by KRAXXSEC. Threat modeling, secure SDLC alignment, and continuous security guidance for founders and engineering teams.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/services/cybersecurity-consulting`,
  },
};

export default function CybersecurityConsultingPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="services" />

      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-text-primary">Services</a>
            <span>/</span>
            <span className="text-orange-accent">Cybersecurity Consulting</span>
          </nav>

          <div className="eyebrow">
            <ShieldCheck className="h-4 w-4 text-orange-accent" />
            <span>STRATEGIC ADVISORY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            Cybersecurity Consulting
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            Dedicated security advisory for growing technology companies without a full-time internal security team. Threat modeling, architecture reviews, and SDLC alignment.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary uppercase">
              DIRECT CONSULTANT ACCESS
            </h2>
            <p className="text-text-secondary leading-relaxed font-sans text-base">
              Founders and engineering leaders often need strategic security oversight without hiring a full-time CISO. KRAXXSEC provides flexible retainer-based consulting to guide security architecture, threat modeling, vendor risk reviews, and secure SDLC integration.
            </p>

            <h3 className="font-heading text-xl font-bold text-text-primary pt-4 uppercase">
              ADVISORY CAPABILITIES:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {[
                'Architecture Threat Modeling & Design Review',
                'Secure SDLC & Pipeline Integration',
                'Third-Party Vendor Risk Assessment',
                'Pre-Launch Security Gate Audits',
                'Incident Response Guidance & Briefings',
                'Direct Consultation with Mohamed Basil',
              ].map((item, i) => (
                <div key={i} className="p-3.5 rounded bg-bg-surface border border-border-color flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-orange-accent shrink-0 mt-0.5" />
                  <span className="text-text-primary">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.4)] font-mono text-xs">
            <div className="border-b border-border-color pb-4">
              <span className="text-text-muted text-[10px] uppercase tracking-widest">ADVISORY ENGAGEMENT</span>
              <h3 className="font-heading text-xl font-bold text-text-primary mt-1">RETAINER / ON-DEMAND</h3>
              <p className="text-text-secondary text-xs mt-1">Flexible monthly consulting for tech companies</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">ACCESS</span>
                <span className="text-orange-accent font-bold">DIRECT FOUNDER ACCESS</span>
              </div>
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">FORMAT</span>
                <span className="text-text-primary font-bold">MONTHLY / PROJECT BASIS</span>
              </div>
            </div>

            <a href="/contact" className="btn-nw btn-nw-solid w-full justify-center text-xs py-3">
              <span>[ DISCUSS CONSULTING NEEDS ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
