"use client"

import LocationPageClient from "@/components/location-page-client"

const LavonInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Lakeside Construction in Lavon, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      TND Texas enhances the lakeside lifestyle in Lavon with expert construction services, from custom docks and decks
      to beautiful home remodels.
    </p>
    <p className="mt-4 text-muted-foreground">
      We are your trusted partner for building and renovating homes that make the most of Lavon's beautiful
      surroundings.
    </p>
  </>
)

export default function LavonClient() {
  return (
    <LocationPageClient
      locationName="Lavon"
      locationInfo={<LavonInfo />}
      imageUrl="/lavon-texas-lakeside-property.png"
    />
  )
}
