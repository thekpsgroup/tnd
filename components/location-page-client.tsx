"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

interface LocationPageClientProps {
  cityName: string
  heroImageSrc: string
  heroImageAlt: string
  pageTitle: string
  services: {
    title: string
    description: string
    href: string
  }[]
  mainContent: React.ReactNode
}

export function LocationPageClient({
  cityName,
  heroImageSrc,
  heroImageAlt,
  pageTitle,
  services,
  mainContent,
}: LocationPageClientProps) {
  return (
    <>
      <section className="relative h-[400px] w-full flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 overflow-hidden">
          <Image src={heroImageSrc || "/placeholder.svg"} alt={heroImageAlt} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container px-4 md:px-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{pageTitle}</h1>
          <p className="mt-4 text-lg text-gray-200 md:text-xl max-w-3xl mx-auto">
            Your trusted local partner for expert home remodeling and construction services in {cityName}, Texas.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose lg:prose-xl max-w-full">{mainContent}</div>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Our Services in {cityName}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {services.map((service) => (
                    <div key={service.title} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Ready to Start Your Project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Let's build your vision together. Contact us today for a free, no-obligation estimate for your{" "}
                    {cityName} home.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <Link href="/contact">Get Your Free Estimate</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LocationPageClient
