"use client"

import Link from "next/link"
import { Facebook, Github, Instagram } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Container } from "../ui/container"

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-white">
              {siteConfig.name}
            </Link>
            <p className="text-sm text-gray-400">{siteConfig.description}</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Navigation</h3>
            <ul className="space-y-2">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-sm text-gray-400 hover:text-white">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-gray-400 hover:text-white">
                  Returns Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-white">Social</h3>
            <div className="flex space-x-4">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-zinc-800 py-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Authorized retailer of Maguiar's and Blue Coral products
          </p>
        </div>
      </Container>
    </footer>
  )
} 