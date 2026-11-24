'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Phone,
  Clock,
  MapPin,
  Calendar,
  Menu,
  X,
  Activity,
  MessageCircle,
  ShieldCheck,
  ChevronRight,
  Heart
} from 'lucide-react';
import { formatPhoneNumber } from '@/lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Book Appointment', href: '/appointment' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-all duration-300">
      {/* Top Notification / Clinic Contact Bar */}
      <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-brand-900 text-white text-xs py-2 px-4 sm:px-8 border-b border-brand-700/50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-brand-100">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-tealAccent-400 shrink-0" />
              <span>Mon – Sat: 8:00 AM – 8:30 PM | Sun: 9:00 AM – 1:00 PM</span>
            </span>
            <span className="hidden md:inline-block text-brand-600">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-brand-200">
              <ShieldCheck className="w-3.5 h-3.5 text-tealAccent-400 shrink-0" />
              <span>Patient-Focused Primary Healthcare</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+917305053083"
              className="flex items-center gap-1.5 text-white hover:text-tealAccent-300 font-semibold transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-tealAccent-400 shrink-0" />
              <span>Call: {formatPhoneNumber('7305053083')}</span>
            </a>
            <span className="text-brand-600">|</span>
            <a
              href="https://wa.me/917305053083?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20would%20like%20to%20enquire%20about%20a%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-tealAccent-300 hover:text-white font-medium transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled ? 'shadow-md py-3 bg-white/95 backdrop-blur-md' : 'py-4.5 bg-white border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* PR HEALTH CARE Logo */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-700 to-tealAccent-600 flex items-center justify-center text-white shadow-soft group-hover:scale-105 transition-transform duration-300">
              <div className="relative">
                <Activity className="w-6 h-6 stroke-[2.5]" />
                <Heart className="w-2.5 h-2.5 absolute -top-1 -right-1 text-red-300 fill-current" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-brand-950 font-sans flex items-center gap-1">
                PR HEALTH CARE
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-tealAccent-700">
                Clinic & Diagnostic Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-brand-700 bg-brand-50/80 font-bold'
                      : 'text-slate-600 hover:text-brand-700 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+917305053083"
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:text-brand-700 hover:bg-slate-50 border border-slate-200 transition-colors"
            >
              <Phone className="w-4 h-4 text-tealAccent-600" />
              <span>7305053083</span>
            </a>

            <Link
              href="/appointment"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-tealAccent-600 hover:from-brand-700 hover:to-tealAccent-700 shadow-soft transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/appointment"
              className="p-2.5 rounded-xl bg-brand-50 text-brand-700 hover:bg-brand-100 transition-colors"
              aria-label="Book Appointment"
            >
              <Calendar className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-slate-700 hover:text-brand-700 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-3 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-brand-50 text-brand-700 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <a
                href="tel:+917305053083"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4 text-tealAccent-600" />
                <span>Call Clinic: 7305053083</span>
              </a>

              <a
                href="https://wa.me/917305053083?text=Hello%20PR%20HEALTH%20CARE%2C%20I%20would%20like%20to%20enquire%20about%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Desk (7305053083)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

