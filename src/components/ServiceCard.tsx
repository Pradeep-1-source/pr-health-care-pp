'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Service } from '@/types';
import DynamicIcon from './DynamicIcon';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const isHighlighted = service.isHighlighted;

  return (
    <div
      id={service.slug || service.id}
      className={`group relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between ${
        isHighlighted
          ? 'bg-gradient-to-b from-brand-50/70 via-white to-tealAccent-50/40 border-2 border-brand-500/40 shadow-premium'
          : 'bg-white border border-slate-200/80 hover:border-brand-200 shadow-soft medical-card-hover'
      }`}
    >
      {/* Featured / Highlight Badge for General Health Checkup */}
      {isHighlighted && (
        <div className="absolute -top-3.5 right-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-600 to-tealAccent-600 text-white text-[11px] font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3 h-3 text-amber-200" />
            Signature Checkup
          </span>
        </div>
      )}

      <div>
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
              isHighlighted
                ? 'bg-brand-600 text-white shadow-soft'
                : 'bg-brand-50 text-brand-700 group-hover:bg-brand-600 group-hover:text-white'
            }`}
          >
            <DynamicIcon name={service.icon} className="w-7 h-7" />
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-brand-800 transition-colors">
              {service.name}
            </h3>
            {service.duration && (
              <span className="text-xs font-medium text-slate-500">
                Duration: {service.duration}
              </span>
            )}
          </div>
        </div>

        {/* Short Description */}
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Features Checklist */}
        {service.features && service.features.length > 0 && (
          <div className="space-y-2.5 mb-8">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              What's Included:
            </h4>
            <ul className="space-y-2">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-tealAccent-100 text-tealAccent-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link
          href={`/appointment?service=${encodeURIComponent(service.id)}`}
          className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold transition-all duration-200 ${
            isHighlighted
              ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-sm'
              : 'bg-slate-100 hover:bg-brand-50 text-slate-800 hover:text-brand-700'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>Request Appointment</span>
        </Link>
      </div>
    </div>
  );
}

