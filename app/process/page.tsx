import ProcessClient from "./ProcessClient"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Our Process | TND Texas",
  description:
    "Learn about our streamlined 4-step process at TND Texas, designed to make your home renovation experience smooth and stress-free from start to finish.",
}

export default function ProcessPage() {
  return (
    <AnimatedSection>
      <ProcessClient />
    </AnimatedSection>
  )
}
