'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Server, Cloud, ShieldCheck, Cpu, Share2, ChevronRight } from 'lucide-react';
import { SurfaceCategory, SurfaceItem } from '@/types';

const SURFACE_ITEMS: SurfaceItem[] = [
  {
    id: 'WEB',
    title: 'WEB APPLICATION',
    shortDesc: 'Applications, authentication flows, business logic and exposed functionality.',
    fullDesc: 'Custom web apps, customer portals, administrative dashboards, and client-side single page applications (SPAs). We test business logic flaws, input handling, and session mechanics.',
    vectors: ['Authentication Flows', 'Session Management', 'Business Logic Flaws', 'CSRF & Input Handling', 'Client-Side Security'],
  },
  {
    id: 'API',
    title: 'API ENDPOINTS',
    shortDesc: 'Endpoints, authorization boundaries, tokens and data exposure.',
    fullDesc: 'REST, GraphQL, and microservice APIs exposed to external or mobile clients. We evaluate object-level authorization (BOLA/IDOR), token management, and data leakage.',
    vectors: ['BOLA / IDOR Boundaries', 'JWT / OAuth Authorization', 'Rate Limiting & Abuse', 'Data Over-exposure', 'Broken Function Level Auth'],
  },
  {
    id: 'CLOUD',
    title: 'CLOUD INFRASTRUCTURE',
    shortDesc: 'Identity, storage, network exposure and configuration.',
    fullDesc: 'Public cloud environments (AWS, GCP, Azure). We assess cloud storage permissions, exposed administrative interfaces, IAM policies, and misconfigurations.',
    vectors: ['IAM Role Misconfigurations', 'Exposed Storage Buckets', 'Network Security Groups', 'Container Exposure', 'Metadata Service Risks'],
  },
  {
    id: 'IDENTITY',
    title: 'IDENTITY & ACCESS',
    shortDesc: 'Authentication, authorization and privilege boundaries.',
    fullDesc: 'Identity providers, single sign-on (SSO), multi-factor authentication (MFA) bypasses, and role hierarchy enforcement across systems.',
    vectors: ['SSO & SAML Integration', 'MFA Bypass Vectors', 'Privilege Escalation', 'Password Reset Logic', 'Role Hierarchy Verification'],
  },
  {
    id: 'NETWORK',
    title: 'NETWORK PERIMETER',
    shortDesc: 'Externally exposed services and infrastructure.',
    fullDesc: 'External IP address spaces, open ports, legacy administrative services, and VPN/remote access gateways reachable over public networks.',
    vectors: ['Exposed Admin Interfaces', 'Outdated Service Versions', 'TLS/SSL Hardening', 'DNS Infrastructure', 'VPN Gateways'],
  },
  {
    id: 'THIRD-PARTY',
    title: 'THIRD-PARTY INTEGRATIONS',
    shortDesc: 'External integrations and dependencies.',
    fullDesc: 'SaaS integrations, webhooks, third-party APIs, and external code dependencies that extend your attack surface beyond your codebase.',
    vectors: ['Webhook Authorization', 'SaaS API Integrations', 'Dependency Vulnerabilities', 'External Callback Security', 'Cross-Domain Trust'],
  },
];

export const Section01Surface: React.FC = () => {
  const [selectedId, setSelectedId] = useState<SurfaceCategory>('WEB');
  const activeItem = SURFACE_ITEMS.find((s) => s.id === selectedId) || SURFACE_ITEMS[0];

  return (
    <section id="surface" className="py-24 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-cyan-accent font-bold text-4xl sm:text-6xl">01</span>
            <span className="h-[2px] w-12 bg-cyan-accent" />
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">
              ATTACK SURFACE ANALYSIS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary tracking-tight">
            THE SURFACE
          </h2>
          <blockquote className="text-xl sm:text-2xl text-secondary max-w-2xl font-light italic border-l-2 border-cyan-accent pl-4">
            &ldquo;Every connected system creates an attack surface.&rdquo;
          </blockquote>
        </div>

        {/* Interactive Surface Vector Grid & Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Selection Cards */}
          <div className="lg:col-span-5 space-y-3">
            {SURFACE_ITEMS.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-5 rounded-lg border transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-bg-card border-cyan-accent shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                      : 'bg-bg-surface border-bg-border hover:border-cyan-accent/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span
                        className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                          isSelected ? 'bg-cyan-accent text-bg-canvas' : 'bg-bg-canvas text-cyan-accent'
                        }`}
                      >
                        {item.id}
                      </span>
                      <span className="font-heading font-bold text-primary text-base">
                        {item.title}
                      </span>
                    </div>
                    <p className="text-xs text-secondary line-clamp-1 pl-1">
                      {item.shortDesc}
                    </p>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 transition-transform ${
                      isSelected ? 'text-cyan-accent translate-x-1' : 'text-secondary/40 group-hover:text-primary'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Expanded Inspection Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="bg-bg-surface border border-bg-border rounded-xl p-8 h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-bg-border pb-4">
                    <div>
                      <span className="font-mono text-xs text-cyan-accent font-semibold tracking-wider">
                        TARGET SURFACE [ 01 / {activeItem.id} ]
                      </span>
                      <h3 className="text-2xl font-heading font-bold text-primary mt-1">
                        {activeItem.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs bg-cyan-accent/10 text-cyan-accent px-3 py-1 rounded border border-cyan-accent/20">
                      SCOPE FOCUS
                    </span>
                  </div>

                  <p className="text-secondary text-base leading-relaxed">
                    {activeItem.fullDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h4 className="font-mono text-xs font-bold text-primary uppercase tracking-wider">
                      PRIMARY TESTING VECTORS:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeItem.vectors.map((vector, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 bg-bg-card p-3 rounded border border-bg-border font-mono text-xs text-primary"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent" />
                          <span>{vector}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-bg-border flex items-center justify-between text-xs font-mono text-secondary">
                  <span>METHOD: AUTHORIZED MANUAL & AUTOMATED ANALYSIS</span>
                  <span className="text-cyan-accent font-medium">STATUS: READY</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
