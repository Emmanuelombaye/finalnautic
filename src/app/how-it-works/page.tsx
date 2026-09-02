import Link from "next/link";
import { howItWorksSteps, siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Five considered steps to physician-guided weight management with semaglutide or tirzepatide.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <p className="eyebrow mb-4">How it works</p>
          <h1 className="heading-display max-w-3xl">Five considered steps to a better decade.</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The Nautic Health journey is deliberately quiet. We take the time to understand
            you — and then we stay close for the long run.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container-luxe max-w-3xl">
          <div className="space-y-12">
            {howItWorksSteps.map((step) => (
              <div key={step.step} className="flex gap-8">
                <span className="shrink-0 font-serif text-4xl text-gold/60">{step.step}</span>
                <div>
                  <h2 className="font-serif text-2xl text-forest">{step.title}</h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border/40 bg-surface/60">
        <div className="container-luxe text-center">
          <p className="eyebrow mb-4">Ready when you are</p>
          <h2 className="heading-section">Begin with a confidential medical intake.</h2>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
            Start Your Private Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
