"use client"

import LocationPageClient from "@/components/location-page-client"

const MesquiteInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Top-Rated Construction in Mesquite, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      T&D Construction is the go-to choice for homeowners in Mesquite seeking reliable and professional construction
      services. We bring quality and dedication to every job.
    </p>
    <p className="mt-4 text-muted-foreground">
      Our deep understanding of local building codes and styles ensures your project is not only beautiful but also
      compliant and durable.
    </p>
  </>
)

export default function MesquiteClient() {
  return (
    <LocationPageClient locationName="Mesquite" locationInfo={<MesquiteInfo />} imageUrl="/mesquite-family-home.png" />
  )
}
