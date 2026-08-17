'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck } from 'lucide-react';
import { BRAND_CONFIG } from '@/config/brand';

interface PolicyModalProps {
  isOpen: boolean;
  type: 'privacy' | 'terms' | 'disclosure' | 'policy' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const getContent = () => {
    switch (type) {
      case 'disclosure':
        return {
          title: 'RESPONSIBLE DISCLOSURE POLICY',
          text: `${BRAND_CONFIG.name} maintains a strict zero-tolerance policy against unauthorized system access or extortion. If you discover potential vulnerabilities in ${BRAND_CONFIG.name}'s own public web properties, report details responsibly to ${BRAND_CONFIG.contactEmail}. Do not access or extract customer data, disrupt services, or execute destructive testing. All genuine security reports submitted in good faith will be reviewed promptly.`,
        };
      case 'policy':
        return {
          title: 'SECURITY TESTING POLICY',
          text: `${BRAND_CONFIG.name} conducts security testing exclusively under explicit written authorization and agreed Rules of Engagement (RoE) executed with system owners. Unauthorized testing, automated scanning without authorization, or exceeding defined target IP/domain boundaries is strictly prohibited. All testing activities are logged and subject to verified authorization boundaries.`,
        };
      case 'privacy':
        return {
          title: 'PRIVACY POLICY',
          text: `${BRAND_CONFIG.name} collects contact details (name, email, company, scope details) submitted through assessment request forms solely for evaluating security consulting scopes and communicating with potential clients. We do not sell, share, or monetize client details. Assessment findings and scope data are handled under strict confidentiality agreements.`,
        };
      case 'terms':
        return {
          title: 'TERMS OF SERVICE',
          text: `All services provided by ${BRAND_CONFIG.name} are governed by formal Master Services Agreements (MSA) and Statement of Work (SOW) documents executed prior to project initiation. Website content, interactive security tools, report previews, and methodology documentation are provided for informational and educational purposes.`,
        };
    }
  };

  const content = getContent();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm font-mono text-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-bg-surface border border-bg-border rounded-xl max-w-2xl w-full p-6 space-y-6 shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-bg-border pb-3">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="h-5 w-5 text-cyan-accent" />
              <span className="font-heading font-bold text-base text-primary">
                {content.title}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded text-secondary hover:text-primary hover:bg-bg-card"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="text-secondary leading-relaxed text-xs space-y-4">
            <p>{content.text}</p>
          </div>

          <div className="pt-4 border-t border-bg-border flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded bg-cyan-accent text-bg-canvas font-bold text-xs hover:bg-cyan-accent/90"
            >
              [ CLOSE DOCUMENT ]
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
