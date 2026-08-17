'use client';

import React from 'react';

const TECHNICAL_TAGS = [
  'OWASP TOP 10',
  'API SECURITY',
  'AUTHENTICATION',
  'IAM BOUNDARIES',
  'SSRF',
  'XSS / CSRF',
  'IDOR / BOLA',
  'JWT VALIDATION',
  'TLS HARDENING',
  'DNS SECURITY',
  'CLOUD STORAGE',
  'NETWORK EXPOSURE',
  'SECURITY HEADERS',
  'SESSION MANAGEMENT',
  'BUSINESS LOGIC',
  'OAUTH 2.0',
  'CORS BOUNDARIES',
  'RATE LIMITING',
];

export const TechnicalTicker: React.FC = () => {
  return (
    <div className="py-5 bg-bg-surface border-t border-b border-border-color overflow-hidden whitespace-nowrap select-none font-mono text-xs">
      <div className="inline-flex space-x-8 animate-[marquee_30s_linear_infinite]">
        {TECHNICAL_TAGS.concat(TECHNICAL_TAGS).map((tag, index) => (
          <span key={index} className="inline-flex items-center space-x-3 text-text-secondary">
            <span className="text-orange-accent font-bold">::</span>
            <span className="hover:text-text-primary transition-colors cursor-default">{tag}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
