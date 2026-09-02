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

/** Homepage popular section — Semaglutide and Tirzepatide only. */
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
    slug: "semaglutide",
    name: "Semaglutide",
    category: "Weight Management",
    price: 179,
    tagline: "Physician-guided weight management.",
    description:
      "A personalized weight-management option designed around your individual goals, medical history, and provider evaluation.",
    image: treatmentImages.semaglutide,
    imageAlt: "Active couple sharing a relaxed walk along a coastal garden path",
    href: "/programs/medical-weight-loss",
    cta: "Explore Semaglutide",
  },
];
