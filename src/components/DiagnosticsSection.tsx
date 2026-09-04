import Image from "next/image";
import Link from "next/link";
import { Home, Layers, Stethoscope } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { sectionAssets } from "@/lib/media";

const items = [
  {
    title: "At-Home Collection",
    description:
      "Complete eligible testing from home without adding a traditional lab visit to your schedule.",
    icon: Home,
  },
  {
    title: "Provider Interpretation",
    description:
      "Results can be reviewed by a licensed medical provider in the context of your medical evaluation.",
    icon: Stethoscope,
  },
  {
    title: "Integrated Into Your Care",
    description:
      "Relevant results can help inform provider decisions and become part of a more personalized treatment experience.",
    icon: Layers,
  },
];

export default function DiagnosticsSection() {
  return (
    <section className="container-luxe pb-14 md:pb-20">
      <div className="grid items-center gap-10 rounded-[2.5rem] border border-border/60 bg-card p-8 md:grid-cols-2 md:gap-16 md:p-14">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
          <Image
            src={sectionAssets.tassoBloodTest}
            alt="Tasso at-home blood collection kit"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={70}
            className="object-cover object-center"
          />
        </div>

        <div>
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">AT-HOME DIAGNOSTICS</span>
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-[1.1] text-forest md:text-4xl">
            Clinical Insight Without the Lab Waiting Room
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            When clinically appropriate, eligible testing can be completed from
            the privacy and convenience of home. Your results can be reviewed by
            a licensed medical provider and considered alongside your health
            history, goals, and treatment plan.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {items.map((item) => (
              <div key={item.title} className="flex flex-col">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface/80 text-forest">
                  <item.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="mt-4 font-serif text-lg text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link href={siteConfig.assessmentUrl} className="btn-primary">
              Start Your Private Assessment
            </Link>
            <Link href="/how-it-works" className="btn-ghost">
              Learn About At-Home Testing
            </Link>
          </div>
          <p className="mt-6 text-[0.7rem] tracking-[0.06em] text-sage">
            At-home convenience • Licensed provider review • Personalized clinical context
          </p>
        </div>
      </div>
    </section>
  );
}
