'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Cpu, Lock, Terminal, FileCode2, ArrowRight } from 'lucide-react';

export interface SecurityBlade {
  id: string;
  tag: string;
  name: string;
  shortName: string;
  scopeMetric: string;
  turnaround: string;
  description: string;
  features: string[];
  recommendedFor: string;
  icon: React.ReactNode;
}

const BLADES: SecurityBlade[] = [
  {
    id: 'app-sec',
    tag: 'MODULE 01',
    name: 'WEB APPLICATION SECURITY',
    shortName: 'APP SEC',
    scopeMetric: '1 AUTH ROLE / WEB APP',
    turnaround: '3-5 DAYS',
    description: 'Manual OWASP-focused deep security testing of web applications, session handling, authentication boundaries, and client-side execution vectors.',
    features: [
      'Authentication & Password Reset Logic',
      'Broken Object Level Authorization (BOLA / IDOR)',
      'Business Logic Flaws & Race Conditions',
      'Client-Side Vulnerabilities (XSS, CSRF, DOM Leakage)',
      'Session Token Security & Cookie Hardening',
      'Third-Party Dependency & CVE Audit',
    ],
    recommendedFor: 'SaaS platforms, Web apps prior to launch, client portals',
    icon: <Terminal className="h-4 w-4 text-cyan-accent" />,
  },
  {
    id: 'api-sec',
    tag: 'MODULE 02',
    name: 'API SECURITY ASSESSMENT',
    shortName: 'API SEC',
    scopeMetric: 'REST / GRAPHQL / GPRC',
    turnaround: '2-4 DAYS',
    description: 'Targeted technical audit of API endpoints, OAuth2/JWT token verification, function-level access control, and payload data exposure.',
    features: [
      'BOLA / IDOR Endpoint Verification',
      'JWT Signature & OAuth 2.0 Token Flaws',
      'Function-Level Access Control Testing',
      'Rate Limiting & Abuse Prevention',
      'Excessive Data Exposure in Payloads',
      'GraphQL Schema & Query Depth Abuse',
    ],
    recommendedFor: 'Mobile backends, Microservices, Public REST & GraphQL APIs',
    icon: <Cpu className="h-4 w-4 text-cyan-accent" />,
  },
  {
    id: 'vuln-review',
    tag: 'MODULE 03',
    name: 'SURFACE & INFRASTRUCTURE',
    shortName: 'SURFACE',
    scopeMetric: 'EXTERNAL ATTACK SURFACE',
    turnaround: '1-3 DAYS',
    description: 'Comprehensive external perimeter reconnaissance, DNS hardening checks, TLS configuration audit, and exposed admin panel discovery.',
    features: [
      'External Recon & Subdomain Enumeration',
      'Exposed Admin Interfaces & Staging Apps',
      'TLS / SSL Hardening & Cipher Security',
      'Cloud Storage Bucket & IAM Exposure',
      'Security Headers & DNS SEC (SPF/DKIM/DMARC)',
      'Network Gateway & Port Exposure Review',
    ],
    recommendedFor: 'Public IP ranges, Domain perimeters, Staging & Dev servers',
    icon: <ShieldCheck className="h-4 w-4 text-cyan-accent" />,
  },
  {
    id: 'hardening',
    tag: 'MODULE 04',
    name: 'SECURITY HARDENING & FIX',
    shortName: 'HARDENING',
    scopeMetric: 'CODE & CONFIG FIXES',
    turnaround: '2-5 DAYS',
    description: 'Hands-on remediation engineering. We assist your development team with concrete code patches, CSP policy rules, and verification retesting.',
    features: [
      'Developer-Ready Code Fix Snippets',
      'Content Security Policy (CSP) Design',
      'Auth & Session Logic Refactoring Guidance',
      'Input Sanitization & Parameter Validation',
      'Direct Technical Q&A with Founder',
      '1x Retest Verification Included',
    ],
    recommendedFor: 'Engineering teams implementing security remediation',
    icon: <FileCode2 className="h-4 w-4 text-cyan-accent" />,
  },
  {
    id: 'advisory',
    tag: 'MODULE 05',
    name: 'STRATEGIC CONSULTING',
    shortName: 'ADVISORY',
    scopeMetric: 'ON-DEMAND SECURITY',
    turnaround: 'CONTINUOUS',
    description: 'Dedicated security advisory for growing software businesses without a full-time internal security team. Threat modeling & SDLC alignment.',
    features: [
      'Architecture Threat Modeling & Design',
      'Secure SDLC Pipeline Integration',
      'Third-Party Vendor Risk Assessment',
      'Incident Response & Recovery Briefings',
      'Compliance & Security Standard Guidance',
      'Quarterly Retesting & Security Reviews',
    ],
    recommendedFor: 'Founders, CTOs, and growing engineering teams',
    icon: <Lock className="h-4 w-4 text-cyan-accent" />,
  },
];

export const BladeRack: React.FC = () => {
  const [selectedBladeId, setSelectedBladeId] = useState<string>('app-sec');
  const activeBlade = BLADES.find((b) => b.id === selectedBladeId) || BLADES[0];

  return (
    <div className="space-y-8">
      {/* 3D Vertical Blade Chassis Rack */}
      <div className="bg-bg-surface border border-border-color rounded-xl p-6 space-y-4 shadow-[0_15px_40px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border-color pb-4 gap-2">
          <div>
            <div className="eyebrow mb-1">CHASSIS RACK MODULES</div>
            <h3 className="font-heading text-xl font-bold text-text-primary">
              ENGINEERING CAPABILITIES DECK
            </h3>
          </div>
          <span className="font-mono text-[10px] text-text-secondary bg-bg-card border border-border-color px-3 py-1.5 rounded uppercase tracking-wider">
            SLOT TO INSPECT SPEC
          </span>
        </div>

        {/* Slotted 3D Blade Strip */}
        <div className="blades-container">
          {BLADES.map((blade, idx) => {
            const isSelected = blade.id === selectedBladeId;
            return (
              <button
                key={blade.id}
                onClick={() => setSelectedBladeId(blade.id)}
                aria-selected={isSelected}
                className="blade-card focus:outline-none"
              >
                <span className="font-mono text-[10px] text-text-muted font-bold">
                  0{idx + 1}
                </span>

                <span className="writing-mode-vertical rotate-180 font-heading font-bold text-xs tracking-wider text-text-secondary transition-colors duration-300">
                  {blade.shortName}
                </span>

                <div className="flex flex-col items-center gap-1.5">
                  <span className="font-mono text-[9px] text-text-muted tracking-tighter">
                    {blade.turnaround}
                  </span>
                  <div className="blade-led" />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Blade Detailed Spec Deck */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBlade.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="border border-border-color rounded-xl bg-bg-surface overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        >
          {/* Main Info Column */}
          <div className="lg:col-span-7 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-border-color space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                {activeBlade.icon}
                <span className="font-mono text-xs font-bold text-cyan-accent tracking-widest uppercase">
                  {activeBlade.tag}
                </span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-primary">
                {activeBlade.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {activeBlade.description}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="font-mono text-xs font-bold text-text-primary uppercase tracking-wider">
                AUDIT & TESTING SCOPE:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                {activeBlade.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-3 rounded bg-bg-card border border-border-color text-text-primary flex items-start gap-2 hover:border-cyan-accent/40 transition-colors"
                  >
                    <span className="text-cyan-accent font-bold">›</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Spec Column */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-bg-surface-2 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="space-y-1 border-b border-border-color pb-4">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                  TYPICAL TURNAROUND
                </span>
                <p className="font-mono text-xl font-bold text-cyan-accent">
                  {activeBlade.turnaround}
                </p>
              </div>

              <div className="space-y-1 border-b border-border-color pb-4">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                  SCOPE METRIC
                </span>
                <p className="font-mono text-sm font-bold text-text-primary">
                  {activeBlade.scopeMetric}
                </p>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">
                  RECOMMENDED FOR
                </span>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {activeBlade.recommendedFor}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border-color">
              <a
                href="#pricing"
                className="btn-nw btn-nw-solid w-full justify-center"
              >
                <span>[ VIEW PRICING SCOPE ]</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
