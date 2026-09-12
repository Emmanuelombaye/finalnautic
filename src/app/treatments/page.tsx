import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { popularTreatmentCards } from "@/lib/catalog";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Physician-guided Semaglutide and Tirzepatide programs for weight management.",
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="container-luxe pb-12 pt-10 md:pt-14">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Treatments</span>
          </span>
          <h1 className="mt-6 text-balance text-5xl leading-[1.02] md:text-7xl">
            What Would You Like <em className="italic">Support With?</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Two physician-guided programs. Explore Semaglutide or Tirzepatide — each reviewed by a
            licensed provider before anything is prescribed.
          </p>
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-sage">
            Physician-guided care • Licensed provider review • Personalized treatment decisions
          </p>
        </div>
      </section>

      <section className="container-luxe pb-14" aria-label="Weight management programs">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {popularTreatmentCards.map((card) => (
            <article
              key={card.slug}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_2px_20px_-12px_rgba(68,86,74,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_40px_80px_-40px_rgba(68,86,74,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={70}
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sage">
                  {card.category}
                </p>
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
                  <h2 className="font-serif text-[1.9rem] leading-tight text-forest">
                    {card.name}
                  </h2>
                  {card.price && (
                    <p className="font-serif text-2xl text-forest">
                      ${card.price}
                      <span className="font-sans text-[0.65rem] font-semibold uppercase text-muted-foreground">
                        /mo
                      </span>
                    </p>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
                <div className="mt-auto pt-7">
                  <Link href={card.href} className="btn-primary w-full">
                    <span>{card.cta}</span>
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-luxe border-t border-border/40 py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            You don&apos;t need to know which program is right for you. Tell us about your goals and
            health history, and a licensed provider can evaluate appropriate next steps.
          </p>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
            Start Your Private Assessment
          </Link>
        </div>
      </section>

      <section className="border-t border-border/40 py-12">
        <div className="container-luxe max-w-3xl text-center">
          <p className="text-xs leading-relaxed text-sage">
            Treatment is subject to clinical eligibility and jurisdictional availability. Medication
            is prescribed only when medically appropriate. Program details and medication
            availability are determined by your provider.
          </p>
        </div>
      </section>
    </>
  );
}
