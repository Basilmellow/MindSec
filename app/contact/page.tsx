import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactSection } from '@/components/ContactSection';
import { BRAND_CONFIG } from '@/config/brand';

export const metadata = {
  title: `Contact & Request Assessment | ${BRAND_CONFIG.name}`,
  description: "Contact KRAXXSEC to request a security assessment, discuss application testing scope, or initiate a vulnerability audit. Primary contact: assessment@kraxxsec.com.",
  alternates: {
    canonical: `${BRAND_CONFIG.siteUrl}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-bg-canvas text-primary">
      <Navbar activeSection="contact" />
      <div className="pt-16">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
