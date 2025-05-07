"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from "lucide-react"
import BookingForm from "@/components/booking-form"

export default function ContactPage() {
  const [date, setDate] = useState<Date | undefined>(undefined)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0">
          <Image src="/placeholder.svg?height=600&width=1600" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl">Get in touch to book your safari or inquire about our services</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-amber-700" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Call Us</h3>
              <p className="text-gray-700 mb-2">+254 700 000 000</p>
              <p className="text-gray-700">+254 733 000 000</p>
              <p className="text-gray-600 mt-2 text-sm">Available 24/7</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-amber-700" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Email Us</h3>
              <p className="text-gray-700 mb-2">info@888safaris.com</p>
              <p className="text-gray-700">bookings@888safaris.com</p>
              <p className="text-gray-600 mt-2 text-sm">We respond within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-amber-700" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-amber-800">Visit Us</h3>
              <p className="text-gray-700 mb-2">Nairobi, Kenya</p>
              <p className="text-gray-700">Moi Avenue, Downtown</p>
              <p className="text-gray-600 mt-2 text-sm">Office hours: 8am - 6pm</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-amber-900">Get In Touch</h2>
              <p className="mb-6 text-gray-700">
                Have questions about our services or ready to book your safari? Fill out the form below and our team
                will get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} />
                </div>

                <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-amber-900">Our Location</h2>
              <p className="mb-6 text-gray-700">
                Visit our office in Nairobi or contact us to arrange a meeting at your convenience.
              </p>

              <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden mb-6">
                {/* This would be replaced with an actual Google Map embed */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <p className="text-gray-600">Google Map would be embedded here</p>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-amber-800">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monday - Friday:</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Saturday:</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <p className="text-amber-700 mt-2">* 24/7 phone support available for existing bookings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-amber-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Book Your Safari</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Use our booking form to request a quote for your chauffeur-driven safari
            </p>
          </div>

          <BookingForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-amber-900">Frequently Asked Questions</h2>
            <p className="max-w-2xl mx-auto text-gray-700">Find answers to common questions about our services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Do you offer self-drive options?</h3>
              <p className="text-gray-700">
                No, we specialize exclusively in chauffeur-driven services. All our vehicles come with highly
                experienced drivers who have a minimum of 5 years of experience and certified training.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">What is included in your pricing?</h3>
              <p className="text-gray-700">
                Our standard pricing includes the vehicle, driver, fuel, and maintenance. Accommodation, meals, park
                fees, and other activities are typically not included unless specifically mentioned in a package.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">How far in advance should I book?</h3>
              <p className="text-gray-700">
                We recommend booking at least 2-4 weeks in advance, especially during peak seasons (July-September and
                December-January). However, we can sometimes accommodate last-minute bookings depending on availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Can you arrange accommodation?</h3>
              <p className="text-gray-700">
                Yes, we can assist with booking accommodation as part of your safari package. We work with a range of
                hotels, lodges, and camps across Kenya to suit different budgets and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">What languages do your drivers speak?</h3>
              <p className="text-gray-700">
                All our drivers speak fluent English and Swahili. Some drivers also speak additional languages such as
                French, German, or Italian. If you require a specific language, please mention this when booking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept bank transfers, credit/debit cards, PayPal, and M-Pesa (for local payments). A deposit is
                required to confirm your booking, with the balance due before the start of your safari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Experience Kenya?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to book your chauffeur-driven safari and let our experienced team create an unforgettable
            journey for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-900 hover:bg-amber-100">
              <a href="tel:+254700000000">Call Us Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <a href="mailto:info@888safaris.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
