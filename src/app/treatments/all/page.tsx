"use client";

import { assetUrl } from "@/lib/asset";
import Link from "next/link";
import { useState } from "react";
import {
  Stethoscope,
  ClipboardList,
  HeartHandshake,
  PackageCheck,
  Activity,
  Plus,
  Minus,
} from "lucide-react";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import { PRICING_DISCLAIMER, PRICING_TAGLINE } from "@/lib/program-content";



import weightAsset from "@/assets/treatment-editorial-semaglutide.jpg.asset.json";
import advancedAsset from "@/assets/treatment-editorial-tirzepatide.jpg.asset.json";
import energyAsset from "@/assets/treatment-editorial-nad.jpg.asset.json";
import recoveryAsset from "@/assets/treatment-editorial-sermorelin.jpg.asset.json";
import overallAsset from "@/assets/treatment-editorial-overall.jpg.asset.json";
import testosteroneAsset from "@/assets/treatment-editorial-mens-hormone.jpg.asset.json";
import enclomipheneAsset from "@/assets/treatment-editorial-enclomiphene.jpg.asset.json";
import womensHormoneAsset from "@/assets/treatment-editorial-womens-hormone.jpg.asset.json";
import movementAsset from "@/assets/treatment-editorial-performance.jpg.asset.json";
import longevityAsset from "@/assets/treatment-editorial-longevity.jpg.asset.json";
import glutathioneAsset from "@/assets/treatment-editorial-glutathione.jpg.asset.json";
import methyleneBlueAsset from "@/assets/treatment-editorial-methylene-blue.jpg.asset.json";

const weightImg = assetUrl(weightAsset);
const advancedImg = assetUrl(advancedAsset);
const energyImg = assetUrl(energyAsset);
const recoveryImg = assetUrl(recoveryAsset);
const clinicImg = assetUrl(overallAsset);
const testosteroneImg = assetUrl(testosteroneAsset);
const enclomipheneImg = assetUrl(enclomipheneAsset);
const coupleImg = assetUrl(overallAsset);
const philosophyImg = assetUrl(womensHormoneAsset);
const movementImg = assetUrl(movementAsset);
const botanicalImg = assetUrl(longevityAsset);
const glutathioneImg = assetUrl(glutathioneAsset);
const methyleneBlueImg = assetUrl(methyleneBlueAsset);


const includedAll = [
  { icon: Stethoscope, label: "Physician Guided Care" },
  { icon: ClipboardList, label: "Personalized Treatment Plan" },
  { icon: HeartHandshake, label: "Monthly Wellness Support" },
  { icon: PackageCheck, label: "Secure Home Delivery (when prescribed)" },
  { icon: Activity, label: "Ongoing Medical Monitoring" },
];

const programs = [
  {
    category: "Medical Weight Loss",
    badge: "Medical Weight Loss",
    name: "Semaglutide",
    slug: "medical-weight-loss",
    includes: "Semaglutide when clinically appropriate",
    description: "Physician-Guided Weight Management",
    price: "179",
    image: weightImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Medical Weight Loss",
    badge: "Medical Weight Loss",
    name: "Tirzepatide",
    slug: "advanced-weight-loss",
    includes: "Tirzepatide when clinically appropriate",
    description: "Physician-Guided Weight Management",
    price: "249",
    image: advancedImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Hormone Health",
    badge: "Hormone Health",
    name: "Men's Hormone Health",
    slug: "testosterone-optimization",
    includes: "Physician-guided hormone therapy when clinically appropriate",
    description: "Personalized Hormone Optimization",
    price: "220",
    image: testosteroneImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Hormone Health",
    badge: "Hormone Health",
    name: "Women's Hormone Health",
    slug: "womens-hrt",
    includes: "Individualized hormone therapy when clinically appropriate",
    description: "Personalized HRT Program",
    price: "220",
    image: philosophyImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Hormone Health",
    badge: "Hormone Health",
    name: "Enclomiphene",
    slug: "enclomiphene",
    includes: "Enclomiphene when clinically appropriate",
    description: "Physician-Guided Hormone Support",
    price: "209",
    image: enclomipheneImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Longevity & Wellness",
    badge: "Longevity & Wellness",
    name: "NAD+ Longevity",
    slug: "nad-plus",
    includes: "NAD+ when clinically appropriate",
    description: "Core Longevity Program",
    price: "229",
    image: energyImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Longevity & Wellness",
    badge: "Longevity & Wellness",
    name: "Sermorelin",
    slug: "sermorelin",
    includes: "Sermorelin when clinically appropriate",
    description: "Physician-Guided Longevity Option",
    price: "249",
    image: recoveryImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Longevity & Wellness",
    badge: "Longevity & Wellness",
    name: "Longevity Plus",
    slug: "longevity-plus",
    includes: "An advanced longevity protocol when clinically appropriate",
    description: "Advanced Longevity Program",
    price: "365",
    image: movementImg,
    cta: "Take the Wellness Assessment",
  },
  {
    category: "Longevity & Wellness",
    badge: "Longevity & Wellness",
    name: "Glutathione",
    slug: "glutathione",
    includes: "Glutathione when clinically appropriate",
    description: "Longevity & Wellness Support",
    price: "99",
    image: glutathioneImg,
    cta: "See If Glutathione Is Right for You",
  },
  {
    category: "Longevity & Wellness",
    badge: "Longevity & Wellness",
    name: "Methylene Blue",
    slug: "methylene-blue",
    includes: "Methylene Blue when clinically appropriate",
    description: "Cognitive & Longevity Support",
    price: "125",
    image: methyleneBlueImg,
    cta: "See If Methylene Blue Is Right for You",
  },
];

const categoryOrder = ["Medical Weight Loss", "Hormone Health", "Longevity & Wellness"];

const bundles = [
  {
    group: "Weight Management",
    name: "Metabolic Bundle",
    slug: "metabolic-bundle",
    badge: null,
    price: "310",
    subtitle: "Weight Management + Longevity",
    includes: ["Semaglutide", "NAD+"],
    description:
      "Physician-guided weight management paired with core longevity support in one simple monthly program.",
  },
  {
    group: "Weight Management",
    name: "Metabolic Plus",
    slug: "metabolic-plus",
    badge: "Most Popular",
    price: "380",
    subtitle: "Premium Weight Management + Longevity",
    includes: ["Tirzepatide", "NAD+"],
    description:
      "Advanced physician-guided weight management paired with core longevity support in one plan.",
  },
  {
    group: "Hormone Health + Longevity",
    name: "Longevity Plus",
    slug: "longevity-plus",
    badge: null,
    price: "380",
    subtitle: "Hormone Health + Longevity",
    includes: ["NAD+", "Sermorelin"],
    description:
      "Core longevity support and recovery-focused care combined in one physician-guided plan.",
  },
  {
    group: "Hormone Health + Longevity",
    name: "Men's Vitality",
    slug: "mens-vitality",
    badge: null,
    price: "350",
    subtitle: "Hormone Health + Longevity",
    includes: ["Men's HRT", "NAD+"],
    description: "A physician-guided program combining personalized men's hormone support with NAD+ longevity support.",
  },
  {
    group: "Hormone Health + Longevity",
    name: "Women's Vitality",
    slug: "womens-vitality",
    badge: null,
    price: "350",
    subtitle: "Hormone Health + Longevity",
    includes: ["Women's HRT", "NAD+"],
    description: "A physician-guided program combining personalized women's hormone support with NAD+ longevity support.",
  },
  {
    group: "Performance + Recovery",
    name: "Men's Performance & Recovery",
    slug: "mens-performance-recovery",
    badge: null,
    price: "370",
    subtitle: "Hormone Health + Recovery",
    includes: ["Men's HRT", "Sermorelin"],
    description: "A physician-guided program designed around men's hormone health, performance, recovery, and longevity-focused wellness.",
  },
  {
    group: "Premium Longevity + Wellness",
    name: "Longevity Complete",
    slug: "longevity-complete",
    badge: "Premium Longevity",
    price: "460",
    subtitle: "Premium Longevity + Wellness",
    tagline: "Comprehensive longevity, recovery, and cellular wellness support.",
    includes: ["NAD+", "Sermorelin", "Glutathione"],
    description:
      "A comprehensive physician-guided program for longevity, recovery, energy, antioxidant support, and cellular wellness.",
  },
  {
    group: "Complete Optimization",
    name: "Total Optimization",
    slug: "total-optimization",
    badge: "Most Comprehensive",
    price: "660",
    subtitle: "Complete Optimization",
    tagline: "Our most comprehensive physician-guided program.",
    includes: ["Tirzepatide", "NAD+", "Sermorelin", "Glutathione"],
    description:
      "A comprehensive program combining physician-guided weight management with longevity, recovery, energy, and cellular wellness support.",
    premium: true,
  },
];

const standardBundles = bundles.filter((bundle) => bundle.slug !== "total-optimization");
const totalOptimization = bundles.find((bundle) => bundle.slug === "total-optimization");

const comparisons = [
  { name: "Semaglutide", best: "Weight management", note: "Medical Weight Loss · $179/mo" },
  { name: "Tirzepatide", best: "Advanced weight management", note: "Medical Weight Loss · $249/mo" },
  { name: "Men's Hormone Health", best: "Men's hormone health", note: "Hormone Health · $220/mo" },
  { name: "Women's Hormone Health", best: "Perimenopause & menopause", note: "Hormone Health · $220/mo" },
  { name: "Enclomiphene", best: "Men's hormone support", note: "Hormone Health · $209/mo" },
  { name: "NAD+ Longevity", best: "Energy & vitality", note: "Longevity & Wellness · $229/mo" },
  { name: "Sermorelin", best: "Recovery & sleep", note: "Longevity & Wellness · $249/mo" },
  { name: "Longevity Plus", best: "Advanced longevity", note: "Longevity & Wellness · $365/mo" },
  { name: "Glutathione", best: "Antioxidant & recovery support", note: "Longevity & Wellness · $99/mo" },
  { name: "Methylene Blue", best: "Cognitive & energy wellness", note: "Longevity & Wellness · $125/mo" },
  { name: "Metabolic Bundle", best: "Weight and energy together", note: "Bundle · $310/mo" },
  { name: "Metabolic Plus", best: "Advanced weight and energy", note: "Bundle · $380/mo" },
  { name: "Longevity Plus", best: "Longevity and recovery support", note: "Bundle · $380/mo" },
  { name: "Men's Vitality", best: "Hormones and energy", note: "Bundle · $350/mo" },
  { name: "Women's Vitality", best: "Hormones and energy", note: "Bundle · $350/mo" },
  { name: "Men's Performance & Recovery", best: "Hormones and recovery", note: "Bundle · $370/mo" },
  { name: "Longevity Complete", best: "Longevity, recovery, and cellular wellness", note: "Bundle · $460/mo" },
  { name: "Total Optimization", best: "Weight management and comprehensive wellness", note: "Bundle · $660/mo" },
];



const faqs = [
  {
    q: "Do I need a live consultation?",
    a: "Not always. Provider evaluations may be completed asynchronously or through a live consultation depending on the treatment, your medical history, state requirements, and the provider’s clinical judgment. If a live consultation is needed, you’ll be given instructions for the next step.",
  },
  {
    q: "Am I a candidate?",
    a: "Candidacy is determined only by a licensed healthcare provider after reviewing your medical history, current medications, and — where indicated — laboratory results. Not every patient will qualify for every therapy.",
  },
  {
    q: "How are treatments personalized?",
    a: "Your provider designs a plan around your goals, biomarkers, lifestyle, and response over time. Dosing, cadence, and supportive care are adjusted at each review rather than fixed at the start.",
  },
  {
    q: "Do I need bloodwork?",
    a: "Most programs include baseline laboratory testing so your provider can establish a clear picture before recommending anything, and repeat testing to monitor your response.",
  },
  {
    q: "Are medications shipped to my home?",
    a: "When a therapy is prescribed, it is dispensed by a licensed pharmacy and shipped discreetly to your door in temperature-appropriate packaging. Prescriptions are never guaranteed and are issued only when clinically appropriate.",
  },
  {
    q: "How long does treatment typically last?",
    a: "Most patients follow a program for several months, with regular provider reviews. Some continue with maintenance care; others transition to lifestyle-only support once goals are met.",
  },
  {
    q: "Can I cancel my membership?",
    a: "Yes. Memberships are month-to-month with no long-term commitment. You can cancel at any time before your next billing date.",
  },
];


function Included({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <ul className="space-y-3">
      {includedAll.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className={`flex items-start gap-3 text-[0.82rem] leading-relaxed ${
            tone === "dark" ? "text-primary-foreground/85" : "text-forest/85"
          }`}
        >
          <span
            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
              tone === "dark" ? "bg-gold/20 text-gold" : "bg-surface text-sage"
            }`}
          >
            <Icon size={13} strokeWidth={1.6} />
          </span>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return (
    <div className="container-luxe py-6">
      <div className="flex items-center gap-6">
        <span className="hairline flex-1" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
        <span className="hairline flex-1" />
      </div>
    </div>
  );
}

function Disclaimer({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.72rem] leading-relaxed tracking-wide text-muted-foreground/80">
      {children}
    </p>
  );
}

function AllTreatments() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {/* SECTION 1 — HEADER */}
      <section className="container-luxe pt-20 md:pt-32 pb-14">
        <div className="max-w-3xl">
          <Link
            href="/treatments"
            className="mb-6 inline-flex text-[0.7rem] uppercase tracking-[0.18em] text-sage transition-colors hover:text-forest"
          >
            ← Explore by goal
          </Link>
          <Eyebrow>All Treatments</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.02] text-balance">
            Personalized <em className="italic">Wellness</em> Programs
          </h1>
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-sage">
            {PRICING_TAGLINE}
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Physician-guided wellness programs designed around your goals. One transparent
            monthly price includes medical oversight, a personalized treatment plan, ongoing
            support, and home delivery from a U.S. pharmacy when prescribed.
          </p>
          <div className="mt-8 max-w-xl">
            <Disclaimer>{PRICING_DISCLAIMER}</Disclaimer>

          </div>
        </div>
      </section>


      {/* PROGRAM CARDS */}
      <section id="programs" className="container-luxe scroll-mt-28 pb-8">
        {categoryOrder.map((category) => (
          <div key={category} className="mt-16 first:mt-0">
            <div className="mb-10 flex items-center gap-6">
              <h2 className="font-serif text-3xl text-forest md:text-4xl">{category}</h2>
              <span className="hairline flex-1" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {programs
                .filter((p) => p.category === category)
                .map((p) => (
                  <article
                    key={p.name}
                    className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_2px_20px_-12px_rgba(68,86,74,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_40px_80px_-40px_rgba(68,86,74,0.35)]"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={1200}
                        height={1504}
                        className={`h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05] ${p.image === testosteroneImg ? "object-[50%_14%]" : ""}`}
                      />
                      <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-background/85 px-3.5 py-1.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-forest backdrop-blur-md">
                        <span className="text-gold">★</span>
                        {p.badge}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="font-serif text-[1.75rem] leading-tight text-forest">{p.name}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.description}
                      </p>
                      <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-sage">
                        Includes {p.includes}
                      </p>

                      <div className="mt-7 border-t border-border/60 pt-6">
                        <p className="font-serif text-4xl text-forest">
                          ${p.price}
                          <span className="ml-1 font-sans text-sm uppercase tracking-[0.14em] text-muted-foreground">
                            /mo
                          </span>
                        </p>
                      </div>

                      <div className="mt-7">
                        <p className="text-[0.68rem] font-medium uppercase tracking-[0.2em] text-forest/70">
                          What's Included
                        </p>
                        <div className="mt-5">
                          <Included />
                        </div>
                      </div>

                      <Link
                        href="/wellness-assessment"
                        className="btn-primary mt-9 w-full"
                        aria-label={`${p.cta} for ${p.name}`}
                      >
                        {p.cta}
                      </Link>
                      <Link
                        href={`/programs/${p.slug}`}
                        className="btn-ghost mt-3 w-full"
                        aria-label={`Learn more about the ${p.name}`}
                      >
                        Learn More
                      </Link>
                      <p className="mt-4 text-center text-[0.68rem] leading-relaxed text-muted-foreground/80">
                        Begins a secure intake — not a purchase.
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}

      </section>

      {/* BOTANICAL BAND */}
      <section className="container-luxe py-14">
        <div className="relative overflow-hidden rounded-[2rem]">
          <img
            src={botanicalImg}
            alt="Eucalyptus and olive branches in soft morning light"
            loading="lazy"
            width={1920}
            height={912}
            className="h-[220px] w-full object-cover md:h-[300px]"
          />
        </div>
      </section>

      <Divider />

      {/* SECTION 2 — BUNDLES */}
      <section id="bundles" className="container-luxe scroll-mt-28 py-12 md:py-16">
        <SectionHeading
          eyebrow="Bundles"
          align="center"
          title={<>Signature Wellness <em className="italic">Bundles</em></>}
          intro="Physician-designed combinations of therapies created to maximize results through comprehensive wellness."
        />

        <div className="mt-10 grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          {standardBundles.map((b) => (
            <article
              key={b.name}
              className={`group relative flex min-w-0 flex-col rounded-[1.5rem] border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 md:p-7 ${
                "premium" in b && b.premium
                  ? "border-gold/60 bg-surface/70 shadow-[0_24px_55px_-36px_rgba(68,86,74,0.55)]"
                  : b.badge
                    ? "border-gold/40 bg-card shadow-[0_20px_45px_-36px_rgba(68,86,74,0.4)]"
                    : "border-border/60 bg-card hover:shadow-[0_28px_55px_-38px_rgba(68,86,74,0.3)]"
              }`}
            >
              <div className="flex min-h-6 flex-wrap items-center gap-2">
                <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-sage">
                  {b.group}
                </span>
                {b.badge && (
                  <span className={`rounded-full px-2.5 py-1 text-[0.55rem] font-medium uppercase tracking-[0.16em] ${
                    "premium" in b && b.premium ? "bg-gold text-forest" : "bg-surface text-forest"
                  }`}>
                    {b.badge}
                  </span>
                )}
              </div>

              <h3 className="mt-3 font-serif text-[1.65rem] leading-[1.08] text-forest md:text-[1.8rem]">
                {b.name}
              </h3>
              <p className="mt-2 text-[0.62rem] font-medium uppercase leading-relaxed tracking-[0.16em] text-muted-foreground">
                {b.subtitle}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>

              <div className="mt-4 border-t border-border/60 pt-4">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-forest/70">
                  Includes
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-forest/85">{b.includes.join(" + ")}</p>
              </div>

              <div className="mt-auto pt-5">
                <p className="font-serif text-[2.35rem] leading-none text-forest">
                  ${b.price}
                  <span className="ml-1 font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    /mo
                  </span>
                </p>
                <div className="mt-4 grid gap-2.5">
                  <Link href="/wellness-assessment" className="btn-primary w-full">
                    Take the Wellness Assessment
                  </Link>
                  <Link
                    href={`/bundles/${b.slug}`}
                    className="btn-ghost w-full"
                    aria-label={`Learn more about the ${b.name}`}
                  >
                    Explore {b.name}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {totalOptimization && (
          <article className="relative mt-6 overflow-hidden rounded-[1.5rem] border border-gold/70 bg-surface/70 px-6 py-7 shadow-[0_28px_65px_-38px_rgba(68,86,74,0.6)] md:px-8 md:py-8 lg:px-10">
            <span className="absolute inset-y-0 left-0 w-1 bg-gold" aria-hidden="true" />
            <div className="grid min-w-0 gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full bg-gold px-3 py-1 text-[0.56rem] font-medium uppercase tracking-[0.16em] text-forest">
                    {totalOptimization.badge}
                  </span>
                  <span className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-sage">
                    {totalOptimization.group}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-3xl leading-tight text-forest md:text-[2.6rem]">
                  {totalOptimization.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-forest/85 md:text-base">
                  {totalOptimization.tagline}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                  {totalOptimization.description}
                </p>
                <div className="mt-4 border-t border-gold/30 pt-4">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.18em] text-forest/70">
                    Includes
                  </p>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-forest/85">
                    {totalOptimization.includes.join(" + ")}
                  </p>
                </div>
              </div>
              <div className="shrink-0 border-t border-gold/30 pt-5 lg:min-w-64 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0 lg:text-right">
                <p className="font-serif text-5xl leading-none text-forest md:text-[3.5rem]">
                  ${totalOptimization.price}
                  <span className="ml-1 font-sans text-sm uppercase tracking-[0.14em] text-muted-foreground">
                    /mo
                  </span>
                </p>
                <Link
                  href={`/bundles/${totalOptimization.slug}`}
                  className="btn-primary mt-5 w-full lg:w-auto"
                >
                  Explore Total Optimization
                </Link>
              </div>
            </div>
          </article>
        )}

        <div className="mx-auto mt-7 max-w-2xl text-center">
          <Disclaimer>
            Bundles describe programs of care, not guaranteed prescriptions. Every therapy is
            reviewed and approved by a licensed healthcare provider and dispensed only when
            clinically appropriate.
          </Disclaimer>
        </div>
      </section>

      <Divider />

      {/* COMPARISON */}
      <section id="compare" className="scroll-mt-28 bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Compare"
            align="center"
            title={<>Which program is <em className="italic">right for you?</em></>}
            intro="Start with the goal, not the molecule. Your provider will confirm the right path during your assessment."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {comparisons.map((c) => (
              <div
                key={`${c.name}-${c.note}`}
                className="group rounded-[1.75rem] border border-border/60 bg-card p-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
              >
                <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sage">{c.note}</p>
                <h3 className="mt-4 font-serif text-2xl text-forest">{c.name}</h3>
                <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                  Best for
                </p>
                <p className="mt-2 text-base text-forest/85">{c.best}</p>
                <span className="mt-7 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-balance">
              Answered with <em className="italic">care.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Everything you might want to know before beginning. If something isn't here,
              our care team is a message away.
            </p>
            <Link href="/contact" className="btn-ghost mt-8">
              Ask our team
            </Link>
          </div>

          <div className="divide-y divide-border/60 border-y border-border/60">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  >
                    <span className="font-serif text-xl md:text-2xl text-forest">{f.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sage transition-colors duration-300">
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-luxe pb-28 md:pb-36">
        <div className="rounded-[2.5rem] bg-forest px-8 py-24 text-center text-primary-foreground md:px-16 md:py-32">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Begin
          </span>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl md:text-6xl leading-[1.05] text-balance text-primary-foreground">
            Your health deserves more than <em className="italic">one-size-fits-all</em> care.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            Take the first step toward personalized, physician-guided wellness with Nautic Health.
          </p>
          <Link
            href="/wellness-assessment"
            className="mt-12 inline-flex items-center justify-center rounded-full bg-gold px-12 py-4 text-sm tracking-wide text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            Take the Wellness Assessment
          </Link>
          <p className="mx-auto mt-10 max-w-2xl text-[0.72rem] leading-relaxed text-primary-foreground/50">
            Nautic Health programs require evaluation and approval by a licensed healthcare
            provider. Prescriptions are not guaranteed, and therapies are provided only when
            clinically appropriate. This page is for informational purposes and is not medical
            advice.
          </p>
        </div>
      </section>
    </>
  );
}

export default AllTreatments;
