'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BladeRack } from './BladeRack';

const MATRIX_ROWS = [
  'AUTHENTICATION',
  'AUTHORIZATION',
  'INPUT HANDLING',
  'BUSINESS LOGIC',
  'API SECURITY',
  'CONFIGURATION',
  'SESSION MANAGEMENT',
  'ACCESS CONTROL',
];

const MATRIX_COLUMNS = ['DISCOVER', 'TEST', 'VALIDATE', 'IMPACT'];

const SAMPLE_CELLS: Record<string, { vuln: string; severity: 'CRITICAL' | 'HIGH' | 'MEDIUM'; status: string }> = {
  'AUTHORIZATION_VALIDATE': { vuln: 'BOLA / IDOR', severity: 'HIGH', status: 'VALIDATED' },
  'AUTHENTICATION_TEST': { vuln: 'MFA Bypass', severity: 'CRITICAL', status: 'VALIDATED' },
  'API SECURITY_DISCOVER': { vuln: 'Unauthenticated Endpoint', severity: 'HIGH', status: 'DISCOVERED' },
  'INPUT HANDLING_IMPACT': { vuln: 'SQL Injection / RCE', severity: 'CRITICAL', status: 'VALIDATED' },
  'BUSINESS LOGIC_VALIDATE': { vuln: 'Payment Workflow Skew', severity: 'HIGH', status: 'VALIDATED' },
  'SESSION MANAGEMENT_TEST': { vuln: 'JWT Null Signature', severity: 'MEDIUM', status: 'VALIDATED' },
};

export const Section02Test: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<string | null>('AUTHORIZATION_VALIDATE');

  return (
    <section id="test" className="py-24 bg-bg-canvas border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-cyan-accent font-bold text-4xl sm:text-6xl">02</span>
            <span className="h-[2px] w-12 bg-cyan-accent" />
            <span className="eyebrow">METHODOLOGY & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight">
            THINK LIKE AN ATTACKER.
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl font-light">
            We systematically test the exact paths an adversary would attempt to exploit.
          </p>
        </div>

        {/* 3D Vertical Blade Rack Capabilities Component */}
        <BladeRack />

        {/* Interactive Security Matrix */}
        <div className="bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-border-color pb-4 gap-2">
            <div>
              <div className="eyebrow mb-1">EXECUTION FLOW</div>
              <h3 className="text-xl font-heading font-bold text-text-primary">
                SECURITY TESTING MATRIX GRID
              </h3>
            </div>
            <span className="nw-badge">
              ILLUSTRATIVE VULNERABILITY FLOW
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-border-color text-text-secondary">
                  <th className="py-3 px-4 w-1/3">VECTOR CATEGORY</th>
                  {MATRIX_COLUMNS.map((col) => (
                    <th key={col} className="py-3 px-4 text-center">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color/60">
                {MATRIX_ROWS.map((row) => (
                  <tr key={row} className="hover:bg-bg-card/60 transition-colors">
                    <td className="py-3 px-4 font-bold text-text-primary">{row}</td>
                    {MATRIX_COLUMNS.map((col) => {
                      const cellKey = `${row}_${col}`;
                      const sample = SAMPLE_CELLS[cellKey];
                      const isSelected = selectedCell === cellKey;

                      return (
                        <td
                          key={col}
                          onClick={() => setSelectedCell(cellKey)}
                          className="py-2 px-2 text-center"
                        >
                          <button
                            className={`w-full py-2.5 px-2 rounded border text-[11px] transition-all focus:outline-none ${
                              sample
                                ? isSelected
                                  ? 'bg-bg-surface-2 border-cyan-accent text-cyan-accent shadow-[0_0_12px_rgba(0,229,255,0.3)] font-semibold'
                                  : 'bg-bg-card border-cyan-accent/50 text-text-primary hover:border-cyan-accent'
                                : 'bg-bg-canvas/50 border-border-color text-text-muted hover:border-border-color-2'
                            }`}
                          >
                            {sample ? (
                              <div className="flex flex-col items-center space-y-0.5">
                                <span className="font-bold">{sample.vuln}</span>
                                <span className="text-[9px] text-cyan-accent">
                                  [{sample.severity}]
                                </span>
                              </div>
                            ) : (
                              <span>—</span>
                            )}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-bg-card p-4 rounded border border-border-color text-xs font-mono text-text-secondary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>
              Click highlighted cells to view vulnerability verification stages.
            </span>
            <span className="text-cyan-accent font-bold">
              STATUS: HYBRID AUTOMATED + MANUAL VALIDATION
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
