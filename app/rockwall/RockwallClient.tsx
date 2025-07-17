"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function RockwallClient() {
  return (
    <LocationPageClient
      cityName="Rockwall"
      heroImageSrc="/rockwall-texas-lakefront-home.png"
      heroImageAlt="Beautiful lakeside home in Rockwall, Texas"
      pageTitle="Premier Home Remodeling in Rockwall, TX"
      metaDescription="TND Texas offers top-tier home remodeling, roofing, and construction services in Rockwall. Enhance your home with our expert craftsmanship."
      services={SERVICES}
      mainContent={
        <>
          <h2>Your Trusted Rockwall General Contractor</h2>
          <p>
            At TND Texas, we are proud to serve the vibrant community of Rockwall. Known for its beautiful lakefront
            views and strong community spirit, Rockwall is a place we are honored to work in. We bring our commitment to
            quality craftsmanship and customer satisfaction to every project, whether it's a full kitchen remodel, a
            durable new roof to protect against Texas weather, or a custom outdoor living space to enjoy the lakeside
            lifestyle.
          </p>
          <p>
            Our team understands the unique architectural styles and local building codes in Rockwall, ensuring your
            project is not only beautiful but also compliant and built to last. We are dedicated to enhancing the homes
            and lives of our neighbors in Rockwall with reliable, high-quality construction services.
          </p>
        </>
      }
    />
  )
}
