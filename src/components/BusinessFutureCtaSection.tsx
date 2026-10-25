"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BusinessFutureCtaSectionProps {
  onExploreMall: () => void;
}

export default function BusinessFutureCtaSection({
  onExploreMall,
}: BusinessFutureCtaSectionProps) {
  return (
    <section
      id="future"
      className="w-full py-16 sm:py-20 lg:py-24 text-white"
      style={{ backgroundColor: "#283C12" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Tag */}
          <div className="mb-2">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
              OWN WITH 35%.
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-white leading-[1.12] tracking-tight mb-5">
            Your Business Has A Future.
            <br />
            Make Sure Its Location Does Too.
          </h2>

          {/* Subtitle Tags */}
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 mb-8">
            BUSINESS. TECHNOLOGY. RETAIL. LIFESTYLE. ACCESS.
          </p>

          {/* CTA Button */}
          <div>
            <button
              onClick={onExploreMall}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#557519] hover:bg-[#435E12] text-white font-semibold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
              <span>Explore Awo Tech Mall</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
