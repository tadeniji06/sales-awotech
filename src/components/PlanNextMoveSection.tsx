"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface PlanNextMoveSectionProps {
  onExploreOpportunities: () => void;
}

export default function PlanNextMoveSection({
  onExploreOpportunities,
}: PlanNextMoveSectionProps) {
  return (
    <section id="plan-next-move" className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Heading */}
        <div className="max-w-4xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] tracking-tight leading-[1.12]">
            Plan The Next Move Before You Need To Make It.
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Narrative, CTA, and Lower Image (planb.jpg) */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full">
            <div>
              <div className="space-y-1.5 text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                <p>The ground floor is already sold out.</p>
                <p>The development is moving forward.</p>
                <p>And the question isn&apos;t whether Awo Tech will have businesses in it.</p>
                <p className="font-black text-[#111827] text-base sm:text-lg uppercase pt-1">
                  The question is whether your business will be one of them.
                </p>
              </div>

              <div>
                <button
                  onClick={onExploreOpportunities}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-semibold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
                >
                  <span>Explore Commercial Opportunities</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Lower Construction Photo on the Left (planb.jpg) */}
            <div className="mt-8 sm:mt-10 relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gray-100 aspect-[16/11] border border-gray-100 group">
              <Image
                src="/assets/planb.jpg"
                alt="Awo Tech Mall concrete basement and lift pit construction in progress"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Foundation Photo (plan.jpg) and Caption */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl bg-gray-100 aspect-[16/11] sm:aspect-[4/3] border border-gray-100 mb-4 group">
              <Image
                src="/assets/plan.jpg"
                alt="Awo Tech Mall site development taking shape in Ikeja opposite Computer Village"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            {/* Quote Caption */}
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-gray-900 pt-1">
              &ldquo;A DEVELOPMENT TAKING SHAPE IN IKEJA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
