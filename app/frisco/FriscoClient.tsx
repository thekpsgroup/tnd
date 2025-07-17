"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function FriscoClient() {
  return (
    <LocationPageClient
      cityName="Frisco"
      heroImageSrc="/frisco-texas-luxury-home.png.jpg"
      heroImageAlt="A modern luxury home in Frisco, Texas"
      pageTitle="Frisco's Premier Remodeling & Construction"
      metaDescription="TND Texas brings luxury remodeling and high-end construction services to Frisco, specializing in kitchens, bathrooms, and outdoor living."
      services={SERVICES}
      mainContent={
        <>
          <h2>Luxury and Quality for Frisco Homes</h2>
          <p>
            As one of the fastest-growing cities in the nation, Frisco demands excellence, and TND Texas delivers. We
            provide premier general contracting services tailored to the high standards of Frisco homeowners. Our focus
            is on creating luxurious, functional, and beautifully crafted spaces that enhance your lifestyle.
          </p>
          <p>
            From state-of-the-art kitchen remodels and spa-like bathroom renovations to expansive outdoor living areas
            featuring custom decks and pergolas, we bring a meticulous eye for detail to every project. For a
            construction partner that understands the Frisco market, look no further than TND Texas.
          </p>
        </>
      }
    />
  )
}
