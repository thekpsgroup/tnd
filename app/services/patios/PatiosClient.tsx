"use client"

import ServicePageClient from "@/components/service-page-client"

const PatiosDescription = () => (
  <p>
    Elevate your outdoor living experience with a custom-designed stamped concrete patio from TND Texas. We offer a wide
    variety of patterns and colors to create a beautiful, durable, and low-maintenance surface that complements your
    home and landscape.
  </p>
)

const gallery = [
  "/portfolio/patios/slate-stamped-patio-with-seating-wall.jpg",
  "/portfolio/patios/deck-patio-gazebo-aerial.jpg",
  "/portfolio/patios/flagstone-patio-from-deck.jpg",
  "/portfolio/patios/stamped-concrete-patio-overhead.jpg",
  "/portfolio/patios/slate-patio-seating-wall-lake-view.jpg",
  "/portfolio/patios/deck-patio-night-lighting-aerial.jpg",
  "/portfolio/patios/ashlar-slate-patio-dark-border.jpg",
  "/portfolio/patios/flagstone-patio-fire-pit.jpg",
  "/portfolio/patios/slate-skin-patio-stone-bench.jpg",
]

export default function PatiosClient() {
  return (
    <ServicePageClient
      serviceName="Stamped Concrete & Patios"
      serviceDescription={<PatiosDescription />}
      galleryImages={gallery}
    />
  )
}
