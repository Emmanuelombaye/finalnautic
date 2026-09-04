import Image from "next/image";
import Link from "next/link";
import { howItWorksSteps, siteConfig } from "@/lib/data";
import { sectionAssets } from "@/lib/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Five clear steps from medical intake and licensed provider review to ongoing, physician-guided care.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe pb-10 md:pb-12">
          <p className="eyebrow mb-4">How it works</p>
          <h1 className="heading-display max-w-3xl">
            Five considered steps to <em className="italic">a better decade.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            The Nautic Health journey is deliberately quiet. We take the time to understand you —
            and then we stay close for the long run.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-16 md:pb-20">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:sticky md:top-24 md:col-span-5 md:h-fit">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
              <Image
                src={sectionAssets.clinic}
                alt="Nautic Health clinic"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                quality={70}
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          <ol className="space-y-14 md:col-span-7">
            {howItWorksSteps.map((step) => (
              <li
                key={step.step}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-forest/15 pt-8 md:gap-8"
              >
                <span className="font-serif text-4xl leading-none text-gold">{step.step}</span>
                <div>
                  <h2 className="text-balance font-serif text-2xl text-forest md:text-3xl">
                    {step.title}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface/60 py-14 md:py-20">
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
