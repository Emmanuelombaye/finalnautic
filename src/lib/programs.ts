import { treatmentImages } from "./media";
import {
  pricingIncludes,
  programSteps,
  standardProgramFaqs,
} from "./program-shared";

export type Faq = { question: string; answer: string };
export type Benefit = { title: string; description: string };
export type RelatedItem = {
  kind: "program";
  slug: string;
};

export type Program = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  badge?: string;
  ribbon?: string;
  category: string;
  programLabel: string;
  description: string;
  tagline: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  href: string;
  includes: string;
  overview: string[];
  benefits: Benefit[];
  candidacy: string[];
  faqs: Faq[];
  related: RelatedItem[];
  pricingCategory: string;
  pricingSubtitle: string;
  learnMoreCta?: string;
  assessmentCta?: string;
};

const faqs = (...extra: Faq[]) => [...extra, ...standardProgramFaqs];

export const programs: Program[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    subtitle: "Physician-Guided Weight Management",
    price: 179,
    category: "Weight Management",
    programLabel: "Medical Weight Loss",
    pricingCategory: "Medical Weight Loss",
    pricingSubtitle: "Physician-Guided Weight Management",
    description:
      "A personalized weight-management option designed around your individual goals, medical history, and provider evaluation.",
    tagline: "Physician-guided weight management.",
    image: treatmentImages.semaglutide,
    imageAlt: "Active couple sharing a relaxed walk along a coastal garden path",
    heroImage: treatmentImages.semaglutideEditorial,
    href: "/programs/medical-weight-loss",
    includes: "Includes Semaglutide when clinically appropriate",
    overview: [
      "A physician-guided weight management program built around your metabolism, your history, and the life you actually live. Your provider begins with diagnostics, then designs an individualized plan spanning nutrition, movement, sleep, and clinical support.",
      "Where it is clinically appropriate, the program includes physician-guided semaglutide as one part of that broader plan. One flat monthly price of $179 covers your care, oversight, and — if prescribed — medication dispensed by a U.S. pharmacy and delivered to your home.",
    ],
    benefits: [
      { title: "Individualized weight care", description: "Progress reviewed through body composition and metabolic markers, not just the scale." },
      { title: "Metabolic markers tracked", description: "Fasting glucose, lipids, and inflammatory markers reviewed with your provider." },
      { title: "Support for appetite and energy", description: "A calmer relationship with hunger, supported clinically and behaviorally." },
      { title: "Habits that outlast the program", description: "Coaching designed so change holds as clinical support steps back." },
    ],
    candidacy: [
      "Adults who have plateaued despite consistent lifestyle effort",
      "Those with metabolic markers their provider wants to improve",
      "Patients who want medical oversight rather than a self-directed approach",
      "Anyone seeking a structured, long-view path to healthy weight",
    ],
    faqs: faqs(),
    related: [{ kind: "program", slug: "advanced-weight-loss" }],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    subtitle: "Physician-Guided Weight Management",
    price: 249,
    badge: "Most Popular",
    ribbon: "Most Popular",
    category: "Weight Management",
    programLabel: "Medical Weight Loss",
    pricingCategory: "Medical Weight Loss",
    pricingSubtitle: "Physician-Guided Weight Management",
    description:
      "A personalized weight-management option designed around your individual goals, medical history, and provider evaluation.",
    tagline: "Advanced physician-guided weight management.",
    image: treatmentImages.tirzepatide,
    imageAlt: "Man walking confidently along a leafy neighborhood path",
    heroImage: treatmentImages.tirzepatide,
    href: "/programs/advanced-weight-loss",
    includes: "Includes Tirzepatide when clinically appropriate",
    overview: [
      "A deeper clinical framework for weight management, with expanded diagnostics, closer monitoring, and a more gradual, carefully reviewed approach to dosing.",
      "Where it is clinically appropriate, the program includes physician-guided tirzepatide within a broader plan. One flat monthly price of $249 covers care, oversight, and — if prescribed — medication dispensed by a U.S. pharmacy and delivered to your home.",
    ],
    benefits: [
      { title: "Expanded diagnostics", description: "A deeper baseline panel with defined repeat testing throughout the program." },
      { title: "Close clinical monitoring", description: "Structured reviews so the plan stays conservative and responsive." },
      { title: "Lean mass considered", description: "Protein, resistance training, and recovery planned from day one." },
      { title: "One flat monthly price", description: "No dosage tiers, no formulation upcharges, no surprise pricing." },
    ],
    candidacy: [
      "Patients who have plateaued on a foundational weight program",
      "Those with more complex metabolic histories",
      "Adults who want closely supervised weight care",
      "Anyone seeking a longer-view, medically monitored approach",
    ],
    faqs: faqs(),
    related: [{ kind: "program", slug: "medical-weight-loss" }],
  },
];

const programRouteMap = new Map<string, Program>();
for (const program of programs) {
  const routeSlug = program.href.replace("/programs/", "");
  programRouteMap.set(routeSlug, program);
}

export const programRouteSlugs = [...programRouteMap.keys()];

export function getProgramByRouteSlug(routeSlug: string): Program | undefined {
  return programRouteMap.get(routeSlug);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function resolveRelatedItem(item: RelatedItem) {
  const program = getProgramByRouteSlug(item.slug);
  if (!program) return null;
  return {
    kind: "program" as const,
    href: program.href,
    name: program.name,
    subtitle: program.subtitle,
    label: "Program",
  };
}

export type CategoryOption = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  badge?: string;
  href: string;
  badgeLabel?: string;
};

export const categoryProgramOptions: Record<string, CategoryOption[]> = {
  "weight-management": [
    {
      slug: "medical-weight-loss",
      name: "Semaglutide",
      subtitle: "Physician-Guided Weight Management",
      price: 179,
      href: "/programs/medical-weight-loss",
      badgeLabel: "Physician-Guided",
    },
    {
      slug: "advanced-weight-loss",
      name: "Tirzepatide",
      subtitle: "Physician-Guided Weight Management",
      price: 249,
      badge: "Most Popular",
      href: "/programs/advanced-weight-loss",
      badgeLabel: "Physician-Guided",
    },
  ],
};

export { pricingIncludes, programSteps };
