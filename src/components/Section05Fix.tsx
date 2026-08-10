'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Lock, CheckCircle, RefreshCw } from 'lucide-react';

export const Section05Fix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'BEFORE' | 'AFTER'>('AFTER');

  return (
    <section id="fix" className="py-24 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-cyan-accent font-bold text-4xl sm:text-6xl">05</span>
            <span className="h-[2px] w-12 bg-cyan-accent" />
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">
              REMEDIATION & RISK HARDENING
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary tracking-tight">
            FIX THE RISK.
          </h2>
          <blockquote className="text-xl sm:text-2xl text-secondary max-w-2xl font-light italic border-l-2 border-cyan-accent pl-4">
            &ldquo;Discovery is the beginning. Remediation is the outcome.&rdquo;
          </blockquote>
        </div>

        {/* Before / After Interactive Visualization */}
        <div className="bg-bg-surface border border-bg-border rounded-xl p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-bg-border pb-4 gap-4">
            <div>
              <span className="font-mono text-xs text-cyan-accent font-semibold tracking-wider">
                SECURITY ARCHITECTURE COMPARISON
              </span>
              <h3 className="text-xl font-heading font-bold text-primary">
                VULNERABLE VS HARDENED STATE
              </h3>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center space-x-1 bg-bg-card p-1 rounded border border-bg-border font-mono text-xs">
              <button
                onClick={() => setActiveTab('BEFORE')}
                className={`px-4 py-1.5 rounded transition-all ${
                  activeTab === 'BEFORE'
                    ? 'bg-alert-high text-bg-canvas font-bold'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                [ BEFORE ]
              </button>
              <button
                onClick={() => setActiveTab('AFTER')}
                className={`px-4 py-1.5 rounded transition-all ${
                  activeTab === 'AFTER'
                    ? 'bg-cyan-accent text-bg-canvas font-bold shadow-[0_0_10px_rgba(0,229,255,0.3)]'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                [ AFTER HARDENING ]
              </button>
            </div>
          </div>

          {/* Visual Architecture Pipeline */}
          <div className="py-8 px-4 bg-bg-canvas rounded-lg border border-bg-border relative overflow-hidden">
            {activeTab === 'BEFORE' ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-2 text-alert-high font-mono text-xs font-bold">
                  <span className="h-2 w-2 rounded-full bg-alert-high animate-ping" />
                  <span>VULNERABLE ACCESS STATE: HIGH EXPOSURE</span>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-center">
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-bg-border text-primary font-bold">
                    AUTH LAYER
                  </div>
                  <ArrowRight className="h-4 w-4 text-alert-high shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/3 p-4 rounded bg-alert-high/10 border border-alert-high text-alert-high font-bold">
                    WEAK ACCESS CONTROL (BOLA)
                  </div>
                  <ArrowRight className="h-4 w-4 text-alert-high shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-bg-border text-primary font-bold">
                    API ENDPOINT
                  </div>
                  <ArrowRight className="h-4 w-4 text-alert-high shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/4 p-4 rounded bg-alert-high/10 border border-alert-high text-alert-high font-bold">
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
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-bg-border text-primary font-bold">
                    AUTH LAYER
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-accent shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/3 p-4 rounded bg-cyan-accent/10 border border-cyan-accent text-cyan-accent font-bold">
                    SERVER-SIDE AUTHORIZATION
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-accent shrink-0 hidden md:block" />
                  <div className="w-full md:w-1/4 p-4 rounded bg-bg-surface border border-bg-border text-primary font-bold">
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
            <h4 className="font-mono text-xs font-bold text-secondary uppercase tracking-wider">
              END-TO-END REMEDIATION PIPELINE:
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono text-xs">
              <div className="bg-bg-card p-4 rounded border border-bg-border text-center space-y-1">
                <span className="text-cyan-accent font-bold">01 / ASSESS</span>
                <p className="text-secondary text-[11px]">Surface Discovery</p>
              </div>

              <div className="bg-bg-card p-4 rounded border border-bg-border text-center space-y-1">
                <span className="text-cyan-accent font-bold">02 / REPORT</span>
                <p className="text-secondary text-[11px]">Impact Proof</p>
              </div>

              <div className="bg-bg-card p-4 rounded border border-bg-border text-center space-y-1">
                <span className="text-cyan-accent font-bold">03 / REMEDIATE</span>
                <p className="text-secondary text-[11px]">Engineering Code Fix</p>
              </div>

              <div className="bg-bg-card p-4 rounded border border-cyan-accent/50 text-center space-y-1 bg-cyan-accent/5">
                <span className="text-cyan-accent font-bold">04 / RETEST</span>
                <p className="text-secondary text-[11px]">Verification Sign-off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
