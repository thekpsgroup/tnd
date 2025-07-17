"use client"

import { useState } from "react"
import Image from "next/image"
import { LightboxWrapper } from "@/components/lightbox"

const images = [
  { src: "/portfolio/decks/rustic-deck-wood-ceiling.jpg", alt: "Rustic covered deck with wood panel ceiling" },
  { src: "/portfolio/pergolas/deck-pergola-string-lights.jpg", alt: "Deck with a pergola and string lights" },
  { src: "/portfolio/decks/modern-porch-stone-fireplace.jpg", alt: "Modern porch with a large stone fireplace" },
  { src: "/portfolio/luxury-bathroom-shower-tub.jpg", alt: "Luxury bathroom with glass shower and freestanding tub" },
  { src: "/portfolio/modern-kitchen-remodel-grey-cabinets.jpg", alt: "Modern kitchen with grey cabinets" },
  { src: "/portfolio/patios/slate-stamped-patio-with-seating-wall.jpg", alt: "Slate stamped concrete patio" },
  { src: "/portfolio/decks/screened-porch-blue-ceiling.jpg", alt: "Screened-in porch with a light blue ceiling" },
  { src: "/portfolio/pergolas/patio-pergola-stone-columns.jpg", alt: "Patio pergola with stone columns" },
  { src: "/portfolio/decks/covered-deck-fireplace.jpg", alt: "Covered deck with an outdoor fireplace" },
  { src: "/portfolio/bathroom-remodel-dual-shower.jpg", alt: "Bathroom remodel with dual shower heads" },
  { src: "/portfolio/patios/deck-patio-gazebo-aerial.jpg", alt: "Aerial view of a deck and patio with a gazebo" },
  { src: "/portfolio/pergolas/white-vinyl-pergola.jpg", alt: "Elegant white vinyl pergola on a stone patio" },
  { src: "/portfolio/decks/large-screened-porch-dining.jpg", alt: "Large screened porch with dining area" },
  { src: "/portfolio/patios/flagstone-patio-fire-pit.jpg", alt: "Flagstone patio with a fire pit" },
  { src: "/portfolio/pergolas/wood-deck-pergola.jpg", alt: "Classic wood pergola on a composite deck" },
  { src: "/portfolio/walk-in-shower-pebble-tile.jpg", alt: "Walk-in shower with pebble tile floor" },
  { src: "/portfolio/patios/ashlar-slate-patio-dark-border.jpg", alt: "Ashlar slate patio with a dark border" },
  { src: "/portfolio/commercial-reception-desk.jpg", alt: "Commercial reception desk and waiting area" },
  { src: "/portfolio/wood-look-tile-flooring-living-area.jpg", alt: "Living area with wood-look tile flooring" },
  { src: "/portfolio/decks/screened-porch-fireplace.jpg", alt: "Screened porch with a cozy fireplace" },
  { src: "/portfolio/pergolas/grey-deck-attached-pergola.jpg", alt: "Grey composite deck with an attached pergola" },
]

export default function PortfolioClient() {
  const [index, setIndex] = useState(-1)
  const slides = images.map(({ src, alt }) => ({ src, alt }))

  return (
    <>
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Work</h1>
          <p className="text-lg text-muted-foreground">
            Take a look at the quality and craftsmanship we bring to every project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="group relative aspect-square w-full h-full overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => setIndex(idx)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <LightboxWrapper slides={slides} index={index} close={() => setIndex(-1)} />
    </>
  )
}
