import { MetadataRoute } from 'next';
import { BRAND_CONFIG } from '@/config/brand';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = BRAND_CONFIG.siteUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];
}
