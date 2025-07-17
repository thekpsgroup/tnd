"use client"

import { LocationPageClient } from "@/components/location-page-client"
import { SERVICES } from "@/lib/constants"

export default function WylieClient() {
  return (
    <LocationPageClient
      cityName="Wylie"
      heroImageSrc="/wylie-texas-family-home.png.jpg"
      heroImageAlt="A beautiful family home in Wylie, Texas"
      pageTitle="Top-Rated Remodeling in Wylie, TX"
      metaDescription="TND Texas serves the Wylie community with expert home remodeling, from custom kitchens and bathrooms to durable roofing and siding."
      services={SERVICES}
      mainContent={
        <>
          <h2>Wylie's Choice for Home Renovation</h2>
          <p>
            Serving the dynamic and family-friendly city of Wylie, TND Texas offers a complete range of construction and
            remodeling services. We understand that Wylie homeowners value quality and durability, which is why we are
            committed to delivering superior craftsmanship on every project. Whether you're looking to create an outdoor
            oasis with a new deck and patio, update your kitchen to be the heart of your home, or need a reliable new
            roof, our team has the skills and experience to exceed your expectations.
          </p>
          <p>
            We take pride in helping Wylie residents enhance their homes, combining modern amenities with the city's
            unique charm. Trust TND Texas to be your partner in building value and beauty into your Wylie property.
          </p>
        </>
      }
    />
  )
}
