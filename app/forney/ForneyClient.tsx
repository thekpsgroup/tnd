"use client"

import LocationPageClient from "@/components/location-page-client"

const ForneyInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Expert General Contractor in Forney, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      TND Texas brings its commitment to quality and excellence to Forney, providing top-tier construction and
      remodeling services for residential and commercial clients.
    </p>
    <p className="mt-4 text-muted-foreground">
      Whether you're building a new home or renovating your business, our team has the skill and experience to exceed
      your expectations.
    </p>
  </>
)

export default function ForneyClient() {
  return (
    <LocationPageClient locationName="Forney" locationInfo={<ForneyInfo />} imageUrl="/forney-texas-brick-home.png" />
  )
}
