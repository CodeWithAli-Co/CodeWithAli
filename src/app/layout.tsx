"use client"
import { useState } from "react";
import alipic from "../assets/images/alipic.png";
import "./globals.css";
import Link from "next/link";
import "./mediaSizing.css"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body>
        <header>
          <div className="logo-container">
           
          <img src={alipic.src} alt="Ali pic" className="ali-logo" />
          </div>

          {/* Regular nav for larger screens */}
          <nav className="nav-links desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/#contact">Contact</Link>

          </nav>

          {/* Mobile menu */}
          <div className="mobile-menu">
            <button 
              className="menu-toggle" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
            <div className={`sidebar-menu ${isMenuOpen ? 'active' : ''}`}>
              <Link href="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link href="/courses" onClick={() => setIsMenuOpen(false)}>Courses</Link>
              <Link href="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              <Link href="/#reviews" onClick={() => setIsMenuOpen(false)}>Reviews</Link>
              <Link href="/#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            </div>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}