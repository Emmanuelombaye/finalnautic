import Link from "next/link";
import HeroVideoBackground from "@/components/hero/HeroVideoBackground";
import { HeroTrustList } from "@/components/hero/HeroTrustList";
import { siteConfig } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-start justify-center overflow-hidden pt-32 md:h-[100svh] md:min-h-[640px] md:items-center md:pt-0">
      <HeroVideoBackground />

      <div className="relative container-luxe text-center">
        <div className="reveal mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-4">
            <span className="h-px w-10 bg-white/40" />
            <span className="text-[0.68rem] uppercase tracking-[0.32em] text-white/75">
              PHYSICIAN-GUIDED WELLNESS
            </span>
            <span className="h-px w-10 bg-white/40" />
          </span>

          <h1 className="mt-7 font-serif text-balance text-[2.15rem] leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl lg:text-[3.6rem]">
            Physician-Guided Weight Loss Care
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-white/80 md:text-lg">
            Personalized medical weight-loss care designed around your goals, with transparent
            monthly pricing, licensed provider review, convenient diagnostics, and
            treatment delivered directly to you when medically appropriate.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href={siteConfig.assessmentUrl} className="btn-primary w-full sm:w-auto">
              Start Your Private Assessment
            </Link>
            <Link href={siteConfig.pricingUrl} className="btn-ghost w-full sm:w-auto">
              View Pricing
            </Link>
          </div>

          <p className="mt-3 text-xs text-white/65">
            Start with your goals and health history.
          </p>

          <HeroTrustList />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-white/55">
          Scroll
        </span>
        <span className="block h-12 w-px bg-gradient-to-b from-white/50 to-transparent" />
      </div>
    </section>
  );
}
