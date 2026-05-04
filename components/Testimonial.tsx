"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface TestimonialData {
  quote: string;
  name: string;
  achievement: string;
}

interface TestimonialProps {
  testimonials: TestimonialData[];
}

export function Testimonial({ testimonials }: TestimonialProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative">
        {/* Quote Icon */}
        <Quote
          size={48}
          className="text-brand-gold/20 absolute -top-4 -left-4"
          fill="currentColor"
        />

        {/* Testimonial Content */}
        <div className="relative min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="font-display text-pull-quote text-deep-forest italic mb-6">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </p>
              <div className="text-sm">
                <p className="font-medium text-deep-forest">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-body-text">
                  {testimonials[currentIndex].achievement}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-mid-green text-mid-green hover:bg-mid-green hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-brand-gold" : "bg-mid-green/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-2 rounded-full border border-mid-green text-mid-green hover:bg-mid-green hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
