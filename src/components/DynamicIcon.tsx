'use client';

import React from 'react';
import {
  Activity,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  Users,
  Award,
  Sparkles,
  HelpCircle,
  LucideProps
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Activity,
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Clock,
  MapPin,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  AlertCircle,
  FileText,
  User,
  Users,
  Award,
  Sparkles,
};

interface DynamicIconProps extends LucideProps {
  name: string;
}

export default function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = iconMap[name] || Activity;
  return <IconComponent {...props} />;
}

