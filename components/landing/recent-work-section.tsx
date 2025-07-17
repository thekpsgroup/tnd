"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

const recentWorkImages = [
  { src: "/portfolio/pergolas/wood-deck-pergola.jpg", alt: "Deck with a large wooden pergola" },
  { src: "/portfolio/decks/modern-porch-stone-fireplace.jpg", alt: "Modern porch with stone fireplace" },
  { src: "/portfolio/luxury-bathroom-shower-tub.jpg", alt: "Luxury bathroom with freestanding tub" },
  {
    src: "/portfolio/patios/slate-stamped-patio-with-seating-wall.jpg",
    alt: "Stamped concrete patio with seating wall",
  },
  { src: "/portfolio/modern-kitchen-remodel-grey-cabinets.jpg", alt: "Modern kitchen remodel" },
  { src: "/portfolio/decks/screened-porch-blue-ceiling.jpg", alt: "Screened porch with blue ceiling" },
]

export function RecentWorkSection() {
  return (
    <section id="recent-work" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Recent Work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentWorkImages.map((image) => (
            <div key={image.src} className="overflow-hidden rounded-lg shadow-lg group">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-auto object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/portfolio">View Full Portfolio</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
