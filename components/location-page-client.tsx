"use client"

import type * as React from "react"

/**
 * Generic location-specific landing page section renderer.
 * Every array prop is optional -- if it’s missing we gracefully render nothing
 * instead of throwing during build-time static generation.
 */
export interface LocationPageClientProps {
  heading?: string
  subheading?: string
  heroImageSrc?: string
  heroImageAlt?: string
  /**
   * Free-form React nodes for each page "section".
   * e.g. <ServicesSection/>, <RecentWorkSection/>, etc.
   */
  sections?: React.ReactNode[]
  /**
   * Raw HTML string (from CMS, MDX, etc.) you might want to drop in.
   */
  rawHtml?: string

  // Legacy props for backward compatibility
  cityName?: string
  pageTitle?: string
  metaDescription?: string
  services?: any[]
  mainContent?: React.ReactNode
}

function LocationPageClient({
  heading = "",
  subheading = "",
  heroImageSrc,
  heroImageAlt,
  sections = [],
  rawHtml,
  cityName,
  pageTitle,
  metaDescription,
  services,
  mainContent,
}: LocationPageClientProps) {
  // Handle legacy props
  const finalHeading = heading || pageTitle || `${cityName} Construction & Remodeling` || ""
  const finalSubheading = subheading || metaDescription || "Licensed and insured general contractors serving your area with kitchens, bathrooms, roofing, decks, patios and more. Call (903) 603-4515 or request a free estimate."
  const finalHeroImageSrc = heroImageSrc
  const finalHeroImageAlt = heroImageAlt || `${cityName} hero image` || "Location hero image"

  // Build sections from legacy props
  const finalSections = [...sections]

  if (mainContent) {
    finalSections.unshift(
      <section key="main-content" className="container mx-auto px-4 py-8">
        <div className="prose mx-auto max-w-4xl">
          {mainContent}
        </div>
      </section>
    )
  }

  if (services && services.length > 0) {
    finalSections.push(
      <section key="services" className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Popular Services in {cityName || "Your Area"}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((service, idx) => (
            <li key={idx} className="border rounded-md p-4 hover:bg-muted/50 transition-colors">
              <a href={service.href} className="font-medium">
                {service.title}
              </a>
              <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <main className="flex flex-col gap-12">
      {/* HERO  */}
      {(finalHeading || finalSubheading || finalHeroImageSrc) && (
        <header className="relative flex flex-col items-center text-center">
          {finalHeroImageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={finalHeroImageSrc || "/placeholder.svg"}
              alt={finalHeroImageAlt}
              className="mb-8 h-64 w-full object-cover"
            />
          )}
          {finalHeading && <h1 className="text-3xl font-bold text-copper-600">{finalHeading}</h1>}
          {finalSubheading && <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{finalSubheading}</p>}
        </header>
      )}

      {/* DROP-IN HTML (optional) */}
      {rawHtml && <section className="prose mx-auto max-w-4xl" dangerouslySetInnerHTML={{ __html: rawHtml }} />}

      {/* DYNAMIC SECTIONS */}
      {finalSections.map((section, idx) => (
        <section key={idx}>{section}</section>
      ))}
    </main>
  )
}

/**
 * We export **both** styles so existing pages using either
 * `import LocationPageClient` **or**
 * `import { LocationPageClient }` continue to work.
 */
export { LocationPageClient }
export default LocationPageClient
