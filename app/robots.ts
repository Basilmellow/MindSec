import { MetadataRoute } from 'next';
import { BRAND_CONFIG } from '@/config/brand';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = BRAND_CONFIG.siteUrl;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
