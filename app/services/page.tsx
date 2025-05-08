export const metadata = {
    title: "Services - 888 Safaris - Premium Chauffeur-Driven Vehicles in Kenya",
    description: "Explore our premium chauffeur-driven vehicles and services at 888 Safaris, including safari vans, mini vans, executive cars, and custom tours for your Kenyan adventure.",
    keywords: "888 Safaris Services, Kenya Safaris, Chauffeur-Driven Vehicles, Safari Vans, Executive Cars",
    author: "888 Safaris",
  }
  
  import Image from "next/image"
  import Link from "next/link"
  import { Button } from "@/components/ui/button"
  import { Check, Car, DollarSign, BookOpen, Briefcase } from "lucide-react"
  
  export default function ServicesPage() {
    return (
      <div className="bg-amber-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full">
          <div className="absolute inset-0">
            <Image
              src="/placeholder.svg?height=800&width=1600"
              alt="Our Services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-amber-600/40" />
          </div>
          <div className="container relative h-full flex flex-col justify-center items-center text-center text-amber-50 max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Our Services</h1>
            <p className="text-lg max-w-2xl font-sans text-amber-100">
              Premium chauffeur-driven vehicles for your Kenyan adventure
            </p>
          </div>
        </section>
  
        {/* Our Fleet */}
        <section className="py-16">
          <div className="container flex flex-col items-center">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
                <Car className="w-8 h-8 text-amber-600" /> Our Premium Fleet
              </h2>
              <p className="text-gray-700 font-sans">
                Choose from our selection of comfortable and well-maintained vehicles, all driven by our professional chauffeurs with a minimum of 5 years of experience.
              </p>
            </div>
  
            {/* Safari Van */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 max-w-5xl mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
                <Image src="/placeholder.svg?height=800&width=600" alt="Safari Van" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-amber-800">Safari Vans</h3>
                <p className="mb-6 text-gray-700 font-sans">
                  Our safari vans are specially designed for wildlife viewing and comfortable travel across Kenya's diverse terrains. With pop-up roofs for unobstructed game viewing and spacious interiors, these vehicles are perfect for small groups and families.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Seating for 7 passengers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Pop-up roof for game viewing</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Air conditioning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Comfortable seating</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Ample luggage space</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">4x4 capability</span>
                  </div>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg mb-6">
                  <p className="font-medium text-amber-800 font-sans">Ideal for: Wildlife safaris, group tours, family trips</p>
                </div>
                <Button asChild className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md font-sans">
                  <Link href="/contact">Book a Safari Van</Link>
                </Button>
              </div>
            </div>
  
            {/* Mini Van */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16 max-w-5xl mx-auto">
              <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-sm">
                <Image src="/placeholder.svg?height=800&width=600" alt="Mini Van" fill className="object-cover" />
              </div>
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold font-serif mb-4 text-amber-800">Mini Vans</h3>
                <p className="mb-6 text-gray-700 font-sans">
                  Our mini vans offer a perfect balance of comfort and practicality for both urban and rural travel. Spacious interiors and reliable performance make these vehicles ideal for family trips and small groups exploring Kenya.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Seating for 8 passengers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Air conditioning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Comfortable seating</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Ample luggage space</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Entertainment system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Smooth ride quality</span>
                  </div>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg mb-6">
                  <p className="font-medium text-amber-800 font-sans">Ideal for: Family trips, airport transfers, city tours</p>
                </div>
                <Button asChild className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md font-sans">
                  <Link href="/contact">Book a Mini Van</Link>
                </Button>
              </div>
            </div>
  
            {/* Executive Cars */}
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
                <Image src="/placeholder.svg?height=800&width=600" alt="Executive Car" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-amber-800">Executive Cars</h3>
                <p className="mb-6 text-gray-700 font-sans">
                  Our luxury executive cars, including the prestigious Prado TX, offer the ultimate in comfort and style. Perfect for business travel, VIP tours, or travelers seeking a premium experience while exploring Kenya.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Luxury seating for 4-6 passengers</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Premium leather interiors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Climate control</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Advanced entertainment system</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">Superior comfort and ride quality</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700 font-sans">4x4 capability</span>
                  </div>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg mb-6">
                  <p className="font-medium text-amber-800 font-sans">Ideal for: Business travel, VIP tours, luxury safaris</p>
                </div>
                <Button asChild className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md font-sans">
                  <Link href="/contact">Book an Executive Car</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Sample Pricing */}
        <section className="py-16 bg-amber-50">
          <div className="container flex flex-col items-center">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
                <DollarSign className="w-8 h-8 text-amber-600" /> Sample Pricing
              </h2>
              <p className="text-gray-700 font-sans">
                Below are sample prices for popular routes. Actual pricing may vary based on season, duration, and specific requirements.
              </p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Package 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Nairobi to Maasai Mara"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-amber-800">Nairobi to Maasai Mara</h3>
                  <p className="text-gray-700 mb-4 font-sans">
                    3-day safari experience with accommodation arrangements and game drives.
                  </p>
                  <div className="space-y-2 mb-6 font-sans">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Safari Van:</span>
                      <span className="font-medium">$450/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Executive Car:</span>
                      <span className="font-medium">$650/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">3 days</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
  
              {/* Package 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Nairobi to Amboseli"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-amber-800">Nairobi to Amboseli</h3>
                  <p className="text-gray-700 mb-4 font-sans">
                    2-day trip to Amboseli National Park with views of Mt. Kilimanjaro.
                  </p>
                  <div className="space-y-2 mb-6 font-sans">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Safari Van:</span>
                      <span className="font-medium">$400/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Executive Car:</span>
                      <span className="font-medium">$600/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">2 days</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
  
              {/* Package 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="relative h-48">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mombasa to Diani"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-serif mb-2 text-amber-800">Mombasa to Diani</h3>
                  <p className="text-gray-700 mb-4 font-sans">
                    Coastal tour with beach visits and cultural experiences.
                  </p>
                  <div className="space-y-2 mb-6 font-sans">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mini Van:</span>
                      <span className="font-medium">$300/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Executive Car:</span>
                      <span className="font-medium">$500/day</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">2 days</span>
                    </div>
                  </div>
                  <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                    <Link href="/contact">Request Quote</Link>
                  </Button>
                </div>
              </div>
            </div>
  
            <div className="mt-12 p-6 bg-amber-50 rounded-lg shadow-sm max-w-5xl mx-auto">
              <h3 className="text-xl font-bold font-serif mb-4 text-amber-800">Important Notes:</h3>
              <ul className="space-y-2 text-gray-700 font-sans">
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span>Prices include driver, fuel, and vehicle maintenance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span>Accommodation and park fees are not included unless specified.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span>Custom itineraries and durations are available upon request.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span>Prices may vary during peak seasons (July-September and December-January).</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Booking Process */}
        <section className="py-16">
          <div className="container flex flex-col items-center">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
                <BookOpen className="w-8 h-8 text-amber-600" /> Our Booking Process
              </h2>
              <p className="text-gray-700 font-sans">
                Booking your chauffeur-driven safari with 888 Safaris is simple and straightforward
              </p>
            </div>
  
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800 font-sans">1</span>
                </div>
                <h3 className="text-lg font-bold font-serif mb-2 text-amber-800">Inquiry</h3>
                <p className="text-gray-700 font-sans">
                  Contact us through our website, email, or phone with your travel dates and preferences.
                </p>
              </div>
  
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800 font-sans">2</span>
                </div>
                <h3 className="text-lg font-bold font-serif mb-2 text-amber-800">Customization</h3>
                <p className="text-gray-700 font-sans">
                  Our team works with you to create a tailored itinerary based on your interests and budget.
                </p>
              </div>
  
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800 font-sans">3</span>
                </div>
                <h3 className="text-lg font-bold font-serif mb-2 text-amber-800">Confirmation</h3>
                <p className="text-gray-700 font-sans">
                  Review and confirm your itinerary and make a deposit to secure your booking.
                </p>
              </div>
  
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-amber-200 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-amber-800 font-sans">4</span>
                </div>
                <h3 className="text-lg font-bold font-serif mb-2 text-amber-800">Enjoy Your Safari</h3>
                <p className="text-gray-700 font-sans">
                  Meet your professional driver and begin your Kenyan adventure with peace of mind.
                </p>
              </div>
            </div>
  
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md font-sans">
                <Link href="/contact">Start Your Booking</Link>
              </Button>
            </div>
          </div>
        </section>
  
        {/* Additional Services */}
        <section className="py-16 bg-amber-50">
          <div className="container flex flex-col items-center">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
                <Briefcase className="w-8 h-8 text-amber-600" /> Additional Services
              </h2>
              <p className="text-gray-700 font-sans">
                Beyond our standard chauffeur-driven tours, we offer these specialized services
              </p>
            </div>
  
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Service 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Airport Transfers</h3>
                <p className="text-gray-700 mb-4 font-sans">
                  Reliable and comfortable transfers to and from all major Kenyan airports. Our drivers monitor flight arrivals to ensure timely pickups even if your flight is delayed.
                </p>
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                  <Link href="/contact">Book Airport Transfer</Link>
                </Button>
              </div>
  
              {/* Service 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Corporate Travel</h3>
                <p className="text-gray-700 mb-4 font-sans">
                  Professional chauffeur services for business travelers and corporate events. Punctuality, discretion, and comfort are our priorities for business clients.
                </p>
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                  <Link href="/contact">Inquire About Corporate Services</Link>
                </Button>
              </div>
  
              {/* Service 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Custom Group Tours</h3>
                <p className="text-gray-700 mb-4 font-sans">
                  Specialized tours for groups, including educational trips, team building events, and special interest tours across Kenya's diverse landscapes.
                </p>
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-100 font-sans">
                  <Link href="/contact">Plan a Group Tour</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 bg-black text-white">
          <div className="container flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold font-serif mb-6 flex items-center justify-center gap-2">
              <Car className="w-8 h-8 text-amber-400" /> Ready to Book Your Kenyan Adventure?
            </h2>
            <p className="max-w-2xl mb-8 font-sans text-amber-100">
              Contact us today to discuss your travel plans and let our experienced team create the perfect chauffeur-driven tour for you.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md font-sans">
              <Link href="/contact">Book Your Safari</Link>
            </Button>
          </div>
        </section>
      </div>
    )
  }