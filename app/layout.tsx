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
import { ThemeProvider } from "@/components/theme-provider" // Ensure this is imported

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "TND Texas | Custom Design & Construction Co.",
  description: "Your Trusted North Texas General Contractor for Roofing, Remodeling, and more.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
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
      </Head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.className)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
