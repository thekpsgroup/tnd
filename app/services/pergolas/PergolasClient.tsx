"use client"

import ServicePageClient from "@/components/service-page-client"

const PergolasDescription = () => (
  <p>
    Define your outdoor space and add a touch of elegance with a custom-designed pergola. Whether you're looking for a
    classic wood structure or a modern, low-maintenance design, we build pergolas that provide shade, style, and a
    perfect focal point for your patio or deck.
  </p>
)

const gallery = [
  "/assets/exterior/pergolas/wood-deck-pergola.jpg",
  "/assets/exterior/pergolas/deck-pergola-string-lights.jpg",
  "/assets/exterior/pergolas/patio-pergola-stone-columns.jpg",
  "/assets/exterior/pergolas/grey-deck-attached-pergola.jpg",
  "/assets/exterior/pergolas/white-vinyl-pergola.jpg",
  "/assets/exterior/pergolas/patio-pergola-under-deck.jpg",
  "/assets/exterior/pergolas/composite-deck-pergola-corner.jpg",
  "/assets/exterior/pergolas/deck-pergola-custom-design.jpg",
]

export default function PergolasClient() {
  return (
    <ServicePageClient
      serviceName="Custom Pergolas"
      serviceDescription={<PergolasDescription />}
      galleryImages={gallery}
    />
  )
}
