"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface EnvironmentSectionProps {
  onExploreOpportunities: () => void;
}

export default function EnvironmentSection({
  onExploreOpportunities,
}: EnvironmentSectionProps) {
  return (
    <section
      id="environment"
      className="w-full py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#EFF2DB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag / Badge */}
            <div className="mb-3">
              <span className="inline-block text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#EA580C]">
                DESIGNED AROUND MORE THAN TRANSACTIONS
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black uppercase text-[#111827] leading-[1.1] tracking-tight mb-6">
              It&apos;s Not Just Where You Work. It&apos;s The Environment Around Your Work.
            </h2>

            {/* Narrative Paragraphs */}
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                If you&apos;re a bank, financial institution or established company entering or expanding in Ikeja, the address matters.
                <br />
                You want somewhere customers can reach.
                <br />
                Somewhere your team can operate comfortably.
                <br />
                Somewhere that feels credible when a client walks through the door. Somewhere connected to the commercial activity around it.
              </p>

              <p className="font-extrabold text-[#111827] pt-2">
                Awo Tech gives you that strategic Ikeja position, opposite Computer Village and within reach of major corporate, government, financial and technology institutions.
              </p>

              <div className="pt-2 space-y-1">
                <p className="text-gray-700">
                  Your next branch shouldn&apos;t just occupy a building.
                </p>
                <p className="font-extrabold text-[#111827] text-lg sm:text-xl">
                  It should strengthen your presence.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <button
                onClick={onExploreOpportunities}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Explore Commercial Opportunities</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: Banking & Corporate Lobby Render */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white/50 border border-black/5 group">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/12]">
                <Image
                  src="/assets/corporate-banking.png"
                  alt="High-end banking and corporate branch lobby at Awo Tech Mall opposite Computer Village"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
