import Link from "next/link";

export default function FooterTrustBadges() {
  return (
    <div className="mt-14 border-t border-border/40 pt-10">
      <div
        className="mx-auto grid max-w-3xl grid-cols-3 items-start justify-items-center gap-4 sm:gap-8"
        aria-label="Trust and compliance"
      >
        <Link
          href="/about"
          className="flex w-full max-w-[12rem] flex-col items-center gap-3 text-center transition hover:-translate-y-0.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/trust/footer-provider-network.svg"
            alt=""
            width={132}
            height={132}
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            loading="lazy"
          />
          <span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-sage">
              Clinical services via
            </span>
            <span className="mt-1 block font-serif text-sm text-forest sm:text-base">
              Provider Network
            </span>
          </span>
        </Link>

        <div
          className="flex w-full max-w-[12rem] flex-col items-center gap-3 text-center"
          aria-label="Compounded by licensed pharmacies in the USA"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/trust/footer-usa-pharmacies.svg"
            alt=""
            width={132}
            height={132}
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            loading="lazy"
          />
          <span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-sage">
              Compounded by
            </span>
            <span className="mt-1 block font-serif text-sm text-forest sm:text-base">
              Licensed U.S. Pharmacies
            </span>
          </span>
        </div>

        <Link
          href="/privacy"
          className="flex w-full max-w-[12rem] flex-col items-center gap-3 text-center transition hover:-translate-y-0.5"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/trust/footer-hipaa-notice.svg"
            alt=""
            width={132}
            height={132}
            className="h-20 w-20 object-contain sm:h-24 sm:w-24"
            loading="lazy"
          />
          <span>
            <span className="block text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-sage">
              Data protected
            </span>
            <span className="mt-1 block font-serif text-sm text-forest sm:text-base">
              HIPAA Compliant
            </span>
          </span>
        </Link>
      </div>

      <p className="mx-auto mt-8 max-w-2xl text-center text-[0.7rem] leading-relaxed text-sage">
        Prescriptions are never guaranteed. Treatment is provided only when a licensed
        provider determines it is clinically appropriate. Compounded medications are
        prepared by licensed U.S. pharmacies when prescribed.
      </p>
    </div>
  );
}
