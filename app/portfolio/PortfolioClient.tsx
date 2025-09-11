"use client"

import { useState } from "react"
import Image from "next/image"
import { LightboxWrapper } from "@/components/lightbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Eye, MapPin, Home, Palette } from "lucide-react"

// Interior Gallery Images with descriptions
const interiorImages = [
  {
    src: "/assets/interior/bathrooms/luxury-bathroom-shower-tub.jpg",
    alt: "Luxury spa-like bathroom with freestanding tub and glass shower",
    title: "Luxury Spa Bathroom",
    description: "Elegant bathroom renovation featuring a freestanding tub, frameless glass shower, and premium finishes for a spa-like experience.",
    category: "Bathrooms"
  },
  {
    src: "/assets/interior/bathrooms/bathroom-remodel-dual-shower.jpg",
    alt: "Modern bathroom with dual shower heads and contemporary design",
    title: "Modern Dual Shower Bathroom",
    description: "Contemporary bathroom featuring dual shower heads, sleek tile work, and modern fixtures for ultimate comfort.",
    category: "Bathrooms"
  },
  {
    src: "/assets/interior/bathrooms/walk-in-shower-pebble-tile.jpg",
    alt: "Walk-in shower with beautiful pebble tile flooring",
    title: "Pebble Tile Walk-In Shower",
    description: "Spacious walk-in shower with natural pebble tile flooring, creating a zen-like atmosphere in your bathroom.",
    category: "Bathrooms"
  },
  {
    src: "/assets/interior/bathrooms/shower-detail-linear-drain.jpg",
    alt: "Elegant linear drain shower detail",
    title: "Linear Drain Shower Detail",
    description: "Modern shower featuring a sleek linear drain, frameless glass enclosure, and sophisticated tile installation.",
    category: "Bathrooms"
  },
  {
    src: "/assets/interior/kitchens/modern-kitchen-remodel-grey-cabinets.jpg",
    alt: "Modern kitchen with grey cabinets and premium countertops",
    title: "Contemporary Grey Kitchen",
    description: "Stunning kitchen remodel with custom grey cabinets, quartz countertops, and stainless steel appliances.",
    category: "Kitchens"
  },
  {
    src: "/assets/interior/kitchens/luxury-marble-kitchen.png",
    alt: "Luxury kitchen with marble countertops and high-end finishes",
    title: "Luxury Marble Kitchen",
    description: "Premium kitchen featuring marble countertops, custom cabinetry, and state-of-the-art appliances.",
    category: "Kitchens"
  },
  {
    src: "/assets/interior/kitchens/bright-modern-kitchen.png",
    alt: "Bright and modern kitchen with natural lighting",
    title: "Bright Modern Kitchen",
    description: "Light-filled modern kitchen with open shelving, pendant lighting, and contemporary design elements.",
    category: "Kitchens"
  },
  {
    src: "/assets/interior/flooring/wood-look-tile-flooring-living-area.jpg",
    alt: "Beautiful wood-look tile flooring in living area",
    title: "Wood-Look Tile Flooring",
    description: "Durable and elegant wood-look tile flooring that provides the beauty of hardwood with the resilience of tile.",
    category: "Flooring"
  },
  {
    src: "/assets/interior/flooring/dining-room-wood-look-tile.jpg",
    alt: "Wood-look tile flooring in dining room",
    title: "Dining Room Wood Tile",
    description: "Seamless wood-look tile installation in dining room, creating a sophisticated and cohesive space.",
    category: "Flooring"
  },
  {
    src: "/assets/interior/commercial/commercial-reception-desk.jpg",
    alt: "Professional commercial reception desk and waiting area",
    title: "Commercial Reception Area",
    description: "Modern commercial reception area with custom reception desk, comfortable seating, and professional design.",
    category: "Commercial"
  }
]

// Exterior Gallery Images with descriptions
const exteriorImages = [
  {
    src: "/assets/exterior/decks/rustic-deck-wood-ceiling.jpg",
    alt: "Rustic covered deck with wood panel ceiling and outdoor furniture",
    title: "Rustic Covered Deck",
    description: "Beautifully crafted covered deck with wood panel ceiling, perfect for outdoor entertaining and relaxation.",
    category: "Decks"
  },
  {
    src: "/assets/exterior/decks/modern-porch-stone-fireplace.jpg",
    alt: "Modern porch with large stone fireplace and comfortable seating",
    title: "Modern Porch Fireplace",
    description: "Contemporary porch featuring a grand stone fireplace, ideal for cozy outdoor gatherings and year-round enjoyment.",
    category: "Decks"
  },
  {
    src: "/assets/exterior/decks/screened-porch-blue-ceiling.jpg",
    alt: "Screened-in porch with light blue ceiling and dining area",
    title: "Blue Ceiling Screened Porch",
    description: "Charming screened porch with distinctive blue ceiling, creating a bright and inviting outdoor dining space.",
    category: "Decks"
  },
  {
    src: "/assets/exterior/decks/large-screened-porch-dining.jpg",
    alt: "Large screened porch with extensive dining area",
    title: "Large Screened Dining Porch",
    description: "Spacious screened porch designed for large gatherings, featuring ample dining space and bug-free enjoyment.",
    category: "Decks"
  },
  {
    src: "/assets/exterior/patios/slate-stamped-patio-with-seating-wall.jpg",
    alt: "Elegant slate stamped concrete patio with seating wall",
    title: "Slate Stamped Concrete Patio",
    description: "Custom stamped concrete patio with elegant slate pattern and built-in seating wall for comfortable lounging.",
    category: "Patios"
  },
  {
    src: "/assets/exterior/patios/flagstone-patio-fire-pit.jpg",
    alt: "Natural flagstone patio with fire pit and outdoor seating",
    title: "Flagstone Patio with Fire Pit",
    description: "Beautiful natural flagstone patio featuring a custom fire pit, perfect for evening gatherings and outdoor ambiance.",
    category: "Patios"
  },
  {
    src: "/assets/exterior/patios/patio-brick-paver-pattern.jpg",
    alt: "Brick paver patio with intricate pattern design",
    title: "Brick Paver Patio Pattern",
    description: "Artfully designed brick paver patio with custom patterns, combining functionality with aesthetic appeal.",
    category: "Patios"
  },
  {
    src: "/assets/exterior/pergolas/white-vinyl-pergola.jpg",
    alt: "Elegant white vinyl pergola on stone patio",
    title: "White Vinyl Pergola",
    description: "Maintenance-free white vinyl pergola providing shade and architectural interest to your outdoor space.",
    category: "Pergolas"
  },
  {
    src: "/assets/exterior/pergolas/patio-pergola-stone-columns.jpg",
    alt: "Stone column pergola with decorative elements",
    title: "Stone Column Pergola",
    description: "Majestic pergola with stone columns, offering timeless elegance and substantial shade coverage.",
    category: "Pergolas"
  },
  {
    src: "/assets/exterior/pergolas/wood-deck-pergola.jpg",
    alt: "Classic wood pergola on composite deck",
    title: "Wood Pergola on Deck",
    description: "Classic wood pergola seamlessly integrated with composite decking for a cohesive outdoor living space.",
    category: "Pergolas"
  },
  {
    src: "/assets/exterior/homes/exterior-house-modern-facade.jpg",
    alt: "Modern house facade with contemporary design elements",
    title: "Modern House Facade",
    description: "Contemporary house exterior showcasing clean lines, modern materials, and sophisticated architectural design.",
    category: "Homes"
  },
  {
    src: "/assets/exterior/homes/exterior-house-traditional-brick.jpg",
    alt: "Traditional brick house with classic architectural features",
    title: "Traditional Brick Home",
    description: "Timeless traditional brick home featuring classic architectural elements and enduring curb appeal.",
    category: "Homes"
  },
  {
    src: "/assets/exterior/locations/frisco-texas-luxury-home.png.jpg",
    alt: "Luxury home in Frisco, Texas showcasing premium construction",
    title: "Frisco Luxury Home",
    description: "Premium luxury home in Frisco, Texas, demonstrating our commitment to quality construction and design excellence.",
    category: "Locations"
  },
  {
    src: "/assets/exterior/locations/mckinney-texas-historic-downtown.png.jpg",
    alt: "Historic downtown McKinney, Texas architecture",
    title: "Historic McKinney Downtown",
    description: "Preservation of historic architecture in downtown McKinney, Texas, blending tradition with modern craftsmanship.",
    category: "Locations"
  }
]

function GalleryCard({ image, onClick, index }: { image: any, onClick: () => void, index: number }) {
  return (
    <Card className="group cursor-pointer overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100" onClick={onClick}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-all duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/95 backdrop-blur-md rounded-full p-3 shadow-lg">
              <Eye className="w-5 h-5 text-slate-700" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <div className="bg-white/95 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg">
              <span className="text-slate-700 font-medium text-sm">View Full Size</span>
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="secondary" className="bg-[#efe7db] text-[#4a3220] border-[#e6d8c3] px-3 py-1">
              {image.category}
            </Badge>
            <div className="flex items-center text-slate-500">
              {image.category === 'Bathrooms' && <Home className="w-4 h-4" />}
              {image.category === 'Kitchens' && <Palette className="w-4 h-4" />}
              {image.category === 'Decks' && <Home className="w-4 h-4" />}
              {image.category === 'Patios' && <MapPin className="w-4 h-4" />}
              {image.category === 'Pergolas' && <Camera className="w-4 h-4" />}
              {image.category === 'Locations' && <MapPin className="w-4 h-4" />}
              {image.category === 'Homes' && <Home className="w-4 h-4" />}
            </div>
          </div>
          <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
            {image.title}
          </h3>
          <p className="text-slate-600 leading-relaxed text-sm">
            {image.description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function PortfolioClient() {
  const [index, setIndex] = useState(-1)
  const [currentImages, setCurrentImages] = useState<'interior' | 'exterior'>('interior')

  const slides = currentImages === 'interior'
    ? interiorImages.map(({ src, alt }) => ({ src, alt }))
    : exteriorImages.map(({ src, alt }) => ({ src, alt }))

  const handleImageClick = (imageIndex: number) => {
    setIndex(imageIndex)
  }

  return (
    <>
      <div className="min-h-screen bg-[#faf7f2]">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#efe7db] rounded-full px-4 py-2 mb-6">
              <svg className="w-5 h-5 text-[#8c5a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span className="text-sm font-medium text-slate-700">Project Showcase</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-slate-900">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Discover the craftsmanship and attention to detail that sets our work apart.
              From stunning interiors to breathtaking exteriors, explore our completed projects.
            </p>
          </div>

          {/* Gallery Tabs */}
          <Tabs defaultValue="interior" className="w-full" onValueChange={(value) => setCurrentImages(value as 'interior' | 'exterior')}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="interior" className="text-lg py-3">
                <Home className="w-5 h-5 mr-2" />
                Interior
              </TabsTrigger>
              <TabsTrigger value="exterior" className="text-lg py-3">
                <MapPin className="w-5 h-5 mr-2" />
                Exterior
              </TabsTrigger>
            </TabsList>

            <TabsContent value="interior" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Interior Transformations</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore our interior renovation projects, from luxurious kitchens and bathrooms to commercial spaces and flooring installations.
          </p>
        </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {interiorImages.map((image, idx) => (
                  <GalleryCard
              key={idx}
                    image={image}
                    onClick={() => handleImageClick(idx)}
                    index={idx}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="exterior" className="mt-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Exterior Excellence</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  See our outdoor living spaces come to life with custom decks, patios, pergolas, and complete home transformations.
                </p>
            </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {exteriorImages.map((image, idx) => (
                  <GalleryCard
                    key={idx}
                    image={image}
                    onClick={() => handleImageClick(idx)}
                    index={idx}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <LightboxWrapper slides={slides} index={index} close={() => setIndex(-1)} />
    </>
  )
}
