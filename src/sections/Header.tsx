"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeToggle from "@/components/ModeToggle";

import Image from "next/image";
import React from "react";



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="logo-container">
        <Image
          src="/alipic.png"
          alt="CodeWithAli"
          className="logo"
          width={100}
          height={100}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-links desktop-nav">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={pathname === href ? "active" : ""}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <div className={`sidebar-menu ${isMenuOpen ? "active" : ""}`}>
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={closeMenu}
              className={pathname === href ? "active" : ""}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
