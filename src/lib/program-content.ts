import { assetUrl } from "@/lib/asset";
import weightAsset from "@/assets/treatment-editorial-semaglutide.jpg.asset.json";
import advancedAsset from "@/assets/treatment-editorial-tirzepatide.jpg.asset.json";
import energyAsset from "@/assets/treatment-editorial-nad.jpg.asset.json";
import recoveryAsset from "@/assets/treatment-editorial-sermorelin.jpg.asset.json";
import longevityAsset from "@/assets/treatment-editorial-longevity.jpg.asset.json";
import movementAsset from "@/assets/treatment-editorial-performance.jpg.asset.json";
import overallAsset from "@/assets/treatment-editorial-overall.jpg.asset.json";
import womensHormoneAsset from "@/assets/treatment-editorial-womens-hormone.jpg.asset.json";
import testosteroneAsset from "@/assets/treatment-editorial-mens-hormone.jpg.asset.json";
import enclomipheneAsset from "@/assets/treatment-editorial-enclomiphene.jpg.asset.json";
import glutathioneAsset from "@/assets/treatment-editorial-glutathione.jpg.asset.json";
import methyleneBlueAsset from "@/assets/treatment-editorial-methylene-blue.jpg.asset.json";

const weightImg = assetUrl(weightAsset);
const advancedImg = assetUrl(advancedAsset);
const energyImg = assetUrl(energyAsset);
const recoveryImg = assetUrl(recoveryAsset);
const longevityImg = assetUrl(longevityAsset);
const movementImg = assetUrl(movementAsset);
const clinicImg = assetUrl(overallAsset);
const coupleImg = assetUrl(overallAsset);
const philosophyImg = assetUrl(womensHormoneAsset);
const testosteroneImg = assetUrl(testosteroneAsset);
const enclomipheneImg = assetUrl(enclomipheneAsset);
const glutathioneImg = assetUrl(glutathioneAsset);
const methyleneBlueImg = assetUrl(methyleneBlueAsset);

export type Faq = { q: string; a: string };

export type ProgramPage = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  price: string;
  includes: string;
  image: string;
  overview: string[];
  benefits: { title: string; detail: string }[];
  howItWorks: { step: string; title: string; detail: string }[];
  whoMayBenefit: string[];
  faqs: Faq[];
  relatedPrograms: string[];
  relatedBundles: string[];
};

export type BundlePage = {
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  price: string;
  savings: string;
  therapies: string[];
  image: string;
  flagship?: boolean;
  overview: string[];
  included: { title: string; detail: string }[];
  synergy: string[];
  whoFor: string[];
  howItWorks: { step: string; title: string; detail: string }[];
  faqs: Faq[];
  testimonials: { quote: string; name: string; detail: string }[];
  relatedBundles: string[];
};

export const PRICING_DISCLAIMER =
  "Treatment is subject to clinical eligibility and jurisdictional availability. Medication is prescribed only when medically appropriate. Program details and medication availability are determined by your provider.";

export const PRICING_TAGLINE =
  "Physician-Led Care • U.S. Pharmacy Fulfillment • Home Delivery";

const sharedFaqs: Faq[] = [
  {
    q: "Do I need a live consultation?",
    a: "Not always. Provider evaluations may be completed asynchronously or through a live consultation depending on the treatment, your medical history, state requirements, and the provider’s clinical judgment. If a live consultation is needed, you’ll be given instructions for the next step.",
  },
  {
    q: "Do I need bloodwork?",
    a: "Most programs include baseline laboratory testing so your provider can establish an objective picture before recommending anything, with repeat testing to monitor your response over time.",
  },
  {
    q: "What does the monthly price include?",
    a: "One flat monthly price covers physician-led care, ongoing clinical oversight, and — if prescribed — medication dispensed by a U.S. pharmacy and delivered to your home.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes. Programs are month-to-month with no long-term commitment. You can cancel before your next billing date.",
  },
];

const standardSteps = (therapy: string) => [
  { step: "01", title: "Secure assessment", detail: "A confidential intake covering your history, medications, and goals." },
  { step: "02", title: "Diagnostics", detail: "Baseline laboratory testing to establish an objective starting point." },
  { step: "03", title: "Licensed provider review", detail: "Your evaluation may be completed asynchronously or through a live consultation when clinically appropriate or required." },
  { step: "04", title: "Treatment determination", detail: `If approved, your provider determines an individualized plan including ${therapy} when clinically appropriate.` },
  { step: "05", title: "Ongoing optimization", detail: "Regular check-ins, monitoring, and adjustments as your body responds." },
];

const eligibilityFaq: Faq = {
  q: "How is eligibility determined?",
  a: "Program eligibility and treatment recommendations are determined by a licensed medical provider after reviewing your assessment, medical history, current medications, goals, and laboratory results.",
};

export const programPages: ProgramPage[] = [
  {
    slug: "medical-weight-loss",
    name: "Semaglutide",
    eyebrow: "Medical Weight Loss",
    tagline: "Physician-Guided Weight Management",
    price: "179",
    includes: "Semaglutide when clinically appropriate",
    image: weightImg,
    overview: [
      "A physician-guided weight management program built around your metabolism, your history, and the life you actually live. Your provider begins with diagnostics, then designs an individualized plan spanning nutrition, movement, sleep, and clinical support.",
      "Where it is clinically appropriate, the program includes physician-guided semaglutide as one part of that broader plan. One flat monthly price of $179 covers your care, oversight, and — if prescribed — medication dispensed by a U.S. pharmacy and delivered to your home.",
    ],
    benefits: [
      { title: "Individualized weight care", detail: "Progress reviewed through body composition and metabolic markers, not just the scale." },
      { title: "Metabolic markers tracked", detail: "Fasting glucose, lipids, and inflammatory markers reviewed with your provider." },
      { title: "Support for appetite and energy", detail: "A calmer relationship with hunger, supported clinically and behaviorally." },
      { title: "Habits that outlast the program", detail: "Coaching designed so change holds as clinical support steps back." },
    ],
    howItWorks: standardSteps("semaglutide"),
    whoMayBenefit: [
      "Adults who have plateaued despite consistent lifestyle effort",
      "Those with metabolic markers their provider wants to improve",
      "Patients who want medical oversight rather than a self-directed approach",
      "Anyone seeking a structured, long-view path to healthy weight",
    ],
    faqs: [
      {
        q: "Is this program only about medication?",
        a: "No. The program is a comprehensive weight care plan. Physician-guided semaglutide may be included when clinically appropriate, but nutrition, movement, monitoring, and behavioral support are central to the plan.",
      },
      {
        q: "Will I definitely be prescribed medication?",
        a: "No. Prescriptions are never guaranteed. Your provider determines whether any medication is appropriate after reviewing your history, medications, and laboratory results.",
      },
      ...sharedFaqs,
    ],
    relatedPrograms: ["advanced-weight-loss", "nad-plus"],
    relatedBundles: ["metabolic-bundle", "metabolic-plus"],
  },
  {
    slug: "advanced-weight-loss",
    name: "Tirzepatide",
    eyebrow: "Medical Weight Loss",
    tagline: "Physician-Guided Weight Management",
    price: "249",
    includes: "Tirzepatide when clinically appropriate",
    image: advancedImg,
    overview: [
      "A deeper clinical framework for weight management, with expanded diagnostics, closer monitoring, and a more gradual, carefully reviewed approach to dosing.",
      "Where it is clinically appropriate, the program includes physician-guided tirzepatide within a broader plan. One flat monthly price of $249 covers care, oversight, and — if prescribed — medication dispensed by a U.S. pharmacy and delivered to your home.",
    ],
    benefits: [
      { title: "Expanded diagnostics", detail: "A deeper baseline panel with defined repeat testing throughout the program." },
      { title: "Close clinical monitoring", detail: "Structured reviews so the plan stays conservative and responsive." },
      { title: "Lean mass considered", detail: "Protein, resistance training, and recovery planned from day one." },
      { title: "One flat monthly price", detail: "No dosage tiers, no formulation upcharges, no surprise pricing." },
    ],
    howItWorks: standardSteps("tirzepatide"),
    whoMayBenefit: [
      "Patients who have plateaued on a foundational weight program",
      "Those with more complex metabolic histories",
      "Adults who want closely supervised weight care",
      "Anyone seeking a longer-view, medically monitored approach",
    ],
    faqs: [
      {
        q: "How is this different from the Semaglutide program?",
        a: "The clinical framework is deeper: expanded diagnostics, closer monitoring, and a different medication pathway when clinically appropriate. Your provider will recommend the pathway that fits your history.",
      },
      eligibilityFaq,
      ...sharedFaqs,
    ],
    relatedPrograms: ["medical-weight-loss", "nad-plus"],
    relatedBundles: ["metabolic-plus", "metabolic-bundle"],
  },
  {
    slug: "testosterone-optimization",
    name: "Men's Hormone Health",
    eyebrow: "Hormone Health",
    tagline: "Personalized Hormone Optimization",
    price: "220",
    includes: "Physician-guided hormone therapy when clinically appropriate",
    image: testosteroneImg,
    overview: [
      "Physician-led hormone care for men who want steadier energy, strength, and focus — grounded in laboratory testing rather than guesswork.",
      "Your provider reviews a full hormone and metabolic panel, then builds an individualized plan with structured monitoring. One flat monthly price of $220 covers the program of care and, when prescribed, medication from a U.S. pharmacy.",
    ],
    benefits: [
      { title: "Lab-based decisions", detail: "Hormone, metabolic, and safety markers reviewed before anything is recommended." },
      { title: "Energy and strength focus", detail: "A plan tuned to how you feel through the day, not a single number." },
      { title: "Structured monitoring", detail: "Repeat testing and provider review at defined intervals." },
      { title: "One flat monthly price", detail: "One transparent monthly price with no tiers." },
    ],
    howItWorks: standardSteps("physician-guided hormone therapy"),
    whoMayBenefit: [
      "Men noticing persistent fatigue, low drive, or reduced strength",
      "Those whose laboratory markers warrant clinical review",
      "Patients who want monitored hormone care rather than self-direction",
      "Adults investing in long-term vitality",
    ],
    faqs: [
      {
        q: "Is therapy guaranteed?",
        a: "No. Hormone therapy is prescribed only when clinically appropriate, based on your laboratory results, history, and provider judgment.",
      },
      eligibilityFaq,
      ...sharedFaqs,
    ],
    relatedPrograms: ["enclomiphene", "nad-plus"],
    relatedBundles: ["mens-vitality", "mens-performance-recovery"],
  },
  {
    slug: "womens-hrt",
    name: "Women's Hormone Health",
    eyebrow: "Hormone Health",
    tagline: "Personalized HRT Program",
    price: "220",
    includes: "Individualized hormone therapy when clinically appropriate",
    image: philosophyImg,
    overview: [
      "Considered hormone care for perimenopause, menopause, and beyond — individualized to your symptoms, your history, and your goals.",
      "Your provider reviews your intake and laboratory results, then designs a plan with clear monitoring. One flat monthly price of $220 covers the program of care and, when prescribed, medication from a U.S. pharmacy.",
    ],
    benefits: [
      { title: "Symptom-led, lab-informed", detail: "Sleep, mood, temperature regulation, and energy tracked alongside markers." },
      { title: "Individualized plans", detail: "Therapy shaped to your stage and your priorities, reviewed over time." },
      { title: "Considered provider review", detail: "Your history, symptoms, and goals are reviewed with care over time." },
      { title: "One flat monthly price", detail: "A single price with no formulation-based pricing tiers." },
    ],
    howItWorks: standardSteps("individualized hormone therapy"),
    whoMayBenefit: [
      "Women in perimenopause or menopause seeking clinical guidance",
      "Those with sleep, mood, or temperature-regulation changes",
      "Patients who want continuity with one provider",
      "Adults planning for long-term bone, heart, and cognitive wellness",
    ],
    faqs: [
      {
        q: "How is my plan chosen?",
        a: "Your provider recommends a plan based on your symptoms, history, and laboratory results. Your monthly price remains the same regardless of the plan recommended.",
      },
      eligibilityFaq,
      ...sharedFaqs,
    ],
    relatedPrograms: ["nad-plus", "sermorelin"],
    relatedBundles: ["womens-vitality", "longevity-plus"],
  },
  {
    slug: "enclomiphene",
    name: "Enclomiphene",
    eyebrow: "Hormone Health",
    tagline: "Physician-Guided Hormone Support",
    price: "209",
    includes: "Enclomiphene when clinically appropriate",
    image: enclomipheneImg,
    overview: [
      "A monitored hormone pathway for men, evaluated by a licensed provider and grounded in laboratory testing.",
      "Where clinically appropriate, enclomiphene is included within a broader plan of care. One flat monthly price of $209 covers oversight, monitoring, and medication from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "An alternative pathway", detail: "A different approach to hormone support, reviewed against your goals." },
      { title: "Laboratory monitoring", detail: "Defined testing intervals so decisions stay objective." },
      { title: "Clear clinical guidance", detail: "Trade-offs are reviewed carefully before anything begins." },
      { title: "One flat monthly price", detail: "A single transparent price with no dosage-based tiers." },
    ],
    howItWorks: standardSteps("enclomiphene"),
    whoMayBenefit: [
      "Men exploring hormone support options with a provider",
      "Those who want a monitored, conservative pathway",
      "Patients prioritizing laboratory-guided decisions",
      "Adults seeking continuity of care over time",
    ],
    faqs: [eligibilityFaq, ...sharedFaqs],
    relatedPrograms: ["testosterone-optimization", "nad-plus"],
    relatedBundles: ["mens-vitality", "mens-performance-recovery"],
  },
  {
    slug: "nad-plus",
    name: "NAD+ Longevity",
    eyebrow: "Longevity & Wellness",
    tagline: "Core Longevity Program",
    price: "229",
    includes: "NAD+ when clinically appropriate",
    image: energyImg,
    overview: [
      "Our core longevity program supports the cellular machinery behind daily energy, focus, and healthy aging.",
      "Where clinically appropriate, NAD+ is included within a plan built around sleep, movement, and structured monitoring. One flat monthly price of $229 covers care, oversight, and medication from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "Daily energy support", detail: "A plan focused on how consistent your energy feels across the week." },
      { title: "Focus and clarity", detail: "Cognitive wellness considered alongside sleep and recovery." },
      { title: "Healthy aging orientation", detail: "Decisions made with the next decade in view." },
      { title: "One flat monthly price", detail: "No dosage tiers and no add-on pricing." },
    ],
    howItWorks: standardSteps("NAD+"),
    whoMayBenefit: [
      "Adults whose energy has flattened despite good habits",
      "Those focused on longevity-oriented wellness",
      "Patients wanting a monitored, physician-guided approach",
      "Anyone building a long-term wellness foundation",
    ],
    faqs: [eligibilityFaq, ...sharedFaqs],
    relatedPrograms: ["sermorelin", "longevity-plus"],
    relatedBundles: ["longevity-plus", "metabolic-bundle"],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    eyebrow: "Longevity & Wellness",
    tagline: "Physician-Guided Longevity Option",
    price: "249",
    includes: "Sermorelin when clinically appropriate",
    image: recoveryImg,
    overview: [
      "Sleep, recovery, and resilience supported with sermorelin when clinically appropriate — within a plan that treats rest as clinical infrastructure.",
      "One flat monthly price of $249 covers physician oversight, monitoring, and medication dispensed by a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "Recovery-focused wellness", detail: "Sleep depth and daily recovery reviewed with your provider." },
      { title: "Resilience under load", detail: "Training, travel, and work demands accounted for in the plan." },
      { title: "Monitored and conservative", detail: "Defined testing intervals with measured adjustments." },
      { title: "One flat monthly price", detail: "A single transparent price with no tiers." },
    ],
    howItWorks: standardSteps("sermorelin"),
    whoMayBenefit: [
      "Adults whose sleep quality has declined",
      "Those recovering more slowly from training or travel",
      "Patients focused on healthy aging and resilience",
      "Anyone wanting recovery treated clinically, not casually",
    ],
    faqs: [eligibilityFaq, ...sharedFaqs],
    relatedPrograms: ["nad-plus", "longevity-plus"],
    relatedBundles: ["longevity-plus", "mens-performance-recovery"],
  },
  {
    slug: "longevity-plus",
    name: "Longevity Plus",
    eyebrow: "Longevity & Wellness",
    tagline: "Advanced Longevity Program",
    price: "365",
    includes: "An advanced longevity protocol when clinically appropriate",
    image: longevityImg,
    overview: [
      "Longevity Plus is our advanced longevity program, designed for patients who want a broader approach to energy, recovery, cellular wellness, and long-term health.",
      "Your provider builds one integrated protocol with expanded diagnostics and a closer review cadence. One flat monthly price of $365 covers the full program of care, with medication from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "A broader protocol", detail: "Energy, recovery, and cellular wellness addressed within one plan." },
      { title: "Expanded diagnostics", detail: "A wider panel with defined repeat testing." },
      { title: "Closer review cadence", detail: "More frequent provider check-ins as the picture evolves." },
      { title: "One flat monthly price", detail: "Everything included at a single price — no tiers, no add-ons." },
    ],
    howItWorks: standardSteps("an advanced longevity protocol"),
    whoMayBenefit: [
      "Adults taking a comprehensive approach to healthy aging",
      "Those seeking energy, recovery, and cellular wellness in one plan",
      "Patients who prefer a single coordinated protocol",
      "Anyone wanting Nautic Health's most advanced longevity program",
    ],
    faqs: [eligibilityFaq, ...sharedFaqs],
    relatedPrograms: ["nad-plus", "sermorelin"],
    relatedBundles: ["longevity-plus", "womens-vitality"],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    eyebrow: "Longevity & Wellness",
    tagline: "Longevity & Wellness Support",
    price: "99",
    includes: "Glutathione when clinically appropriate",
    image: glutathioneImg,
    overview: [
      "Physician-guided wellness support for patients interested in recovery, antioxidant support, cellular wellness, and longevity-focused care.",
      "Your provider reviews your history and goals before determining whether the program is appropriate. One flat monthly price of $99 covers oversight, monitoring, and fulfillment from a U.S. pharmacy when prescribed.",
    ],
    benefits: [
      { title: "Cellular wellness support", detail: "A wellness-oriented plan reviewed by a licensed provider." },
      { title: "Antioxidant support", detail: "Considered as part of a broader longevity approach." },
      { title: "Recovery-focused wellness", detail: "Reviewed alongside sleep, training load, and daily demands." },
      { title: "Complements other programs", detail: "Can complement other eligible Nautic Health programs." },
    ],
    howItWorks: standardSteps("glutathione"),
    whoMayBenefit: [
      "Cellular wellness support",
      "Antioxidant support",
      "Recovery-focused wellness",
      "Longevity-focused care",
      "Patients whose provider views it as a complement to another eligible program",
    ],
    faqs: [
      {
        q: "Can Glutathione be combined with another program?",
        a: "It can complement other eligible Nautic Health programs when your provider determines that is appropriate for you.",
      },
      eligibilityFaq,
      ...sharedFaqs,
    ],
    relatedPrograms: ["nad-plus", "methylene-blue"],
    relatedBundles: ["longevity-plus", "womens-vitality"],
  },
  {
    slug: "methylene-blue",
    name: "Methylene Blue",
    eyebrow: "Longevity & Wellness",
    tagline: "Cognitive & Longevity Support",
    price: "125",
    includes: "Methylene Blue when clinically appropriate",
    image: methyleneBlueImg,
    overview: [
      "A provider-evaluated wellness option for eligible patients interested in cognitive wellness, energy support, mental performance, and longevity-focused care.",
      "Methylene Blue requires medical evaluation and eligibility screening based on your medical history, current medications, individual goals, and provider determination. One flat monthly price of $125 covers the program of care when you are eligible.",
    ],
    benefits: [
      { title: "Cognitive wellness", detail: "Focus and mental performance considered within a broader plan." },
      { title: "Energy-focused wellness", detail: "Daily energy reviewed alongside sleep and recovery." },
      { title: "Cellular wellness", detail: "Approached as part of longevity-focused care." },
      { title: "Careful screening", detail: "Eligibility reviewed closely, including current medications." },
    ],
    howItWorks: standardSteps("Methylene Blue"),
    whoMayBenefit: [
      "Cognitive wellness",
      "Focus and mental performance support",
      "Energy-focused wellness",
      "Cellular wellness",
      "Longevity-focused care",
    ],
    faqs: [
      {
        q: "Who is eligible for Methylene Blue?",
        a: "Methylene Blue requires medical evaluation and eligibility screening. A licensed provider reviews your medical history, current medications, and individual goals before determining whether it is appropriate for you.",
      },
      eligibilityFaq,
      ...sharedFaqs,
    ],
    relatedPrograms: ["nad-plus", "glutathione"],
    relatedBundles: ["longevity-plus", "mens-vitality"],
  },
];

const bundleSteps = [
  { step: "01", title: "Secure assessment", detail: "One intake covering every goal in the program." },
  { step: "02", title: "Combined diagnostics", detail: "A single panel across metabolic, hormonal, and recovery markers." },
  { step: "03", title: "Licensed provider review", detail: "Your evaluation may be completed asynchronously or through a live consultation when clinically appropriate or required." },
  { step: "04", title: "Treatment determination", detail: "If approved, your provider designs one coordinated protocol with therapies sequenced deliberately." },
  { step: "05", title: "Monthly optimization", detail: "Review, re-test, and refine as the picture changes." },
];

const bundleFaqs = (name: string): Faq[] => [
  {
    q: `What does the ${name} price include?`,
    a: "One flat monthly price covers the full combined program: physician oversight, combined diagnostics, monitoring, and medication from a U.S. pharmacy when prescribed.",
  },
  eligibilityFaq,
  ...sharedFaqs,
];

const bundleCatalogPages: BundlePage[] = [
  {
    slug: "metabolic-bundle",
    name: "Metabolic Bundle",
    eyebrow: "Weight Management + Longevity",
    tagline: "Physician-guided weight management paired with core longevity support in one simple monthly program.",
    price: "310",
    savings: "One flat monthly price covering both programs under a single plan of care.",
    therapies: ["Semaglutide", "NAD+"],
    image: movementImg,
    overview: [
      "Weight and energy are the same conversation. Metabolic Bundle pairs physician-guided weight management with NAD+ longevity support in one plan, with a single intake, one care team, and one review cadence.",
      "Where clinically appropriate, semaglutide and NAD+ are included as components of a broader metabolic plan. Medication is dispensed by a U.S. pharmacy and delivered to your home only if prescribed.",
    ],
    included: [
      { title: "Weight management care", detail: "Physician-guided weight care, including semaglutide when clinically appropriate." },
      { title: "NAD+ longevity support", detail: "Cellular energy support when clinically appropriate." },
      { title: "Combined diagnostic panel", detail: "One blood draw covering metabolic and energy markers." },
      { title: "Unified care plan", detail: "A single provider-designed plan rather than two competing protocols." },
      { title: "Monthly provider review", detail: "Continuous oversight with adjustments as you respond." },
    ],
    synergy: [
      "Metabolic change is energetically expensive; supporting cellular energy makes the plan easier to sustain.",
      "Shared diagnostics mean fewer draws and a clearer, more complete picture.",
      "One provider tuning both protocols avoids the conflicts of parallel plans.",
    ],
    whoFor: [
      "Patients who feel both heavy and depleted",
      "Anyone whose fatigue has undermined previous weight efforts",
      "Those wanting broad metabolic support in one plan",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Metabolic Bundle"),
    testimonials: [
      { quote: "The energy piece is what made the weight side finally feel manageable.", name: "Marissa T.", detail: "Metabolic Bundle, 7 months" },
      { quote: "One intake, one team, one plan. It stopped feeling like a project.", name: "Daniel R.", detail: "Metabolic Bundle, 5 months" },
    ],
    relatedBundles: ["metabolic-plus", "longevity-plus"],
  },
  {
    slug: "metabolic-plus",
    name: "Metabolic Plus",
    eyebrow: "Premium Weight Management + Longevity",
    tagline: "Advanced physician-guided weight management paired with core longevity support in one plan.",
    price: "380",
    savings: "One flat monthly price covering both programs under a single plan of care.",
    therapies: ["Tirzepatide", "NAD+"],
    image: clinicImg,
    flagship: true,
    overview: [
      "Metabolic Plus pairs an advanced weight management pathway with NAD+ longevity support, under one physician-designed plan and one review cadence.",
      "Where clinically appropriate, tirzepatide and NAD+ are included as components of that plan. Prescriptions are never guaranteed and are issued only when medically appropriate.",
    ],
    included: [
      { title: "Advanced weight management", detail: "Physician-guided weight care, including tirzepatide when clinically appropriate." },
      { title: "NAD+ longevity support", detail: "Cellular energy support when clinically appropriate." },
      { title: "Expanded diagnostics", detail: "A deeper panel with defined repeat testing." },
      { title: "Unified care plan", detail: "One integrated plan rather than two parallel protocols." },
      { title: "Monthly provider review", detail: "Close monitoring with conservative adjustments." },
    ],
    synergy: [
      "Advanced protocols demand more from your metabolism; energy support helps you tolerate the work.",
      "Frequent testing catches changes early and keeps dosing conservative.",
      "Lean-mass considerations are planned from day one rather than corrected later.",
    ],
    whoFor: [
      "Patients who have plateaued on a foundational program",
      "Those with complex metabolic histories",
      "Anyone wanting a closely monitored weight pathway with energy support",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Metabolic Plus"),
    testimonials: [
      { quote: "The monitoring is the difference. Nothing felt improvised.", name: "Priya N.", detail: "Metabolic Plus, 9 months" },
      { quote: "Having one physician hold the whole picture changed how I approach this.", name: "Chris B.", detail: "Metabolic Plus, 6 months" },
    ],
    relatedBundles: ["metabolic-bundle", "longevity-plus"],
  },
  {
    slug: "mens-vitality",
    name: "Men's Vitality",
    eyebrow: "Hormone Health + Longevity",
    tagline: "A physician-guided program combining personalized men's hormone support with NAD+ longevity support.",
    price: "350",
    savings: "One flat monthly price covering both programs under a single plan of care.",
    therapies: ["Men's HRT", "NAD+"],
    image: coupleImg,
    overview: [
      "Men's Vitality brings hormone care and cellular energy under one physician-designed plan, for patients who want steadier energy, strength, and focus.",
      "Where clinically appropriate, hormone therapy and NAD+ are included within a plan built around sleep, movement, and structured monitoring.",
    ],
    included: [
      { title: "Men's hormone care", detail: "Physician-led hormone care with laboratory monitoring." },
      { title: "NAD+ longevity support", detail: "Cellular energy support when clinically appropriate." },
      { title: "Combined diagnostics", detail: "One panel spanning hormonal and metabolic markers." },
      { title: "Unified care plan", detail: "A single coordinated protocol rather than two." },
      { title: "Monthly provider review", detail: "Adjustments as your results evolve." },
    ],
    synergy: [
      "Hormone optimization is easier to sustain when daily energy is supported.",
      "Shared diagnostics give your provider one complete picture.",
      "A single provider prevents protocols from working against each other.",
    ],
    whoFor: [
      "Men addressing both hormone health and daily energy",
      "Patients investing seriously in healthy aging",
      "Anyone wanting one coordinated plan instead of two",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Men's Vitality"),
    testimonials: [
      { quote: "Energy and focus improved together. That was the point.", name: "Ethan K.", detail: "Men's Vitality, 6 months" },
      { quote: "One plan, one provider, no guesswork.", name: "Marcus D.", detail: "Men's Vitality, 8 months" },
    ],
    relatedBundles: ["mens-performance-recovery", "longevity-plus"],
  },
  {
    slug: "womens-vitality",
    name: "Women's Vitality",
    eyebrow: "Hormone Health + Longevity",
    tagline: "A physician-guided program combining personalized women's hormone support with NAD+ longevity support.",
    price: "350",
    savings: "One flat monthly price covering both programs under a single plan of care.",
    therapies: ["Women's HRT", "NAD+"],
    image: philosophyImg,
    overview: [
      "Women's Vitality combines individualized hormone care with NAD+ longevity support, coordinated by one provider under a single plan.",
      "Where clinically appropriate, hormone therapy and NAD+ are included within a plan built around sleep, energy, and structured monitoring.",
    ],
    included: [
      { title: "Women's hormone care", detail: "Individualized hormone therapy when clinically appropriate." },
      { title: "NAD+ longevity support", detail: "Cellular energy support when clinically appropriate." },
      { title: "Combined diagnostics", detail: "One panel spanning hormonal and metabolic markers." },
      { title: "Unified care plan", detail: "A single coordinated protocol rather than two." },
      { title: "Monthly provider review", detail: "Continuity with one provider who follows your case." },
    ],
    synergy: [
      "Hormone changes and energy changes rarely arrive separately.",
      "One panel and one provider make the picture clearer.",
      "Sleep improvements amplify every other element of the plan.",
    ],
    whoFor: [
      "Women in perimenopause or menopause who also feel depleted",
      "Patients focused on long-term wellness",
      "Anyone wanting hormone and energy care in one plan",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Women's Vitality"),
    testimonials: [
      { quote: "Sleep first, then everything else. It followed in that order.", name: "Sofia L.", detail: "Women's Vitality, 8 months" },
      { quote: "Being followed by one provider made all the difference.", name: "Renee A.", detail: "Women's Vitality, 5 months" },
    ],
    relatedBundles: ["longevity-plus", "metabolic-bundle"],
  },
  {
    slug: "mens-performance-recovery",
    name: "Men's Performance & Recovery",
    eyebrow: "Hormone Health + Recovery",
    tagline: "A physician-guided program designed around men's hormone health, performance, recovery, and longevity-focused wellness.",
    price: "370",
    savings: "One flat monthly price covering both programs under a single plan of care.",
    therapies: ["Men's HRT", "Sermorelin"],
    image: movementImg,
    overview: [
      "For men who train, travel, and carry real load, this program pairs hormone care with recovery-focused support under one coordinated plan.",
      "Where clinically appropriate, hormone therapy and sermorelin are included within a plan that treats sleep and recovery as clinical infrastructure.",
    ],
    included: [
      { title: "Men's hormone care", detail: "Physician-led hormone care with laboratory monitoring." },
      { title: "Sermorelin support", detail: "Recovery and healthy-aging support when clinically appropriate." },
      { title: "Combined diagnostics", detail: "One panel across hormonal and recovery markers." },
      { title: "Recovery protocols", detail: "Structured plans for sleep depth and load management." },
      { title: "Monthly provider review", detail: "Adjustments as training and schedule evolve." },
    ],
    synergy: [
      "Hormone optimization only shows up in performance if recovery keeps pace.",
      "Sleep quality is the multiplier on every other intervention.",
      "One provider sequences both protocols rather than stacking them.",
    ],
    whoFor: [
      "Men balancing training load with work and travel",
      "Patients recovering more slowly than they used to",
      "Anyone wanting performance and recovery addressed together",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Men's Performance & Recovery"),
    testimonials: [
      { quote: "Recovery caught up with the training. That changed everything.", name: "Jonah P.", detail: "Men's Performance & Recovery, 7 months" },
      { quote: "The sleep improvements were the first real signal.", name: "Alex M.", detail: "Men's Performance & Recovery, 4 months" },
    ],
    relatedBundles: ["mens-vitality", "longevity-plus"],
  },
  {
    slug: "longevity-plus",
    name: "Longevity Plus",
    eyebrow: "Hormone Health + Longevity",
    tagline: "Core longevity support and recovery-focused care combined in one physician-guided plan.",
    price: "380",
    savings: "One flat monthly price covering both programs under a single plan of care.",
    therapies: ["NAD+", "Sermorelin"],
    image: longevityImg,
    overview: [
      "Longevity Plus brings cellular energy and recovery under one physician-designed plan, for patients who want to feel like themselves again across sleep, energy, and resilience.",
      "Where clinically appropriate, NAD+ and sermorelin are included within a plan built around sleep, movement, and structured monitoring.",
    ],
    included: [
      { title: "NAD+ longevity support", detail: "Cellular energy support when clinically appropriate." },
      { title: "Sermorelin support", detail: "Recovery and healthy-aging support when clinically appropriate." },
      { title: "Combined diagnostics", detail: "One panel spanning metabolic and recovery markers." },
      { title: "Sleep and recovery protocols", detail: "Structured plans for depth of sleep and load management." },
      { title: "Monthly provider review", detail: "Adjustments as your results and schedule evolve." },
    ],
    synergy: [
      "Recovery is energy-dependent; cellular support underwrites the recovery work.",
      "Sleep improvements amplify every other element of the plan.",
      "A single provider prevents recovery and energy protocols from working against each other.",
    ],
    whoFor: [
      "Adults in midlife noticing subtle but persistent changes",
      "Patients investing seriously in healthy aging",
      "Anyone whose energy and recovery both feel compromised",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Longevity Plus"),
    testimonials: [
      { quote: "My sleep changed first. Everything else followed from that.", name: "Alex M.", detail: "Longevity Plus, 4 months" },
      { quote: "It feels like maintenance for the next decade, not a quick fix.", name: "Sofia L.", detail: "Longevity Plus, 8 months" },
    ],
    relatedBundles: ["longevity-complete", "total-optimization"],
  },
  {
    slug: "longevity-complete",
    name: "Longevity Complete",
    eyebrow: "Premium Longevity + Wellness",
    tagline: "Comprehensive longevity, recovery, and cellular wellness support.",
    price: "460",
    savings: "One fixed monthly price covering the complete coordinated program of care.",
    therapies: ["NAD+", "Sermorelin", "Glutathione"],
    image: longevityImg,
    overview: [
      "Longevity Complete combines cellular energy, recovery, and antioxidant wellness support under one physician-guided plan for patients seeking a broader approach to healthy aging.",
      "Where clinically appropriate, NAD+, Sermorelin, and Glutathione are coordinated within a plan informed by your goals, medical history, diagnostics, and response over time.",
    ],
    included: [
      { title: "NAD+ longevity support", detail: "Cellular energy and longevity-focused wellness support when clinically appropriate." },
      { title: "Sermorelin support", detail: "Recovery and healthy-aging support when clinically appropriate." },
      { title: "Glutathione support", detail: "Antioxidant and cellular wellness support when clinically appropriate." },
      { title: "Combined diagnostics", detail: "One coordinated clinical view across energy, recovery, and wellness markers." },
      { title: "Ongoing physician oversight", detail: "Regular review and thoughtful adjustments based on your response." },
    ],
    synergy: [
      "Cellular energy, recovery, and antioxidant support are considered together rather than as separate goals.",
      "One provider coordinates all three components against a shared diagnostic picture.",
      "Ongoing review keeps the program aligned with your response and medical appropriateness.",
    ],
    whoFor: [
      "Adults seeking a more complete longevity-focused wellness program",
      "Patients interested in coordinated energy, recovery, and cellular wellness support",
      "Those who prefer one physician-guided plan rather than separate programs",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Longevity Complete"),
    testimonials: [
      { quote: "The coordinated approach made the whole program feel considered and manageable.", name: "Jordan C.", detail: "Longevity Complete, 6 months" },
      { quote: "I wanted one plan focused on energy, recovery, and long-term wellness.", name: "Taylor R.", detail: "Longevity Complete, 5 months" },
    ],
    relatedBundles: ["longevity-plus", "total-optimization"],
  },
  {
    slug: "total-optimization",
    name: "Total Optimization",
    eyebrow: "Complete Optimization",
    tagline: "Our most comprehensive physician-guided program.",
    price: "660",
    savings: "One fixed monthly price covering the complete coordinated program of care.",
    therapies: ["Tirzepatide", "NAD+", "Sermorelin", "Glutathione"],
    image: clinicImg,
    flagship: true,
    overview: [
      "Total Optimization is Nautic Health's highest-level program, bringing physician-guided weight-management care together with longevity, recovery, energy, antioxidant, and cellular wellness support.",
      "The defined program combines Tirzepatide, NAD+, Sermorelin, and Glutathione when each therapy is clinically appropriate.",
    ],
    included: [
      { title: "Tirzepatide weight-management care", detail: "Physician-guided weight-management support when clinically appropriate." },
      { title: "NAD+ longevity support", detail: "Cellular energy and longevity-focused wellness support when clinically appropriate." },
      { title: "Sermorelin recovery support", detail: "Recovery and healthy-aging support when clinically appropriate." },
      { title: "Glutathione support", detail: "Antioxidant and cellular wellness support when clinically appropriate." },
      { title: "Comprehensive oversight", detail: "One physician-guided plan with coordinated diagnostics and ongoing review." },
    ],
    synergy: [
      "Weight-management care distinguishes this program from Longevity Complete while preserving comprehensive longevity support.",
      "Energy, recovery, and cellular wellness are coordinated around one clinical picture.",
      "One provider oversees the complete treatment set and adjusts the plan based on your response.",
    ],
    whoFor: [
      "Eligible adults seeking weight-management care alongside comprehensive longevity support",
      "Patients interested in coordinated energy, recovery, and cellular wellness support",
      "Those who want Nautic Health's highest-level physician-guided program",
    ],
    howItWorks: bundleSteps,
    faqs: bundleFaqs("Total Optimization"),
    testimonials: [
      { quote: "Having one team coordinate every part of the plan gave me clarity and confidence.", name: "Morgan L.", detail: "Total Optimization, 7 months" },
      { quote: "The value was in seeing weight, energy, and recovery as one complete picture.", name: "Casey N.", detail: "Total Optimization, 6 months" },
    ],
    relatedBundles: ["longevity-complete", "metabolic-plus"],
  },
];

const bundleOrder = [
  "metabolic-bundle",
  "metabolic-plus",
  "longevity-plus",
  "mens-vitality",
  "womens-vitality",
  "mens-performance-recovery",
  "longevity-complete",
  "total-optimization",
];

export const bundlePages = [...bundleCatalogPages].sort(
  (a, b) => bundleOrder.indexOf(a.slug) - bundleOrder.indexOf(b.slug),
);

export const getProgram = (slug: string): ProgramPage | undefined =>
  programPages.find((p) => p.slug === slug);

export const getBundle = (slug: string): BundlePage | undefined =>
  bundlePages.find((b) => b.slug === slug);
