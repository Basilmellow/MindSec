'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, Server, Shield, Database, Lock, Cpu, Cloud, Network } from 'lucide-react';

interface TechNode {
  id: string;
  label: string;
  name: string;
  category: string;
  description: string;
  icon: React.ElementType;
}

const NODES: TechNode[] = [
  {
    id: 'waf',
    label: 'WAF',
    name: 'Web Application Firewall',
    category: 'PERIMETER',
    description: 'Inspects and filters incoming HTTP/S traffic against common web exploits.',
    icon: Shield,
  },
  {
    id: 'dns',
    label: 'DNS',
    name: 'Domain Name System',
    category: 'ROUTING',
    description: 'External routing and resolution boundaries for organization domains.',
    icon: Globe,
  },
  {
    id: 'website',
    label: 'WEB',
    name: 'Client Applications',
    category: 'SURFACE',
    description: 'Front-end applications, user input surfaces, and client-side logic.',
    icon: Network,
  },
  {
    id: 'api',
    label: 'API',
    name: 'API Endpoints',
    category: 'SURFACE',
    description: 'Application programming interface exposed to external traffic.',
    icon: Server,
  },
  {
    id: 'auth',
    label: 'AUTH',
    name: 'Authentication Layer',
    category: 'SECURITY',
    description: 'Identity verification, token issuance, and session validation.',
    icon: Lock,
  },
  {
    id: 'iam',
    label: 'IAM',
    name: 'Access Control (IAM)',
    category: 'SECURITY',
    description: 'Role-based authorization and permission boundaries.',
    icon: Cpu,
  },
  {
    id: 'cloud',
    label: 'CLOUD',
    name: 'Infrastructure',
    category: 'SYSTEMS',
    description: 'Virtual private clouds, container clusters, and cloud storage.',
    icon: Cloud,
  },
  {
    id: 'db',
    label: 'DB',
    name: 'Database & Data Layer',
    category: 'DATA',
    description: 'Persistent data stores, sensitive customer data, and system logs.',
    icon: Database,
  },
];

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<TechNode>(NODES[3]); // API selected by default

  return (
    <section className="py-12 bg-bg-canvas border-b border-border-color relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8">
          <div>
            <div className="eyebrow mb-1">ARCHITECTURE TOPOLOGY</div>
            <h3 className="text-xl font-heading font-bold text-text-primary">
              INTERACTIVE ATTACK SURFACE MODEL
            </h3>
          </div>
          <span className="nw-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-accent animate-ping" />
            HOVER TO INSPECT BOUNDARY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Connection Topology Diagram */}
          <div className="lg:col-span-2 bg-bg-surface border border-border-color rounded-xl p-6 relative flex flex-col justify-between min-h-[380px] shadow-[0_15px_35px_rgba(0,0,0,0.5)]">
            {/* Top Bar Status */}
            <div className="flex items-center justify-between text-xs font-mono text-text-secondary border-b border-border-color pb-3 mb-6">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-orange-accent animate-pulse" />
                <span className="text-text-primary font-semibold">ATTACK PATH SIMULATION: READY</span>
              </div>
              <span>8 ARCHITECTURE VECTORS</span>
            </div>

            {/* Architecture Node Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-auto relative">
              {NODES.map((node) => {
                const IconComponent = node.icon;
                const isSelected = activeNode.id === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node)}
                    onClick={() => setActiveNode(node)}
                    whileHover={{ scale: 1.04 }}
                    className={`cursor-pointer p-4 rounded-lg border transition-all flex flex-col items-center justify-center text-center space-y-2 relative ${
                      isSelected
                        ? 'bg-bg-surface-2 border-orange-accent shadow-[0_0_20px_rgba(255,87,34,0.3)]'
                        : 'bg-bg-card border-border-color hover:border-border-color-2'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded ${
                        isSelected
                          ? 'bg-orange-accent/20 text-orange-accent'
                          : 'bg-bg-surface text-text-secondary'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-wider text-text-primary">
                      {node.label}
                    </span>
                    <span className="font-mono text-[10px] text-text-muted">
                      {node.category}
                    </span>

                    {isSelected && (
                      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-orange-accent shadow-[0_0_8px_rgba(255,87,34,0.8)]" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Path Flow Status Bar */}
            <div className="mt-6 pt-4 border-t border-border-color flex flex-wrap items-center justify-between text-[11px] font-mono text-text-secondary gap-2">
              <span className="text-orange-accent">FLOW: INTERNET → WAF → API / APP → AUTH → DATA</span>
              <span>STATE: AUTHORIZED PENETRATION SCOPE</span>
            </div>
          </div>

          {/* Node Detail Card */}
          <div className="bg-bg-surface-2 border border-border-color rounded-xl p-6 flex flex-col justify-between shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border-color pb-3">
                <span className="font-mono text-xs text-orange-accent font-bold tracking-wider">
                  [{activeNode.category}]
                </span>
                <span className="font-mono text-xs text-text-muted">{activeNode.label}</span>
              </div>

              <div>
                <h4 className="font-heading font-bold text-xl text-text-primary">
                  {activeNode.name}
                </h4>
                <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                  {activeNode.description}
                </p>
              </div>

              <div className="bg-bg-surface p-3.5 rounded border border-border-color space-y-1 font-mono text-xs">
                <div className="text-text-muted">SECURITY TESTING GOAL:</div>
                <div className="text-orange-accent font-medium">
                  Identify logic bypasses & authorization vulnerabilities
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-color text-xs font-mono text-text-muted">
              Select any architecture vector node above to examine security inspection points.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
