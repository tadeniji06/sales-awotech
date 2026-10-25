"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="contact-form"
      className="w-full py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: "#EFF2DB" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-black uppercase text-[#111827] leading-[1.15] tracking-tight mb-4">
            Let&apos;s Find Out If Awo Tech Is Right For You.
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Tell us what you&apos;re looking for and the sales team can help you understand the available opportunity.
          </p>
        </div>

        {/* Centered Form Card */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-black/5">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-[#EFF2DB] text-[#4E6B17] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black uppercase text-[#111827]">
                Details Submitted!
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. An Awo Tech Mall sales consultant will reach out via <span className="font-semibold text-gray-900">{formData.phoneNumber}</span> with the latest brochure and pricing structure.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ fullName: "", phoneNumber: "", emailAddress: "" });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#4E6B17] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#3B5313] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div>
              <h3 className="text-base sm:text-lg font-black uppercase text-[#111827] tracking-wide mb-6">
                Get Awo Tech Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.emailAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, emailAddress: e.target.value })
                    }
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#4E6B17] hover:bg-[#3B5313] text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-75"
                  >
                    <span>{loading ? "Submitting..." : "Get Awo Tech Details"}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
