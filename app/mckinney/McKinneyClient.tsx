"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function McKinneyClient() {
  return (
    <LocationPageClient
      cityName="McKinney"
      heroImageSrc="/mckinney-texas-historic-downtown.png.jpg"
      heroImageAlt="The historic downtown square of McKinney, Texas"
      pageTitle="Custom Home Projects in McKinney, TX"
      metaDescription="In McKinney's historic and modern neighborhoods, TND Texas delivers exceptional quality in remodeling, roofing, and custom construction."
      services={SERVICES}
      mainContent={
        <>
          <h2>Enhancing McKinney's Unique Charm</h2>
          <p>
            With its unique blend of historic charm and modern growth, McKinney provides a beautiful canvas for our
            work. TND Texas is honored to serve the McKinney community, offering bespoke remodeling and construction
            services that respect the character of each home. Whether you reside in a historic property near the square
            or a newer development, our team has the expertise to deliver a final product that feels just right.
          </p>
          <p>
            We specialize in kitchen and bathroom renovations that blend style with function, durable roofing solutions
            for Texas weather, and custom projects that make your home truly yours. Partner with TND Texas to invest in
            your McKinney property with confidence.
          </p>
        </>
      }
    />
  )
}
