import { LeadForm } from "@/components/lead-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Clock, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export const metadata = {
  title: "Contact TND Texas | Construction Company Dallas Fort Worth | Free Estimates",
  description: "Contact TND Texas - #1 Construction Company Dallas Fort Worth. Get free estimates for kitchen remodels, bathroom renovations, roofing & home improvements. Call (903) 603-4150. Licensed contractors DFW.",
  keywords: [
    "contact construction company Dallas",
    "construction company Fort Worth contact",
    "free estimate DFW",
    "remodeling contractors contact",
    "kitchen remodel estimate Dallas",
    "bathroom renovation quote Fort Worth",
    "roofing contractors contact North Texas",
    "home improvement estimate Plano",
    "construction company phone number DFW",
    "remodeling contractors near me",
    "general contractor contact Dallas",
    "home renovation estimate Fort Worth"
  ],
  openGraph: {
    title: "Contact TND Texas | Construction Company Dallas Fort Worth",
    description: "Contact TND Texas for free estimates. #1 Construction Company Dallas Fort Worth. Kitchen remodels, bathroom renovations, roofing & home improvements.",
    url: "https://tndtexas.com/contact",
    images: [
      {
        url: "/assets/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "Contact TND Texas - Construction Company Dallas Fort Worth",
      },
    ],
  },
}

interface ContactPageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ContactPage({ searchParams }: ContactPageProps) {
  const isSuccess = searchParams?.success === 'true'

  if (isSuccess) {
    return (
      <AnimatedSection>
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-green-700">
              Thank You!
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Your request has been submitted successfully. One of our experts will be in touch within 24 hours to discuss your project.
            </p>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-2">What happens next?</h3>
              <ul className="text-left text-green-700 space-y-2">
                <li>• We'll review your project details within 24 hours</li>
                <li>• A project consultant will call you to discuss your vision</li>
                <li>• We'll provide a detailed quote and timeline</li>
                <li>• We'll schedule your free in-home consultation</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    )
  }

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
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:brandon@tndtexas.com" className="text-muted-foreground hover:text-primary transition-colors">
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
