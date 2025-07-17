"use client"

import LocationPageClient from "@/components/location-page-client"

const RockwallInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Premier General Contractor in Rockwall, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      TND Texas is proud to deliver exceptional construction and remodeling services to the Rockwall community. We are
      dedicated to quality craftsmanship and complete customer satisfaction.
    </p>
    <p className="mt-4 text-muted-foreground">
      From lakeside home renovations to new commercial build-outs, our experienced team is ready to bring your project
      to life with expertise and precision.
    </p>
  </>
)

export default function RockwallClient() {
  return (
    <LocationPageClient
      locationName="Rockwall"
      locationInfo={<RockwallInfo />}
      imageUrl="/rockwall-texas-lakefront-home.png"
    />
  )
}
