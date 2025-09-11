"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    name: "Decks & Screened Porches",
    description: "Beautiful, functional outdoor living spaces.",
    href: "/services/decks",
    image: "/assets/exterior/decks/modern-porch-stone-fireplace.jpg",
  },
  {
    name: "Custom Pergolas",
    description: "Add style and shade to your backyard.",
    href: "/services/pergolas",
    image: "/assets/exterior/pergolas/pergola-custom-wooden-design.jpg",
  },
  {
    name: "Stamped Concrete & Patios",
    description: "Durable and elegant patio solutions.",
    href: "/services/patios",
    image: "/assets/exterior/patios/slate-stamped-patio-with-seating-wall.jpg",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">Our Services</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link key={service.name} href={service.href} className="group block">
              <Card className="h-full overflow-hidden transition-all duration-200 group-hover:border-primary group-hover:shadow-lg">
                <div className="overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    width={400}
                    height={225}
                  />
                </div>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
