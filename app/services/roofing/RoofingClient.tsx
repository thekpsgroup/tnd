"use client"

import ServicePageClient from "@/components/service-page-client"

const RoofingDescription = () => (
  <p>
    Protect your biggest investment with a durable, high-quality roof from TND Texas. We offer roof repair, replacement,
    and new installation services using top-tier materials to ensure your home is safe and secure.
  </p>
)

const gallery = [
  "/roofing-projects/asphalt-shingle-roof-replacement.png",
  "/roofing-projects/modern-home-metal-roof.png",
  "/roofing-projects/roof-repair-in-progress.png",
  "/roofing-projects/suburban-house-new-roof.png",
  "/roofing-projects/drone-shot-large-roof.png",
  "/roofing-projects/roof-detail-chimney-flashing.png",
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
