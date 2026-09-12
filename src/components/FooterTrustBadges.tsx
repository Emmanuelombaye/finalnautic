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
 * Footer trust seals — LegitScript-style navy/gold medallions
 * matching Efexia MD footer certification row.
 */
export default function FooterTrustBadges() {
  const badges: TrustBadge[] = [
    {
      href: "/provider-network",
      src: "/assets/trust/footer-provider-network.svg",
      kicker: "Clinical services via",
      title: "Provider Network",
      alt: "Licensed clinician provider network seal",
    },
    {
      href: null,
      src: "/assets/trust/footer-usa-pharmacies.svg",
      kicker: "Compounded by",
      title: "Licensed Pharmacies in the USA",
      alt: "Licensed U.S. pharmacies seal",
    },
    {
      href: "/hipaa",
      src: "/assets/trust/footer-hipaa-notice.svg",
      kicker: "Data protected",
      title: "HIPAA",
      subtitle: "Compliant",
      alt: "HIPAA compliant data protection seal",
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
                src={`${badge.src}?v=3`}
                alt={badge.alt}
                width={220}
                height={220}
                className="h-[5.5rem] w-[5.5rem] object-contain drop-shadow-[0_10px_22px_rgba(7,21,37,0.28)] transition duration-200 sm:h-[7.5rem] sm:w-[7.5rem] md:h-[8.5rem] md:w-[8.5rem]"
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
                {badge.subtitle ? (
                  <span className="mt-0.5 block font-serif text-[0.85rem] leading-snug text-forest sm:text-[1rem] md:text-[1.05rem]">
                    {badge.subtitle}
                  </span>
                ) : null}
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
