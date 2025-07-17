"use client"

import ServicePageClient from "@/components/service-page-client"

const BathroomsDescription = () => (
  <p>
    Turn your bathroom into a personal oasis. We specialize in creating beautiful, functional, and relaxing bathrooms,
    from spa-like master suites to stylish powder rooms. Our services include custom showers, vanities, flooring, and
    lighting.
  </p>
)

const gallery = [
  "/portfolio/luxury-bathroom-shower-tub.jpg",
  "/portfolio/bathroom-remodel-dual-shower.jpg",
  "/portfolio/freestanding-tub-walk-in-shower.jpg",
  "/portfolio/walk-in-shower-pebble-tile.jpg",
  "/portfolio/bathroom-vanity-modern-lighting.jpg",
  "/portfolio/shower-detail-linear-drain.jpg",
  "/portfolio/bathroom-vanity-makeup-station.jpg",
  "/portfolio/bathroom-remodel-vanity.jpg",
  "/portfolio/bathroom-remodel-in-progress.jpg",
]

export default function BathroomsClient() {
  return (
    <ServicePageClient
      serviceName="Bathroom Remodeling"
      serviceDescription={<BathroomsDescription />}
      galleryImages={gallery}
    />
  )
}
