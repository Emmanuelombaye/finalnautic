import Link from "next/link";

/**
 * Footer trust seals — sized and framed like certification rows on
 * LegitScript-aligned telehealth footers (clear medallions + captions).
 */
export default function FooterTrustBadges() {
  const badges = [
    {
      href: "/about",
      src: "/assets/trust/footer-provider-network.svg",
      kicker: "Clinical services via",
      title: "Provider Network",
      alt: "Licensed clinician provider network seal",
    },
    {
      href: null as string | null,
      src: "/assets/trust/footer-usa-pharmacies.svg",
      kicker: "Compounded by",
      title: "Licensed U.S. Pharmacies",
      alt: "Licensed U.S. pharmacies seal",
    },
    {
      href: "/privacy",
      src: "/assets/trust/footer-hipaa-notice.svg",
      kicker: "Data protected",
      title: "HIPAA Compliant",
      alt: "HIPAA compliant data protection seal",
    },
  ] as const;

  return (
    <div className="mt-10 border-t border-border/40 pt-8 md:mt-12 md:pt-10">
      <div
        className="mx-auto grid max-w-4xl grid-cols-3 items-start justify-items-center gap-3 sm:gap-6 md:gap-10"
        aria-label="Trust and compliance"
      >
        {badges.map((badge) => {
          const body = (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${badge.src}?v=2`}
                alt={badge.alt}
                width={240}
                height={240}
                className="h-[5.25rem] w-[5.25rem] object-contain drop-shadow-[0_12px_24px_rgba(16,32,24,0.22)] transition duration-200 sm:h-[7.25rem] sm:w-[7.25rem] md:h-[8.25rem] md:w-[8.25rem]"
                loading="lazy"
                decoding="async"
              />
              <span className="min-w-0">
                <span className="block text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-sage sm:text-[0.65rem]">
                  {badge.kicker}
                </span>
                <span className="mt-1 block font-serif text-[0.8rem] leading-snug text-forest sm:text-[0.95rem] md:text-base">
                  {badge.title}
                </span>
              </span>
            </>
          );

          const className =
            "flex w-full max-w-[11rem] flex-col items-center gap-2.5 text-center sm:max-w-[13rem] sm:gap-3.5 md:max-w-[14rem]";

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

      <p className="mx-auto mt-6 max-w-2xl text-center text-[0.7rem] leading-relaxed text-sage md:mt-8">
        Prescriptions are never guaranteed. Treatment is provided only when a licensed
        provider determines it is clinically appropriate. Compounded medications are
        prepared by licensed U.S. pharmacies when prescribed.
      </p>
    </div>
  );
}
