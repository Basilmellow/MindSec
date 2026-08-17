import { MetadataRoute } from 'next';
import { BRAND_CONFIG } from '@/config/brand';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND_CONFIG.siteUrl;
  const lastModified = new Date();

  const routes = [
    '',
    '/services',
    '/services/web-application-security',
    '/services/api-security',
    '/services/vulnerability-assessment',
    '/services/security-audit',
    '/services/security-hardening',
    '/services/cybersecurity-consulting',
    '/security-assessment',
    '/about',
    '/about/mohamed-basil',
    '/research',
    '/research/api-security',
    '/research/web-security',
    '/research/cloud-security',
    '/research/bola-vs-idor',
    '/research/api-security-testing-guide',
    '/research/web-application-penetration-testing-guide',
    '/research/vulnerability-assessment-vs-penetration-testing',
    '/contact',
    '/privacy',
    '/terms',
    '/responsible-disclosure',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/services') || route === '/security-assessment' ? 0.9 : 0.7,
  }));
}
