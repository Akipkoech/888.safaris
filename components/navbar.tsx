"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-7xl bg-gradient-to-r from-black to-amber-600 backdrop-blur-lg rounded-xl shadow-lg border border-amber-50/20">
      <div className="container flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-amber-50 font-serif tracking-tight text-center">888.Safaris</span>
            <span className="text-sm text-amber-100 font-serif italic">Where Executive Class Meets Family Comfort</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4">
          <Link href="/" className="text-sm font-bold text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300">
            Home
          </Link>
          <Link href="/about" className="text-sm font-bold text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300">
            About
          </Link>
          <Link href="/services" className="text-sm font-bold text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-bold text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button asChild variant="default" className="bg-gradient-to-r from-amber-700 to-amber-400 text-black font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-amber-50 hover:text-amber-400 transition-colors duration-300"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-24 z-50 bg-amber-900/95 backdrop-blur-lg animate-slideIn">
          <nav className="container flex flex-col gap-8 p-8 items-center">
            <Link
              href="/"
              className="text-lg font-medium text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-amber-50 hover:text-amber-400 hover:scale-105 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              asChild
              variant="default"
              className="mt-6 bg-gradient-to-r from-amber-700 to-amber-400 text-amber-900 font-bold hover:from-amber-400 hover:to-amber-700 transition-all duration-300 rounded-md w-full max-w-xs"
            >
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Book Now
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}