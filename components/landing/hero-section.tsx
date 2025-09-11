"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Play, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#141414] to-[#0e0e0e]" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/assets/exterior/homes/exterior-house-modern-facade.jpg')`
        }}
      />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      <div className="container px-4 md:px-6 z-10 relative">
        <div className="max-w-5xl mx-auto">
          {/* Trust indicators */}
          <div className="flex items-center justify-center gap-3 mb-8 opacity-95">
            <div className="flex items-center gap-1 text-yellow-400 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-white">5.0</span>
            </div>
            <span className="text-white/90 font-medium bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              Trusted by 200+ North Texas Families
            </span>
          </div>

          {/* Main heading with gradient text */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-[#f1f1f1] to-white bg-clip-text text-transparent">
              #1 Construction Company
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#b87333] via-[#a0692e] to-[#8c5a2b] bg-clip-text text-transparent">Dallas Fort Worth</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl md:text-2xl leading-relaxed text-gray-200 max-w-4xl mx-auto font-light">
            Top-rated remodeling contractors DFW specializing in kitchen remodels, bathroom renovations, roofing, and home improvements.
            <span className="text-blue-300 font-medium"> Serving Dallas, Fort Worth, Plano, Frisco, McKinney & surrounding areas. Licensed & insured with 15+ years experience.</span>
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#b87333] to-[#8c5a2b] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <Button asChild size="lg" className="relative bg-gradient-to-r from-[#b87333] to-[#8c5a2b] hover:from-[#a9692f] hover:to-[#7a4f26] text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group border-0">
                <Link href="/contact" className="flex items-center gap-2">
                  Get Your Free Estimate
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 hover:border-white/40 px-8 py-4 text-lg font-semibold transition-all duration-300 group border-2"
            >
              <Link href="/portfolio" className="flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Explore Our Gallery
              </Link>
            </Button>
          </div>

          {/* Urgency indicator */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Available for new projects starting next week</span>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">200+</div>
              <div className="text-blue-200 text-sm font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200 text-sm font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200 text-sm font-medium">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
