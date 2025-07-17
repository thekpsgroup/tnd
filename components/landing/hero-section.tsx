"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-[600px] w-full flex items-center justify-center text-center text-white">
      <video
        src="/background-video.mp4"
        poster="/portfolio/pergolas/deck-pergola-string-lights.jpg"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 -z-10" />
      <div className="container px-4 md:px-6 z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Building Your Vision. Exceeding Expectations.
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 md:text-xl">
            TND Texas is North Texas's premier general contractor for luxury remodeling, custom construction,
            no project too small.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Estimate</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent text-white hover:bg-white hover:text-primary"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
