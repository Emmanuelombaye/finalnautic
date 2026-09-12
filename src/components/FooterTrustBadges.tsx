import Link from "next/link";

type TrustBadge = {
  href: string | null;
  src: string;
  kicker: string;
  title: string;
  subtitle?: string;
  alt: string;
};

/**
 * Footer trust seals — LegitScript certification badge design
 * (hex shape, navy field, cyan accents, green check) without using
 * the official LegitScript mark itself.
 */
export default function FooterTrustBadges() {
  const badges: TrustBadge[] = [
    {
      href: "/provider-network",
      src: "/assets/trust/footer-provider-network.svg",
      kicker: "Clinical services via",
      title: "Provider Network",
      alt: "Licensed clinician provider network certification seal",
    },
    {
      href: null,
      src: "/assets/trust/footer-usa-pharmacies.svg",
      kicker: "Compounded by",
      title: "Licensed U.S. Pharmacies",
      alt: "Licensed U.S. pharmacies certification seal",
    },
    {
      href: "/hipaa",
      src: "/assets/trust/footer-hipaa-notice.svg",
      kicker: "Data protected",
      title: "HIPAA Compliant",
      alt: "HIPAA compliant data protection certification seal",
    },
  ];

  return (
    <div className="mt-8 border-t border-border/40 pt-8 md:mt-10 md:pt-10">
      <div
        className="mx-auto grid max-w-4xl grid-cols-3 items-start justify-items-center gap-3 sm:gap-8 md:gap-12"
        aria-label="Trust and compliance"
      >
        {badges.map((badge) => {
          const body = (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${badge.src}?v=4`}
                alt={badge.alt}
                width={160}
                height={184}
                className="h-[5.75rem] w-auto object-contain drop-shadow-[0_10px_20px_rgba(5,21,50,0.28)] transition duration-200 sm:h-[7.25rem] md:h-[8rem]"
                loading="lazy"
                decoding="async"
              />
              <span className="min-w-0 px-1">
                <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-sage sm:text-[0.65rem]">
                  {badge.kicker}
                </span>
                <span className="mt-1.5 block font-serif text-[0.85rem] leading-snug text-forest sm:text-[1rem] md:text-[1.05rem]">
                  {badge.title}
                </span>
              </span>
            </>
          );

          const className =
            "flex w-full max-w-[12rem] flex-col items-center gap-3 text-center sm:max-w-[14rem] sm:gap-3.5 md:max-w-[15rem]";

          if (badge.href) {
            return (
              <Link
                key={badge.title}
                href={badge.href}
                className={`${className} transition hover:-translate-y-0.5 hover:opacity-95`}
              >
                {body}
              </Link>
            );
          }

          return (
            <div key={badge.title} className={className}>
              {body}
            </div>
          );
        })}
      </div>

      <p className="mx-auto mt-7 max-w-2xl text-center text-[0.68rem] leading-relaxed text-sage md:mt-8">
        Prescriptions are never guaranteed. Treatment is provided only when a licensed
        provider determines it is clinically appropriate. Compounded medications are
        prepared by licensed U.S. pharmacies when prescribed.
      </p>
    </div>
  );
}
