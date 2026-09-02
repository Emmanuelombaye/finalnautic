import Link from "next/link";
import { Check } from "lucide-react";
import { comparisonRows, siteConfig } from "@/lib/data";

export default function ComparisonSection() {
  return (
    <section className="container-luxe py-28 md:py-40">
      <div className="rounded-[2.5rem] border border-border/60 bg-card p-8 md:p-14">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Why Nautic</span>
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] text-forest md:text-5xl">
            A more thoughtful approach to modern wellness care.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Nautic Health is designed to combine convenience with clinical context,
            diagnostics, continuity, and physician-guided decision-making.
          </p>
        </div>

        <div className="mt-16 hidden md:block">
          <div className="grid grid-cols-[1fr_1.25fr_1.25fr] gap-6 border-b border-border/60 pb-5">
            <span />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-sage">
              Typical Online Prescription Experience
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.18em] text-forest">
              Nautic Health
            </span>
          </div>
          {comparisonRows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-[1fr_1.25fr_1.25fr] gap-6 border-b border-border/60 py-7"
            >
              <span className="font-serif text-lg text-forest">{row.label}</span>
              <div className="flex items-start gap-3">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage/70"
                  aria-hidden
                />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {row.typical}
                </span>
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

        <div className="mt-8 space-y-6 md:hidden">
          {comparisonRows.map((row) => (
            <div key={row.label} className="rounded-2xl border border-border/50 p-6">
              <h3 className="font-serif text-lg text-forest">{row.label}</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sage/70"
                    aria-hidden
                  />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-sage">Typical</p>
                    <p className="mt-1 text-sm text-muted-foreground">{row.typical}</p>
                  </div>
                </div>
                <div className="rounded-xl bg-surface/60 p-4">
                  <div className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-green" aria-hidden />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-forest">
                        Nautic Health
                      </p>
                      <p className="mt-1 text-sm font-medium text-forest/90">
                        {row.nautic}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-16 max-w-3xl text-center text-base leading-relaxed text-muted-foreground">
          Nautic Health is built for patients who want modern convenience without
          losing the value of individualized medical oversight.
        </p>
        <div className="mt-10 text-center">
          <Link href={siteConfig.assessmentUrl} className="btn-primary">
            Start Your Private Assessment
          </Link>
        </div>
      </div>
    </section>
  );
}
