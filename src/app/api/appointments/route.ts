import { NextResponse } from 'next/server';
import { getDB, saveDB } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import { Appointment } from '@/types';
import { createWhatsAppUrl } from '@/lib/utils';

// POST: Public appointment submission
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      patientName,
      mobileNumber,
      email,
      preferredDate,
      preferredTime,
      serviceId,
      additionalMessage,
    } = body;

    // Strict Validations
    if (!patientName || typeof patientName !== 'string' || patientName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please enter a valid patient name (at least 2 characters).' },
        { status: 400 }
      );
    }

    if (!mobileNumber || typeof mobileNumber !== 'string') {
      return NextResponse.json(
        { error: 'Mobile number is required.' },
        { status: 400 }
      );
    }

    // Clean phone number: check for 10 digits
    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { error: 'Please provide a valid 10-digit mobile number.' },
        { status: 400 }
      );
    }

    if (!preferredDate) {
      return NextResponse.json(
        { error: 'Preferred appointment date is required.' },
        { status: 400 }
      );
    }

    if (!preferredTime) {
      return NextResponse.json(
        { error: 'Preferred appointment time is required.' },
        { status: 400 }
      );
    }

    if (!serviceId) {
      return NextResponse.json(
        { error: 'Please select a healthcare service.' },
        { status: 400 }
      );
    }

    // Optional email validation
    if (email && typeof email === 'string' && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        return NextResponse.json(
          { error: 'Please enter a valid email address or leave it empty.' },
          { status: 400 }
        );
      }
    }

    const db = getDB();
    const service = db.services.find(s => s.id === serviceId || s.slug === serviceId);
    const serviceName = service ? service.name : 'General Consultation';

    const newAppointment: Appointment = {
      id: `apt-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      patientName: patientName.trim(),
      mobileNumber: cleanPhone,
      email: email ? email.trim() : undefined,
      preferredDate,
      preferredTime,
      serviceId: service ? service.id : serviceId,
      serviceName,
      additionalMessage: additionalMessage ? additionalMessage.trim() : undefined,
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    db.appointments.unshift(newAppointment);
    saveDB(db);

    // Pre-fill WhatsApp message for the patient
    const clinicPhone = db.clinicInfo.phone || '7305053083';
    const waText = `Hello PR HEALTH CARE! 🩺\n\nI have requested an appointment:\n• Patient Name: ${newAppointment.patientName}\n• Mobile: ${newAppointment.mobileNumber}\n• Service: ${newAppointment.serviceName}\n• Preferred Date: ${newAppointment.preferredDate}\n• Preferred Time: ${newAppointment.preferredTime}${newAppointment.additionalMessage ? `\n• Notes: ${newAppointment.additionalMessage}` : ''}\n\nKindly confirm my appointment request. Thank you!`;
    const whatsappUrl = createWhatsAppUrl(clinicPhone, waText);

    return NextResponse.json({
      success: true,
      message: 'Your appointment request has been submitted successfully! Please note this is a request and will be confirmed by our clinic reception team shortly.',
      appointment: newAppointment,
      whatsappUrl,
    });
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while submitting your appointment. Please contact our clinic directly at 7305053083.' },
      { status: 500 }
    );
  }
}

// GET: Admin view all appointments
export async function GET(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized access.' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const search = searchParams.get('search')?.toLowerCase();

    const db = getDB();
    let appointments = db.appointments || [];

    if (status && status !== 'all') {
      appointments = appointments.filter(a => a.status === status);
    }

    if (search) {
      appointments = appointments.filter(a =>
        a.patientName.toLowerCase().includes(search) ||
        a.mobileNumber.includes(search) ||
        a.serviceName.toLowerCase().includes(search) ||
        (a.email && a.email.toLowerCase().includes(search))
      );
    }

    return NextResponse.json({ appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json({ error: 'Failed to retrieve appointments.' }, { status: 500 });
  }
}

