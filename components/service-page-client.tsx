"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { LightboxWrapper } from "./lightbox"

interface ServicePageClientProps {
  serviceName: string
  serviceDescription: React.ReactNode
  galleryImages: string[]
}

export default function ServicePageClient({ serviceName, serviceDescription, galleryImages }: ServicePageClientProps) {
  const [index, setIndex] = useState(-1)

  const slides = galleryImages.map((src) => ({ src }))

  return (
    <>
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{serviceName}</h1>
          <div className="text-lg text-muted-foreground">{serviceDescription}</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onClick={() => setIndex(idx)}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={`${serviceName} example ${idx + 1}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg">
            <Link href="/contact">Start Your {serviceName} Project Today</Link>
          </Button>
        </div>
      </div>
      <LightboxWrapper slides={slides} index={index} close={() => setIndex(-1)} />
    </>
  )
}
