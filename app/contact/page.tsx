import { LeadForm } from "@/components/lead-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Contact Us | TND Texas",
  description:
    "Get a free estimate for your next home project. Contact TND Texas for expert construction and remodeling services.",
}

export default function ContactPage() {
  return (
    <AnimatedSection>
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get a Free Estimate</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Fill out the form below and one of our experts will get back to you shortly.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-card p-8 rounded-lg border shadow-sm">
            <LeadForm />
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:903-603-4150" className="text-muted-foreground hover:text-primary">
                    (903) 603-4150
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:brandon@tndtexas.com" className="text-muted-foreground hover:text-primary">
                    brandon@tndtexas.com
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center gap-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 5:00 PM</p>
                </div>
                <div className="flex items-center gap-4 ml-10">
                  <p className="text-muted-foreground">Saturday - Sunday: By Appointment</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
