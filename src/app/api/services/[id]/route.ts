import { NextResponse } from 'next/server';
import { getDB, saveDB } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

export async function PUT(
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
    const db = getDB();

    const index = db.services.findIndex(s => s.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Service not found.' }, { status: 404 });
    }

    const current = db.services[index];
    db.services[index] = {
      ...current,
      ...body,
      id: current.id, // prevent id overwrite
    };

    saveDB(db);

    return NextResponse.json({
      success: true,
      message: 'Service updated successfully.',
      service: db.services[index],
    });
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json({ error: 'Failed to update service.' }, { status: 500 });
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

    const initialLen = db.services.length;
    db.services = db.services.filter(s => s.id !== id);

    if (db.services.length === initialLen) {
      return NextResponse.json({ error: 'Service not found.' }, { status: 404 });
    }

    saveDB(db);

    return NextResponse.json({ success: true, message: 'Service deleted successfully.' });
  } catch (error) {
    console.error('Error deleting service:', error);
    return NextResponse.json({ error: 'Failed to delete service.' }, { status: 500 });
  }
}

