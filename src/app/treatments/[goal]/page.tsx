"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";
import { getGoal, treatmentGoals, TRUST_LINE } from "@/lib/treatment-goals";
import { PRICING_DISCLAIMER } from "@/lib/program-content";

function GoalPage() {
  const params = useParams<{ goal: string }>();
  const goal = getGoal(params.goal);
  if (!goal) notFound();
  const others = treatmentGoals.filter((g) => g.slug !== goal.slug);

  return (
    <>
      <section className="container-luxe pb-10 pt-20 md:pt-32">
        <Link
          href="/treatments"
          className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.18em] text-sage transition-colors hover:text-forest"
        >
          <ArrowLeft size={13} aria-hidden />
          All goals
        </Link>
        <div className="mt-7 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <Eyebrow>Treatment Options</Eyebrow>
            <h1 className="mt-5 text-balance text-4xl leading-[1.04] md:text-6xl">{goal.name}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {goal.short}
            </p>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-forest/80">{goal.intro}</p>
            <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-sage">{TRUST_LINE}</p>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-border/60">
            <img
              src={goal.image}
              alt={goal.imageAlt}
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-[4/3] h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {goal.treatments.length > 0 && (
        <section className="container-luxe pb-12">
          <div className="mb-9 flex items-center gap-6">
            <h2 className="font-serif text-3xl text-forest md:text-4xl">Treatment Options</h2>
            <span className="hairline flex-1" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goal.treatments.map((t) => (
              <article
                key={t.slug}
                className="flex flex-col rounded-[1.75rem] border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
              >
                <span className="inline-flex w-fit rounded-full bg-surface px-3 py-1 text-[0.58rem] font-medium uppercase tracking-[0.16em] text-sage">
                  {t.trust}
                </span>
                <h3 className="mt-5 font-serif text-[1.75rem] leading-tight text-forest">
                  {t.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.description}
                </p>
                {t.note && (
                  <p className="mt-3 text-[0.72rem] leading-relaxed text-forest/70">{t.note}</p>
                )}
                <div className="mt-6 border-t border-border/60 pt-5">
                  <p className="font-serif text-4xl text-forest">
                    ${t.price}
                    <span className="ml-1 font-sans text-sm uppercase tracking-[0.14em] text-muted-foreground">
                      /mo
                    </span>
                  </p>
                </div>
                <div className="mt-auto grid gap-2.5 pt-7">
                  <Link href="/wellness-assessment" className="btn-primary w-full">
                    Take the Wellness Assessment
                  </Link>
                  <Link
                    href={`/programs/${t.slug}`}
                    className="btn-ghost w-full"
                    aria-label={`Explore ${t.name}`}
                  >
                    Explore Treatment
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {goal.additional && (
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {goal.additional}{" "}
              <Link
                href={`/programs/${"nad-plus"}`}
                className="text-forest underline decoration-gold/60 underline-offset-4"
              >
                Learn more about NAD+
              </Link>
              .
            </p>
          )}
        </section>
      )}

      {goal.bundleLinks && (
        <section className="container-luxe pb-12">
          <div className="rounded-[2rem] border border-border/60 bg-surface/50 px-7 py-9 md:px-12 md:py-11">
            <p className="max-w-3xl text-base leading-relaxed text-forest/85">
              {goal.comprehensive}
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {goal.bundleLinks.map((b) => (
                <article
                  key={b.slug}
                  className="flex flex-col rounded-[1.5rem] border border-border/60 bg-card p-7"
                >
                  <h3 className="font-serif text-2xl leading-tight text-forest">{b.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {b.description}
                  </p>
                  <p className="mt-5 font-serif text-3xl text-forest">
                    ${b.price}
                    <span className="ml-1 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      /mo
                    </span>
                  </p>
                  <div className="mt-auto pt-6">
                    <Link
                      href={`/bundles/${b.slug}`}
                      className="btn-ghost w-full"
                      aria-label={`Explore ${b.label}`}
                    >
                      Explore Program
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/wellness-assessment" className="btn-primary">
                Take the Wellness Assessment
              </Link>
              <Link href="/treatments/all" className="btn-ghost">
                View All Treatments
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* OTHER GOALS */}
      <section className="container-luxe pb-14">
        <div className="border-t border-border/60 pt-10">
          <p className="text-[0.68rem] uppercase tracking-[0.2em] text-sage">Other goals</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {others.map((g) => (
              <Link
                key={g.slug}
                href={`/treatments/${g.slug}`}
                className="rounded-full border border-border/70 px-5 py-2.5 text-sm text-forest/80 transition-colors hover:border-gold/50 hover:text-forest"
              >
                {g.name}
              </Link>
            ))}
            <Link
              href="/treatments/all"
              className="rounded-full border border-border/70 px-5 py-2.5 text-sm text-forest/80 transition-colors hover:border-gold/50 hover:text-forest"
            >
              View All Treatments
            </Link>
          </div>
          <div className="mt-8 max-w-2xl">
            <p className="text-[0.72rem] leading-relaxed tracking-wide text-muted-foreground/80">
              {PRICING_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-luxe pb-28 md:pb-36">
        <div className="rounded-[2.5rem] bg-forest px-8 py-20 text-center text-primary-foreground md:px-16 md:py-24">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Begin
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl leading-[1.05] text-primary-foreground md:text-5xl">
            A licensed provider decides what's <em className="italic">appropriate.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            Share your goals and health history. Your provider reviews everything before any
            treatment is discussed or prescribed.
          </p>
          <Link
            href="/wellness-assessment"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-gold px-12 py-4 text-sm tracking-wide text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            Take the Wellness Assessment
          </Link>
          <p className="mx-auto mt-9 max-w-2xl text-[0.72rem] leading-relaxed text-primary-foreground/50">
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

export default GoalPage;
