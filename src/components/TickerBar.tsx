"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export default function TickerBar() {
  const items = [
    { text: "IKEJA, LAGOS · OPPOSITE COMPUTER VILLAGE", isLocation: true },
    { text: "MORE SPACES", isLocation: false },
    { text: "BETTER INFRASTRUCTURE", isLocation: false },
    { text: "OWN WITH 35%", isLocation: false },
  ];

  return (
    <div className="w-full bg-[#4E6B17] text-white py-3.5 sm:py-4 overflow-hidden border-y border-[#3E5612]">
      {/* Desktop Layout: Evenly distributed bar */}
      <div className="hidden lg:flex max-w-7xl mx-auto px-6 items-center justify-between text-xs sm:text-sm font-bold uppercase tracking-widest">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {item.isLocation && <Sparkles className="w-3.5 h-3.5 text-[#D1E627]" />}
            <span>{item.text}</span>
          </div>
        ))}
      </div>

      {/* Mobile / Tablet: Smooth marquee ticker */}
      <div className="lg:hidden flex overflow-x-hidden select-none">
        <div className="animate-ticker flex items-center gap-8 text-xs font-bold uppercase tracking-widest whitespace-nowrap">
          {[...items, ...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.isLocation && <Sparkles className="w-3.5 h-3.5 text-[#D1E627]" />}
              <span>{item.text}</span>
              <span className="text-white/40 ml-6">|</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
