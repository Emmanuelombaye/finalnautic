"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/data";
import { getBundleBySlug, getProgramByRouteSlug } from "@/lib/programs";

export default function MobileStickyBar() {
  const pathname = usePathname();
  const programMatch = pathname.match(/^\/programs\/([^/]+)/);
  const bundleMatch = pathname.match(/^\/bundles\/([^/]+)/);
  const program = programMatch ? getProgramByRouteSlug(programMatch[1]) : undefined;
  const bundle = bundleMatch ? getBundleBySlug(bundleMatch[1]) : undefined;
  const price = program?.price ?? bundle?.price;

  const onTreatments =
    pathname.startsWith("/treatments") ||
    pathname.startsWith("/programs") ||
    pathname.startsWith("/bundles");

  const pricingLabel = onTreatments ? "View Options" : "View Pricing";
  const pricingHref = onTreatments ? "/treatments/all" : siteConfig.pricingUrl;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-border/70 bg-background/95 shadow-[0_-10px_30px_-24px_rgba(68,86,74,0.55)] backdrop-blur-xl">
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="min-w-0 flex-1">
            <Link href={pricingHref} className="inline-flex flex-col text-forest">
              <span className="text-[0.6rem] uppercase tracking-[0.18em] text-sage">
                {price ? "Program" : siteConfig.name}
              </span>
              <span className="font-serif text-lg leading-tight underline decoration-gold/60 decoration-1 underline-offset-4">
                {price ? `$${price}/mo` : pricingLabel}
              </span>
            </Link>
          </div>
          <Link
            href={siteConfig.assessmentUrl}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-forest px-5 py-3 text-[0.72rem] font-light uppercase tracking-[0.14em] text-primary-foreground"
          >
            Start Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
