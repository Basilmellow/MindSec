'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_CONFIG } from '@/config/brand';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const steps = ['SURFACE', 'TEST', 'VERIFY', 'REPORT', 'FIX'];

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      onComplete();
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(onComplete, 250);
          return prev;
        }
        return prev + 1;
      });
    }, 220);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-bg-canvas text-primary font-mono px-4"
    >
      <div className="w-full max-w-md space-y-6">
        <div className="flex items-center justify-between border-b border-bg-border pb-3">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-cyan-accent animate-ping" />
            <span className="text-xs tracking-widest text-secondary uppercase">
              {BRAND_CONFIG.name} OS v2.4
            </span>
          </div>
          <button
            onClick={onComplete}
            className="text-xs text-secondary hover:text-cyan-accent underline transition-colors"
          >
            [ SKIP ]
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-secondary tracking-wide">
            INITIALIZING SECURITY LAYER...
          </p>
          <div className="h-1.5 w-full bg-bg-surface overflow-hidden rounded-full border border-bg-border">
            <motion.div
              className="h-full bg-cyan-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-secondary">
          <div className="flex items-center space-x-2">
            <span className="text-cyan-accent font-bold">0{stepIndex + 1}</span>
            <span className="text-primary tracking-widest">{steps[stepIndex]}</span>
          </div>
          <span className="text-secondary/60">
            {Math.round(((stepIndex + 1) / steps.length) * 100)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};
