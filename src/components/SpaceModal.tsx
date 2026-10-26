"use client";

import React, { useState } from "react";
import { X, CheckCircle } from "lucide-react";

interface SpaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function SpaceModal({ isOpen, onClose }: SpaceModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    paymentFormat: "Full Payment",
    actualBudget: "",
    investmentTimeline: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto border border-gray-100"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#EFF2DB] text-[#0D3823] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-[#111827]">
              Thank you!
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900">{formData.fullName}</span>. Our investment team will reach out shortly on <span className="font-semibold text-gray-900">{formData.phoneNumber}</span> with the right plan for you.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 bg-[#0D3823] hover:bg-[#072416] text-white rounded-full font-semibold transition-all shadow-md"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="block text-xs font-bold uppercase tracking-wider text-[#E05A47] mb-1">
                GROW YOUR MONEY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111827] tracking-tight mb-2">
                Subscribe Now
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leave your details and our investment team will reach out with the right plan for you.
              </p>
            </div>

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
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] text-sm text-gray-900 placeholder:text-gray-400"
                />
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
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] text-sm text-gray-900 placeholder:text-gray-400"
                />
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
                  onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] text-sm text-gray-900 placeholder:text-gray-400"
                />
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
                  onChange={(e) => setFormData({ ...formData, paymentFormat: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] text-sm text-gray-900 bg-white"
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
                  onChange={(e) => setFormData({ ...formData, actualBudget: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] text-sm text-gray-900 bg-white"
                >
                  <option value="" disabled>Select...</option>
                  <option value="Below ₦20,000,000">Below ₦20,000,000</option>
                  <option value="₦20,000,000 - ₦50,000,000">₦20,000,000 - ₦50,000,000</option>
                  <option value="₦50,000,000 - ₦100,000,000">₦50,000,000 - ₦100,000,000</option>
                  <option value="Above ₦100,000,000">Above ₦100,000,000</option>
                </select>
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
                  onChange={(e) => setFormData({ ...formData, investmentTimeline: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0D3823] text-sm text-gray-900 bg-white"
                >
                  <option value="" disabled>Select...</option>
                  <option value="0-7 days">0-7 days</option>
                  <option value="7-30 days">7-30 days</option>
                  <option value="30-60 days">30-60 days</option>
                  <option value="60-90 days">60-90 days</option>
                  <option value="90+ days">90+ days</option>
                </select>
                <input type="hidden" name="investmentTimeline" value={formData.investmentTimeline} />
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-full bg-[#0D3823] hover:bg-[#072416] text-white font-bold text-base tracking-wide shadow-md hover:shadow-lg transition-all active:scale-[0.99] disabled:opacity-75"
                >
                  {loading ? "Submitting..." : "Subscribe Now"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
