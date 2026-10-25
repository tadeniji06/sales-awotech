"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface LocationAdvantageSectionProps {
  onExploreSpaces: () => void;
}

export default function LocationAdvantageSection({
  onExploreSpaces,
}: LocationAdvantageSectionProps) {
  return (
    <section
      id="location"
      className="w-full py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#EFF2DB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Commercial Mall Facade Render */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/50 border border-black/5 group">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/12]">
                <Image
                  src="/assets/available.jpg"
                  alt="Awo Tech Mall multi-story tech commercial hub facade opposite Computer Village"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy, Argument & CTA */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col justify-center">
            {/* Tag / Badge */}
            <div className="mb-3">
              <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#4E6B17]">
                STAY CLOSE TO WHAT YOU&apos;VE BUILT
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase text-[#111827] leading-[1.1] tracking-tight mb-6">
              If You&apos;ve Built Your Business Around Computer Village, This Is For You.
            </h2>

            {/* Body Lines */}
            <div className="space-y-2.5 text-gray-700 text-base sm:text-lg">
              <p>You already understand the value of this location.</p>
              <p>You know where the customers are.</p>
              <p>You know where the suppliers are.</p>
              <p>You know where the technology businesses are.</p>
              <p>You know how much activity happens here every day.</p>
              <p>So why start again somewhere else?</p>
            </div>

            {/* Strong Bold Statement */}
            <div className="mt-8 mb-8">
              <p className="text-xl sm:text-2xl font-black uppercase text-[#111827] tracking-tight">
                Move Forward Without Moving Away.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button
                onClick={onExploreSpaces}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Explore Available Spaces</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
