"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function LeadCaptureSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    paymentFormat: "Full Payment",
    actualBudget: "",
    investmentTimeline: "",
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

        {/* Centered Form Card matching Figma and CRM requirements */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-black/5">
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-fadeIn">
              <div className="w-14 h-14 bg-[#EFF2DB] text-[#4E6B17] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-[#111827]">
                Thank you!
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
                Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Our investment team will reach out shortly via <span className="font-semibold text-gray-900">{formData.phoneNumber}</span> with the right plan for you.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    fullName: "",
                    phoneNumber: "",
                    emailAddress: "",
                    paymentFormat: "Full Payment",
                    actualBudget: "",
                    investmentTimeline: "",
                  });
                }}
                className="mt-4 px-6 py-2.5 rounded-full bg-[#0D3823] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#072416] transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <div>
              {/* Header inside card */}
              <div className="mb-6">
                <span className="block text-xs font-bold uppercase tracking-wider text-[#E05A47] mb-1">
                  GROW YOUR MONEY
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight mb-2">
                  Subscribe Now
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Leave your details and our investment team will reach out with the right plan for you.
                </p>
              </div>

              {/* Form element with id="contact-form" for CRM 360 script capture */}
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                  />
                  {/* Alias for CRM backend */}
                  <input type="hidden" name="name" value={formData.fullName} />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                  />
                  {/* Alias for CRM backend */}
                  <input type="hidden" name="phoneNumber" value={formData.phoneNumber} />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.emailAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, emailAddress: e.target.value })
                    }
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-transparent text-sm text-gray-900 placeholder:text-gray-400"
                  />
                  {/* Alias for CRM backend */}
                  <input type="hidden" name="emailAddress" value={formData.emailAddress} />
                </div>

                {/* Payment Format */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Payment Format
                  </label>
                  <select
                    name="paymentFormat"
                    value={formData.paymentFormat}
                    onChange={(e) =>
                      setFormData({ ...formData, paymentFormat: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-transparent text-sm text-gray-900 bg-white"
                  >
                    <option value="Full Payment">Full Payment</option>
                    <option value="35% Initial Deposit">35% Initial Deposit</option>
                    <option value="Flexible Installments">Flexible Installments</option>
                  </select>
                </div>

                {/* Actual Budget */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    Actual Budget
                  </label>
                  <select
                    name="budget"
                    required
                    value={formData.actualBudget}
                    onChange={(e) =>
                      setFormData({ ...formData, actualBudget: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-transparent text-sm text-gray-900 bg-white"
                  >
                    <option value="" disabled>Select...</option>
                    <option value="Below ₦20,000,000">Below ₦20,000,000</option>
                    <option value="₦20,000,000 - ₦50,000,000">₦20,000,000 - ₦50,000,000</option>
                    <option value="₦50,000,000 - ₦100,000,000">₦50,000,000 - ₦100,000,000</option>
                    <option value="Above ₦100,000,000">Above ₦100,000,000</option>
                  </select>
                  {/* Alias for CRM backend */}
                  <input type="hidden" name="actualBudget" value={formData.actualBudget} />
                </div>

                {/* How soon are you looking to invest? */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-1.5">
                    How soon are you looking to invest?
                  </label>
                  <select
                    name="timeline"
                    required
                    value={formData.investmentTimeline}
                    onChange={(e) =>
                      setFormData({ ...formData, investmentTimeline: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] focus:border-transparent text-sm text-gray-900 bg-white"
                  >
                    <option value="" disabled>Select...</option>
                    <option value="0-7 days">0-7 days</option>
                    <option value="7-30 days">7-30 days</option>
                    <option value="30-60 days">30-60 days</option>
                    <option value="60-90 days">60-90 days</option>
                    <option value="90+ days">90+ days</option>
                  </select>
                  {/* Alias for CRM backend */}
                  <input type="hidden" name="investmentTimeline" value={formData.investmentTimeline} />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-full bg-[#0D3823] hover:bg-[#072416] text-white font-bold text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-75"
                  >
                    <span>{loading ? "Submitting..." : "Subscribe Now"}</span>
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
