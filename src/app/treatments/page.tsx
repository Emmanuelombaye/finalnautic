import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments by Goal — Nautic Health",
  description: "Start with your goals. Explore physician-guided treatment options for weight management, hormone health, energy and longevity, recovery, cognitive wellness, and overall optimization.",
};

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";
import { treatmentGoals, TRUST_LINE } from "@/lib/treatment-goals";
import { PRICING_DISCLAIMER } from "@/lib/program-content";

function NotSure() {
  return (
    <section className="container-luxe pb-6">
      <div className="rounded-[2rem] border border-border/60 bg-surface/60 px-7 py-9 md:px-12 md:py-11">
        <div className="grid gap-7 lg:grid-cols-[1.4fr_auto] lg:items-center lg:gap-12">
          <div>
            <h2 className="font-serif text-3xl text-forest md:text-4xl">
              Not Sure Where to Start?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              You don't need to know which treatment is right for you. Tell us about your goals
              and health history, and a licensed provider can evaluate appropriate next steps.
            </p>
          </div>
          <Link href="/wellness-assessment" className="btn-primary shrink-0 lg:w-auto">
            Take the Wellness Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}

function TreatmentGoals() {
  return (
    <>
      <section className="container-luxe pb-12 pt-20 md:pt-32">
        <div className="max-w-3xl">
          <Eyebrow>Treatments</Eyebrow>
          <h1 className="mt-6 text-balance text-5xl leading-[1.02] md:text-7xl">
            What Would You Like <em className="italic">Support With?</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start with your goals. Explore physician-guided treatment options that may align with
            what you're looking to address.
          </p>
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-sage">{TRUST_LINE}</p>
        </div>
      </section>

      {/* GOAL CARDS */}
      <section className="container-luxe pb-14" aria-label="Choose a wellness goal">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatmentGoals.map((goal) => (
            <article
              key={goal.slug}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_2px_20px_-12px_rgba(68,86,74,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_40px_80px_-40px_rgba(68,86,74,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={goal.image}
                  alt={goal.imageAlt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h2 className="font-serif text-[1.9rem] leading-tight text-forest">{goal.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{goal.short}</p>
                <div className="mt-auto pt-7">
                  <Link
                    href={`/treatments/${goal.slug}`}
                    className="btn-primary w-full"
                  >
                    <span>{goal.cta}</span>
                    <ArrowRight size={15} aria-hidden className="ml-2" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <NotSure />

      {/* VIEW ALL */}
      <section className="container-luxe py-14">
        <div className="flex flex-col items-start gap-5 border-t border-border/60 pt-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-2xl text-forest md:text-3xl">
              Already know what you're looking for?
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Browse the full catalogue of individual treatments and Nautic Health bundles.
            </p>
          </div>
          <Link href="/treatments/all" className="btn-ghost shrink-0">
            View All Treatments
          </Link>
        </div>
        <div className="mt-8 max-w-2xl">
          <p className="text-[0.72rem] leading-relaxed tracking-wide text-muted-foreground/80">
            {PRICING_DISCLAIMER}
          </p>
        </div>
      </section>
    </>
  );
}

export default TreatmentGoals;
