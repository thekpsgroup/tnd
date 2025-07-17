"use client"

import LocationPageClient from "@/components/location-page-client"

const McKinneyInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Expert Remodeling in McKinney, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      TND Texas brings its signature quality and craftsmanship to McKinney, offering premium remodeling and construction
      services for discerning clients.
    </p>
    <p className="mt-4 text-muted-foreground">
      Whether you're updating a historic home or building a modern masterpiece, we are your trusted construction
      partner.
    </p>
  </>
)

export default function McKinneyClient() {
  return (
    <LocationPageClient
      locationName="McKinney"
      locationInfo={<McKinneyInfo />}
      imageUrl="/mckinney-texas-historic-downtown.png"
    />
  )
}
