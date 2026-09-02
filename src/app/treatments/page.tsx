import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { treatmentGoalCards } from "@/lib/catalog";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treatments by Goal",
  description:
    "Start with your goals. Explore physician-guided treatment options for weight management, hormone health, energy and longevity, recovery, cognitive wellness, and overall optimization.",
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="container-luxe pb-12 pt-20 md:pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Treatments</span>
          </span>
          <h1 className="mt-6 text-balance text-5xl leading-[1.02] md:text-7xl">
            What Would You Like <em className="italic">Support With?</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start with your goals. Explore physician-guided treatment options that may
            align with what you&apos;re looking to address.
          </p>
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-sage">
            Physician-guided care • Licensed provider review • Personalized treatment decisions
          </p>
        </div>
      </section>

      <section className="container-luxe pb-14" aria-label="Choose a wellness goal">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {treatmentGoalCards.map((card) => (
            <article
              key={card.title}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[0_2px_20px_-12px_rgba(68,86,74,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-[0_40px_80px_-40px_rgba(68,86,74,0.35)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="flex flex-1 flex-col p-7 md:p-8">
                <h2 className="font-serif text-[1.9rem] leading-tight text-forest">
                  {card.title}
                </h2>
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

      <section className="container-luxe border-t border-border/40 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section">Not Sure Where to Start?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            You don&apos;t need to know which treatment is right for you. Tell us about your
            goals and health history, and a licensed provider can evaluate appropriate next steps.
          </p>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
            Start Your Private Assessment
          </Link>
        </div>
      </section>

      <section className="container-luxe border-t border-border/40 pb-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-section">Already know what you&apos;re looking for?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Browse the full catalogue of individual treatments and Nautic Health bundles.
          </p>
          <Link href={siteConfig.pricingUrl} className="btn-outline mt-10 inline-flex">
            View All Treatments
          </Link>
        </div>
      </section>

      <section className="border-t border-border/40 py-12">
        <div className="container-luxe max-w-3xl text-center">
          <p className="text-xs leading-relaxed text-sage">
            Treatment is subject to clinical eligibility and jurisdictional availability.
            Medication is prescribed only when medically appropriate. Program details and
            medication availability are determined by your provider.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
