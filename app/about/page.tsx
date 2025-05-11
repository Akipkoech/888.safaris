export const metadata = {
  title: "About 888 Safaris - Premium Chauffeur-Driven Tours in Kenya",
  description: "Learn about 888 Safaris, your trusted partner for premium chauffeur-driven safaris in Kenya. Discover our story, mission, vision, core values, and experienced team.",
  keywords: "About 888 Safaris, Kenya Safaris, Chauffeur-Driven Tours, Safari Drivers",
  author: "888 Safaris",
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Award, Clock, MapPin, Star, Users, CheckCircle, Car } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/about.jpg"
            alt="About 888 Safaris"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-amber-600/40" />
        </div>
        <div className="container relative h-full flex flex-col justify-center items-center text-center text-amber-50 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">About 888 Safaris</h1>
          <p className="text-lg max-w-2xl font-sans text-amber-200">
            Your trusted partner for premium chauffeur-driven tours across Kenya
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container flex flex-col items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
              <Image src="/images/ourstory.jpg" alt="Our Story" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 text-amber-900 flex items-center gap-2">
                <MapPin className="w-8 h-8 text-amber-600" /> Our Story
              </h2>
              <p className="mb-4 text-gray-700 font-sans">
                Founded with a passion for showcasing Kenya's breathtaking landscapes and rich culture, 888 Safaris has grown to become a leading provider of chauffeur-driven travel services in Kenya.
              </p>
              <p className="mb-4 text-gray-700 font-sans">
                Our journey began with a simple mission: to offer travelers a safe, comfortable, and authentic way to experience Kenya's diverse attractions. Today, we pride ourselves on our fleet of well-maintained vehicles and our team of professional drivers who bring knowledge, experience, and a personal touch to every journey.
              </p>
              <p className="text-gray-700 font-sans">
                At 888 Safaris, we believe that the journey is just as important as the destination. That's why we focus on creating memorable travel experiences that allow our clients to fully immerse themselves in Kenya's natural beauty and cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-16 bg-amber-50">
        <div className="container flex flex-col items-center">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
              <Star className="w-8 h-8 text-amber-600" /> Our Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-serif mb-4 text-amber-800">Our Mission</h3>
              <p className="text-gray-700 font-sans">
                To provide exceptional chauffeur-driven travel services that exceed our clients' expectations, showcasing Kenya's beauty while ensuring safety, comfort, and personalized experiences for every traveler.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold font-serif mb-4 text-amber-800">Our Vision</h3>
              <p className="text-gray-700 font-sans">
                To be the most trusted and preferred chauffeur service in Kenya, known for our commitment to excellence, professionalism, and creating unforgettable travel experiences that connect people with Kenya's natural wonders and cultural heritage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16">
        <div className="container flex flex-col items-center">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
              <Award className="w-8 h-8 text-amber-600" /> Our Core Values
            </h2>
            <p className="text-gray-700 font-sans">These principles guide everything we do at 888 Safaris</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Safety First</h3>
              <p className="text-gray-700 font-sans">
                We prioritize the safety and security of our clients above all else, with well-maintained vehicles and defensive driving practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Excellence</h3>
              <p className="text-gray-700 font-sans">
                We strive for excellence in every aspect of our service, from the condition of our vehicles to the knowledge of our drivers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-amber-700" size={32} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Reliability</h3>
              <p className="text-gray-700 font-sans">
                Our clients can count on us for punctuality, consistency, and dependability throughout their journey with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-amber-50">
        <div className="container flex flex-col items-center">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
              <Users className="w-8 h-8 text-amber-600" /> Meet Our Team
            </h2>
            <p className="text-gray-700 font-sans">
              Our experienced drivers are the heart of our service, each with a minimum of 5 years of experience and certified training
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width =300" alt="John Kamau" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif mb-1 text-amber-800">John Kamau</h3>
                <p className="text-gray-600 mb-3 font-sans">Senior Safari Driver - 10 years experience</p>
                <p className="text-gray-700 font-sans">
                  John specializes in wildlife safaris and has extensive knowledge of Kenya's national parks and wildlife. Fluent in English, Swahili, and basic French.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=300" alt="David Ochieng" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif mb-1 text-amber-800">David Ochieng</h3>
                <p className="text-gray-600 mb-3 font-sans">Executive Driver - 8 years experience</p>
                <p className="text-gray-700 font-sans">
                  David specializes in executive transport and coastal tours. Known for his professionalism and attention to detail. Fluent in English and Swahili.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=300" alt="Sarah Wanjiku" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif mb-1 text-amber-800">Sarah Wanjiku</h3>
                <p className="text-gray-600 mb-3 font-sans">Tour Driver - 7 years experience</p>
                <p className="text-gray-700 font-sans">
                  Sarah specializes in cultural tours and has deep knowledge of Kenya's diverse ethnic communities. Fluent in English, Swahili, and German.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container flex flex-col items-center">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 text-amber-900 flex items-center gap-2">
                <CheckCircle className="w-8 h-8 text-amber-600" /> Why Choose 888 Safaris?
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-amber-800">Experienced Drivers</h3>
                    <p className="text-gray-700 font-sans">
                      All our drivers have a minimum of 5 years of experience and certified training.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-amber-800">Well-Maintained Fleet</h3>
                    <p className="text-gray-700 font-sans">
                      Our vehicles undergo regular maintenance and safety checks to ensure reliability.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-amber-800">Flexible Booking</h3>
                    <p className="text-gray-700 font-sans">
                      Customize your journey duration and destinations to suit your preferences.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-amber-800">Local Knowledge</h3>
                    <p className="text-gray-700 font-sans">
                      Our drivers provide insights into local culture, wildlife, and hidden gems.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex-shrink-0 flex items-center justify-center mt-1">
                    <span className="text-amber-800 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold font-serif text-amber-800">24/7 Support</h3>
                    <p className="text-gray-700 font-sans">
                      Our customer service team is available around the clock to assist you.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Safari Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold font-serif mb-6 flex items-center justify-center gap-2">
            <Car className="w-8 h-8 text-amber-400" /> Ready to Experience Kenya with Us?
          </h2>
          <p className="max-w-2xl mb-8 font-sans text-amber-100">
            Contact us today to book your chauffeur-driven safari and let our experienced team create an unforgettable journey for you.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md">
            <Link href="/contact">Book Your Safari</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}