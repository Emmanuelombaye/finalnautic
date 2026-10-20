import Link from "next/link";
import { Check } from "lucide-react";
import { Eyebrow } from "@/components/ui/section";

const rows = [
  {
    topic: "Evaluation Depth",
    typical: "Streamlined eligibility-focused intake",
    nautic:
      "Medical evaluation designed to consider health history, goals, current medications, and treatment appropriateness",
  },
  {
    topic: "Diagnostic Context",
    typical: "Diagnostics may be separate from the prescription experience",
    nautic:
      "Eligible diagnostic information can be incorporated into the provider evaluation and treatment plan",
  },
  {
    topic: "At-Home Testing Options",
    typical: "Testing may require separate coordination",
    nautic:
      "Eligible at-home collection options designed to reduce traditional lab friction",
  },
  {
    topic: "Continuity of Care",
    typical: "Often centered around access to a specific prescription",
    nautic:
      "Physician-guided care with follow-up and ongoing clinical support as appropriate for the treatment plan",
  },
  {
    topic: "Pharmacy Fulfillment",
    typical: "Fulfillment model may vary by platform",
    nautic: "U.S. pharmacy fulfillment through appropriate pharmacy pathways",
  },
  {
    topic: "Treatment Discovery",
    typical: "Medication-first browsing",
    nautic: "Goal-based treatment discovery supported by provider evaluation",
  },
];

export function WhyNauticComparison() {
  return (
    <section className="container-luxe py-28 md:py-40">
      <div className="rounded-[2.5rem] border border-border/60 bg-card p-8 md:p-14">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Why Nautic</Eyebrow>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-forest md:text-5xl">
            A more thoughtful approach to modern wellness care.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Nautic Health is designed to combine convenience with clinical context, diagnostics,
            continuity, and physician-guided decision-making.
          </p>
        </div>

        {/* Desktop table */}
        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-[1fr_1.25fr_1.25fr] gap-6 border-b border-border/60 pb-5">
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-sage" />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-sage">
              Typical Online Prescription Experience
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-forest">
              Nautic Health
            </span>
          </div>
          {rows.map((row) => (
            <div
              key={row.topic}
              className="grid grid-cols-[1fr_1.25fr_1.25fr] gap-6 border-b border-border/60 py-7"
            >
              <span className="font-serif text-lg text-forest">{row.topic}</span>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage/70" aria-hidden />
                <span className="text-sm leading-relaxed text-muted-foreground">{row.typical}</span>
              </div>
              <div className="-m-4 rounded-xl bg-surface/60 p-4">
                <div className="flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-green"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <span className="text-sm font-medium leading-relaxed text-forest/90">
                    {row.nautic}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile stacked */}
        <div className="mt-12 space-y-8 md:hidden">
          {rows.map((row) => (
            <div key={row.topic} className="border-b border-border/60 pb-8">
              <h3 className="font-serif text-xl text-forest">{row.topic}</h3>
              <div className="mt-5">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-sage">
                  Typical Online Prescription Experience
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.typical}</p>
              </div>
              <div className="mt-5 rounded-xl bg-surface/60 p-5">
                <p className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-forest">
                  Nautic Health
                </p>
                <div className="mt-2 flex items-start gap-3">
                  <Check
                    className="mt-0.5 h-4 w-4 shrink-0 text-green"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <p className="text-sm font-medium leading-relaxed text-forest/90">{row.nautic}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            Nautic Health is built for patients who want modern convenience without losing the value
            of individualized medical oversight.
          </p>
          <Link href="/wellness-assessment" className="btn-primary mt-8 inline-flex">
            Take the Wellness Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
