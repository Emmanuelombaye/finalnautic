import Link from "next/link";
import { Hourglass, Scale, type LucideIcon } from "lucide-react";
import LeafDecorations from "@/components/LeafDecorations";
import { treatmentCategories, type TreatmentCategoryIcon } from "@/lib/data";

const iconMap: Record<TreatmentCategoryIcon, LucideIcon> = {
  scale: Scale,
  hourglass: Hourglass,
};

export default function TreatmentsGrid() {
  return (
    <section className="relative overflow-hidden bg-surface/60 pb-14 pt-14 md:pb-20 md:pt-20">
      <LeafDecorations />
      <div className="container-luxe relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Treatments</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] text-forest md:text-5xl">
            Evidence-based treatments,{" "}
            <em className="italic">personalized to you.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Structured, physician-guided Semaglutide and Tirzepatide programs for
            sustainable weight management. Not a single product — a partnership.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-3xl">
          {treatmentCategories.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Link
                key={category.title}
                href={category.href}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-lg"
              >
                <span className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-surface/80 text-forest transition-colors duration-500 group-hover:bg-gold/15 group-hover:text-gold">
                  <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
                </span>
                <h3 className="font-serif text-xl leading-tight text-forest">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-forest/80 transition-colors group-hover:text-gold">
                  Discover
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
