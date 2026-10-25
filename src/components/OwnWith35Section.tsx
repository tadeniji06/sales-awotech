"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface OwnWith35SectionProps {
  onGetOwnershipDetails: () => void;
}

export default function OwnWith35Section({
  onGetOwnershipDetails,
}: OwnWith35SectionProps) {
  return (
    <section
      id="ownership"
      className="w-full py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#EFF2DB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Heading, Narrative & CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-black uppercase text-[#111827] leading-[1.1] tracking-tight mb-6">
              You Can Own With 35%*.
            </h2>

            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
              <p>You don&apos;t need to put down 100% to take your position.</p>
              <p>
                The 35% entry point creates an opportunity for businesses and investors to explore ownership without having to commit the full purchase amount upfront.
              </p>
              <p>
                And that matters because the right commercial opportunity isn&apos;t always about having every naira available today.
              </p>
              <p>
                Sometimes it&apos;s about being able to secure your position when the opportunity makes sense.
              </p>
            </div>

            <div>
              <button
                onClick={onGetOwnershipDetails}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                <span>Get Ownership Details</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Right Column: 35% Big Stat Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-black/5 flex flex-col justify-between">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  ENTRY POINT*
                </span>
                <div className="text-6xl sm:text-7xl lg:text-8xl font-black text-[#4E6B17] tracking-tight mb-6">
                  35%
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Request details on balance payments, eligibility, fees and available units.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
