'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Code, Server, Wrench, FileText, ChevronDown } from 'lucide-react';
import { MatrixCell, ServiceModule } from '@/types';

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

const SERVICES: ServiceModule[] = [
  {
    id: 'app',
    tag: 'APPLICATION',
    title: 'WEB APPLICATION SECURITY',
    subtitle: 'Comprehensive deep testing of modern web applications.',
    description: 'We analyze your web applications for vulnerabilities in authentication, authorization boundaries, business logic, session handling, and client-side code execution.',
    items: [
      'Authentication & Password Reset Logic',
      'Broken Object Level Authorization (BOLA/IDOR)',
      'Business Logic Flaws & Race Conditions',
      'Client-Side Vulnerabilities (XSS, CSRF, DOM Leakage)',
      'Session Management & Cookie Security',
      'Third-Party Library Security Audit',
    ],
  },
  {
    id: 'api',
    tag: 'API',
    title: 'API SECURITY TESTING',
    subtitle: 'Deep technical assessment of REST, GraphQL, and microservice APIs.',
    description: 'APIs are the core data conduits of modern platforms. We audit endpoint authorization, rate limits, token validation, and data over-exposure.',
    items: [
      'BOLA / IDOR Endpoint Verification',
      'JWT / OAuth 2.0 Token Flaws',
      'Authentication & Function-Level Authorization',
      'Rate Limiting & Denial-of-Service Defense',
      'Excessive Data Exposure in API Payloads',
      'GraphQL Schema & Query Depth Abuse',
    ],
  },
  {
    id: 'infra',
    tag: 'INFRASTRUCTURE',
    title: 'VULNERABILITY ASSESSMENT',
    subtitle: 'External perimeter and cloud environment risk evaluation.',
    description: 'Identify and remediate exposed services, outdated server software, cloud IAM misconfigurations, and vulnerable perimeter gateways.',
    items: [
      'External Attack Surface Reconnaissance',
      'Exposed Administrative Interfaces',
      'TLS / SSL Hardening & Cipher Security',
      'Cloud Storage Bucket & IAM Security',
      'Network Gateway & Open Port Inspection',
      'Outdated Software & CVE Mapping',
    ],
  },
  {
    id: 'engineering',
    tag: 'ENGINEERING',
    title: 'SECURITY HARDENING',
    subtitle: 'Turn vulnerability findings into concrete code fixes.',
    description: 'We do not just leave you with a report. We work with engineering teams to design code-level remediation and implement secure architectural controls.',
    items: [
      'Remediation Guidance & Code Examples',
      'Security Header & Content Security Policy (CSP)',
      'Authentication & Authorization RefOC',
      'Input Sanitization & Parameter Validation',
      'Developer Security Briefings',
      'Verification Retesting',
    ],
  },
  {
    id: 'advisory',
    tag: 'ADVISORY',
    title: 'SECURITY CONSULTING',
    subtitle: 'On-demand security leadership for growing platforms.',
    description: 'Strategic security advisory for organizations without a dedicated full-time internal security team. Threat modeling, architecture reviews, and policy design.',
    items: [
      'Architecture Threat Modeling',
      'Secure Development Lifecycle (SDLC) Design',
      'Vendor & Third-Party Risk Reviews',
      'Incident Preparedness Guidance',
      'Security Policy & Compliance Alignment',
      'Executive Security Briefings',
    ],
  },
];

export const Section02Test: React.FC = () => {
  const [selectedCell, setSelectedCell] = useState<string | null>('AUTHORIZATION_VALIDATE');
  const [openServiceId, setOpenServiceId] = useState<string>('app');

  return (
    <section id="test" className="py-24 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-cyan-accent font-bold text-4xl sm:text-6xl">02</span>
            <span className="h-[2px] w-12 bg-cyan-accent" />
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">
              METHODOLOGY & MATRIX
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary tracking-tight">
            THINK LIKE AN ATTACKER.
          </h2>
          <p className="text-xl text-secondary max-w-2xl font-light">
            We test the paths an attacker would take.
          </p>
        </div>

        {/* Interactive Testing Matrix Grid */}
        <div className="bg-bg-surface border border-bg-border rounded-xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-bg-border pb-4 gap-2">
            <div>
              <span className="font-mono text-xs text-cyan-accent font-semibold tracking-wider">
                SECURITY TESTING MATRIX
              </span>
              <h3 className="text-xl font-heading font-bold text-primary">
                EXECUTION FLOW & VULNERABILITY PHASES
              </h3>
            </div>
            <span className="font-mono text-[10px] text-secondary bg-bg-card border border-bg-border px-3 py-1.5 rounded uppercase">
              ILLUSTRATIVE EXAMPLE
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-xs border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-bg-border text-secondary">
                  <th className="py-3 px-4 w-1/3">VECTOR CATEGORY</th>
                  {MATRIX_COLUMNS.map((col) => (
                    <th key={col} className="py-3 px-4 text-center">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-bg-border/60">
                {MATRIX_ROWS.map((row) => (
                  <tr key={row} className="hover:bg-bg-card/40 transition-colors">
                    <td className="py-3 px-4 font-bold text-primary">{row}</td>
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
                            className={`w-full py-2 px-2 rounded border text-[11px] transition-all ${
                              sample
                                ? isSelected
                                  ? 'bg-bg-card border-cyan-accent text-cyan-accent shadow-[0_0_10px_rgba(0,229,255,0.2)] font-semibold'
                                  : 'bg-bg-canvas border-cyan-accent/40 text-primary hover:border-cyan-accent'
                                : 'bg-bg-canvas/40 border-bg-border/40 text-secondary/40 hover:border-bg-border'
                            }`}
                          >
                            {sample ? (
                              <div className="flex flex-col items-center space-y-0.5">
                                <span className="font-bold">{sample.vuln}</span>
                                <span className="text-[9px] text-cyan-accent/80">
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

          <div className="bg-bg-card p-4 rounded border border-bg-border text-xs font-mono text-secondary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <span>
              Click highlighted cells to see illustrative vulnerability validation paths.
            </span>
            <span className="text-cyan-accent">
              STATUS: MANUAL + HYBRID TOOLING
            </span>
          </div>
        </div>

        {/* Services Modules */}
        <div className="space-y-8 pt-8">
          <div>
            <span className="font-mono text-xs text-cyan-accent tracking-widest uppercase">
              CAPABILITIES
            </span>
            <h3 className="text-2xl sm:text-4xl font-heading font-bold text-primary mt-1">
              SECURITY ENGINEERING MODULES
            </h3>
          </div>

          <div className="space-y-4">
            {SERVICES.map((srv) => {
              const isOpen = openServiceId === srv.id;
              return (
                <div
                  key={srv.id}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    isOpen
                      ? 'bg-bg-surface border-cyan-accent/60 shadow-[0_0_20px_rgba(0,229,255,0.08)]'
                      : 'bg-bg-surface/60 border-bg-border hover:border-cyan-accent/30'
                  }`}
                >
                  <button
                    onClick={() => setOpenServiceId(isOpen ? '' : srv.id)}
                    className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-xs font-bold text-bg-canvas bg-cyan-accent px-2.5 py-1 rounded">
                        {srv.tag}
                      </span>
                      <div>
                        <h4 className="font-heading font-bold text-xl text-primary">
                          {srv.title}
                        </h4>
                        <p className="text-xs text-secondary font-mono mt-0.5">
                          {srv.subtitle}
                        </p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 text-secondary transition-transform duration-300 ${
                        isOpen ? 'transform rotate-180 text-cyan-accent' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 pt-2 border-t border-bg-border/60 space-y-6"
                      >
                        <p className="text-secondary text-sm leading-relaxed max-w-3xl">
                          {srv.description}
                        </p>

                        <div className="space-y-3">
                          <h5 className="font-mono text-xs font-bold text-primary uppercase">
                            WHAT WE TEST & AUDIT:
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
                            {srv.items.map((item, idx) => (
                              <div
                                key={idx}
                                className="bg-bg-card p-3 rounded border border-bg-border text-primary flex items-start space-x-2"
                              >
                                <span className="text-cyan-accent font-bold">›</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex items-center justify-end">
                          <a
                            href="#contact"
                            className="font-mono text-xs text-cyan-accent hover:underline font-semibold"
                          >
                            [ SCOPE THIS SERVICE → ]
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
