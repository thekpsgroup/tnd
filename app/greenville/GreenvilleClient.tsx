"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function GreenvilleClient() {
  return (
    <LocationPageClient
      cityName="Greenville"
      heroImageSrc="/charming-house-greenville-texas.jpg"
      heroImageAlt="Charming suburban house in Greenville, Texas"
      pageTitle="Expert Construction Services in Greenville, TX"
      metaDescription="From historic restorations to modern remodels, TND Texas is Greenville's choice for reliable construction and roofing services."
      services={SERVICES}
      mainContent={
        <>
          <h2>Quality Construction for Greenville Homes</h2>
          <p>
            TND Texas is dedicated to providing the residents of Greenville with exceptional general contracting
            services. We respect Greenville's rich history and growing community by offering services that range from
            sensitive historic home updates to modern commercial build-outs. Our expertise in roofing, siding, and
            custom remodeling ensures that your property is well-maintained and beautifully updated.
          </p>
          <p>
            We are committed to using high-quality materials and proven techniques to deliver results that stand the
            test of time. For homeowners and businesses in Greenville looking for a reliable and skilled contractor, TND
            Texas is ready to bring your vision to life with professionalism and care.
          </p>
        </>
      }
    />
  )
}
