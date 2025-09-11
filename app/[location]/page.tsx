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
  const subheading = "Licensed and insured general contractors serving your area with kitchens, bathrooms, roofing, decks, patios and more. Call (903) 603-4150 or request a free estimate."

  const sections = [
    (
      <section key="services" className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">Popular Services in {locationTitle}</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {SERVICES.map((s) => (
            <li key={s.href} className="border rounded-md p-4 hover:bg-muted/50 transition-colors">
              <a href={s.href} className="font-medium">
                {s.title}
              </a>
              <p className="text-sm text-muted-foreground mt-1">{s.description}</p>
            </li>
          ))}
        </ul>
      </section>
    ),
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <LocationPageClient heading={heading} subheading={subheading} sections={sections} />
    </div>
  )
}


