import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Navbar } from './components/nav/navbar'
import { Footer } from './components/footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GotWaax - Premium Car Care Products",
  description: "High-quality car care products for the perfect shine",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
