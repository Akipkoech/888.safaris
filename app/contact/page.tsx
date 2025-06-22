"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageSquare, Map, Car, HelpCircle } from "lucide-react"
import BookingForm from "@/components/booking-form"


export default function ContactPage() {
  return (
    <div className="bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] w-full">
        <div className="absolute inset-0">
          <Image src="/images/contact.jpg" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-amber-600/40" />
        </div>
        <div className="container relative h-full flex flex-col justify-center items-center text-center text-amber-50 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">Contact Us</h1>
          <p className="text-lg max-w-2xl font-sans text-amber-100">
            Get in touch to book your safari or inquire about our services
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container flex flex-col items-center">
          <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-amber-700" size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Call Us</h3>
              <p className="text-gray-700 mb-2 font-sans">+254 700 000 000</p>
              <p className="text-gray-700 font-sans">+254 733 000 000</p>
              <p className="text-gray-600 mt-2 text-sm font-sans">Available 24/7</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-amber-700" size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Email Us</h3>
              <p className="text-gray-700 mb-2 font-sans">info@888safaris.com</p>
              <p className="text-gray-700 font-sans">bookings@888safaris.com</p>
              <p className="text-gray-600 mt-2 text-sm font-sans">We respond within 24 hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform hover:scale-105">
              <div className="w-16 h-16 bg-amber-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-amber-700" size={24} />
              </div>
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Visit Us</h3>
              <p className="text-gray-700 mb-2 font-sans">Nairobi, Kenya</p>
              <p className="text-gray-700 font-sans">Moi Avenue, Downtown</p>
              <p className="text-gray-600 mt-2 text-sm font-sans">Office hours: 8am - 6pm</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 text-amber-900 flex items-center gap-2">
                <MessageSquare className="w-8 h-8 text-amber-600" /> Get In Touch
              </h2>
              <p className="mb-6 text-gray-700 font-sans">
                Have questions about our services or ready to book your safari? Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium font-sans text-gray-700">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" className="font-sans" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium font-sans text-gray-700">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" className="font-sans" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium font-sans text-gray-700">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email" className="font-sans" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium font-sans text-gray-700">
                      Phone
                    </label>
                    <Input id="phone" placeholder="Enter your phone number" className="font-sans" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium font-sans text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" placeholder="What is this regarding?" className="font-sans" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium font-sans text-gray-700">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Enter your message" rows={5} className="font-sans" />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md font-sans"
                >
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 text-amber-900 flex items-center gap-2">
                <Map className="w-8 h-8 text-amber-600" /> Our Location
              </h2>
              <p className="mb-6 text-gray-700 font-sans">
                Visit our office in Nairobi or contact us to arrange a meeting at your convenience.
              </p>

              <div className="h-[400px] rounded-lg overflow-hidden mb-6 border-2 border-amber-100 bg-amber-50 shadow-sm">
                <div className="w-full h-full flex items-center justify-center bg-amber-50">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3526.6665636171674!2d36.90123917436064!3d-1.2126290355487692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3e29a5bc355f%3A0x37a5547e48b24c2b!2sClayworks%20Towers%20-%20Kasarani!5e1!3m2!1sen!2ske!4v1747734502458!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Business Hours</h3>
                <div className="space-y-2 font-sans">
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
        <div className="container flex flex-col items-center">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
              <Car className="w-8 h-8 text-amber-600" /> Book Your Safari
            </h2>
            <p className="text-gray-700 font-sans">
              Use our booking form to request a quote for your chauffeur-driven safari
            </p>
          </div>

          <div className="max-w-5xl mx-auto w-full">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container flex flex-col items-center">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-serif mb-4 flex items-center justify-center gap-2">
              <HelpCircle className="w-8 h-8 text-amber-600" /> Frequently Asked Questions
            </h2>
            <p className="text-gray-700 font-sans">Find answers to common questions about our services</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Do you offer self-drive options?</h3>
              <p className="text-gray-700 font-sans">
                No, we specialize exclusively in chauffeur-driven services. All our vehicles come with highly experienced drivers who have a minimum of 5 years of experience and certified training.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">What is included in your pricing?</h3>
              <p className="text-gray-700 font-sans">
                Our standard pricing includes the vehicle, driver, fuel, and maintenance. Accommodation, meals, park fees, and other activities are typically not included unless specifically mentioned in a package.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">How far in advance should I book?</h3>
              <p className="text-gray-700 font-sans">
                We recommend booking at least 2-4 weeks in advance, especially during peak seasons (July-September and December-January). However, we can sometimes accommodate last-minute bookings depending on availability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">Can you arrange accommodation?</h3>
              <p className="text-gray-700 font-sans">
                Yes, we can assist with booking accommodation as part of your safari package. We work with a range of hotels, lodges, and camps across Kenya to suit different budgets and preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">What languages do your drivers speak?</h3>
              <p className="text-gray-700 font-sans">
                All our drivers speak fluent English and Swahili. Some drivers also speak additional languages such as French, German, or Italian. If you require a specific language, please mention this when booking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
              <h3 className="text-xl font-bold font-serif mb-3 text-amber-800">What payment methods do you accept?</h3>
              <p className="text-gray-700 font-sans">
                We accept bank transfers, credit/debit cards, PayPal, and M-Pesa (for local payments). A deposit is required to confirm your booking, with the balance due before the start of your safari.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold font-serif mb-6 flex items-center justify-center gap-2">
            <Car className="w-8 h-8 text-amber-400" /> Ready to Experience Kenya?
          </h2>
          <p className="max-w-2xl mb-8 font-sans text-amber-100">
            Contact us today to book your chauffeur-driven safari and let our experienced team create an unforgettable journey for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-amber-700 to-amber-400 text-white font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md font-sans">
              <a href="tel:+254700000000">Call Us Now</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-amber-50 text-amber-50 hover:bg-amber-400 font-sans font-medium"
            >
              <a href="mailto:info@888safaris.com">Email Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}