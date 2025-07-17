"use client"

import { Award, HardHat, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: <HardHat className="h-10 w-10 text-primary" />,
    title: "Quality Craftsmanship",
    description: "Our experienced team is dedicated to delivering superior workmanship on every project, big or small.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Premium Materials",
    description: "We use only high-quality, durable materials from trusted manufacturers to ensure lasting results.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Our Guarantee",
    description:
      "Your peace of mind is our priority. We stand behind our work with a comprehensive workmanship warranty.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose TND Texas?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We're committed to providing an exceptional experience and an outstanding final product.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-primary/10 p-4">{feature.icon}</div>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
