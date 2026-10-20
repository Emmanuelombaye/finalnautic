"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { getBundle, getProgram } from "@/lib/program-content";

type BarContent = { left: string; leftIsPrice: boolean } | null;

const HIDDEN_PREFIXES = ["/wellness-assessment", "/book", "/patient-portal"];

function resolveContent(pathname: string): BarContent {
  const path = pathname.replace(/\/+$/, "") || "/";

  if (HIDDEN_PREFIXES.some((p) => path === p || path.startsWith(`${p}/`))) return null;

  const programMatch = path.match(/^\/programs\/([^/]+)$/);
  if (programMatch) {
    const program = getProgram(programMatch[1]);
    if (program) return { left: `$${program.price}/mo`, leftIsPrice: true };
    return { left: "View Pricing", leftIsPrice: false };
  }

  const bundleMatch = path.match(/^\/bundles\/([^/]+)$/);
  if (bundleMatch) {
    const bundle = getBundle(bundleMatch[1]);
    if (bundle) return { left: `$${bundle.price}/mo`, leftIsPrice: true };
    return { left: "View Pricing", leftIsPrice: false };
  }

  if (path.startsWith("/treatments")) {
    return { left: "View Options", leftIsPrice: false };
  }

  return { left: "View Pricing", leftIsPrice: false };
}

export function StickyMobileCTA() {
  const pathname = usePathname();
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const observer = new IntersectionObserver(
      (entries) => setNearFooter(entries.some((e) => e.isIntersecting)),
      { rootMargin: "0px 0px -35% 0px" },
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, [pathname]);

  const content = resolveContent(pathname);
  if (!content) return null;

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 md:hidden transition-opacity duration-500 ${
        nearFooter ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl shadow-[0_-10px_30px_-24px_rgba(68,86,74,0.55)]">
        <div className="flex items-center gap-3 px-5 py-3">
          <div className="min-w-0 flex-1">
            {content.leftIsPrice ? (
              <>
                <p className="text-[0.6rem] uppercase tracking-[0.18em] text-sage">Program</p>
                <p className="font-serif text-lg leading-tight text-forest">{content.left}</p>
              </>
            ) : (
              <Link
                href="/treatments/all"
                className="inline-flex flex-col text-forest"
              >
                <span className="text-[0.6rem] uppercase tracking-[0.18em] text-sage">Nautic Health</span>
                <span className="font-serif text-lg leading-tight underline decoration-gold/60 decoration-1 underline-offset-4">
                  {content.left}
                </span>
              </Link>
            )}
          </div>
          <Link
            href="/wellness-assessment"
            search={(prev: Record<string, unknown>) => prev}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-forest px-5 py-3 text-[0.72rem] font-light uppercase tracking-[0.14em] text-primary-foreground"
          >
            Wellness Assessment
          </Link>
        </div>
      </div>
    </div>
  );
}
