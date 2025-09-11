import { LOCATIONS, SERVICES } from "@/lib/constants"

export function SchemaMarkup() {
  const areaServed = [
    // DFW Metroplex cities
    { "@type": "City", name: "Dallas", "addressRegion": "TX" },
    { "@type": "City", name: "Fort Worth", "addressRegion": "TX" },
    { "@type": "City", name: "Plano", "addressRegion": "TX" },
    { "@type": "City", name: "Frisco", "addressRegion": "TX" },
    { "@type": "City", name: "McKinney", "addressRegion": "TX" },
    { "@type": "City", name: "Allen", "addressRegion": "TX" },
    { "@type": "City", name: "Denton", "addressRegion": "TX" },
    { "@type": "City", name: "Carrollton", "addressRegion": "TX" },
    { "@type": "City", name: "Garland", "addressRegion": "TX" },
    { "@type": "City", name: "Irving", "addressRegion": "TX" },
    { "@type": "City", name: "Richardson", "addressRegion": "TX" },
    { "@type": "City", name: "Lewisville", "addressRegion": "TX" },
    { "@type": "City", name: "The Colony", "addressRegion": "TX" },
    { "@type": "City", name: "Rowlett", "addressRegion": "TX" },
    { "@type": "City", name: "Rockwall", "addressRegion": "TX" },
    { "@type": "City", name: "Wylie", "addressRegion": "TX" },
    { "@type": "City", name: "Sachse", "addressRegion": "TX" },
    { "@type": "City", name: "Murphy", "addressRegion": "TX" },
    { "@type": "City", name: "Parker", "addressRegion": "TX" },
    { "@type": "City", name: "Fairview", "addressRegion": "TX" },
    { "@type": "City", name: "Lucas", "addressRegion": "TX" },
    { "@type": "City", name: "Lavon", "addressRegion": "TX" },
    { "@type": "City", name: "Nevada", "addressRegion": "TX" },
    { "@type": "City", name: "Josephine", "addressRegion": "TX" },
    { "@type": "City", name: "Fate", "addressRegion": "TX" },
    { "@type": "City", name: "Royse City", "addressRegion": "TX" },
    { "@type": "City", name: "Caddo Mills", "addressRegion": "TX" },
    { "@type": "City", name: "Greenville", "addressRegion": "TX" },
    { "@type": "City", name: "Terrell", "addressRegion": "TX" },
    { "@type": "City", name: "Mesquite", "addressRegion": "TX" },
    { "@type": "City", name: "Forney", "addressRegion": "TX" },
    { "@type": "City", name: "Sunnyvale", "addressRegion": "TX" },
    { "@type": "City", name: "Seagoville", "addressRegion": "TX" },
    { "@type": "City", name: "Crandall", "addressRegion": "TX" },
    { "@type": "City", name: "Kaufman", "addressRegion": "TX" }
  ]

  const services = [
    {
      "@type": "Service",
      "name": "Kitchen Remodeling Dallas Fort Worth",
      "description": "Professional kitchen remodeling services in Dallas Fort Worth. Custom cabinets, countertops, and complete kitchen renovations.",
      "provider": { "@type": "LocalBusiness", "name": "TND Texas" },
      "areaServed": areaServed,
      "serviceType": "Kitchen Remodeling"
    },
    {
      "@type": "Service",
      "name": "Bathroom Renovation DFW",
      "description": "Expert bathroom renovation contractors in Dallas Fort Worth. Complete bathroom remodels, tile work, and modern fixtures.",
      "provider": { "@type": "LocalBusiness", "name": "TND Texas" },
      "areaServed": areaServed,
      "serviceType": "Bathroom Renovation"
    },
    {
      "@type": "Service",
      "name": "Roofing Contractors North Texas",
      "description": "Professional roofing services in North Texas. Roof repairs, replacements, and maintenance. Licensed roofing contractors.",
      "provider": { "@type": "LocalBusiness", "name": "TND Texas" },
      "areaServed": areaServed,
      "serviceType": "Roofing Services"
    },
    {
      "@type": "Service",
      "name": "Home Addition Dallas",
      "description": "Custom home additions in Dallas Fort Worth. Room additions, garage conversions, and home expansions.",
      "provider": { "@type": "LocalBusiness", "name": "TND Texas" },
      "areaServed": areaServed,
      "serviceType": "Home Addition"
    },
    {
      "@type": "Service",
      "name": "Deck Building Fort Worth",
      "description": "Custom deck construction in Fort Worth and surrounding areas. Outdoor living spaces, pergolas, and patios.",
      "provider": { "@type": "LocalBusiness", "name": "TND Texas" },
      "areaServed": areaServed,
      "serviceType": "Deck Construction"
    }
  ]

  const schemas = [
    // Main LocalBusiness Schema
    {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
      "@id": "https://tndtexas.com/#organization",
      "name": "TND Texas Construction Company",
      "alternateName": "TND Texas",
      "url": "https://tndtexas.com",
      "logo": "https://tndtexas.com/assets/logos/logo.png",
      "description": "#1 Construction Company in Dallas Fort Worth. Expert remodeling contractors DFW specializing in kitchen remodels, bathroom renovations, roofing & home improvements.",
      "telephone": "+1-903-603-4150",
      "email": "brandon@tndtexas.com",
      "foundingDate": "2009",
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Check", "Credit Card"],
      "currenciesAccepted": "USD",
      "address": {
      "@type": "PostalAddress",
        "streetAddress": "103 E Main St",
        "addressLocality": "Royse City",
        "addressRegion": "TX",
        "postalCode": "75189",
        "addressCountry": "US"
      },
      "geo": {
      "@type": "GeoCoordinates",
        "latitude": "32.9757",
        "longitude": "-96.3336"
      },
      "openingHours": [
        "Mo-Fr 08:00-17:00",
        "Sa 08:00-16:00"
      ],
      "sameAs": [
        // Add social media URLs when available
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Construction Services",
        "itemListElement": services
      },
      "areaServed": areaServed,
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "200",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": "Sarah Johnson"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "reviewBody": "TND Texas did an amazing job on our kitchen remodel. Professional, on-time, and excellent craftsmanship. Highly recommend!"
        }
      ]
    },

    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://tndtexas.com/#organization",
      "name": "TND Texas",
      "alternateName": "TND Texas Construction Company",
      "url": "https://tndtexas.com",
      "logo": "https://tndtexas.com/assets/logos/logo.png",
      "description": "Top-rated construction company in Dallas Fort Worth specializing in kitchen remodels, bathroom renovations, roofing & home improvements.",
      "foundingDate": "2009",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-903-603-4150",
        "contactType": "Customer Service",
        "availableLanguage": "English",
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      },
      "areaServed": areaServed,
      "serviceType": [
        "Construction",
        "Remodeling",
        "Home Improvement",
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Roofing",
        "Deck Construction"
      ]
    },

    // Website Schema
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://tndtexas.com/#website",
      "url": "https://tndtexas.com",
      "name": "TND Texas | Construction Company Dallas Fort Worth",
      "description": "#1 Construction Company in Dallas Fort Worth. Expert remodeling contractors DFW.",
      "publisher": {
        "@id": "https://tndtexas.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://tndtexas.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    // Breadcrumb Schema for better navigation
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://tndtexas.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://tndtexas.com/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Portfolio",
          "item": "https://tndtexas.com/portfolio"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Contact",
          "item": "https://tndtexas.com/contact"
        }
      ]
    },

    // FAQ Schema for local search queries
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does TND Texas Construction Company offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TND Texas offers comprehensive construction and remodeling services including kitchen remodels, bathroom renovations, roofing, home additions, deck construction, patio installations, pergola building, and commercial construction throughout the Dallas Fort Worth area."
          }
        },
        {
          "@type": "Question",
          "name": "Are you licensed and insured construction contractors in Dallas Fort Worth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, TND Texas is fully licensed and insured to provide construction and remodeling services in Dallas, Fort Worth, and all surrounding DFW areas. We maintain current licensing and comprehensive insurance coverage for your protection."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a kitchen remodel cost in Dallas Fort Worth?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kitchen remodel costs in Dallas Fort Worth vary based on scope, materials, and finishes. Basic updates start at $15,000, while full luxury remodels can range from $50,000 to $150,000+. We provide free detailed estimates for your specific project."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free estimates for home improvement projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we provide free, detailed estimates for all construction and remodeling projects. Our team will visit your home, assess your needs, and provide a comprehensive quote with no obligation."
          }
        },
        {
          "@type": "Question",
          "name": "What areas do you serve in the Dallas Fort Worth metroplex?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We serve the entire Dallas Fort Worth metroplex including Dallas, Fort Worth, Plano, Frisco, McKinney, Allen, Denton, Carrollton, Garland, Irving, Richardson, Lewisville, The Colony, Rowlett, Rockwall, Wylie, Sachse, Murphy, Parker, Fairview, Lucas, Lavon, Nevada, Josephine, Fate, Royse City, Caddo Mills, Greenville, Terrell, Mesquite, Forney, Sunnyvale, Seagoville, Crandall, and Kaufman."
          }
        },
        {
          "@type": "Question",
          "name": "How long does a typical bathroom renovation take in DFW?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bathroom renovation timelines vary by scope. A standard bathroom remodel typically takes 2-4 weeks, while larger projects with custom work may take 4-8 weeks. We provide detailed timelines during your free consultation."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide roofing services in North Texas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer complete roofing services throughout North Texas including roof repairs, replacements, and new installations. Our licensed roofing contractors work with all major roofing materials and provide warranties on workmanship."
          }
        },
        {
          "@type": "Question",
          "name": "What makes TND Texas different from other construction companies in Dallas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "TND Texas stands out with 15+ years of experience, 5-star customer reviews, transparent pricing, free detailed estimates, licensed and insured status, and our commitment to quality craftsmanship. We treat every project like it's our own home."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer financing options for home improvement projects?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer financing options to help make your home improvement dreams more affordable. We work with trusted financing partners to provide flexible payment plans for qualified customers."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started with my construction or remodeling project?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Getting started is easy! Contact us at (903) 603-4150 or fill out our online form for a free consultation. We'll visit your home, discuss your vision, and provide a detailed estimate with timeline and next steps."
          }
        }
      ]
    }
  ]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
