'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MethodologyStep } from '@/types';

const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    number: '01',
    title: 'SCOPE',
    subtitle: 'Authorization & Target Boundaries',
    description: 'We align on strict target boundaries, rules of engagement, testing windows, and system ownership authorization.',
    deliverable: 'Written Rules of Engagement & Authorized Testing Scope Agreement',
  },
  {
    number: '02',
    title: 'DISCOVER',
    subtitle: 'Reconnaissance & Attack Surface Mapping',
    description: 'Passive and active discovery of exposed assets, API endpoints, web applications, and authentication mechanisms.',
    deliverable: 'Digital Attack Surface Topology & Asset Inventory Map',
  },
  {
    number: '03',
    title: 'ASSESS',
    subtitle: 'Vulnerability Analysis & Fault Injection',
    description: 'Deep manual and hybrid testing of authentication, access controls, business logic flows, and input handling.',
    deliverable: 'Preliminary Technical Findings & Raw Proofs of Concept',
  },
  {
    number: '04',
    title: 'VALIDATE',
    subtitle: 'Exploit Reproduction & Business Impact Proof',
    description: 'Every finding is manually verified to confirm true positive status and measure concrete business exposure.',
    deliverable: 'Verified Impact Proof & Root Cause Verification',
  },
  {
    number: '05',
    title: 'REPORT',
    subtitle: 'Executive Briefing & Actionable Engineering Fixes',
    description: 'Delivery of executive summary and technical report containing exact reproduction steps and code-level remediation.',
    deliverable: 'Comprehensive Security Assessment Report & Executive Briefing',
  },
  {
    number: '06',
    title: 'RETEST',
    subtitle: 'Remediation Verification & Final Sign-Off',
    description: 'Once your engineering team applies fixes, we retest modified endpoints to issue final security verification.',
    deliverable: 'Formal Retest Letter & Clean Verification Certificate',
  },
];

export const MethodologyTimeline: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const activeStep = METHODOLOGY_STEPS[activeStepIndex];

  return (
    <section className="py-24 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-4">
          <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
            EXECUTION METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary tracking-tight">
            THE MINDSEC PROCESS
          </h2>
          <p className="text-lg text-secondary max-w-2xl font-light">
            A repeatable, transparent security assessment lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-2 font-mono text-xs">
            {METHODOLOGY_STEPS.map((step, index) => {
              const isActive = activeStepIndex === index;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(index)}
                  className={`w-full text-left p-4 rounded-lg border transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-bg-card border-cyan-accent text-primary shadow-[0_0_15px_rgba(0,229,255,0.15)]'
                      : 'bg-bg-surface border-bg-border text-secondary hover:border-cyan-accent/30'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`font-bold text-sm ${
                        isActive ? 'text-cyan-accent' : 'text-secondary/60'
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="font-bold tracking-wider">{step.title}</span>
                  </div>
                  <span className="text-[10px] text-secondary">
                    {isActive ? '[ ACTIVE ]' : 'SELECT'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Detailed Display */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep.number}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="bg-bg-surface border border-bg-border rounded-xl p-8 h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between border-b border-bg-border pb-4">
                    <span className="font-mono text-3xl font-bold text-cyan-accent">
                      {activeStep.number} / {activeStep.title}
                    </span>
                    <span className="font-mono text-xs text-secondary bg-bg-card px-3 py-1 rounded border border-bg-border">
                      STAGE {activeStep.number} OF 06
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-xl text-primary">
                      {activeStep.subtitle}
                    </h3>
                    <p className="text-secondary text-sm mt-3 leading-relaxed">
                      {activeStep.description}
                    </p>
                  </div>

                  <div className="bg-bg-card p-4 rounded border border-bg-border space-y-1 font-mono text-xs">
                    <span className="text-cyan-accent font-bold">PRIMARY DELIVERABLE:</span>
                    <p className="text-primary font-medium">{activeStep.deliverable}</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-bg-border flex items-center justify-between text-xs font-mono text-secondary">
                  <span>METHODOLOGY GUIDELINE: OWASP & NIST PTES ALIGNED</span>
                  <span className="text-cyan-accent">TRANSPARENT PROCESS</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
