"use client";

import React from "react";
import { Play } from "lucide-react";

export default function TechBusinessVideoSection() {
  return (
    <section id="tech-business" className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subhead */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] tracking-tight leading-[1.12]">
            And If You&apos;re Building A Tech Business...
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-bold uppercase text-gray-500 tracking-wide mt-2">
            Why Build The Future From A Space That Feels Like The Past?
          </p>
        </div>

        {/* Video Placeholder Box matching Screenshot 2 */}
        <div
          className="relative w-full rounded-2xl sm:rounded-3xl aspect-[16/9] sm:aspect-[16/7.5] flex flex-col items-center justify-center shadow-sm border border-black/5 group cursor-pointer transition-all duration-300 hover:shadow-md"
          style={{ backgroundColor: "#F4F7DC" }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111827] tracking-tight">
              Video here
            </span>
            <div className="w-12 h-12 rounded-full bg-black/10 group-hover:bg-[#4E6B17] group-hover:text-white flex items-center justify-center transition-all duration-300">
              <Play className="w-5 h-5 ml-0.5 fill-current" />
            </div>
          </div>
        </div>

        {/* Narrative Below Video */}
        <div className="mt-8 sm:mt-10 max-w-4xl space-y-2 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>
            Awo Tech Mall is designed around technology, collaboration and modern business.
          </p>
          <p>
            With tech-enabled co-working spaces, high-speed connectivity and an environment built around innovation, your workspace becomes part of your business identity.
          </p>
          <div className="pt-1">
            <p className="font-extrabold text-[#111827] text-lg sm:text-xl">
              Because the way your business operates matters.
            </p>
            <p className="text-gray-600 pt-0.5">
              And increasingly, where you operate matters too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
