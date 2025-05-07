"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-amber-100/50 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="888 Safaris Logo"
            width={40}
            height={40}
            className="rounded-md"
          />
          <span className="text-xl font-bold text-amber-700">888 Safaris</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-amber-700">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-amber-700">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium transition-colors hover:text-amber-700">
            Services
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-amber-700">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex">
          <Button asChild variant="default" className="bg-amber-700 hover:bg-amber-800">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-50 bg-white/95 backdrop-blur-md">
          <nav className="container flex flex-col gap-6 p-6">
            <Link
              href="/"
              className="text-lg font-medium transition-colors hover:text-amber-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium transition-colors hover:text-amber-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-lg font-medium transition-colors hover:text-amber-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium transition-colors hover:text-amber-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild variant="default" className="mt-4 bg-amber-700 hover:bg-amber-800">
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
