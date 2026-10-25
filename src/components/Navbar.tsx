"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#growth" },
    { label: "Spaces", href: "#location" },
    { label: "Events", href: "#events" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6 max-w-6xl mx-auto">
      <nav
        aria-label="Main Navigation"
        className="w-full rounded-full px-4 sm:px-6 py-2.5 sm:py-3 shadow-xl backdrop-blur-md transition-all duration-300 flex items-center justify-between"
        style={{
          background:
            "linear-gradient(95deg, #0B172E 0%, #11223D 45%, #253916 80%, #405713 100%)",
          boxShadow: "0 10px 25px -5px rgba(11, 23, 46, 0.4)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="relative h-8 sm:h-9 w-24 sm:w-28 flex items-center">
            <Image
              src="/assets/logo.png"
              alt="AT Mall Logo"
              width={140}
              height={44}
              priority
              className="object-contain filter brightness-105 contrast-105"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 text-white/90 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-200 tracking-wide hover:underline underline-offset-4 decoration-[#D1E627]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenModal}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#111827] text-sm font-semibold tracking-wide border-2 border-[#D1E627] hover:border-white hover:bg-[#F9FAFB] hover:shadow-lg transition-all active:scale-95 shadow-sm"
          >
            Apply for A Space
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-1.5 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 rounded-2xl bg-[#0B172E]/95 backdrop-blur-lg border border-white/10 p-5 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-white py-2 text-base font-medium border-b border-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="mt-3 w-full py-3 rounded-full bg-white text-[#111827] font-semibold text-center text-sm border-2 border-[#D1E627] shadow-md"
            >
              Apply for A Space
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
