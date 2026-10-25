"use client";

import React from "react";

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-4xl mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] tracking-tight leading-[1.12]">
            What Businesses Are Saying
          </h2>
        </div>

        {/* 3 Large Placeholder Cards Grid exactly matching Screenshot 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl sm:rounded-3xl aspect-[3/4] sm:aspect-[4/5] p-8 flex flex-col justify-between border border-black/5 shadow-sm transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: "#F4F6EC" }}
            >
              {/* Clean placeholder card ready for testimonials/quotes */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
