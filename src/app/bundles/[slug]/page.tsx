"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import {
  BenefitGrid,
  Breadcrumb,
  CheckList,
  FaqAccordion,
  FinalCta,
  LandingHero,
  MedicalDisclaimer,
  Prose,
  RelatedCard,
  StepList,
} from "@/components/landing/LandingParts";
import type { BundlePage } from "@/lib/program-content";
import { bundlePages, getBundle } from "@/lib/program-content";

export default function BundlePage() {

  const params = useParams<{ slug: string }>();
  const b = getBundle(params.slug);
  if (!b) notFound();
  const related = b.relatedBundles
    .map((s: string) => bundlePages.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <>
      <LandingHero
        eyebrow={b.eyebrow}
        name={b.name}
        tagline={b.tagline}
        price={b.price}
        image={b.image}
        chips={b.therapies}
      />

      <Breadcrumb label="Programs" to="/treatments" />

      {/* OVERVIEW */}
      <section className="container-luxe py-20 md:py-28">
        <Eyebrow>Overview</Eyebrow>
        <div className="mt-8">
          <Prose paragraphs={b.overview} />
        </div>
        {b.flagship && (
          <div className="mt-14 rounded-[2.5rem] bg-forest px-8 py-14 text-primary-foreground md:px-16 md:py-20">
            <span className="eyebrow" style={{ color: "var(--gold)" }}>
              Most Comprehensive
            </span>
            <h2 className="mt-6 max-w-3xl text-3xl leading-[1.08] text-primary-foreground md:text-5xl">
              Weight management and longevity care, <em className="italic">brought together.</em>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
              Tirzepatide, NAD+, Sermorelin, and Glutathione are coordinated within one
              physician-guided program when clinically appropriate, with ongoing oversight
              informed by your diagnostics and response.
            </p>
          </div>
        )}
      </section>

      {/* EVERYTHING INCLUDED */}
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Included"
            title={<>Everything <em className="italic">included</em></>}
          />
          <BenefitGrid items={b.included} />
        </div>
      </section>

      {/* SYNERGY + SAVINGS */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading
              eyebrow="Why together"
              title={<>Why these therapies work <em className="italic">together</em></>}
            />
            <ul className="mt-12 space-y-7 border-t border-border/60 pt-10">
              {b.synergy.map((s) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-forest/85">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="self-start rounded-[2rem] border border-border/60 bg-card p-10">
            <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-forest/70">
              Monthly price
            </p>
            <p className="mt-6 font-serif text-5xl text-forest">
              ${b.price}
              <span className="ml-1 font-sans text-sm uppercase tracking-[0.14em] text-muted-foreground">/mo</span>
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{b.savings}</p>
            <span className="mt-8 block h-px w-full bg-gold/40" />
            <p className="mt-8 text-[0.72rem] leading-relaxed text-muted-foreground/80">
              Month-to-month with no long-term commitment. Pricing reflects the program of care,
              not a guaranteed prescription.
            </p>
          </aside>
        </div>
      </section>

      {/* WHO FOR */}
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Candidacy"
            title={<>Who this bundle is <em className="italic">for</em></>}
            intro="Candidacy is determined only by a licensed provider after reviewing your assessment."
          />
          <CheckList items={b.whoFor} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow="How it works"
          title={<>One intake, one team, <em className="italic">one plan</em></>}
        />
        <StepList steps={b.howItWorks} />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Patients"
            align="center"
            title={<>In their <em className="italic">words</em></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {b.testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-[1.75rem] border border-border/60 bg-card p-9"
              >
                <blockquote className="font-serif text-xl leading-snug text-forest">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-sm text-forest/85">{t.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {t.detail}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-2xl text-center text-[0.72rem] leading-relaxed text-muted-foreground/80">
            Patient experiences are individual and are not a guarantee of results.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading eyebrow="Questions" title={<>Answered with <em className="italic">care.</em></>} />
        <FaqAccordion faqs={b.faqs} />
      </section>

      {/* RELATED BUNDLES */}
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Related"
            title={<>Other <em className="italic">bundles</em></>}
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {(related as BundlePage[]).map((r) => (
              <RelatedCard
                key={r!.slug}
                to="/bundles/$slug"
                slug={r!.slug}
                name={r!.name}
                note={r!.tagline}
                kind="Bundle"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20 md:pt-28" />
      <MedicalDisclaimer />

      <div className="pt-14" />
      <FinalCta
        title={<>A single plan for the whole <em className="italic">picture.</em></>}
        intro="Begin with a secure assessment. Your provider will confirm whether this bundle is clinically appropriate for you."
      />
    </>
  );
}
