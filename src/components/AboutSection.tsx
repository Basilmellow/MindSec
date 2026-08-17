'use client';

import React from 'react';
import { Github, Linkedin, Terminal, Shield, ArrowRight } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bg-canvas border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Terminal className="h-6 w-6 text-orange-accent" />
            <span className="eyebrow">ABOUT THE PRACTICE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight uppercase">
            WHO IS KRAXXSEC?
          </h2>
          <blockquote className="text-xl sm:text-2xl text-text-secondary max-w-3xl font-light italic border-l-2 border-orange-accent pl-4">
            &ldquo;{BRAND_CONFIG.founder.bio}&rdquo;
          </blockquote>
        </div>

        {/* Practice & Founder Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Practice Principles */}
          <div className="lg:col-span-7 bg-bg-surface border border-border-color rounded-xl p-8 space-y-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-orange-accent" />
                <span className="font-mono text-xs text-orange-accent font-bold tracking-wider uppercase">
                  A KRAXX SECURITY DIVISION
                </span>
              </div>
              <h3 className="font-heading font-bold text-2xl text-text-primary">
                BOUTIQUE SECURITY ENGINEERING & ASSESSMENT
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                KRAXXSEC operates as a boutique cybersecurity practice within the KRAXX company ecosystem. Rather than relying on automated vulnerability scanners that generate false positives, every assessment involves hands-on manual inspection of authorization logic, attack vectors, and root application architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs pt-2">
                <div className="bg-bg-card p-4 rounded border border-border-color space-y-1">
                  <span className="text-orange-accent font-bold">01 / TECHNICAL DEPTH</span>
                  <p className="text-text-secondary text-[11px]">
                    Direct analysis by a dedicated security practitioner.
                  </p>
                </div>
                <div className="bg-bg-card p-4 rounded border border-border-color space-y-1">
                  <span className="text-orange-accent font-bold">02 / MANUALLY VERIFIED</span>
                  <p className="text-text-secondary text-[11px]">
                    Every finding is manually validated before inclusion in your report.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-color flex items-center justify-between font-mono text-xs">
              <span className="text-text-muted">TRANSPARENT METHODOLOGY & PRACTICAL REMEDIATION</span>
              <a href="/about" className="text-orange-accent font-bold hover:underline flex items-center gap-1">
                <span>[ READ PRACTICE OVERVIEW → ]</span>
              </a>
            </div>
          </div>

          {/* Founder Card */}
          <div className="lg:col-span-5 bg-bg-surface-2 border border-border-color rounded-xl p-8 space-y-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <div className="space-y-4">
              <span className="font-mono text-xs text-text-muted tracking-widest uppercase">
                FOUNDER & PRINCIPAL CONSULTANT
              </span>

              <div className="space-y-1">
                <h3 className="font-heading font-bold text-2xl text-text-primary">
                  {BRAND_CONFIG.founder.name}
                </h3>
                <p className="font-mono text-xs text-orange-accent font-medium">
                  {BRAND_CONFIG.founder.role}
                </p>
              </div>

              <p className="text-text-secondary text-xs leading-relaxed">
                Focused on web application security, API vulnerability discovery, business-logic testing, and security engineering for growing technology companies.
              </p>

              <div className="pt-4 space-y-3 font-mono text-xs">
                <a
                  href={BRAND_CONFIG.founder.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded bg-bg-surface border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent/50 transition-all"
                >
                  <Github className="h-4 w-4 text-orange-accent" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={BRAND_CONFIG.founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 rounded bg-bg-surface border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent/50 transition-all"
                >
                  <Linkedin className="h-4 w-4 text-orange-accent" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border-color flex items-center justify-between text-[11px] font-mono text-text-muted">
              <span>DIRECT CONSULTANT ACCESS</span>
              <a href="/about/mohamed-basil" className="text-orange-accent font-bold hover:underline">
                [ PROFILE ]
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
