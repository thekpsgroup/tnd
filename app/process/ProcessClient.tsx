"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, DraftingCompass, HardHat, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: <ClipboardList className="h-8 w-8 text-primary" />,
    title: "Initial Consultation",
    description: "We start with a free, no-obligation consultation to discuss your vision, needs, and budget.",
  },
  {
    icon: <DraftingCompass className="h-8 w-8 text-primary" />,
    title: "Design & Proposal",
    description:
      "Our team creates a detailed design and provides a transparent proposal outlining the project scope and cost.",
  },
  {
    icon: <HardHat className="h-8 w-8 text-primary" />,
    title: "Construction",
    description:
      "Our skilled craftsmen get to work, maintaining a clean and safe job site while bringing your design to life.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Final Walkthrough",
    description:
      "We conduct a final walkthrough with you to ensure every detail is perfect and you are completely satisfied.",
  },
]

export default function ProcessClient() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Simple Process</h1>
        <p className="text-lg text-muted-foreground mb-12">
          We've streamlined our process to make your home renovation experience as smooth and stress-free as possible.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <Card key={step.title} className="text-center">
            <CardHeader className="items-center">
              <div className="p-3 rounded-full bg-primary/10 mb-2">{step.icon}</div>
              <CardTitle className="mt-2">{step.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
