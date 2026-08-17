import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BRAND_CONFIG } from '@/config/brand';
import { Cpu, Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: `API Security Testing & API Penetration Testing | ${BRAND_CONFIG.name}`,
  description: "API security testing and API penetration testing by KRAXXSEC. Focused evaluation of REST, GraphQL, and gRPC endpoints, OAuth/JWT tokens, BOLA, IDOR, and rate limiting.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/services/api-security`,
  },
};

export default function APISecurityPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="services" />

      {/* Header */}
      <section className="pt-32 pb-16 bg-bg-surface border-b border-border-color">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav aria-label="Breadcrumb" className="font-mono text-xs text-text-muted flex items-center gap-2">
            <a href="/" className="hover:text-text-primary">Home</a>
            <span>/</span>
            <a href="/services" className="hover:text-text-primary">Services</a>
            <span>/</span>
            <span className="text-orange-accent">API Security</span>
          </nav>

          <div className="eyebrow">
            <Cpu className="h-4 w-4 text-orange-accent" />
            <span>KRAXXSEC SPECIALIZED ASSESSMENT</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-heading font-bold text-text-primary uppercase tracking-tight">
            API Security Testing & API Penetration Testing
          </h1>

          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl font-light leading-relaxed">
            Targeted security testing for REST, GraphQL, and gRPC backend endpoints, API authorization logic, token signatures, and data exposure vectors.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary uppercase">
              WHY API SECURITY IS CRITICAL
            </h2>
            <p className="text-text-secondary leading-relaxed font-sans text-base">
              APIs are the backbone of modern web apps, mobile clients, and microservices. Because APIs expose raw data controllers directly, authorization failures like BOLA (Broken Object Level Authorization) allow attackers to request objects belonging to other organizations simply by changing an ID parameter.
            </p>

            <h3 className="font-heading text-xl font-bold text-text-primary pt-4 uppercase">
              API SECURITY ASSESSMENT COVERAGE:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              {[
                'BOLA / IDOR Authorization Flaws',
                'JWT Token Signature & Claims Manipulation',
                'OAuth 2.0 Flow & Redirect Security',
                'Function-Level Access Control Bypasses',
                'Excessive Data Exposure in Response Payloads',
                'Rate Limiting & Endpoint Abuse Prevention',
                'GraphQL Schema & Query Depth Abuse',
                'Mass Assignment & Parameter Tampering',
                'Input Validation & Payload Injections',
                'CORS Hardening & Header Verification',
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
              <span className="text-text-muted text-[10px] uppercase tracking-widest">API ASSESSMENT SCOPE</span>
              <h3 className="font-heading text-xl font-bold text-text-primary mt-1">STARTING AT $399</h3>
              <p className="text-text-secondary text-xs mt-1">Indicative rate for up to 25 API endpoints</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">PROTOCOLS</span>
                <span className="text-orange-accent font-bold">REST / GRAPHQL / GPRC</span>
              </div>
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">DELIVERABLE</span>
                <span className="text-text-primary font-bold">ENDPOINT RISK MATRIX</span>
              </div>
              <div className="flex justify-between border-b border-border-color pb-2">
                <span className="text-text-muted">RETESTING</span>
                <span className="text-text-primary font-bold">1X INCLUDED IN SCOPE</span>
              </div>
            </div>

            <a href="/security-assessment" className="btn-nw btn-nw-solid w-full justify-center text-xs py-3">
              <span>[ REQUEST API ASSESSMENT ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
