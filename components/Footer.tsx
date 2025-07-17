import Link from "next/link"
import Image from "next/image"
import { SERVICES, LOCATIONS } from "@/lib/constants"

export default function Footer() {
  return (
    <footer className="bg-muted p-6 md:py-12 w-full">
      <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        <div className="grid gap-1">
          <h3 className="font-semibold">Company</h3>
          <Link href="/about">About Us</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/process">Our Process</Link>
          <Link href="/guarantee">Our Guarantee</Link>
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Services</h3>
          {SERVICES.map((service) => (
            <Link key={service.href} href={service.href}>
              {service.title}
            </Link>
          ))}
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Service Areas</h3>
          {LOCATIONS.map((location) => (
            <Link key={location.href} href={location.href}>
              {location.title}
            </Link>
          ))}
        </div>
        <div className="grid gap-1">
          <h3 className="font-semibold">Support</h3>
          <Link href="/financing">Financing</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className="flex flex-col items-start gap-4 md:col-span-5 lg:col-span-1 lg:items-end">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="TND Texas Logo" width={160} height={45} />
          </Link>
          <p className="text-muted-foreground text-right">
            &copy; {new Date().getFullYear()} TND Texas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
