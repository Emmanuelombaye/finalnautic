import { whyFeatures } from "@/lib/data";

function PhysicianIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 44c0-9 7-15 20-15s20 6 20 15" />
        <path d="M20 44h6l3-7 4 12 3-5h8" />
        <path d="M32 29c0-7 4-13 11-15 1 8-3 14-11 15Z" />
        <path d="M32 29c-6-1-10-5-11-11 6 0 10 3 11 8" />
        <path d="M8 52h48" />
      </g>
    </svg>
  );
}

function PersonalizedIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M24 52V42c-4-2-7-7-7-13 0-9 7-16 16-16 6 0 10 3 12 8l4 9-5 2v7c0 2-2 3-4 3h-4v10" />
        <path d="M31 25c3 0 5 2 5 5s-2 5-5 5" />
        <path d="M27 30h-4" />
        <circle cx="41" cy="24" r="1" />
      </g>
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="32" cy="24" r="11" />
        <path d="M32 18v6l4 3" />
        <path d="M14 52c2-7 8-11 18-11s16 4 18 11" />
        <path d="M22 47c4-2 7-3 10-3s6 1 10 3" />
      </g>
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg viewBox="0 0 64 64" className="h-14 w-14" aria-hidden>
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 46V18" />
        <path d="M14 46h36" />
        <path d="M18 38l8-8 6 6 12-16" />
        <path d="M38 20h6v6" />
        <path d="M50 50c4-4 6-10 5-16" />
        <path d="M14 50c-4-4-6-10-5-16" />
      </g>
    </svg>
  );
}

const icons = [PhysicianIcon, PersonalizedIcon, SupportIcon, EvidenceIcon];

export default function WhySection() {
  return (
    <section className="container-luxe bg-surface/60 pb-16 pt-12 md:pb-24 md:pt-16">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-flex items-center gap-3">
          <span className="h-px w-6 bg-sage" />
          <span className="eyebrow">Why Nautic Health</span>
        </span>
        <h2 className="mt-6 text-balance text-4xl leading-[1.06] md:text-5xl">
          Why <em className="italic">Nautic Health?</em>
        </h2>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 md:mt-14 md:gap-x-12 md:gap-y-14 lg:grid-cols-4">
        {whyFeatures.map((feature, i) => {
          const Icon = icons[i];
          return (
            <div key={feature.title} className="group text-center md:text-left">
              <div className="mx-auto text-forest/70 transition-colors duration-500 group-hover:text-gold md:mx-0">
                <Icon />
              </div>
              <div className="hairline mx-auto mt-8 max-w-[3.5rem] md:mx-0" />
              <h3 className="mt-8 font-serif text-2xl leading-snug text-forest">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
