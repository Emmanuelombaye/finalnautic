import Link from "next/link";
import HeroVideoBackground from "@/components/hero/HeroVideoBackground";
import { HeroTrustList } from "@/components/hero/HeroTrustList";
import { siteConfig } from "@/lib/data";
import { brandAssets } from "@/lib/media";

const GRADIENT_LINEAR =
  "linear-gradient(180deg, rgba(20,26,22,0.42) 0%, rgba(20,26,22,0.14) 28%, rgba(20,26,22,0.22) 62%, rgba(20,26,22,0.62) 100%)";

const GRADIENT_RADIAL =
  "radial-gradient(70% 60% at 50% 52%, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0) 70%)";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-start justify-center overflow-hidden pt-24 md:h-[100svh] md:min-h-[640px] md:items-center md:pt-0">
      <HeroVideoBackground posterSrc={brandAssets.heroPoster} />

      {/* Overlays sit above media, below copy — same stacking as nautichealth.com */}
      <div className="absolute inset-0" style={{ background: GRADIENT_LINEAR }} />
      <div className="absolute inset-0" style={{ background: GRADIENT_RADIAL }} />

      <div className="relative container-luxe text-center">
        <div className="reveal mx-auto max-w-4xl">
          <span className="inline-flex items-center gap-4">
            <span className="h-px w-10 bg-white/40" />
            <span className="text-[0.68rem] uppercase tracking-[0.32em] text-white/75">
              PHYSICIAN-GUIDED CARE
            </span>
            <span className="h-px w-10 bg-white/40" />
          </span>

          <h1 className="mt-7 font-serif text-balance text-[2.15rem] leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl lg:text-[3.6rem]">
            Physician-Guided Weight Loss Care
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-white/80 md:text-lg">
            Personalized medical weight-loss care designed around your goals, with transparent
            monthly pricing, licensed provider review, and treatment delivered directly to you
            when medically appropriate.
          </p>

          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 px-1 sm:flex-row sm:items-center sm:px-0">
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
