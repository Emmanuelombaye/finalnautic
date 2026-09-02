import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { siteConfig } from "@/lib/data";
import { pricingIncludes } from "@/lib/program-shared";
import { programs as programList } from "@/lib/programs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Treatments",
  description:
    "Browse physician-guided Semaglutide and Tirzepatide programs with transparent monthly pricing.",
};

const pricingFaqs = [
  {
    question: "Do I need a live consultation?",
    answer:
      "Not always. Provider evaluations may be completed asynchronously or through a live consultation depending on the treatment, your medical history, state requirements, and the provider's clinical judgment. If a live consultation is needed, you'll be given instructions for the next step.",
  },
  {
    question: "Am I a candidate?",
    answer:
      "Candidacy is determined only by a licensed healthcare provider after reviewing your medical history, current medications, and — where indicated — laboratory results. Not every patient will qualify for every therapy.",
  },
  {
    question: "How are treatments personalized?",
    answer:
      "Your provider designs a plan around your goals, biomarkers, lifestyle, and response over time. Dosing, cadence, and supportive care are adjusted at each review rather than fixed at the start.",
  },
  {
    question: "Do I need bloodwork?",
    answer:
      "Most programs include baseline laboratory testing so your provider can establish a clear picture before recommending anything, and repeat testing to monitor your response.",
  },
  {
    question: "Are medications shipped to my home?",
    answer:
      "When a therapy is prescribed, it is dispensed by a licensed pharmacy and shipped discreetly to your door in temperature-appropriate packaging. Prescriptions are never guaranteed and are issued only when clinically appropriate.",
  },
  {
    question: "How long does treatment typically last?",
    answer:
      "Most patients follow a program for several months, with regular provider reviews. Some continue with maintenance care; others transition to lifestyle-only support once goals are met.",
  },
  {
    question: "Can I cancel my membership?",
    answer:
      "Yes. Memberships are month-to-month with no long-term commitment. You can cancel at any time before your next billing date.",
  },
];

const compareItems = programList.map((p) => ({
  category: `${p.pricingCategory} · $${p.price}/mo`,
  name: p.name,
  bestFor:
    p.slug === "tirzepatide" ? "Advanced weight management" : "Weight management",
  href: p.href,
}));

function ProgramCard({ program }: { program: (typeof programList)[number] }) {
  return (
    <article className="rounded-[2rem] border border-border/60 bg-card p-8 md:p-10">
      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-gold">
        ★Medical Weight Loss
      </p>
      {program.badge && (
        <span className="mt-3 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs font-medium text-gold">
          {program.badge}
        </span>
      )}
      <h3 className="mt-5 font-serif text-3xl text-forest">{program.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{program.pricingSubtitle}</p>
      <p className="mt-3 text-sm text-gold">{program.includes}</p>
      <p className="mt-6 font-serif text-3xl text-forest">
        $ {program.price}
        <span className="font-sans text-xs uppercase text-muted-foreground">/mo</span>
      </p>
      <div className="mt-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sage">
          What&apos;s Included
        </p>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {pricingIncludes.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={siteConfig.assessmentUrl} className="btn-primary">
          Start Your Private Assessment
        </Link>
        <Link href={program.href} className="btn-outline">
          Learn More
        </Link>
      </div>
      <p className="mt-4 text-xs text-sage">Begins a secure intake — not a purchase.</p>
    </article>
  );
}

export default function AllTreatmentsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <Link
            href="/treatments"
            className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground hover:text-forest"
          >
            ← Explore treatments
          </Link>
          <p className="eyebrow mb-4 mt-6">All Treatments</p>
          <h1 className="heading-display max-w-4xl">Personalized Weight Management</h1>
          <p className="mt-4 text-sm uppercase tracking-[0.16em] text-sage">
            Physician-Led Care • U.S. Pharmacy Fulfillment • Home Delivery
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Two physician-guided programs — Semaglutide and Tirzepatide. One transparent
            monthly price includes medical oversight, a personalized treatment plan, ongoing
            support, and home delivery from a U.S. pharmacy when prescribed.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sage">
            Treatment is subject to clinical eligibility and jurisdictional availability.
            Medication is prescribed only when medically appropriate. Program details and
            medication availability are determined by your provider.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container-luxe space-y-20">
          <div>
            <h2 className="heading-section">Medical Weight Loss</h2>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {programList.map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Compare</p>
            <h2 className="mt-4 heading-section">Which program is right for you?</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Start with the goal, not the molecule. Your provider will confirm the right path
              during your assessment.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {compareItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-border/60 bg-card p-6 transition hover:border-gold/40"
                >
                  <p className="text-[0.6rem] uppercase tracking-[0.16em] text-sage">
                    {item.category}
                  </p>
                  <h3 className="mt-3 font-serif text-xl text-forest">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Best for {item.bestFor}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 heading-section">Answered with care.</h2>
            <p className="mt-4 text-muted-foreground">
              Everything you might want to know before beginning. If something isn&apos;t here,
              our care team is a message away.
            </p>
            <FaqAccordion items={pricingFaqs} />
          </div>
        </div>
      </section>

      <section className="container-luxe pb-28">
        <div className="rounded-[2.5rem] bg-forest px-8 py-20 text-center text-primary-foreground md:px-16">
          <span className="eyebrow text-gold">Begin</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
            Your health deserves more than one-size-fits-all care.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/75">
            Take the first step toward personalized, physician-guided weight management with
            Nautic Health.
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
