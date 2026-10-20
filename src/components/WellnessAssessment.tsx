"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronLeft, Compass, RotateCcw, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { recordWellnessAssessmentCompletion } from "@/lib/wellness-assessment.functions";
import {
  CARE_AREA_LABELS,
  type DepthSlug,
  type GoalSlug,
  type Recommendation,
  QUESTIONS,
  WELLNESS_RESULTS,
} from "@/lib/wellness-assessment.constants";
import { getBundle, getProgram, PRICING_TAGLINE } from "@/lib/program-content";

/**
 * Wellness Assessment — a short, non-medical wellness goal finder.
 * It suggests which existing Nautic Health treatment or program may fit a
 * visitor's stated goals. It is NOT a medical intake, makes no diagnoses, and
 * does not determine eligibility. The Private Assessment is separate.
 */

type Answer = number[];

type Card = {
  kind: "program" | "bundle";
  slug: string;
  name: string;
  eyebrow: string;
  tagline: string;
  price: string;
  includes: string;
  image: string;
};

function toCard(rec: Recommendation): Card | null {
  if (rec.kind === "program") {
    const p = getProgram(rec.slug);
    if (!p) return null;
    return {
      kind: "program",
      slug: p.slug,
      name: p.name,
      eyebrow: p.eyebrow,
      tagline: p.tagline,
      price: p.price,
      includes: p.includes,
      image: p.image,
    };
  }
  const b = getBundle(rec.slug);
  if (!b) return null;
  return {
    kind: "bundle",
    slug: b.slug,
    name: b.name,
    eyebrow: b.eyebrow,
    tagline: b.tagline,
    price: b.price,
    includes: b.savings,
    image: b.image,
  };
}

function RecommendationCard({ card, featured }: { card: Card; featured?: boolean }) {
  return (
    <article
      className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card shadow-md transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
        featured ? "border-gold shadow-xl ring-1 ring-gold/25" : "border-border/80 hover:border-gold/50"
      }`}
    >
      {featured && <span className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gold" aria-hidden />}

      <div className={`relative overflow-hidden bg-surface ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <img
          src={card.image}
          alt={`${card.name} — Nautic Health ${card.kind === "bundle" ? "program" : "treatment"}`}
          loading="lazy"
          width={960}
          height={600}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
        />
      </div>

      <div className={`flex flex-1 flex-col ${featured ? "p-8 md:p-10" : "p-7"}`}>
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sage">{card.eyebrow}</p>
        <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
          <h3 className={`min-w-0 leading-none text-forest ${featured ? "text-[2rem] md:text-[2.5rem]" : "text-[1.6rem]"}`}>
            {card.name}
          </h3>
          <p className="shrink-0 font-serif text-2xl leading-none text-forest">
            ${card.price}
            <span className="font-sans text-[0.65rem] font-semibold uppercase text-muted-foreground">/mo</span>
          </p>
        </div>
        <p className="mt-5 text-base font-medium leading-relaxed text-forest">{card.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.includes}</p>
        <div className="mt-auto pt-7">
          {card.kind === "program" ? (
            <Button asChild className="h-auto min-h-14 w-full rounded-full px-5 py-3 whitespace-normal">
              <Link href={`/programs/${card.slug}`}>
                <span>Learn more</span>
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          ) : (
            <Button asChild className="h-auto min-h-14 w-full rounded-full px-5 py-3 whitespace-normal">
              <Link href={`/bundles/${card.slug}`}>
                <span>Learn more</span>
                <ArrowRight aria-hidden />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function WellnessAssessment() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(QUESTIONS.map(() => []));
  const [direction, setDirection] = useState(1);

  const done = step >= QUESTIONS.length;
  const question = done ? QUESTIONS[QUESTIONS.length - 1] : QUESTIONS[step];

  const { result, depth } = useMemo(() => {
    const totals: Partial<Record<GoalSlug, number>> = {};
    const depthVotes: Partial<Record<DepthSlug, number>> = {};

    answers.forEach((picks, i) => {
      picks.forEach((choice) => {
        const opt = QUESTIONS[i].options[choice];
        if (!opt) return;
        Object.entries(opt.scores ?? {}).forEach(([k, v]) => {
          const key = k as GoalSlug;
          totals[key] = (totals[key] ?? 0) + (v ?? 0);
        });
        if (opt.depth) depthVotes[opt.depth] = (depthVotes[opt.depth] ?? 0) + 1;
      });
    });

    const best = (Object.entries(totals) as [GoalSlug, number][]).sort((a, b) => b[1] - a[1])[0];
    const topDepth = (Object.entries(depthVotes) as [DepthSlug, number][]).sort((a, b) => b[1] - a[1])[0];

    return {
      result: best?.[0] ?? ("overall-optimization" as GoalSlug),
      depth: topDepth?.[0] ?? ("unsure" as DepthSlug),
    };
  }, [answers]);

  const info = WELLNESS_RESULTS[result];
  const cards = useMemo(() => {
    const list = depth === "comprehensive" ? info.comprehensive : info.targeted;
    const seen = new Set<string>();
    return list
      .map(toCard)
      .filter((c): c is Card => Boolean(c))
      .filter((c) => {
        const key = `${c.kind}:${c.slug}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .slice(0, 3);
  }, [depth, info]);

  const primaryLabel = answers[0][0] !== undefined ? QUESTIONS[0].options[answers[0][0]].label.toLowerCase() : null;

  function toggle(i: number) {
    setAnswers((prev) => {
      const next = prev.map((a) => [...a]);
      const current = next[step];
      if (question.multi) {
        next[step] = current.includes(i) ? current.filter((x) => x !== i) : [...current, i];
      } else {
        next[step] = [i];
      }
      return next;
    });
  }

  function advance() {
    setDirection(1);
    setStep((s) => s + 1);
  }

  function choose(i: number) {
    toggle(i);
    if (!question.multi) window.setTimeout(advance, 160);
  }

  function restart() {
    setAnswers(QUESTIONS.map(() => []));
    setDirection(1);
    setStep(0);
  }

  const progress = Math.round(((done ? QUESTIONS.length : step) / QUESTIONS.length) * 100);

  const sectionRef = useRef<HTMLElement | null>(null);
  useEffect(() => {
    // Keep the active question in view as the visitor moves through the flow.
    if (step === 0) return;
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  const hasRecorded = useRef(false);
  useEffect(() => {
    if (!done || hasRecorded.current) return;
    hasRecorded.current = true;

    recordWellnessAssessmentCompletion({
      data: {
        careArea: result,
        referrer: typeof document !== "undefined" ? document.referrer : undefined,
      },
    }).catch(() => {
      // Silently ignore tracking failures so the visitor experience is unaffected.
    });
  }, [done, result]);

  return (
    <section ref={sectionRef} className="relative scroll-mt-24 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-gradient-to-b from-surface/70 to-transparent"
        aria-hidden
      />

      <div className="container-luxe relative py-14 md:py-28">
        {!done ? (
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center justify-center gap-3 text-sage">
              <Compass className="h-4 w-4" aria-hidden="true" />
              <span className="text-[0.68rem] uppercase tracking-[0.28em]">Wellness Assessment</span>
            </div>

            {/* Progress */}
            <div className="mt-8 md:mt-10">
              <div
                className="flex items-center gap-1.5"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={progress}
                aria-label={`Question ${step + 1} of ${QUESTIONS.length}`}
              >
                {QUESTIONS.map((q, i) => (
                  <span
                    key={q.id}
                    className={`h-1 flex-1 rounded-full transition-all duration-500 md:h-[3px] ${
                      i < step ? "bg-gold" : i === step ? "bg-gold/50" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between gap-4 md:mt-4">
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-sage md:text-[0.66rem]">
                  {question.eyebrow} · {step + 1} of {QUESTIONS.length}
                </p>
                {step > 0 && (
                  <button
                    type="button"
                    onClick={() => {
                      setDirection(-1);
                      setStep((s) => s - 1);
                    }}
                    className="-mr-3 inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-[0.72rem] uppercase tracking-[0.16em] text-sage transition-colors hover:text-forest active:text-forest"
                  >
                    <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
                  </button>
                )}
              </div>
            </div>

            <div
              key={`${question.id}-${direction}`}
              className={`mt-9 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 md:mt-12 ${
                direction > 0
                  ? "motion-safe:slide-in-from-bottom-3"
                  : "motion-safe:slide-in-from-top-3"
              }`}
            >
              <h1 className="font-serif text-[1.85rem] leading-[1.14] text-forest text-balance md:text-[2.75rem]">
                {question.prompt}
              </h1>
              {question.helper && (
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">{question.helper}</p>
              )}

              <div className="mt-8 flex flex-col divide-y divide-border/70 border-y border-border/70 md:mt-10">
                {question.options.map((opt, i) => {
                  const selected = answers[step].includes(i);
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => choose(i)}
                      className="group -mx-3 flex min-h-16 touch-manipulation items-center justify-between gap-5 rounded-xl px-3 py-5 text-left transition-all duration-300 hover:pl-2 active:bg-surface/70 md:mx-0 md:gap-6 md:rounded-none md:px-0 md:active:bg-transparent"
                    >
                      <span className="min-w-0">
                        <span
                          className={`block text-lg leading-snug transition-colors md:text-xl ${
                            selected ? "text-forest" : "text-forest/85 group-hover:text-forest"
                          }`}
                        >
                          {opt.label}
                        </span>
                        {opt.detail && (
                          <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground md:mt-1">
                            {opt.detail}
                          </span>
                        )}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-7 md:w-7 ${
                          selected
                            ? "border-gold bg-gold text-forest"
                            : "border-border text-transparent group-hover:border-gold/60"
                        }`}
                        aria-hidden
                      >
                        <Check className="h-4 w-4 md:h-3.5 md:w-3.5" />
                      </span>
                    </button>
                  );
                })}
              </div>

              {question.multi && (
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <Button onClick={advance} className="h-auto min-h-14 w-full rounded-full px-7 text-base sm:w-auto sm:min-h-12">
                    Continue
                    <ArrowRight aria-hidden />
                  </Button>
                  <button
                    type="button"
                    onClick={advance}
                    className="inline-flex min-h-11 items-center justify-center rounded-full px-4 text-[0.72rem] uppercase tracking-[0.18em] text-sage transition-colors hover:text-forest active:text-forest"
                  >
                    Skip
                  </button>
                </div>
              )}

              <p className="mt-12 text-[0.7rem] leading-relaxed text-muted-foreground">
                A short goal finder — no medical questions. Eligibility and clinical decisions happen
                later with a licensed provider.
              </p>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-6xl motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-3 text-sage">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span className="text-[0.68rem] uppercase tracking-[0.28em]">Your match</span>
              </div>
              <h1 className="mt-6 font-serif text-[2.25rem] leading-[1.08] text-forest text-balance md:text-[3.25rem]">
                {info.title}
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {primaryLabel
                  ? `Because your primary goal is ${primaryLabel}${
                      depth === "comprehensive"
                        ? " and you prefer a more comprehensive program"
                        : depth === "targeted"
                          ? " and you prefer one targeted treatment"
                          : ""
                    }, ${info.blurb.charAt(0).toLowerCase()}${info.blurb.slice(1)}`
                  : info.blurb}
              </p>
              <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {info.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2.5 text-sm text-forest/85">
                    <span className="h-1 w-1 rounded-full bg-gold" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {cards.length > 0 && (
              <div className="mt-16">
                <p className="text-center text-[0.66rem] uppercase tracking-[0.24em] text-sage">
                  Top recommendation
                </p>
                <div className="mx-auto mt-6 max-w-2xl">
                  <RecommendationCard card={cards[0]} featured />
                </div>

                {cards.length > 1 && (
                  <>
                    <p className="mt-16 text-center text-[0.66rem] uppercase tracking-[0.24em] text-sage">
                      Also worth considering
                    </p>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                      {cards.slice(1, 3).map((card) => (
                        <RecommendationCard key={`${card.kind}-${card.slug}`} card={card} />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            <p className="mt-12 text-center text-[0.68rem] uppercase tracking-[0.16em] text-sage">
              {PRICING_TAGLINE}
            </p>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
              <Link
                href={`/treatments/${result}`}
                className="btn-primary w-full justify-center text-center sm:w-auto"
              >
                Explore {CARE_AREA_LABELS[result]}
              </Link>
              <Link
                href="/treatments/all"
                className="btn-ghost w-full justify-center text-center sm:w-auto"
              >
                View all treatments
              </Link>
              <button
                type="button"
                onClick={restart}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-[0.72rem] uppercase tracking-[0.16em] text-sage transition-colors hover:text-forest active:text-forest"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> Start over
              </button>
            </div>

            <p className="mx-auto mt-12 max-w-2xl text-center text-[0.72rem] leading-relaxed text-muted-foreground">
              The Wellness Assessment is educational guidance, not medical advice, a diagnosis, or a
              determination of eligibility. Treatment decisions are made by a licensed provider
              through the separate Private Assessment and provider review.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
