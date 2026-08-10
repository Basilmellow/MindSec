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
    <section className="py-12 bg-bg-canvas border-b border-bg-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8">
          <div>
            <span className="font-mono text-xs text-cyan-accent uppercase tracking-widest">
              ARCHITECTURE VISUALIZATION
            </span>
            <h3 className="text-xl font-heading font-bold text-primary mt-1">
              DIGITAL ATTACK SURFACE TOPOLOGY
            </h3>
          </div>
          <span className="font-mono text-xs text-secondary bg-bg-surface px-3 py-1.5 rounded border border-bg-border">
            INTERACTIVE SECURITY MODEL
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* SVG Connection Diagram */}
          <div className="lg:col-span-2 bg-bg-surface border border-bg-border rounded-xl p-6 relative flex flex-col justify-between min-h-[380px]">
            {/* Top Bar Status */}
            <div className="flex items-center justify-between text-xs font-mono text-secondary border-b border-bg-border/60 pb-3 mb-6">
              <div className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-cyan-accent animate-ping" />
                <span className="text-primary">TRAFFIC SIMULATION: ACTIVE</span>
              </div>
              <span>HOVER NODE TO INSPECT</span>
            </div>

            {/* Architecture Node Flow Layout */}
            <div className="grid grid-cols-4 gap-4 my-auto relative">
              {NODES.map((node) => {
                const IconComponent = node.icon;
                const isSelected = activeNode.id === node.id;
                return (
                  <motion.div
                    key={node.id}
                    onMouseEnter={() => setActiveNode(node)}
                    onClick={() => setActiveNode(node)}
                    whileHover={{ scale: 1.05 }}
                    className={`cursor-pointer p-4 rounded-lg border transition-all flex flex-col items-center justify-center text-center space-y-2 relative ${
                      isSelected
                        ? 'bg-bg-card border-cyan-accent shadow-[0_0_20px_rgba(0,229,255,0.2)]'
                        : 'bg-bg-canvas/60 border-bg-border hover:border-cyan-accent/50'
                    }`}
                  >
                    <div
                      className={`p-2.5 rounded ${
                        isSelected
                          ? 'bg-cyan-accent/15 text-cyan-accent'
                          : 'bg-bg-surface text-secondary'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-wider text-primary">
                      {node.label}
                    </span>
                    <span className="font-mono text-[10px] text-secondary">
                      {node.category}
                    </span>

                    {/* Animated Connection Pulse on Hover */}
                    {isSelected && (
                      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-cyan-accent animate-ping" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Packet Animation Status Bar */}
            <div className="mt-6 pt-4 border-t border-bg-border/60 flex items-center justify-between text-[11px] font-mono text-secondary">
              <span className="text-cyan-accent">TRAFFIC: INTERNET → APP LAYER → AUTH → DATA</span>
              <span>STATE: AUTHORIZED PATH INSPECTION</span>
            </div>
          </div>

          {/* Node Technical Detail Panel */}
          <div className="bg-bg-card border border-bg-border rounded-xl p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-bg-border pb-3">
                <span className="font-mono text-xs text-cyan-accent font-semibold tracking-wider">
                  [{activeNode.category}]
                </span>
                <span className="font-mono text-xs text-secondary">{activeNode.label}</span>
              </div>

              <div>
                <h4 className="font-heading font-bold text-xl text-primary">
                  {activeNode.name}
                </h4>
                <p className="text-secondary text-sm mt-3 leading-relaxed">
                  {activeNode.description}
                </p>
              </div>

              <div className="bg-bg-surface p-3 rounded border border-bg-border space-y-1 font-mono text-xs">
                <div className="text-secondary">SECURITY FOCUS:</div>
                <div className="text-cyan-accent font-medium">
                  Boundary Validation & Vulnerability Testing
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-bg-border text-xs font-mono text-secondary">
              Click or hover any node in the architecture topology to inspect security boundaries.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
