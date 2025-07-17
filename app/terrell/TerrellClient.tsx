"use client"

import LocationPageClient from "@/components/location-page-client"

const TerrellInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Dependable Contractor in Terrell, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      TND Texas is committed to serving the Terrell community with honest, reliable, and high-quality construction
      services for any project size.
    </p>
    <p className="mt-4 text-muted-foreground">
      From new builds to essential repairs, we are Terrell's go-to source for quality construction.
    </p>
  </>
)

export default function TerrellClient() {
  return (
    <LocationPageClient
      locationName="Terrell"
      locationInfo={<TerrellInfo />}
      imageUrl="/terrell-texas-ranch-style-home.png"
    />
  )
}
