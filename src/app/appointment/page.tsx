'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import confetti from 'canvas-confetti';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  ShieldCheck,
  Info
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { clinicData } from '@/data/clinic';
import { createWhatsAppUrl } from '@/lib/utils';

function AppointmentFormContent() {
  const searchParams = useSearchParams();
  const preselectedServiceId = searchParams.get('service') || '';

  const initialService = servicesData.find(
    s => s.id === preselectedServiceId || s.slug === preselectedServiceId
  )?.id || servicesData[0].id;

  // Form State
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [serviceId, setServiceId] = useState(initialService);
  const [additionalMessage, setAdditionalMessage] = useState('');

  // Status & Validation
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    patientName: string;
    mobileNumber: string;
    serviceName: string;
    preferredDate: string;
    preferredTime: string;
    whatsappUrl: string;
  } | null>(null);

  const today = new Date().toISOString().split('T')[0];

  const timeSlots = [
    '08:30 AM',
    '09:30 AM',
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
    '08:00 PM',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!patientName.trim()) {
      setErrorMessage('Please enter the patient’s full name.');
      return;
    }

    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!preferredDate) {
      setErrorMessage('Please select a preferred appointment date.');
      return;
    }

    if (!preferredTime) {
      setErrorMessage('Please select a preferred appointment time slot.');
      return;
    }

    setSubmitting(true);

    const chosenService = servicesData.find(s => s.id === serviceId) || servicesData[0];

    const waText = `Hello PR HEALTH CARE! 🩺\n\nI have requested an appointment:\n• Patient Name: ${patientName.trim()}\n• Mobile: ${cleanPhone}\n• Service: ${chosenService.name}\n• Preferred Date: ${preferredDate}\n• Preferred Time: ${preferredTime}${email ? `\n• Email: ${email.trim()}` : ''}${additionalMessage ? `\n• Notes: ${additionalMessage.trim()}` : ''}\n\nKindly confirm my appointment request. Thank you!`;
    const whatsappUrl = createWhatsAppUrl(clinicData.phone, waText);

    setTimeout(() => {
      setSubmitting(false);
      setSubmittedData({
        patientName: patientName.trim(),
        mobileNumber: cleanPhone,
        serviceName: chosenService.name,
        preferredDate,
        preferredTime,
        whatsappUrl,
      });

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {}

      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 400);
  };

  const selectedServiceName =
    servicesData.find((s) => s.id === serviceId)?.name || 'General Healthcare Consultation';

  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      {/* Header */}
      <section className="bg-gradient-to-b from-slate-200/80 via-slate-100 to-slate-100 py-12 sm:py-16 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-800 text-xs font-bold tracking-wide uppercase border border-slate-300 shadow-sm">
            <Calendar className="w-4 h-4 text-brand-600" />
            Direct Appointment Desk
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Request an Appointment at{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-tealAccent-600">
              PR HEALTH CARE
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Please fill in your appointment details below. Our clinic team will review slot availability and contact you promptly to confirm your booking.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Post-submission Success State */}
          {submittedData ? (
            <div className="rounded-3xl bg-white border-2 border-emerald-500/30 p-8 sm:p-12 shadow-elevated space-y-8 animate-in fade-in duration-300">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Appointment Request Received!
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
                  <Clock className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
                  <span>Pending Clinic Confirmation</span>
                </div>
              </div>

              {/* Crucial Transparency Note */}
              <div className="rounded-2xl bg-amber-50/80 border border-amber-200/80 p-5 flex items-start gap-3.5 text-xs text-amber-950 leading-relaxed">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-amber-900 block mb-0.5">
                    Next Step: Clinic Staff Confirmation
                  </strong>
                  Thank you for submitting your details. To prevent scheduling conflicts, our clinic desk reviews every request against doctor availability. Your appointment is confirmed once our reception team verifies the slot.
                </div>
              </div>

              {/* Request Summary Card */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200">
                  Appointment Summary:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Patient Name:</span>
                    <strong className="text-slate-900 text-sm">{submittedData.patientName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Mobile Number:</span>
                    <strong className="text-slate-900 text-sm">{submittedData.mobileNumber}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Requested Service:</span>
                    <strong className="text-slate-900 text-sm">{submittedData.serviceName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Preferred Date & Time:</span>
                    <strong className="text-brand-700 text-sm">
                      {submittedData.preferredDate} at {submittedData.preferredTime}
                    </strong>
                  </div>
                </div>
              </div>

              {/* Action Buttons: WhatsApp & Phone */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-700 text-center uppercase tracking-wider">
                  Recommended: Send Details on WhatsApp for Faster Confirmation
                </h4>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={submittedData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01]"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span>Confirm via WhatsApp ({clinicData.phone})</span>
                  </a>

                  <a
                    href={`tel:+91${clinicData.phone}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
                  >
                    <Phone className="w-4 h-4 text-tealAccent-600" />
                    <span>Call Clinic Desk Directly</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 text-center">
                <button
                  onClick={() => {
                    setSubmittedData(null);
                    setPatientName('');
                    setMobileNumber('');
                    setEmail('');
                    setAdditionalMessage('');
                  }}
                  className="text-xs font-semibold text-brand-700 hover:text-brand-900 underline underline-offset-4"
                >
                  Submit Another Appointment Request
                </button>
              </div>
            </div>
          ) : (
            /* Active Form Card */
            <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-12 shadow-premium">
              {errorMessage && (
                <div className="mb-8 rounded-2xl bg-rose-50 border border-rose-200 p-4 flex items-start gap-3 text-xs text-rose-800">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-bold block">Please check your inputs:</strong>
                    <span>{errorMessage}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Patient Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Patient Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      required
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 2. Mobile Number & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 font-semibold text-xs">
                        +91
                      </div>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                        placeholder="7305053083"
                        className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Required for WhatsApp and SMS confirmation
                    </span>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@example.com"
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* 3. Select Service */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Select Healthcare Service <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    required
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 outline-none transition-all bg-white"
                  >
                    {servicesData.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.name} {srv.isHighlighted ? '★ (Signature Checkup)' : ''}
                      </option>
                    ))}
                  </select>
                  <span className="text-[11px] text-tealAccent-700 font-medium mt-1 block">
                    Selected: {selectedServiceName}
                  </span>
                </div>

                {/* 4. Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <input
                        type="date"
                        min={today}
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Preferred Time Slot <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-5 h-5" />
                      </div>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        required
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 outline-none transition-all bg-white"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Quick Time Slot Selector Pills */}
                <div>
                  <span className="text-xs font-medium text-slate-500 block mb-2">
                    Quick select popular slots:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {timeSlots.slice(0, 6).map((slot) => (
                      <button
                        type="button"
                        key={`quick-${slot}`}
                        onClick={() => setPreferredTime(slot)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                          preferredTime === slot
                            ? 'bg-brand-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Additional Message / Symptoms */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Additional Message / Symptoms / Notes{' '}
                    <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-slate-400">
                      <FileText className="w-5 h-5" />
                    </div>
                    <textarea
                      rows={3}
                      value={additionalMessage}
                      onChange={(e) => setAdditionalMessage(e.target.value)}
                      placeholder="e.g. Inquiring about fasting blood glucose requirements, or brief mention of symptoms..."
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-50 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all resize-none"
                    />
                  </div>
                </div>

                {/* Transparency Notice */}
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 flex items-start gap-3 text-xs text-slate-600">
                  <ShieldCheck className="w-5 h-5 text-tealAccent-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Booking Policy:</span> Submitting this request does not confirm the slot immediately. Our clinic reception will review schedule availability and confirm your booking via WhatsApp or phone.
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-700 hover:to-tealAccent-700 text-white font-bold text-sm shadow-premium transition-all duration-300 disabled:opacity-70 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Appointment Request...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Submit Appointment Request</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function AppointmentPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-slate-500 text-sm">
          Loading appointment system...
        </div>
      }
    >
      <AppointmentFormContent />
    </Suspense>
  );
}
