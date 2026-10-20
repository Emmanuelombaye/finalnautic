"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import { FaqAccordion } from "@/components/landing/LandingParts";
import {
  JournalDisclaimer,
  NewsletterSignup,
  RelatedProgramCards,
  ShareRow,
} from "@/components/journal/JournalParts";
import { getArticle, relatedArticles } from "@/lib/journal-content";

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function ArticleView() {
  const params = useParams<{ slug: string }>();
  const a = getArticle(params.slug);
  if (!a) notFound();
  const related = relatedArticles(a.slug, a.category);

  return (
    <>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[58svh] min-h-[380px] w-full overflow-hidden md:h-[68svh]">
          <img
            src={a.image}
            alt=""
            width={1400}
            height={1050}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.28 0.02 155 / 0.88) 0%, oklch(0.28 0.02 155 / 0.4) 55%, oklch(0.28 0.02 155 / 0.12) 100%)",
            }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-luxe pb-14 md:pb-20">
              <p className="text-[0.62rem] uppercase tracking-[0.22em]" style={{ color: "var(--gold)" }}>
                {a.category} · {a.readTime}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl leading-[1.05] text-balance text-primary-foreground md:text-6xl">
                {a.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container-luxe pt-8">
        <Link
          href="/journal"
          className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-forest"
        >
          ← Back to Wellness Journal
        </Link>
      </div>

      {/* INTRO + TOC */}
      <section className="container-luxe py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>Contents</Eyebrow>
              <ol className="mt-6 space-y-3 border-l border-border pl-5">
                {a.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#${slugify(s.heading)}`}
                      className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-forest"
                    >
                      <span className="mr-2 text-gold">{String(i + 1).padStart(2, "0")}</span>
                      {s.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="#key-takeaways"
                    className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-forest"
                  >
                    <span className="mr-2 text-gold">
                      {String(a.sections.length + 1).padStart(2, "0")}
                    </span>
                    Key Takeaways
                  </a>
                </li>
              </ol>
              <div className="mt-10">
                <ShareRow title={a.title} />
              </div>
            </div>
          </div>

          <article className="lg:col-span-8">
            <div className="space-y-6">
              {a.intro.map((p) => (
                <p
                  key={p}
                  className="font-serif text-xl leading-relaxed text-forest/90 md:text-2xl"
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14 space-y-14">
              {a.sections.map((s) => (
                <section key={s.heading} id={slugify(s.heading)} className="scroll-mt-32">
                  <h2 className="font-serif text-3xl leading-tight text-balance text-forest md:text-4xl">
                    {s.heading}
                  </h2>
                  <span className="mt-5 block h-px w-14 bg-gold/70" />
                  <div className="mt-6 space-y-5">
                    {s.body.map((p) => (
                      <p key={p} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* KEY TAKEAWAYS */}
            <div
              id="key-takeaways"
              className="mt-16 scroll-mt-32 rounded-[2rem] bg-surface/70 p-9 md:p-12"
            >
              <span className="eyebrow">Key Takeaways</span>
              <ul className="mt-7 space-y-4">
                {a.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-4">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-gold"
                      aria-hidden="true"
                    />
                    <span className="text-base leading-relaxed text-forest/85">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Questions"
            title={
              <>
                Frequently <em className="italic">asked</em>
              </>
            }
          />
          <FaqAccordion faqs={a.faqs} />
        </div>
      </section>

      {/* RELATED ARTICLES */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow="Keep reading"
          title={
            <>
              You may also <em className="italic">enjoy</em>
            </>
          }
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} href="/journal/$slug" params={{ slug: r.slug }} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-[1.5rem]">
                <img
                  src={r.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                />
              </div>
              <p className="mt-5 text-[0.6rem] uppercase tracking-[0.22em] text-sage">
                {r.category} · {r.readTime}
              </p>
              <h3 className="mt-3 font-serif text-2xl leading-tight text-balance text-forest">
                {r.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* RELATED PROGRAMS */}
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="If you'd like to go further"
            title={
              <>
                Continue your <em className="italic">wellness journey</em>
              </>
            }
            intro="These programs relate to what you just read. Exploring one begins a clinical conversation — nothing more."
          />
          <RelatedProgramCards items={a.relatedPrograms} />
        </div>
      </section>

      <div className="pt-20" />
      <JournalDisclaimer />

      <NewsletterSignup />

      {/* FINAL CTA */}
      <section className="container-luxe py-28 md:py-36">
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

