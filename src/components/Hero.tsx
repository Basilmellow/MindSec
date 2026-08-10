'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Terminal } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-tech-grid">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl space-y-8">
          {/* Top Brand Marker */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-bg-surface border border-bg-border font-mono text-xs text-secondary"
          >
            <Terminal className="h-3.5 w-3.5 text-cyan-accent" />
            <span className="text-primary font-semibold">{BRAND_CONFIG.name}</span>
            <span className="text-bg-border">|</span>
            <span className="text-secondary">{BRAND_CONFIG.subtitle}</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2 font-heading"
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-primary uppercase">
              Find the <span className="text-cyan-accent cyan-glow-text">weakness.</span>
            </h1>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-primary uppercase">
              Fix the <span className="text-white border-b-4 border-cyan-accent">risk.</span>
            </h1>
          </motion.div>

          {/* Short Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-secondary max-w-2xl font-light leading-relaxed"
          >
            {BRAND_CONFIG.heroSub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2 font-mono text-sm"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-cyan-accent text-bg-canvas font-bold hover:bg-cyan-accent/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
            >
              [ REQUEST ASSESSMENT ]
            </a>
            <a
              href="#surface"
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded bg-bg-surface border border-bg-border text-primary hover:border-cyan-accent/50 hover:text-cyan-accent transition-all"
            >
              <span>[ EXPLORE THE METHOD ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Technical Status Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full border-t border-b border-bg-border bg-bg-surface/80 backdrop-blur mt-12 py-3 font-mono text-xs"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-6 text-secondary">
            {BRAND_CONFIG.statusStrip.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <span
                  className={`h-2 w-2 rounded-full ${
                    item.ready ? 'bg-cyan-accent animate-pulse' : 'bg-blue-accent'
                  }`}
                />
                <span className="text-secondary">{item.label}:</span>
                <span className="text-primary font-medium">{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
