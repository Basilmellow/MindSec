'use client';

import React, { useState } from 'react';
import { Check, ShieldCheck, Terminal, ArrowRight, Zap, Award } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

interface PricingPlan {
  id: string;
  name: string;
  startingPrice: string;
  tagline: string;
  featured?: boolean;
  description: string;
  scopeEndpoints: string;
  durationText: string;
  pipsCount: number;
  features: string[];
}

const PLANS: PricingPlan[] = [
  {
    id: 'snapshot',
    name: 'SECURITY SNAPSHOT',
    startingPrice: '$149',
    tagline: 'Starting Price',
    description: 'A focused external review for a public domain perimeter, single-page application, or launch-ready web asset.',
    scopeEndpoints: '1 Domain / Perimeter Scope',
    durationText: '1-3 Business Days',
    pipsCount: 3,
    features: [
      'External attack-surface & DNS configuration audit',
      'TLS / SSL hardening & security headers check',
      'Exposed admin portal & staging app discovery',
      'Manual verification of critical findings',
      'Concise developer-ready remediation report',
    ],
  },
  {
    id: 'webapp',
    name: 'WEB APP ASSESSMENT',
    startingPrice: '$499',
    tagline: 'Starting Price',
    featured: true,
    description: 'Deep manual security testing for a web application with defined authentication logic and user roles.',
    scopeEndpoints: '1 Auth Role / Up to 15 Views',
    durationText: '3-5 Business Days',
    pipsCount: 7,
    features: [
      'OWASP Top 10 manual deep security testing',
      'Authentication & Password Reset logic validation',
      'Broken Object Level Authorization (BOLA / IDOR)',
      'Business-logic & race condition testing',
      'Client-side execution checks (XSS, CSRF, DOM leaks)',
      'Actionable remediation code snippets & fix guidance',
    ],
  },
  {
    id: 'api',
    name: 'API SECURITY REVIEW',
    startingPrice: '$399',
    tagline: 'Starting Price',
    description: 'A targeted assessment for REST, GraphQL, or gRPC endpoints with token verification.',
    scopeEndpoints: 'Up to 25 Endpoints',
    durationText: '2-4 Business Days',
    pipsCount: 5,
    features: [
      'Endpoint authorization & BOLA/IDOR testing',
      'JWT signature & OAuth 2.0 token security checks',
      'Input validation & payload data leakage audit',
      'Rate limiting & endpoint abuse prevention',
      'Risk-prioritized technical findings report',
      '1x Retest verification included upon scope agreement',
    ],
  },
];

export const PricingSection: React.FC = () => {
  const [selectedTierIndex, setSelectedTierIndex] = useState<number>(1);
  const activePlan = PLANS[selectedTierIndex];

  return (
    <section id="pricing" className="relative border-b border-border-color bg-bg-surface py-24">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="eyebrow">
            <Terminal className="h-4 w-4 text-orange-accent" />
            <span>TRANSPARENT ENGAGEMENT PRICING</span>
          </div>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            SECURITY TESTING THAT FITS MODERN TEAMS.
          </h2>
          <p className="max-w-2xl text-lg font-light leading-relaxed text-text-secondary">
            Clear starting baseline prices for defined scopes. Every assessment includes manual validation, risk prioritization, and actionable fix guidance.
          </p>
        </div>

        {/* Interactive Scope Allocator */}
        <div className="bg-bg-card border border-border-color rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border-color pb-4 gap-2">
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-orange-accent" />
              <span className="font-mono text-xs font-bold text-orange-accent tracking-widest uppercase">
                SCOPE & CAPABILITY SELECTOR
              </span>
            </div>
            <span className="nw-badge">
              <Award className="h-3.5 w-3.5 text-amber-accent" />
              AUTHORIZED TESTING ONLY
            </span>
          </div>

          {/* Tier Stop Rail */}
          <div className="tierrail">
            {PLANS.map((plan, idx) => {
              const isSelected = selectedTierIndex === idx;
              return (
                <button
                  key={plan.id}
                  onClick={() => setSelectedTierIndex(idx)}
                  aria-selected={isSelected}
                  className="tierstop focus:outline-none"
                >
                  <div className="tierstop__d" />
                  <span className={`font-mono text-xs ${isSelected ? 'text-text-primary font-bold' : 'text-text-muted'}`}>
                    0{idx + 1} <small className="hidden sm:inline">[{plan.name.split(' ')[0]}]</small>
                  </span>
                  <span className="font-mono text-[11px] text-orange-accent font-bold">
                    Starting {plan.startingPrice}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Allocation Details for Selected Tier */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border border-border-color rounded-lg bg-bg-surface overflow-hidden">
            {/* Left Scope Breakdown */}
            <div className="lg:col-span-7 p-6 space-y-4 border-b lg:border-b-0 lg:border-r border-border-color">
              <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">
                ENGAGEMENT SCOPE: {activePlan.name}
              </span>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center border-b border-border-color pb-2">
                  <span className="text-text-secondary">SCOPE BOUNDARY</span>
                  <span className="text-text-primary font-bold">{activePlan.scopeEndpoints}</span>
                </div>

                <div className="flex justify-between items-center border-b border-border-color pb-2">
                  <span className="text-text-secondary">TYPICAL DURATION</span>
                  <span className="text-text-primary font-bold">{activePlan.durationText}</span>
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-text-secondary">TESTING DEPTH PIPS</span>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-3 w-3 rounded-sm border ${
                          i < activePlan.pipsCount
                            ? 'bg-orange-accent border-orange-accent shadow-[0_0_8px_rgba(249,115,22,0.6)]'
                            : 'bg-bg-canvas border-border-color'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Price Highlight */}
            <div className="lg:col-span-5 p-6 bg-bg-surface-2 flex flex-col justify-between space-y-4">
              <div className="space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-text-muted">STARTING AT</span>
                  <span className="font-heading text-4xl font-bold text-text-primary">
                    {activePlan.startingPrice}
                  </span>
                </div>
                <p className="font-mono text-[11px] text-text-secondary">
                  Final pricing confirmed after scope definition & authorization.
                </p>
              </div>

              <a href="/security-assessment" className="btn-nw btn-nw-solid justify-center">
                <span>[ REQUEST THIS SCOPE ]</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-xl border p-6 sm:p-8 transition-all duration-300 ${
                plan.featured
                  ? 'border-orange-accent bg-bg-surface-2 shadow-[0_0_35px_rgba(249,115,22,0.2)] scale-[1.02]'
                  : 'border-border-color bg-bg-surface hover:border-border-color-2'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-6 rounded bg-orange-accent px-3 py-1 font-mono text-[10px] font-bold tracking-wider text-bg-canvas shadow-[0_0_12px_rgba(249,115,22,0.5)]">
                  RECOMMENDED FOR SAAS & APPS
                </span>
              )}

              <div className="space-y-6">
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold tracking-wider text-orange-accent">
                    {plan.name}
                  </span>

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-xs text-text-muted">STARTING AT</span>
                      <span className="font-heading text-4xl font-bold text-text-primary">
                        {plan.startingPrice}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-text-secondary min-h-[56px]">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 border-t border-border-color pt-6 font-mono text-xs text-text-secondary">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <a
                  href="/security-assessment"
                  className={`btn-nw w-full justify-center ${
                    plan.featured ? 'btn-nw-solid' : 'btn-nw-ghost'
                  }`}
                >
                  [ DISCUSS THIS SCOPE ]
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Quote Notice */}
        <div className="flex flex-col gap-4 rounded-xl border border-border-color bg-bg-surface-2 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-4">
            <ShieldCheck className="mt-1 h-6 w-6 shrink-0 text-orange-accent" />
            <p className="text-sm leading-relaxed text-text-secondary">
              <span className="font-medium text-text-primary">Need a larger application or custom cloud security audit?</span>{' '}
              Multi-role platforms, extensive API specs, microservices, and continuous retesting are scoped individually based on target complexity.
            </p>
          </div>
          <a
            href="/contact"
            className="shrink-0 btn-nw btn-nw-ghost text-orange-accent border-orange-accent/40 hover:border-orange-accent"
          >
            [ GET CUSTOM QUOTE → ]
          </a>
        </div>

        <p className="font-mono text-[11px] leading-relaxed text-text-muted text-center sm:text-left">
          Starting prices are indicative for defined, authorized scopes. Final pricing and timelines are confirmed after scope definition and agreed Rules of Engagement. Testing begins only upon explicit written authorization.
        </p>
      </div>
    </section>
  );
};
