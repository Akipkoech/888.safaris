import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-amber-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">888 Safaris</h3>
            <p className="mb-4">
              Your trusted partner for premium chauffeur-driven tours across Kenya. Experience the beauty of Kenya with
              our professional drivers and comfortable vehicles.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-amber-300" aria-label="Facebook">
                <Facebook size={20} />
              </Link>
              <Link href="https://instagram.com" className="hover:text-amber-300" aria-label="Instagram">
                <Instagram size={20} />
              </Link>
              <Link href="https://twitter.com" className="hover:text-amber-300" aria-label="Twitter">
                <Twitter size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-amber-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-amber-300">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@888safaris.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} 888 Safaris. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
