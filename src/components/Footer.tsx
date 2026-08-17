'use client';

import React from 'react';
import { ShieldAlert, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border-color bg-bg-surface py-16 relative z-10 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-border-color">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-8 w-8 rounded border border-orange-accent/40 bg-bg-canvas flex items-center justify-center">
                <ShieldAlert className="h-4 w-4 text-orange-accent" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-text-primary tracking-wider block">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[10px] text-text-secondary tracking-widest uppercase block">
                  {BRAND_CONFIG.subtitle}
                </span>
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed max-w-md font-sans text-xs">
              {BRAND_CONFIG.shortDescription}
            </p>

            <div className="pt-2 flex items-center space-x-2">
              <span className="nw-badge !py-1 !px-2.5 text-[10px] text-orange-accent border-orange-accent/40">
                A KRAXX COMPANY
              </span>
              <span className="text-text-muted text-[10px]">
                SECURITY DIVISION
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-text-primary font-bold tracking-widest text-[11px] uppercase block border-b border-border-color pb-2">
              SERVICES & SOLUTIONS
            </span>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a href="/services/web-application-security" className="hover:text-orange-accent transition-colors flex items-center gap-1">
                  <span>Web App Security</span>
                  <ArrowUpRight className="h-3 w-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a href="/services/api-security" className="hover:text-orange-accent transition-colors flex items-center gap-1">
                  <span>API Security Testing</span>
                  <ArrowUpRight className="h-3 w-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a href="/services/vulnerability-assessment" className="hover:text-orange-accent transition-colors flex items-center gap-1">
                  <span>Vulnerability Assessment</span>
                  <ArrowUpRight className="h-3 w-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a href="/services/security-audit" className="hover:text-orange-accent transition-colors flex items-center gap-1">
                  <span>Security Audit</span>
                  <ArrowUpRight className="h-3 w-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a href="/services/security-hardening" className="hover:text-orange-accent transition-colors flex items-center gap-1">
                  <span>Security Hardening</span>
                  <ArrowUpRight className="h-3 w-3 text-text-muted" />
                </a>
              </li>
              <li>
                <a href="/security-assessment" className="text-orange-accent font-bold hover:underline flex items-center gap-1 pt-1">
                  <span>Request Assessment</span>
                  <ArrowUpRight className="h-3 w-3 text-orange-accent" />
                </a>
              </li>
            </ul>
          </div>

          {/* Research & Legal Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-text-primary font-bold tracking-widest text-[11px] uppercase block border-b border-border-color pb-2">
              PRACTICE & LEGAL
            </span>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <a href="/about" className="hover:text-orange-accent transition-colors">
                  About KRAXXSEC
                </a>
              </li>
              <li>
                <a href="/about/mohamed-basil" className="hover:text-orange-accent transition-colors">
                  Mohamed Basil (Founder)
                </a>
              </li>
              <li>
                <a href="/research" className="hover:text-orange-accent transition-colors">
                  Security Research & Guides
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-orange-accent transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-orange-accent transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/responsible-disclosure" className="hover:text-orange-accent transition-colors">
                  Responsible Disclosure
                </a>
              </li>
            </ul>

            <div className="pt-3 border-t border-border-color/50 flex items-center space-x-3">
              <a
                href={BRAND_CONFIG.founder.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-bg-canvas border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={BRAND_CONFIG.founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-bg-canvas border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${BRAND_CONFIG.contactEmail}`}
                className="p-2 rounded bg-bg-canvas border border-border-color text-text-secondary hover:text-text-primary hover:border-orange-accent transition-all"
                aria-label="Email Contact"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-text-muted">
          <div>
            © 2026 {BRAND_CONFIG.name}. A KRAXX company. All rights reserved. Authorized security testing only.
          </div>

          <div className="flex items-center space-x-4">
            <a href="/privacy" className="hover:text-text-secondary transition-colors">
              Privacy
            </a>
            <span>•</span>
            <a href="/terms" className="hover:text-text-secondary transition-colors">
              Terms
            </a>
            <span>•</span>
            <a href="/responsible-disclosure" className="hover:text-text-secondary transition-colors">
              Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
