import { NextResponse } from 'next/server';
import { getDB, saveDB } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = params;
    const body = await request.json();
    const { status, adminNotes } = body;

    const db = getDB();
    const index = db.appointments.findIndex(a => a.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Appointment not found.' }, { status: 404 });
    }

    if (status) {
      const validStatuses = ['pending', 'confirmed', 'completed', 'cancelled'];
      if (!validStatuses.includes(status)) {
        return NextResponse.json({ error: 'Invalid status value.' }, { status: 400 });
      }
      db.appointments[index].status = status;
    }

    if (adminNotes !== undefined) {
      db.appointments[index].adminNotes = adminNotes;
    }

    db.appointments[index].updatedAt = new Date().toISOString();
    saveDB(db);

    return NextResponse.json({
      success: true,
      message: 'Appointment updated successfully.',
      appointment: db.appointments[index],
    });
  } catch (error) {
    console.error('Error updating appointment:', error);
    return NextResponse.json({ error: 'Failed to update appointment.' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const { id } = params;
    const db = getDB();
    const initialLen = db.appointments.length;
    db.appointments = db.appointments.filter(a => a.id !== id);

    if (db.appointments.length === initialLen) {
      return NextResponse.json({ error: 'Appointment not found.' }, { status: 404 });
    }

    saveDB(db);
    return NextResponse.json({ success: true, message: 'Appointment deleted successfully.' });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return NextResponse.json({ error: 'Failed to delete appointment.' }, { status: 500 });
  }
}

