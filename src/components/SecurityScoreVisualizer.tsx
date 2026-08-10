'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sliders, Shield, RotateCcw } from 'lucide-react';

interface ScoreItem {
  id: string;
  name: string;
  value: number;
}

const INITIAL_SCORES: ScoreItem[] = [
  { id: 'app', name: 'APPLICATION SECURITY', value: 82 },
  { id: 'api', name: 'API ENDPOINT SECURITY', value: 68 },
  { id: 'identity', name: 'IDENTITY & ACCESS (IAM)', value: 74 },
  { id: 'infra', name: 'INFRASTRUCTURE HARDENING', value: 91 },
];

export const SecurityScoreVisualizer: React.FC = () => {
  const [scores, setScores] = useState<ScoreItem[]>(INITIAL_SCORES);

  const handleSliderChange = (id: string, val: number) => {
    setScores((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: val } : item))
    );
  };

  const handleReset = () => {
    setScores(INITIAL_SCORES);
  };

  const avgScore = Math.round(
    scores.reduce((acc, curr) => acc + curr.value, 0) / scores.length
  );

  return (
    <section className="py-20 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bg-surface border border-bg-border rounded-xl p-6 sm:p-8 space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-bg-border pb-4 gap-3">
            <div>
              <div className="flex items-center space-x-2">
                <Sliders className="h-4 w-4 text-cyan-accent" />
                <span className="font-mono text-xs text-cyan-accent font-bold uppercase tracking-wider">
                  SECURITY POSTURE SIMULATOR
                </span>
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mt-1">
                INTERACTIVE POSTURE MODEL
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <span className="font-mono text-[10px] text-secondary bg-bg-card border border-bg-border px-3 py-1.5 rounded uppercase">
                DEMO SECURITY POSTURE
              </span>
              <button
                onClick={handleReset}
                className="font-mono text-xs text-secondary hover:text-cyan-accent flex items-center space-x-1"
                title="Reset simulation scores"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>RESET</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Sliders Area */}
            <div className="lg:col-span-2 space-y-6">
              {scores.map((item) => (
                <div key={item.id} className="space-y-2">
                  <div className="flex justify-between font-mono text-xs">
                    <span className="text-primary font-bold">{item.name}</span>
                    <span className="text-cyan-accent font-bold">{item.value}%</span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={item.value}
                      onChange={(e) => handleSliderChange(item.id, Number(e.target.value))}
                      className="w-full h-2 bg-bg-card rounded-lg appearance-none cursor-pointer accent-cyan-accent"
                    />
                  </div>
                  {/* Text visual progress bar */}
                  <div className="font-mono text-[10px] text-secondary tracking-widest">
                    {`[${'█'.repeat(Math.floor(item.value / 6.25))}${'░'.repeat(16 - Math.floor(item.value / 6.25))}]`}
                  </div>
                </div>
              ))}
            </div>

            {/* Overall Composite Rating */}
            <div className="bg-bg-card border border-bg-border rounded-xl p-6 text-center space-y-4">
              <span className="font-mono text-xs text-secondary tracking-widest uppercase">
                COMPOSITE POSTURE SCORE
              </span>
              <div className="relative inline-flex items-center justify-center">
                <span className="text-6xl font-heading font-bold text-primary">
                  {avgScore}%
                </span>
              </div>
              <p className="font-mono text-xs text-secondary">
                {avgScore >= 80
                  ? 'HARDENED — ROBUST DEFENSES'
                  : avgScore >= 60
                  ? 'MODERATE RISK — ATTACK VECTORS PRESENT'
                  : 'HIGH RISK — IMMEDIATE REMEDIATION NEEDED'}
              </p>
              <div className="pt-2 border-t border-bg-border/60">
                <a
                  href="#contact"
                  className="inline-block font-mono text-xs text-cyan-accent hover:underline font-semibold"
                >
                  [ ASSESS YOUR ACTUAL POSTURE → ]
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
