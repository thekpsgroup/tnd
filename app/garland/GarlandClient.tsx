"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function GarlandClient() {
  return (
    <LocationPageClient
      cityName="Garland"
      heroImageSrc="/garland-texas-suburban-street.jpg"
      heroImageAlt="A quiet suburban street in Garland, Texas"
      pageTitle="Garland's General Contractor for Home & Business"
      metaDescription="TND Texas provides comprehensive construction services in Garland, including commercial build-outs, home additions, and complete remodels."
      services={SERVICES}
      mainContent={
        <>
          <h2>Building and Remodeling in Garland</h2>
          <p>
            TND Texas is proud to offer our full suite of general contracting services to the diverse and bustling city
            of Garland. From residential remodels in established neighborhoods to commercial construction projects, our
            team is equipped to handle jobs of any scale. We specialize in transforming spaces to meet the modern needs
            of Garland's families and businesses.
          </p>
          <p>
            Our services include everything from foundational roofing and siding to intricate interior work like custom
            kitchens, bathrooms, and flooring. We are committed to providing Garland with reliable, high-quality
            workmanship and transparent communication throughout every phase of the construction process.
          </p>
        </>
      }
    />
  )
}
