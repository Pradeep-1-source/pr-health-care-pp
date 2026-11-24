export interface ClinicService {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  duration?: string;
  features: string[];
  icon: string;
  isHighlighted?: boolean;
}

export const servicesData: ClinicService[] = [
  {
    id: "general-health-checkup",
    name: "General Health Checkup",
    slug: "general-health-checkup",
    shortDescription: "Our signature comprehensive health screening designed to evaluate overall wellness, vital signs, glucose levels, and preventive health status.",
    description: "The General Health Checkup at PR HEALTH CARE provides a complete, proactive evaluation of your overall health. Our medical team checks critical vitals including blood pressure, pulse rate, oxygen saturation, BMI, and blood sugar, followed by personalized lifestyle health guidance.",
    duration: "30 - 45 Mins",
    features: [
      "Complete vital signs check (BP, Heart Rate, Pulse Oximetry, BMI)",
      "Blood sugar screening (Fasting / Random)",
      "Comprehensive baseline physical and systemic examination",
      "One-on-one lifestyle and preventive health consultation",
      "Summary health assessment for your personal records"
    ],
    icon: "Activity",
    isHighlighted: true
  },
  {
    id: "general-consultation",
    name: "General Consultation",
    slug: "general-consultation",
    shortDescription: "Attentive clinical evaluation for acute illnesses, fevers, seasonal infections, digestive issues, chronic aches, and general health concerns.",
    description: "Whether you are experiencing sudden fever, cough, body pain, seasonal ailments, digestive trouble, or require an expert medical opinion, our General Consultation provides thoughtful diagnosis and tailored treatment prescriptions.",
    duration: "15 - 20 Mins",
    features: [
      "In-depth symptom review & clinical examination",
      "Accurate medical diagnosis and prescription guidance",
      "Investigation and lab test guidance only when necessary",
      "Follow-up recovery plan and medical advice"
    ],
    icon: "Stethoscope",
    isHighlighted: false
  },
  {
    id: "preventive-healthcare",
    name: "Preventive Healthcare",
    slug: "preventive-healthcare",
    shortDescription: "Proactive risk profiling, lifestyle coaching, and immunization guidance to identify and mitigate health risks before they develop.",
    description: "Preventive healthcare is the key to lasting well-being. We evaluate family medical history, cardiovascular risk factors, metabolic markers, and lifestyle stressors to build a practical preventive health roadmap for you.",
    duration: "25 - 30 Mins",
    features: [
      "Cardiovascular and metabolic risk factor profiling",
      "Individualized nutrition, exercise, and stress management advice",
      "Adult vaccination and immunization consultation",
      "Periodic preventive screening roadmap"
    ],
    icon: "ShieldCheck",
    isHighlighted: false
  },
  {
    id: "basic-health-assessment",
    name: "Basic Health Assessment",
    slug: "basic-health-assessment",
    shortDescription: "Essential biometric and physiological checkup for work fitness, school admission, fitness clearance, or routine baseline health recording.",
    description: "A fast, accurate assessment of essential physical parameters designed for fitness clearance, employment checkup, or simple periodic health records with swift documentation.",
    duration: "15 - 20 Mins",
    features: [
      "Height, weight, BMI, and vital biometric recording",
      "Basic cardiovascular and respiratory screening",
      "Blood pressure and pulse check",
      "Assessment summary certificate provided upon request"
    ],
    icon: "HeartPulse",
    isHighlighted: false
  }
];

