"use client"

import LocationPageClient from "@/components/location-page-client"

const SachseInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Premier Construction in Sachse, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      Sachse residents choose TND Texas for reliable, high-quality construction services. We bring expertise and
      dedication to every project, ensuring exceptional results.
    </p>
    <p className="mt-4 text-muted-foreground">
      From modern kitchen updates to durable new roofs, our team is equipped to handle all your construction needs.
    </p>
  </>
)

export default function SachseClient() {
  return (
    <LocationPageClient locationName="Sachse" locationInfo={<SachseInfo />} imageUrl="/sachse-texas-modern-house.png" />
  )
}
