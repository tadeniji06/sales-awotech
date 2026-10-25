"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, ShieldCheck, Zap, Wifi, ArrowUpRight, Maximize2 } from "lucide-react";

interface SpacesShowcaseProps {
  onSelectSpace: (spaceName: string) => void;
}

export default function SpacesShowcase({ onSelectSpace }: SpacesShowcaseProps) {
  const [activeTab, setActiveTab] = useState<"spaces" | "floorplan">("spaces");

  const categories = [
    {
      title: "Gadgets & Mobile Tech Retail",
      desc: "Prime high-visibility ground & first floor storefronts designed for smartphones, accessories, and flagship retail displays.",
      image: "/assets/retail.png",
      tag: "Ground & 1st Floor",
      status: "Fast Selling",
    },
    {
      title: "Gaming & VR Experience Hub",
      desc: "High-spec commercial spaces with high-speed fiber infrastructure, ambient soundproofing, and dedicated cooling.",
      image: "/assets/games.png",
      tag: "Entertainment Wing",
      status: "Available",
    },
    {
      title: "Tech Lifestyle & Service Lounges",
      desc: "Dedicated beauty, lifestyle, and executive consultation suites for client meetings and customer service desks.",
      image: "/assets/beauty.png",
      tag: "Upper Levels",
      status: "Limited Units",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "24/7 Dedicated Power Grid",
      desc: "Uninterrupted heavy-duty power backup ensuring zero downtime for your sales and tech operations.",
    },
    {
      icon: ShieldCheck,
      title: "Bank-Grade Security",
      desc: "CCTV surveillance, automated access control, and 24/7 trained security personnel on site.",
    },
    {
      icon: Wifi,
      title: "High-Speed Fiber Backbone",
      desc: "Direct enterprise fiber connection for point-of-sale systems, live streaming, and instant inventory management.",
    },
    {
      icon: Check,
      title: "Ample Underground Parking",
      desc: "Secure customer and vendor parking spaces right opposite Computer Village's busiest junction.",
    },
  ];

  return (
    <section id="spaces" className="w-full py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#4E6B17]">
              Purpose-Built For Technology Businesses
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-[#111827] tracking-tight mt-2">
              Spaces Designed For Commercial Scale
            </h2>
          </div>

          {/* Tab Switcher */}
          <div className="inline-flex p-1 bg-gray-100 rounded-full border border-gray-200 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("spaces")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === "spaces"
                  ? "bg-[#4E6B17] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Spaces Overview
            </button>
            <button
              onClick={() => setActiveTab("floorplan")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all ${
                activeTab === "floorplan"
                  ? "bg-[#4E6B17] text-white shadow-sm"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Floor Layouts
            </button>
          </div>
        </div>

        {activeTab === "spaces" ? (
          <div>
            {/* Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl overflow-hidden border border-gray-200 bg-white hover:border-[#4E6B17] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-[#4E6B17] shadow-sm">
                      {cat.tag}
                    </div>
                    <div className="absolute top-4 right-4 bg-[#111827]/80 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white">
                      {cat.status}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold uppercase text-[#111827] mb-2 group-hover:text-[#4E6B17] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {cat.desc}
                      </p>
                    </div>

                    <button
                      onClick={() => onSelectSpace(cat.title)}
                      className="w-full py-3 rounded-full border border-[#4E6B17] text-[#4E6B17] hover:bg-[#4E6B17] hover:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200"
                    >
                      <span>Inquire About Space</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Infrastructure Highlights */}
            <div className="rounded-3xl bg-gray-50 border border-gray-200/80 p-8 sm:p-12">
              <div className="mb-8 text-center max-w-2xl mx-auto">
                <span className="text-xs font-black uppercase tracking-wider text-[#4E6B17]">
                  Unmatched Facility Standards
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase text-[#111827] mt-1">
                  Why Awo Tech Mall Outperforms Traditional Shops
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feat, idx) => {
                  const Icon = feat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#EFF2DB] text-[#4E6B17] flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-1.5 uppercase">
                        {feat.title}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          /* Floor Plan Tab */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-3xl p-6 sm:p-10 border border-gray-200">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
              <Image
                src="/assets/plan.jpg"
                alt="Awo Tech Mall Master Floor Plan Layout"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-2"
              />
            </div>
            <div className="space-y-5">
              <span className="text-xs font-black uppercase tracking-wider text-[#4E6B17]">
                Architectural Master Plan
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#111827]">
                Optimized For High Foot Traffic & Smooth Logistics
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Every square meter is engineered for business continuity: wide corridors for bulk logistics, central atriums for optimal brand signage visibility, and dedicated cargo lifts for stock movement.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onSelectSpace("Architectural Master Plan Consultation")}
                  className="px-6 py-3 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-md"
                >
                  <span>Request Full Floor Brochure</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
