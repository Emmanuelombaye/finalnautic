/**
 * Partner directory.
 *
 * To add a partner: append an object to `partners` below.
 * Every field except `name`, `category`, and `description` is optional.
 * Set `featured: true` for a slightly more prominent card treatment.
 *
 * `logo` accepts an imported image URL (e.g. `import logo from "@/assets/x.png"`).
 * When omitted, the card renders an elegant monogram fallback.
 */

export type PartnerCategory =
  | "Gyms & Fitness Studios"
  | "Personal Trainers & Coaches"
  | "Med Spas"
  | "Aesthetic Practices"
  | "Chiropractors"
  | "Physical Therapy & Recovery"
  | "Pilates & Yoga Studios"
  | "Salons & Beauty Professionals"
  | "Nutrition Professionals"
  | "Wellness Centers"
  | "Health & Lifestyle Brands"
  | "Corporate Wellness Partners";

export type Partner = {
  /** Stable slug — reserved for future partner-specific landing pages. */
  slug: string;
  name: string;
  category: PartnerCategory;
  /** City/state or service area. */
  location?: string;
  description: string;
  website?: string;
  social?: string;
  /** Optional exclusive partner offer shown in a highlighted area. */
  offer?: string;
  /** Optional promo code paired with the offer. */
  promoCode?: string;
  /** Label for the primary card action. Defaults to "Visit Partner". */
  ctaLabel?: string;
  logo?: string;
  featured?: boolean;
};

export const partnerCategories: PartnerCategory[] = [
  "Gyms & Fitness Studios",
  "Personal Trainers & Coaches",
  "Med Spas",
  "Aesthetic Practices",
  "Chiropractors",
  "Physical Therapy & Recovery",
  "Pilates & Yoga Studios",
  "Salons & Beauty Professionals",
  "Nutrition Professionals",
  "Wellness Centers",
  "Health & Lifestyle Brands",
  "Corporate Wellness Partners",
];

export const partners: Partner[] = [];
