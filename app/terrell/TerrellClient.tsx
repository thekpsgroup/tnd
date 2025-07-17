"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function TerrellClient() {
  return (
    <LocationPageClient
      cityName="Terrell"
      heroImageSrc="/terrell-texas-ranch-style-home.jpg"
      heroImageAlt="A classic ranch-style home in Terrell, Texas"
      pageTitle="Reliable General Contractor in Terrell, TX"
      metaDescription="TND Texas is your trusted local contractor in Terrell for roofing, siding, and home remodeling projects, big and small."
      services={SERVICES}
      mainContent={
        <>
          <h2>Your Local Terrell Construction Experts</h2>
          <p>
            TND Texas is committed to serving the Terrell community with integrity and reliability. We provide a wide
            range of general contracting services designed to meet the needs of Terrell homeowners. Whether you need a
            sturdy new roof, energy-efficient windows, or a complete interior remodel, our experienced team is here to
            help.
          </p>
          <p>
            We believe in building strong relationships with our clients based on trust and exceptional results. We use
            quality materials and a straightforward process to ensure your project is completed on time, on budget, and
            to your complete satisfaction. For a contractor that feels like a neighbor, choose TND Texas in Terrell.
          </p>
        </>
      }
    />
  )
}
