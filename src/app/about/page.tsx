import Image from "next/image";
import Link from "next/link";
import { aboutPrinciples, siteConfig } from "@/lib/data";
import { sectionAssets } from "@/lib/media";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nautic Health provides physician-guided Semaglutide and Tirzepatide weight-management care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe pb-10 md:pb-12">
          <p className="eyebrow mb-4">About</p>
          <h1 className="heading-display max-w-3xl">
            Physician-guided weight management, done carefully.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nautic Health offers physician-guided Semaglutide and Tirzepatide programs. We review
            your history, design a plan around your goals, and stay close as you progress — with
            prescriptions issued only when clinically appropriate.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-8 md:pb-12">
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl bg-surface">
          <Image
            src={sectionAssets.clinic}
            alt="Nautic Health clinic interior"
            fill
            sizes="100vw"
            quality={70}
            priority
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="container-luxe py-12 md:py-16">
        <div className="grid items-start gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:sticky md:top-24 md:col-span-5 md:h-fit">
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sage" />
              <span className="eyebrow">Philosophy</span>
            </span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              Care that compounds. <em className="italic">Quietly.</em>
            </h2>
          </div>
          <div className="space-y-8 text-lg leading-relaxed text-forest/85 md:col-span-7">
            <p>
              Weight management works best when it is medical, measured, and personal. Nautic Health
              was built to combine licensed provider review with transparent monthly pricing and
              ongoing clinical support.
            </p>
            <p>
              Every plan starts with your assessment. Nothing is prescribed before a licensed
              provider reviews your history, medications, and — when indicated — laboratory results.
            </p>
            <p>
              The result is a practice that respects your time, your intelligence, and the
              seriousness of building sustainable change.
            </p>
          </div>
        </div>
      </section>

      <section className="container-luxe pb-12 md:pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Principles</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
            Four commitments.
          </h2>
        </div>
        <div className="mt-10 grid gap-10 md:grid-cols-4">
          {aboutPrinciples.map((principle) => (
            <div key={principle.step} className="border-t border-forest/15 pt-6">
              <span className="font-serif text-sm text-gold">{principle.step}</span>
              <h3 className="mt-4 font-serif text-xl text-forest">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-12 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
            <Image
              src={sectionAssets.philosophy}
              alt="A morning wellness ritual"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={70}
              className="object-cover object-center"
            />
          </div>
          <div>
            <span className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-sage" />
              <span className="eyebrow">The team</span>
            </span>
            <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
              Licensed providers. <em className="italic">Clear decisions.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Your case is reviewed by a licensed medical provider. Eligibility, treatment
              recommendations, and follow-up are clinical decisions — never guaranteed purchases.
            </p>
            <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
              Start Your Private Assessment
            </Link>
          </div>
        </div>
      </section>

      <section className="container-luxe pb-12 md:pb-16">
        <div className="relative min-h-[24rem] overflow-hidden rounded-[2.5rem] md:min-h-[28rem]">
          <Image
            src={sectionAssets.couple}
            alt="A couple sharing morning coffee"
            fill
            sizes="100vw"
            quality={70}
            className="object-cover object-[58%_38%] md:object-[62%_40%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/65 to-forest/10" />
          <div className="relative flex h-full min-h-[24rem] flex-col justify-center p-8 text-primary-foreground md:min-h-[28rem] md:p-12 md:max-w-xl">
            <span className="eyebrow text-gold">Begin</span>
            <h2 className="mt-6 font-serif text-4xl leading-tight md:text-5xl">
              Ready when you are.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-primary-foreground/80">
              Complete a confidential intake. A licensed provider reviews your information before
              any treatment decision.
            </p>
            <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex w-fit">
              Start Your Private Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
