import { LOCATIONS, SERVICES } from "@/lib/constants"

export function SchemaMarkup() {
  const areaServed = LOCATIONS.map((loc) => ({
    "@type": "City",
    name: loc.title,
  }))

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "TND Texas",
    url: "https://www.tndtexas.com",
    logo: "https://www.tndtexas.com/logo.png",
    telephone: "+1-903-603-4150",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Main St",
      addressLocality: "Royse City",
      addressRegion: "TX",
      postalCode: "75189",
      addressCountry: "US",
    },
    openingHours: "Mo-Fr 08:00-17:00",
    geo: {
      "@type": "GeoCoordinates",
      latitude: "32.9757",
      longitude: "-96.3336",
    },
    priceRange: "$$$",
    makesOffer: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
    areaServed: areaServed,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
