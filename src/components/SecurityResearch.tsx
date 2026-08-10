'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Lock, Sparkles } from 'lucide-react';
import { ResearchArticle } from '@/types';

const ARTICLES: ResearchArticle[] = [
  {
    id: 'api-sec',
    number: '01',
    title: 'API AUTHORIZATION BOUNDARIES IN MICROSERVICES',
    subtitle: 'BOLA & IDOR Vectors in Modern Distributed Systems',
    summary: 'An engineering deep dive into common failure modes when validating object-level authorization across decoupled API controllers.',
    status: 'COMING SOON',
    date: 'Q3 2026',
  },
  {
    id: 'web-apps',
    number: '02',
    title: 'BUSINESS LOGIC VULNERABILITIES IN SPA AUTH FLOWS',
    subtitle: 'Client-Side State vs Server-Side Enforcement',
    summary: 'Analyzing race conditions, payment state mutations, and OAuth token handling pitfalls in modern web frontend frameworks.',
    status: 'COMING SOON',
    date: 'Q3 2026',
  },
  {
    id: 'sec-eng',
    number: '03',
    title: 'PRAGMATIC SECURITY HARDENING FOR SMALL DEV TEAMS',
    subtitle: 'High-Impact Defensive Controls Without Corporate Overhead',
    summary: 'A practitioner guide to embedding security controls, CSP headers, and automated authorization checks directly into CI/CD build pipelines.',
    status: 'COMING SOON',
    date: 'Q4 2026',
  },
];

export const SecurityResearch: React.FC = () => {
  return (
    <section id="research" className="py-24 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <BookOpen className="h-6 w-6 text-cyan-accent" />
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">
              TECHNICAL PUBLICATIONS
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary tracking-tight">
            SECURITY RESEARCH
          </h2>
          <blockquote className="text-xl sm:text-2xl text-secondary max-w-2xl font-light italic border-l-2 border-cyan-accent pl-4">
            &ldquo;Research from the attack surface.&rdquo;
          </blockquote>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-bg-surface border border-bg-border rounded-xl p-6 flex flex-col justify-between hover:border-cyan-accent/40 transition-all group relative overflow-hidden"
            >
              {/* Top Bar */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-bg-border pb-3 font-mono text-xs">
                  <span className="text-cyan-accent font-bold">ARTICLE {art.number}</span>
                  <span className="bg-bg-card border border-bg-border text-secondary px-2.5 py-0.5 rounded text-[10px] font-bold">
                    {art.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-lg text-primary group-hover:text-cyan-accent transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <p className="font-mono text-xs text-secondary">{art.subtitle}</p>
                </div>

                <p className="text-secondary text-xs leading-relaxed">
                  {art.summary}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t border-bg-border flex items-center justify-between font-mono text-[11px] text-secondary">
                <span>ESTIMATED: {art.date}</span>
                <span className="text-secondary/60 group-hover:text-cyan-accent transition-colors">
                  [ NOTIFY UPON RELEASE ]
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
