"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { programPages, bundlePages } from "@/lib/program-content";

export function ShareRow({ title }: { title: string }) {
  const share = (network: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const t = encodeURIComponent(title);
    const u = encodeURIComponent(url);
    const map: Record<string, string> = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
      x: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
      email: `mailto:?subject=${t}&body=${u}`,
      instagram: "https://www.instagram.com/",
    };
    if (typeof window !== "undefined") window.open(map[network], "_blank", "noopener");
  };

  const items = [
    { key: "facebook", label: "Share on Facebook", Icon: Facebook },
    { key: "instagram", label: "Nautic Health on Instagram", Icon: Instagram },
    { key: "linkedin", label: "Share on LinkedIn", Icon: Linkedin },
    { key: "x", label: "Share on X", Icon: XIcon },
    { key: "email", label: "Share by email", Icon: Mail },
  ] as const;

  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map(({ key, label, Icon }) => (
        <button
          key={key}
          type="button"
          aria-label={label}
          onClick={() => share(key)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-sage transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/60 hover:text-forest"
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
}

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.844l-5.36-6.86L4.16 22H.9l8.02-9.166L1.5 2h7.02l4.84 6.24L18.244 2Zm-1.2 18h1.86L7.04 3.9H5.05L17.044 20Z" />
    </svg>
  );
}

export function NewsletterSignup() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-surface/60 py-24 md:py-32">
      <div className="container-luxe">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Newsletter</span>
          <h2 className="mt-6 text-4xl leading-[1.06] text-balance md:text-5xl">
            Stay <em className="italic">Connected</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Receive expert wellness insights, educational articles and exclusive updates from
            Nautic Health.
          </p>
          <form
            className="mt-10 grid gap-4 sm:grid-cols-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              required
              name="firstName"
              aria-label="First Name"
              placeholder="First Name"
              className="rounded-full border border-border bg-card px-6 py-4 text-sm outline-none transition-colors duration-500 placeholder:text-muted-foreground focus:border-gold/60"
            />
            <input
              required
              type="email"
              name="email"
              aria-label="Email Address"
              placeholder="Email Address"
              className="rounded-full border border-border bg-card px-6 py-4 text-sm outline-none transition-colors duration-500 placeholder:text-muted-foreground focus:border-gold/60"
            />
            <button type="submit" className="btn-primary sm:col-span-2">
              {sent ? "Thank you — you're on the list" : "Join the Nautic Health Community"}
            </button>
          </form>
          <p className="mt-5 text-[0.7rem] text-muted-foreground">
            Educational content only. No medical advice, and never any spam.
          </p>
        </div>
      </div>
    </section>
  );
}

export function JournalDisclaimer() {
  return (
    <section className="container-luxe pb-6">
      <div className="mx-auto max-w-3xl rounded-[1.75rem] border border-border/60 bg-surface/60 p-8 md:p-10">
        <p className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-forest/70">
          A gentle note
        </p>
        <p className="mt-4 text-[0.78rem] leading-relaxed text-muted-foreground">
          Everything in the Wellness Journal is shared for educational purposes and isn't a
          substitute for professional medical advice, diagnosis or treatment. Your health is
          personal, and the right next step depends on your own history. We'd encourage you to
          talk with a licensed healthcare provider before making decisions about your care.
        </p>
      </div>
    </section>
  );
}

export function RelatedProgramCards({
  items,
}: {
  items: { kind: "program" | "bundle"; slug: string }[];
}) {
  const resolved = items
    .map((i) => {
      if (i.kind === "program") {
        const p = programPages.find((x) => x.slug === i.slug);
        return p && { kind: i.kind, slug: p.slug, name: p.name, note: p.tagline };
      }
      const b = bundlePages.find((x) => x.slug === i.slug);
      return b && { kind: i.kind, slug: b.slug, name: b.name, note: b.tagline };
    })
    .filter(Boolean) as { kind: "program" | "bundle"; slug: string; name: string; note: string }[];

  if (resolved.length === 0) return null;

  return (
    <div className="mt-12 grid gap-6 md:grid-cols-3">
      {resolved.map((r) => (
        <div
          key={r.slug}
          className="flex flex-col justify-between rounded-[1.75rem] border border-border/60 bg-card p-8 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
        >
          <div>
            <p className="text-[0.6rem] uppercase tracking-[0.22em] text-sage">
              {r.kind === "program" ? "Program" : "Bundle"}
            </p>
            <h3 className="mt-4 font-serif text-2xl text-forest">{r.name}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {r.kind === "program" ? (
              <Link
                href={`/programs/${r.slug}`}
                className="text-[0.68rem] uppercase tracking-[0.22em] text-forest/75 transition-colors hover:text-forest"
              >
                Learn More →
              </Link>
            ) : (
              <Link
                href={`/bundles/${r.slug}`}
                className="text-[0.68rem] uppercase tracking-[0.22em] text-forest/75 transition-colors hover:text-forest"
              >
                Learn More →
              </Link>
            )}
            <Link
              href="/wellness-assessment"
              className="rounded-full border border-border px-5 py-2.5 text-[0.68rem] uppercase tracking-[0.18em] text-forest transition-all duration-500 hover:border-gold/60"
            >
              Take the Wellness Assessment
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
