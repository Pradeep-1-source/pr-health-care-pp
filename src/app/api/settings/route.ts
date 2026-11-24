import { NextResponse } from 'next/server';
import { getDB, saveDB } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';

// GET: Return public clinic info and homepage settings
export async function GET() {
  try {
    const db = getDB();
    return NextResponse.json({
      clinicInfo: db.clinicInfo,
      homepage: db.homepage,
    });
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Failed to retrieve settings.' }, { status: 500 });
  }
}

// PUT: Admin update clinic info or homepage settings
export async function PUT(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await request.json();
    const { clinicInfo, homepage } = body;
    const db = getDB();

    if (clinicInfo) {
      db.clinicInfo = {
        ...db.clinicInfo,
        ...clinicInfo,
      };
    }

    if (homepage) {
      db.homepage = {
        ...db.homepage,
        ...homepage,
      };
    }

    saveDB(db);

    return NextResponse.json({
      success: true,
      message: 'Clinic details and content updated successfully.',
      clinicInfo: db.clinicInfo,
      homepage: db.homepage,
    });
  } catch (error) {
    console.error('Error updating settings:', error);
    return NextResponse.json({ error: 'Failed to update settings.' }, { status: 500 });
  }
}

