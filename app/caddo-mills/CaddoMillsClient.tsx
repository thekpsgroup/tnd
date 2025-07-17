"use client"

import LocationPageClient from "@/components/location-page-client"

const CaddoMillsInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Caddo Mills, TX Construction Expert</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      Serving the Caddo Mills area, TND Texas offers a full range of construction services tailored to meet the needs of
      our rural and suburban clients.
    </p>
    <p className="mt-4 text-muted-foreground">
      We specialize in custom builds, renovations, and outdoor structures that fit the Caddo Mills lifestyle.
    </p>
  </>
)

export default function CaddoMillsClient() {
  return (
    <LocationPageClient
      locationName="Caddo Mills"
      locationInfo={<CaddoMillsInfo />}
      imageUrl="/caddo-mills-texas-country-home.png"
    />
  )
}
