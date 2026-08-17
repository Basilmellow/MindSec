'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, AlertCircle, CheckCircle2, Lock, Tag } from 'lucide-react';
import { ContactFormData } from '@/types';
import { BRAND_CONFIG } from '@/config/brand';

interface ServiceOptionItem {
  id: string;
  label: string;
  startingPrice: string;
}

const SERVICES_OPTIONS: ServiceOptionItem[] = [
  { id: 'webapp', label: 'Web Application Security Testing', startingPrice: 'Starting at $499' },
  { id: 'api', label: 'API Security Assessment', startingPrice: 'Starting at $399' },
  { id: 'vuln', label: 'Security Snapshot / Vulnerability Assessment', startingPrice: 'Starting at $149' },
  { id: 'audit', label: 'Security Audit & Architecture Review', startingPrice: 'Custom Scope' },
  { id: 'hardening', label: 'Security Hardening & Remediation', startingPrice: 'Included in Scope / Custom' },
  { id: 'consulting', label: 'Cybersecurity Consulting', startingPrice: 'Retainer / Monthly' },
  { id: 'custom', label: 'Not Sure / Custom Scope', startingPrice: 'Flexible Scope' },
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    target: '',
    service: SERVICES_OPTIONS[0].label,
    message: '',
    hp_field_x7q: '',
    authorized: false,
  });

  const [loading, setLoading] = useState(false);
  const [serverSuccess, setServerSuccess] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const selectedServiceObj = SERVICES_OPTIONS.find((s) => s.label === formData.service) || SERVICES_OPTIONS[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    setServerSuccess(null);

    if (!formData.authorized) {
      setServerError('Confirmation of authorization is required before submitting testing requests.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setServerSuccess(data.message || 'Assessment request received.');
        setFormData({
          name: '',
          email: '',
          company: '',
          target: '',
          service: SERVICES_OPTIONS[0].label,
          message: '',
          hp_field_x7q: '',
          authorized: false,
        });
      } else {
        setServerError(data.error || 'Failed to submit request. Please try again.');
      }
    } catch (err: any) {
      console.error('Contact submission error:', err);
      setServerError('Network error while reaching KRAXXSEC API endpoint.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-canvas border-b border-border-color relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Lock className="h-6 w-6 text-orange-accent" />
            <span className="eyebrow">ASSESSMENT INITIATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-text-primary tracking-tight uppercase">
            REQUEST A SECURITY ASSESSMENT.
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl font-light">
            Select your assessment service below. Indicative rates match defined scope boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form Area */}
          <div className="lg:col-span-8 bg-bg-surface border border-border-color rounded-xl p-6 sm:p-8 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            {serverSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-bg-surface-2 border border-orange-accent/50 p-8 rounded-lg text-center space-y-4"
              >
                <div className="inline-flex p-3 rounded-full bg-orange-accent/15 text-orange-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-text-primary">
                  ASSESSMENT REQUEST DISPATCHED
                </h3>
                <p className="text-text-secondary text-sm max-w-md mx-auto font-mono">
                  {serverSuccess}
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setServerSuccess(null)}
                    className="btn-nw btn-nw-solid"
                  >
                    [ SUBMIT ANOTHER REQUEST ]
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">
                {serverError && (
                  <div className="bg-red-500/10 border border-red-500 text-red-400 p-4 rounded flex items-center space-x-3 text-xs font-mono">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{serverError}</span>
                  </div>
                )}

                {/* Spam-protection Honeypot Field */}
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
                    <label htmlFor="contact-name" className="block text-text-secondary uppercase font-bold">
                      NAME <span className="text-orange-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-bg-card border border-border-color rounded p-3 text-text-primary placeholder-text-muted focus:border-orange-accent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="block text-text-secondary uppercase font-bold">
                      BUSINESS EMAIL <span className="text-orange-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-bg-card border border-border-color rounded p-3 text-text-primary placeholder-text-muted focus:border-orange-accent focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div className="space-y-2">
                    <label htmlFor="contact-company" className="block text-text-secondary uppercase font-bold">
                      COMPANY / ORGANIZATION
                    </label>
                    <input
                      type="text"
                      id="contact-company"
                      placeholder="e.g. Acme Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-bg-card border border-border-color rounded p-3 text-text-primary placeholder-text-muted focus:border-orange-accent focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Service Selection with Matched Pricing */}
                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="block text-text-secondary uppercase font-bold flex items-center justify-between">
                      <span>PRIMARY SERVICE <span className="text-orange-accent">*</span></span>
                    </label>
                    <select
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-bg-card border border-border-color rounded p-3 text-text-primary focus:border-orange-accent focus:outline-none transition-colors"
                    >
                      {SERVICES_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.label} className="bg-bg-card text-text-primary">
                          {opt.label} — [{opt.startingPrice}]
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Selected Service Pricing Sync Badge */}
                <div className="bg-bg-surface-2 p-3.5 rounded border border-border-color flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Tag className="h-4 w-4 text-orange-accent" />
                    <span>INDICATIVE SERVICE RATE:</span>
                  </div>
                  <span className="font-bold text-orange-accent border border-orange-accent/40 bg-orange-accent/10 px-2.5 py-1 rounded">
                    {selectedServiceObj.startingPrice}
                  </span>
                </div>

                {/* Target Scope */}
                <div className="space-y-2">
                  <label htmlFor="contact-target" className="block text-text-secondary uppercase font-bold">
                    TARGET SCOPE / DOMAINS
                  </label>
                  <input
                    type="text"
                    id="contact-target"
                    placeholder="e.g. https://api.company.com, app.company.com"
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    className="w-full bg-bg-card border border-border-color rounded p-3 text-text-primary placeholder-text-muted focus:border-orange-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="block text-text-secondary uppercase font-bold">
                    ASSESSMENT DETAILS & SCOPE NOTES <span className="text-orange-accent">*</span>
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    rows={4}
                    maxLength={2000}
                    placeholder="Describe your application stack, timeline requirements, and specific areas of concern..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-bg-card border border-border-color rounded p-3 text-text-primary placeholder-text-muted focus:border-orange-accent focus:outline-none transition-colors resize-y"
                  />
                </div>

                {/* Mandatory Authorization Checkbox */}
                <div className="bg-bg-card p-4 rounded border border-border-color space-y-2">
                  <label htmlFor="contact-authorized" className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      id="contact-authorized"
                      required
                      checked={formData.authorized}
                      onChange={(e) => setFormData({ ...formData, authorized: e.target.checked })}
                      className="mt-0.5 h-4 w-4 bg-bg-canvas border-border-color rounded accent-orange-accent cursor-pointer"
                    />
                    <span className="text-text-secondary text-[11px] leading-relaxed">
                      I confirm that I am authorized to request security testing of the specified target systems.
                    </span>
                  </label>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-nw btn-nw-solid w-full justify-center text-sm py-4 disabled:opacity-50 disabled:cursor-not-allowed"
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

          {/* Side Status Panel */}
          <div className="lg:col-span-4 bg-bg-surface-2 border border-border-color rounded-xl p-6 space-y-6 shadow-[0_15px_35px_rgba(0,0,0,0.3)]">
            <div className="border-b border-border-color pb-3">
              <span className="font-mono text-xs text-orange-accent font-bold tracking-wider">
                {BRAND_CONFIG.name}
              </span>
              <h4 className="font-heading font-bold text-lg text-text-primary">
                ENGAGEMENT PROTOCOL
              </h4>
              <span className="font-mono text-[10px] text-text-muted">A KRAXX SECURITY DIVISION</span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="bg-bg-surface p-3.5 rounded border border-border-color flex items-center justify-between">
                <span className="text-text-muted">STATUS</span>
                <span className="text-orange-accent font-bold">READY</span>
              </div>

              <div className="bg-bg-surface p-3.5 rounded border border-border-color flex items-center justify-between">
                <span className="text-text-muted">INITIAL RESPONSE</span>
                <span className="text-text-primary font-bold">WITHIN 1 BUSINESS DAY</span>
              </div>

              <div className="bg-bg-surface p-3.5 rounded border border-border-color flex items-center justify-between">
                <span className="text-text-muted">PRIMARY EMAIL</span>
                <span className="text-orange-accent font-bold text-[11px]">{BRAND_CONFIG.contactEmail}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-border-color text-text-secondary text-[11px] font-mono leading-relaxed">
              Requests are reviewed directly by Mohamed Basil. Formal Rules of Engagement and scope authorization documents are completed prior to executing any security testing.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
