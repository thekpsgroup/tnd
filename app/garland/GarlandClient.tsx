"use client"

import LocationPageClient from "@/components/location-page-client"

const GarlandInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Top-Rated General Contractor in Garland, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      Homeowners and businesses in Garland rely on TND Texas for professional and dependable construction services. We
      are committed to quality from start to finish.
    </p>
    <p className="mt-4 text-muted-foreground">
      Our extensive experience in the Dallas-Fort Worth area makes us the perfect choice for your next Garland project.
    </p>
  </>
)

export default function GarlandClient() {
  return (
    <LocationPageClient
      locationName="Garland"
      locationInfo={<GarlandInfo />}
      imageUrl="/garland-texas-suburban-street.png"
    />
  )
}
