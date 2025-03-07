"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Styles/globals.css";
import "./Styles/mediaSizing.css";
import { Button } from "@/components/ui/button";
import { Code, Sun, Moon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTheme, ThemeProvider } from "../../ThemeContext";


// Wrapper component to use the theme context
function LayoutContent({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <html lang="en" data-theme={theme}>
      <body className="bg-theme-primary text-theme-primary">
        <header className="border-b border-theme-primary bg-theme-primary py-4 px-6 flex justify-between items-center">
          <div className="logo-container flex items-center">
            <div className="flex items-center">
              <Image
                src="/codewithali.png"
                alt="CodeWithAli"
                className="logo rounded-full border-2 border-theme-accent shadow-lg"
                width={70}
                height={70}
              />
              <span className="ml-3 text-xl font-bold bg-theme-gradient bg-clip-text text-transparent">
                CodeWithAli
              </span>
            </div>
          </div>

          {/* Regular nav for larger screens */}
          <nav className="nav-links desktop-nav hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-theme-primary hover:text-accent-theme-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-theme-primary hover:text-accent-theme-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-theme-primary hover:text-accent-theme-primary transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-theme-primary hover:text-accent-theme-primary transition-colors"
            >
              Contact
            </Link>
            
            {/* Theme toggle button */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center bg-theme-tertiary hover:bg-theme-quaternary rounded-full text-accent-theme-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>
          </nav>

          {/* Mobile menu */}
          <div className="mobile-menu flex items-center space-x-2 md:hidden">
            {/* Theme toggle button for mobile */}
            <button
              onClick={toggleTheme}
              className="w-8 h-8 flex items-center justify-center bg-theme-tertiary hover:bg-theme-quaternary rounded-full text-accent-theme-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>
            
            <button
              className="menu-toggle w-10 h-10 flex items-center justify-center bg-theme-tertiary hover:bg-theme-quaternary rounded-full text-accent-theme-primary transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile sidebar - separate from button to ensure proper stacking */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}

          <div
            className={`fixed top-0 right-0 h-full w-64 bg-theme-primary border-l border-theme-primary shadow-lg shadow-black/50 p-8 transform transition-all duration-300 ease-in-out z-50 md:hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end mb-8">
              <button
                className="w-8 h-8 flex items-center justify-center bg-theme-tertiary rounded-full text-accent-theme-primary"
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
                className="text-theme-primary hover:text-accent-theme-primary transition-colors border-b border-theme-secondary pb-2"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="text-theme-primary hover:text-accent-theme-primary transition-colors border-b border-theme-secondary pb-2"
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setIsMenuOpen(false)}
                className="text-theme-primary hover:text-accent-theme-primary transition-colors border-b border-theme-secondary pb-2"
              >
                Services
              </Link>
              <Link
                href="/#contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-theme-primary hover:text-accent-theme-primary transition-colors border-b border-theme-secondary pb-2"
              >
                Contact
              </Link>
            </div>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="py-12 border-t border-theme-primary bg-theme-primary">
          <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <div className="flex items-center mb-4">
                  <Image
                    src="/codewithali.png"
                    alt="CodeWithAli"
                    className="logo rounded-full border-2 border-theme-accent shadow-lg"
                    width={70}
                    height={70}
                  />
                  <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-theme-gradient">
                    CodeWithAli
                  </span>
                </div>
                <p className="text-sm text-theme-secondary mb-4">
                  We design and develop digital experiences that help businesses
                  and individuals succeed online.
                </p>
                <div className="flex space-x-4">
                  {/* Social icons */}
                  {[1, 2, 3, 4].map((i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-8 h-8 rounded-full bg-theme-tertiary flex items-center justify-center hover:bg-theme-quaternary transition-colors"
                    >
                      <span className="text-xs text-accent-theme-primary">{i}</span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-theme-primary mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "Website Development",
                    "Mobile App Development",
                    "UI/UX Design",
                    "E-commerce",
                    "SEO",
                    "Web Hosting",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-theme-secondary hover:text-accent-theme-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-theme-primary mb-4">Company</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    "About",
                    "Portfolio",
                    "Process",
                    "Careers",
                    "Blog",
                    "Contact",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-theme-secondary hover:text-accent-theme-primary transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-theme-primary mb-4">Contact</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="mailto:info@codewithali.com"
                      className="text-theme-secondary hover:text-accent-theme-primary transition-colors"
                    >
                      unfold@codewithali.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+4086907890"
                      className="text-theme-secondary hover:text-accent-theme-primary transition-colors"
                    >
                      (408) 690-4009
                    </a>
                  </li>
                  <li>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-theme-accent text-accent-theme-primary bg-theme-tertiary hover:bg-theme-quaternary"
                      onClick={() => router.push("/contact")}
                    >
                      Get a Quote
                    </Button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-theme-primary flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-theme-secondary mb-4 md:mb-0">
                © {new Date().getFullYear()} CodeWithAli. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-sm text-theme-secondary hover:text-accent-theme-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-sm text-theme-secondary hover:text-accent-theme-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-sm text-theme-secondary hover:text-accent-theme-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

// Main layout component with theme provider
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
}