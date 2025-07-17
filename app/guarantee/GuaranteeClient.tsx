"use client"

import { CheckCircle2, ShieldCheck, Clock, DollarSign } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function GuaranteeClient() {
  const guarantees = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Workmanship Warranty",
      description: "We stand behind our work with a comprehensive workmanship warranty on all projects.",
    },
    {
      icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
      title: "Material Guarantee",
      description:
        "We use only high-quality, durable materials from trusted manufacturers, covered by their respective warranties.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "On-Time Completion",
      description: "We respect your time and are committed to completing your project within the agreed-upon schedule.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-primary" />,
      title: "Transparent Pricing",
      description: "No hidden fees. We provide detailed, upfront estimates so you know exactly what to expect.",
    },
  ]

  return (
    <AnimatedSection>
      <div className="bg-secondary py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Guarantee to You</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Your peace of mind is our top priority. We are committed to delivering exceptional quality and service,
              backed by our solid guarantee.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {guarantees.map((item) => (
              <div key={item.title} className="flex items-start space-x-4 rounded-lg bg-card p-6 border shadow-sm">
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
