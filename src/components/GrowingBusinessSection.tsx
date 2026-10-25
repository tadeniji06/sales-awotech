"use client";

import React from "react";
import Image from "next/image";

export default function GrowingBusinessSection() {
  return (
    <section id="growth" className="w-full py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Section Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111827] tracking-tight leading-[1.12]">
            You Know What Happens When Business Starts Growing.
          </h2>
        </div>

        {/* Two Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-6 space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            <p>The space that once felt sufficient suddenly doesn&apos;t.</p>
            <p>Your stock needs somewhere to go.</p>
            <p>Your team needs more room.</p>
            <p>Customers need a better experience.</p>
            <p>You need somewhere to meet clients.</p>
            <p>And eventually, the space you&apos;ve been making work starts working against you.</p>

            <div className="pt-2">
              <p className="text-gray-600 mb-1">But there&apos;s another problem.</p>
              <p className="font-extrabold text-[#111827] text-lg sm:text-xl leading-snug">
                You don&apos;t want to move so far away that you lose the business advantage you&apos;ve spent years building.
              </p>
            </div>

            <p className="pt-2 text-gray-700">That&apos;s where Awo Tech Mall comes in.</p>

            <div className="pt-1 space-y-1">
              <p className="font-extrabold text-[#111827] text-lg sm:text-xl">
                More room to grow.
              </p>
              <p className="font-extrabold text-[#111827] text-lg sm:text-xl">
                More infrastructure to work with.
              </p>
              <p className="font-extrabold text-[#111827] text-lg sm:text-xl text-[#4E6B17]">
                And Computer Village right across from you.
              </p>
            </div>
          </div>

          {/* Right Column: Comparison Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border border-gray-100 group">
              <div className="relative w-full aspect-[16/11]">
                <Image
                  src="/assets/growing-comparison.png"
                  alt="Comparison between crowded traditional tech shop and spacious modern Awo Tech Mall showroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
