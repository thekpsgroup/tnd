"use client"

import LocationPageClient from "@/components/location-page-client"

const WylieInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Go-To General Contractor in Wylie, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      TND Texas is proud to serve the Wylie community with top-tier construction and remodeling services, delivering
      projects that blend quality, function, and style.
    </p>
    <p className="mt-4 text-muted-foreground">
      We are dedicated to enhancing homes and businesses in Wylie with our commitment to craftsmanship and customer
      satisfaction.
    </p>
  </>
)

export default function WylieClient() {
  return (
    <LocationPageClient locationName="Wylie" locationInfo={<WylieInfo />} imageUrl="/wylie-texas-family-home.png" />
  )
}
