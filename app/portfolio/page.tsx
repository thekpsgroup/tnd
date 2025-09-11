import PortfolioClient from "./PortfolioClient"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Construction Portfolio Dallas Fort Worth | Kitchen & Bathroom Remodels DFW | TND Texas",
  description: "View our construction portfolio Dallas Fort Worth. Stunning kitchen remodels, bathroom renovations, roofing projects & exterior work. Expert remodeling contractors DFW. Before & after photos. Licensed & insured.",
  keywords: [
    "construction portfolio Dallas",
    "kitchen remodel portfolio Fort Worth",
    "bathroom renovation portfolio DFW",
    "roofing portfolio North Texas",
    "home improvement portfolio Dallas",
    "remodeling before and after",
    "construction project photos DFW",
    "kitchen renovation gallery Plano",
    "bathroom remodel gallery Frisco",
    "roofing project photos McKinney",
    "exterior construction portfolio",
    "interior remodeling portfolio Dallas",
    "home renovation photos Fort Worth",
    "construction company portfolio DFW"
  ],
  openGraph: {
    title: "Construction Portfolio Dallas Fort Worth | Kitchen & Bathroom Remodels DFW",
    description: "View our construction portfolio Dallas Fort Worth. Stunning kitchen remodels, bathroom renovations, roofing projects & exterior work.",
    url: "https://tndtexas.com/portfolio",
    images: [
      {
        url: "/assets/interior/kitchens/modern-kitchen-remodel-grey-cabinets.jpg",
        width: 1200,
        height: 630,
        alt: "TND Texas Construction Portfolio - Kitchen Remodel Dallas Fort Worth",
      },
    ],
  },
}

export default function PortfolioPage() {
  return (
    <AnimatedSection>
      <PortfolioClient />
    </AnimatedSection>
  )
}
