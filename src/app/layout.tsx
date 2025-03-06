"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Styles/globals.css";
import "./Styles/mediaSizing.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-red-200">
        <header className="border-b border-red-900/30 bg-black py-4 px-6 flex justify-between items-center">
          <div className="logo-container flex items-center">
            <div className="flex items-center">
              <Image 
                src="/alipic.png"
                alt="CodeWithAli" 
                className="logo rounded-full border-2 border-red-800/50 shadow-lg shadow-red-900/20"
                width={70}
                height={70}
              />
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
                CodeWithAli
              </span>
            </div>
          </div>

          {/* Regular nav for larger screens */}
          <nav className="nav-links desktop-nav hidden md:flex space-x-8">
            <Link href="/" className="text-red-200 hover:text-red-400 transition-colors">Home</Link>
            <Link href="/about" className="text-red-200 hover:text-red-400 transition-colors">About</Link>
            <Link href="/services" className="text-red-200 hover:text-red-400 transition-colors">Services</Link>  
            <Link href="/#contact" className="text-red-200 hover:text-red-400 transition-colors">Contact</Link>
          </nav>

          {/* Mobile menu */}
          <div className="mobile-menu block md:hidden">
            <button 
              className="menu-toggle w-10 h-10 flex items-center justify-center bg-red-900/20 hover:bg-red-900/40 rounded-full text-red-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          
          {/* Mobile sidebar - separate from button to ensure proper stacking */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black/70 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
          )}
          
          <div className={`fixed top-0 right-0 h-full w-64 bg-black border-l border-red-900/30 shadow-lg shadow-black/50 p-8 transform transition-all duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end mb-8">
              <button 
                className="w-8 h-8 flex items-center justify-center bg-red-900/30 rounded-full text-red-400"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-6">
              <Link 
                href="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                About
              </Link>
              <Link 
                href="/services" 
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                Services
              </Link>  
              <Link 
                href="/#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-red-200 hover:text-red-400 transition-colors border-b border-red-900/20 pb-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-black border-t border-red-950/30 py-8 px-6">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-red-200/60 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} CodeWithAli. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-red-200/60 hover:text-red-200 text-sm transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-red-200/60 hover:text-red-200 text-sm transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}