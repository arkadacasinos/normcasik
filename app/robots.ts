import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'],
      crawlDelay: 1,
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://norm-casino.ru'}/sitemap.xml`,
  }
}
