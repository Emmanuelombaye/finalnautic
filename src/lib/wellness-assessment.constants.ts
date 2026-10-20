export type GoalSlug =
  | "weight-management"
  | "hormone-health"
  | "energy-longevity"
  | "recovery-performance"
  | "overall-optimization";

export const CARE_AREA_LABELS: Record<GoalSlug, string> = {
  "weight-management": "Weight Loss & Metabolic Health",
  "hormone-health": "Hormone Optimization",
  "energy-longevity": "Longevity & Energy",
  "recovery-performance": "Recovery & Performance",
  "overall-optimization": "Total Optimization",
};

export type DepthSlug = "targeted" | "comprehensive" | "unsure";

export type Option = {
  label: string;
  detail?: string;
  scores?: Partial<Record<GoalSlug, number>>;
  depth?: DepthSlug;
};

export type Question = {
  id: string;
  eyebrow: string;
  prompt: string;
  helper?: string;
  multi?: boolean;
  options: Option[];
};

/**
 * Wellness Assessment questions — general goals and preferences only.
 * No medical history, medications, symptoms, labs, or eligibility questions.
 */
export const QUESTIONS: Question[] = [
  {
    id: "primary",
    eyebrow: "Your goal",
    prompt: "What is your primary wellness goal?",
    helper: "Choose the one that feels most true right now.",
    options: [
      { label: "Weight management", scores: { "weight-management": 4 } },
      { label: "More energy", scores: { "energy-longevity": 4 } },
      { label: "Better recovery", scores: { "recovery-performance": 4 } },
      { label: "Hormone support", scores: { "hormone-health": 4 } },
      { label: "Longevity / healthy aging", scores: { "energy-longevity": 3, "overall-optimization": 1 } },
      { label: "Cognitive performance", scores: { "energy-longevity": 3, "recovery-performance": 1 } },
      { label: "Hair / skin wellness", scores: { "overall-optimization": 3, "hormone-health": 1 } },
    ],
  },
  {
    id: "secondary",
    eyebrow: "Also important",
    prompt: "Any secondary goals you'd also like to support?",
    helper: "Select as many as you like, or skip this one.",
    multi: true,
    options: [
      { label: "Weight and metabolism", scores: { "weight-management": 2 } },
      { label: "Energy through the day", scores: { "energy-longevity": 2 } },
      { label: "Strength and recovery", scores: { "recovery-performance": 2 } },
      { label: "Hormone balance", scores: { "hormone-health": 2 } },
      { label: "Healthy aging", scores: { "energy-longevity": 1, "overall-optimization": 1 } },
      { label: "Skin, hair, and appearance", scores: { "overall-optimization": 2 } },
    ],
  },
  {
    id: "daily",
    eyebrow: "Day to day",
    prompt: "Which area would make the biggest difference in how you feel day to day?",
    options: [
      { label: "Steadier energy", scores: { "energy-longevity": 3 } },
      { label: "A body composition I feel good in", scores: { "weight-management": 3 } },
      { label: "Mood, drive, and vitality", scores: { "hormone-health": 3 } },
      { label: "Recovering faster from training", scores: { "recovery-performance": 3 } },
      { label: "Feeling well across the board", scores: { "overall-optimization": 3 } },
    ],
  },
  {
    id: "support",
    eyebrow: "Focus of care",
    prompt: "What type of support are you most interested in?",
    options: [
      { label: "Metabolic health", scores: { "weight-management": 3 } },
      { label: "Performance and recovery", scores: { "recovery-performance": 3 } },
      { label: "Energy and longevity", scores: { "energy-longevity": 3 } },
      { label: "Hormone optimization", scores: { "hormone-health": 3 } },
      { label: "Overall wellness", scores: { "overall-optimization": 3 } },
    ],
  },
  {
    id: "shape",
    eyebrow: "Preference",
    prompt: "Would you prefer one focused treatment, or a broader program?",
    options: [
      { label: "One targeted treatment", detail: "A single therapy to start with.", depth: "targeted" },
      { label: "A more comprehensive program", detail: "Several elements working together.", depth: "comprehensive" },
      { label: "Not sure — show me the best option", depth: "unsure" },
    ],
  },
  {
    id: "stage",
    eyebrow: "Where you are",
    prompt: "How would you describe your current wellness focus?",
    options: [
      { label: "Just getting started", scores: { "weight-management": 1 }, depth: "targeted" },
      { label: "Already focused on fitness and wellness", scores: { "recovery-performance": 1 } },
      { label: "Looking to optimize performance", scores: { "recovery-performance": 1, "overall-optimization": 1 }, depth: "comprehensive" },
      { label: "Focused on long-term health and longevity", scores: { "energy-longevity": 1, "overall-optimization": 1 }, depth: "comprehensive" },
    ],
  },
];

export type Recommendation = { kind: "program" | "bundle"; slug: string };

export type ResultInfo = {
  title: string;
  blurb: string;
  highlights: string[];
  /** Existing Nautic offerings, most relevant first. */
  targeted: Recommendation[];
  comprehensive: Recommendation[];
};

export const WELLNESS_RESULTS: Record<GoalSlug, ResultInfo> = {
  "weight-management": {
    title: "Weight Loss & Metabolic Health",
    blurb:
      "Your answers point toward metabolic support — the area focused on sustainable weight change, appetite regulation, and metabolic markers.",
    highlights: ["Physician-guided weight programs", "Metabolic markers in context", "Fulfilled by U.S. pharmacies"],
    targeted: [
      { kind: "program", slug: "advanced-weight-loss" },
      { kind: "program", slug: "medical-weight-loss" },
      { kind: "bundle", slug: "metabolic-bundle" },
    ],
    comprehensive: [
      { kind: "bundle", slug: "metabolic-plus" },
      { kind: "bundle", slug: "metabolic-bundle" },
      { kind: "program", slug: "advanced-weight-loss" },
    ],
  },
  "hormone-health": {
    title: "Hormone Optimization",
    blurb:
      "Your answers align with hormone health — the area focused on balance, drive, mood, and vitality across the decades.",
    highlights: ["Men's and women's hormone care", "Symptom and lab context", "Ongoing adjustment over time"],
    targeted: [
      { kind: "program", slug: "testosterone-optimization" },
      { kind: "program", slug: "womens-hrt" },
      { kind: "program", slug: "enclomiphene" },
    ],
    comprehensive: [
      { kind: "bundle", slug: "mens-vitality" },
      { kind: "bundle", slug: "womens-vitality" },
      { kind: "program", slug: "testosterone-optimization" },
    ],
  },
  "energy-longevity": {
    title: "Longevity & Energy",
    blurb:
      "Your answers lean toward longevity and cellular energy — the area focused on how well you feel and function as you age.",
    highlights: ["Cellular energy support", "Healthy-aging protocols", "Layered, long-horizon care"],
    targeted: [
      { kind: "program", slug: "nad-plus" },
      { kind: "program", slug: "methylene-blue" },
      { kind: "program", slug: "longevity-plus" },
    ],
    comprehensive: [
      { kind: "bundle", slug: "longevity-complete" },
      { kind: "bundle", slug: "longevity-plus" },
      { kind: "program", slug: "nad-plus" },
    ],
  },
  "recovery-performance": {
    title: "Recovery & Performance",
    blurb:
      "Your answers point toward recovery and performance — the area focused on repair, resilience, and training capacity.",
    highlights: ["Recovery-focused therapies", "Sleep and repair emphasis", "Performance-minded guidance"],
    targeted: [
      { kind: "program", slug: "sermorelin" },
      { kind: "program", slug: "nad-plus" },
      { kind: "program", slug: "glutathione" },
    ],
    comprehensive: [
      { kind: "bundle", slug: "mens-performance-recovery" },
      { kind: "program", slug: "sermorelin" },
      { kind: "program", slug: "nad-plus" },
    ],
  },
  "overall-optimization": {
    title: "Total Optimization",
    blurb:
      "Your answers suggest a comprehensive approach — several areas working together rather than a single therapy.",
    highlights: ["Multi-system approach", "Hair, skin, and appearance included", "Our most complete program tier"],
    targeted: [
      { kind: "program", slug: "glutathione" },
      { kind: "program", slug: "nad-plus" },
      { kind: "bundle", slug: "total-optimization" },
    ],
    comprehensive: [
      { kind: "bundle", slug: "total-optimization" },
      { kind: "bundle", slug: "longevity-complete" },
      { kind: "program", slug: "nad-plus" },
    ],
  },
};
