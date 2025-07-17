"use client"

import ServicePageClient from "@/components/service-page-client"

const CommercialDescription = () => (
  <p>
    We bring the same commitment to quality and craftsmanship to our commercial projects. From office build-outs and
    retail renovations to specialized spaces like gyms, we have the experience to deliver your project on time and on
    budget.
  </p>
)

const gallery = [
  "/portfolio/commercial-reception-desk.jpg",
  "/portfolio/commercial-space-blue-wall.jpg",
  "/portfolio/commercial-gym-accent-wall.jpg",
  "/portfolio/commercial-gym-workout-room.jpg",
  "/portfolio/wood-look-tile-entryway.jpg",
  "/portfolio/wood-look-tile-hallway.jpg",
]

export default function CommercialClient() {
  return (
    <ServicePageClient
      serviceName="Commercial Projects"
      serviceDescription={<CommercialDescription />}
      galleryImages={gallery}
    />
  )
}
