"use client"

import ServicePageClient from "@/components/service-page-client"

const DecksDescription = () => (
  <p>
    From spacious composite decks for entertaining to cozy screened-in porches for relaxing, we create outdoor living
    spaces that are a true extension of your home. Our designs incorporate features like outdoor fireplaces, custom
    lighting, and entertainment systems to build your perfect backyard retreat.
  </p>
)

const gallery = [
  "/assets/exterior/decks/rustic-deck-wood-ceiling.jpg",
  "/assets/exterior/decks/modern-porch-stone-fireplace.jpg",
  "/assets/exterior/decks/screened-porch-blue-ceiling.jpg",
  "/assets/exterior/decks/covered-deck-fireplace.jpg",
  "/assets/exterior/decks/large-screened-porch-dining.jpg",
  "/assets/exterior/decks/screened-porch-fireplace.jpg",
  "/assets/exterior/decks/covered-porch-lounge.jpg",
  "/assets/exterior/decks/modern-covered-deck.jpg",
  "/assets/exterior/decks/porch-exterior-storage.jpg",
]

export default function DecksClient() {
  return (
    <ServicePageClient
      serviceName="Decks & Screened Porches"
      serviceDescription={<DecksDescription />}
      galleryImages={gallery}
    />
  )
}
