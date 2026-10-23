"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "@/lib/program-content";
import { StartCareButton } from "@/components/StartCareButton";

export function LandingHero({
  eyebrow,
  name,
  tagline,
  price,
  image,
  chips,
  dark = false,
  treatmentKey,
}: {
  eyebrow: string;
  name: string;
  tagline: string;
  price: string;
  image: string;
  chips?: string[];
  dark?: boolean;
  /** When set and mapped in VCO, Begin Your Care opens hosted intake */
  treatmentKey?: string;
}) {
  return (
    <section className="relative">
      <div className="relative h-[62svh] min-h-[420px] w-full overflow-hidden md:h-[74svh]">
        <img
          src={image}
          alt={name}
          width={1920}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover"
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
            <span
              className="eyebrow"
              style={{ color: "var(--gold)" }}
            >
              {eyebrow}
            </span>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] text-balance text-primary-foreground md:text-7xl">
              {name}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
              {tagline}
            </p>
            {chips && chips.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-primary-foreground/25 px-3.5 py-1.5 text-[0.7rem] tracking-wide text-primary-foreground/85"
                  >
                    {c}
                  </span>
                ))}
              </div>
            )}
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <StartCareButton
                treatmentKey={treatmentKey}
                className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-sm tracking-wide text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold/90 disabled:opacity-70"
              >
                Begin Your Care
              </StartCareButton>
              <p className="font-serif text-3xl text-primary-foreground">
                ${price}
                <span className="ml-1 font-sans text-sm uppercase tracking-[0.14em] text-primary-foreground/60">/mo</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {dark ? null : null}
    </section>
  );
}

export function Breadcrumb({ label, to }: { label: string; to: "/treatments" }) {
  return (
    <div className="container-luxe pt-8">
      <Link
        href={to}
        className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-forest"
      >
        ← Back to {label}
      </Link>
    </div>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-3xl space-y-6">
      {paragraphs.map((p) => (
        <p key={p} className="text-base leading-relaxed text-muted-foreground md:text-lg">
          {p}
        </p>
      ))}
    </div>
  );
}

export function StepList({
  steps,
}: {
  steps: { step: string; title: string; detail: string }[];
}) {
  return (
    <ol className="mt-14 space-y-0 border-t border-border/60">
      {steps.map((s) => (
        <li
          key={s.step}
          className="grid gap-4 border-b border-border/60 py-8 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:gap-10"
        >
          <span className="font-serif text-2xl text-gold">{s.step}</span>
          <h3 className="font-serif text-xl text-forest md:text-2xl">{s.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export function BenefitGrid({
  items,
}: {
  items: { title: string; detail: string }[];
}) {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((b) => (
        <div
          key={b.title}
          className="group rounded-[1.75rem] border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
        >
          <h3 className="font-serif text-xl text-forest">{b.title}</h3>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.detail}</p>
          <span className="mt-6 block h-px w-10 bg-gold/60 transition-all duration-500 group-hover:w-20" />
        </div>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-10 grid gap-5 sm:grid-cols-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-4">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
          <span className="text-base leading-relaxed text-forest/85">{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mt-12 divide-y divide-border/60 border-y border-border/60">
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
              <span className="font-serif text-xl text-forest md:text-2xl">{f.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-sage">
                {isOpen ? <Minus size={14} /> : <Plus size={14} />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] pb-8 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function RelatedCard({
  to,
  slug,
  name,
  note,
  kind,
}: {
  to: "/programs/$slug" | "/bundles/$slug";
  slug: string;
  name: string;
  note: string;
  kind: string;
}) {
  const href = to.replace("$slug", slug);
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-[1.75rem] border border-border/60 bg-card p-9 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
    >
      <div>
        <p className="text-[0.62rem] uppercase tracking-[0.22em] text-sage">{kind}</p>
        <h3 className="mt-4 font-serif text-2xl text-forest">{name}</h3>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{note}</p>
      </div>
      <span className="mt-8 text-[0.68rem] uppercase tracking-[0.22em] text-forest/70">
        Learn more →
      </span>
    </Link>
  );
}

export function MedicalDisclaimer() {
  return (
    <section className="container-luxe pb-6">
      <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-border/60 bg-surface/60 p-8 md:p-10">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-forest/70">
          Medical Disclaimer
        </p>
        <p className="mt-4 text-[0.78rem] leading-relaxed text-muted-foreground">
          This page is for informational purposes only and does not constitute medical advice.
          Nautic Health programs require evaluation and approval by a licensed healthcare
          provider. Therapies referenced here are included only when clinically appropriate;
          prescriptions are never guaranteed. Individual results vary. Your provider will review
          your medical history, current medications, and relevant risks before treatment begins.
        </p>
      </div>
    </section>
  );
}

export function FinalCta({
  title,
  intro,
  treatmentKey,
}: {
  title: React.ReactNode;
  intro: string;
  treatmentKey?: string;
}) {
  return (
    <section className="container-luxe pb-28 md:pb-36">
      <div className="rounded-[2.5rem] bg-forest px-8 py-24 text-center text-primary-foreground md:px-16 md:py-32">
        <span className="eyebrow" style={{ color: "var(--gold)" }}>
          Begin
        </span>
        <h2 className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.05] text-balance text-primary-foreground md:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
          {intro}
        </p>
        <StartCareButton
          treatmentKey={treatmentKey}
          className="mt-12 inline-flex items-center justify-center rounded-full bg-gold px-12 py-4 text-sm tracking-wide text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold/90 disabled:opacity-70"
        >
          Begin Your Care
        </StartCareButton>
        <p className="mx-auto mt-8 max-w-xl text-[0.72rem] leading-relaxed text-primary-foreground/50">
          Begins a secure intake — not a purchase.
        </p>
      </div>
    </section>
  );
}
