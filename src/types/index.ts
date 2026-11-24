export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  price?: string;
  duration?: string;
  features: string[];
  icon: string; // Lucide icon name e.g., 'Activity', 'Stethoscope', 'ShieldCheck', 'HeartPulse'
  isHighlighted?: boolean;
  isActive: boolean;
  order: number;
}

export type AppointmentStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Appointment {
  id: string;
  patientName: string;
  mobileNumber: string;
  email?: string;
  preferredDate: string;
  preferredTime: string;
  serviceId: string;
  serviceName: string;
  additionalMessage?: string;
  status: AppointmentStatus;
  adminNotes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  area: string;
  cityState: string;
  workingHoursWeekday: string;
  workingHoursSunday: string;
  googleMapsEmbedUrl: string;
  emergencyNotice: string;
  heroImageUrl: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface HomepageContent {
  heroBadge: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  whyChooseUs: WhyChooseUsItem[];
  aboutPreviewTitle: string;
  aboutPreviewText: string;
  aboutHighlights: string[];
}

export interface AdminUser {
  id: string;
  username: string;
  passwordHash: string;
  name: string;
}

export interface DatabaseSchema {
  clinicInfo: ClinicInfo;
  homepage: HomepageContent;
  services: Service[];
  appointments: Appointment[];
  admin: AdminUser;
}

