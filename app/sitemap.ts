import type { MetadataRoute } from "next"
import { SERVICES, LOCATIONS } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://tndtexas.com"

  // Main pages with high priority
  const mainPages = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    }
  ]

  // Service pages - high priority for SEO
  const servicePages = SERVICES.map((service) => ({
    url: `${siteUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Location pages - crucial for local SEO
  const locationPages = LOCATIONS.map((location) => ({
    url: `${siteUrl}${location.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Other static pages
  const otherPages = [
    "/about",
    "/process",
    "/guarantee",
    "/financing"
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // DFW Metroplex specific location pages for better local SEO
  const dfwLocations = [
    'dallas-construction-company',
    'fort-worth-construction-company',
    'plano-remodeling-contractors',
    'frisco-kitchen-remodel',
    'mckinney-bathroom-renovation',
    'allen-home-improvement',
    'dallas-roofing-contractors',
    'carrollton-construction-services',
    'garland-home-renovation',
    'irving-remodeling-company',
    'richardson-construction-company',
    'lewisville-home-improvement',
    'the-colony-remodeling-contractors',
    'rowlett-construction-services',
    'rockwall-home-renovation',
    'wylie-kitchen-remodel',
    'sachse-bathroom-renovation',
    'murphy-construction-company',
    'parker-home-improvement',
    'fairview-remodeling-contractors',
    'lucas-construction-services',
    'lavon-home-renovation',
    'nevada-kitchen-remodel',
    'josephine-bathroom-renovation',
    'fate-construction-company',
    'royse-city-home-improvement',
    'caddo-mills-remodeling-contractors',
    'greenville-construction-services',
    'terrell-home-renovation',
    'mesquite-kitchen-remodel',
    'forney-bathroom-renovation',
    'sunnyvale-construction-company',
    'seagoville-home-improvement',
    'crandall-remodeling-contractors',
    'kaufman-construction-services'
  ].map((location) => ({
    url: `${siteUrl}/${location}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [
    ...mainPages,
    ...servicePages,
    ...locationPages,
    ...otherPages,
    ...dfwLocations
  ]
}
