import Link from "next/link";
import { aboutPrinciples, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A modern longevity clinic built for people who take their health seriously.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <p className="eyebrow mb-4">About</p>
          <h1 className="heading-display max-w-3xl">
            A practice built for the next chapter of medicine.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nautic Health is a modern longevity clinic that partners with adults who take
            their health seriously. We measure what matters, design plans that hold up over
            decades, and stay close as your life changes — because meaningful health outcomes
            are the result of small, consistent decisions made over time.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Philosophy</p>
          <h2 className="heading-section">Care that compounds. Quietly.</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Conventional medicine excels at responding to illness. But most of the outcomes
              we care about — energy, resilience, sharp cognition, a body that moves the way we
              want it to at 70 — are shaped long before disease appears. Nautic Health was built
              to occupy that space.
            </p>
            <p>
              We combine advanced diagnostics, physician oversight, and a small, considered set
              of interventions to help you build a life that ages well. Every plan is tailored to
              your data and your goals. No gimmicks. No fads. No selling.
            </p>
            <p>
              The result is a practice that feels less like a clinic and more like a trusted
              advisor — one that respects your time, your intelligence, and the seriousness of
              what&apos;s at stake.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border/40 bg-surface/60">
        <div className="container-luxe">
          <div className="mb-12 max-w-2xl">
            <p className="eyebrow mb-4">Principles</p>
            <h2 className="heading-section">Four commitments.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {aboutPrinciples.map((principle) => (
              <div key={principle.step} className="card-surface p-8">
                <span className="text-sm font-medium text-gold/70">{principle.step}</span>
                <h3 className="mt-4 font-serif text-xl text-forest">{principle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">The team</p>
          <h2 className="heading-section">Physicians who think like longevity partners.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Our medical team brings together internal medicine, endocrinology, sports medicine,
            and functional health. What unites us is a belief that the best care is quiet,
            considered, and deeply personal. Your case is reviewed by a licensed provider who
            understands your plan.
          </p>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
            Start Your Private Assessment
          </Link>
        </div>
      </section>

      <section className="section-padding border-t border-border/40 bg-surface/60">
        <div className="container-luxe text-center">
          <h2 className="heading-section mx-auto max-w-2xl">
            Join a practice designed around the life you want to be living.
          </h2>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
            Start Your Private Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
