"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function LavonClient() {
  return (
    <LocationPageClient
      cityName="Lavon"
      heroImageSrc="/lavon-texas-lakeside-property.png.jpg"
      heroImageAlt="A beautiful property near Lake Lavon, Texas"
      pageTitle="Construction & Remodeling for Lavon, TX"
      metaDescription="TND Texas specializes in creating beautiful lakeside homes and outdoor living spaces in Lavon. Contact us for decks, patios, and remodels."
      services={SERVICES}
      mainContent={
        <>
          <h2>Enhancing Lakeside Living in Lavon</h2>
          <p>
            With its beautiful lakeside setting, Lavon is the perfect place for stunning homes and outdoor living
            spaces. TND Texas specializes in projects that embrace the Lavon lifestyle. We design and build custom
            decks, screened porches, and patios that allow you to fully enjoy your surroundings.
          </p>
          <p>
            Inside, we create beautiful, open-concept kitchens and luxurious bathrooms that serve as a perfect retreat
            after a day on the lake. For homeowners in Lavon looking to enhance their property's beauty and function,
            TND Texas offers expert craftsmanship and a deep appreciation for lakeside living.
          </p>
        </>
      }
    />
  )
}
