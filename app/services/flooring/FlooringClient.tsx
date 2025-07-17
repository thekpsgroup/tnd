"use client"

import ServicePageClient from "@/components/service-page-client"

const FlooringDescription = () => (
  <p>
    Upgrade your space from the ground up with our professional flooring services. We offer a wide selection of
    high-quality materials, including hardwood, tile, and luxury vinyl, installed with precision and care to perfectly
    complement your home's style.
  </p>
)

const gallery = [
  "/portfolio/wood-look-tile-flooring-living-area.jpg",
  "/portfolio/wood-look-tile-entryway.jpg",
  "/portfolio/wood-look-tile-hallway.jpg",
  "/portfolio/dining-room-wood-look-tile.jpg",
  "/portfolio/hallway-flooring-transition.jpg",
  "/portfolio/hallway-wood-look-flooring.jpg",
]

export default function FlooringClient() {
  return (
    <ServicePageClient
      serviceName="Flooring Services"
      serviceDescription={<FlooringDescription />}
      galleryImages={gallery}
    />
  )
}
