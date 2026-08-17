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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050608]/85 backdrop-blur-xl border-b border-border-color py-3 shadow-[0_10px_30px_rgba(0,0,0,0.7)]'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Mark & Title */}
          <a href="#" className="group flex items-center space-x-3 shrink-0">
            <div className="h-8 w-8 rounded border border-orange-accent/40 bg-bg-surface flex items-center justify-center group-hover:border-orange-accent group-hover:shadow-[0_0_12px_rgba(255,87,34,0.4)] transition-all">
              <ShieldAlert className="h-4 w-4 text-orange-accent" />
            </div>
            <div>
              <span className="font-heading font-bold text-base sm:text-lg tracking-wider text-text-primary group-hover:text-orange-accent transition-colors">
                {BRAND_CONFIG.name}
              </span>
              <span className="hidden xl:inline-block ml-2 text-[10px] font-mono text-text-secondary tracking-widest uppercase border-l border-border-color pl-2">
                SECURITY ENGINEERING
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-1.5 font-mono text-[11px] overflow-x-auto">
            {BRAND_CONFIG.navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`whitespace-nowrap px-2.5 py-1.5 rounded transition-all relative hover-trace ${
                    isActive
                      ? 'text-orange-accent bg-bg-surface border border-orange-accent/30 font-semibold shadow-[0_0_10px_rgba(255,87,34,0.15)]'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-orange-accent shadow-[0_0_6px_rgba(255,87,34,0.8)]"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA & Status Pill */}
          <div className="hidden md:flex items-center space-x-3 shrink-0">
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1 rounded-full bg-bg-surface border border-border-color font-mono text-[10px] text-text-secondary">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-accent animate-pulse" />
              <span>ONLINE / READY</span>
            </div>
            <a
              href="#contact"
              className="btn-nw btn-nw-solid !py-2 !px-3.5 text-xs shrink-0"
            >
              [ REQUEST ASSESSMENT ]
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded border border-border-color bg-bg-surface text-text-secondary hover:text-text-primary shrink-0"
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
            className="lg:hidden border-b border-border-color bg-[#0D0E12]/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3 font-mono text-xs shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          >
            <div className="text-[10px] text-text-muted tracking-widest uppercase border-b border-border-color pb-2 flex items-center justify-between">
              <span>SECURITY ASSESSMENT STACK</span>
              <span className="text-orange-accent font-bold">ONLINE</span>
            </div>
            {BRAND_CONFIG.navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded hover:bg-bg-card text-text-secondary hover:text-orange-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-nw btn-nw-solid w-full justify-center"
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
