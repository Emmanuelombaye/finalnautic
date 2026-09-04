import Link from "next/link";
import { aboutPrinciples, siteConfig } from "@/lib/data";
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
        <div className="container-luxe section-padding pb-16">
          <p className="eyebrow mb-4">About</p>
          <h1 className="heading-display max-w-3xl">
            Physician-guided weight management, done carefully.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Nautic Health offers physician-guided Semaglutide and Tirzepatide programs.
            We review your history, design a plan around your goals, and stay close as
            you progress — with prescriptions issued only when clinically appropriate.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container-luxe max-w-3xl">
          <p className="eyebrow mb-4">Philosophy</p>
          <h2 className="heading-section">Care that compounds. Quietly.</h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>
              Weight management works best when it is medical, measured, and personal.
              Nautic Health was built to combine licensed provider review with transparent
              monthly pricing and ongoing clinical support.
            </p>
            <p>
              Every plan starts with your assessment. Nothing is prescribed before a
              licensed provider reviews your history, medications, and — when indicated —
              laboratory results.
            </p>
            <p>
              The result is a practice that respects your time, your intelligence, and the
              seriousness of building sustainable change.
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
          <h2 className="heading-section">Licensed providers. Clear decisions.</h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Your case is reviewed by a licensed medical provider. Eligibility, treatment
            recommendations, and follow-up are clinical decisions — never guaranteed
            purchases.
          </p>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
            Start Your Private Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
