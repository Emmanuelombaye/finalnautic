"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import {
  articles,
  featuredArticles,
  journalCategories,
  journalHeroImage,
} from "@/lib/journal-content";
import { NewsletterSignup, ShareRow } from "@/components/journal/JournalParts";

function JournalIndex() {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      const matchesCategory = active === "All" || a.category === active;
      const matchesQuery =
        !q ||
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [active, query]);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[72svh] min-h-[460px] w-full overflow-hidden">
          <img
            src={journalHeroImage}
            alt="A quiet morning of reading and reflection"
            width={1920}
            height={1200}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.28 0.02 155 / 0.86) 0%, oklch(0.28 0.02 155 / 0.4) 50%, oklch(0.28 0.02 155 / 0.12) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-luxe pb-16 md:pb-24">
              <span className="eyebrow" style={{ color: "var(--gold)" }}>
                The Nautic Health Publication
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl leading-[1.02] text-balance text-primary-foreground md:text-8xl">
                Wellness Journal
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">
                Expert insights, wellness education and physician-guided resources designed to
                help you make informed decisions about your long-term health.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#articles"
                  className="inline-flex items-center justify-center rounded-full bg-gold px-10 py-4 text-sm tracking-wide text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold/90"
                >
                  Explore Articles
                </a>
                <Link
                  href="/treatments"
                  hash="programs"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/35 px-10 py-4 text-sm tracking-wide text-primary-foreground transition-all duration-500 hover:border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Take the Wellness Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED STORIES */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow="Featured"
          title={
            <>
              Stories worth <em className="italic">your time</em>
            </>
          }
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {featuredArticles.slice(0, 1).map((a) => (
            <Link
              key={a.slug}
              href={`/journal/${a.slug}`}
              className="group lg:col-span-7"
            >
              <div className="aspect-[16/11] overflow-hidden rounded-[2rem]">
                <img
                  src={a.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-7 text-[0.62rem] uppercase tracking-[0.22em] text-sage">
                {a.category} · {a.readTime}
              </p>
              <h3 className="mt-4 font-serif text-3xl leading-[1.08] text-balance text-forest md:text-5xl">
                {a.title}
              </h3>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                {a.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 border-b border-forest/40 pb-1 text-sm text-forest">
                Read Article <ArrowRight size={14} />
              </span>
            </Link>
          ))}
          <div className="grid gap-8 lg:col-span-5">
            {featuredArticles.slice(1, 5).map((a) => (
              <Link
                key={a.slug}
                href={`/journal/${a.slug}`}
                className="group grid grid-cols-[7rem_1fr] items-center gap-5 sm:grid-cols-[10rem_1fr] sm:gap-7"
              >
                <div className="aspect-square overflow-hidden rounded-[1.25rem]">
                  <img
                    src={a.image}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
                  />
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-sage">
                    {a.category} · {a.readTime}
                  </p>
                  <h3 className="mt-2 font-serif text-xl leading-tight text-balance text-forest md:text-2xl">
                    {a.title}
                  </h3>
                  <span className="mt-3 inline-block text-[0.68rem] uppercase tracking-[0.22em] text-forest/70">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-forest py-24 md:py-32">
        <div className="container-luxe text-center">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            On wellness
          </span>
          <blockquote className="mx-auto mt-8 max-w-4xl font-serif text-3xl leading-[1.2] text-balance text-primary-foreground md:text-5xl">
            “Long-term wellness begins with informed decisions, personalized care and
            consistency.”
          </blockquote>
          <p className="mt-8 text-[0.68rem] uppercase tracking-[0.22em] text-primary-foreground/55">
            The Nautic Health Medical Team
          </p>
        </div>
      </section>

      {/* BROWSE BY TOPIC + SEARCH + GRID */}
      <section id="articles" className="container-luxe scroll-mt-28 py-20 md:py-28">
        <SectionHeading
          eyebrow="Browse by topic"
          title={
            <>
              Find what you're <em className="italic">curious about</em>
            </>
          }
        />

        <div className="relative mt-12 max-w-xl">
          <Search
            size={16}
            className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 text-sage"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search wellness articles..."
            aria-label="Search wellness articles"
            className="w-full rounded-full border border-border bg-card py-4 pl-14 pr-6 text-sm text-foreground outline-none transition-all duration-500 placeholder:text-muted-foreground focus:border-gold/60 focus:shadow-[0_20px_50px_-35px_rgba(68,86,74,0.55)]"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {["All", ...journalCategories].map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setActive(c)}
                aria-pressed={isActive}
                className={`rounded-full border px-5 py-2.5 text-[0.72rem] tracking-wide transition-all duration-500 ${
                  isActive
                    ? "border-forest bg-forest text-primary-foreground"
                    : "border-border bg-card text-forest/75 hover:-translate-y-0.5 hover:border-gold/50"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-14">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-muted-foreground">
              No articles match that search yet. Try another topic.
            </p>
          ) : (
            <div className="columns-1 gap-8 sm:columns-2 lg:columns-3 [&>*]:mb-8">
              {filtered.map((a, i) => (
                <Link
                  key={a.slug}
                  href={`/journal/${a.slug}`}
                  className="group block break-inside-avoid rounded-[1.75rem] border border-border/60 bg-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_30px_60px_-35px_rgba(68,86,74,0.3)]"
                >
                  <div
                    className={`overflow-hidden rounded-[1.4rem] ${
                      i % 3 === 1 ? "aspect-[4/5]" : "aspect-[4/3]"
                    }`}
                  >
                    <img
                      src={a.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="px-3 pb-3 pt-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-surface px-3 py-1 text-[0.6rem] uppercase tracking-[0.18em] text-forest/75">
                        {a.category}
                      </span>
                      <span className="text-[0.68rem] text-muted-foreground">{a.readTime}</span>
                    </div>
                    <h3 className="mt-4 font-serif text-2xl leading-tight text-balance text-forest">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {a.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-forest/70">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <NewsletterSignup />

      <section className="container-luxe pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Share the journal</Eyebrow>
          <div className="mt-6 flex justify-center">
            <ShareRow title="Nautic Health — Wellness Journal" />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="container-luxe pb-28 md:pb-36">
        <div className="rounded-[2.5rem] bg-forest px-8 py-24 text-center text-primary-foreground md:px-16 md:py-32">
          <span className="eyebrow" style={{ color: "var(--gold)" }}>
            Next step
          </span>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl leading-[1.05] text-balance text-primary-foreground md:text-6xl">
            Ready to Take the <em className="italic">Next Step?</em>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
            Discover physician-guided wellness programs personalized to your goals.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/wellness-assessment"
              className="inline-flex items-center justify-center rounded-full bg-gold px-12 py-4 text-sm tracking-wide text-forest transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold/90"
            >
              Take the Wellness Assessment
            </Link>
            <Link
              href="/treatments"
              hash="compare"
              className="inline-flex items-center justify-center rounded-full border border-primary-foreground/35 px-12 py-4 text-sm tracking-wide text-primary-foreground transition-all duration-500 hover:border-primary-foreground hover:bg-primary-foreground/10"
            >
              Compare Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default JournalIndex;
