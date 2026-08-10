import type { Metadata } from 'next';
import './globals.css';
import { BRAND_CONFIG } from '@/config/brand';

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_CONFIG.siteUrl),
  title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.subtitle}`,
  description: BRAND_CONFIG.shortDescription,
  keywords: [
    'Cybersecurity consultancy',
    'Web application security',
    'API security assessment',
    'Vulnerability assessment',
    'Security engineering',
    'Mohamed Basil',
    'Security auditing',
    'Penetration testing',
  ],
  authors: [{ name: BRAND_CONFIG.founder.name, url: BRAND_CONFIG.founder.github }],
  creator: BRAND_CONFIG.founder.name,
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND_CONFIG.siteUrl,
    title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.subtitle}`,
    description: BRAND_CONFIG.shortDescription,
    siteName: BRAND_CONFIG.name,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: `${BRAND_CONFIG.name} — Cybersecurity & Security Engineering`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_CONFIG.name} — ${BRAND_CONFIG.subtitle}`,
    description: BRAND_CONFIG.shortDescription,
    images: ['/og-image.png'],
    creator: '@mindsec_sec',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BRAND_CONFIG.name,
    description: BRAND_CONFIG.shortDescription,
    url: BRAND_CONFIG.siteUrl,
    logo: `${BRAND_CONFIG.siteUrl}/icon.svg`,
    image: `${BRAND_CONFIG.siteUrl}/og-image.png`,
    founder: {
      '@type': 'Person',
      name: BRAND_CONFIG.founder.name,
      jobTitle: BRAND_CONFIG.founder.role,
      sameAs: [BRAND_CONFIG.founder.github, BRAND_CONFIG.founder.linkedin],
    },
    knowsAbout: [
      'Web Application Security',
      'API Security',
      'Vulnerability Assessment',
      'Security Engineering',
      'Access Control Validation',
    ],
    priceRange: '$$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Worldwide / Remote',
    },
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-canvas text-primary antialiased selection:bg-cyan-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
