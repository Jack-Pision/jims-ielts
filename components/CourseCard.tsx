"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  duration: string;
  mode: string;
  badge?: string;
  features: string[];
  price?: string;
  curriculum?: string[];
}

export function CourseCard({
  title,
  duration,
  mode,
  badge,
  features,
  price,
  curriculum,
}: CourseCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="card-gold-accent p-6 flex flex-col h-full">
      {/* Badge */}
      {badge && (
        <div className="flex justify-end mb-4">
          <span className="pill bg-bright-lime/10 text-bright-lime border-bright-lime text-xs">
            {badge}
          </span>
        </div>
      )}

      {/* Title */}
      <h3 className="font-display text-card-title text-deep-forest mb-3">
        {title}
      </h3>

      {/* Duration & Mode */}
      <div className="flex gap-2 mb-4">
        <span className="pill bg-soft-white text-mid-green text-xs border-0">
          {duration}
        </span>
        <span className="pill bg-soft-white text-mid-green text-xs border-0">
          {mode}
        </span>
      </div>

      {/* Features */}
      <ul className="space-y-2 mb-4 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-body-text">
            <Check size={16} className="text-brand-gold mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price */}
      {price && (
        <p className="text-brand-gold font-medium mb-4">{price}</p>
      )}

      {/* Expandable Curriculum */}
      {curriculum && curriculum.length > 0 && (
        <div className="mb-4">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-sm text-deep-forest hover:text-brand-gold transition-colors"
          >
            View Schedule
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
          
          {isExpanded && (
            <div className="mt-3 pt-3 border-t border-soft-white animate-fade-in-up">
              <ul className="space-y-2">
                {curriculum.map((item, index) => (
                  <li key={index} className="text-xs text-body-text">
                    <span className="text-brand-gold font-medium">Week {index + 1}:</span>{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <Link
        href="/courses#enquiry"
        className="btn-outline border-deep-forest text-deep-forest hover:bg-deep-forest hover:text-white text-center mt-auto"
      >
        Enquire Now
      </Link>
    </div>
  );
}
