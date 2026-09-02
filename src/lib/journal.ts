import { journalImages } from "./media";

export type JournalPost = {
  slug: string;
  title: string;
  description: string;
  section: string;
  readTime: string;
  image: string;
  featured?: boolean;
  body: string[];
};

export const journalPosts: JournalPost[] = [
  {
    slug: "understanding-glp-1-therapy",
    title: "Understanding GLP-1 Therapy",
    description:
      "What GLP-1 receptor agonists actually do in the body, why physician oversight matters, and how to think about them as one part of a larger metabolic plan.",
    section: "Weight Management",
    readTime: "8 min read",
    image: journalImages.hero,
    featured: true,
    body: [
      "GLP-1 receptor agonists have changed the conversation around weight management — not because they replace lifestyle change, but because they can support it when metabolism resists ordinary effort.",
      "At Nautic Health, these therapies are never standalone products. They sit inside a broader physician-guided plan that includes nutrition, movement, sleep, diagnostics, and ongoing clinical review.",
      "Eligibility, dosing, and monitoring are determined only after a licensed provider reviews your history, medications, and relevant laboratory results. Prescriptions are never guaranteed.",
    ],
  },
  {
    slug: "understanding-semaglutide",
    title: "Understanding Semaglutide",
    description:
      "What semaglutide does in a physician-guided weight-management plan, why oversight matters, and how it differs from tirzepatide.",
    section: "Weight Management",
    readTime: "7 min read",
    image: journalImages.cellular,
    body: [
      "Semaglutide is a GLP-1 receptor agonist used in physician-guided weight management when a licensed provider determines it is clinically appropriate.",
      "At Nautic Health it is never a standalone product. It sits inside a broader plan that includes nutrition, movement, sleep, diagnostics, and ongoing clinical review.",
      "Eligibility, dosing, and monitoring are determined only after a provider reviews your history, medications, and relevant laboratory results. Prescriptions are never guaranteed.",
    ],
  },
  {
    slug: "supporting-recovery-through-modern-wellness",
    title: "Supporting Recovery Through Modern Wellness",
    description:
      "Recovery is not the absence of training — it is the period when adaptation happens. A clinical view of what supports it.",
    section: "Recovery & Performance",
    readTime: "6 min read",
    image: journalImages.recovery,
    body: [
      "Recovery is when training actually becomes progress. Sleep, nutrition, stress load, and hormonal context all influence how quickly the body repairs and adapts.",
      "Modern wellness care can support recovery when interventions are chosen carefully and monitored over time — not as shortcuts, but as part of a coherent plan.",
      "Whether recovery support is appropriate for you is a clinical decision made after reviewing your assessment and goals.",
    ],
  },
  {
    slug: "healthy-aging-starts-today",
    title: "Healthy Aging Starts Today",
    description:
      "The habits and markers that shape how the next decades feel, and why the most valuable interventions begin long before symptoms appear.",
    section: "Healthy Aging",
    readTime: "9 min read",
    image: journalImages.nutrition,
    body: [
      "Healthy aging is less about chasing a single biomarker and more about building a trajectory — energy, resilience, metabolic health, and cognitive clarity maintained across decades.",
      "Proactive care measures early, acts early, and adjusts often. That philosophy underpins how Nautic Health designs long-view programs for patients who take their health seriously.",
      "The best time to invest in the next chapter of your health is before urgency forces the conversation.",
    ],
  },
  {
    slug: "the-future-of-personalized-wellness",
    title: "The Future of Personalized Wellness",
    description:
      "How diagnostics, continuous data, and clinical judgment are converging into care that is genuinely individual.",
    section: "Physician-Guided Care",
    readTime: "6 min read",
    image: journalImages.sleep,
    body: [
      "Personalized wellness is not a marketing phrase — it is what happens when diagnostics, medical history, and clinical judgment converge on a plan built for one person.",
      "Technology makes collection easier; it does not replace the provider. The most valuable layer remains a licensed clinician who knows your context and adjusts the plan as you respond.",
      "Nautic Health is designed around that intersection: modern convenience without losing individualized medical oversight.",
    ],
  },
  {
    slug: "understanding-tirzepatide",
    title: "Understanding Tirzepatide",
    description:
      "How tirzepatide differs from semaglutide, why physician oversight matters, and where it fits in a broader metabolic plan.",
    section: "Weight Management",
    readTime: "5 min read",
    image: journalImages.weight,
    body: [
      "Tirzepatide activates both GLP-1 and GIP pathways, which is why it is often discussed in the context of advanced physician-guided weight management.",
      "No medication is right for everyone. A licensed provider evaluates your history, goals, laboratory results, and prior responses before recommending any pathway.",
      "At Nautic Health, tirzepatide — when clinically appropriate — sits inside a comprehensive program with diagnostics, monitoring, and ongoing support.",
    ],
  },
];

export function getJournalPost(slug: string): JournalPost | undefined {
  return journalPosts.find((p) => p.slug === slug);
}

export function getFeaturedPost(): JournalPost {
  return journalPosts.find((p) => p.featured) ?? journalPosts[0];
}
