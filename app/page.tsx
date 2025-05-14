export const metadata = {
  title: "888 Safaris - Premium Chauffeur-Driven Safaris in Kenya",
  description: "Experience Kenya with 888 Safaris. Enjoy premium chauffeur-driven safaris, comfortable vehicles, and tailored tours for any duration.",
}

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Car, Star } from "lucide-react"
import TestimonialSlider from "@/components/testimonial-slider"
import DestinationGallery from "@/components/destination-gallery"

export default function Home() {
  return (
    <div className=" flex justify-center items-center min-h-screen">
      <div className="w-full">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] w-full">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/home page.jpg"
              alt="Safari in Kenya"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0" />
          </div>
          <div className="container relative z-10 h-full flex flex-col justify-center items-start text-left text-amber-500 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-4 max-w-xl">
              Experience Kenya with Premium Chauffeur-Driven Safaris
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-xl font-sans text-amber-300 font-medium leading-relaxed">
              Tailored trips for all your needs—whether business or pleasure, we’ve got you covered with unmatched comfort and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md">
                <Link href="/contact">Book Your Safari Today</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-amber-500 text-black hover:bg-amber-50/10 font-sans font-medium"
              >
                <Link href="/services">Explore Our Fleet</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 bg-amber-50">
          <div className="container flex flex-col items-center">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-6 text-amber-900 flex items-center">
                  Welcome to 888 Safaris
                </h2>
                <p className="mb-4 text-gray-700 font-sans">
                  At 888 Safaris, we specialize in providing premium chauffeur-driven vehicle services across Kenya. Our fleet of well-maintained vehicles and team of highly experienced drivers ensure a comfortable, safe, and memorable journey through Kenya's breathtaking landscapes.
                </p>
                <p className="mb-6 text-gray-700 font-sans">
                  Whether you're planning a wildlife safari, a coastal retreat, or a business trip, our flexible booking options cater to your specific needs and preferences.
                </p>
                <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                      <span className="text-amber-800 font-bold">5+</span>
                    </div>
                    <span className="text-gray-700 font-sans">Years Driver Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                      <span className="text-amber-800 font-bold">100%</span>
                    </div>
                    <span className="text-gray-700 font-sans">Certified Drivers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center">
                      <span className="text-amber-800 font-bold">24/7</span>
                    </div>
                    <span className="text-gray-700 font-sans">Customer Support</span>
                  </div>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
                <Image src="/images/Safari Vehicle.jpg" alt="Safari Vehicle" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Preview */}
        <section className="py-16 bg-amber-900 text-amber-50">
          <div className="container flex flex-col items-center">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
                <Car className="w-8 h-8 text-amber-400" /> Our Premium Fleet
              </h2>
              <p className="text-amber-100 font-sans">
                Choose from our selection of comfortable and well-maintained vehicles, all driven by our professional chauffeurs with a minimum of 5 years of experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Vehicle 1 */}
              <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image src="/images/safari.jpg" alt="Safari Van" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-amber-900">Safari Vans</h3>
                  <p className="text-gray-700 mb-4 font-sans">
                    Comfortable 14-seater vans with pop-up roofs, perfect for wildlife viewing and group travel across Kenya.
                  </p>
                  <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>

              {/* Vehicle 2 */}
              <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image src="/images/mini.jpg" alt="Mini Van" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-amber-900">Mini Vans</h3>
                  <p className="text-gray-700 mb-4 font-sans">
                    Spacious mini vans ideal for family trips and small groups, offering comfort for both short and long journeys.
                  </p>
                  <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>

              {/* Vehicle 3 */}
              <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image src="/images/exec.jpg" alt="Executive Car" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-amber-900">Executive Cars</h3>
                  <p className="text-gray-700 mb-4 font-sans">
                    Luxury vehicles  offering premium comfort and style for executive travel and VIP tours.
                  </p>
                  <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-amber-50">
          <div className="container flex flex-col items-center">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
                <Star className="w-8 h-8 text-amber-600" /> What Our Clients Say
              </h2>
              <p className="text-gray-700 font-sans">
                Hear from travelers who have experienced Kenya with our chauffeur-driven services.
              </p>
            </div>

            <div className="max-w-5xl mx-auto w-full">
              <TestimonialSlider />
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="py-16 bg-amber-50">
          <div className="container flex flex-col items-center">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
                <MapPin className="w-8 h-8 text-amber-600" /> Popular Destinations
              </h2>
              <p className="text-gray-700 font-sans">
                Explore Kenya's most breathtaking locations with our chauffeur-driven tours.
              </p>
            </div>

            <div className="max-w-5xl mx-auto w-full">
              <DestinationGallery />
            </div>

            <div className="text-center mt-12">
              <Button asChild className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md">
                <Link href="/contact">Plan Your Journey</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="container flex flex-col">
            <div className="items-center justify-center text-center">
              <div>
                <h2 className="text-3xl font-bold font-serif mb-4 text-white">Ready to Explore Kenya?</h2>
                <p className="mb-6 text-amber-100 font-sans">
                  Contact us today to book your chauffeur-driven safari and experience Kenya's beauty with comfort and style.
                </p>
                <Button asChild size="lg" className="bg-amber-50 text-amber-900 font-bold hover:bg-amber-100 transition-all duration-300 rounded-md">
                  <Link href="/contact">Book Your Safari</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}