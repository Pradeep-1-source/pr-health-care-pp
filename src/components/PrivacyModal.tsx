'use client';

import React from 'react';
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-brand-800 to-brand-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/10 rounded-xl">
              <ShieldCheck className="w-6 h-6 text-tealAccent-300" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Patient Data & Privacy Policy</h3>
              <p className="text-xs text-brand-200">PR HEALTH CARE Patient Information Safeguards</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-5 text-sm text-slate-600 max-h-[70vh] overflow-y-auto">
          <div className="bg-brand-50/60 border border-brand-100 rounded-2xl p-4 flex items-start gap-3">
            <Lock className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
            <p className="text-xs text-brand-900 leading-relaxed font-medium">
              PR HEALTH CARE is committed to upholding strict medical confidentiality and ethical patient information handling. Your contact and appointment details are collected strictly for coordinating your care.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-tealAccent-600" />
              1. Information We Collect
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              When requesting an appointment or contacting our clinic, we collect your name, mobile phone number, preferred appointment date/time, selected service, and any optional notes you voluntarily provide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-tealAccent-600" />
              2. How Your Information Is Used
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your details are used solely to schedule your appointment, communicate booking confirmations, coordinate follow-ups, and answer inquiries via phone or WhatsApp. We never sell, rent, or share patient personal data with third-party advertisers or external marketers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-tealAccent-600" />
              3. Appointment Confirmation Notice
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Submitting an online appointment form constitutes a booking request. All appointment slots are reviewed and confirmed by our clinic reception team based on doctor availability.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-tealAccent-600" />
              4. Direct Contact & Corrections
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              If you wish to update or remove your appointment request or contact details from our records, please reach out directly to PR HEALTH CARE at <span className="font-semibold text-slate-900">7305053083</span> or via WhatsApp.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            I Understand & Accept
          </button>
        </div>
      </div>
    </div>
  );
}

