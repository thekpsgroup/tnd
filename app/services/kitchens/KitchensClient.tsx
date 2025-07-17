"use client"

import ServicePageClient from "@/components/service-page-client"

const KitchensDescription = () => (
  <p>
    Transform your kitchen into the heart of your home. From custom cabinets and modern countertops to functional
    layouts and stylish lighting, we handle every detail of your kitchen remodel to create a space you'll love.
  </p>
)

const gallery = [
  "/portfolio/modern-kitchen-remodel-grey-cabinets.jpg",
  "/bright-modern-kitchen.png",
  "/luxury-marble-kitchen.png",
]

export default function KitchensClient() {
  return (
    <ServicePageClient
      serviceName="Kitchen Remodeling"
      serviceDescription={<KitchensDescription />}
      galleryImages={gallery}
    />
  )
}
