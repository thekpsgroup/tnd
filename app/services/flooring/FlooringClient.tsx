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
  "/assets/interior/flooring/wood-look-tile-flooring-living-area.jpg",
  "/assets/interior/flooring/wood-look-tile-entryway.jpg",
  "/assets/interior/flooring/wood-look-tile-hallway.jpg",
  "/assets/interior/flooring/dining-room-wood-look-tile.jpg",
  "/assets/interior/flooring/hallway-flooring-transition.jpg",
  "/assets/interior/flooring/hallway-wood-look-flooring.jpg",
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
