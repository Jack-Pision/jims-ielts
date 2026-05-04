"use client";

import { useState } from "react";

interface ScoreCardProps {
  className?: string;
}

export function IELTSScoreCard({ className = "" }: ScoreCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const scores = [
    { label: "Listening", score: "8.5" },
    { label: "Reading", score: "8.0" },
    { label: "Writing", score: "7.5" },
    { label: "Speaking", score: "8.0" },
  ];

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          bg-dark-emerald border-2 border-brand-gold rounded-lg p-6 
          animate-float transition-all duration-300
          ${isHovered ? "scale-[1.02] shadow-2xl shadow-brand-gold/20" : ""}
        `}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {/* Header */}
        <div className="border-b border-brand-gold/30 pb-4 mb-4">
          <p className="text-label text-brand-gold text-center">IELTS RESULT</p>
        </div>

        {/* Score Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {scores.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="font-display text-2xl text-brand-gold">{item.score}</p>
            </div>
          ))}
        </div>

        {/* Overall Band */}
        <div className="border-t border-brand-gold/30 pt-4 text-center">
          <p className="text-xs text-white/60 uppercase tracking-wider mb-1">
            Overall Band
          </p>
          <p className="font-display text-4xl text-brand-gold">8.0</p>
        </div>

        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-brand-gold" />
        <div className="absolute top-2 right-2 w-3 h-3 border-r-2 border-t-2 border-brand-gold" />
        <div className="absolute bottom-2 left-2 w-3 h-3 border-l-2 border-b-2 border-brand-gold" />
        <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-brand-gold" />
      </div>
    </div>
  );
}
