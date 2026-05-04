"use client";

import Link from "next/link";
import { Instagram, Youtube, Linkedin, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/about", label: "About" },
  ];

  const services = [
    "IELTS Preparation",
    "Mock Tests",
    "Visa Counseling",
    "Study Abroad",
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: MessageCircle, href: "#", label: "TikTok" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-deep-forest text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <svg
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <path d="M20 20C20 20 20 8 20 8C20 8 12 8 12 16C12 20 16 20 20 20Z" fill="#D4A843" />
                  <path d="M20 20C20 20 32 20 32 20C32 20 32 12 24 12C20 12 20 16 20 20Z" fill="#D4A843" />
                  <path d="M20 20C20 20 20 32 20 32C20 32 28 32 28 24C28 20 24 20 20 20Z" fill="#D4A843" />
                  <path d="M20 20C20 20 8 20 8 20C8 20 8 28 16 28C20 28 20 24 20 20Z" fill="#D4A843" />
                  <circle cx="20" cy="20" r="3" fill="#F0D080" />
                </svg>
              </div>
              <span className="font-display text-xl tracking-tight">JIMS IELTS</span>
            </Link>
            <p className="text-body text-white/60 text-sm">
              Dream Big. Go Global. Bangladesh&apos;s leading IELTS institute helping students achieve their international education goals.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-label text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-brand-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-label text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:01711579970"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  <Phone size={14} />
                  01711-579970
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@jimsielts.com"
                  className="flex items-center gap-2 text-sm text-white/60 hover:text-brand-gold transition-colors"
                >
                  <Mail size={14} />
                  info@jimsielts.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                Mujib Sarok, Jessore, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#1a4028]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              &copy; {currentYear} JIMS IELTS · Mujib Sarok, Jessore, Bangladesh
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-mid-green hover:text-brand-gold transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/8801711579970"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} fill="white" />
      </a>
    </footer>
  );
}
