'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, X, Shield, Clock } from 'lucide-react';
import { createWhatsAppUrl } from '@/lib/utils';

interface WhatsAppFloatingButtonProps {
  phone?: string;
  clinicName?: string;
}

export default function WhatsAppFloatingButton({
  phone = '7305053083',
  clinicName = 'PR HEALTH CARE',
}: WhatsAppFloatingButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = `Hello ${clinicName}, I would like to inquire about your healthcare services and appointment availability.`;
  const whatsappUrl = createWhatsAppUrl(phone, defaultMessage);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Action Popup Panel */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl bg-white p-5 shadow-elevated border border-slate-100 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
          <div className="flex items-start justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full"></span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-slate-900">{clinicName}</h4>
                <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Reception Active
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Close message window"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3">
            <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
              👋 Hi there! Need quick assistance or want to enquire about a consultation? Connect directly with our clinic desk on WhatsApp.
            </p>
          </div>

          <div className="space-y-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Chat on WhatsApp ({phone})
            </a>

            <a
              href={`tel:+91${phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              Call Clinic Directly
            </a>
          </div>

          <div className="mt-3 pt-2 text-center border-t border-slate-100 text-[10px] text-slate-400 flex items-center justify-center gap-1.5">
            <Shield className="w-3 h-3 text-slate-400" />
            <span>Official PR HEALTH CARE Support Line</span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3.5 rounded-full shadow-elevated transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Open WhatsApp conversation"
      >
        <span className="relative flex items-center justify-center">
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </span>
        <span className="text-sm font-semibold tracking-wide hidden sm:inline-block pr-1">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
}

