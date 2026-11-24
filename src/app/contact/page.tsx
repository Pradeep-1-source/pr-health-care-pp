'use client';

import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { clinicData } from '@/data/clinic';
import { formatPhoneNumber, createWhatsAppUrl } from '@/lib/utils';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSentSuccess(true);
      const waText = `Hello PR HEALTH CARE! 🩺\n\n• Name: ${name}\n• Phone: ${phone}\n• Message: ${message}`;
      const url = createWhatsAppUrl(clinicData.phone, waText);
      window.open(url, '_blank');
    }, 400);
  };

  const whatsappGeneralUrl = createWhatsAppUrl(
    clinicData.phone,
    'Hello PR HEALTH CARE, I would like to make an inquiry regarding your clinic.'
  );

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-200/80 via-slate-100 to-slate-100 py-14 sm:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold tracking-wide uppercase border border-slate-300 shadow-sm">
            <Phone className="w-4 h-4 text-brand-600" />
            Contact & Reception Desk
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            We are Here to Assist You
          </h1>
          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Get in touch with PR HEALTH CARE for appointments, general health inquiries, or clinic location details.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Contact Info & Hours */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
                  Clinic Information
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Feel free to call our desk directly or reach out via WhatsApp for swift assistance.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="rounded-2xl p-5 bg-white border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:+91${clinicData.phone}`}
                      className="text-base font-bold text-slate-900 hover:text-brand-700 transition-colors block mt-0.5"
                    >
                      {formatPhoneNumber(clinicData.phone)}
                    </a>
                    <span className="text-[11px] text-tealAccent-700 font-medium">Click to call directly</span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="rounded-2xl p-5 bg-white border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <MessageCircle className="w-6 h-6 fill-current" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">
                      WhatsApp Desk
                    </span>
                    <a
                      href={whatsappGeneralUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-950 hover:text-emerald-700 transition-colors block mt-0.5"
                    >
                      {formatPhoneNumber(clinicData.whatsapp)}
                    </a>
                    <span className="text-[11px] text-emerald-700 font-medium">Instant messaging support</span>
                  </div>
                </div>

                {/* Address */}
                <div className="rounded-2xl p-5 bg-white border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-tealAccent-100 text-tealAccent-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Clinic Location
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5 leading-relaxed">
                      {clinicData.address}
                    </p>
                    <span className="text-[11px] text-slate-500 mt-1 block">
                      Easily accessible with parking & transit connectivity
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="rounded-2xl p-5 bg-white border border-slate-200/90 shadow-soft flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-brand-700 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                      Consultation Hours
                    </span>
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 mt-0.5">
                      {clinicData.workingHoursWeekday}
                    </p>
                    <p className="text-xs text-slate-600">
                      {clinicData.workingHoursSunday}
                    </p>
                  </div>
                </div>
              </div>

              {/* Fast WhatsApp Chat Button */}
              <div>
                <a
                  href={whatsappGeneralUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Start WhatsApp Enquiry Now</span>
                </a>
              </div>
            </div>

            {/* Right Column: Direct Message Form & Google Maps */}
            <div className="lg:col-span-7 space-y-8">
              {/* Message Form Card */}
              <div className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-premium">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Send a Direct Enquiry
                </h3>
                <p className="text-xs text-slate-500 mb-6">
                  Have a question about our services or consultation timings? Leave a message or connect directly on WhatsApp.
                </p>

                {sentSuccess && (
                  <div className="mb-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-start gap-3 text-xs text-emerald-800">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold block">Enquiry Sent!</strong>
                      <span>Opening your WhatsApp chat with our clinic reception.</span>
                    </div>
                  </div>
                )}

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Ananya"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 7305053083"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Message or Question <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message, query about health checkup packages, or questions here..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs shadow-soft transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{sending ? 'Connecting...' : 'Send Message / Open WhatsApp'}</span>
                  </button>
                </form>
              </div>

              {/* Google Maps Card */}
              <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-soft">
                <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-brand-600" />
                    <span className="text-xs font-bold text-slate-900">Clinic Map & Directions</span>
                  </div>
                  <span className="text-[11px] text-slate-500">PR HEALTH CARE</span>
                </div>

                <div className="w-full h-72 bg-slate-200 relative">
                  <iframe
                    src={clinicData.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PR HEALTH CARE Clinic Location Map"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
