"use client"

import ServicePageClient from "@/components/service-page-client"

const ExteriorDescription = () => (
  <p>
    Boost your home's curb appeal and value with our expert exterior services. We handle everything from durable siding
    and energy-efficient windows to professional painting, using only the best materials to ensure a lasting finish.
  </p>
)

const gallery = ["/home-exterior-new-siding.png", "/modern-home-exterior.png", "/freshly-painted-house.png"]

export default function ExteriorProjectsClient() {
  return (
    <ServicePageClient
      serviceName="Exterior & Siding"
      serviceDescription={<ExteriorDescription />}
      galleryImages={gallery}
    />
  )
}
