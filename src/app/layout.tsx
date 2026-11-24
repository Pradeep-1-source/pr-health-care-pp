import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloatingButton from '@/components/WhatsAppFloatingButton';
import { clinicData } from '@/data/clinic';

export const metadata: Metadata = {
  title: 'PR HEALTH CARE | Your Health, Our Priority - Modern Medical Clinic',
  description:
    'Welcome to PR HEALTH CARE. We offer comprehensive primary medical consultations, personalized General Health Checkups, Preventive Healthcare, and Basic Health Assessments in a modern, patient-first clinic environment.',
  keywords: [
    'PR HEALTH CARE',
    'healthcare clinic',
    'general health checkup',
    'medical consultation',
    'preventive healthcare',
    'basic health assessment',
    'doctor clinic',
    'book doctor appointment',
    '7305053083',
  ],
  authors: [{ name: 'PR HEALTH CARE Medical Team' }],
  openGraph: {
    title: 'PR HEALTH CARE | Your Health, Our Priority',
    description:
      'Professional primary healthcare, general health checkups, and doctor consultations. Book your appointment online or contact us directly on WhatsApp.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'PR HEALTH CARE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-slate-800 bg-slate-100 selection:bg-brand-100 selection:text-brand-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer clinicPhone={clinicData.phone} clinicAddress={clinicData.address} />
        <WhatsAppFloatingButton phone={clinicData.phone} clinicName={clinicData.name} />
      </body>
    </html>
  );
}
