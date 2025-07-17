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
  "/portfolio/decks/rustic-deck-wood-ceiling.jpg",
  "/portfolio/decks/modern-porch-stone-fireplace.jpg",
  "/portfolio/decks/screened-porch-blue-ceiling.jpg",
  "/portfolio/decks/covered-deck-fireplace.jpg",
  "/portfolio/decks/large-screened-porch-dining.jpg",
  "/portfolio/decks/screened-porch-fireplace.jpg",
  "/portfolio/decks/covered-porch-lounge.jpg",
  "/portfolio/decks/modern-covered-deck.jpg",
  "/portfolio/decks/porch-exterior-storage.jpg",
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
