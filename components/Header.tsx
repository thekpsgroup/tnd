"use client"

import React, { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { SERVICES, LOCATIONS } from "@/lib/constants"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/30 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 shadow-lg shadow-slate-900/5 isolate">
      <div className="container flex h-[9rem] items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative overflow-hidden rounded-xl p-2 bg-[#f5efe6] shadow-sm group-hover:shadow-lg group-hover:scale-105 transition-all duration-500 border border-[#e9dfcf]">
              <Image
                src="/assets/logos/logo.png"
                alt="TND Texas Logo"
                width={200}
                height={56}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </Link>
          <NavigationMenu className="hidden lg:flex flex-initial">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title="About TND Texas Construction Company">About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title="Construction Portfolio Dallas Fort Worth - Kitchen & Bathroom Remodels">Portfolio</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger title="Construction Services Dallas Fort Worth">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] max-h-[75vh] overflow-y-auto">
                    {SERVICES.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger title="Service Areas Dallas Fort Worth Metroplex">Service Areas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-3 p-4 md:w-[250px] max-h-[75vh] overflow-y-auto">
                    {LOCATIONS.map((location) => (
                      <ListItem key={location.title} title={location.title} href={location.href} />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/process" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title="Construction Process Dallas Fort Worth">Our Process</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/guarantee" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title="Construction Guarantee Dallas Fort Worth">Our Guarantee</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/financing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} title="Construction Financing Options DFW">Financing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <Button asChild className="hidden lg:inline-flex bg-[#b87333] hover:bg-[#a9692f] text-white shadow-lg hover:shadow-xl transition-all duration-300 font-semibold px-6">
            <Link href="/contact" className="flex items-center gap-2">
              <span>Get Free Quote</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-6 bg-white/85 backdrop-blur-xl border-r border-slate-200/50">
              <Link href="/" className="mb-8 flex-shrink-0" onClick={() => setIsSheetOpen(false)}>
                <div className="relative overflow-hidden rounded-xl p-3 bg-[#f5efe6] shadow-lg border border-[#e9dfcf]">
                  <Image
                    src="/assets/logos/logo.png"
                    alt="TND Texas Logo"
                    width={160}
                    height={44}
                    className="object-contain"
                  />
                </div>
              </Link>
              <ScrollArea className="flex-grow">
                <nav className="flex flex-col space-y-2 pr-4">
                  <Link href="/about" className="font-medium text-lg" onClick={() => setIsSheetOpen(false)}>
                    About
                  </Link>
                  <Link href="/portfolio" className="font-medium text-lg" onClick={() => setIsSheetOpen(false)}>
                    Portfolio
                  </Link>

                  <p className="font-semibold text-lg pt-2">Services</p>
                  <div className="flex flex-col space-y-2 pl-4">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="text-muted-foreground"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>

                  <p className="font-semibold text-lg pt-2">Service Areas</p>
                  <div className="flex flex-col space-y-2 pl-4">
                    {LOCATIONS.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="text-muted-foreground"
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {l.title}
                      </Link>
                    ))}
                  </div>

                  <Link href="/process" className="font-medium text-lg pt-2" onClick={() => setIsSheetOpen(false)}>
                    Our Process
                  </Link>
                  <Link href="/guarantee" className="font-medium text-lg" onClick={() => setIsSheetOpen(false)}>
                    Our Guarantee
                  </Link>
                  <Link href="/financing" className="font-medium text-lg" onClick={() => setIsSheetOpen(false)}>
                    Financing
                  </Link>
                </nav>
              </ScrollArea>
              <Button asChild className="mt-4 flex-shrink-0">
                <Link href="/contact" onClick={() => setIsSheetOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"
