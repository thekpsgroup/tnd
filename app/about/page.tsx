import AboutClient from "./AboutClient"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "About TND Texas | North Texas",
  description:
    "Learn about TND Texas's commitment to quality, integrity, and reliability in serving the North Texas community for over 15 years.",
}

export default function AboutPage() {
  return (
    <AnimatedSection>
      <AboutClient />
    </AnimatedSection>
  )
}
