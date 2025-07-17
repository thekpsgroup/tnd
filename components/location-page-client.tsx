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
  /**
   * Free-form React nodes for each page “section”.
   * e.g. <ServicesSection/>, <RecentWorkSection/>, etc.
   */
  sections?: React.ReactNode[]
  /**
   * Raw HTML string (from CMS, MDX, etc.) you might want to drop in.
   */
  rawHtml?: string
}

function LocationPageClient({
  heading = "",
  subheading = "",
  heroImageSrc,
  sections = [],
  rawHtml,
}: LocationPageClientProps) {
  return (
    <main className="flex flex-col gap-12">
      {/* HERO  */}
      {(heading || subheading || heroImageSrc) && (
        <header className="relative flex flex-col items-center text-center">
          {heroImageSrc && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={heroImageSrc || "/placeholder.svg"}
              alt={heading || subheading || "Location hero image"}
              className="mb-8 h-64 w-full object-cover"
            />
          )}
          {heading && <h1 className="text-3xl font-bold text-copper-600">{heading}</h1>}
          {subheading && <p className="mt-2 max-w-2xl text-lg text-muted-foreground">{subheading}</p>}
        </header>
      )}

      {/* DROP-IN HTML (optional) */}
      {rawHtml && <section className="prose mx-auto max-w-4xl" dangerouslySetInnerHTML={{ __html: rawHtml }} />}

      {/* DYNAMIC SECTIONS */}
      {sections.map((section, idx) => (
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
