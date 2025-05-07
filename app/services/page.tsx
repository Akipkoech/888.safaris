import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
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
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl">Premium chauffeur-driven vehicles for your Kenyan adventure</p>
        </div>
      </section>

      {/* Our Fleet */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Our Premium Fleet</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Choose from our selection of comfortable and well-maintained vehicles, all driven by our professional
              chauffeurs with a minimum of 5 years of experience.
            </p>
          </div>

          {/* Safari Van */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Safari Van" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Safari Vans</h3>
              <p className="mb-6 text-gray-700">
                Our safari vans are specially designed for wildlife viewing and comfortable travel across Kenya's
                diverse terrains. With pop-up roofs for unobstructed game viewing and spacious interiors, these vehicles
                are perfect for small groups and families.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Seating for 7 passengers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Pop-up roof for game viewing</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Air conditioning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Comfortable seating</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Ample luggage space</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">4x4 capability</span>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg mb-6">
                <p className="font-medium text-amber-800">Ideal for: Wildlife safaris, group tours, family trips</p>
              </div>
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/contact">Book a Safari Van</Link>
              </Button>
            </div>
          </div>

          {/* Mini Van */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-1 md:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Mini Van" fill className="object-cover" />
            </div>
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Mini Vans</h3>
              <p className="mb-6 text-gray-700">
                Our mini vans offer a perfect balance of comfort and practicality for both urban and rural travel.
                Spacious interiors and reliable performance make these vehicles ideal for family trips and small groups
                exploring Kenya.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Seating for 8 passengers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Air conditioning</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Comfortable seating</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Ample luggage space</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Entertainment system</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Smooth ride quality</span>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg mb-6">
                <p className="font-medium text-amber-800">Ideal for: Family trips, airport transfers, city tours</p>
              </div>
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/contact">Book a Mini Van</Link>
              </Button>
            </div>
          </div>

          {/* Executive Cars */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Executive Car" fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-800">Executive Cars</h3>
              <p className="mb-6 text-gray-700">
                Our luxury executive cars, including the prestigious Prado TX, offer the ultimate in comfort and style.
                Perfect for business travel, VIP tours, or travelers seeking a premium experience while exploring Kenya.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Luxury seating for 4-6 passengers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Premium leather interiors</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Climate control</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Advanced entertainment system</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Superior comfort and ride quality</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-amber-600 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">4x4 capability</span>
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-lg mb-6">
                <p className="font-medium text-amber-800">Ideal for: Business travel, VIP tours, luxury safaris</p>
              </div>
              <Button asChild className="bg-amber-700 hover:bg-amber-800">
                <Link href="/contact">Book an Executive Car</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Pricing */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Sample Pricing</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Below are sample prices for popular routes. Actual pricing may vary based on season, duration, and
              specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nairobi to Maasai Mara"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-800">Nairobi to Maasai Mara</h3>
                <p className="text-gray-700 mb-4">
                  3-day safari experience with accommodation arrangements and game drives.
                </p>
                <div className="space-y-2 mb-6">
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
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>

            {/* Package 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Nairobi to Amboseli"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-800">Nairobi to Amboseli</h3>
                <p className="text-gray-700 mb-4">
                  2-day trip to Amboseli National Park with views of Mt. Kilimanjaro.
                </p>
                <div className="space-y-2 mb-6">
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
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>

            {/* Package 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Mombasa to Diani"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-amber-800">Mombasa to Diani</h3>
                <p className="text-gray-700 mb-4">Coastal tour with beach visits and cultural experiences.</p>
                <div className="space-y-2 mb-6">
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
                <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-amber-800">Important Notes:</h3>
            <ul className="space-y-2 text-gray-700">
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
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Our Booking Process</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Booking your chauffeur-driven safari with 888 Safaris is simple and straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-amber-800">Inquiry</h3>
              <p className="text-gray-700">
                Contact us through our website, email, or phone with your travel dates and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-amber-800">Customization</h3>
              <p className="text-gray-700">
                Our team works with you to create a tailored itinerary based on your interests and budget.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-amber-800">Confirmation</h3>
              <p className="text-gray-700">
                Review and confirm your itinerary and make a deposit to secure your booking.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-800">4</span>
              </div>
              <h3 className="text-lg font-bold mb-2 text-amber-800">Enjoy Your Safari</h3>
              <p className="text-gray-700">
                Meet your professional driver and begin your Kenyan adventure with peace of mind.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/contact">Start Your Booking</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Additional Services</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Beyond our standard chauffeur-driven tours, we offer these specialized services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Airport Transfers</h3>
              <p className="text-gray-700 mb-4">
                Reliable and comfortable transfers to and from all major Kenyan airports. Our drivers monitor flight
                arrivals to ensure timely pickups even if your flight is delayed.
              </p>
              <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                <Link href="/contact">Book Airport Transfer</Link>
              </Button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Corporate Travel</h3>
              <p className="text-gray-700 mb-4">
                Professional chauffeur services for business travelers and corporate events. Punctuality, discretion,
                and comfort are our priorities for business clients.
              </p>
              <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                <Link href="/contact">Inquire About Corporate Services</Link>
              </Button>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Custom Group Tours</h3>
              <p className="text-gray-700 mb-4">
                Specialized tours for groups, including educational trips, team building events, and special interest
                tours across Kenya's diverse landscapes.
              </p>
              <Button asChild variant="outline" className="w-full border-amber-700 text-amber-700 hover:bg-amber-50">
                <Link href="/contact">Plan a Group Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Kenyan Adventure?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to discuss your travel plans and let our experienced team create the perfect
            chauffeur-driven tour for you.
          </p>
          <Button asChild size="lg" className="bg-white text-amber-900 hover:bg-amber-100">
            <Link href="/contact">Book Your Safari</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
