"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ExperienceAmenitiesSectionProps {
  onSeeExperience: () => void;
}

export default function ExperienceAmenitiesSection({
  onSeeExperience,
}: ExperienceAmenitiesSectionProps) {
  const topCards = [
    {
      title: "PARKING",
      desc: "Designed around access and vehicle movement.",
    },
    {
      title: "CO-WORKING",
      desc: "Flexible, tech-enabled workspaces.",
    },
    {
      title: "RESTAURANT + GREEN COURTYARD",
      desc: "Spaces to meet, eat and recharge.",
    },
  ];

  const bottomCards = [
    {
      title: "GAMES + ARCADE",
      desc: "",
      image: "/assets/games.png",
      alt: "Gaming and arcade arena at Awo Tech Mall",
    },
    {
      title: "BEAUTY SPACES",
      desc: "Spaces for beauty and personal-care businesses.",
      image: "/assets/beauty.png",
      alt: "Luxury beauty and salon suites at Awo Tech Mall",
    },
    {
      title: "RETAIL AREAS",
      desc: "Commercial spaces for businesses and customers.",
      image: "/assets/retail.png",
      alt: "Modern retail corridors at Awo Tech Mall",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-16 sm:py-20 lg:py-28"
      style={{ backgroundColor: "#EFF2DB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tag */}
        <div className="mb-2">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#4E6B17]">
            IT&apos;S DESIGNED AROUND EXPERIENCE.
          </span>
        </div>

        {/* Section Heading */}
        <div className="max-w-4xl mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] tracking-tight leading-[1.1]">
            Your Customers Notice More Than You Think.
          </h2>
        </div>

        {/* 6 Cards Grid (3 Columns) */}
        <div className="space-y-6 sm:space-y-7 mb-12 sm:mb-14">
          {/* Row 1: Top 3 Cards (Without placeholder box, clean lower part) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {topCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm border border-black/5 flex flex-col justify-center group transition-all duration-300 hover:shadow-md"
              >
                <h3 className="text-base sm:text-lg font-black uppercase text-[#111827] tracking-wide mb-1.5">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Row 2: Bottom 3 Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
            {bottomCards.map((card, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm aspect-[16/10] sm:aspect-[16/9.5] group cursor-pointer"
              >
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                {/* Bottom Text Content */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="text-sm sm:text-base font-black uppercase tracking-wide">
                    {card.title}
                  </h3>
                  {card.desc && (
                    <p className="text-xs text-white/80 mt-1 leading-snug">
                      {card.desc}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onSeeExperience}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <span>See The Awo Tech Experience</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
