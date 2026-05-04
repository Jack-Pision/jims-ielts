"use client";

import { useState } from "react";

interface Destination {
  name: string;
  flag: string;
  code: string;
}

const destinations: Destination[] = [
  { name: "Australia", flag: "🇦🇺", code: "AU" },
  { name: "UK", flag: "🇬🇧", code: "GB" },
  { name: "USA", flag: "🇺🇸", code: "US" },
  { name: "Canada", flag: "🇨🇦", code: "CA" },
  { name: "Malaysia", flag: "🇲🇾", code: "MY" },
  { name: "Ireland", flag: "🇮🇪", code: "IE" },
];

export function DestinationPills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-wrap gap-3">
      {destinations.map((destination, index) => (
        <div
          key={destination.code}
          className={`
            pill cursor-pointer select-none
            border border-brand-gold bg-dark-emerald text-white
            animate-fade-in-up opacity-0
            ${hoveredIndex === index ? "bg-brand-gold text-deep-forest" : ""}
          `}
          style={{
            animationDelay: `${index * 60}ms`,
            animationFillMode: "forwards",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <span
            className={`
              inline-block transition-all duration-200
              ${hoveredIndex === index ? "opacity-100 mr-1" : "opacity-0 w-0"}
            `}
          >
            {destination.flag}
          </span>
          {destination.name}
        </div>
      ))}
    </div>
  );
}
