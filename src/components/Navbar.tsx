'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'surface' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-bg-canvas/90 backdrop-blur-md border-b border-bg-border py-3 shadow-lg shadow-black/50'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Subtitle */}
          <a href="#" className="group flex items-center space-x-3">
            <div className="h-8 w-8 rounded border border-cyan-accent/40 bg-bg-surface flex items-center justify-center group-hover:border-cyan-accent group-hover:shadow-[0_0_10px_rgba(0,229,255,0.3)] transition-all">
              <ShieldAlert className="h-4 w-4 text-cyan-accent" />
            </div>
            <div>
              <span className="font-heading font-bold text-lg tracking-wider text-primary group-hover:text-cyan-accent transition-colors">
                {BRAND_CONFIG.name}
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-mono text-secondary tracking-widest uppercase border-l border-bg-border pl-2">
                SECURITY ENGINEERING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Journey */}
          <nav className="hidden lg:flex items-center space-x-1 font-mono text-xs">
            {BRAND_CONFIG.navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded transition-all relative ${
                    isActive
                      ? 'text-cyan-accent bg-bg-surface border border-cyan-accent/30 font-medium'
                      : 'text-secondary hover:text-primary hover:bg-bg-card'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-cyan-accent"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="#contact"
              className="font-mono text-xs text-bg-canvas font-semibold bg-cyan-accent hover:bg-cyan-accent/90 px-4 py-2 rounded transition-all shadow-[0_0_15px_rgba(0,229,255,0.25)] hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]"
            >
              [ REQUEST ASSESSMENT ]
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-bg-border bg-bg-surface text-secondary hover:text-primary"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-bg-border bg-bg-surface/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 font-mono text-sm"
          >
            <div className="text-[10px] text-secondary tracking-widest uppercase border-b border-bg-border pb-2">
              SECURITY ASSESSMENT STACK
            </div>
            {BRAND_CONFIG.navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-bg-card text-secondary hover:text-cyan-accent"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center text-xs font-bold text-bg-canvas bg-cyan-accent py-2.5 rounded"
              >
                [ REQUEST ASSESSMENT ]
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
