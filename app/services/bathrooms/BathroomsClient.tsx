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
  "/assets/interior/bathrooms/luxury-bathroom-shower-tub.jpg",
  "/assets/interior/bathrooms/bathroom-remodel-dual-shower.jpg",
  "/assets/interior/bathrooms/freestanding-tub-walk-in-shower.jpg",
  "/assets/interior/bathrooms/walk-in-shower-pebble-tile.jpg",
  "/assets/interior/bathrooms/bathroom-vanity-modern-lighting.jpg",
  "/assets/interior/bathrooms/shower-detail-linear-drain.jpg",
  "/assets/interior/bathrooms/bathroom-vanity-makeup-station.jpg",
  "/assets/interior/bathrooms/bathroom-remodel-vanity.jpg",
  "/assets/interior/bathrooms/bathroom-remodel-in-progress.jpg",
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
