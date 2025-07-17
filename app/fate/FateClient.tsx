"use client"

import LocationPageClient from "@/components/location-page-client"

const FateInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Your Trusted General Contractor in Fate, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      T&D Construction is proud to serve the growing community of Fate with top-quality roofing, kitchen remodeling, and
      exterior project services. We are committed to delivering exceptional craftsmanship and unparalleled customer
      satisfaction to our neighbors in Fate.
    </p>
    <p className="mt-4 text-muted-foreground">
      Whether you're looking to install a new roof, design your dream kitchen, or enhance your home's curb appeal, our
      experienced team is here to bring your vision to life with precision and care.
    </p>
  </>
)

export default function FateClient() {
  return <LocationPageClient locationName="Fate" locationInfo={<FateInfo />} imageUrl="/fate-texas-suburban-house.png" />
}
