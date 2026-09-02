import Image from "next/image";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { medicalDisclaimer, siteConfig } from "@/lib/data";
import {
  bundleSteps,
  resolveRelatedItem,
  type Bundle,
} from "@/lib/programs";

export default function BundlePage({ bundle }: { bundle: Bundle }) {
  const related = bundle.related
    .map(resolveRelatedItem)
    .filter((item): item is NonNullable<typeof item> => item !== null);

  return (
    <>
      <section className="relative">
        <div className="relative h-[62svh] min-h-[420px] w-full overflow-hidden md:h-[74svh]">
          <Image
            src={bundle.heroImage}
            alt={bundle.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
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
              <span className="eyebrow text-gold">{bundle.category}</span>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl leading-[1.05] text-primary-foreground md:text-7xl">
                {bundle.name}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                {bundle.subtitle}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {bundle.includesTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-[0.7rem] tracking-wide text-primary-foreground/85"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-6">
                <Link href={siteConfig.assessmentUrl} className="btn-primary">
                  Start Your Private Assessment
                </Link>
                <p className="font-serif text-3xl text-primary-foreground">
                  ${bundle.price}
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
          href="/treatments/all"
          className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-forest"
        >
          ← Back to Programs
        </Link>
      </div>

      <section className="container-luxe py-20 md:py-28">
        <span className="inline-flex items-center gap-3">
          <span className="h-px w-6 bg-sage" />
          <span className="eyebrow">Overview</span>
        </span>
        <div className="mt-8 max-w-3xl space-y-6">
          {bundle.overview.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {bundle.highlightTitle && (
        <section className="bg-surface/50 py-20 md:py-28">
          <div className="container-luxe max-w-3xl">
            <span className="eyebrow">Most Comprehensive</span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              {bundle.highlightTitle}
            </h2>
            {bundle.highlightBody && (
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {bundle.highlightBody}
              </p>
            )}
          </div>
        </section>
      )}

      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sage" />
              <span className="eyebrow">Included</span>
            </span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              Everything <em className="italic">included</em>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bundle.included.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-border/60 bg-card p-8"
              >
                <h3 className="font-serif text-xl text-forest">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Why together</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
            Why these therapies work <em className="italic">together</em>
          </h2>
        </div>
        <ul className="mt-10 max-w-3xl space-y-5">
          {bundle.whyTogether.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
              <span className="text-base leading-relaxed text-forest/85">{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-14 max-w-md rounded-[1.75rem] border border-border/60 bg-surface/60 p-8">
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-sage">Monthly price</p>
          <p className="mt-4 font-serif text-4xl text-forest">
            ${bundle.price}
            <span className="ml-1 font-sans text-sm uppercase text-muted-foreground">/mo</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            One flat monthly price covering both programs under a single plan of care.
          </p>
        </div>
      </section>

      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sage" />
              <span className="eyebrow">Candidacy</span>
            </span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              Who this bundle is <em className="italic">for</em>
            </h2>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {bundle.candidacy.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden />
                <span className="text-base leading-relaxed text-forest/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-luxe py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">How it works</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
            One intake, one team, one <em className="italic">plan</em>
          </h2>
        </div>
        <ol className="mt-14 space-y-0 border-t border-border/60">
          {bundleSteps.map((step) => (
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

      {bundle.patientQuotes && bundle.patientQuotes.length > 0 && (
        <section className="bg-surface/50 py-20 md:py-28">
          <div className="container-luxe">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-sage" />
                <span className="eyebrow">Patients</span>
              </span>
              <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
                In their <em className="italic">words</em>
              </h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {bundle.patientQuotes.map((quote) => (
                <figure
                  key={quote.attribution}
                  className="rounded-3xl border border-border/60 bg-card p-10"
                >
                  <blockquote className="text-base leading-relaxed text-forest/90">
                    &ldquo;{quote.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm text-muted-foreground">
                    — {quote.attribution}
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-8 text-xs text-sage">
              Patient experiences are individual and are not a guarantee of results.
            </p>
          </div>
        </section>
      )}

      <section className="container-luxe py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Questions</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
            Answered with <em className="italic">care.</em>
          </h2>
        </div>
        <FaqAccordion items={bundle.faqs} />
      </section>

      {related.length > 0 && (
        <section className="bg-surface/50 py-20 md:py-28">
          <div className="container-luxe">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3">
                <span className="h-px w-6 bg-sage" />
                <span className="eyebrow">Related</span>
              </span>
              <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
                Other bundles
              </h2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group flex flex-col justify-between rounded-[1.75rem] border border-border/60 bg-card p-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
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

      <section className="container-luxe pb-6 pt-20 md:pt-28">
        <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-border/60 bg-surface/60 p-8 md:p-10">
          <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-forest/70">
            Medical Disclaimer
          </p>
          <p className="mt-4 text-[0.78rem] leading-relaxed text-muted-foreground">
            {medicalDisclaimer}
          </p>
        </div>
      </section>

      <section className="container-luxe pb-28 md:pb-36">
        <div className="rounded-[2.5rem] bg-forest px-8 py-24 text-center text-primary-foreground md:px-16 md:py-32">
          <span className="eyebrow text-gold">Begin</span>
          <h2 className="mx-auto mt-6 max-w-4xl text-balance text-4xl leading-[1.05] md:text-6xl">
            A single plan for the <em className="italic">whole picture.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            Begin with a secure assessment. Your provider will confirm whether this bundle is
            clinically appropriate for you.
          </p>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-12 inline-flex">
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
