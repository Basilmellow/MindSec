'use client';

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from '@/components/Loader';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { HeroVisual } from '@/components/HeroVisual';
import { Section01Surface } from '@/components/Section01Surface';
import { Section02Test } from '@/components/Section02Test';
import { Section03Verify } from '@/components/Section03Verify';
import { Section04Report } from '@/components/Section04Report';
import { Section05Fix } from '@/components/Section05Fix';
import { SecurityScoreVisualizer } from '@/components/SecurityScoreVisualizer';
import { TechnicalTicker } from '@/components/TechnicalTicker';
import { MethodologyTimeline } from '@/components/MethodologyTimeline';
import { SecurityResearch } from '@/components/SecurityResearch';
import { AboutSection } from '@/components/AboutSection';
import { PricingSection } from '@/components/PricingSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('surface');

  useEffect(() => {
    // Scroll spy for active navbar section
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const sectionIds = ['surface', 'test', 'verify', 'report', 'fix', 'research', 'about', 'pricing', 'contact'];

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-bg-canvas text-primary relative selection:bg-cyan-accent/30 selection:text-white">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar activeSection={activeSection} />

      <Hero />
      <HeroVisual />

      <Section01Surface />
      <Section02Test />
      <Section03Verify />
      <Section04Report />
      <Section05Fix />

      <SecurityScoreVisualizer />
      <TechnicalTicker />

      <MethodologyTimeline />
      <SecurityResearch />

      <AboutSection />
      <PricingSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
