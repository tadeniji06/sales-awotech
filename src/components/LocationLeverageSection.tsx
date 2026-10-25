"use client";

import React from "react";
import Image from "next/image";

export default function LocationLeverageSection() {
  const nearbyPlaces = [
    "Computer Village",
    "Banks & financial institutions",
    "Corporate headquarters",
    "Government agencies",
    "Legal institutions",
    "Tech startups",
    "Major hotels",
    "Murtala Muhammed International Airport",
  ];

  return (
    <section id="leverage" className="w-full py-16 sm:py-20 lg:py-24 bg-[#4E6B17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Narrative & Key Points */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Tag */}
            <div className="mb-2">
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-white/90">
                THE ADVANTAGE OF BEING IN THE RIGHT PLACE
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-white leading-[1.12] tracking-tight mb-6">
              Location Isn&apos;t Just An Address. It&apos;s Leverage.
            </h2>

            {/* Narrative text */}
            <div className="space-y-1 text-white/90 text-sm sm:text-base leading-relaxed">
              <p>Being in the right place can make things easier.</p>
              <p>Easier for customers to find you.</p>
              <p>Easier for employees to reach you.</p>
              <p>Easier for clients to meet you.</p>
              <p>Easier for businesses around you to discover you.</p>
              <p>And easier for you to remain connected to one of Lagos&apos; strongest commercial and technology ecosystems.</p>

              <p className="pt-3 font-medium text-white">
                Awo Tech Mall is positioned close to:
              </p>

              <div className="py-2 space-y-0.5">
                {nearbyPlaces.map((place, idx) => (
                  <p key={idx} className="font-extrabold text-white text-base">
                    {place}
                  </p>
                ))}
              </div>

              <div className="pt-2 space-y-0.5">
                <p className="font-semibold text-white">
                  Your business shouldn&apos;t have to explain where Ikeja is.
                </p>
                <p className="font-semibold text-white">
                  Your address should already carry recognition.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Aerial Computer Village Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black/10 border border-white/10 group">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/12]">
                <Image
                  src="/assets/lev.png"
                  alt="Aerial high-angle view of vibrant Computer Village Ikeja ecosystem"
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
