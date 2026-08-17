import type { Metadata } from 'next';
import './globals.css';
import { BRAND_CONFIG } from '@/config/brand';

export const metadata: Metadata = {
  metadataBase: new URL(BRAND_CONFIG.siteUrl),
  title: BRAND_CONFIG.name,
  description: BRAND_CONFIG.shortDescription,
  keywords: [
    'KRAXXSEC',
    'KRAXX',
    'Cybersecurity consultancy',
    'Web application penetration testing',
    'API security testing',
    'API penetration testing',
    'Vulnerability assessment',
    'Security audit',
    'Security engineering',
    'Mohamed Basil',
  ],
  authors: [{ name: BRAND_CONFIG.founder.name, url: BRAND_CONFIG.founder.github }],
  creator: BRAND_CONFIG.founder.name,
  icons: {
    icon: '/kraxxsec-icon.jpg',
    shortcut: '/kraxxsec-icon.jpg',
    apple: '/kraxxsec-icon.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BRAND_CONFIG.siteUrl,
    title: BRAND_CONFIG.name,
    description: BRAND_CONFIG.shortDescription,
    siteName: BRAND_CONFIG.name,
    images: [
      {
        url: '/kraxxsec-logo.png',
        width: 1200,
        height: 630,
        alt: `${BRAND_CONFIG.name} — Cybersecurity & Security Engineering`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: BRAND_CONFIG.name,
    description: BRAND_CONFIG.shortDescription,
    images: ['/kraxxsec-logo.png'],
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
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_CONFIG.name,
    parentOrganization: {
      '@type': 'Organization',
      name: BRAND_CONFIG.parentBrand,
    },
    url: BRAND_CONFIG.siteUrl,
    logo: `${BRAND_CONFIG.siteUrl}/kraxxsec-icon.jpg`,
    email: BRAND_CONFIG.contactEmail,
    sameAs: [
      BRAND_CONFIG.founder.github,
      BRAND_CONFIG.founder.linkedin,
      BRAND_CONFIG.companyLinkedin,
    ],
  };

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BRAND_CONFIG.name,
    description: BRAND_CONFIG.shortDescription,
    url: BRAND_CONFIG.siteUrl,
    logo: `${BRAND_CONFIG.siteUrl}/kraxxsec-icon.jpg`,
    image: `${BRAND_CONFIG.siteUrl}/kraxxsec-logo.png`,
    founder: {
      '@type': 'Person',
      name: BRAND_CONFIG.founder.name,
      jobTitle: BRAND_CONFIG.founder.role,
      sameAs: [BRAND_CONFIG.founder.github, BRAND_CONFIG.founder.linkedin],
    },
    knowsAbout: [
      'Web Application Penetration Testing',
      'API Security Testing',
      'Vulnerability Assessment',
      'Security Engineering',
      'BOLA IDOR Authorization Testing',
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className="bg-bg-canvas text-primary antialiased selection:bg-orange-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
