"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function CaddoMillsClient() {
  return (
    <LocationPageClient
      cityName="Caddo Mills"
      heroImageSrc="/caddo-mills-texas-country-home.png.jpg"
      heroImageAlt="A lovely country home in Caddo Mills, Texas"
      pageTitle="Caddo Mills Home Improvement & Construction"
      metaDescription="For home construction and remodeling services in Caddo Mills, trust the experts at TND Texas. We handle roofing, kitchens, baths, and more."
      services={SERVICES}
      mainContent={
        <>
          <h2>Building and Improving Homes in Caddo Mills</h2>
          <p>
            In the heart of Hunt County, TND Texas is proud to serve the Caddo Mills community. We bring our full range
            of construction and remodeling expertise to this growing area, helping homeowners build, renovate, and
            improve their properties. From durable metal roofs for rural properties to modern kitchen updates, we handle
            every project with a commitment to quality.
          </p>
          <p>
            Our team understands the needs of Caddo Mills residents and is dedicated to providing personalized service
            and lasting value. We are your local partners for creating more beautiful, functional, and durable homes.
          </p>
        </>
      }
    />
  )
}
