'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ArrowRight, CheckCircle2, FileCode } from 'lucide-react';
import { SampleFinding } from '@/types';

const SAMPLE_FINDING: SampleFinding = {
  title: 'Broken Object-Level Authorization (BOLA / IDOR)',
  severity: 'HIGH',
  status: 'VALIDATED',
  impact: 'Attacker can mutate tenant ID parameter in API requests to access confidential records of arbitrary organizations.',
  evidence: {
    step1: 'GET /api/v1/tenant/1042/financials (Authorization: Bearer User_Tenant_101)',
    step2: 'Server performs endpoint auth token verification without resource ownership check.',
    step3: '200 OK — Sensitive financial data returned for unauthorized tenant 1042.',
  },
  remediation: 'Implement contextual server-side authorization check matching requested tenant_id against session tenant context.',
};

export const Section03Verify: React.FC = () => {
  return (
    <section id="verify" className="py-24 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-cyan-accent font-bold text-4xl sm:text-6xl">03</span>
            <span className="h-[2px] w-12 bg-cyan-accent" />
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">
              VULNERABILITY PROOF & VERIFICATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary tracking-tight">
            FINDINGS ARE NOT ENOUGH.
          </h2>
          <blockquote className="text-xl sm:text-2xl text-secondary max-w-2xl font-light italic border-l-2 border-cyan-accent pl-4">
            &ldquo;A vulnerability is only useful when its impact is understood.&rdquo;
          </blockquote>
        </div>

        {/* Interactive Finding Verification UI */}
        <div className="bg-bg-surface border border-bg-border rounded-xl p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-bg-border pb-4 gap-2">
            <div className="flex items-center space-x-3">
              <ShieldAlert className="h-5 w-5 text-cyan-accent" />
              <span className="font-mono text-xs font-bold text-primary uppercase">
                FINDING VERIFICATION ENGINE
              </span>
            </div>
            <span className="font-mono text-[10px] text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/30 px-3 py-1 rounded">
              SAMPLE FINDING [ ILLUSTRATIVE ONLY ]
            </span>
          </div>

          {/* Finding Header Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-bg-card p-4 rounded border border-bg-border space-y-1">
              <span className="text-secondary">FINDING:</span>
              <p className="text-primary font-bold text-sm truncate">{SAMPLE_FINDING.title}</p>
            </div>
            <div className="bg-bg-card p-4 rounded border border-bg-border space-y-1">
              <span className="text-secondary">SEVERITY:</span>
              <p className="text-alert-high font-bold text-sm">{SAMPLE_FINDING.severity}</p>
            </div>
            <div className="bg-bg-card p-4 rounded border border-bg-border space-y-1">
              <span className="text-secondary">STATUS:</span>
              <p className="text-cyan-accent font-bold text-sm">{SAMPLE_FINDING.status}</p>
            </div>
            <div className="bg-bg-card p-4 rounded border border-bg-border space-y-1">
              <span className="text-secondary">RETEST:</span>
              <p className="text-primary font-bold text-sm">REMEDIATION READY</p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
              REAL BUSINESS IMPACT:
            </h4>
            <p className="bg-bg-card p-4 rounded border border-bg-border text-primary text-sm leading-relaxed">
              {SAMPLE_FINDING.impact}
            </p>
          </div>

          {/* Visual Evidence Flow Diagram */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
              PROOF OF CONCEPT REPRODUCTION STEPS:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
              <div className="bg-bg-canvas p-4 rounded border border-bg-border space-y-2">
                <span className="text-cyan-accent font-bold">01 / INITIATE REQUEST</span>
                <p className="text-secondary text-[11px] font-mono break-all">
                  {SAMPLE_FINDING.evidence.step1}
                </p>
              </div>

              <div className="bg-bg-canvas p-4 rounded border border-bg-border space-y-2">
                <span className="text-alert-medium font-bold">02 / BOUNDARY CHECK</span>
                <p className="text-secondary text-[11px] font-mono">
                  {SAMPLE_FINDING.evidence.step2}
                </p>
              </div>

              <div className="bg-bg-canvas p-4 rounded border border-bg-border space-y-2">
                <span className="text-alert-high font-bold">03 / EXPOSED RESPONSE</span>
                <p className="text-secondary text-[11px] font-mono">
                  {SAMPLE_FINDING.evidence.step3}
                </p>
              </div>
            </div>
          </div>

          {/* Fix Recommendation */}
          <div className="bg-bg-card/80 p-5 rounded border border-cyan-accent/40 space-y-2">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-cyan-accent" />
              <span className="font-mono text-xs font-bold text-cyan-accent">
                ENGINEERING REMEDIATION PATH:
              </span>
            </div>
            <p className="font-mono text-xs text-primary leading-relaxed">
              {SAMPLE_FINDING.remediation}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
