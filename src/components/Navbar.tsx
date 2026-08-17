'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

interface NavbarProps {
  activeSection?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection = 'surface' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [methodologyOpen, setMethodologyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const methodologyItems = [
    { id: 'surface', label: '01 / SURFACE', href: '/#surface' },
    { id: 'test', label: '02 / TEST', href: '/#test' },
    { id: 'verify', label: '03 / VERIFY', href: '/#verify' },
    { id: 'report', label: '04 / REPORT', href: '/#report' },
    { id: 'fix', label: '05 / FIX', href: '/#fix' },
  ];

  const mainPages = [
    { id: 'services', label: 'SERVICES', href: '/services' },
    { id: 'research', label: 'RESEARCH', href: '/research' },
    { id: 'about', label: 'ABOUT', href: '/about' },
    { id: 'pricing', label: 'PRICING', href: '/#pricing' },
    { id: 'contact', label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-2.5 bg-[#08090C]/90 backdrop-blur-xl border-b border-border-color shadow-[0_10px_30px_rgba(0,0,0,0.85)]'
          : 'py-4 bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 bg-bg-surface/60 border border-border-color/80 rounded-full px-4 sm:px-6 py-2 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
          {/* Brand Logo & Name */}
          <a href="/" className="group flex items-center space-x-3 shrink-0">
            <div className="h-9 w-9 rounded-full border border-orange-accent/40 bg-bg-canvas overflow-hidden flex items-center justify-center group-hover:border-orange-accent group-hover:shadow-[0_0_14px_rgba(249,115,22,0.5)] transition-all shrink-0">
              <img
                src={BRAND_CONFIG.iconUrl}
                alt={BRAND_CONFIG.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-bold text-base tracking-wider text-text-primary group-hover:text-orange-accent transition-colors">
                  {BRAND_CONFIG.name}
                </span>
                <span className="text-[9px] font-mono text-amber-accent font-semibold tracking-widest hidden xl:inline">
                  [A KRAXX COMPANY]
                </span>
              </div>
              <span className="hidden xl:block text-[8.5px] font-mono text-text-secondary tracking-widest uppercase">
                {BRAND_CONFIG.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Modern Clean Nav Links - ZERO SCROLLBAR */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 font-mono text-[11px]">
            {/* Methodology Dropdown or Quick Jump */}
            <div
              className="relative"
              onMouseEnter={() => setMethodologyOpen(true)}
              onMouseLeave={() => setMethodologyOpen(false)}
            >
              <button
                className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  ['surface', 'test', 'verify', 'report', 'fix'].includes(activeSection)
                    ? 'text-orange-accent bg-orange-accent/10 border border-orange-accent/30 font-semibold'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                }`}
              >
                <span>METHODOLOGY</span>
                <ChevronDown className="h-3.5 w-3.5" />
              </button>

              <AnimatePresence>
                {methodologyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#101319] border border-border-color rounded-xl p-2 shadow-[0_15px_35px_rgba(0,0,0,0.9)] space-y-1 backdrop-blur-xl"
                  >
                    {methodologyItems.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        className={`block px-3 py-2 rounded-lg text-xs transition-colors ${
                          activeSection === item.id
                            ? 'text-orange-accent bg-orange-accent/15 font-bold'
                            : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                        }`}
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Main Page Links */}
            {mainPages.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-orange-accent bg-orange-accent/10 border border-orange-accent/30 font-semibold shadow-[0_0_10px_rgba(249,115,22,0.15)]'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-card'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Status Indicator */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-bg-canvas border border-border-color font-mono text-[10px] text-text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-accent animate-pulse" />
              <span>AUTHORIZED TESTING ONLY</span>
            </div>
            <a
              href="/security-assessment"
              className="btn-nw btn-nw-solid !py-2 !px-4 text-xs rounded-full shrink-0"
            >
              <span>[ REQUEST ASSESSMENT ]</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full border border-border-color bg-bg-surface text-text-secondary hover:text-text-primary shrink-0"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b border-border-color bg-[#101319]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 font-mono text-xs shadow-[0_20px_40px_rgba(0,0,0,0.9)] max-h-[85vh] overflow-y-auto"
          >
            <div className="text-[10px] text-text-muted tracking-widest uppercase border-b border-border-color pb-2 flex items-center justify-between">
              <span>{BRAND_CONFIG.name} // METHODOLOGY & PAGES</span>
              <span className="text-orange-accent font-bold">A KRAXX DIVISION</span>
            </div>

            <div className="text-[10px] text-orange-accent font-bold tracking-wider uppercase pt-1">
              :: METHODOLOGY STEPS
            </div>
            {methodologyItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 rounded hover:bg-bg-card text-text-secondary hover:text-orange-accent transition-colors pl-4"
              >
                {item.label}
              </a>
            ))}

            <div className="text-[10px] text-orange-accent font-bold tracking-wider uppercase pt-2 border-t border-border-color/50">
              :: NAVIGATION
            </div>
            {mainPages.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-1.5 rounded hover:bg-bg-card text-text-secondary hover:text-orange-accent transition-colors pl-4"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-3">
              <a
                href="/security-assessment"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-nw btn-nw-solid w-full justify-center rounded-full"
              >
                [ REQUEST SECURITY ASSESSMENT ]
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
