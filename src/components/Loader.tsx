'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
    }, 200);

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
        <div className="flex items-center justify-between border-b border-border-color pb-3">
          <div className="flex items-center space-x-2">
            <span className="h-2 w-2 rounded-full bg-orange-accent animate-ping" />
            <span className="text-xs tracking-widest text-text-secondary uppercase">
              {BRAND_CONFIG.name} // SECURITY ENGINEERING
            </span>
          </div>
          <button
            onClick={onComplete}
            className="text-xs text-text-secondary hover:text-orange-accent underline transition-colors"
          >
            [ SKIP ]
          </button>
        </div>

        <div className="space-y-2">
          <p className="text-xs text-text-secondary tracking-wide">
            INITIALIZING ASSESSMENT FRAMEWORK...
          </p>
          <div className="h-1.5 w-full bg-bg-surface overflow-hidden rounded-full border border-border-color">
            <motion.div
              className="h-full bg-orange-accent"
              initial={{ width: '0%' }}
              animate={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center space-x-2">
            <span className="text-orange-accent font-bold">0{stepIndex + 1}</span>
            <span className="text-text-primary tracking-widest">{steps[stepIndex]}</span>
          </div>
          <span className="text-text-muted">
            {Math.round(((stepIndex + 1) / steps.length) * 100)}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};
