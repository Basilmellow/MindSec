'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Send, AlertCircle, CheckCircle2, Lock, Clock, Globe } from 'lucide-react';
import { ContactFormData } from '@/types';

const SERVICES_OPTIONS = [
  'Web Application Security',
  'API Security Assessment',
  'Vulnerability Assessment',
  'Security Audit',
  'Security Hardening',
  'Security Consulting',
  'Not Sure',
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    target: '',
    service: 'Web Application Security',
    message: '',
    hp_field_x7q: '', // Opaque Honeypot
    authorized: false,
  });

  const [loading, setLoading] = useState(false);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setServerSuccess(null);

    // Client-side quick check
    if (!formData.authorized) {
      setServerError('Confirmation of authorization is required before submitting testing requests.');
      return;
    }

    setLoading(true);

    try {
      // Real API Call to Next.js App Router Route Handler (Requirement #1)
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Render success UI ONLY on true 200 response from server!
        setServerSuccess(data.message || 'Assessment request received.');
        setFormData({
          name: '',
          email: '',
          company: '',
          target: '',
          service: 'Web Application Security',
          message: '',
          hp_field_x7q: '',
          authorized: false,
        });
      } else {
        setServerError(data.error || 'Failed to submit request. Please try again.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setServerError('Network error while reaching MindSec API endpoint.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-canvas border-b border-bg-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Lock className="h-6 w-6 text-cyan-accent" />
            <span className="font-mono text-xs text-secondary tracking-widest uppercase">
              ASSESSMENT INITIATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-primary tracking-tight">
            SEE WHAT WE CAN BREAK.
          </h2>
          <p className="text-xl text-secondary max-w-2xl font-light">
            Tell us what you want assessed. We&apos;ll help define the scope.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-8 bg-bg-surface border border-bg-border rounded-xl p-6 sm:p-8 space-y-6">
            {serverSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bg-card border border-cyan-accent/50 p-8 rounded-lg text-center space-y-4"
              >
                <div className="inline-flex p-3 rounded-full bg-cyan-accent/15 text-cyan-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary">
                  ASSESSMENT REQUEST DISPATCHED
                </h3>
                <p className="text-secondary text-sm max-w-md mx-auto font-mono">
                  {serverSuccess}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setServerSuccess(null)}
                    className="font-mono text-xs text-bg-canvas font-bold bg-cyan-accent px-6 py-2.5 rounded hover:bg-cyan-accent/90"
                  >
                    [ SUBMIT ANOTHER REQUEST ]
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                {serverError && (
                  <div className="bg-alert-critical/10 border border-alert-critical text-alert-critical p-4 rounded flex items-center space-x-3 text-xs font-mono">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Requirement #2: Spam-protection Honeypot Field */}
                <div className="hp-x7q-hide" aria-hidden="true">
                  <label htmlFor="hp_field_x7q">Do not fill this field</label>
                  <input
                    type="text"
                    id="hp_field_x7q"
                    name="hp_field_x7q"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.hp_field_x7q}
                    onChange={(e) => setFormData({ ...formData, hp_field_x7q: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="block text-secondary uppercase font-bold">
                      NAME <span className="text-cyan-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-bg-card border border-bg-border rounded p-3 text-primary placeholder-secondary/40 focus:border-cyan-accent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-secondary uppercase font-bold">
                      BUSINESS EMAIL <span className="text-cyan-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-bg-card border border-bg-border rounded p-3 text-primary placeholder-secondary/40 focus:border-cyan-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="block text-secondary uppercase font-bold">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-bg-card border border-bg-border rounded p-3 text-primary placeholder-secondary/40 focus:border-cyan-accent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="block text-secondary uppercase font-bold">
                      PRIMARY SERVICE <span className="text-cyan-accent">*</span>
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-bg-card border border-bg-border rounded p-3 text-primary focus:border-cyan-accent focus:outline-none transition-colors"
                    >
                      {SERVICES_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-bg-card text-primary">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Target Scope */}
                <div className="space-y-2">
                  <label htmlFor="contact-target" className="block text-secondary uppercase font-bold">
                    TARGET SCOPE / DOMAINS
                  </label>
                  <input
                    type="text"
                    id="contact-target"
                    placeholder="e.g. https://api.company.com, app.company.com"
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    className="w-full bg-bg-card border border-bg-border rounded p-3 text-primary placeholder-secondary/40 focus:border-cyan-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-secondary uppercase font-bold">
                    ASSESSMENT DETAILS & SCOPE NOTES <span className="text-cyan-accent">*</span>
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    rows={4}
                    maxLength={2000}
                    placeholder="Describe your platform stack, timeline requirements, and specific areas of concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-bg-card border border-bg-border rounded p-3 text-primary placeholder-secondary/40 focus:border-cyan-accent focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Authorization Checkbox */}
                <div className="bg-bg-card p-4 rounded border border-bg-border space-y-2">
                  <label htmlFor="contact-authorized" className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id="contact-authorized"
                      required
                      checked={formData.authorized}
                      onChange={(e) => setFormData({ ...formData, authorized: e.target.checked })}
                      className="mt-0.5 h-4 w-4 bg-bg-canvas border-bg-border rounded accent-cyan-accent cursor-pointer"
                    />
                    <span className="text-secondary text-[11px] leading-relaxed">
                      I confirm that I am authorized to request security testing of the specified target systems.
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded bg-cyan-accent text-bg-canvas font-bold text-sm hover:bg-cyan-accent/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.25)] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <span>DISPATCHING REQUEST TO SERVER...</span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>[ START AN ASSESSMENT ]</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Side Status Panel (Requirement #18) */}
          <div className="lg:col-span-4 bg-bg-card border border-bg-border rounded-xl p-6 space-y-6">
            <div className="border-b border-bg-border pb-3">
              <span className="font-mono text-xs text-cyan-accent font-bold tracking-wider">
                MINDSEC
              </span>
              <h4 className="font-heading font-bold text-lg text-primary">
                ASSESSMENT WORKFLOW
              </h4>
              <span className="font-mono text-[10px] text-secondary">Typical workflow</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="bg-bg-surface p-3.5 rounded border border-bg-border flex items-center justify-between">
                <span className="text-secondary">STATUS</span>
                <span className="text-cyan-accent font-bold">OPEN</span>
              </div>

              <div className="bg-bg-surface p-3.5 rounded border border-bg-border flex items-center justify-between">
                <span className="text-secondary">RESPONSE</span>
                <span className="text-primary font-bold">WITHIN 1 BUSINESS DAY</span>
              </div>

              <div className="bg-bg-surface p-3.5 rounded border border-bg-border flex items-center justify-between">
                <span className="text-secondary">TESTING</span>
                <span className="text-primary font-bold">AUTHORIZED ONLY</span>
              </div>

              <div className="bg-bg-surface p-3.5 rounded border border-bg-border flex items-center justify-between">
                <span className="text-secondary">LOCATION</span>
                <span className="text-primary font-bold">REMOTE</span>
              </div>
            </div>

            <div className="pt-4 border-t border-bg-border text-secondary text-[11px] font-mono leading-relaxed">
              Requests are reviewed by Mohamed Basil. Rules of Engagement agreements are signed prior to any security testing execution.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
