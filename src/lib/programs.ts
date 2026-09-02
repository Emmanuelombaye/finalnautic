import { treatmentImages } from "./media";
import {
  bundleSteps,
  pricingIncludes,
  programSteps,
  standardProgramFaqs,
} from "./program-shared";

export type Faq = { question: string; answer: string };
export type Benefit = { title: string; description: string };
export type RelatedItem = {
  kind: "program" | "bundle";
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

export type Bundle = {
  slug: string;
  name: string;
  subtitle: string;
  price: number;
  badge?: string;
  ribbon?: string;
  category: string;
  includesTags: string[];
  overview: string[];
  highlightTitle?: string;
  highlightBody?: string;
  included: Benefit[];
  whyTogether: string[];
  candidacy: string[];
  patientQuotes?: { quote: string; attribution: string }[];
  faqs: Faq[];
  related: RelatedItem[];
  pricingCategory: string;
  heroImage: string;
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
    faqs: faqs(
      { question: "Is this program only about medication?", answer: "No. The program is a comprehensive weight care plan. Physician-guided semaglutide may be included when clinically appropriate, but nutrition, movement, monitoring, and behavioral support are central to the plan." },
      { question: "Will I definitely be prescribed medication?", answer: "No. Prescriptions are never guaranteed. Your provider determines whether any medication is appropriate after reviewing your history, medications, and laboratory results." }
    ),
    related: [
      { kind: "program", slug: "advanced-weight-loss" },
      { kind: "program", slug: "nad-plus" },
      { kind: "bundle", slug: "metabolic-bundle" },
      { kind: "bundle", slug: "metabolic-plus" },
    ],
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
    faqs: faqs(
      { question: "How is this different from the Semaglutide program?", answer: "The clinical framework is deeper: expanded diagnostics, closer monitoring, and a different medication pathway when clinically appropriate. Your provider will recommend the pathway that fits your history." }
    ),
    related: [
      { kind: "program", slug: "medical-weight-loss" },
      { kind: "program", slug: "nad-plus" },
      { kind: "bundle", slug: "metabolic-plus" },
      { kind: "bundle", slug: "metabolic-bundle" },
    ],
  },
  {
    slug: "testosterone-optimization",
    name: "Men's Hormone Health",
    subtitle: "Personalized Hormone Optimization",
    price: 220,
    category: "Hormone Health",
    programLabel: "Hormone Health",
    pricingCategory: "Hormone Health",
    pricingSubtitle: "Personalized Hormone Optimization",
    description: "Physician-guided hormone care for men, reviewed by a licensed provider.",
    tagline: "Personalized physician-guided hormone care.",
    image: treatmentImages.hormone,
    imageAlt: "Man practicing gentle movement beside a sunlit window",
    heroImage: treatmentImages.hormone,
    href: "/programs/testosterone-optimization",
    includes: "Includes Physician-guided hormone therapy when clinically appropriate",
    overview: [
      "Physician-led hormone care for men who want steadier energy, strength, and focus — grounded in laboratory testing rather than guesswork.",
      "Your provider reviews a full hormone and metabolic panel, then builds an individualized plan with structured monitoring. One flat monthly price of $220 covers the program of care and, when prescribed, medication from a U.S. pharmacy.",
    ],
    benefits: [
      { title: "Lab-based decisions", description: "Hormone, metabolic, and safety markers reviewed before anything is recommended." },
      { title: "Energy and strength focus", description: "A plan tuned to how you feel through the day, not a single number." },
      { title: "Structured monitoring", description: "Repeat testing and provider review at defined intervals." },
      { title: "One flat monthly price", description: "One transparent monthly price with no tiers." },
    ],
    candidacy: [
      "Men noticing persistent fatigue, low drive, or reduced strength",
      "Those whose laboratory markers warrant clinical review",
      "Patients who want monitored hormone care rather than self-direction",
      "Adults investing in long-term vitality",
    ],
    faqs: faqs({ question: "Is therapy guaranteed?", answer: "No. Hormone therapy is prescribed only when clinically appropriate, based on your laboratory results, history, and provider judgment." }),
    related: [
      { kind: "program", slug: "enclomiphene" },
      { kind: "program", slug: "nad-plus" },
      { kind: "bundle", slug: "mens-vitality" },
      { kind: "bundle", slug: "mens-performance-recovery" },
    ],
  },
  {
    slug: "womens-hrt",
    name: "Women's Hormone Health",
    subtitle: "Personalized HRT Program",
    price: 220,
    category: "Hormone Health",
    programLabel: "Hormone Health",
    pricingCategory: "Hormone Health",
    pricingSubtitle: "Personalized HRT Program",
    description: "Individualized hormone care for women focused on health, vitality, and overall well-being.",
    tagline: "Personalized physician-guided hormone care.",
    image: treatmentImages.hormone,
    imageAlt: "Woman practicing gentle movement beside a sunlit window",
    heroImage: treatmentImages.hormone,
    href: "/programs/womens-hrt",
    includes: "Includes Individualized hormone therapy when clinically appropriate",
    overview: [
      "Considered hormone care for perimenopause, menopause, and beyond — individualized to your symptoms, your history, and your goals.",
      "Your provider reviews your intake and laboratory results, then designs a plan with clear monitoring. One flat monthly price of $220 covers the program of care and, when prescribed, medication from a U.S. pharmacy.",
    ],
    benefits: [
      { title: "Symptom-led, lab-informed", description: "Sleep, mood, temperature regulation, and energy tracked alongside markers." },
      { title: "Individualized plans", description: "Therapy shaped to your stage and your priorities, reviewed over time." },
      { title: "Considered provider review", description: "Your history, symptoms, and goals are reviewed with care over time." },
      { title: "One flat monthly price", description: "A single price with no formulation-based pricing tiers." },
    ],
    candidacy: [
      "Women in perimenopause or menopause seeking clinical guidance",
      "Those with sleep, mood, or temperature-regulation changes",
      "Patients who want continuity with one provider",
      "Adults planning for long-term bone, heart, and cognitive wellness",
    ],
    faqs: faqs({ question: "How is my plan chosen?", answer: "Your provider recommends a plan based on your symptoms, history, and laboratory results. Your monthly price remains the same regardless of the plan recommended." }),
    related: [
      { kind: "program", slug: "nad-plus" },
      { kind: "program", slug: "sermorelin" },
      { kind: "bundle", slug: "womens-vitality" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "enclomiphene",
    name: "Enclomiphene",
    subtitle: "Physician-Guided Hormone Support",
    price: 209,
    category: "Hormone Health",
    programLabel: "Hormone Health",
    pricingCategory: "Hormone Health",
    pricingSubtitle: "Physician-Guided Hormone Support",
    description: "A physician-guided hormone support option for men when clinically appropriate.",
    tagline: "Physician-guided hormone support.",
    image: treatmentImages.performance,
    imageAlt: "Man practicing mobility work in a naturally lit studio",
    heroImage: treatmentImages.performance,
    href: "/programs/enclomiphene",
    includes: "Includes Enclomiphene when clinically appropriate",
    overview: [
      "A monitored hormone pathway for men, evaluated by a licensed provider and grounded in laboratory testing.",
      "Where clinically appropriate, enclomiphene is included within a broader plan of care. One flat monthly price of $209 covers oversight, monitoring, and medication from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "An alternative pathway", description: "A different approach to hormone support, reviewed against your goals." },
      { title: "Laboratory monitoring", description: "Defined testing intervals so decisions stay objective." },
      { title: "Clear clinical guidance", description: "Trade-offs are reviewed carefully before anything begins." },
      { title: "One flat monthly price", description: "A single transparent price with no dosage-based tiers." },
    ],
    candidacy: [
      "Men exploring hormone support options with a provider",
      "Those who want a monitored, conservative pathway",
      "Patients prioritizing laboratory-guided decisions",
      "Adults seeking continuity of care over time",
    ],
    faqs: faqs(),
    related: [
      { kind: "program", slug: "testosterone-optimization" },
      { kind: "program", slug: "nad-plus" },
      { kind: "bundle", slug: "mens-vitality" },
      { kind: "bundle", slug: "mens-performance-recovery" },
    ],
  },
  {
    slug: "nad-plus",
    name: "NAD+ Longevity",
    subtitle: "Core Longevity Program",
    price: 229,
    category: "Energy + Longevity",
    programLabel: "Longevity & Wellness",
    pricingCategory: "Longevity & Wellness",
    pricingSubtitle: "Core Longevity Program",
    description: "Physician-guided longevity support for patients interested in energy, cellular wellness, and healthy aging.",
    tagline: "Energy and longevity-focused wellness support.",
    image: treatmentImages.nad,
    imageAlt: "Active older woman taking a morning walk through a green park",
    heroImage: treatmentImages.nad,
    href: "/programs/nad-plus",
    includes: "Includes NAD+ when clinically appropriate",
    overview: [
      "Our core longevity program supports the cellular machinery behind daily energy, focus, and healthy aging.",
      "Where clinically appropriate, NAD+ is included within a plan built around sleep, movement, and structured monitoring. One flat monthly price of $229 covers care, oversight, and medication from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "Daily energy support", description: "A plan focused on how consistent your energy feels across the week." },
      { title: "Focus and clarity", description: "Cognitive wellness considered alongside sleep and recovery." },
      { title: "Healthy aging orientation", description: "Decisions made with the next decade in view." },
      { title: "One flat monthly price", description: "No dosage tiers and no add-on pricing." },
    ],
    candidacy: [
      "Adults whose energy has flattened despite good habits",
      "Those focused on longevity-oriented wellness",
      "Patients wanting a monitored, physician-guided approach",
      "Anyone building a long-term wellness foundation",
    ],
    faqs: faqs(),
    related: [
      { kind: "program", slug: "sermorelin" },
      { kind: "program", slug: "longevity-plus" },
      { kind: "bundle", slug: "longevity-plus" },
      { kind: "bundle", slug: "metabolic-bundle" },
    ],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    subtitle: "Physician-Guided Longevity Option",
    price: 249,
    category: "Recovery + Longevity",
    programLabel: "Longevity & Wellness",
    pricingCategory: "Longevity & Wellness",
    pricingSubtitle: "Physician-Guided Longevity Option",
    description: "A physician-guided wellness option for patients interested in recovery, performance, and longevity-focused care.",
    tagline: "Recovery and performance-focused wellness support.",
    image: treatmentImages.sermorelin,
    imageAlt: "Man stretching after a light outdoor workout",
    heroImage: treatmentImages.sermorelin,
    href: "/programs/sermorelin",
    includes: "Includes Sermorelin when clinically appropriate",
    overview: [
      "Sleep, recovery, and resilience supported with sermorelin when clinically appropriate — within a plan that treats rest as clinical infrastructure.",
      "One flat monthly price of $249 covers physician oversight, monitoring, and medication dispensed by a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "Recovery-focused wellness", description: "Sleep depth and daily recovery reviewed with your provider." },
      { title: "Resilience under load", description: "Training, travel, and work demands accounted for in the plan." },
      { title: "Monitored and conservative", description: "Defined testing intervals with measured adjustments." },
      { title: "One flat monthly price", description: "A single transparent price with no tiers." },
    ],
    candidacy: [
      "Adults whose sleep quality has declined",
      "Those recovering more slowly from training or travel",
      "Patients focused on healthy aging and resilience",
      "Anyone wanting recovery treated clinically, not casually",
    ],
    faqs: faqs(),
    related: [
      { kind: "program", slug: "nad-plus" },
      { kind: "program", slug: "longevity-plus" },
      { kind: "bundle", slug: "longevity-plus" },
      { kind: "bundle", slug: "mens-performance-recovery" },
    ],
  },
  {
    slug: "longevity-plus",
    name: "Longevity Plus",
    subtitle: "Advanced Longevity Program",
    price: 365,
    category: "Longevity & Wellness",
    programLabel: "Longevity & Wellness",
    pricingCategory: "Longevity & Wellness",
    pricingSubtitle: "Advanced Longevity Program",
    description: "An advanced longevity protocol when clinically appropriate.",
    tagline: "Advanced longevity-focused wellness support.",
    image: treatmentImages.nad,
    imageAlt: "Active older woman taking a morning walk through a green park",
    heroImage: treatmentImages.nad,
    href: "/programs/longevity-plus",
    includes: "Includes An advanced longevity protocol when clinically appropriate",
    overview: [
      "Longevity Plus is our advanced longevity program, designed for patients who want a broader approach to energy, recovery, cellular wellness, and long-term health.",
      "Your provider builds one integrated protocol with expanded diagnostics and a closer review cadence. One flat monthly price of $365 covers the full program of care, with medication from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "A broader protocol", description: "Energy, recovery, and cellular wellness addressed within one plan." },
      { title: "Expanded diagnostics", description: "A wider panel with defined repeat testing." },
      { title: "Closer review cadence", description: "More frequent provider check-ins as the picture evolves." },
      { title: "One flat monthly price", description: "Everything included at a single price — no tiers, no add-ons." },
    ],
    candidacy: [
      "Adults taking a comprehensive approach to healthy aging",
      "Those seeking energy, recovery, and cellular wellness in one plan",
      "Patients who prefer a single coordinated protocol",
      "Anyone wanting Nautic Health's most advanced longevity program",
    ],
    faqs: faqs(),
    related: [
      { kind: "program", slug: "nad-plus" },
      { kind: "program", slug: "sermorelin" },
      { kind: "bundle", slug: "longevity-plus" },
      { kind: "bundle", slug: "womens-vitality" },
    ],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    subtitle: "Longevity & Wellness Support",
    price: 99,
    category: "Longevity & Wellness",
    programLabel: "Longevity & Wellness",
    pricingCategory: "Longevity & Wellness",
    pricingSubtitle: "Longevity & Wellness Support",
    learnMoreCta: "See If Glutathione Is Right for You",
    description: "Physician-guided wellness support for recovery, antioxidant support, and cellular wellness.",
    tagline: "Antioxidant and recovery-focused wellness support.",
    image: treatmentImages.overall,
    imageAlt: "A quiet morning wellness ritual on a linen-draped table",
    heroImage: treatmentImages.overall,
    href: "/programs/glutathione",
    includes: "Includes Glutathione when clinically appropriate",
    overview: [
      "Physician-guided wellness support for patients interested in recovery, antioxidant support, cellular wellness, and longevity-focused care.",
      "Your provider reviews your history and goals before determining whether the program is appropriate. One flat monthly price of $99 covers oversight, monitoring, and fulfillment from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "Cellular wellness support", description: "A wellness-oriented plan reviewed by a licensed provider." },
      { title: "Antioxidant support", description: "Considered as part of a broader longevity approach." },
      { title: "Recovery-focused wellness", description: "Reviewed alongside sleep, training load, and daily demands." },
      { title: "Complements other programs", description: "Can complement other eligible Nautic Health programs." },
    ],
    candidacy: [
      "Cellular wellness support",
      "Antioxidant support",
      "Recovery-focused wellness",
      "Longevity-focused care",
      "Patients whose provider views it as a complement to another eligible program",
    ],
    faqs: faqs({ question: "Can Glutathione be combined with another program?", answer: "It can complement other eligible Nautic Health programs when your provider determines that is appropriate for you." }),
    related: [
      { kind: "program", slug: "nad-plus" },
      { kind: "program", slug: "methylene-blue" },
      { kind: "bundle", slug: "longevity-plus" },
      { kind: "bundle", slug: "womens-vitality" },
    ],
  },
  {
    slug: "methylene-blue",
    name: "Methylene Blue",
    subtitle: "Cognitive & Longevity Support",
    price: 125,
    category: "Longevity & Wellness",
    programLabel: "Longevity & Wellness",
    pricingCategory: "Longevity & Wellness",
    pricingSubtitle: "Cognitive & Longevity Support",
    learnMoreCta: "See If Methylene Blue Is Right for You",
    description: "Physician-guided cognitive and longevity wellness support when clinically appropriate.",
    tagline: "Cognitive and energy wellness support.",
    image: treatmentImages.cognitive,
    imageAlt: "Woman writing with focus at a desk beside a window",
    heroImage: treatmentImages.cognitive,
    href: "/programs/methylene-blue",
    includes: "Includes Methylene Blue when clinically appropriate",
    overview: [
      "A physician-guided option for patients interested in cognitive wellness, mental performance, and longevity-focused care.",
      "Your provider reviews your history, medications, and goals before determining whether the program is appropriate. One flat monthly price of $125 covers oversight, monitoring, and fulfillment when prescribed.",
    ],
    benefits: [
      { title: "Cognitive wellness focus", description: "Mental clarity and focus considered within a broader plan." },
      { title: "Energy support", description: "Daily energy reviewed alongside sleep and recovery." },
      { title: "Conservative monitoring", description: "Defined review intervals with your licensed provider." },
      { title: "One flat monthly price", description: "A single transparent monthly price with no tiers." },
    ],
    candidacy: [
      "Adults interested in cognitive wellness and mental performance",
      "Those seeking physician-guided longevity support",
      "Patients wanting monitored, conservative care",
      "Anyone building a broader wellness foundation",
    ],
    faqs: faqs(),
    related: [
      { kind: "program", slug: "nad-plus" },
      { kind: "program", slug: "glutathione" },
      { kind: "bundle", slug: "longevity-complete" },
      { kind: "bundle", slug: "total-optimization" },
    ],
  },
];

export const bundles: Bundle[] = [
  {
    slug: "metabolic-bundle",
    name: "Metabolic Bundle",
    subtitle:
      "Physician-guided weight management paired with core longevity support in one simple monthly program.",
    price: 310,
    category: "Weight Management + Longevity",
    pricingCategory: "Weight Management",
    includesTags: ["Semaglutide", "NAD+"],
    heroImage: treatmentImages.semaglutideEditorial,
    overview: [
      "Weight and energy are the same conversation. Metabolic Bundle pairs physician-guided weight management with NAD+ longevity support in one plan, with a single intake, one care team, and one review cadence.",
      "Where clinically appropriate, semaglutide and NAD+ are included as components of a broader metabolic plan. Medication is dispensed by a U.S. pharmacy and delivered to your home only if prescribed.",
    ],
    included: [
      { title: "Weight management care", description: "Physician-guided weight care, including semaglutide when clinically appropriate." },
      { title: "NAD+ longevity support", description: "Cellular energy support when clinically appropriate." },
      { title: "Combined diagnostic panel", description: "One blood draw covering metabolic and energy markers." },
      { title: "Unified care plan", description: "A single provider-designed plan rather than two competing protocols." },
      { title: "Monthly provider review", description: "Continuous oversight with adjustments as you respond." },
    ],
    whyTogether: [
      "Metabolic change is energetically expensive; supporting cellular energy makes the plan easier to sustain.",
      "Shared diagnostics mean fewer draws and a clearer, more complete picture.",
      "One provider tuning both protocols avoids the conflicts of parallel plans.",
    ],
    candidacy: [
      "Patients who feel both heavy and depleted",
      "Anyone whose fatigue has undermined previous weight efforts",
      "Those wanting broad metabolic support in one plan",
    ],
    patientQuotes: [
      { quote: "The energy piece is what made the weight side finally feel manageable.", attribution: "Marissa T. Metabolic Bundle, 7 months*" },
      { quote: "One intake, one team, one plan. It stopped feeling like a project.", attribution: "Daniel R. Metabolic Bundle, 5 months*" },
    ],
    faqs: faqs({ question: "What does the Metabolic Bundle price include?", answer: "One flat monthly price covers the full combined program: physician oversight, combined diagnostics, monitoring, and medication from a U.S. pharmacy when prescribed." }),
    related: [
      { kind: "bundle", slug: "metabolic-plus" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "metabolic-plus",
    name: "Metabolic Plus",
    subtitle:
      "Advanced physician-guided weight management paired with core longevity support in one plan.",
    price: 380,
    ribbon: "Most Popular",
    category: "Premium Weight Management + Longevity",
    pricingCategory: "Weight Management",
    includesTags: ["Tirzepatide", "NAD+"],
    heroImage: treatmentImages.tirzepatide,
    highlightTitle: "Weight management and longevity care, brought together.",
    highlightBody:
      "Tirzepatide, NAD+, Sermorelin, and Glutathione are coordinated within one physician-guided program when clinically appropriate, with ongoing oversight informed by your diagnostics and response.",
    overview: [
      "Metabolic Plus pairs an advanced weight management pathway with NAD+ longevity support, under one physician-designed plan and one review cadence.",
      "Where clinically appropriate, tirzepatide and NAD+ are included as components of that plan. Prescriptions are never guaranteed and are issued only when medically appropriate.",
    ],
    included: [
      { title: "Advanced weight management", description: "Physician-guided weight care, including tirzepatide when clinically appropriate." },
      { title: "NAD+ longevity support", description: "Cellular energy support when clinically appropriate." },
      { title: "Expanded diagnostics", description: "A deeper panel with defined repeat testing." },
      { title: "Unified care plan", description: "One integrated plan rather than two parallel protocols." },
      { title: "Monthly provider review", description: "Close monitoring with conservative adjustments." },
    ],
    whyTogether: [
      "Advanced protocols demand more from your metabolism; energy support helps you tolerate the work.",
      "Frequent testing catches changes early and keeps dosing conservative.",
      "Lean-mass considerations are planned from day one rather than corrected later.",
    ],
    candidacy: [
      "Patients who have plateaued on a foundational program",
      "Those with complex metabolic histories",
      "Anyone wanting a closely monitored weight pathway with energy support",
    ],
    patientQuotes: [
      { quote: "The monitoring is the difference. Nothing felt improvised.", attribution: "Priya N. Metabolic Plus, 9 months*" },
      { quote: "Having one physician hold the whole picture changed how I approach this.", attribution: "Chris B. Metabolic Plus, 6 months*" },
    ],
    faqs: faqs({ question: "What does the Metabolic Plus price include?", answer: "One flat monthly price covers the full combined program: physician oversight, combined diagnostics, monitoring, and medication from a U.S. pharmacy when prescribed." }),
    related: [
      { kind: "bundle", slug: "metabolic-bundle" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "longevity-plus",
    name: "Longevity Plus",
    subtitle:
      "Core longevity support and recovery-focused care combined in one physician-guided plan.",
    price: 380,
    category: "Hormone Health + Longevity",
    pricingCategory: "Bundle",
    includesTags: ["NAD+", "Sermorelin"],
    heroImage: treatmentImages.sermorelin,
    overview: [
      "Longevity Plus combines NAD+ and Sermorelin within one physician-guided plan — energy, recovery, and resilience addressed together rather than in parallel.",
      "One flat monthly price covers the combined program of care, with medication from a U.S. pharmacy when clinically appropriate and prescribed.",
    ],
    included: [
      { title: "NAD+ longevity support", description: "Cellular energy support when clinically appropriate." },
      { title: "Sermorelin recovery support", description: "Recovery-focused wellness when clinically appropriate." },
      { title: "Combined diagnostics", description: "One panel covering energy and recovery markers." },
      { title: "Unified care plan", description: "A single provider-designed protocol." },
      { title: "Monthly provider review", description: "Continuous oversight with measured adjustments." },
    ],
    whyTogether: [
      "Energy and recovery are linked — supporting both makes sustainable progress more likely.",
      "Shared diagnostics reduce friction and give your provider a fuller picture.",
      "One care team coordinates dosing and monitoring conservatively.",
    ],
    candidacy: [
      "Adults focused on energy and recovery together",
      "Those wanting longevity and resilience in one plan",
      "Patients preferring a single coordinated protocol",
    ],
    faqs: faqs({ question: "What does the Longevity Plus bundle price include?", answer: "One flat monthly price covers the full combined program: physician oversight, combined diagnostics, monitoring, and medication from a U.S. pharmacy when prescribed." }),
    related: [
      { kind: "bundle", slug: "metabolic-plus" },
      { kind: "bundle", slug: "longevity-complete" },
    ],
  },
  {
    slug: "mens-vitality",
    name: "Men's Vitality",
    subtitle:
      "A physician-guided program combining personalized men's hormone support with NAD+ longevity support.",
    price: 350,
    category: "Hormone Health + Longevity",
    pricingCategory: "Bundle",
    includesTags: ["Men's HRT", "NAD+"],
    heroImage: treatmentImages.hormone,
    overview: [
      "Men's Vitality pairs physician-guided hormone support with NAD+ longevity care in one plan — energy, strength, and long-term wellness reviewed together.",
      "One flat monthly price covers the combined program, with medication from a U.S. pharmacy when clinically appropriate and prescribed.",
    ],
    included: [
      { title: "Men's hormone support", description: "Physician-guided hormone care when clinically appropriate." },
      { title: "NAD+ longevity support", description: "Cellular energy support when clinically appropriate." },
      { title: "Combined diagnostics", description: "Hormone and metabolic markers reviewed together." },
      { title: "Unified care plan", description: "One provider-designed protocol." },
      { title: "Monthly provider review", description: "Structured monitoring and adjustments." },
    ],
    whyTogether: [
      "Hormone health and cellular energy influence how you feel day to day.",
      "Combined testing gives your provider a clearer clinical picture.",
      "One team coordinates both pathways conservatively.",
    ],
    candidacy: [
      "Men seeking hormone and energy support together",
      "Those wanting a monitored, physician-guided approach",
      "Patients focused on long-term vitality",
    ],
    faqs: faqs(),
    related: [
      { kind: "bundle", slug: "mens-performance-recovery" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "womens-vitality",
    name: "Women's Vitality",
    subtitle:
      "A physician-guided program combining personalized women's hormone support with NAD+ longevity support.",
    price: 350,
    category: "Hormone Health + Longevity",
    pricingCategory: "Bundle",
    includesTags: ["Women's HRT", "NAD+"],
    heroImage: treatmentImages.hormone,
    overview: [
      "Women's Vitality combines individualized hormone care with NAD+ longevity support — symptoms, energy, and long-term wellness addressed in one coordinated plan.",
      "One flat monthly price covers physician oversight and medication from a U.S. pharmacy when prescribed.",
    ],
    included: [
      { title: "Women's hormone support", description: "Individualized hormone care when clinically appropriate." },
      { title: "NAD+ longevity support", description: "Cellular energy support when clinically appropriate." },
      { title: "Combined diagnostics", description: "Hormone and metabolic markers reviewed together." },
      { title: "Unified care plan", description: "One provider-designed protocol." },
      { title: "Monthly provider review", description: "Structured monitoring and adjustments." },
    ],
    whyTogether: [
      "Hormone shifts and energy changes often travel together.",
      "Shared diagnostics support more informed provider decisions.",
      "One care team keeps the plan coherent over time.",
    ],
    candidacy: [
      "Women seeking hormone and energy support together",
      "Those in perimenopause or menopause wanting comprehensive care",
      "Patients focused on long-term wellness",
    ],
    faqs: faqs(),
    related: [
      { kind: "bundle", slug: "longevity-plus" },
      { kind: "bundle", slug: "longevity-complete" },
    ],
  },
  {
    slug: "mens-performance-recovery",
    name: "Men's Performance & Recovery",
    subtitle:
      "A physician-guided program designed around men's hormone health, performance, recovery, and longevity-focused wellness.",
    price: 370,
    category: "Performance + Recovery",
    pricingCategory: "Bundle",
    includesTags: ["Men's HRT", "Sermorelin"],
    heroImage: treatmentImages.performance,
    overview: [
      "Men's Performance & Recovery combines physician-guided hormone support with sermorelin recovery care — strength, sleep, and resilience reviewed as one clinical picture.",
      "One flat monthly price covers the combined program with medication from a U.S. pharmacy when prescribed.",
    ],
    included: [
      { title: "Men's hormone support", description: "Physician-guided hormone care when clinically appropriate." },
      { title: "Sermorelin recovery support", description: "Recovery-focused wellness when clinically appropriate." },
      { title: "Combined diagnostics", description: "Hormone and recovery markers reviewed together." },
      { title: "Unified care plan", description: "One integrated provider-designed protocol." },
      { title: "Monthly provider review", description: "Close monitoring with conservative adjustments." },
    ],
    whyTogether: [
      "Recovery and hormone health both shape how you train, sleep, and perform.",
      "One provider can sequence support deliberately rather than reactively.",
      "Combined monitoring keeps the plan conservative and responsive.",
    ],
    candidacy: [
      "Men focused on performance and recovery together",
      "Those whose recovery has slowed despite consistent training",
      "Patients wanting physician-guided longevity support",
    ],
    faqs: faqs(),
    related: [
      { kind: "bundle", slug: "mens-vitality" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "longevity-complete",
    name: "Longevity Complete",
    subtitle:
      "A comprehensive physician-guided program for longevity, recovery, energy, antioxidant support, and cellular wellness.",
    price: 460,
    ribbon: "Premium Longevity",
    category: "Premium Longevity + Wellness",
    pricingCategory: "Bundle",
    includesTags: ["NAD+", "Sermorelin", "Glutathione"],
    heroImage: treatmentImages.nad,
    overview: [
      "Longevity Complete brings together NAD+, Sermorelin, and Glutathione in one physician-guided plan — energy, recovery, and cellular wellness coordinated under a single review cadence.",
      "One flat monthly price covers the full combined program with medication from a U.S. pharmacy when clinically appropriate.",
    ],
    included: [
      { title: "NAD+ longevity support", description: "Cellular energy support when clinically appropriate." },
      { title: "Sermorelin recovery support", description: "Recovery-focused wellness when clinically appropriate." },
      { title: "Glutathione antioxidant support", description: "Antioxidant support when clinically appropriate." },
      { title: "Expanded diagnostics", description: "A broader panel with defined repeat testing." },
      { title: "Monthly provider review", description: "Frequent oversight with measured adjustments." },
    ],
    whyTogether: [
      "Energy, recovery, and antioxidant support are most effective when coordinated.",
      "Expanded diagnostics give your provider a comprehensive baseline.",
      "One team manages interactions and sequencing conservatively.",
    ],
    candidacy: [
      "Adults seeking a comprehensive longevity approach",
      "Those focused on energy, recovery, and cellular wellness together",
      "Patients wanting premium, closely monitored care",
    ],
    faqs: faqs(),
    related: [
      { kind: "bundle", slug: "total-optimization" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "total-optimization",
    name: "Total Optimization",
    subtitle:
      "A comprehensive program combining physician-guided weight management with longevity, recovery, energy, and cellular wellness support.",
    price: 660,
    ribbon: "Complete Optimization",
    category: "Most Comprehensive",
    pricingCategory: "Bundle",
    includesTags: ["Tirzepatide", "NAD+", "Sermorelin", "Glutathione"],
    heroImage: treatmentImages.tirzepatide,
    overview: [
      "Total Optimization is our most comprehensive physician-guided program — advanced weight management paired with NAD+, Sermorelin, and Glutathione when clinically appropriate.",
      "One flat monthly price covers the full program of care with medication from a U.S. pharmacy when prescribed.",
    ],
    included: [
      { title: "Advanced weight management", description: "Physician-guided weight care, including tirzepatide when clinically appropriate." },
      { title: "NAD+ longevity support", description: "Cellular energy support when clinically appropriate." },
      { title: "Sermorelin recovery support", description: "Recovery-focused wellness when clinically appropriate." },
      { title: "Glutathione antioxidant support", description: "Antioxidant support when clinically appropriate." },
      { title: "Premium provider oversight", description: "The closest clinical monitoring Nautic Health offers." },
    ],
    whyTogether: [
      "Weight, energy, recovery, and cellular wellness are interconnected — treating them together avoids fragmented care.",
      "Premium diagnostics and review cadence support conservative, responsive adjustments.",
      "One physician holds the entire clinical picture.",
    ],
    candidacy: [
      "Patients seeking comprehensive metabolic and longevity support",
      "Those with multiple wellness goals who want one coordinated plan",
      "Adults investing in long-term, physician-guided optimization",
    ],
    faqs: faqs(),
    related: [
      { kind: "bundle", slug: "metabolic-plus" },
      { kind: "bundle", slug: "longevity-complete" },
    ],
  },
];

const programRouteMap = new Map<string, Program>();
for (const program of programs) {
  const routeSlug = program.href.replace("/programs/", "");
  programRouteMap.set(routeSlug, program);
}

export const programRouteSlugs = [...programRouteMap.keys()];
export const bundleSlugs = bundles.map((b) => b.slug);

export function getProgramByRouteSlug(routeSlug: string): Program | undefined {
  return programRouteMap.get(routeSlug);
}

export function getProgramBySlug(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug);
}

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find((b) => b.slug === slug);
}

export function resolveRelatedItem(item: RelatedItem) {
  if (item.kind === "program") {
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
  const bundle = getBundleBySlug(item.slug);
  if (!bundle) return null;
  return {
    kind: "bundle" as const,
    href: `/bundles/${bundle.slug}`,
    name: bundle.name,
    subtitle: bundle.subtitle,
    label: "Bundle",
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
    { slug: "medical-weight-loss", name: "Semaglutide", subtitle: "Physician-Guided Weight Management", price: 179, href: "/programs/medical-weight-loss", badgeLabel: "Physician-Guided" },
    { slug: "advanced-weight-loss", name: "Tirzepatide", subtitle: "Physician-Guided Weight Management", price: 249, badge: "Most Popular", href: "/programs/advanced-weight-loss", badgeLabel: "Physician-Guided" },
  ],
  "hormone-health": [
    { slug: "testosterone-optimization", name: "Men's Hormone Health", subtitle: "Personalized Hormone Optimization", price: 220, href: "/programs/testosterone-optimization", badgeLabel: "Physician-Guided" },
    { slug: "womens-hrt", name: "Women's Hormone Health", subtitle: "Personalized HRT Program", price: 220, href: "/programs/womens-hrt", badgeLabel: "Physician-Guided" },
    { slug: "enclomiphene", name: "Enclomiphene", subtitle: "Physician-Guided Hormone Support", price: 209, href: "/programs/enclomiphene", badgeLabel: "Provider-Evaluated" },
  ],
  "energy-longevity": [
    { slug: "nad-plus", name: "NAD+ Longevity", subtitle: "Core Longevity Program", price: 229, href: "/programs/nad-plus", badgeLabel: "Physician-Guided" },
    { slug: "longevity-plus", name: "Longevity Plus", subtitle: "Advanced Longevity Program", price: 365, href: "/programs/longevity-plus", badgeLabel: "Physician-Guided" },
    { slug: "glutathione", name: "Glutathione", subtitle: "Longevity & Wellness Support", price: 99, href: "/programs/glutathione", badgeLabel: "Physician-Guided" },
    { slug: "methylene-blue", name: "Methylene Blue", subtitle: "Cognitive & Longevity Support", price: 125, href: "/programs/methylene-blue", badgeLabel: "Physician-Guided" },
  ],
  "recovery-performance": [
    { slug: "sermorelin", name: "Sermorelin", subtitle: "Physician-Guided Longevity Option", price: 249, href: "/programs/sermorelin", badgeLabel: "Physician-Guided" },
  ],
  "cognitive-wellness": [
    { slug: "methylene-blue", name: "Methylene Blue", subtitle: "Cognitive & Longevity Support", price: 125, href: "/programs/methylene-blue", badgeLabel: "Physician-Guided" },
  ],
  "overall-optimization": [
    { slug: "longevity-plus", name: "Longevity Plus", subtitle: "Advanced Longevity Program", price: 365, href: "/programs/longevity-plus", badgeLabel: "Physician-Guided" },
    { slug: "total-optimization", name: "Total Optimization", subtitle: "Our most comprehensive physician-guided program.", price: 660, href: "/bundles/total-optimization", badgeLabel: "Physician-Guided" },
  ],
};

export const otherGoalLinks = [
  { label: "Weight Management", href: "/treatments/weight-management" },
  { label: "Hormone Health", href: "/treatments/hormone-health" },
  { label: "Energy & Longevity", href: "/treatments/energy-longevity" },
  { label: "Recovery & Performance", href: "/treatments/recovery-performance" },
  { label: "Cognitive Wellness", href: "/treatments/cognitive-wellness" },
  { label: "Overall Optimization", href: "/treatments/overall-optimization" },
  { label: "View All Treatments", href: "/treatments/all" },
];

export { pricingIncludes, programSteps, bundleSteps };
