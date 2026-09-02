export type HeroVideo = {
  id: string;
  src: string;
  label: string;
  objectPosition: string;
};

const local = (path: string) => path;

export const brandAssets = {
  logo: local("/assets/brand/nautic-logo.png"),
  heroPoster: local("/assets/hero/nh-nature-poster.jpg"),
  favicon: local("/favicon.png"),
} as const;

export const decorativeAssets = {
  leafSage: local("/assets/decorative/leaf-sage.png"),
  leafSage2: local("/assets/decorative/leaf-sage-2.png"),
  leafForest: local("/assets/decorative/leaf-forest.png"),
  leafGold: local("/assets/decorative/leaf-gold.png"),
} as const;

export const sectionAssets = {
  tassoBloodTest: local("/assets/diagnostics/tasso-blood-test.png"),
  philosophy: local("/assets/philosophy/philosophy.jpg"),
  longevity: local("/assets/philosophy/longevity.jpg"),
  ctaStretch: local("/assets/cta/cta-stretch.jpg"),
  clinic: local("/assets/pages/clinic.jpg"),
} as const;

export const treatmentImages = {
  tirzepatide: local("/assets/treatments/tirzepatide.jpg"),
  semaglutide: local("/assets/treatments/semaglutide.jpg"),
  semaglutideEditorial: local("/assets/treatments/semaglutide-editorial.jpg"),
  hormone: local("/assets/treatments/hormone.jpg"),
  nad: local("/assets/treatments/nad.jpg"),
  sermorelin: local("/assets/treatments/sermorelin.jpg"),
  performance: local("/assets/treatments/performance.jpg"),
  cognitive: local("/assets/treatments/cognitive.jpg"),
  overall: local("/assets/treatments/overall.jpg"),
} as const;

export const journeyImages = {
  goal: local("/assets/journey/journey-goal.jpg"),
  assessment: local("/assets/journey/journey-assessment.jpg"),
  review: local("/assets/journey/journey-review.jpg"),
  consult: local("/assets/journey/journey-consult.jpg"),
  support: local("/assets/journey/journey-support.jpg"),
} as const;

export const journalImages = {
  hero: local("/assets/journal/journal-hero.jpg"),
  cellular: local("/assets/journal/journal-cellular.jpg"),
  recovery: local("/assets/journal/program-recovery.jpg"),
  nutrition: local("/assets/journal/journal-nutrition.jpg"),
  sleep: local("/assets/journal/journal-sleep.jpg"),
  weight: local("/assets/journal/program-weight.jpg"),
} as const;

export const heroVideos: HeroVideo[] = [
  {
    id: "nature-01",
    src: local("/assets/hero/nh-nature-01.mp4"),
    label: "Green leaves with dew moving gently in soft morning light",
    objectPosition: "50% 35%",
  },
  {
    id: "nature-02",
    src: local("/assets/hero/nh-nature-02.mp4"),
    label: "Premium unbranded wellness vials in a clean minimal setting",
    objectPosition: "50% 35%",
  },
  {
    id: "nature-03",
    src: local("/assets/hero/nh-nature-03.mp4"),
    label: "Wellness vials blended with soft greenery and light reflections",
    objectPosition: "50% 35%",
  },
  {
    id: "nature-04",
    src: local("/assets/hero/nh-nature-04.mp4"),
    label: "A serene composition of water, greenery and wellness vials",
    objectPosition: "50% 35%",
  },
];

export const heroTiming = {
  rotateMs: 3400,
  fadeMs: 1200,
  splashLeadMs: 900,
} as const;
