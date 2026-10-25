"use client";

import React from "react";
import Image from "next/image";

export default function StartWhereYouAreSection() {
  return (
    <section
      id="vision"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#4E6B17] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Bold White Typographic Message */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-black uppercase text-white leading-[1.12] tracking-tight">
              Start Where You Are.
              <br />
              Build Towards Where You&apos;re Going
            </h2>
          </div>

          {/* Right Column: Sleek Modern Office / Showroom Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-black/10 border border-white/10 group">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/assets/ca.png"
                  alt="Modern commercial office space and showroom at Awo Tech Mall"
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
