import Link from "next/link"
import Image from "next/image"
import { SERVICES, LOCATIONS } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative container max-w-7xl py-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Company Section */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <Link href="/" className="inline-block group">
                <div className="relative overflow-hidden rounded-xl p-3 bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:scale-105 transition-all duration-500 shadow-xl">
                  <Image
                    src="/assets/logos/logo.png"
                    alt="TND Texas Logo"
                    width={160}
                    height={42}
                    className="object-contain brightness-0 invert group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </Link>
            </div>
            <p className="text-slate-200 text-base leading-relaxed mb-6 max-w-md">
              Transforming homes and creating dream spaces with exceptional craftsmanship and unwavering attention to detail.
            </p>

            {/* Trust indicators */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold">5.0 Rating</span>
              </div>
              <p className="text-slate-300 text-sm">Trusted by 200+ North Texas families</p>
            </div>

            {/* Quick contact */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h4 className="text-white font-semibold mb-3">Get Started Today</h4>
              <div className="space-y-2">
                <a href="tel:903-603-4515" className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span>(903) 603-4515</span>
                </a>
                <a href="mailto:brandon@tndtexas.com" className="flex items-center gap-3 text-slate-200 hover:text-white transition-colors group">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>brandon@tndtexas.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  title="Learn about TND Texas Construction Company"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  title="View our construction portfolio Dallas Fort Worth"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/process"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  title="Our construction process and timeline"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  href="/guarantee"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  title="TND Texas guarantee and warranty information"
                >
                  Our Guarantee
                </Link>
              </li>
            </ul>
        </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
          {SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                    title={`${service.title} - Professional ${service.title.toLowerCase()} services in Dallas Fort Worth`}
                  >
              {service.title}
            </Link>
                </li>
          ))}
            </ul>
        </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Service Areas</h3>
            <ul className="space-y-3">
          {LOCATIONS.map((location) => (
                <li key={location.href}>
                  <Link
                    href={location.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
              {location.title}
            </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Financing Options
                </Link>
              </li>
              <li className="text-slate-300 text-sm pt-2">
                <div className="font-medium text-white mb-1">Phone</div>
                (903) 603-4515
              </li>
              <li className="text-slate-300 text-sm">
                <div className="font-medium text-white mb-1">Location</div>
                North Texas Area
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-12 mt-12">
          {/* Call to Action Bar */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-white font-bold text-lg mb-2">Ready to Start Your Project?</h4>
                <p className="text-slate-200 text-sm">Get a free estimate and turn your vision into reality</p>
        </div>
              <div className="flex gap-3">
                <Link href="/contact" className="bg-[#b87333] hover:bg-[#a9692f] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Free Quote
                </Link>
                <Link
                  href="/portfolio"
                  className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  View Gallery
          </Link>
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} TND Texas. All rights reserved.
          </p>
              <div className="flex items-center gap-2 text-slate-400 text-xs">
                <span>Made with</span>
                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>in North Texas</span>
              </div>
            </div>

            <div className="flex space-x-6">
              <Link href="/privacy" className="text-slate-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-slate-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
