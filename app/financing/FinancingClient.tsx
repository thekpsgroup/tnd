"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import Link from "next/link"

export default function FinancingClient() {
  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Financing Your Project</h1>
          <p className="text-lg text-muted-foreground mb-12">
            We believe that your dream home shouldn't have to wait. That's why we've partnered with leading financial
            institutions to offer flexible and affordable financing options for your next home renovation project.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Simple Application Process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our financing partners offer a quick and easy online application. Get pre-qualified in minutes without
                impacting your credit score.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flexible Payment Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Choose from a variety of payment plans with competitive interest rates to find an option that fits your
                budget.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/contact">Learn More & Apply Now</Link>
          </Button>
        </div>
      </div>
    </AnimatedSection>
  )
}
