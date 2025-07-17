"use client"

import LocationPageClient from "@/components/location-page-client"

const RoyseCityInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Trusted Construction Services in Royse City, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      For homeowners and businesses in Royse City, TND Texas is the trusted partner for all construction needs. We
      deliver excellence on every project, from minor repairs to major renovations.
    </p>
    <p className="mt-4 text-muted-foreground">
      Our team understands the needs of this growing community and is committed to providing durable, beautiful, and
      functional spaces for our clients.
    </p>
  </>
)

export default function RoyseCityClient() {
  return (
    <LocationPageClient
      locationName="Royse City"
      locationInfo={<RoyseCityInfo />}
      imageUrl="/royse-city-texas-new-construction.png"
    />
  )
}
