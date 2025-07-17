"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

interface LocationPageClientProps {
  locationName: string
  locationInfo: React.ReactNode
  imageUrl: string
}

export default function LocationPageClient({ locationName, locationInfo, imageUrl }: LocationPageClientProps) {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="space-y-4">
            {locationInfo}
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Get a Free Quote in {locationName}</Link>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`T&D Construction services in ${locationName}`}
            className="rounded-lg shadow-xl aspect-video w-full object-cover"
            width={600}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
