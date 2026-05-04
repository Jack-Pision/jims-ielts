"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-deep-forest border-b border-[#1a4028]"
          : "bg-deep-forest"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Four-leaf clover SVG with gold shimmer */}
            <div className="relative w-10 h-10">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Four leaves */}
                <path
                  d="M20 20C20 20 20 8 20 8C20 8 12 8 12 16C12 20 16 20 20 20Z"
                  fill="#D4A843"
                  className="origin-bottom animate-pulse"
                />
                <path
                  d="M20 20C20 20 32 20 32 20C32 20 32 12 24 12C20 12 20 16 20 20Z"
                  fill="#D4A843"
                  className="origin-left animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <path
                  d="M20 20C20 20 20 32 20 32C20 32 28 32 28 24C28 20 24 20 20 20Z"
                  fill="#D4A843"
                  className="origin-top animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <path
                  d="M20 20C20 20 8 20 8 20C8 20 8 28 16 28C20 28 20 24 20 20Z"
                  fill="#D4A843"
                  className="origin-right animate-pulse"
                  style={{ animationDelay: "1.5s" }}
                />
                {/* Center */}
                <circle cx="20" cy="20" r="3" fill="#F0D080" />
              </svg>
              {/* Gold shimmer overlay */}
              <div
                className="absolute inset-0 rounded-full animate-shimmer gold-shimmer pointer-events-none"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(212, 168, 67, 0.4) 50%, transparent 100%)",
                  backgroundSize: "200% 100%",
                }}
              />
            </div>
            <span className="font-display text-xl text-white tracking-tight">
              JIMS IELTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-nav text-white/80 hover:text-brand-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="tel:01711579970"
              className="btn-gold inline-flex items-center gap-2"
            >
              <Phone size={14} />
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-deep-forest border-t border-[#1a4028]">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-nav text-white/80 hover:text-brand-gold transition-colors py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="tel:01711579970"
              className="btn-gold inline-flex items-center gap-2 w-full justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={14} />
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
