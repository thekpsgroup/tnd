import type React from "react"
import type { Metadata } from "next"
import Head from "next/head"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { SchemaMarkup } from "@/components/schema-markup"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Phone, MessageCircle } from "lucide-react"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "TND Texas | #1 Construction Company Dallas Fort Worth | Remodeling Contractors DFW",
  description: "Top-rated construction company in Dallas Fort Worth. Expert remodeling contractors DFW specializing in kitchen remodels, bathroom renovations, roofing & home improvements. Free estimates. Licensed & insured.",
  keywords: "construction company Dallas, construction company Fort Worth, remodeling contractors DFW, kitchen remodel Dallas, bathroom renovation Fort Worth, roofing contractors North Texas, home improvement DFW, general contractor Dallas Fort Worth",
  authors: [{ name: "TND Texas" }],
  creator: "TND Texas",
  publisher: "TND Texas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tndtexas.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "TND Texas | #1 Construction Company Dallas Fort Worth",
    description: "Top-rated construction company in Dallas Fort Worth. Expert remodeling contractors DFW specializing in kitchen remodels, bathroom renovations, roofing & home improvements.",
    url: "https://tndtexas.com",
    siteName: "TND Texas",
    images: [
      {
        url: "/assets/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "TND Texas - Construction Company Dallas Fort Worth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TND Texas | #1 Construction Company Dallas Fort Worth",
    description: "Top-rated construction company in Dallas Fort Worth. Expert remodeling contractors DFW.",
    images: ["/assets/logos/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: 'hMgGzqBtHA_BcwlN8IiOGrtNyZ7IZUit7P1Nkcu0eCA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yet-another-react-lightbox@2.17.0/dist/styles.css" />
        <SchemaMarkup />
        <meta name="google-site-verification" content="hMgGzqBtHA_BcwlN8IiOGrtNyZ7IZUit7P1Nkcu0eCA" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-X4CLDJ346F"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-X4CLDJ346F', {
                page_title: document.title,
                page_location: window.location.href
              });
            `
          }}
        />
      </Head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />

            {/* Trust Bar */}
            <div className="bg-gradient-to-r from-slate-50 via-blue-50/30 to-purple-50/30 border-b border-slate-200/50">
              <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-center gap-8 text-sm text-slate-600">
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-semibold">5.0 Rating</span>
                  </div>
                  <div className="h-4 w-px bg-slate-300"></div>
                  <span>200+ Happy Customers</span>
                  <div className="h-4 w-px bg-slate-300"></div>
                  <span>15+ Years Experience</span>
                  <div className="h-4 w-px bg-slate-300"></div>
                  <span>Licensed & Insured</span>
                  <div className="h-4 w-px bg-slate-300"></div>
                  <span>Free Estimates</span>
                </div>
              </div>
            </div>

            {/* Floating CTA Buttons */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
              {/* Phone Call Button */}
              <Link
                href="tel:903-603-4150"
                className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="w-6 h-6" />
                <div className="absolute -top-12 -left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                    Call Now
                    <div className="absolute top-full left-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </div>
                </div>
              </Link>

              {/* Contact Form Button */}
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
                <div className="absolute -top-12 -right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                    Get Quote
                    <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
