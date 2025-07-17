import type { MetadataRoute } from "next"
import { SERVICES, LOCATIONS } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://www.tndtexas.com"

  const staticPages = ["", "/about", "/portfolio", "/process", "/guarantee", "/financing", "/contact"].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }))

  const servicePages = SERVICES.map((service) => ({
    url: `${siteUrl}${service.href}`,
    lastModified: new Date(),
  }))

  const locationPages = LOCATIONS.map((location) => ({
    url: `${siteUrl}${location.href}`,
    lastModified: new Date(),
  }))

  return [...staticPages, ...servicePages, ...locationPages]
}
