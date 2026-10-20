import journalHero from "@/assets/journal-hero.jpg";
import journalNutrition from "@/assets/journal-nutrition.jpg";
import journalCellular from "@/assets/journal-cellular.jpg";
import journalSleep from "@/assets/journal-sleep.jpg";
import longevityImg from "@/assets/longevity.jpg";
import movementImg from "@/assets/movement.jpg";
import clinicImg from "@/assets/clinic.jpg";
import coupleImg from "@/assets/couple.jpg";
import philosophyImg from "@/assets/philosophy.jpg";
import heroImg from "@/assets/hero.jpg";
import weightImg from "@/assets/program-weight.jpg";
import advancedImg from "@/assets/program-advanced.jpg";
import energyImg from "@/assets/program-energy.jpg";
import recoveryImg from "@/assets/program-recovery.jpg";
import skinImg from "@/assets/program-skin.jpg";
import botanicalImg from "@/assets/botanical-band.jpg";

export const journalCategories = [
  "Weight Management",
  "Recovery & Performance",
  "Energy & Vitality",
  "Longevity",
  "Healthy Aging",
  "Hair & Skin Wellness",
  "Lifestyle",
  "Physician-Guided Care",
  "Nutrition",
  "Wellness Tips",
] as const;

export type JournalCategory = (typeof journalCategories)[number];

export type Article = {
  slug: string;
  title: string;
  category: JournalCategory;
  readTime: string;
  summary: string;
  image: string;
  featured?: boolean;
  intro: string[];
  sections: { heading: string; body: string[] }[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
  relatedPrograms: { kind: "program" | "bundle"; slug: string }[];
};

export const journalHeroImage = journalHero;

export const articles: Article[] = [
  {
    slug: "understanding-glp-1-therapy",
    title: "Understanding GLP-1 Therapy",
    category: "Weight Management",
    readTime: "8 min read",
    summary:
      "What GLP-1 receptor agonists actually do in the body, why physician oversight matters, and how to think about them as one part of a larger metabolic plan.",
    image: weightImg,
    featured: true,
    intro: [
      "Few topics in modern medicine have moved from clinical literature to dinner-table conversation as quickly as GLP-1 therapy. The speed of that shift has left a great deal of nuance behind.",
      "This article is an educational overview: what the class of medication does physiologically, who clinicians typically evaluate for it, and why the surrounding care matters at least as much as the prescription itself.",
    ],
    sections: [
      {
        heading: "What GLP-1 actually is",
        body: [
          "Glucagon-like peptide-1 is a hormone your intestine releases after you eat. It signals the pancreas to release insulin when glucose is elevated, slows the rate at which the stomach empties, and communicates with regions of the brain involved in appetite and satiety.",
          "GLP-1 receptor agonists are medications designed to mimic that natural signal for far longer than the body's own version, which is cleared within minutes.",
        ],
      },
      {
        heading: "Why appetite changes",
        body: [
          "Patients frequently describe the effect not as willpower but as quiet. The persistent mental negotiation around food softens. Physiologically, this reflects slower gastric emptying combined with central satiety signaling.",
          "That quiet is useful, but it is not the goal on its own. The goal is a durable pattern of eating, movement, and body composition that holds after the medication is adjusted or discontinued.",
        ],
      },
      {
        heading: "Where physician oversight matters",
        body: [
          "Appropriate candidacy depends on medical history, current medications, laboratory findings, and personal or family history that may make this class of therapy inappropriate. Dosing is titrated deliberately, and side effects are managed rather than endured.",
          "Muscle preservation is the most frequently overlooked variable. Rapid weight loss without adequate protein intake and resistance training can reduce lean mass, which works against long-term metabolic health.",
        ],
      },
      {
        heading: "What a complete plan looks like",
        body: [
          "Baseline laboratory testing. Nutrition guidance built around protein sufficiency. Resistance training. Sleep. Regular review with a clinician who adjusts based on how your body is actually responding.",
          "Medication, when clinically appropriate, is one instrument in that arrangement — never the entire piece.",
        ],
      },
    ],
    takeaways: [
      "GLP-1 is a naturally occurring hormone involved in insulin release and satiety.",
      "Receptor agonists extend that signal, which often reduces appetite noise.",
      "Candidacy is a clinical decision based on history, labs, and current medications.",
      "Preserving lean muscle through protein and resistance training is essential.",
      "Outcomes depend on the surrounding care plan, not the prescription alone.",
    ],
    faqs: [
      {
        q: "Is GLP-1 therapy right for everyone?",
        a: "No. It is evaluated case by case by a licensed provider, and it is not appropriate for some medical histories. Some people are better served by other approaches entirely.",
      },
      {
        q: "What happens when treatment ends?",
        a: "This is exactly why the surrounding plan matters. Nutrition patterns, strength, and sleep are what carry results forward, and a good clinician plans for that transition from the beginning.",
      },
      {
        q: "How long before changes appear?",
        a: "Responses vary considerably. Most clinicians assess objective markers over several months rather than reacting to week-to-week fluctuation.",
      },
    ],
    relatedPrograms: [
      { kind: "program", slug: "medical-weight-loss" },
      { kind: "program", slug: "advanced-weight-loss" },
    ],
  },
  {
    slug: "the-science-behind-nad",
    title: "The Science Behind NAD+",
    category: "Energy & Vitality",
    readTime: "7 min read",
    summary:
      "A clear look at the coenzyme behind cellular energy production, what declines with age, and how clinicians think about supporting it.",
    image: journalCellular,
    featured: true,
    intro: [
      "NAD+ has become shorthand for cellular energy in wellness conversations. The underlying biochemistry is genuinely interesting, and worth understanding without the marketing gloss.",
    ],
    sections: [
      {
        heading: "A coenzyme in nearly every cell",
        body: [
          "Nicotinamide adenine dinucleotide is a coenzyme present in every living cell. Its central job is moving electrons during metabolism — the process that converts what you eat into usable energy.",
          "It also serves as a substrate for enzymes involved in DNA repair and cellular signaling, which is why it appears so often in longevity research.",
        ],
      },
      {
        heading: "What changes with age",
        body: [
          "Measured NAD+ levels tend to decline across the lifespan. Research suggests this reflects both reduced synthesis and increased consumption by repair processes.",
          "Whether restoring levels reverses specific aspects of aging in humans remains an active area of study. Honest framing matters: this is promising science, not settled science.",
        ],
      },
      {
        heading: "How it is approached clinically",
        body: [
          "Clinicians evaluate the whole picture first — sleep, thyroid function, iron status, glucose regulation, medication effects. Fatigue has many causes, and most of them are not exotic.",
          "When NAD+ support is considered, it is one element of a plan that begins with diagnostics rather than assumptions.",
        ],
      },
    ],
    takeaways: [
      "NAD+ is central to converting food into cellular energy.",
      "Levels generally decline with age.",
      "Human evidence is promising but still developing.",
      "Fatigue deserves a full diagnostic workup before anything else.",
    ],
    faqs: [
      {
        q: "Will NAD+ support make me feel energetic immediately?",
        a: "Experiences vary widely, and expectations should stay measured. Sustained changes in energy usually track with sleep, glucose stability, and iron or thyroid status.",
      },
      {
        q: "Do I need laboratory testing first?",
        a: "Yes. Establishing an objective baseline is what makes it possible to tell whether anything is actually working.",
      },
    ],
    relatedPrograms: [
      { kind: "program", slug: "nad-plus" },
      { kind: "bundle", slug: "metabolic-plus" },
    ],
  },
  {
    slug: "supporting-recovery-through-modern-wellness",
    title: "Supporting Recovery Through Modern Wellness",
    category: "Recovery & Performance",
    readTime: "6 min read",
    summary:
      "Recovery is not the absence of training — it is the period when adaptation happens. A clinical view of what supports it.",
    image: recoveryImg,
    featured: true,
    intro: [
      "Training creates the stimulus. Recovery creates the result. Most people who feel stuck have a recovery problem rather than an effort problem.",
    ],
    sections: [
      {
        heading: "The adaptation window",
        body: [
          "Strength, endurance, and resilience are built in the hours and days after exertion, when tissue repairs and the nervous system recalibrates. Compressing that window compounds fatigue rather than fitness.",
        ],
      },
      {
        heading: "Inputs that consistently matter",
        body: [
          "Sleep duration and quality. Protein sufficiency across the day. Hydration and electrolytes. Deliberate deloading. Managing psychological load, which the body does not distinguish from physical load.",
          "These are unglamorous and they outperform nearly everything else.",
        ],
      },
      {
        heading: "Where clinical support fits",
        body: [
          "When recovery remains poor despite good inputs, testing can reveal contributors such as inflammation, low iron, thyroid dysfunction, or hormonal changes. That is where a provider-led plan earns its place.",
        ],
      },
    ],
    takeaways: [
      "Adaptation happens during recovery, not during the session.",
      "Sleep and protein are the highest-yield levers.",
      "Persistent poor recovery is worth investigating clinically.",
    ],
    faqs: [
      {
        q: "How much sleep is enough?",
        a: "Most adults need seven to nine hours, and active people often sit at the upper end. Consistency of timing matters nearly as much as duration.",
      },
      {
        q: "Are rest days necessary?",
        a: "Structured lighter periods are part of nearly every well-designed program, athletic or otherwise.",
      },
    ],
    relatedPrograms: [
      { kind: "program", slug: "sermorelin" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "healthy-aging-starts-today",
    title: "Healthy Aging Starts Today",
    category: "Healthy Aging",
    readTime: "9 min read",
    summary:
      "The habits and markers that shape how the next decades feel, and why the most valuable interventions begin long before symptoms appear.",
    image: coupleImg,
    featured: true,
    intro: [
      "Aging well is less about a single decision than about the accumulated direction of many ordinary ones. The earlier that direction is set, the less correction is required later.",
    ],
    sections: [
      {
        heading: "Markers worth watching",
        body: [
          "Body composition rather than weight alone. Fasting glucose and insulin sensitivity. Lipid particle counts. Inflammatory markers. Blood pressure. Grip strength and VO2 measures, which correlate strongly with long-term outcomes.",
        ],
      },
      {
        heading: "Muscle as an organ of longevity",
        body: [
          "Lean mass supports glucose regulation, bone density, balance, and independence. It is also the tissue most easily lost during periods of illness, inactivity, or rapid weight loss.",
          "Resistance training two to three times weekly is among the most reliably beneficial things most adults can do.",
        ],
      },
      {
        heading: "The value of a baseline",
        body: [
          "Testing while you feel well establishes what normal looks like for you. Trends detected early are far easier to influence than problems discovered late.",
        ],
      },
    ],
    takeaways: [
      "Trajectory matters more than any single number.",
      "Preserving muscle protects metabolic and functional health.",
      "Baseline testing while healthy makes later trends interpretable.",
    ],
    faqs: [
      {
        q: "Is it ever too late to start?",
        a: "No. Meaningful improvements in strength, metabolic health, and function are documented well into later decades.",
      },
      {
        q: "How often should markers be reviewed?",
        a: "Most people benefit from a comprehensive review annually, with more frequent checks while a plan is being adjusted.",
      },
    ],
    relatedPrograms: [
      { kind: "bundle", slug: "metabolic-plus" },
      { kind: "program", slug: "nad-plus" },
    ],
  },
  {
    slug: "the-future-of-personalized-wellness",
    title: "The Future of Personalized Wellness",
    category: "Physician-Guided Care",
    readTime: "6 min read",
    summary:
      "How diagnostics, continuous data, and clinical judgment are converging into care that is genuinely individual.",
    image: clinicImg,
    featured: true,
    intro: [
      "Personalization has become a marketing word. In clinical practice it means something specific: decisions made from your data, reviewed by someone accountable for the outcome.",
    ],
    sections: [
      {
        heading: "From averages to individuals",
        body: [
          "Population guidelines describe what tends to be true across many people. They are a starting point, not an answer for any single person sitting in front of a clinician.",
        ],
      },
      {
        heading: "What makes personalization real",
        body: [
          "Objective baseline testing. Longitudinal tracking rather than isolated snapshots. A provider who adjusts based on your response. And a willingness to stop things that are not working.",
        ],
      },
      {
        heading: "The limits worth naming",
        body: [
          "More data is not automatically better care. Interpretation is the scarce resource, and that remains a clinical skill.",
        ],
      },
    ],
    takeaways: [
      "Personalization means decisions derived from your own data.",
      "Longitudinal tracking beats one-time snapshots.",
      "Interpretation, not data volume, drives better outcomes.",
    ],
    faqs: [
      {
        q: "Do I need wearables?",
        a: "They can be useful for sleep and activity patterns, but they are supplementary to clinical testing rather than a replacement for it.",
      },
    ],
    relatedPrograms: [
      { kind: "bundle", slug: "metabolic-plus" },
      { kind: "program", slug: "medical-weight-loss" },
    ],
  },
  {
    slug: "understanding-tirzepatide",
    title: "Understanding Tirzepatide",
    category: "Weight Management",
    readTime: "5 min read",
    summary:
      "How tirzepatide differs from semaglutide, why physician oversight matters, and where it fits in a broader metabolic plan.",
    image: advancedImg,
    intro: [
      "Tirzepatide and semaglutide are often mentioned in the same breath, but they act on different receptor pathways and are considered in different clinical contexts.",
    ],
    sections: [
      {
        heading: "A dual pathway",
        body: [
          "Semaglutide acts on the GLP-1 receptor. Tirzepatide acts on both the GLP-1 and GIP receptors, which is why providers sometimes describe it as a dual-agonist therapy.",
        ],
      },
      {
        heading: "Why the distinction matters",
        body: [
          "Different mechanisms mean different candidacy conversations, different monitoring, and different expectations. Understanding the difference helps you ask better questions of your own provider — it does not determine which is right for you.",
        ],
      },
    ],
    takeaways: [
      "Tirzepatide acts on two receptor pathways; semaglutide acts on one.",
      "Both require evaluation and ongoing monitoring by a licensed provider.",
      "Medication is one component of a broader metabolic plan.",
    ],
    faqs: [
      {
        q: "Which therapy will I be prescribed?",
        a: "That is determined only by a licensed provider after reviewing your history, medications, and laboratory results. Prescriptions are never guaranteed.",
      },
    ],
    relatedPrograms: [{ kind: "program", slug: "advanced-weight-loss" }],
  },

  {
    slug: "what-is-nad",
    title: "What Is NAD+?",
    category: "Energy & Vitality",
    readTime: "4 min read",
    summary:
      "A short primer on the molecule at the center of cellular metabolism, written for readers who want the essentials.",
    image: energyImg,
    intro: ["If you want the short version, this is it."],
    sections: [
      {
        heading: "The essentials",
        body: [
          "NAD+ is a coenzyme found in every cell. It shuttles electrons during metabolism, making it indispensable to energy production.",
          "It also participates in DNA repair and cellular signaling, which links it to research on aging.",
        ],
      },
      {
        heading: "Why people talk about it",
        body: [
          "Levels decline with age, and restoring them is an active research question. The honest answer today is that the biology is compelling and the human clinical picture is still forming.",
        ],
      },
    ],
    takeaways: [
      "NAD+ enables cellular energy production.",
      "It supports DNA repair and signaling.",
      "Age-related decline is well documented; interventions remain under study.",
    ],
    faqs: [
      {
        q: "Can diet influence NAD+?",
        a: "Precursors are present in ordinary foods, and general metabolic health, sleep, and activity all influence the broader system.",
      },
    ],
    relatedPrograms: [{ kind: "program", slug: "nad-plus" }],
  },
  {
    slug: "understanding-bpc-157",
    title: "Understanding BPC-157",
    category: "Recovery & Performance",
    readTime: "5 min read",
    summary:
      "What the research does and does not show about this widely discussed peptide, and how to read the evidence carefully.",
    image: movementImg,
    intro: [
      "BPC-157 appears constantly in recovery conversations. It also illustrates why reading evidence carefully matters.",
    ],
    sections: [
      {
        heading: "What it is",
        body: [
          "BPC-157 is a synthetic peptide sequence derived from a protein found in gastric juice. Much of the interest comes from preclinical studies exploring tissue repair.",
        ],
      },
      {
        heading: "Reading the evidence honestly",
        body: [
          "The majority of published work is preclinical. Animal findings are a reason for further study, not a conclusion about human outcomes.",
          "Any consideration belongs in a conversation with a licensed provider who knows your history — never as a self-directed experiment.",
        ],
      },
    ],
    takeaways: [
      "BPC-157 is a peptide studied largely in preclinical settings.",
      "Human evidence remains limited.",
      "Provider guidance is essential; sourcing and safety matter.",
    ],
    faqs: [
      {
        q: "Is it appropriate for recovery from injury?",
        a: "That determination belongs to a licensed provider familiar with your history. Established rehabilitation and recovery fundamentals come first.",
      },
    ],
    relatedPrograms: [
      { kind: "program", slug: "sermorelin" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "understanding-ghk-cu",
    title: "Understanding GHK-Cu",
    category: "Hair & Skin Wellness",
    readTime: "5 min read",
    summary:
      "The copper peptide found in topical skincare and clinical research — what it is, and where the evidence currently stands.",
    image: skinImg,
    intro: [
      "GHK-Cu occupies an unusual position: a naturally occurring peptide that is also a common cosmetic ingredient and a subject of ongoing research.",
    ],
    sections: [
      {
        heading: "A naturally occurring complex",
        body: [
          "GHK is a short peptide that binds copper. It occurs naturally in human plasma, and measured levels decline with age.",
        ],
      },
      {
        heading: "Skin research",
        body: [
          "Studies have examined its role in skin remodeling and the appearance of aging skin. Topical formulations are widely available; clinical contexts are narrower and require professional guidance.",
        ],
      },
    ],
    takeaways: [
      "GHK-Cu is a naturally occurring copper-binding peptide.",
      "Plasma levels decline with age.",
      "It is common topically; clinical use requires provider oversight.",
    ],
    faqs: [
      {
        q: "Does skin health start internally?",
        a: "Largely, yes. Sleep, protein, glucose regulation, sun protection, and hormonal status all show up in the skin.",
      },
    ],
    relatedPrograms: [{ kind: "program", slug: "glutathione" }],
  },
  {
    slug: "how-physician-guided-wellness-works",
    title: "How Physician-Guided Wellness Works",
    category: "Physician-Guided Care",
    readTime: "6 min read",
    summary:
      "What actually happens between an assessment and an ongoing plan, and why the sequence is deliberate.",
    image: philosophyImg,
    intro: [
      "Physician-guided care is a sequence rather than a product. Understanding that sequence removes most of the uncertainty from starting.",
    ],
    sections: [
      {
        heading: "Assessment before recommendation",
        body: [
          "A thorough intake covers history, medications, symptoms, and goals. Nothing is recommended before that picture exists.",
        ],
      },
      {
        heading: "Objective testing",
        body: [
          "Laboratory work establishes a baseline. It also frequently reframes the conversation — what someone assumed was one problem is often another.",
        ],
      },
      {
        heading: "Iteration",
        body: [
          "Plans are adjusted based on how you respond, not on a fixed protocol. Sometimes the right adjustment is to stop something.",
        ],
      },
    ],
    takeaways: [
      "Assessment always precedes recommendation.",
      "Objective testing anchors the plan.",
      "Good care iterates and is willing to discontinue.",
    ],
    faqs: [
      {
        q: "Does starting an assessment commit me to anything?",
        a: "No. It begins a clinical conversation. Whether a program is appropriate is decided afterward, together.",
      },
    ],
    relatedPrograms: [
      { kind: "program", slug: "medical-weight-loss" },
      { kind: "bundle", slug: "metabolic-plus" },
    ],
  },
  {
    slug: "healthy-weight-management-habits",
    title: "Healthy Weight Management Habits",
    category: "Nutrition",
    readTime: "6 min read",
    summary:
      "The unglamorous patterns that hold over years, and how to build them without turning eating into a second job.",
    image: journalNutrition,
    intro: [
      "Sustainable weight management tends to look boring from the outside. That is precisely why it works.",
    ],
    sections: [
      {
        heading: "Protein first",
        body: [
          "Adequate protein supports satiety and helps preserve lean mass during weight loss. Anchoring each meal around it removes a surprising amount of decision fatigue.",
        ],
      },
      {
        heading: "Consistency over intensity",
        body: [
          "A plan followed eighty percent of the time for two years outperforms a perfect plan abandoned in six weeks.",
        ],
      },
      {
        heading: "Environment design",
        body: [
          "What is convenient becomes what is habitual. Adjusting your environment usually beats relying on discipline.",
        ],
      },
    ],
    takeaways: [
      "Protein sufficiency supports satiety and lean mass.",
      "Durability beats intensity.",
      "Design the environment to make the good choice the easy one.",
    ],
    faqs: [
      {
        q: "Do I need to track everything?",
        a: "Short periods of tracking can be educational. Permanent tracking is rarely necessary and often counterproductive.",
      },
    ],
    relatedPrograms: [
      { kind: "program", slug: "medical-weight-loss" },
      { kind: "bundle", slug: "metabolic-bundle" },
    ],
  },
  {
    slug: "recovery-after-exercise",
    title: "Recovery After Exercise",
    category: "Recovery & Performance",
    readTime: "5 min read",
    summary:
      "A practical guide to the hours after training — what helps, what is optional, and what is mostly theater.",
    image: movementImg,
    intro: ["The window after training is where a session becomes an adaptation."],
    sections: [
      {
        heading: "The fundamentals",
        body: [
          "Rehydrate. Eat protein and carbohydrate within a reasonable window. Move gently later in the day. Sleep well that night.",
        ],
      },
      {
        heading: "The optional extras",
        body: [
          "Cold exposure, compression, and massage have mixed evidence and individual preference plays a large role. They are additions, never substitutes for the fundamentals.",
        ],
      },
    ],
    takeaways: [
      "Fluid, protein, and sleep do most of the work.",
      "Gentle movement helps more than complete stillness.",
      "Modalities are supplementary at best.",
    ],
    faqs: [
      {
        q: "Should I train through soreness?",
        a: "Mild soreness is normal; pain that alters mechanics is not. Persistent pain deserves a clinical opinion.",
      },
    ],
    relatedPrograms: [{ kind: "program", slug: "sermorelin" }],
  },
  {
    slug: "why-sleep-matters-for-recovery",
    title: "Why Sleep Matters for Recovery",
    category: "Lifestyle",
    readTime: "7 min read",
    summary:
      "Sleep is the most powerful recovery intervention available, and the one most often traded away first.",
    image: journalSleep,
    intro: [
      "If sleep were a therapy, it would be the most effective one in the practice. It is also the first thing most people sacrifice.",
    ],
    sections: [
      {
        heading: "What happens overnight",
        body: [
          "Tissue repair, memory consolidation, hormonal regulation, and immune activity all concentrate in sleep. Short sleep measurably affects glucose handling and appetite signaling within days.",
        ],
      },
      {
        heading: "Building a reliable night",
        body: [
          "Consistent timing. A cool, dark room. Light exposure in the morning and reduced light in the evening. Caffeine timed earlier than feels necessary. Alcohol treated as the sleep disruptor it is.",
        ],
      },
      {
        heading: "When to seek evaluation",
        body: [
          "Loud snoring, witnessed pauses in breathing, or daytime sleepiness despite adequate hours warrant clinical evaluation rather than another habit change.",
        ],
      },
    ],
    takeaways: [
      "Sleep drives repair, hormones, and appetite regulation.",
      "Timing consistency rivals total duration in importance.",
      "Certain symptoms warrant clinical evaluation.",
    ],
    faqs: [
      {
        q: "Do naps help?",
        a: "Brief early-afternoon naps can help without disturbing the night for most people.",
      },
    ],
    relatedPrograms: [
      { kind: "program", slug: "sermorelin" },
      { kind: "bundle", slug: "longevity-plus" },
    ],
  },
  {
    slug: "the-benefits-of-personalized-wellness",
    title: "The Benefits of Personalized Wellness",
    category: "Physician-Guided Care",
    readTime: "5 min read",
    summary:
      "Why care built from your own baseline tends to outperform generic advice, and what that looks like in practice.",
    image: clinicImg,
    intro: ["Generic advice is a reasonable default. It is a poor destination."],
    sections: [
      {
        heading: "Fewer wasted years",
        body: [
          "The most common cost of generic advice is time. Objective testing shortens the distance between a symptom and an explanation.",
        ],
      },
      {
        heading: "Higher adherence",
        body: [
          "People follow plans that fit their lives. Personalization is partly clinical and partly practical.",
        ],
      },
    ],
    takeaways: [
      "Baseline data shortens the path to an explanation.",
      "Plans that fit your life are the plans that get followed.",
    ],
    faqs: [
      {
        q: "Is this only for people with symptoms?",
        a: "No. Many people begin while feeling well, specifically to establish a baseline.",
      },
    ],
    relatedPrograms: [{ kind: "bundle", slug: "metabolic-plus" }],
  },
  {
    slug: "how-wellness-programs-are-personalized",
    title: "How Wellness Programs Are Personalized",
    category: "Physician-Guided Care",
    readTime: "5 min read",
    summary:
      "The specific inputs a clinician uses to shape a plan, from laboratory findings to the realities of your schedule.",
    image: heroImg,
    intro: ["Personalization is built from inputs. Here are the ones that matter most."],
    sections: [
      {
        heading: "Clinical inputs",
        body: [
          "History, current medications, symptoms, family history, and laboratory findings form the clinical foundation.",
        ],
      },
      {
        heading: "Practical inputs",
        body: [
          "Travel patterns, work demands, caregiving, cooking habits, and training history determine whether a plan is realistic.",
        ],
      },
      {
        heading: "Response inputs",
        body: [
          "Follow-up testing and how you actually feel drive revisions. A plan that never changes is not personalized.",
        ],
      },
    ],
    takeaways: [
      "Clinical, practical, and response data all shape the plan.",
      "Revision over time is a feature, not a failure.",
    ],
    faqs: [
      {
        q: "How often is a plan revised?",
        a: "Typically at each clinical review, and sooner if something is not working.",
      },
    ],
    relatedPrograms: [{ kind: "program", slug: "medical-weight-loss" }],
  },
  {
    slug: "the-science-of-healthy-aging",
    title: "The Science of Healthy Aging",
    category: "Longevity",
    readTime: "8 min read",
    summary:
      "An accessible tour of the biology behind aging research, and what it suggests about everyday decisions.",
    image: longevityImg,
    intro: [
      "Aging research has moved from describing decline to studying its mechanisms. That shift changes what is actionable.",
    ],
    sections: [
      {
        heading: "Mechanisms under study",
        body: [
          "Cellular senescence, mitochondrial function, chronic low-grade inflammation, and impaired protein maintenance recur throughout the literature.",
        ],
      },
      {
        heading: "What translates today",
        body: [
          "Resistance training, cardiorespiratory fitness, sleep, nutrition quality, social connection, and control of blood pressure and glucose remain the interventions with the strongest human evidence.",
        ],
      },
      {
        heading: "Holding claims loosely",
        body: [
          "Promising mechanisms are not proven therapies. A good clinician distinguishes between the two out loud.",
        ],
      },
    ],
    takeaways: [
      "Mechanistic research is advancing quickly.",
      "Fitness, sleep, and metabolic control have the strongest human evidence.",
      "Mechanism is not the same as proven benefit.",
    ],
    faqs: [
      {
        q: "Is there a single most important habit?",
        a: "If forced to choose, regular exercise combining strength and cardiorespiratory work has the broadest supporting evidence.",
      },
    ],
    relatedPrograms: [{ kind: "bundle", slug: "metabolic-plus" }],
  },
  {
    slug: "cellular-health-explained",
    title: "Cellular Health Explained",
    category: "Longevity",
    readTime: "6 min read",
    summary:
      "What people mean by cellular health, which parts are measurable, and how to think about it without overreach.",
    image: journalCellular,
    intro: ["Cellular health is a useful frame, provided it stays tethered to measurable things."],
    sections: [
      {
        heading: "Mitochondria and energy",
        body: [
          "Mitochondria convert nutrients into usable energy. Their function is influenced by activity, sleep, and nutrition long before anything more exotic.",
        ],
      },
      {
        heading: "Inflammation and repair",
        body: [
          "Chronic low-grade inflammation interferes with repair processes. Markers such as hsCRP offer a partial, imperfect window.",
        ],
      },
    ],
    takeaways: [
      "Mitochondrial function underpins energy.",
      "Chronic inflammation impairs repair.",
      "Measurable markers keep the concept grounded.",
    ],
    faqs: [
      {
        q: "Can cellular health be measured directly?",
        a: "Not comprehensively. Clinicians rely on proxies and on how those proxies trend over time.",
      },
    ],
    relatedPrograms: [{ kind: "program", slug: "nad-plus" }],
  },
  {
    slug: "skin-health-from-within",
    title: "Skin Health From Within",
    category: "Hair & Skin Wellness",
    readTime: "6 min read",
    summary:
      "Skin reflects sleep, nutrition, glucose regulation, and hormonal status. A look at the internal inputs behind external results.",
    image: skinImg,
    intro: [
      "Topical care matters. It also cannot outrun what is happening internally.",
    ],
    sections: [
      {
        heading: "The internal inputs",
        body: [
          "Protein availability for collagen synthesis, glucose regulation, sleep-driven repair, hydration, and hormonal status all appear in skin quality.",
        ],
      },
      {
        heading: "The external essentials",
        body: [
          "Daily sun protection remains the single most effective intervention for the appearance of aging skin. Everything else is built on top of it.",
        ],
      },
    ],
    takeaways: [
      "Skin reflects systemic health.",
      "Sun protection is the highest-yield external habit.",
      "Sleep and protein are quietly foundational.",
    ],
    faqs: [
      {
        q: "How long before changes are visible?",
        a: "Skin turnover means most interventions need eight to twelve weeks before fair assessment.",
      },
    ],
    relatedPrograms: [{ kind: "program", slug: "glutathione" }],
  },
  {
    slug: "daily-habits-that-support-long-term-wellness",
    title: "Daily Habits That Support Long-Term Wellness",
    category: "Wellness Tips",
    readTime: "5 min read",
    summary:
      "Ten small, repeatable practices that compound quietly over years without demanding a lifestyle overhaul.",
    image: botanicalImg,
    intro: [
      "The most effective habits are usually the ones small enough that you keep doing them on the difficult days.",
    ],
    sections: [
      {
        heading: "Morning",
        body: [
          "Daylight within an hour of waking. Water before coffee. A protein-anchored first meal.",
        ],
      },
      {
        heading: "Through the day",
        body: [
          "Movement every hour or two. A short walk after your largest meal. Fifteen minutes outdoors.",
        ],
      },
      {
        heading: "Evening",
        body: [
          "A consistent wind-down. Dimmer light after sunset. A fixed sleep window, including weekends.",
        ],
      },
    ],
    takeaways: [
      "Small, repeatable habits outperform ambitious overhauls.",
      "Morning light and evening dimness anchor circadian rhythm.",
      "A post-meal walk is a disproportionately useful habit.",
    ],
    faqs: [
      {
        q: "Where should I start?",
        a: "Choose one habit and hold it for a month before adding another. Sequencing beats simultaneity.",
      },
    ],
    relatedPrograms: [{ kind: "bundle", slug: "metabolic-plus" }],
  },
];

export const featuredArticles = articles.filter((a) => a.featured);

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function relatedArticles(slug: string, category: string) {
  const others = articles.filter((a) => a.slug !== slug);
  const sameCategory = others.filter((a) => a.category === category);
  return [...sameCategory, ...others.filter((a) => a.category !== category)].slice(0, 3);
}
