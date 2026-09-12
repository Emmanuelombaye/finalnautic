import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { resolveRelatedItem } from "@/lib/programs";
import {
  medicalDisclaimer,
  programSteps,
  siteConfig,
  type Treatment,
} from "@/lib/data";

export default function ProgramPage({ treatment }: { treatment: Treatment }) {
  const related = treatment.related
    .map(resolveRelatedItem)
    .filter((item): item is NonNullable<typeof item> => item !== null);
  const steps = programSteps.map((step) =>
    step.step === "04"
      ? {
          ...step,
          description: `If approved, your provider determines an individualized plan including ${treatment.name.toLowerCase()} when clinically appropriate.`,
        }
      : step
  );

  return (
    <>
      <section className="relative">
        <div className="relative h-[62svh] min-h-[420px] w-full overflow-hidden md:h-[74svh]">
          <Image
            src={treatment.heroImage}
            alt={treatment.name}
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover object-[50%_35%]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.28 0.02 155 / 0.88) 0%, oklch(0.28 0.02 155 / 0.45) 45%, oklch(0.28 0.02 155 / 0.2) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-luxe pb-14 md:pb-20">
              <span className="eyebrow text-gold">{treatment.programLabel}</span>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl leading-[1.05] text-primary-foreground md:text-7xl">
                {treatment.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                {treatment.subtitle}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-[0.7rem] tracking-wide text-primary-foreground/85">
                  {treatment.includes}
                </span>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href={siteConfig.assessmentUrl} className="btn-primary">
                  Start Your Private Assessment
                </Link>
                <p className="font-serif text-3xl text-primary-foreground">
                  ${treatment.price}
                  <span className="ml-1 font-sans text-sm uppercase tracking-[0.14em] text-primary-foreground/60">
                    /mo
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-luxe pt-8">
        <Link
          href="/treatments"
          className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-forest"
        >
          ← Back to Programs
        </Link>
      </div>

      <section className="container-luxe py-14 md:py-20">
        <span className="inline-flex items-center gap-3">
          <span className="h-px w-6 bg-sage" />
          <span className="eyebrow">Overview</span>
        </span>
        <div className="mt-8 max-w-3xl space-y-6">
          {treatment.overview.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="bg-surface/50 py-14 md:py-20">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sage" />
              <span className="eyebrow">Benefits</span>
            </span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              What this program <em className="italic">supports</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatment.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group rounded-[1.75rem] border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
              >
                <h3 className="font-serif text-xl text-forest">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
                <span className="mt-6 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-14 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">How it works</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
            A clear, unhurried <em className="italic">clinical path</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Every step is provider-led. Nothing is prescribed before your history
            and diagnostics are reviewed.
          </p>
        </div>
        <ol className="mt-14 space-y-0 border-t border-border/60">
          {steps.map((step) => (
            <li
              key={step.step}
              className="grid gap-4 border-b border-border/60 py-8 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-10"
            >
              <span className="font-serif text-2xl text-gold">{step.step}</span>
              <h3 className="font-serif text-xl text-forest md:text-2xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-surface/50 py-14 md:py-20">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sage" />
              <span className="eyebrow">Candidacy</span>
            </span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              Who may <em className="italic">benefit</em>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Candidacy is determined only by a licensed provider after reviewing your assessment.
            </p>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {treatment.candidacy.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                  aria-hidden
                />
                <span className="text-base leading-relaxed text-forest/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-luxe py-14 md:py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Questions</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
            Answered with <em className="italic">care.</em>
          </h2>
        </div>
        <FaqAccordion items={treatment.faqs} />
      </section>

      {related.length > 0 && (
        <section className="bg-surface/50 py-14 md:py-20">
          <div className="container-luxe">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-sage" />
                <span className="eyebrow">Related</span>
              </span>
              <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
                Other paths worth <em className="italic">considering</em>
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex flex-col justify-between rounded-[1.75rem] border border-border/60 bg-card p-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
                >
                  <div>
                    <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sage">
                      {r.label}
                    </p>
                    <h3 className="mt-4 font-serif text-2xl text-forest">{r.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {r.subtitle}
                    </p>
                  </div>
                  <span className="mt-8 text-[0.68rem] uppercase tracking-[0.22em] text-forest/70">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-luxe pb-6 pt-12 md:pt-16">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-border/60 bg-surface/60 p-8 md:p-10">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-forest/70">
            Medical Disclaimer
          </p>
          <p className="mt-4 text-[0.78rem] leading-relaxed text-muted-foreground">
            {medicalDisclaimer}
          </p>
        </div>
      </section>

      <section className="container-luxe pb-16 md:pb-24">
        <div className="rounded-[2.5rem] bg-forest px-8 py-14 text-center text-primary-foreground md:px-14 md:py-20">
          <span className="eyebrow text-gold">Begin</span>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl leading-[1.05] md:text-6xl">
            Begin with an <em className="italic">assessment</em>, not an assumption.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            A licensed provider will review your history and tell you honestly whether
            this program is right for you.
          </p>
          <Link
            href={siteConfig.assessmentUrl}
            className="mt-12 inline-flex items-center justify-center rounded-full bg-gold px-12 py-4 text-sm tracking-wide text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            Start Your Private Assessment
          </Link>
          <p className="mx-auto mt-8 max-w-xl text-[0.72rem] leading-relaxed text-primary-foreground/50">
            Begins a secure intake — not a purchase.
          </p>
        </div>
      </section>
    </>
  );
}
