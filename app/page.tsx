import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { RecentWorkSection } from "@/components/landing/recent-work-section"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "TND Texas | #1 Construction Company Dallas Fort Worth | Remodeling Contractors DFW | Free Estimates",
  description: "#1 Construction Company in Dallas Fort Worth. Top-rated remodeling contractors DFW. Specializing in kitchen remodels, bathroom renovations, roofing, home additions. Serving Dallas, Fort Worth, Plano, Frisco, McKinney & surrounding DFW areas. Licensed, insured, free estimates.",
  keywords: [
    "construction company Dallas",
    "construction company Fort Worth",
    "remodeling contractors DFW",
    "kitchen remodel Dallas",
    "bathroom renovation Fort Worth",
    "roofing contractors North Texas",
    "home improvement DFW",
    "general contractor Dallas Fort Worth",
    "home remodeling Dallas",
    "construction contractors near me",
    "kitchen renovation Plano",
    "bathroom remodel Frisco",
    "roofing company McKinney",
    "home addition Dallas",
    "deck building Fort Worth",
    "patio construction DFW",
    "home renovation contractors",
    "commercial construction Dallas",
    "residential remodeling Fort Worth",
    "emergency roofing Dallas"
  ],
  openGraph: {
    title: "TND Texas | #1 Construction Company Dallas Fort Worth",
    description: "Top-rated construction company in Dallas Fort Worth. Expert remodeling contractors DFW specializing in kitchen remodels, bathroom renovations, roofing & home improvements.",
    url: "https://tndtexas.com",
    siteName: "TND Texas",
    images: [
      {
        url: "/assets/exterior/homes/exterior-house-modern-facade.jpg",
        width: 1200,
        height: 630,
        alt: "TND Texas Construction - Modern Home Facade Dallas Fort Worth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TND Texas | #1 Construction Company Dallas Fort Worth",
    description: "🏆 Top-rated construction company in Dallas Fort Worth. Expert remodeling contractors DFW.",
    images: ["/assets/exterior/homes/exterior-house-modern-facade.jpg"],
  },
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <HeroSection />
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>
        <AnimatedSection>
          <WhyChooseUsSection />
        </AnimatedSection>
        <AnimatedSection>
          <TestimonialsSection />
        </AnimatedSection>
        <AnimatedSection>
          <RecentWorkSection />
        </AnimatedSection>
      </main>
    </div>
  )
}
