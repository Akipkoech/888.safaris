"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

export default function BookingForm() {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = useState<Date | undefined>(undefined)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would send the form data to a server
    setSubmitted(true)
    // Reset form or redirect would happen here
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md text-center">
        <h3 className="text-2xl font-bold mb-4 text-amber-800">Thank You!</h3>
        <p className="text-gray-700 mb-6">
          Your booking request has been submitted successfully. Our team will review your request and get back to you
          within 24 hours.
        </p>
        <Button onClick={() => setSubmitted(false)} className="bg-amber-700 hover:bg-amber-800">
          Submit Another Request
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name *
            </label>
            <Input id="firstName" placeholder="Enter your first name" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name *
            </label>
            <Input id="lastName" placeholder="Enter your last name" required />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email *
            </label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Phone *
            </label>
            <Input id="phone" placeholder="Enter your phone number" required />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="vehicle" className="text-sm font-medium">
            Preferred Vehicle *
          </label>
          <Select required>
            <SelectTrigger id="vehicle">
              <SelectValue placeholder="Select a vehicle" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="safari-van">Safari Van</SelectItem>
              <SelectItem value="mini-van">Mini Van</SelectItem>
              <SelectItem value="executive-car">Executive Car</SelectItem>
              <SelectItem value="not-sure">Not Sure (Please advise)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Start Date *</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">End Date *</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="passengers" className="text-sm font-medium">
            Number of Passengers *
          </label>
          <Select required>
            <SelectTrigger id="passengers">
              <SelectValue placeholder="Select number of passengers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-2">1-2</SelectItem>
              <SelectItem value="3-4">3-4</SelectItem>
              <SelectItem value="5-6">5-6</SelectItem>
              <SelectItem value="7-8">7-8</SelectItem>
              <SelectItem value="9+">9 or more</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="destination" className="text-sm font-medium">
            Destination(s) *
          </label>
          <Input id="destination" placeholder="Where would you like to go?" required />
        </div>

        <div className="space-y-2">
          <label htmlFor="requirements" className="text-sm font-medium">
            Special Requirements
          </label>
          <Textarea id="requirements" placeholder="Any special requests or requirements?" rows={4} />
        </div>

        <div className="space-y-2">
          <label htmlFor="hear-about" className="text-sm font-medium">
            How did you hear about us?
          </label>
          <Select>
            <SelectTrigger id="hear-about">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="search">Search Engine</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="friend">Friend/Family</SelectItem>
              <SelectItem value="travel-agent">Travel Agent</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button type="submit" className="w-full bg-amber-700 hover:bg-amber-800">
          Submit Booking Request
        </Button>

        <p className="text-xs text-gray-600 text-center">
          * Required fields. By submitting this form, you agree to our terms and conditions.
        </p>
      </form>
    </div>
  )
}
