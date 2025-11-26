"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { Product } from "@/lib/types"

interface HeroSlide {
  id: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  image: string
  backgroundColor: string
  textColor: string
  accentColor: string
}

const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "These Apples just fell $40*.",
    subtitle:
      "Use code APPLGIFT to take $40 off your order of $400+ before it spoils. Valid on all Apple products. Now through 12/2/25.",
    ctaText: "Shop deals",
    ctaLink: "/?category=smartphones",
    image: "/iphone-14-pro-max-purple.jpg",
    backgroundColor: "#0f0f0f",
    textColor: "#ffffff",
    accentColor: "#d4ff00",
  },
  {
    id: "2",
    title: "Premium laptops up to 60% off.",
    subtitle:
      "Refurbished MacBooks, ThinkPads, and more. Enterprise-grade quality, tested and certified by our experts.",
    ctaText: "Browse laptops",
    ctaLink: "/?category=laptops",
    image: "/macbook-air-m1.jpg",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
    accentColor: "#d4ff00",
  },
  {
    id: "3",
    title: "Gaming consoles starting at $199.",
    subtitle: "PlayStation, Xbox, Switch. All tested, all guaranteed. Level up your game for less.",
    ctaText: "Shop gaming",
    ctaLink: "/?category=gaming",
    image: "/ps5-console.jpg",
    backgroundColor: "#0a0a0a",
    textColor: "#ffffff",
    accentColor: "#d4ff00",
  },
]

export function HeroCarousel({ featuredProducts }: { featuredProducts: Product[] }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <div className="relative w-full overflow-hidden border-b border-border">
      <div
        className="relative h-[400px] md:h-[500px] transition-colors duration-700"
        style={{ backgroundColor: currentSlideData.backgroundColor }}
      >
        <div className="container mx-auto px-4 h-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center h-full">
            {/* Text Content */}
            <div className="space-y-6 py-12" style={{ color: currentSlideData.textColor }}>
              <h2
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance"
                style={{ color: currentSlideData.accentColor }}
              >
                {currentSlideData.title}
              </h2>
              <p className="text-base md:text-lg max-w-xl text-pretty leading-relaxed">{currentSlideData.subtitle}</p>
              <Link href={currentSlideData.ctaLink}>
                <Button
                  size="lg"
                  className="font-semibold"
                  style={{
                    backgroundColor: currentSlideData.accentColor,
                    color: currentSlideData.backgroundColor,
                  }}
                >
                  {currentSlideData.ctaText}
                </Button>
              </Link>
              <p className="text-xs opacity-70">*Terms & conditions apply.</p>
            </div>

            {/* Product Image */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square">
                <Image
                  src={currentSlideData.image || "/placeholder.svg"}
                  alt="Featured product"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          <Button
            variant="secondary"
            size="icon"
            onClick={prevSlide}
            className="rounded-full h-10 w-10 bg-white/90 hover:bg-white text-black"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            onClick={nextSlide}
            className="rounded-full h-10 w-10 bg-black hover:bg-black/80 text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
