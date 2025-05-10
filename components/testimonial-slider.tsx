"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    image: "/placeholder.svg?height=100&width=100",
    text: "Our family safari with 888 Safaris was incredible! Our driver was knowledgeable, professional, and made our trip to Maasai Mara unforgettable. The vehicle was comfortable and well-maintained. Highly recommend!",
  },
  {
    id: 2,
    name: "David Mwangi",
    location: "Kenya",
    image: "/placeholder.svg?height=100&width=100",
    text: "As a local Kenyan, I've used 888 Safaris for business travel across the country. Their drivers are always punctual, professional, and the vehicles are top-notch. The best chauffeur service in Kenya!",
  },
  {
    id: 3,
    name: "Emma and Tom Wilson",
    location: "United Kingdom",
    image: "/placeholder.svg?height=100&width=100",
    text: "We spent two weeks touring Kenya with 888 Safaris. Our driver became like family, showing us hidden gems we would never have found on our own. The Prado was luxurious and perfect for the terrain. An amazing experience!",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-live="polite"
    >
      <div className="bg-amber-50 rounded-lg shadow-lg p-8 md:p-12 border border-amber-200">
        <Quote className="text-amber-300 mb-6 quote-gradient" size={48} />

        <div className="min-h-[200px]">
          <div
            key={testimonials[currentIndex].id}
            className="opacity-100 transition-opacity duration-500"
          >
            <p className="text-gray-700 italic mb-8 text-xl font-sans">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-amber-900 font-serif">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 font-sans">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full border-amber-700 text-amber-700 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-400 hover:text-amber-50 w-12 h-12"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </Button>

        <div className="flex gap-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-amber-600" : "bg-amber-200"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full border-amber-700 text-amber-700 hover:bg-gradient-to-r hover:from-amber-700 hover:to-amber-400 hover:text-amber-50 w-12 h-12"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
    </div>
  )
}