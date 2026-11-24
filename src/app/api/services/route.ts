import { NextResponse } from 'next/server';
import { getDB, saveDB } from '@/lib/db';
import { getAdminSession } from '@/lib/auth';
import { Service } from '@/types';

// GET: list services (public: active only, admin: all if requested)
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const all = searchParams.get('all') === 'true';

    const db = getDB();
    let services = db.services || [];

    if (!all) {
      services = services.filter(s => s.isActive);
    }

    services.sort((a, b) => a.order - b.order);

    return NextResponse.json({ services });
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json({ error: 'Failed to fetch services.' }, { status: 500 });
  }
}

// POST: Admin add a new service
export async function POST(request: Request) {
  try {
    const session = await getAdminSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized.' }, { status: 401 });
    }

    const body = await request.json();
    const { name, shortDescription, description, price, duration, features, icon, isHighlighted } = body;

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Service name is required.' }, { status: 400 });
    }

    if (!description || typeof description !== 'string') {
      return NextResponse.json({ error: 'Service description is required.' }, { status: 400 });
    }

    const db = getDB();
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const id = `srv-${Date.now()}`;

    const newService: Service = {
      id,
      name: name.trim(),
      slug: slug || id,
      shortDescription: shortDescription?.trim() || description.trim().slice(0, 120) + '...',
      description: description.trim(),
      price: price ? price.trim() : undefined,
      duration: duration ? duration.trim() : undefined,
      features: Array.isArray(features) ? features.filter(f => typeof f === 'string' && f.trim().length > 0) : [],
      icon: icon || 'Activity',
      isHighlighted: Boolean(isHighlighted),
      isActive: true,
      order: db.services.length + 1,
    };

    db.services.push(newService);
    saveDB(db);

    return NextResponse.json({
      success: true,
      message: 'Service created successfully.',
      service: newService,
    });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json({ error: 'Failed to create service.' }, { status: 500 });
  }
}

