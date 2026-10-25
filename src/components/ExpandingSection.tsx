"use client";

import React from "react";
import Image from "next/image";

export default function ExpandingSection() {
  return (
    <section id="expanding" className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tag */}
        <div className="mb-2">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#2563EB]">
            ONE DESTINATION. DIFFERENT BUSINESS NEEDS.
          </span>
        </div>

        {/* Heading & Subtitle */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] tracking-tight leading-[1.1] mb-3">
            Maybe You&apos;re Not Moving. Maybe You&apos;re Expanding.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Awo Tech Mall is intended for businesses at different stages of growth.
          </p>
        </div>

        {/* Centerpiece Image */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[16/9] sm:aspect-[16/8.5] mb-8 sm:mb-10 group">
          <Image
            src="/assets/expanding.png"
            alt="Business executive in modern high-rise office overlooking Computer Village Ikeja"
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
          />
        </div>

        {/* Narrative Copy Below Image */}
        <div className="space-y-1.5 text-gray-700 text-base sm:text-lg leading-relaxed max-w-3xl">
          <p>Your first location worked.</p>
          <p>Your customer base grew.</p>
          <p>Your team grew.</p>
          <p>Your ambitions grew.</p>
          <p className="pt-1 font-medium text-gray-900">
            Now you&apos;re looking at another branch, a larger operation or a stronger commercial presence in Ikeja.
          </p>
        </div>
      </div>
    </section>
  );
}
