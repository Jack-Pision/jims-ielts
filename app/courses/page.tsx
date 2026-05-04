"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CourseFilter } from "@/components/CourseFilter";
import { CourseCard } from "@/components/CourseCard";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { courses } from "@/data/courses";

const visaDestinations = [
  { country: "Australia", flag: "🇦🇺", type: "Student / Skilled" },
  { country: "UK", flag: "🇬🇧", type: "Student / Work" },
  { country: "USA", flag: "🇺🇸", type: "Student / Work" },
  { country: "Canada", flag: "🇨🇦", type: "Student / PR" },
  { country: "Malaysia", flag: "🇲🇾", type: "Student" },
  { country: "Ireland", flag: "🇮🇪", type: "Student / Work" },
];

export default function CoursesPage() {
  const [activeTab, setActiveTab] = useState("ielts");

  const filteredCourses = courses.filter((course) => course.category === activeTab);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-b from-deep-forest to-dark-emerald pt-32 pb-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h1 className="font-display text-section-title text-white mb-4">
              Programs & Courses.
              <span className="block w-24 h-1 bg-brand-gold mt-4 animate-pulse" />
            </h1>
            <p className="text-body text-white/70 max-w-2xl">
              Find the right program for your timeline, your goal, and your destination country.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Sticky Filter */}
      <CourseFilter activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Course Cards Grid */}
      <section className="bg-soft-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <CourseCard
                    title={course.title}
                    duration={course.duration}
                    mode={course.mode}
                    badge={course.badge}
                    features={course.features}
                    price={course.price}
                    curriculum={course.curriculum}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-16">
              <p className="text-body-text">No courses available in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Mock Test Highlight */}
      <section id="mock" className="bg-dark-emerald py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="font-display text-4xl text-brand-gold mb-4">
                Free Mock Tests — Every Weekend.
              </h2>
              <p className="text-white/70 mb-8">
                Experience the real IELTS exam environment before the actual test day.
              </p>
              <Link
                href="#enquiry"
                className="btn-gold inline-flex items-center gap-2"
              >
                Register for Next Mock
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/images/mock-test-session.png"
                  alt="IELTS mock test session"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-emerald/60 to-transparent" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                "Full IELTS exam simulation",
                "Evaluated answer sheets",
                "Predicted band score report",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 bg-deep-forest/50 rounded-lg p-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center flex-shrink-0">
                    <Check size={16} className="text-brand-gold" />
                  </div>
                  <p className="text-white text-sm">{feature}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Visa Counseling Section */}
      <section className="bg-soft-white py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-deep-forest text-center mb-12">
              Visa Counseling
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {visaDestinations.map((dest, index) => (
                  <ScrollReveal key={dest.country} delay={index * 100}>
                    <div className="p-6 border border-mid-green/20 rounded-lg hover:border-brand-gold transition-all duration-300 text-center bg-white">
                      <span className="text-3xl mb-2 block">{dest.flag}</span>
                      <h3 className="font-display text-xl text-deep-forest mb-1">
                        {dest.country}
                      </h3>
                      <p className="text-sm text-body-text">{dest.type}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/images/visa-documents.png"
                  alt="Visa documents and passport"
                  className="w-full h-auto object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-label text-brand-gold mb-1">DOCUMENTATION</p>
                  <p className="font-display text-lg">End-to-end visa support</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-body text-deep-forest mb-6">
                Our counselors guide you through every document, every step.
              </p>
              <Link
                href="#enquiry"
                className="btn-outline border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-deep-forest inline-flex items-center gap-2"
              >
                Book Free Consultation
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="bg-deep-forest py-16 lg:py-24">
        <div className="max-w-[600px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-white text-center mb-8">
              Enquire Now
            </h2>
            <div className="bg-dark-emerald/50 rounded-lg p-8">
              <EnquiryForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-brand-gold py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <p className="text-badge-number text-deep-forest font-semibold mb-4">
            01711-579970
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:01711579970"
              className="btn-gold bg-deep-forest text-white hover:bg-deep-forest/90 inline-flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href="https://wa.me/8801711579970"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-deep-forest text-deep-forest hover:bg-deep-forest hover:text-white inline-flex items-center gap-2"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
