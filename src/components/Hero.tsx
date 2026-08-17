'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Terminal, FileCheck2, Clock3, Zap } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

export const Hero: React.FC = () => {
  return (
    <section className="hero-cinematic relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden">
      {/* Nodewave Atmospheric 3D Canvas Background */}
      <div aria-hidden="true" className="hero-cinematic__glow" />
      <div aria-hidden="true" className="hero-cinematic__wire hero-cinematic__wire--one" />
      <div aria-hidden="true" className="hero-cinematic__wire hero-cinematic__wire--two" />
      <div aria-hidden="true" className="hero-cinematic__panel hero-cinematic__panel--far" />
      <div aria-hidden="true" className="hero-cinematic__panel hero-cinematic__panel--near" />

      {/* Main Content Stage */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="max-w-4xl space-y-8">
          {/* Top Eyebrow Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            <Terminal className="h-4 w-4 text-orange-accent" />
            <span>{BRAND_CONFIG.name} · {BRAND_CONFIG.subtitle} · A KRAXX DIVISION</span>
          </motion.div>

          {/* Main Headline (SEO H1) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 font-heading"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary uppercase leading-[1.02]">
              Cybersecurity Testing for Modern Digital Systems
            </h1>
            <p className="text-2xl sm:text-4xl font-bold tracking-tight text-orange-accent orange-glow-text uppercase">
              "{BRAND_CONFIG.tagline}"
            </p>
          </motion.div>

          {/* Subtitle Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-text-secondary max-w-2xl font-light leading-relaxed"
          >
            {BRAND_CONFIG.heroSub} Hands-on security assessment, web application penetration testing, API vulnerability discovery, and actionable remediation engineering.
          </motion.p>

          {/* Fast Credibility Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-3 font-mono text-[11px]"
          >
            <div className="nw-badge">
              <ShieldCheck className="h-4 w-4 text-orange-accent" />
              <span>AUTHORIZED TESTING ONLY</span>
            </div>
            <div className="nw-badge">
              <FileCheck2 className="h-4 w-4 text-orange-accent" />
              <span>MANUALLY VERIFIED FINDINGS</span>
            </div>
            <div className="nw-badge">
              <Clock3 className="h-4 w-4 text-orange-accent" />
              <span>INITIAL RESPONSE WITHIN 1 BUSINESS DAY</span>
            </div>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2 font-mono text-sm"
          >
            <a
              href="/security-assessment"
              className="btn-nw btn-nw-solid justify-center"
            >
              <span>[ REQUEST SECURITY ASSESSMENT ]</span>
              <Zap className="h-4 w-4" />
            </a>
            <a
              href="/services"
              className="btn-nw btn-nw-ghost justify-center"
            >
              <span>[ VIEW TESTING SERVICES ]</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Credible Technical Stats Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full border-t border-border-color bg-bg-surface/90 backdrop-blur-xl mt-12"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border-color text-left font-mono">
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-text-primary tracking-tight">
              Manual-First<small className="text-xs text-orange-accent ml-1">Testing</small>
            </div>
            <div className="text-[11px] text-text-secondary">Logic & Access Validation</div>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-text-primary tracking-tight">
              Scope-Driven<small className="text-xs text-orange-accent ml-1">Assessments</small>
            </div>
            <div className="text-[11px] text-text-secondary">Rules of Engagement Agreed</div>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-text-primary tracking-tight">
              Actionable<small className="text-xs text-orange-accent ml-1">Reporting</small>
            </div>
            <div className="text-[11px] text-text-secondary">Code-Level Patch Guidance</div>
          </div>
          <div className="p-4 sm:p-5 space-y-1">
            <div className="text-xl font-bold text-text-primary tracking-tight">
              Retesting<small className="text-xs text-orange-accent ml-1">Available</small>
            </div>
            <div className="text-[11px] text-text-secondary">Verification of Fixed Risks</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
