"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface UnitPricingSectionProps {
  onInquire?: (floorName: string) => void;
}

export default function UnitPricingSection({
  onInquire,
}: UnitPricingSectionProps) {
  const pricingData = [
    { floor: "Ground Floor", price: "₦7,000,000" },
    { floor: "1st Floor", price: "₦5,000,000" },
    { floor: "2nd Floor", price: "₦4,500,000" },
    { floor: "3rd Floor", price: "₦3,500,000" },
    { floor: "4th Floor", price: "₦3,500,000" },
    { floor: "5th Floor", price: "₦7,000,000" },
  ];

  return (
    <section
      id="pricing"
      className="w-full py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: "#141311" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <h2
            className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-2.5"
            style={{ fontFamily: "Georgia, Cambria, 'Times New Roman', serif" }}
          >
            Current unit prices
          </h2>
          <p className="text-sm sm:text-base text-[#9E9B95]">
            Price per square metre for each floor.
          </p>
        </div>

        {/* Pricing Table Card Container */}
        <div className="rounded-2xl sm:rounded-3xl border border-[#2B2824] bg-[#1A1815]/80 p-5 sm:p-8 shadow-2xl backdrop-blur-sm">
          {/* Table Header Row */}
          <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#2B2824]">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8E8B85]">
              FLOOR
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#8E8B85]">
              PRICE PER SQM
            </span>
          </div>

          {/* Pricing Rows */}
          <div className="divide-y divide-[#2B2824]">
            {pricingData.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onInquire?.(`${item.floor} Unit Inquiry`)}
                className="py-4 sm:py-5 flex items-center justify-between group transition-colors hover:bg-white/[0.02] cursor-pointer"
                title={`Click to inquire about ${item.floor}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-white text-base sm:text-lg font-medium group-hover:text-[#E68A35] transition-colors">
                    {item.floor}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[#E68A35] font-bold text-base sm:text-xl tracking-tight">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inquire CTA Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => onInquire?.("Floor Space Availability Inquiry")}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E68A35] hover:bg-[#D57B28] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-orange-950/40 transition-all active:scale-[0.98]"
          >
            <span>Inquire About Available Spaces & Floor Plans</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
