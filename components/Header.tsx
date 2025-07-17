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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 isolate">
      <div className="container flex h-20 items-center justify-between">
        {/* Left-aligned group */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="TND Texas Logo" width={140} height={40} className="object-contain" />
          </Link>
          {/* THE DEFINITIVE FIX: Override the component's internal flex-1 style with flex-initial */}
          <NavigationMenu className="hidden lg:flex flex-initial">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Portfolio</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
                <NavigationMenuTrigger>Service Areas</NavigationMenuTrigger>
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
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Our Process</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/guarantee" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Our Guarantee</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/financing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Financing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        {/* Right-aligned group */}
        <div className="flex items-center gap-2">
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/contact">Contact Us</Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col p-6">
              <Link href="/" className="mb-4 flex-shrink-0" onClick={() => setIsSheetOpen(false)}>
                <Image src="/logo.png" alt="TND Texas Logo" width={140} height={40} />
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
