import PortfolioClient from "./PortfolioClient"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Portfolio | TND Texas",
  description:
    "Browse our portfolio of completed projects, including kitchen remodels, bathroom renovations, roofing, and exterior projects across North Texas.",
}

export default function PortfolioPage() {
  return (
    <AnimatedSection>
      <PortfolioClient />
    </AnimatedSection>
  )
}
