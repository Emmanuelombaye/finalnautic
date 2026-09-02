import { journeyImages } from "./media";
import {
  getProgramByRouteSlug,
  getProgramBySlug,
  programSteps,
  programs,
  resolveRelatedItem,
  type Program,
} from "./programs";

export const siteConfig = {
  name: "Nautic Health",
  tagline: "Personalized Longevity Medicine",
  email: "info@nautichealth.com",
  assessmentUrl: "/assessment",
  pricingUrl: "/treatments/all",
};

export const navLinks = [
  { label: "Treatments", href: "/treatments" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Wellness Journal", href: "/journal" },
  { label: "Patient Portal", href: "/patient-portal" },
];

export const footerCareLinks = [
  { label: "Weight Management", href: "/treatments/weight-management" },
  { label: "Hormone Health", href: "/treatments/hormone-health" },
  { label: "Energy & Longevity", href: "/treatments/energy-longevity" },
  { label: "Recovery & Performance", href: "/treatments/recovery-performance" },
  { label: "Cognitive Wellness", href: "/treatments/cognitive-wellness" },
  { label: "Overall Optimization", href: "/treatments/overall-optimization" },
  { label: "View All Treatments", href: "/treatments/all" },
];

export type TreatmentCategoryIcon =
  | "scale"
  | "hourglass"
  | "zap"
  | "sparkles"
  | "dna";

export const treatmentCategories = [
  {
    title: "Medical Weight Loss",
    description:
      "Physician-guided metabolic restoration for sustainable, healthy weight.",
    href: "/treatments",
    icon: "scale" as TreatmentCategoryIcon,
  },
  {
    title: "Longevity",
    description:
      "Advanced diagnostics and interventions designed to extend healthspan.",
    href: "/treatments",
    icon: "hourglass" as TreatmentCategoryIcon,
  },
  {
    title: "Recovery",
    description:
      "Precision protocols for energy, sleep, and physical resilience.",
    href: "/treatments",
    icon: "zap" as TreatmentCategoryIcon,
  },
  {
    title: "Hair & Skin",
    description:
      "Inside-out aesthetics for radiant skin, fuller hair, and confident aging.",
    href: "/treatments",
    icon: "sparkles" as TreatmentCategoryIcon,
  },
  {
    title: "Hormone Optimization",
    description:
      "Personalized hormone balancing for clarity, vitality, and emotional balance.",
    href: "/treatments",
    icon: "dna" as TreatmentCategoryIcon,
  },
];

export const treatmentCategoryPages: Record<
  string,
  { title: string; description: string; eyebrow: string }
> = {
  "weight-management": {
    eyebrow: "Weight Management",
    title: "Physician-Guided Weight Management",
    description:
      "Explore personalized weight-management programs designed around your goals, medical history, and provider evaluation.",
  },
  "hormone-health": {
    eyebrow: "Hormone Health",
    title: "Hormone Health",
    description:
      "Individualized hormone care focused on health, vitality, and overall well-being.",
  },
  "energy-longevity": {
    eyebrow: "Energy & Longevity",
    title: "Energy & Longevity",
    description:
      "Physician-guided longevity support for patients interested in energy, cellular wellness, and healthy aging.",
  },
  "recovery-performance": {
    eyebrow: "Recovery & Performance",
    title: "Recovery & Performance",
    description:
      "Precision protocols for energy, sleep, and physical resilience.",
  },
  "cognitive-wellness": {
    eyebrow: "Cognitive Wellness",
    title: "Cognitive Wellness",
    description:
      "Support for clarity, focus, and cognitive wellness as part of a broader longevity plan.",
  },
  "overall-optimization": {
    eyebrow: "Overall Optimization",
    title: "Overall Optimization",
    description:
      "Explore more comprehensive physician-guided approaches for individuals with multiple wellness goals.",
  },
};

export const howItWorksSteps = [
  {
    step: "01",
    title: "Explore Nautic Health treatments and programs",
    description:
      "Browse physician-guided options by goal — weight management, hormone health, energy, recovery, and more.",
  },
  {
    step: "02",
    title: "Complete your medical intake",
    description:
      "Share your health history, medications, and goals through a secure assessment designed for provider review.",
  },
  {
    step: "03",
    title: "Provider review",
    description:
      "A licensed provider evaluates your information asynchronously or through a live consultation when clinically appropriate.",
  },
  {
    step: "04",
    title: "Treatment determination",
    description:
      "If approved, your provider determines an individualized plan — including prescriptions only when clinically appropriate.",
  },
  {
    step: "05",
    title: "Ongoing care",
    description:
      "Receive physician-guided support, monitoring, and follow-up appropriate for your treatment plan.",
  },
];

export type Treatment = Program;
export const treatments: Treatment[] = programs;
export { programSteps };

export const journeySteps = [
  {
    step: "01",
    title: "Choose your treatment or program",
    description: "Explore options based on your health and wellness goals.",
    image: journeyImages.goal,
    imageAlt: "Choose your treatment or program",
  },
  {
    step: "02",
    title: "Complete your medical intake",
    description:
      "Provide the health information needed for a licensed provider to evaluate your eligibility.",
    image: journeyImages.assessment,
    imageAlt: "Complete your medical intake",
  },
  {
    step: "03",
    title: "Provider review",
    description:
      "Your evaluation may be completed asynchronously or through a live consultation when clinically appropriate.",
    image: journeyImages.review,
    imageAlt: "Provider review",
  },
  {
    step: "04",
    title: "Treatment determination",
    description:
      "If approved, your provider determines the appropriate treatment plan and next steps.",
    image: journeyImages.consult,
    imageAlt: "Treatment determination",
  },
  {
    step: "05",
    title: "Ongoing care",
    description:
      "Receive physician-guided support and follow-up appropriate for your treatment plan.",
    image: journeyImages.support,
    imageAlt: "Ongoing care",
  },
];

export const whyFeatures = [
  {
    title: "Physician Guided Care",
    description:
      "Every protocol is authored, reviewed, and adjusted by a licensed physician who knows your history.",
  },
  {
    title: "Personalized Treatment Plans",
    description:
      "No templates. Your plan is built from your biomarkers, your goals, and the life you actually live.",
  },
  {
    title: "Premium Ongoing Support",
    description:
      "A concierge care team beside you between visits — discreet, responsive, and genuinely attentive.",
  },
  {
    title: "Evidence-Based Wellness",
    description:
      "Grounded in peer-reviewed longevity science, measured continuously, and refined as your data evolves.",
  },
];

export const comparisonRows = [
  {
    label: "Evaluation Depth",
    typical: "Streamlined eligibility-focused intake",
    nautic:
      "Medical evaluation designed to consider health history, goals, current medications, and treatment appropriateness",
  },
  {
    label: "Diagnostic Context",
    typical: "Diagnostics may be separate from the prescription experience",
    nautic:
      "Eligible diagnostic information can be incorporated into the provider evaluation and treatment plan",
  },
  {
    label: "At-Home Testing Options",
    typical: "Testing may require separate coordination",
    nautic:
      "Eligible at-home collection options designed to reduce traditional lab friction",
  },
  {
    label: "Continuity of Care",
    typical: "Often centered around access to a specific prescription",
    nautic:
      "Physician-guided care with follow-up and ongoing clinical support as appropriate for the treatment plan",
  },
  {
    label: "Pharmacy Fulfillment",
    typical: "Fulfillment model may vary by platform",
    nautic:
      "U.S. pharmacy fulfillment through appropriate pharmacy pathways",
  },
  {
    label: "Treatment Discovery",
    typical: "Medication-first browsing",
    nautic:
      "Goal-based treatment discovery supported by provider evaluation",
  },
];

export const testimonials = [
  {
    quote:
      "Nautic Health is the first practice that treated me like a whole person. My energy, sleep, and focus are unrecognizable — and I finally feel ahead of my health.",
    name: "Sophia R.",
    role: "Founder, 42*",
  },
  {
    quote:
      "The care feels bespoke. The science is serious. It's the difference between managing symptoms and building a longer, better life.",
    name: "James D.",
    role: "Attorney, 51*",
  },
  {
    quote:
      "I've worked with countless specialists. None have taken the time Nautic Health takes. I feel truly seen — and stronger than I have in years.",
    name: "Amelia L.",
    role: "Executive, 47*",
  },
];

export const philosophyPrinciples = [
  {
    title: "Physician-guided",
    description: "Every plan authored and reviewed by our medical team.",
  },
  {
    title: "Evidence-based",
    description: "Rooted in the latest science on longevity and metabolism.",
  },
  {
    title: "Personalized",
    description: "Built around your data, your goals, your life.",
  },
  {
    title: "Discreet",
    description: "Concierge care, delivered on your terms.",
  },
];

export const aboutPrinciples = [
  {
    step: "01",
    title: "Proactive",
    description:
      "We measure early, act early, and adjust often. Health is a long game.",
  },
  {
    step: "02",
    title: "Personal",
    description:
      "No two plans are alike. Every protocol is a reflection of your data and goals.",
  },
  {
    step: "03",
    title: "Evidence-based",
    description:
      "We integrate the newest science with the discipline of clinical medicine.",
  },
  {
    step: "04",
    title: "Discreet",
    description:
      "Concierge care, delivered with the calm of a well-run practice.",
  },
];

export const medicalDisclaimer =
  "This page is for informational purposes only and does not constitute medical advice. Nautic Health programs require evaluation and approval by a licensed healthcare provider. Therapies referenced here are included only when clinically appropriate; prescriptions are never guaranteed. Individual results vary. Your provider will review your medical history, current medications, and relevant risks before treatment begins.";

export function getTreatmentBySlug(slug: string): Treatment | undefined {
  return getProgramBySlug(slug) ?? getProgramByRouteSlug(slug);
}

export function getRelatedTreatments(currentSlug: string) {
  const program =
    getProgramBySlug(currentSlug) ??
    programs.find((p) => p.href.endsWith(`/${currentSlug}`));
  if (!program) return [];
  return program.related
    .map(resolveRelatedItem)
    .filter((item): item is NonNullable<typeof item> => item !== null);
}
