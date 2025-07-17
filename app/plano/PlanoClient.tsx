"use client"

import LocationPageClient from "@/components/location-page-client"

const PlanoInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Expert Home Remodeling in Plano, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      For homeowners in Plano, T&D Construction offers premium remodeling and construction services. We specialize in
      creating beautiful, functional spaces that enhance your lifestyle.
    </p>
    <p className="mt-4 text-muted-foreground">
      From luxury kitchen remodels to complete roofing replacements, our team delivers outstanding results with a focus
      on quality and customer care.
    </p>
  </>
)

export default function PlanoClient() {
  return (
    <LocationPageClient locationName="Plano" locationInfo={<PlanoInfo />} imageUrl="/plano-texas-modern-home.png" />
  )
}
