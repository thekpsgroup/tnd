"use client"

import ServicePageClient from "@/components/service-page-client"

const RoofingDescription = () => (
  <p>
    Protect your biggest investment with a durable, high-quality roof from TND Texas. We offer roof repair, replacement,
    and new installation services using top-tier materials to ensure your home is safe and secure.
  </p>
)

const gallery = [
  "/assets/services/roofing/asphalt-shingle-roof-replacement.png",
  "/assets/services/roofing/modern-home-metal-roof.png.jpg",
  "/assets/services/roofing/roof-repair-in-progress.png",
  "/assets/services/roofing/suburban-house-new-roof.png",
  "/assets/services/roofing/drone-shot-large-roof.png",
  "/assets/services/roofing/roof-detail-chimney-flashing.jpg",
]

export default function RoofingClient() {
  return (
    <ServicePageClient
      serviceName="Roofing Services"
      serviceDescription={<RoofingDescription />}
      galleryImages={gallery}
    />
  )
}
