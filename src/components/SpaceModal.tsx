"use client";

import React, { useState } from "react";
import { X, CheckCircle, ArrowRight, Building2, Phone, Mail, User } from "lucide-react";

interface SpaceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function SpaceModal({ isOpen, onClose, defaultCategory = "Retail Shop" }: SpaceModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    businessType: defaultCategory,
    preferredFloor: "Ground Floor (Prime Retail)",
    paymentPlan: "35% Down Payment (Flexible Installments)",
    note: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 sm:p-8 overflow-hidden border border-gray-100"
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
            <div className="w-16 h-16 bg-[#EFF2DB] text-[#4E6B17] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#111827] uppercase">
              Application Received!
            </h3>
            <p className="text-gray-600 max-w-sm mx-auto text-sm leading-relaxed">
              Thank you, <span className="font-semibold text-gray-900">{formData.name}</span>. An Awo Tech Mall sales advisor will call you shortly on <span className="font-semibold text-gray-900">{formData.phone}</span> to schedule a private site tour and discuss the 35% ownership plan.
            </p>
            <button
              onClick={handleReset}
              className="mt-6 px-8 py-3 bg-[#4E6B17] hover:bg-[#3B5313] text-white rounded-full font-semibold transition-all shadow-md"
            >
              Back to Overview
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4E6B17]">
                Own With 35% Down Payment
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] uppercase mt-1">
                Apply for A Space
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                Secure your retail shop or corporate space directly opposite Computer Village, Ikeja.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Full Name / Business Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Segun Adeyemi / Swift Gadgets"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] text-sm text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="080 1234 5678"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] text-sm text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] text-sm text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Space Interest
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] text-sm text-gray-900 bg-white"
                  >
                    <option value="Phones & Gadgets Retail">Phones & Gadgets Retail</option>
                    <option value="Computer & Hardware Center">Computer & Hardware Center</option>
                    <option value="Electronics & Home Tech">Electronics & Appliances</option>
                    <option value="Executive Office / Suite">Executive Office / Tech Suite</option>
                    <option value="Gaming & Lounge Space">Gaming / VR Lounge</option>
                    <option value="Service & Repairs Hub">Service & Repairs Hub</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                    Ownership Plan
                  </label>
                  <select
                    value={formData.paymentPlan}
                    onChange={(e) => setFormData({ ...formData, paymentPlan: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] text-sm text-gray-900 bg-white"
                  >
                    <option value="35% Initial Deposit">35% Initial Deposit</option>
                    <option value="Outright Purchase (Discounted)">Outright Purchase (Discounted)</option>
                    <option value="Commercial Lease Option">Commercial Lease Option</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Additional Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Estimated square meters, display requirements, timeline..."
                  className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#4E6B17] text-sm text-gray-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-[#4E6B17] hover:bg-[#3B5313] text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg active:scale-[0.99]"
              >
                <span>Submit Space Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-center text-[11px] text-gray-500 pt-1">
                🔒 Your information is confidential. We will never share your details.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
