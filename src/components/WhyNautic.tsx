import { Eyebrow } from "@/components/ui/section";

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/* Physician-guided care — a caduceus-free line mark: hand cradling a pulse leaf */
function IconPhysician({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M12 44c0-9 7-15 20-15s20 6 20 15" />
        <path d="M20 44h6l3-7 4 12 3-5h8" />
        <path d="M32 29c0-7 4-13 11-15 1 8-3 14-11 15Z" />
        <path d="M32 29c-6-1-10-5-11-11 6 0 10 3 11 8" />
        <path d="M8 52h48" />
      </g>
    </svg>
  );
}

/* Personalized plans — a profile silhouette with concentric contour lines */
function IconPersonalized({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...stroke}>
        <path d="M24 52V42c-4-2-7-7-7-13 0-9 7-16 16-16 6 0 10 3 12 8l4 9-5 2v7c0 2-2 3-4 3h-4v10" />
        <path d="M31 25c3 0 5 2 5 5s-2 5-5 5" />
        <path d="M27 30h-4" />
        <circle cx="41" cy="24" r="1" />
      </g>
    </svg>
  );
}

/* Premium ongoing support — an open hand supporting a circle of continuity */
function IconSupport({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...stroke}>
        <circle cx="32" cy="24" r="11" />
        <path d="M32 18v6l4 3" />
        <path d="M14 52c2-7 8-11 18-11s16 4 18 11" />
        <path d="M22 47c4-2 7-3 10-3s6 1 10 3" />
      </g>
    </svg>
  );
}

/* Evidence-based — a fine line chart rising through a laurel arc */
function IconEvidence({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g {...stroke}>
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

const pillars = [
  {
    title: "Physician Guided Care",
    body: "Every protocol is authored, reviewed, and adjusted by a licensed physician who knows your history.",
    Icon: IconPhysician,
  },
  {
    title: "Personalized Treatment Plans",
    body: "No templates. Your plan is built from your biomarkers, your goals, and the life you actually live.",
    Icon: IconPersonalized,
  },
  {
    title: "Premium Ongoing Support",
    body: "A concierge care team beside you between visits — discreet, responsive, and genuinely attentive.",
    Icon: IconSupport,
  },
  {
    title: "Evidence-Based Wellness",
    body: "Grounded in peer-reviewed longevity science, measured continuously, and refined as your data evolves.",
    Icon: IconEvidence,
  },
];

export function WhyNautic() {
  return (
    <section className="container-luxe bg-surface/60 pt-14 md:pt-20 pb-28 md:pb-40">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Why Nautic Health</Eyebrow>
        <h2 className="mt-6 text-4xl md:text-5xl leading-[1.06] text-balance">
          Why <em className="italic">Nautic Health?</em>
        </h2>
      </div>

      <div className="mt-24 grid gap-16 md:gap-x-14 md:gap-y-20 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map(({ title, body, Icon }) => (
          <div key={title} className="group text-center md:text-left">
            <Icon className="h-14 w-14 mx-auto md:mx-0 text-forest/70 transition-colors duration-500 group-hover:text-gold" />
            <div className="mt-8 hairline max-w-[3.5rem] mx-auto md:mx-0" />
            <h3 className="mt-8 font-serif text-2xl leading-snug text-forest">{title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
