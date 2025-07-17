"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import Image from "next/image"

export default function AboutClient() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About TND Texas</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A family-owned and operated business building trust through quality craftsmanship.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
            <div className="prose lg:prose-lg dark:prose-invert">
              <p>
                Our mission is to provide homeowners with exceptional construction services founded on integrity,
                quality, and reliability. We strive to exceed expectations through clear communication, transparent
                pricing, and a commitment to finishing every project on time and on budget.
              </p>
            </div>
          </div>
          <div className="order-first md:order-last">
            <Image
              src="/modern-house-exterior.png"
              alt="Modern house exterior built by TND Texas"
              className="rounded-lg shadow-xl aspect-video w-full object-cover"
              width={600}
              height={400}
            />
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Meet the Founders</h2>
          <p className="mt-2 text-muted-foreground">The driving force behind our commitment to excellence.</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarFallback>BG</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Brandon Gibson</h3>
            <p className="text-primary">Co-Founder</p>
            <p className="mt-2 text-muted-foreground">
              With a passion for building and a commitment to client satisfaction, Brandon co-founded TND Texas to bring
              a higher standard of construction to North Texas.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarFallback>HG</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Holly Gibson</h3>
            <p className="text-primary">Co-Founder</p>
            <p className="mt-2 text-muted-foreground">
              Holly ensures the vision of TND Texas is executed with precision, focusing on client relations and
              business operations to guarantee a seamless experience.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Project Management Team</h2>
          <p className="mt-2 text-muted-foreground">Ensuring your project is a success from start to finish.</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Cody Moore</h3>
            <p className="text-primary">Project Manager</p>
            <p className="mt-2 text-muted-foreground">
              Cody oversees the day-to-day operations on-site, ensuring quality control and clear communication between
              our clients and crew.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarFallback>JB</AvatarFallback>
            </Avatar>
            <h3 className="text-xl font-semibold">Jerry Black</h3>
            <p className="text-primary">Project Manager</p>
            <p className="mt-2 text-muted-foreground">
              Jerry brings years of experience to manage project timelines and resources, guaranteeing efficiency and
              superior craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
