import { HeroSection } from "@/components/landing/hero-section"
import { ServicesSection } from "@/components/landing/services-section"
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { RecentWorkSection } from "@/components/landing/recent-work-section"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "TND Texas | Your Trusted North Texas General Contractor",
  description:
    "TND Texas offers expert roofing, kitchen remodeling, and exterior services across North Texas, including Fate, Plano, and Mesquite. Contact us for a free estimate.",
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
