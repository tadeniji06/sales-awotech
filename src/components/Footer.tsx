"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer id="contact" className="w-full bg-[#0B172E] text-white pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative h-10 w-32">
              <Image
                src="/assets/logo.png"
                alt="Awo Tech Mall Logo"
                width={160}
                height={50}
                className="object-contain filter brightness-110"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Awo Tech Mall is the premier commercial tech center situated directly opposite Computer Village, Ikeja. Offering modern shops, corporate suites, and 35% flexible ownership plans.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#4E6B17]/40 border border-[#4E6B17] text-[#D1E627] text-xs font-bold uppercase tracking-wider">
                Own With 35% Down Payment
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#D1E627]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="#hero" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="#growth" className="hover:text-white transition-colors">
                  Why Upgrade
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white transition-colors">
                  Computer Village Location
                </Link>
              </li>
              <li>
                <Link href="#spaces" className="hover:text-white transition-colors">
                  Available Spaces & Floor Plans
                </Link>
              </li>
              <li>
                <button
                  onClick={onOpenModal}
                  className="hover:text-[#D1E627] transition-colors text-left font-medium"
                >
                  Apply for A Space →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Site Office */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#D1E627]">
              Sales & Site Office
            </h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D1E627] flex-shrink-0 mt-0.5" />
                <span>
                  Opposite Computer Village, Otigba / Medical Road Junction, Ikeja, Lagos, Nigeria.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D1E627] flex-shrink-0" />
                <a href="tel:+2348000000000" className="hover:text-white transition-colors">
                  +234 (0) 800 AWO MALL / +234 812 345 6789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#D1E627] flex-shrink-0" />
                <a href="mailto:sales@awotechmall.com" className="hover:text-white transition-colors">
                  sales@awotechmall.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#D1E627] flex-shrink-0" />
                <span>Mon – Sat: 8:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© 2026 Awo Tech Mall. All rights reserved.</p>
          <p className="text-gray-400 text-center sm:text-right">
            Opposite Computer Village, Ikeja, Lagos · Move Forward Without Moving Away.
          </p>
        </div>
      </div>
    </footer>
  );
}
