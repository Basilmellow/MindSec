'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bg-canvas border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Terminal className="h-6 w-6 text-cyan-accent" />
            <span className="eyebrow">ABOUT THE PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            WHO IS MINDSEC?
          </h2>
          <blockquote className="text-xl sm:text-2xl text-text-secondary max-w-3xl font-light italic border-l-2 border-cyan-accent pl-4">
            &ldquo;{BRAND_CONFIG.founder.bio}&rdquo;
          </blockquote>
        </div>

        {/* Practice & Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Practice Principles */}
          <div className="lg:col-span-7 bg-bg-surface border border-border-color rounded-xl p-8 space-y-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <div className="space-y-4">
              <span className="font-mono text-xs text-cyan-accent font-bold tracking-wider">
                CORE PRACTICE PRINCIPLES
              </span>
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                ENGINEERING-FIRST SECURITY ASSESSMENT
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                MindSec operates as a boutique cybersecurity practice. Rather than relying solely on automated vulnerability scanners that generate noise, every assessment involves hands-on manual inspection of authorization logic, attack vectors, and root architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
                <div className="bg-bg-card p-4 rounded border border-border-color space-y-1">
                  <span className="text-cyan-accent font-bold">01 / TECHNICAL DEPTH</span>
                  <p className="text-text-secondary text-[11px]">
                    Direct code & protocol analysis by experienced practitioners.
                  </p>
                </div>
                <div className="bg-bg-card p-4 rounded border border-border-color space-y-1">
                  <span className="text-cyan-accent font-bold">02 / ZERO NOISE</span>
                  <p className="text-text-secondary text-[11px]">
                    Every finding is manually verified before delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-color text-xs font-mono text-text-muted">
              TRANSPARENT METHODOLOGY & PRACTICAL REMEDIATION
            </div>
          </div>

          {/* Founder Card */}
          <div className="lg:col-span-5 bg-bg-surface-2 border border-border-color rounded-xl p-8 space-y-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <div className="space-y-4">
              <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                FOUNDED BY
              </span>

              <div className="space-y-1">
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  {BRAND_CONFIG.founder.name}
                </h3>
                <p className="font-mono text-xs text-cyan-accent font-medium">
                  {BRAND_CONFIG.founder.role}
                </p>
              </div>

              <p className="text-text-secondary text-xs leading-relaxed">
                Focused on web application security, API vulnerability discovery, and technical security engineering for modern software platforms.
              </p>

              <div className="pt-4 space-y-3 font-mono text-xs">
                <a
                  href={BRAND_CONFIG.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded bg-bg-surface border border-border-color text-text-secondary hover:text-text-primary hover:border-cyan-accent/50 transition-all"
                >
                  <Github className="h-4 w-4 text-cyan-accent" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={BRAND_CONFIG.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded bg-bg-surface border border-border-color text-text-secondary hover:text-text-primary hover:border-cyan-accent/50 transition-all"
                >
                  <Linkedin className="h-4 w-4 text-cyan-accent" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border-color text-[11px] font-mono text-text-muted">
              DIRECT CONSULTANT ACCESS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
