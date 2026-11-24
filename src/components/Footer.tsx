'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Activity,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { formatPhoneNumber } from '@/lib/utils';
import PrivacyModal from './PrivacyModal';

interface FooterProps {
  clinicPhone?: string;
  clinicAddress?: string;
}

export default function Footer({
  clinicPhone = '7305053083',
  clinicAddress = 'First Floor, Healthcare Suite, Gandhi Road, Chennai, Tamil Nadu',
}: FooterProps) {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-brand-950 text-slate-300 pt-16 pb-8 border-t border-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-900/80">
            {/* Column 1: Clinic Branding & Identity */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-3 group focus:outline-none">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-600 to-tealAccent-500 flex items-center justify-center text-white shadow-soft">
                  <Activity className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-xl font-extrabold tracking-tight text-white block">
                    PR HEALTH CARE
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-tealAccent-400">
                    Trusted Primary Healthcare
                  </span>
                </div>
              </Link>

              <p className="text-xs text-slate-400 leading-relaxed">
                Dedicated to providing patient-centered, compassionate, and ethical medical care. Your wellness, preventive health, and comfort remain our utmost priority.
              </p>

              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-900 text-tealAccent-300 text-xs font-medium border border-brand-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-tealAccent-400" />
                  Verified & Patient-Focused Care
                </span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-tealAccent-500 rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    Home Page
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    About PR HEALTH CARE
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    Medical Services
                  </Link>
                </li>
                <li>
                  <Link href="/appointment" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    Book an Appointment
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-brand-500" />
                    Contact & Directions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Confirmed Medical Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-tealAccent-500 rounded-full"></span>
                Our Services
              </h3>
              <ul className="space-y-2.5 text-xs">
                <li>
                  <Link href="/services#general-health-checkup" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-tealAccent-400"></span>
                    General Health Checkup
                  </Link>
                </li>
                <li>
                  <Link href="/services#general-consultation" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    General Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/services#preventive-healthcare" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    Preventive Healthcare
                  </Link>
                </li>
                <li>
                  <Link href="/services#basic-health-assessment" className="text-slate-400 hover:text-tealAccent-300 transition-colors flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                    Basic Health Assessment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Information */}
            <div className="space-y-3.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-tealAccent-500 rounded-full"></span>
                Clinic Contact
              </h3>

              <div className="flex items-start gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-tealAccent-400 shrink-0 mt-0.5" />
                <span>{clinicAddress}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-tealAccent-400 shrink-0" />
                <a href={`tel:+91${clinicPhone}`} className="hover:text-white transition-colors font-medium">
                  {formatPhoneNumber(clinicPhone)}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-300">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
                <a
                  href={`https://wa.me/91${clinicPhone}?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20would%20like%20to%20enquire%20about%20a%20doctor%20consultation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-medium"
                >
                  WhatsApp: {formatPhoneNumber(clinicPhone)}
                </a>
              </div>

              <div className="flex items-start gap-3 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-tealAccent-400 shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Sat: 8:00 AM – 8:30 PM</p>
                  <p>Sunday: 9:00 AM – 1:00 PM</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/91${clinicPhone}?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20have%20an%20enquiry`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  Chat on WhatsApp ({clinicPhone})
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Privacy */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} PR HEALTH CARE. All rights reserved. Patient-centered primary healthcare.</p>

            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="hover:text-slate-300 transition-colors underline-offset-4 hover:underline"
            >
              Patient Data & Privacy Policy
            </button>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyModal isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
}
