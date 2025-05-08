import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-black to-amber-600 text-amber-50">
      <div className="container py-12 md:py-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold font-serif mb-4">888 Safaris</h3>
            <p className="mb-4 font-sans">
              Your trusted partner for premium chauffeur-driven tours across Kenya. Experience the beauty of Kenya with
              our professional drivers and comfortable vehicles.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-amber-400 hover:text-amber-200 transition-colors duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                className="text-amber-400 hover:text-amber-200 transition-colors duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-amber-400 hover:text-amber-200 transition-colors duration-300"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold font-serif mb-4">Quick Links</h3>
            <ul className="space-y-4 font-sans">
              <li>
                <Link href="/" className="hover:text-amber-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-400 transition-colors duration-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold font-serif mb-4">Contact Us</h3>
            <ul className="space-y-4 font-sans">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-amber-400" />
                <a href="tel:+254700000000" className="hover:text-amber-400 transition-colors duration-300">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-amber-400" />
                <a href="mailto:info@888safaris.com" className="hover:text-amber-400 transition-colors duration-300">
                  info@888safaris.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-amber-400 mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-600 mt-8 pt-8 text-center max-w-5xl mx-auto">
          <p className="font-sans text-amber-100">
            © {new Date().getFullYear()} 888 Safaris. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}