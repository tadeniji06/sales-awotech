"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface SoldOutAndAvailabilitySectionProps {
  onCheckAvailability: () => void;
}

export default function SoldOutAndAvailabilitySection({
  onCheckAvailability,
}: SoldOutAndAvailabilitySectionProps) {
  return (
    <div id="availability" className="w-full">
      {/* Upper Block: The Ground Floor is Already Sold Out (Olive Green Background) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-[#4E6B17] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Bold Announcement */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-white leading-[1.12] tracking-tight mb-4">
                The Ground Floor Is Already Sold Out.
              </h2>
              <p className="text-lg sm:text-xl font-extrabold uppercase text-white/95 leading-snug">
                So The Market Has Already Started Making Its Choice.
              </p>
            </div>

            {/* Right Column: Construction Image with "SOLD OUT" Angled Stamp */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black/20 border border-white/20 aspect-[16/11] group">
                <Image
                  src="/assets/soldout.jpg"
                  alt="Awo Tech Mall construction site with ground floor foundation completely sold out"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />

                {/* Angled White "SOLD OUT" Stamp Box exactly matching Screenshot 4 */}
                <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
                  <div className="border-[6px] sm:border-[8px] border-white text-white font-black text-3xl sm:text-5xl lg:text-[54px] px-6 py-2.5 sm:px-8 sm:py-3.5 tracking-widest uppercase -rotate-[14deg] shadow-2xl rounded-xl bg-black/20 backdrop-blur-[2px]">
                    SOLD OUT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower Block: What's Available Now — And Where Does Your Business Fit? (White Background) */}
      <section className="w-full py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Headline & Subtext */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-2">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#4E6B17]">
                  PLAN YOUR NEXT MOVE EARLY
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase text-[#111827] leading-[1.12] tracking-tight mb-4">
                What&apos;s Available Now — And Where Does Your Business Fit?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                If Awo Tech Mall is on your radar, this is the point where you start exploring.
              </p>
            </div>

            {/* Right Column: Find Your Space Card */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-black/5 overflow-hidden"
                style={{
                  backgroundColor: "#F4F7DC",
                  borderTop: "6px solid #4E6B17",
                }}
              >
                <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  CURRENT AVAILABILITY
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#111827] mb-2 tracking-tight">
                  Find your space.
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  Request the latest availability list before deciding.
                </p>
                <div>
                  <button
                    onClick={onCheckAvailability}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                  >
                    <span>Check Availability</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
