"use client"

import LocationPageClient from "@/components/location-page-client"

const FriscoInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Luxury Construction in Frisco, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      For high-end construction and remodeling in Frisco, TND Texas delivers unparalleled quality and service. We
      specialize in creating exceptional spaces.
    </p>
    <p className="mt-4 text-muted-foreground">
      Our attention to detail and commitment to excellence make us the ideal choice for your Frisco home or business.
    </p>
  </>
)

export default function FriscoClient() {
  return (
    <LocationPageClient locationName="Frisco" locationInfo={<FriscoInfo />} imageUrl="/frisco-texas-luxury-home.png" />
  )
}
