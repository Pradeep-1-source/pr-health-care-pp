import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  AlertCircle
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { clinicData } from '@/data/clinic';
import ServiceCard from '@/components/ServiceCard';
import { formatPhoneNumber } from '@/lib/utils';

export const metadata = {
  title: 'Our Medical Services | PR HEALTH CARE - Comprehensive Primary Care',
  description:
    'Explore confirmed medical services at PR HEALTH CARE: General Health Checkup, General Consultation, Preventive Healthcare, and Basic Health Assessment. Book your slot online.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-200/80 via-slate-100 to-slate-100 py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-tealAccent-800 text-xs font-bold tracking-wide uppercase mb-4 border border-slate-300 shadow-sm">
            <Sparkles className="w-4 h-4 text-tealAccent-600" />
            Verified Medical Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Comprehensive Care for Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-tealAccent-600">
              Lifelong Well-being
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our medical services are strictly confirmed and conducted with clinical excellence. We focus on listening, thorough baseline diagnosis, and preventive interventions.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Service Cards Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
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

          {/* Detailed In-Depth Breakdown */}
          <div className="space-y-12 pt-8 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Detailed Service Guidelines
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Here is what to expect during your clinical appointments with PR HEALTH CARE.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesData.map((service) => (
                <div
                  key={`detail-${service.id}`}
                  className="rounded-3xl p-8 bg-white border border-slate-200/90 shadow-soft space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-brand-600"></span>
                      {service.name}
                    </h3>
                    {service.isHighlighted && (
                      <span className="px-2.5 py-0.5 rounded-full bg-tealAccent-100 text-tealAccent-800 text-[10px] font-bold uppercase">
                        Signature
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Key Clinical Components:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-tealAccent-600 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <Link
                      href={`/appointment?service=${encodeURIComponent(service.id)}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 hover:text-brand-800"
                    >
                      <span>Request This Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <a
                      href={`https://wa.me/91${clinicData.phone}?text=${encodeURIComponent(`Hello PR HEALTH CARE, I have a query regarding ${service.name}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current" />
                      WhatsApp Query
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinic Service Notice */}
          <div className="mt-16 rounded-2xl bg-white border border-slate-200 p-6 flex items-start gap-4 shadow-soft">
            <AlertCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-800 leading-relaxed">
              <span className="font-bold">Clinic Policy Note:</span> Only services actively confirmed and administered by PR HEALTH CARE physicians are displayed on this website. For questions on specific tests or consultations, contact our desk at <strong>{clinicData.phone}</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* Fast CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl space-y-6">
          <h3 className="text-3xl font-extrabold tracking-tight">
            Need Guidance on Choosing the Right Checkup?
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Reach out to our reception team on WhatsApp or submit an appointment request. We will assist you promptly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-tealAccent-500 text-white font-bold text-xs shadow-md transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </Link>

            <a
              href={`https://wa.me/91${clinicData.phone}?text=Hello%20PR%20HEALTH%20CARE%2C%20which%20health%20checkup%20would%20you%20recommend%20for%20me%3F`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
              <span>Chat with Reception ({formatPhoneNumber(clinicData.phone)})</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
