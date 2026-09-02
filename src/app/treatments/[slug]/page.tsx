import Link from "next/link";
import { notFound } from "next/navigation";
import {
  categoryProgramOptions,
  otherGoalLinks,
} from "@/lib/programs";
import { siteConfig, treatmentCategoryPages } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(treatmentCategoryPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = treatmentCategoryPages[slug];
  if (!category) return { title: "Treatments" };
  return { title: category.title, description: category.description };
}

export default async function TreatmentCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = treatmentCategoryPages[slug];
  if (!category) notFound();

  const programs = categoryProgramOptions[slug] ?? [];
  const otherGoals = otherGoalLinks.filter((link) => !link.href.endsWith(slug));

  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <Link
            href="/treatments"
            className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-forest"
          >
            All goals
          </Link>
          <p className="eyebrow mb-4 mt-6">Treatment Options</p>
          <h1 className="heading-display max-w-3xl">{category.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            {category.description}
          </p>
          {slug === "hormone-health" && (
            <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
              Hormone-related treatment options for men and women. Your provider determines
              which, if any, is appropriate for you.
            </p>
          )}
          <p className="mt-6 text-[0.68rem] uppercase tracking-[0.2em] text-sage">
            Physician-guided care • Licensed provider review • Personalized treatment decisions
          </p>
        </div>
      </section>

      {programs.length > 0 && (
        <section className="section-padding border-t border-border/40">
          <div className="container-luxe">
            <h2 className="heading-section">Treatment Options</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {programs.map((program) => (
                <article key={program.href} className="card-surface flex flex-col p-8 md:p-10">
                  {program.badgeLabel && (
                    <span className="mb-4 inline-block w-fit text-[0.65rem] uppercase tracking-[0.18em] text-sage">
                      {program.badgeLabel}
                    </span>
                  )}
                  {program.badge && (
                    <span className="mb-4 inline-block w-fit rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
                      {program.badge}
                    </span>
                  )}
                  <h3 className="font-serif text-3xl text-forest">{program.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {program.subtitle}
                  </p>
                  <p className="mt-6 font-serif text-3xl text-forest">
                    $ {program.price}
                    <span className="font-sans text-xs uppercase text-muted-foreground">
                      /mo
                    </span>
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={siteConfig.assessmentUrl} className="btn-primary">
                      Start Your Private Assessment
                    </Link>
                    <Link href={program.href} className="btn-outline">
                      Explore Treatment
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-padding border-t border-border/40 bg-surface/40">
        <div className="container-luxe">
          <h2 className="font-serif text-2xl text-forest">Other goals</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {otherGoals.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-border/60 px-4 py-2 text-sm text-forest/80 transition hover:border-gold/40 hover:text-forest"
              >
                {link.label}
              </Link>
            ))}
          </div>
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

      <section className="container-luxe pb-28">
        <div className="rounded-[2.5rem] bg-forest px-8 py-20 text-center text-primary-foreground md:px-16">
          <span className="eyebrow text-gold">Begin</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight">
            A licensed provider decides what&apos;s appropriate.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/75">
            Share your goals and health history. Your provider reviews everything before any
            treatment is discussed or prescribed.
          </p>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-10 inline-flex">
            Start Your Private Assessment
          </Link>
          <p className="mx-auto mt-8 max-w-2xl text-xs text-primary-foreground/50">
            Nautic Health programs require evaluation and approval by a licensed healthcare
            provider. Prescriptions are not guaranteed, and therapies are provided only when
            clinically appropriate. This page is for informational purposes and is not medical
            advice.
          </p>
        </div>
      </section>
    </>
  );
}
