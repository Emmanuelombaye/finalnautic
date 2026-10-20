import { assetUrl } from "@/lib/asset";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/section";
import tirzepatideAsset from "@/assets/treatment-editorial-tirzepatide.jpg.asset.json";
import hormoneHealthAsset from "@/assets/treatment-editorial-overall.jpg.asset.json";
import nadAsset from "@/assets/treatment-editorial-nad.jpg.asset.json";
import sermorelinAsset from "@/assets/treatment-editorial-sermorelin.jpg.asset.json";
import semaglutideAsset from "@/assets/treatment-editorial-semaglutide.jpg.asset.json";

const tirzepatideImg = assetUrl(tirzepatideAsset);
const hormoneHealthImg = assetUrl(hormoneHealthAsset);
const nadImg = assetUrl(nadAsset);
const sermorelinImg = assetUrl(sermorelinAsset);
const semaglutideImg = assetUrl(semaglutideAsset);

type Treatment = {
  category: string;
  name: string;
  price: string;
  badge?: string;
  tagline: string;
  description: string;
  cta: string;
  image: string;
  imageAlt: string;
  to: "/programs/$slug" | "/treatments";
  slug?: string;
  featured?: boolean;
};

const treatments: Treatment[] = [
  {
    category: "Weight Management",
    name: "Tirzepatide",
    price: "249",
    badge: "Most Popular",
    tagline: "Advanced physician-guided weight management.",
    description:
      "A personalized weight-management option designed around your individual goals, medical history, and provider evaluation.",
    cta: "Explore Tirzepatide",
    image: tirzepatideImg,
    imageAlt: "Man walking confidently along a leafy neighborhood path",
    to: "/programs/$slug",
    slug: "advanced-weight-loss",
    featured: true,
  },
  {
    category: "Weight Management",
    name: "Semaglutide",
    price: "179",
    tagline: "Physician-guided weight care, starting at $179/mo.",
    description:
      "A comprehensive weight-care plan with semaglutide included when clinically appropriate, plus nutrition, monitoring, and ongoing support.",
    cta: "Explore Semaglutide",
    image: semaglutideImg,
    imageAlt: "Woman preparing a fresh, colorful meal in a bright kitchen",
    to: "/programs/$slug",
    slug: "medical-weight-loss",
  },
  {
    category: "Hormone Optimization",
    name: "Hormone Health",
    price: "220",
    tagline: "Personalized physician-guided hormone care.",
    description:
      "Individualized hormone care for men and women focused on health, vitality, and overall well-being.",
    cta: "Explore Hormone Health",
    image: hormoneHealthImg,
    imageAlt: "Active couple sharing a relaxed walk along a coastal garden path",
    to: "/treatments",
  },
  {
    category: "Energy + Longevity",
    name: "NAD+",
    price: "229",
    badge: "Longevity Favorite",
    tagline: "Energy and longevity-focused wellness support.",
    description:
      "Physician-guided longevity support for patients interested in energy, cellular wellness, and healthy aging.",
    cta: "Explore NAD+",
    image: nadImg,
    imageAlt: "Active older woman taking a morning walk through a green park",
    to: "/programs/$slug",
    slug: "nad-plus",
  },
  {
    category: "Recovery + Longevity",
    name: "Sermorelin",
    price: "249",
    tagline: "Recovery and performance-focused wellness support.",
    description:
      "A physician-guided wellness option for patients interested in recovery, performance, and longevity-focused care.",
    cta: "Explore Sermorelin",
    image: sermorelinImg,
    imageAlt: "Man stretching after a light outdoor workout",
    to: "/programs/$slug",
    slug: "sermorelin",
  },
];

function TreatmentButton({ treatment }: { treatment: Treatment }) {
  if (treatment.to === "/programs/$slug" && treatment.slug) {
    return (
      <Button asChild className="h-auto min-h-16 w-full rounded-full px-5 py-3 whitespace-normal">
        <Link href={`/programs/${treatment.slug}`}>
          <span>{treatment.cta}</span>
          <ArrowRight aria-hidden />
        </Link>
      </Button>
    );
  }

  return (
    <Button asChild className="h-auto min-h-16 w-full rounded-full px-5 py-3 whitespace-normal">
      <Link href="/treatments">
        <span>{treatment.cta}</span>
        <ArrowRight aria-hidden />
      </Link>
    </Button>
  );
}

export function CoreOffers() {
  return (
    <section className="bg-surface/40 py-18 md:py-24" aria-labelledby="popular-treatments-title">
      <div className="container-luxe">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Most Requested</Eyebrow>
          <h2 id="popular-treatments-title" className="mt-5 text-4xl leading-[1.05] text-balance md:text-5xl lg:text-6xl">
            Popular Treatments
          </h2>
          <p className="mx-auto mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Explore some of our most requested physician-guided treatment options.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {treatments.map((treatment) => (
            <article
              key={treatment.name}
              className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-card shadow-md transition duration-500 hover:-translate-y-1.5 hover:shadow-2xl ${
                treatment.featured
                  ? "border-gold shadow-xl ring-1 ring-gold/25"
                  : "border-border/80 hover:border-gold/50"
              }`}
            >
              {treatment.featured && (
                <>
                  <span className="absolute inset-x-0 top-0 z-10 h-1.5 bg-gold" aria-hidden />
                  <span className="absolute -right-10 top-7 z-10 w-40 rotate-45 bg-gold px-2 py-1 text-center text-[0.55rem] font-semibold uppercase tracking-[0.14em] text-forest shadow-sm">
                    Most Popular
                  </span>
                </>
              )}

              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  loading="lazy"
                  width={960}
                  height={600}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]"
                />
                {treatment.badge && !treatment.featured && (
                  <span className="absolute left-4 top-4 rounded-full border border-gold/60 bg-background/95 px-3.5 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-forest shadow-sm backdrop-blur-sm">
                    {treatment.badge}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-sage">
                  {treatment.category}
                </p>
                <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="min-w-0 text-[1.75rem] leading-none text-forest md:text-[2rem]">
                    {treatment.name}
                  </h3>
                  <p className="shrink-0 font-serif text-2xl leading-none text-forest">
                    ${treatment.price}<span className="font-sans text-[0.65rem] font-semibold uppercase text-muted-foreground">/mo</span>
                  </p>
                </div>
                <p className="mt-5 text-base font-medium leading-relaxed text-forest">{treatment.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{treatment.description}</p>
                <div className="mt-auto pt-7">
                  <TreatmentButton treatment={treatment} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}