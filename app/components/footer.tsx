'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setEmail('')
  }

  return (
    <footer className="bg-black/95 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">GotWaax</h3>
            <p className="text-gray-300 mb-4">
              Premium car care products for enthusiasts who demand the best.
            </p>
            <div className="space-y-2">
              <a href="tel:+1234567890" className="flex items-center text-gray-300 hover:text-primary">
                <Phone className="h-5 w-5 mr-2" />
                (123) 456-7890
              </a>
              <a href="mailto:info@gotwaax.com" className="flex items-center text-gray-300 hover:text-primary">
                <Mail className="h-5 w-5 mr-2" />
                info@gotwaax.com
              </a>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-5 w-5 mr-2" />
                123 Detail Street, Car City, ST 12345
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="bg-gray-800 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800 rounded-lg px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="bg-primary p-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} GotWaax. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 