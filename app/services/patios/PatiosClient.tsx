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
  "/assets/exterior/patios/slate-stamped-patio-with-seating-wall.jpg",
  "/assets/exterior/patios/deck-patio-gazebo-aerial.jpg",
  "/assets/exterior/patios/flagstone-patio-from-deck.jpg",
  "/assets/exterior/patios/stamped-concrete-patio-overhead.jpg",
  "/assets/exterior/patios/slate-patio-seating-wall-lake-view.jpg",
  "/assets/exterior/patios/deck-patio-night-lighting-aerial.jpg",
  "/assets/exterior/patios/ashlar-slate-patio-dark-border.jpg",
  "/assets/exterior/patios/flagstone-patio-fire-pit.jpg",
  "/assets/exterior/patios/slate-skin-patio-stone-bench.jpg",
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
