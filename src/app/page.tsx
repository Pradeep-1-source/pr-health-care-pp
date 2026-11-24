import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  Phone,
  MessageCircle,
  Activity,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { clinicData } from '@/data/clinic';
import { servicesData } from '@/data/services';
import ServiceCard from '@/components/ServiceCard';
import { formatPhoneNumber } from '@/lib/utils';

export default function HomePage() {
  const featuredCheckup = servicesData.find(s => s.isHighlighted) || servicesData[0];

  const whyChooseUs = [
    {
      title: "Experienced Medical Care",
      description: "Attentive clinical consultations dedicated to understanding your symptoms and tailoring appropriate treatment plans.",
      icon: "Stethoscope"
    },
    {
      title: "Patient-Focused Approach",
      description: "We listen with patience, explain diagnoses with clarity, and keep you informed at every step of your care journey.",
      icon: "HeartPulse"
    },
    {
      title: "Preventive & Routine Checkups",
      description: "Early detection and routine health evaluations that empower you to stay healthy before issues become complex.",
      icon: "ShieldCheck"
    },
    {
      title: "Easy WhatsApp & Direct Access",
      description: "Seamless appointment requests and rapid WhatsApp enquiries with our clinic reception at 7305053083.",
      icon: "Clock"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-200/70 via-slate-100 to-slate-100 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-200/80 border border-slate-300 text-slate-900 text-xs font-bold tracking-wide shadow-sm">
                <span className="w-2 h-2 rounded-full bg-tealAccent-500 animate-pulse"></span>
                <span>Trusted Healthcare Partner • Primary Care & Diagnostics</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                  Your Health,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-tealAccent-600">
                    Our Priority
                  </span>
                </h1>
                <p className="text-lg sm:text-xl font-medium text-slate-700">
                  Dedicated, Patient-Centered Healthcare for You & Your Family
                </p>
              </div>

              {/* Supporting Text */}
              <p className="text-base text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to PR HEALTH CARE. We offer attentive doctor consultations, personalized health checkups, and proactive preventive care designed around listening to your symptoms and delivering evidence-based medical treatment.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/appointment"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-700 hover:to-tealAccent-700 text-white font-bold text-sm shadow-premium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book an Appointment</span>
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-soft transition-all duration-200 hover:border-brand-300"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  <span>Contact Us</span>
                </Link>

                <a
                  href={`https://wa.me/91${clinicData.phone}?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-2xl bg-white hover:bg-emerald-50 text-emerald-800 font-bold text-sm border border-emerald-300 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
                  <span>WhatsApp: {formatPhoneNumber(clinicData.phone)}</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-300 max-w-lg mx-auto lg:mx-0">
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-brand-800">100%</span>
                  <span className="text-xs text-slate-500 font-medium">Patient-Focused</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-brand-800">4 Core</span>
                  <span className="text-xs text-slate-500 font-medium">Verified Services</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-extrabold text-tealAccent-700">Prompt</span>
                  <span className="text-xs text-slate-500 font-medium">WhatsApp Desk</span>
                </div>
              </div>
            </div>

            {/* Right Visual Image & Interactive Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3] sm:aspect-[5/4] bg-slate-200">
                  <img
                    src={clinicData.heroImageUrl}
                    alt="PR HEALTH CARE Clinic & Medical Consultations"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-white/20">
                    <div className="flex items-center gap-2 text-xs font-bold text-tealAccent-300">
                      <ShieldCheck className="w-4 h-4 text-tealAccent-400" />
                      <span>PR HEALTH CARE Primary Clinic</span>
                    </div>
                    <p className="text-[11px] text-slate-200 mt-0.5">
                      Doctor Consultations • General Health Checkups • Preventive Care
                    </p>
                  </div>
                </div>

                {/* Floating Hours Badge */}
                <div className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900 text-white rounded-2xl px-4 py-2.5 shadow-premium items-center gap-2 border border-slate-700">
                  <Clock className="w-4 h-4 text-tealAccent-400" />
                  <span className="text-xs font-bold">Mon – Sat: 8 AM – 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIGNATURE HIGHLIGHT: GENERAL HEALTH CHECKUP BANNER */}
      {featuredCheckup && (
        <section className="py-12 bg-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-brand-900 via-brand-800 to-tealAccent-900 text-white p-8 sm:p-12 shadow-elevated relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-tealAccent-400/20 text-tealAccent-300 text-xs font-bold tracking-wide border border-tealAccent-400/30">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Highlighted Signature Checkup</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                    {featuredCheckup.name}
                  </h2>

                  <p className="text-sm sm:text-base text-brand-100 max-w-2xl leading-relaxed">
                    {featuredCheckup.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {featuredCheckup.features.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-brand-100">
                        <CheckCircle2 className="w-4 h-4 text-tealAccent-400 shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <Link
                    href={`/appointment?service=${encodeURIComponent(featuredCheckup.id)}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-tealAccent-500 hover:bg-tealAccent-400 text-brand-950 font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request This Checkup</span>
                  </Link>

                  <a
                    href={`https://wa.me/91${clinicData.phone}?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20would%20like%20to%20enquire%20about%20the%20General%20Health%20Checkup`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
                    <span>Inquire on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. OUR SERVICES PREVIEW */}
      <section className="py-16 bg-slate-200/50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-tealAccent-800 bg-white px-3.5 py-1.5 rounded-full border border-slate-300 shadow-sm">
              Confirmed Medical Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Healthcare Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We focus on core clinical services delivered with diligence, scientific rigor, and patient empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service) => (
              <ServiceCard
                key={service.id}
                service={{
                  ...service,
                  isActive: true,
                  order: 1,
                }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-800 transition-colors"
            >
              <span>Explore All Service Details & Inclusions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-white px-3.5 py-1.5 rounded-full border border-slate-300 shadow-sm">
              Trust & Commitment
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Choose PR HEALTH CARE?
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              We stand apart through sincere listening, transparent communication, and patient-centered primary healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-white border border-slate-200/90 shadow-soft hover:shadow-premium transition-all duration-300 medical-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-brand-700 flex items-center justify-center mb-6">
                    {idx === 0 && <Stethoscope className="w-7 h-7" />}
                    {idx === 1 && <HeartPulse className="w-7 h-7" />}
                    {idx === 2 && <ShieldCheck className="w-7 h-7" />}
                    {idx === 3 && <Clock className="w-7 h-7" />}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-tealAccent-700">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Clinical Standard</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PATIENT-FOCUSED HEALTHCARE INTRODUCTION */}
      <section className="py-20 bg-slate-200/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-elevated border-4 border-white aspect-[4/3] bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                  alt="Doctor consultation at PR HEALTH CARE"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white rounded-2xl p-5 shadow-elevated max-w-xs border border-slate-800">
                <p className="text-xs font-semibold text-tealAccent-300 uppercase tracking-wider mb-1">
                  Our Core Philosophy
                </p>
                <p className="text-xs text-slate-200 leading-relaxed">
                  "Listening to the patient is the first and most critical diagnostic step in quality healthcare."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-800 bg-white px-3 py-1 rounded-full border border-slate-300 shadow-sm">
                Patient-First Experience
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Dedicated to Raising the Standard of Patient Care
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At PR HEALTH CARE, we believe healthcare begins with listening. Our clinic provides reliable, ethical, and high-quality medical services in a welcoming, hygienic environment designed around patient comfort and trust.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-tealAccent-100 text-tealAccent-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Doctor consultation focused on comprehensive diagnosis and patient comfort
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-tealAccent-100 text-tealAccent-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Clear guidance on lifestyle modifications and preventive health routines
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-tealAccent-100 text-tealAccent-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    Direct reception support via phone and WhatsApp on {clinicData.phone}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-soft transition-colors"
                >
                  <span>Learn More About Our Clinic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={`tel:+91${clinicData.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-600" />
                  <span>Call {formatPhoneNumber(clinicData.phone)}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONTACT FAST CTA */}
      <section className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-elevated grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Ready to Prioritize Your Health?
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
                Submit an appointment request online or reach out via WhatsApp at {formatPhoneNumber(clinicData.phone)}. Our clinic team is here to assist you promptly.
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-tealAccent-400" />
                  Mon – Sat: 8:00 AM – 8:30 PM
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-tealAccent-400" />
                  Direct: {clinicData.phone}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                href="/appointment"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-brand-500 hover:bg-brand-400 text-white font-bold text-sm shadow-md transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </Link>

              <a
                href={`https://wa.me/91${clinicData.phone}?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20have%20an%20appointment%20enquiry`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with Clinic Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
