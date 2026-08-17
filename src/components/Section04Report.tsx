'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, ShieldCheck, AlertTriangle } from 'lucide-react';
import { SampleReport } from '@/types';

const SAMPLE_REPORT: SampleReport = {
  executiveSummary: 'Assessment conducted across external web applications and API boundaries identified 1 Critical and 3 High severity vulnerabilities allowing unauthorized cross-tenant data access.',
  surfaceCount: {
    critical: 1,
    high: 3,
    medium: 7,
    low: 4,
  },
  findingTitle: 'Broken Access Control & Insecure Direct Object References',
  businessImpact: 'Unauthorized users may access and modify confidential financial records outside their authorized role permissions.',
  recommendation: 'Implement centralized, server-side authorization checks at every protected API resource controller boundary.',
  retestStatus: 'PENDING',
};

export const Section04Report: React.FC = () => {
  return (
    <section id="report" className="py-24 bg-bg-canvas border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-cyan-accent font-bold text-4xl sm:text-6xl">04</span>
            <span className="h-[2px] w-12 bg-cyan-accent" />
            <span className="eyebrow">EXECUTIVE & TECHNICAL REPORTING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            MAKE THE RISK UNDERSTANDABLE.
          </h2>
          <blockquote className="text-xl sm:text-2xl text-text-secondary max-w-2xl font-light italic border-l-2 border-cyan-accent pl-4">
            &ldquo;Technical findings should become strategic business decisions.&rdquo;
          </blockquote>
        </div>

        {/* Report Preview Component */}
        <div className="bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-8 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border-color pb-4 gap-3">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6 text-cyan-accent" />
              <div>
                <h3 className="font-heading font-bold text-lg text-text-primary">
                  MINDSEC SECURITY ASSESSMENT REPORT
                </h3>
                <span className="font-mono text-xs text-text-muted">DOCUMENT ID: MS-2026-REPORT-PREVIEW</span>
              </div>
            </div>
            <span className="nw-badge">
              ILLUSTRATIVE REPORT PREVIEW
            </span>
          </div>

          {/* Risk Distribution Meters */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
              ATTACK SURFACE RISK DISTRIBUTION:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono">
              <div className="bg-bg-surface-2 p-4 rounded border border-red-500/40 space-y-1">
                <span className="text-red-400 text-xs font-bold">01 / CRITICAL</span>
                <p className="text-2xl font-bold text-text-primary">{SAMPLE_REPORT.surfaceCount.critical}</p>
              </div>

              <div className="bg-bg-surface-2 p-4 rounded border border-amber-500/40 space-y-1">
                <span className="text-amber-400 text-xs font-bold">02 / HIGH</span>
                <p className="text-2xl font-bold text-text-primary">{SAMPLE_REPORT.surfaceCount.high}</p>
              </div>

              <div className="bg-bg-surface-2 p-4 rounded border border-yellow-500/40 space-y-1">
                <span className="text-yellow-400 text-xs font-bold">03 / MEDIUM</span>
                <p className="text-2xl font-bold text-text-primary">{SAMPLE_REPORT.surfaceCount.medium}</p>
              </div>

              <div className="bg-bg-surface-2 p-4 rounded border border-blue-500/40 space-y-1">
                <span className="text-blue-400 text-xs font-bold">04 / LOW</span>
                <p className="text-2xl font-bold text-text-primary">{SAMPLE_REPORT.surfaceCount.low}</p>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h4 className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
              EXECUTIVE SUMMARY:
            </h4>
            <p className="bg-bg-surface-2 p-4 rounded border border-border-color text-text-primary text-sm leading-relaxed">
              {SAMPLE_REPORT.executiveSummary}
            </p>
          </div>

          {/* Key Detailed Finding Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 font-mono text-xs">
            <div className="bg-bg-card p-5 rounded border border-border-color space-y-3">
              <div className="flex items-center space-x-2 text-amber-400 font-bold">
                <AlertTriangle className="h-4 w-4" />
                <span>BUSINESS RISK IMPACT</span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {SAMPLE_REPORT.businessImpact}
              </p>
            </div>

            <div className="bg-bg-card p-5 rounded border border-border-color space-y-3">
              <div className="flex items-center space-x-2 text-cyan-accent font-bold">
                <ShieldCheck className="h-4 w-4" />
                <span>ENGINEERING RECOMMENDATION</span>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {SAMPLE_REPORT.recommendation}
              </p>
            </div>
          </div>

          {/* Retest Status Footer */}
          <div className="pt-4 border-t border-border-color flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-text-secondary gap-2">
            <span>RETEST STATUS: <strong className="text-cyan-accent">{SAMPLE_REPORT.retestStatus}</strong></span>
            <span className="text-text-muted">FORMAT: ACTIONABLE PDF & CODE-LEVEL REMEDIATION EXAMPLES</span>
          </div>
        </div>
      </div>
    </section>
  );
};
