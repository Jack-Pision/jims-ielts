"use client";

import { useEffect, useRef, useState } from "react";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(items.length).fill(false));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate line
          setLineHeight(100);
          
          // Stagger items
          items.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * 200);
          });
          
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [items.length]);

  return (
    <div ref={containerRef} className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-mid-green/30 transform md:-translate-x-1/2">
        <div
          className="absolute top-0 left-0 w-full bg-brand-gold transition-all duration-1000 ease-out"
          style={{ height: `${lineHeight}%` }}
        />
      </div>

      {/* Items */}
      <div className="space-y-12 md:space-y-16">
        {items.map((item, index) => (
          <div
            key={item.year}
            className={`
              relative flex items-start md:items-center
              ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
              transition-all duration-500
              ${visibleItems[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
            style={{
              transitionDelay: `${index * 100}ms`,
            }}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-brand-gold transform -translate-x-1/2 z-10" />

            {/* Content */}
            <div className={`
              pl-12 md:pl-0 md:w-1/2
              ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}
            `}>
              <span className="font-display text-3xl text-brand-gold block mb-1">
                {item.year}
              </span>
              <h4 className="font-display text-xl text-white mb-2">{item.title}</h4>
              <p className="text-sm text-white/60">{item.description}</p>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block md:w-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}
