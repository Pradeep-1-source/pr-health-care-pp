import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  HeartPulse,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Clock,
  Sparkles,
  Lock
} from 'lucide-react';
import { clinicData } from '@/data/clinic';
import { formatPhoneNumber } from '@/lib/utils';

export const metadata = {
  title: 'About Us | PR HEALTH CARE - Patient-Centered Primary Healthcare Clinic',
  description:
    'Learn about PR HEALTH CARE, our mission, vision, and patient-first clinical values. Delivering dependable primary healthcare, doctor consultations, and health checkups in Chennai.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-slate-200/80 via-slate-100 to-slate-100 py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold tracking-wide uppercase mb-4 border border-slate-300 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            About PR HEALTH CARE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Compassionate Care, Built on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-tealAccent-600">
              Patient Trust
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            PR HEALTH CARE is committed to delivering accessible, high-quality, and ethical healthcare for individuals and families in our community.
          </p>
        </div>
      </section>

      {/* Clinic Introduction & Vision Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visuals */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3] bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                  alt="PR HEALTH CARE Clinic Environment"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Clinic Standard Bar */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-soft flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Ethical Practice</h4>
                    <p className="text-[11px] text-slate-500">Evidence-based treatment</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-soft flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-tealAccent-100 text-tealAccent-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Attentive Visits</h4>
                    <p className="text-[11px] text-slate-500">Unhurried consultations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Story */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-tealAccent-800 bg-white px-3 py-1 rounded-full border border-slate-300 shadow-sm">
                Our Foundation
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Healthcare Where the Patient Always Comes First
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded with a straightforward objective: to restore meaningful human connection and unhurried medical evaluation to primary healthcare. At PR HEALTH CARE, we understand that medical visits can often feel intimidating or rushed. We have purposefully designed our clinic processes to ensure every patient is heard with respect and patience.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you visit us for a routine annual health checkup, a seasonal illness, or preventive health planning, our priority is always your comfort, understanding, and long-term vitality.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 block">Thorough Physician Consultations</strong>
                    <span className="text-xs text-slate-500">We dedicate adequate time to listen to your history and address questions without hurry.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 block">Proactive Preventive Checkups</strong>
                    <span className="text-xs text-slate-500">Identifying subtle cardiovascular and metabolic warning signs before complications arise.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <strong className="text-xs sm:text-sm text-slate-900 block">Transparent Medical Guidance</strong>
                    <span className="text-xs text-slate-500">Clear explanations of prescriptions, required diagnostic tests, and dietary recommendations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-16 bg-slate-200/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center shadow-soft">
                <HeartPulse className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To provide accessible, ethical, and patient-centered primary healthcare that improves the well-being of every patient through compassionate listening, early detection, and accurate clinical diagnosis.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-tealAccent-600 text-white flex items-center justify-center shadow-soft">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To be recognized as the premier trusted primary healthcare clinic known for uncompromising clinical ethics, patient comfort, and reliable preventive medicine.
              </p>
            </div>

            {/* Values */}
            <div className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-soft space-y-4 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 rounded-2xl bg-brand-900 text-white flex items-center justify-center shadow-soft">
                <ShieldCheck className="w-6 h-6 text-tealAccent-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Core Principles</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrity in every diagnosis, complete patient confidentiality, transparent communication, and constant focus on preventive health over reactive disease management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Privacy & Trust Assurance */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 shadow-soft">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-600 text-white flex items-center justify-center mx-auto shadow-sm">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Ethical Healthcare & Strict Patient Confidentiality
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At PR HEALTH CARE, we uphold strict standards of medical ethics and patient privacy. We never share patient records with third parties, we do not perform unindicated investigations, and we communicate honestly regarding clinical findings.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4 text-xs font-semibold text-brand-800">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-tealAccent-600" /> Confidential Records
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-tealAccent-600" /> Transparent Inquiries
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-tealAccent-600" /> Direct WhatsApp Access
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-6">
          <h3 className="text-3xl font-extrabold tracking-tight">
            Schedule a Consultation with PR HEALTH CARE
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Our clinic reception is available for appointment scheduling, enquiries, and guidance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-tealAccent-500 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href={`https://wa.me/91${clinicData.phone}?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20would%20like%20to%20learn%20more%20about%20the%20clinic`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
              <span>WhatsApp: {formatPhoneNumber(clinicData.phone)}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
