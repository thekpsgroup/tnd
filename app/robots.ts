import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/search'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [],
      }
    ],
    sitemap: [
      'https://tndtexas.com/sitemap.xml',
      'https://tndtexas.com/server-sitemap.xml'
    ],
    host: 'https://tndtexas.com'
  }
}
