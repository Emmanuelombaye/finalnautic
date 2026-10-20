import { assetUrl } from "@/lib/asset";
import weightAsset from "@/assets/treatment-editorial-semaglutide.jpg.asset.json";
import hormoneAsset from "@/assets/treatment-editorial-womens-hormone.jpg.asset.json";
import energyAsset from "@/assets/treatment-editorial-nad.jpg.asset.json";
import recoveryAsset from "@/assets/treatment-editorial-performance.jpg.asset.json";
import cognitiveAsset from "@/assets/treatment-editorial-methylene-blue.jpg.asset.json";
import optimizationAsset from "@/assets/treatment-editorial-overall.jpg.asset.json";

const weightImg = assetUrl(weightAsset);
const hormoneImg = assetUrl(hormoneAsset);
const energyImg = assetUrl(energyAsset);
const recoveryImg = assetUrl(recoveryAsset);
const cognitiveImg = assetUrl(cognitiveAsset);
const optimizationImg = assetUrl(optimizationAsset);

export const TRUST_LINE =
  "Physician-guided care • Licensed provider review • Personalized treatment decisions";

export type GoalTreatment = {
  name: string;
  slug: string;
  price: string;
  description: string;
  trust: "Physician-Guided" | "Provider-Evaluated";
  note?: string;
};

export type TreatmentGoal = {
  slug: string;
  name: string;
  short: string;
  cta: string;
  image: string;
  imageAlt: string;
  intro: string;
  treatments: GoalTreatment[];
  additional?: string;
  bundleLinks?: { label: string; slug: string; price: string; description: string }[];
  comprehensive?: string;
};

const semaglutide: GoalTreatment = {
  name: "Semaglutide",
  slug: "medical-weight-loss",
  price: "179",
  description:
    "A physician-guided weight-management option prescribed only when clinically appropriate after provider review.",
  trust: "Physician-Guided",
};

const tirzepatide: GoalTreatment = {
  name: "Tirzepatide",
  slug: "advanced-weight-loss",
  price: "249",
  description:
    "An advanced physician-guided weight-management option designed around your individual goals and medical history.",
  trust: "Physician-Guided",
};

const nad: GoalTreatment = {
  name: "NAD+",
  slug: "nad-plus",
  price: "229",
  description:
    "Longevity-focused wellness support for individuals interested in energy and cellular wellness.",
  trust: "Physician-Guided",
};

const sermorelin: GoalTreatment = {
  name: "Sermorelin",
  slug: "sermorelin",
  price: "249",
  description:
    "A physician-guided wellness option for individuals interested in recovery, performance, and longevity-focused care.",
  trust: "Physician-Guided",
};

const glutathione: GoalTreatment = {
  name: "Glutathione",
  slug: "glutathione",
  price: "99",
  description:
    "Antioxidant-focused wellness support used alongside longevity and recovery-oriented care.",
  trust: "Physician-Guided",
};

const methyleneBlue: GoalTreatment = {
  name: "Methylene Blue",
  slug: "methylene-blue",
  price: "125",
  description:
    "A wellness option for individuals interested in focus and cognitive wellness.",
  trust: "Provider-Evaluated",
  note: "Requires provider evaluation and eligibility screening.",
};

export const treatmentGoals: TreatmentGoal[] = [
  {
    slug: "weight-management",
    name: "Weight Management",
    short:
      "Explore physician-guided options designed around personalized weight-management goals.",
    cta: "Explore Weight Management",
    image: weightImg,
    imageAlt: "Woman preparing a fresh meal in a naturally lit kitchen",
    intro:
      "Treatment options that may be relevant to weight-management goals. Medical appropriateness is determined by a licensed provider.",
    treatments: [semaglutide, tirzepatide],
  },
  {
    slug: "hormone-health",
    name: "Hormone Health",
    short:
      "Personalized physician-guided options for individuals interested in hormone health, vitality, and overall wellness.",
    cta: "Explore Hormone Health",
    image: hormoneImg,
    imageAlt: "Woman practicing gentle movement beside a sunlit window",
    intro:
      "Hormone-related treatment options for men and women. Your provider determines which, if any, is appropriate for you.",
    treatments: [
      {
        name: "Men's Hormone Health",
        slug: "testosterone-optimization",
        price: "220",
        description:
          "Personalized hormone care for men, guided by provider review and appropriate laboratory testing.",
        trust: "Physician-Guided",
      },
      {
        name: "Women's Hormone Health",
        slug: "womens-hrt",
        price: "220",
        description:
          "Individualized hormone care for women focused on health, vitality, and overall well-being.",
        trust: "Physician-Guided",
      },
      {
        name: "Enclomiphene",
        slug: "enclomiphene",
        price: "209",
        description:
          "A physician-guided hormone support option for men when clinically appropriate.",
        trust: "Provider-Evaluated",
      },
    ],
  },
  {
    slug: "energy-longevity",
    name: "Energy & Longevity",
    short:
      "Explore wellness options focused on energy, cellular wellness, healthy aging, and longevity-focused care.",
    cta: "Explore Energy & Longevity",
    image: energyImg,
    imageAlt: "Active older woman taking a morning walk through a green park",
    intro:
      "Longevity-oriented wellness options. These are wellness-focused therapies, not treatments for disease.",
    treatments: [nad, glutathione, sermorelin],
  },
  {
    slug: "recovery-performance",
    name: "Recovery & Performance",
    short:
      "Physician-guided wellness options for individuals focused on recovery, performance, and maintaining an active lifestyle.",
    cta: "Explore Recovery & Performance",
    image: recoveryImg,
    imageAlt: "Man practicing mobility work in a naturally lit studio",
    intro:
      "Wellness options that may be relevant to recovery and an active lifestyle.",
    treatments: [sermorelin, glutathione],
    additional:
      "NAD+ may also be relevant as an additional option for individuals focused on energy and recovery.",
  },
  {
    slug: "cognitive-wellness",
    name: "Cognitive Wellness",
    short:
      "Explore provider-evaluated options for individuals interested in focus, mental performance, energy, and cognitive wellness.",
    cta: "Explore Cognitive Wellness",
    image: cognitiveImg,
    imageAlt: "Woman writing with focus at a desk beside a window",
    intro:
      "Wellness options related to focus and mental performance. These are not treatments for neurological or psychiatric conditions.",
    treatments: [methyleneBlue, nad],
  },
  {
    slug: "overall-optimization",
    name: "Overall Optimization",
    short:
      "Explore more comprehensive physician-guided approaches for individuals with multiple wellness goals.",
    cta: "Explore Overall Optimization",
    image: optimizationImg,
    imageAlt: "Active couple enjoying a relaxed walk along a coastal garden path",
    intro:
      "For individuals interested in more than one area of wellness, Nautic Health offers more comprehensive physician-guided programs that combine multiple therapies under one monthly price.",
    treatments: [],
    comprehensive:
      "Rather than choosing a single therapy, individuals with multiple wellness goals can explore our longevity-focused and comprehensive programs. A licensed provider determines which therapies, if any, are appropriate.",
    bundleLinks: [
      {
        label: "Longevity Plus",
        slug: "longevity-plus",
        price: "380",
        description: "Longevity-focused program combining core longevity and recovery support.",
      },
      {
        label: "Longevity Complete",
        slug: "longevity-complete",
        price: "460",
        description:
          "A comprehensive longevity, recovery, and cellular wellness program.",
      },
      {
        label: "Total Optimization",
        slug: "total-optimization",
        price: "660",
        description:
          "Our most comprehensive program, combining weight management with longevity and recovery support.",
      },
    ],
  },
];

export function getGoal(slug: string) {
  return treatmentGoals.find((g) => g.slug === slug);
}
