import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'TND Texas | Construction Company Dallas Fort Worth',
    short_name: 'TND Texas',
    description: '#1 Construction Company in Dallas Fort Worth. Expert remodeling contractors DFW specializing in kitchen remodels, bathroom renovations, roofing & home improvements.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e40af',
    icons: [
      {
        src: '/assets/logos/logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any maskable'
      },
      {
        src: '/assets/logos/logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      },
    ],
    categories: ['business', 'construction', 'home improvement'],
    lang: 'en-US',
    dir: 'ltr',
    scope: '/',
    shortcuts: [
      {
        name: 'Get Free Quote',
        short_name: 'Quote',
        description: 'Get a free construction estimate',
        url: '/contact',
        icons: [{ src: '/assets/logos/logo.png', sizes: '96x96' }]
      },
      {
        name: 'View Portfolio',
        short_name: 'Portfolio',
        description: 'Browse our construction projects',
        url: '/portfolio',
        icons: [{ src: '/assets/logos/logo.png', sizes: '96x96' }]
      }
    ]
  }
}
