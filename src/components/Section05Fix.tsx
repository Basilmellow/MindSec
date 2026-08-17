'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Lock, CheckCircle, RefreshCw } from 'lucide-react';

export const Section05Fix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BEFORE' | 'AFTER'>('AFTER');

  return (
    <section id="fix" className="py-24 bg-bg-canvas border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-cyan-accent font-bold text-4xl sm:text-6xl">05</span>
            <span className="h-[2px] w-12 bg-cyan-accent" />
            <span className="eyebrow">REMEDIATION & RISK HARDENING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            FIX THE RISK.
          </h2>
          <blockquote className="text-xl sm:text-2xl text-text-secondary max-w-2xl font-light italic border-l-2 border-cyan-accent pl-4">
            &ldquo;Discovery is the beginning. Remediation is the outcome.&rdquo;
          </blockquote>
        </div>

        {/* Before / After Interactive Visualization */}
        <div className="bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-8 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border-color pb-4 gap-4">
            <div>
              <div className="eyebrow mb-1">COMPARISON PIPELINE</div>
              <h3 className="text-xl font-heading font-bold text-text-primary">
                VULNERABLE VS HARDENED STATE
              </h3>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center space-x-1 bg-bg-surface-2 p-1 rounded border border-border-color font-mono text-xs">
              <button
                onClick={() => setActiveTab('BEFORE')}
                className={`px-4 py-1.5 rounded transition-all focus:outline-none ${
                  activeTab === 'BEFORE'
                    ? 'bg-amber-500 text-bg-canvas font-bold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                [ BEFORE ]
              </button>
              <button
                onClick={() => setActiveTab('AFTER')}
                className={`px-4 py-1.5 rounded transition-all focus:outline-none ${
                  activeTab === 'AFTER'
                    ? 'bg-cyan-accent text-bg-canvas font-bold shadow-[0_0_12px_rgba(0,229,255,0.4)]'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                [ AFTER HARDENING ]
              </button>
            </div>
          </div>

          {/* Visual Architecture Pipeline */}
          <div className="py-8 px-4 bg-bg-card rounded-lg border border-border-color relative overflow-hidden">
            {activeTab === 'BEFORE' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 text-amber-400 font-mono text-xs font-bold">
                  <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
                  <span>VULNERABLE ACCESS STATE: HIGH EXPOSURE</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center">
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-border-color text-text-primary font-bold">
                    AUTH LAYER
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-400 shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/3 p-4 rounded bg-amber-500/10 border border-amber-500/50 text-amber-400 font-bold">
                    WEAK ACCESS CONTROL (BOLA)
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-400 shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-border-color text-text-primary font-bold">
                    API ENDPOINT
                  </div>
                  <ArrowRight className="h-4 w-4 text-amber-400 shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/4 p-4 rounded bg-amber-500/10 border border-amber-500/50 text-amber-400 font-bold">
                    UNAUTHORIZED DATA EXPOSURE
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 text-cyan-accent font-mono text-xs font-bold">
                  <span className="h-2 w-2 rounded-full bg-cyan-accent animate-pulse" />
                  <span>HARDENED STATE: VALIDATED ACCESS CONTROLS ACTIVE</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center">
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-border-color text-text-primary font-bold">
                    AUTH LAYER
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-accent shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/3 p-4 rounded bg-cyan-accent/10 border border-cyan-accent text-cyan-accent font-bold">
                    SERVER-SIDE AUTHORIZATION
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-accent shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-border-color text-text-primary font-bold">
                    API ENDPOINT
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-accent shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/4 p-4 rounded bg-cyan-accent/10 border border-cyan-accent text-cyan-accent font-bold">
                    VALIDATED DATA BOUNDARY
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Remediation Lifecycle Bar */}
          <div className="space-y-3 pt-4">
            <h4 className="font-mono text-xs font-bold text-text-secondary uppercase tracking-wider">
              END-TO-END REMEDIATION PIPELINE:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              <div className="bg-bg-surface-2 p-4 rounded border border-border-color text-center space-y-1">
                <span className="text-cyan-accent font-bold">01 / ASSESS</span>
                <p className="text-text-secondary text-[11px]">Surface Discovery</p>
              </div>

              <div className="bg-bg-surface-2 p-4 rounded border border-border-color text-center space-y-1">
                <span className="text-cyan-accent font-bold">02 / REPORT</span>
                <p className="text-text-secondary text-[11px]">Impact Proof</p>
              </div>

              <div className="bg-bg-surface-2 p-4 rounded border border-border-color text-center space-y-1">
                <span className="text-cyan-accent font-bold">03 / REMEDIATE</span>
                <p className="text-text-secondary text-[11px]">Engineering Code Fix</p>
              </div>

              <div className="bg-bg-surface-2 p-4 rounded border border-cyan-accent/50 text-center space-y-1 bg-cyan-accent/5">
                <span className="text-cyan-accent font-bold">04 / RETEST</span>
                <p className="text-text-secondary text-[11px]">Verification Sign-off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
