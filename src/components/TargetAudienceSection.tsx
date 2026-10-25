"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface TargetAudienceSectionProps {
  onSelectAudience: (category: string) => void;
}

export default function TargetAudienceSection({
  onSelectAudience,
}: TargetAudienceSectionProps) {
  const cards = [
    {
      title: "COMPUTER VILLAGE RETAILERS",
      desc: "A better space for products, customers and day-to-day operations.",
    },
    {
      title: "TECH COMPANIES & STARTUPS",
      desc: "A contemporary setting for teams, collaboration and growth.",
    },
    {
      title: "BANKS & CORPORATE BRANCHES",
      desc: "Explore a strategic commercial presence in Ikeja.",
    },
    {
      title: "PROPERTY INVESTORS",
      desc: "Request information on ownership and available units.",
    },
  ];

  return (
    <section id="audiences" className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] tracking-tight leading-[1.1]">
            Your Business May Be Small Today.
          </h2>
          <p className="text-base sm:text-xl font-bold uppercase text-gray-800 tracking-tight mt-2.5">
            That Doesn&apos;t Mean Your Space Should Limit Where It Can Go.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 pl-8 sm:pl-10 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              style={{ backgroundColor: "#EFF2DB" }}
            >
              {/* Dark olive-green accent bar on the left edge */}
              <div 
                className="absolute left-0 top-0 bottom-0 w-1.5 sm:w-2 bg-[#4E6B17]"
                aria-hidden="true"
              />

              <div>
                <h3 className="text-base sm:text-lg font-black uppercase text-[#111827] tracking-wide">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2.5 mb-6">
                  {card.desc}
                </p>
              </div>

              <div>
                <button
                  onClick={() => onSelectAudience(card.title)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-[#4E6B17] hover:text-[#3B5313] transition-colors group-hover:underline underline-offset-4"
                >
                  <span>Explore the opportunity</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Supporting Text */}
        <div className="mt-12 sm:mt-14 max-w-4xl space-y-1.5 text-gray-700 text-base sm:text-lg leading-relaxed">
          <p>You don&apos;t need to be a multinational to think long-term.</p>
          <p className="font-extrabold text-[#111827] text-lg sm:text-xl pt-0.5">
            You need an environment that doesn&apos;t force you to move every time your business takes a step forward.
          </p>
          <p className="text-gray-600 pt-0.5 text-base sm:text-lg">
            Awo Tech Mall brings together flexible workspaces, retail areas and a wider business ecosystem designed to accommodate businesses at different stages.
          </p>
        </div>
      </div>
    </section>
  );
}
