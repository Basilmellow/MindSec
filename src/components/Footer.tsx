'use client';

import React, { useState } from 'react';
import { ShieldAlert } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';
import { PolicyModal } from './PolicyModal';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | 'disclosure' | 'policy' | null>(null);

  return (
    <footer className="bg-bg-canvas border-t border-border-color py-16 font-mono text-xs text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="h-7 w-7 rounded border border-cyan-accent/40 bg-bg-surface flex items-center justify-center">
                <ShieldAlert className="h-4 w-4 text-cyan-accent" />
              </div>
              <span className="font-heading font-bold text-lg text-text-primary tracking-wider">
                {BRAND_CONFIG.name}
              </span>
            </div>
            <p className="text-text-secondary font-mono text-xs">
              {BRAND_CONFIG.subtitle}
            </p>
            <p className="text-text-primary font-heading font-semibold text-sm">
              &ldquo;{BRAND_CONFIG.tagline}&rdquo;
            </p>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-text-primary font-bold tracking-wider uppercase block">
              SECURITY STACK NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {BRAND_CONFIG.navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="hover:text-cyan-accent transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal Col */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-text-primary font-bold tracking-wider uppercase block">
              LEGAL & POLICIES
            </span>
            <div className="space-y-2 text-xs">
              <button
                onClick={() => setModalType('policy')}
                className="block hover:text-cyan-accent transition-colors text-left"
              >
                Security Testing Policy
              </button>
              <button
                onClick={() => setModalType('disclosure')}
                className="block hover:text-cyan-accent transition-colors text-left"
              >
                Responsible Disclosure
              </button>
              <button
                onClick={() => setModalType('privacy')}
                className="block hover:text-cyan-accent transition-colors text-left"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setModalType('terms')}
                className="block hover:text-cyan-accent transition-colors text-left"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="pt-8 border-t border-border-color flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>&copy; 2026 {BRAND_CONFIG.name}. All rights reserved.</span>
          <span className="nw-badge !text-cyan-accent">
            AUTHORIZED SECURITY TESTING ONLY.
          </span>
        </div>
      </div>

      <PolicyModal
        isOpen={!!modalType}
        type={modalType}
        onClose={() => setModalType(null)}
      />
    </footer>
  );
};
