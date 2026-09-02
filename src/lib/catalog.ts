import { treatmentImages } from "./media";

export type PopularCard = {
  slug: string;
  name: string;
  category: string;
  price?: number;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  cta: string;
  featured?: boolean;
  ribbon?: string;
  badge?: string;
};

/** Homepage popular section — 4-card grid matching original layout. */
export const popularTreatmentCards: PopularCard[] = [
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "Weight Management",
    price: 249,
    tagline: "Advanced physician-guided weight management.",
    description:
      "A personalized weight-management option designed around your individual goals, medical history, and provider evaluation.",
    image: treatmentImages.tirzepatide,
    imageAlt: "Man walking confidently along a leafy neighborhood path",
    href: "/programs/advanced-weight-loss",
    cta: "Explore Tirzepatide",
    featured: true,
    ribbon: "Most Popular",
  },
  {
    slug: "hormone-health",
    name: "Hormone Health",
    category: "Hormone Optimization",
    price: 220,
    tagline: "Personalized physician-guided hormone care.",
    description:
      "Individualized hormone care for men and women focused on health, vitality, and overall well-being.",
    image: treatmentImages.overall,
    imageAlt: "Active couple sharing a relaxed walk along a coastal garden path",
    href: "/treatments",
    cta: "Explore Hormone Health",
  },
  {
    slug: "nad",
    name: "NAD+",
    category: "Energy + Longevity",
    price: 229,
    tagline: "Energy and longevity-focused wellness support.",
    description:
      "Physician-guided longevity support for patients interested in energy, cellular wellness, and healthy aging.",
    image: treatmentImages.nad,
    imageAlt: "Active older woman taking a morning walk through a green park",
    href: "/programs/nad-plus",
    cta: "Explore NAD+",
    badge: "Longevity Favorite",
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "Recovery + Longevity",
    price: 249,
    tagline: "Recovery and performance-focused wellness support.",
    description:
      "A physician-guided wellness option for patients interested in recovery, performance, and longevity-focused care.",
    image: treatmentImages.sermorelin,
    imageAlt: "Man stretching after a light outdoor workout",
    href: "/programs/sermorelin",
    cta: "Explore Sermorelin",
  },
];

export type TreatmentGoalCard = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  cta: string;
};

export const treatmentGoalCards: TreatmentGoalCard[] = [
  {
    title: "Weight Management",
    description:
      "Explore physician-guided options designed around personalized weight-management goals.",
    href: "/treatments/weight-management",
    image: treatmentImages.semaglutideEditorial,
    imageAlt: "Woman preparing a fresh meal in a naturally lit kitchen",
    cta: "Explore Weight Management",
  },
  {
    title: "Hormone Health",
    description:
      "Personalized physician-guided options for individuals interested in hormone health, vitality, and overall wellness.",
    href: "/treatments/hormone-health",
    image: treatmentImages.hormone,
    imageAlt: "Woman practicing gentle movement beside a sunlit window",
    cta: "Explore Hormone Health",
  },
  {
    title: "Energy & Longevity",
    description:
      "Explore wellness options focused on energy, cellular wellness, healthy aging, and longevity-focused care.",
    href: "/treatments/energy-longevity",
    image: treatmentImages.nad,
    imageAlt: "Active older woman taking a morning walk through a green park",
    cta: "Explore Energy & Longevity",
  },
  {
    title: "Recovery & Performance",
    description:
      "Physician-guided wellness options for individuals focused on recovery, performance, and maintaining an active lifestyle.",
    href: "/treatments/recovery-performance",
    image: treatmentImages.performance,
    imageAlt: "Man practicing mobility work in a naturally lit studio",
    cta: "Explore Recovery & Performance",
  },
  {
    title: "Cognitive Wellness",
    description:
      "Explore provider-evaluated options for individuals interested in focus, mental performance, energy, and cognitive wellness.",
    href: "/treatments/cognitive-wellness",
    image: treatmentImages.cognitive,
    imageAlt: "Woman writing with focus at a desk beside a window",
    cta: "Explore Cognitive Wellness",
  },
  {
    title: "Overall Optimization",
    description:
      "Explore more comprehensive physician-guided approaches for individuals with multiple wellness goals.",
    href: "/treatments/overall-optimization",
    image: treatmentImages.overall,
    imageAlt: "Active couple sharing a relaxed walk along a coastal garden path",
    cta: "Explore Overall Optimization",
  },
];
