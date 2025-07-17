"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jane D.",
    quote:
      "TND Texas did an amazing job on our roof. The quality and professionalism were top-notch. Highly recommend!",
    avatar: "/woman-portrait.png",
    rating: 5,
  },
  {
    name: "John S.",
    quote:
      "Our new kitchen is a dream come true. The team was professional, efficient, and the final result exceeded our expectations.",
    avatar: "/thoughtful-man-portrait.png",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4 mt-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">- {testimonial.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
