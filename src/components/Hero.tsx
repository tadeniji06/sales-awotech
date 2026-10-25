"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onExploreSpaces: () => void;
  onDiscoverOwnership: () => void;
}

export default function Hero({ onExploreSpaces, onDiscoverOwnership }: HeroProps) {
  return (
    <section id="hero" className="w-full pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Top Badge / Tag */}
            <div className="mb-3">
              <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#4E6B17]">
                OWN WITH 35%
              </span>
            </div>

            {/* Main H1 Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[62px] font-black uppercase text-[#111827] leading-[1.06] tracking-tight mb-4">
              Your Business Has Outgrown The Space.
            </h1>

            {/* Green Subheading */}
            <h2 className="text-xl sm:text-2xl lg:text-[26px] font-extrabold uppercase text-[#4E6B17] leading-snug mb-5">
              But You Don&apos;t Have To Leave The Market That Built It.
            </h2>

            {/* Descriptive Body Copy */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              If Computer Village is where your customers know you, where your network is, and where your business has grown, moving simply because you need a better environment isn&apos;t right.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreSpaces}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Explore Available Spaces</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              <button
                onClick={onDiscoverOwnership}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-900 font-semibold text-sm sm:text-base tracking-wide border border-gray-300 hover:border-gray-400 shadow-sm transition-all active:scale-[0.98]"
              >
                Discover Ownership
              </button>
            </div>
          </div>

          {/* Right Column: Hero Architecture Render */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <div className="relative pl-4 sm:pl-5">
              {/* Green vertical accent bar on the left edge as seen in Figma */}
              <div 
                className="absolute left-0 top-8 bottom-8 w-1 sm:w-1.5 bg-[#4E6B17] rounded-full z-10"
                aria-hidden="true"
              />

              {/* Main Architectural Image Container */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-100 aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/assets/hero.jpg"
                  alt="Awo Tech Mall modern commercial facade directly opposite Computer Village Ikeja"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
