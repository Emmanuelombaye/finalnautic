import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { popularTreatmentCards } from "@/lib/catalog";

export default function PopularTreatments() {
  return (
    <section
      className="bg-surface/40 py-18 md:py-24"
      aria-labelledby="popular-treatments-title"
    >
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Most Requested</span>
          </span>
          <h2
            id="popular-treatments-title"
            className="mt-5 text-balance text-4xl leading-[1.05] md:text-5xl lg:text-6xl"
          >
            Popular Treatments
          </h2>
          <p className="mx-auto mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Explore our physician-guided Semaglutide and Tirzepatide programs.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl items-stretch gap-6 md:grid-cols-2">
          {popularTreatmentCards.map((card) => {
            const featured = Boolean(card.featured);
            return (
              <article
                key={card.slug}
                className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card shadow-md transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                  featured
                    ? "border-gold shadow-xl ring-1 ring-gold/25"
                    : "border-border/80 hover:border-gold/50"
                }`}
              >
                {featured && card.ribbon && (
                  <>
                    <span
                      className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gold"
                      aria-hidden
                    />
                    <span className="absolute -right-10 top-7 z-10 w-40 rotate-45 bg-gold px-2 py-1 text-center text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-forest shadow-sm">
                      {card.ribbon}
                    </span>
                  </>
                )}

                <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                  />
                  {card.badge && (
                    <span className="absolute left-4 top-4 rounded-full border border-gold/60 bg-background/95 px-3.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-forest shadow-sm backdrop-blur-sm">
                      {card.badge}
                    </span>
                  )}
                </div>

                <div className="flex flex-1 flex-col p-7 md:p-8">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sage">
                    {card.category}
                  </p>
                  <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="min-w-0 text-[1.75rem] leading-none text-forest md:text-[2rem]">
                      {card.name}
                    </h3>
                    {card.price && (
                      <p className="shrink-0 font-serif text-2xl leading-none text-forest">
                        ${card.price}
                        <span className="font-sans text-[0.65rem] font-semibold uppercase text-muted-foreground">
                          /mo
                        </span>
                      </p>
                    )}
                  </div>
                  <p className="mt-5 text-base font-medium leading-relaxed text-forest">
                    {card.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <div className="mt-auto pt-7">
                    <Link
                      href={card.href}
                      className="inline-flex h-auto min-h-11 w-full items-center justify-center gap-2 whitespace-normal rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
                    >
                      <span>{card.cta}</span>
                      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
