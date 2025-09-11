import { LOCATIONS, SERVICES } from "@/lib/constants"
import LocationPageClient from "@/components/location-page-client"

type Params = { params: { location: string } }

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ location: l.href.replace(/^\//, "") }))
}

export const dynamicParams = true

export default function LocationDynamicPage({ params }: Params) {
  const slug = `/${params.location}`
  const known = LOCATIONS.find((l) => l.href.toLowerCase() === slug.toLowerCase())
  const toTitle = (s: string) =>
    decodeURIComponent(s)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase())

  const locationTitle = known?.title || toTitle(params.location)
  const heading = `${locationTitle} Construction & Remodeling`
  const subheading = "Licensed and insured general contractors serving your area with kitchens, bathrooms, roofing, decks, patios and more. Call (903) 603-4515 or request a free estimate."

  return (
    <div className="container mx-auto px-4 py-12">
      <LocationPageClient
        heading={heading}
        subheading={subheading}
        cityName={locationTitle}
        services={SERVICES}
      />
    </div>
  )
}


