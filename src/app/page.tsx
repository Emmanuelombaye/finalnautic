import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nautic Health — Personalized Longevity Medicine",
  description: "Physician-guided wellness programs for weight, recovery, longevity, and healthy aging. Personalized care for a longer, healthier life.",
};

import { assetUrl } from "@/lib/asset";
import Link from "next/link";
import heroImg from "@/assets/nh-nature-poster.jpg";
import { HeroReel } from "@/components/HeroReel";
import { WhyNautic } from "@/components/WhyNautic";
import { WhyNauticComparison } from "@/components/WhyNauticComparison";
import { CoreOffers } from "@/components/CoreOffers";

import philosophyImg from "@/assets/philosophy.jpg";
import longevityImg from "@/assets/longevity.jpg";
import ctaStretchImg from "@/assets/cta-stretch-real.jpg";
import bloodTestImg from "@/assets/tasso-blood-test.png.asset.json";
import leafSage from "@/assets/leaf-sage.png";
import leafSage2 from "@/assets/leaf-sage-2.png";
import leafForest from "@/assets/leaf-forest.png";
import leafGold from "@/assets/leaf-gold.png";
import vine from "@/assets/vine.png";
import journeyGoal from "@/assets/journey-goal.jpg";
import journeyAssessment from "@/assets/journey-assessment.jpg";
import journeyReview from "@/assets/journey-review.jpg";
import journeyConsult from "@/assets/journey-consult.jpg";
import journeySupport from "@/assets/journey-support.jpg";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import {
  Scale,
  Hourglass,
  Zap,
  Sparkles,
  Dna,
  ChevronRight,
  ChevronDown,
  Stethoscope,
  PackageCheck,
  House,
  MapPinned,
  Layers,
} from "lucide-react";

const programs = [
  {
    name: "Medical Weight Loss",
    blurb: "Physician-guided metabolic restoration for sustainable, healthy weight.",
    icon: Scale,
  },
  {
    name: "Longevity",
    blurb: "Advanced diagnostics and interventions designed to extend healthspan.",
    icon: Hourglass,
  },
  {
    name: "Recovery",
    blurb: "Precision protocols for energy, sleep, and physical resilience.",
    icon: Zap,
  },
  {
    name: "Hair & Skin",
    blurb: "Inside-out aesthetics for radiant skin, fuller hair, and confident aging.",
    icon: Sparkles,
  },
  {
    name: "Hormone Optimization",
    blurb: "Personalized hormone balancing for clarity, vitality, and emotional balance.",
    icon: Dna,
  },
];

const journey = [
  { n: "01", title: "Choose your treatment or program", body: "Explore options based on your health and wellness goals.", img: journeyGoal },
  { n: "02", title: "Complete your medical intake", body: "Provide the health information needed for a licensed provider to evaluate your eligibility.", img: journeyAssessment },
  { n: "03", title: "Provider review", body: "Your evaluation may be completed asynchronously or through a live consultation when clinically appropriate.", img: journeyReview },
  { n: "04", title: "Treatment determination", body: "If approved, your provider determines the appropriate treatment plan and next steps.", img: journeyConsult },
  { n: "05", title: "Ongoing care", body: "Receive physician-guided support and follow-up appropriate for your treatment plan.", img: journeySupport },
];

const testimonials = [
  {
    quote:
      "Nautic Health is the first practice that treated me like a whole person. My energy, sleep, and focus are unrecognizable — and I finally feel ahead of my health.",
    name: "Sophia R.",
    role: "Founder, 42",
  },
  {
    quote:
      "The care feels bespoke. The science is serious. It's the difference between managing symptoms and building a longer, better life.",
    name: "James D.",
    role: "Attorney, 51",
  },
  {
    quote:
      "I've worked with countless specialists. None have taken the time Nautic Health takes. I feel truly seen — and stronger than I have in years.",
    name: "Amelia L.",
    role: "Executive, 47",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-start justify-center overflow-hidden pt-32 md:h-[100svh] md:min-h-[640px] md:items-center md:pt-0">
        <HeroReel poster={heroImg} />

        {/* minimal cinematic overlay: soft top scrim + centre lift + base vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,26,22,0.42) 0%, rgba(20,26,22,0.14) 28%, rgba(20,26,22,0.22) 62%, rgba(20,26,22,0.62) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(70% 60% at 50% 52%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 70%)",
          }}
        />

        <div className="relative container-luxe text-center">
          <div className="mx-auto max-w-4xl reveal">
            <span className="inline-flex items-center gap-4">
              <span className="w-10 h-px bg-white/40" />
              <span className="text-[0.68rem] tracking-[0.32em] uppercase text-white/75">
                PHYSICIAN-GUIDED WELLNESS
              </span>
              <span className="w-10 h-px bg-white/40" />
            </span>

            <h1 className="mt-7 font-serif text-white text-balance text-[2.15rem] sm:text-5xl lg:text-[3.6rem] leading-[1.08] tracking-[-0.01em]">
              Physician-Guided Weight Loss, Hormones, and Longevity Care
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-white/80 md:text-lg">
              Personalized medical care designed around your goals, with transparent monthly
              pricing, licensed provider review, convenient diagnostics, and treatment delivered
              directly to you when medically appropriate.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                href="/wellness-assessment"
                className="btn-primary w-full sm:w-auto"
                style={{ background: "var(--gold)", color: "var(--forest)" }}
              >
                Take the Wellness Assessment
              </Link>
              <Link
                href="/treatments/all"
                className="btn-ghost w-full sm:w-auto"
                style={{ color: "white", borderColor: "rgba(255,255,255,0.38)" }}
              >
                View Pricing
              </Link>
            </div>
            <p className="mt-3 text-xs text-white/65">Start with your goals and health history.</p>

            <ul className="mx-auto mt-6 grid max-w-4xl grid-cols-2 border-y border-white/20 py-3 text-left text-[0.65rem] text-white/75 sm:grid-cols-4 sm:text-center md:text-[0.7rem]">
              {[
                { label: "Licensed Medical Providers", icon: Stethoscope },
                { label: "U.S. Pharmacy Fulfillment", icon: PackageCheck },
                { label: "At-Home Testing Available", icon: House },
                { label: "Care in All 50 States", icon: MapPinned },
              ].map(({ label, icon: Icon }, i) => (
                <li
                  key={label}
                  className={`flex min-h-10 items-center gap-2 px-3 py-1.5 sm:justify-center ${
                    i % 2 === 1 ? "border-l border-white/20" : ""
                  } ${i > 1 ? "border-t border-white/20 sm:border-t-0" : ""} ${
                    i > 0 ? "sm:border-l sm:border-white/20" : ""
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0 text-gold" strokeWidth={1.6} aria-hidden />
                  <span className="leading-snug">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-white/55">
            Scroll
          </span>
          <span className="block h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      <CoreOffers />

      {/* JOURNEY */}
      <section id="patient-journey" className="container-luxe pt-28 md:pt-40 pb-14 md:pb-20">
        <SectionHeading
          align="center"
          eyebrow="The Patient Journey"
          title={<>Five steps to a <em className="italic">better decade.</em></>}
        />

        {/* Desktop: horizontal editorial flow */}
        <div className="hidden md:grid md:grid-cols-5 md:gap-10 mt-16 md:mt-24">
          {journey.map((s, i) => (
            <div key={s.n} className="group relative flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface/50">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <div className="mt-8 flex items-center gap-4">
                <span className="font-serif text-3xl text-sage/80">{s.n}</span>
                {i < journey.length - 1 && (
                  <>
                    <span className="h-px flex-1 bg-forest/10" />
                    <ChevronRight className="h-4 w-4 shrink-0 text-forest/25" />
                  </>
                )}
              </div>

              <h3 className="mt-5 font-serif text-xl text-forest">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical editorial flow */}
        <div className="md:hidden relative mt-14 space-y-12">
          <div className="absolute left-5 top-8 bottom-8 w-px bg-gradient-to-b from-forest/5 via-forest/15 to-forest/5" />
          {journey.map((s, i) => (
            <div key={s.n} className="relative pl-14">
              <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-forest/10 bg-background">
                <span className="font-serif text-lg text-sage">{s.n}</span>
              </div>
              {i < journey.length - 1 && (
                <ChevronDown className="absolute left-[0.65rem] top-12 h-4 w-4 text-forest/20" />
              )}

              <div className="aspect-[3/4] overflow-hidden rounded-xl bg-surface/50">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-5 font-serif text-xl text-forest">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="relative bg-surface/60 pt-14 md:pt-20 pb-14 md:pb-20 overflow-hidden">
        {/* scattered botanical leaves + vines in the background */}
        <img
          src={leafSage}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -top-12 -left-16 w-72 md:w-96 opacity-30 rotate-[18deg] select-none"
        />
        <img
          src={leafForest}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -bottom-20 -left-12 w-64 md:w-80 opacity-25 -rotate-[24deg] select-none"
        />
        <img
          src={leafGold}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-20 -right-20 w-72 md:w-96 opacity-30 rotate-[14deg] select-none"
        />
        <img
          src={leafSage}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute right-10 -bottom-24 w-64 md:w-80 opacity-25 -rotate-[10deg] select-none"
        />
        <img
          src={leafForest}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-1/2 -left-28 hidden lg:block w-80 opacity-20 rotate-[30deg] select-none"
        />
        <img
          src={leafSage2}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-40 left-1/4 w-40 md:w-52 opacity-25 -rotate-[15deg] select-none"
        />
        <img
          src={leafGold}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute -bottom-16 right-1/3 w-44 md:w-56 opacity-25 rotate-[22deg] select-none"
        />
        <img
          src={leafSage2}
          alt=""
          aria-hidden
          loading="lazy"
          width={1024}
          height={1024}
          className="pointer-events-none absolute top-1/3 right-8 w-36 md:w-48 opacity-20 rotate-[8deg] select-none"
        />

        <div className="container-luxe relative">
          <SectionHeading
            eyebrow="Treatments"
            title={<>Evidence-based treatments, <em className="italic">personalized to you.</em></>}
            intro="Structured, physician-guided programs for the outcomes that matter most. Not a single product — a partnership."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  href="/treatments"
                  key={p.name}
                  className="group relative flex flex-col rounded-2xl bg-card border border-border/50 p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-lg hover:border-gold/30"
                >
                  <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface/80 text-forest transition-colors duration-500 group-hover:bg-gold/15 group-hover:text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="font-serif text-xl text-forest leading-tight">{p.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
                  <span className="mt-auto pt-8 inline-flex items-center gap-2 text-sm text-forest/80 group-hover:text-gold transition-colors">
                    Discover
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY NAUTIC */}
      <WhyNautic />

      {/* AT-HOME DIAGNOSTICS */}
      <section className="container-luxe pb-14 md:pb-20">
        <div className="grid items-center gap-10 rounded-[2.5rem] border border-border/60 bg-card p-8 md:grid-cols-2 md:gap-16 md:p-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <img
              src={assetUrl(bloodTestImg)}
              alt="Tasso at-home blood collection kit"
              loading="lazy"
              width={1408}
              height={1056}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <Eyebrow>AT-HOME DIAGNOSTICS</Eyebrow>
            <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-forest md:text-4xl">
              Clinical Insight Without the Lab Waiting Room
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              When clinically appropriate, eligible testing can be completed from the privacy and
              convenience of home. Your results can be reviewed by a licensed medical provider and
              considered alongside your health history, goals, and treatment plan.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: House,
                  title: "At-Home Collection",
                  body: "Complete eligible testing from home without adding a traditional lab visit to your schedule.",
                },
                {
                  icon: Stethoscope,
                  title: "Provider Interpretation",
                  body: "Results can be reviewed by a licensed medical provider in the context of your medical evaluation.",
                },
                {
                  icon: Layers,
                  title: "Integrated Into Your Care",
                  body: "Relevant results can help inform provider decisions and become part of a more personalized treatment experience.",
                },
              ].map((b) => (
                <div key={b.title} className="flex flex-col">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/80 text-forest">
                    <b.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 font-serif text-lg text-forest">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link href="/wellness-assessment" className="btn-primary">
                Take the Wellness Assessment
              </Link>
              <Link href="/how-it-works" className="btn-ghost">
                Learn About At-Home Testing
              </Link>
            </div>

            <p className="mt-6 text-[0.7rem] tracking-[0.06em] text-sage">
              At-home convenience • Licensed provider review • Personalized clinical context
            </p>
          </div>
        </div>
      </section>

      {/* WHY NAUTIC COMPARISON */}
      <WhyNauticComparison />

      {/* PHILOSOPHY */}
      <section className="container-luxe py-28 md:py-40">
        <div className="grid gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src={philosophyImg}
                alt="A quiet morning wellness ritual on a linen-draped table"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1408}
                height={1600}
              />
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 md:pl-8">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-balance">
              Health is not the absence of illness. It's the <em className="italic">presence of vitality.</em>
            </h2>
            <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed">
              We believe the most sophisticated form of healthcare is proactive,
              personalized, and quiet. Not a product to sell. Not a symptom to
              chase. A partnership — grounded in modern science and respectful of
              your time — designed to compound over decades.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { t: "Physician-guided", d: "Every plan authored and reviewed by our medical team." },
                { t: "Evidence-based", d: "Rooted in the latest science on longevity and metabolism." },
                { t: "Personalized", d: "Built around your data, your goals, your life." },
                { t: "Discreet", d: "Concierge care, delivered on your terms." },
              ].map((f) => (
                <div key={f.t}>
                  <p className="font-serif text-lg text-forest">{f.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SPLIT LIFESTYLE / QUOTE */}
      <section className="container-luxe">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest text-primary-foreground">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <Eyebrow><span className="text-gold">A quiet promise</span></Eyebrow>
              <p className="mt-6 font-serif text-3xl md:text-4xl leading-tight text-white text-balance">
                &ldquo;The most valuable thing we can offer is not another treatment.
                It's <em className="italic">a longer life spent well</em> — with the energy,
                clarity, and resilience to enjoy it.&rdquo;
              </p>
              <p className="mt-8 text-sm text-white/60">{"\n"}</p>
            </div>
            <div className="relative min-h-[380px] md:min-h-full">
              <img
                src={longevityImg}
                alt="Man running along a coastal cliff path at dawn"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface/60 py-28 md:py-40 mt-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Voices from the practice"
            title={<>Care that <em className="italic">compounds.</em></>}
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-3xl bg-card p-10 border border-border/60"
              >
                <span className="font-serif text-4xl text-gold leading-none">&ldquo;</span>
                <blockquote className="mt-4 text-base leading-relaxed text-forest/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-serif text-lg text-forest">{t.name}</p>
                  <p className="text-xs tracking-wide uppercase text-muted-foreground mt-1">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-luxe py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <Eyebrow>Begin</Eyebrow>
            <h2 className="mt-6 text-5xl md:text-6xl leading-[1.02] text-balance">
              Your longer, healthier life <em className="italic">starts</em> with an evaluation.
            </h2>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Complete your medical intake for review by a licensed provider. Depending on your
              treatment, medical history, location, and clinical needs, your evaluation may be
              completed asynchronously or through a live consultation.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/wellness-assessment" className="btn-primary">Take the Wellness Assessment</Link>
              <Link href="/how-it-works" className="btn-ghost">How it works</Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[3/2] rounded-3xl overflow-hidden">
              <img
                src={ctaStretchImg}
                alt="A man and a woman stretching together in a sunlit sage-toned studio"
                className="h-full w-full object-cover object-center"
                loading="lazy"
                width={1536}
                height={1024}
              />
            </div>
          </div>
        </div>
      </section>

    </>

  );
}

export default Home;
