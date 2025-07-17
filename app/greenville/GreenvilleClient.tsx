"use client"

import LocationPageClient from "@/components/location-page-client"

const GreenvilleInfo = () => (
  <>
    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Premier Contractor in Greenville, TX</h1>
    <p className="mt-4 text-lg text-muted-foreground">
      Residents of Greenville trust T&D Construction for high-quality home renovation and construction services. Our
      commitment to excellence ensures your project is completed to the highest standards.
    </p>
    <p className="mt-4 text-muted-foreground">
      From historic home restorations to modern upgrades, our team has the expertise to handle any project, big or
      small.
    </p>
  </>
)

export default function GreenvilleClient() {
  return (
    <LocationPageClient
      locationName="Greenville"
      locationInfo={<GreenvilleInfo />}
      imageUrl="/charming-house-greenville-texas.png"
    />
  )
}
