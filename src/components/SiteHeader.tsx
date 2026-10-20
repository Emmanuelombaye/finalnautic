"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { assetUrl } from "@/lib/asset";
import logoFull from "@/assets/nautic-logo.png.asset.json";

const navItems = [
  { to: "/treatments", label: "Treatments" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/about", label: "About" },
  { to: "/journal", label: "Wellness Journal" },
  { to: "/patient-portal", label: "Patient Portal" },
] as const;

const treatmentGoalNav = [
  { goal: "weight-management", label: "Weight Management" },
  { goal: "hormone-health", label: "Hormone Health" },
  { goal: "energy-longevity", label: "Energy & Longevity" },
  { goal: "recovery-performance", label: "Recovery & Performance" },
  { goal: "cognitive-wellness", label: "Cognitive Wellness" },
  { goal: "overall-optimization", label: "Overall Optimization" },
] as const;

function TreatmentsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href="/treatments"
        className="group relative py-1 text-[0.78rem] font-light tracking-[0.06em] text-forest/70 transition-colors duration-500 hover:text-forest"
        onFocus={() => setOpen(true)}
      >
        <span className="whitespace-nowrap">Treatments</span>
        <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
      </Link>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-4">
          <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/95 py-3 shadow-[0_30px_60px_-35px_rgba(68,86,74,0.5)] backdrop-blur-xl">
            {treatmentGoalNav.map((item) => (
              <Link
                key={item.goal}
                href={`/treatments/${item.goal}`}
                onClick={() => setOpen(false)}
                className="block px-5 py-2.5 text-[0.8rem] font-light text-forest/75 transition-colors duration-300 hover:bg-surface/70 hover:text-forest"
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 h-px bg-border/60" />
            <Link
              href="/treatments/all"
              onClick={() => setOpen(false)}
              className="block px-5 py-2.5 text-[0.72rem] uppercase tracking-[0.14em] text-sage transition-colors duration-300 hover:text-forest"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "bg-background/70 backdrop-blur-2xl backdrop-saturate-150 border-b border-border/50 shadow-[0_1px_30px_-20px_rgba(45,45,45,0.5)]"
          : "bg-background border-b border-border/40"
      }`}
    >
      <div
        className={`container-luxe grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 transition-all duration-700 ease-out lg:flex lg:justify-between ${
          scrolled ? "py-3.5" : "py-6"
        }`}
      >
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          aria-label="Nautic Health home"
        >
          <img
            src={assetUrl(logoFull)}
            alt="Nautic Health"
            className={`w-auto shrink-0 transition-all duration-700 ease-out ${scrolled ? "h-12" : "h-16"}`}
            width={779}
            height={232}
          />

        </Link>

        <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) =>
            item.to === "/treatments" ? (
              <TreatmentsMenu key={item.to} />
            ) : (
              <Link
                key={item.to}
                href={item.to}
                className="group relative py-1 text-[0.78rem] font-light tracking-[0.06em] text-forest/70 transition-colors duration-500 hover:text-forest"
              >
                <span className="whitespace-nowrap">{item.label}</span>
                <span className="pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-gold transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href="/wellness-assessment"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-forest/25 px-6 py-2.5 text-[0.74rem] font-light uppercase tracking-[0.16em] text-forest transition-all duration-500 ease-out hover:border-forest hover:shadow-[0_12px_30px_-18px_rgba(68,86,74,0.9)]"
          >
            <span
              className="absolute inset-0 origin-bottom scale-y-0 bg-forest transition-transform duration-500 ease-out group-hover:scale-y-100"
              aria-hidden="true"
            />
            <span className="relative transition-colors duration-500 group-hover:text-background">
              Take the Wellness Assessment
            </span>
          </Link>
        </div>

        <button
          className="inline-flex h-10 w-10 flex-col items-center justify-center justify-self-end rounded-full border border-forest/20 transition-colors duration-500 hover:border-forest/50 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`block h-px w-4 bg-forest transition-all duration-300 ${open ? "translate-y-[3px] rotate-45" : "-translate-y-1"}`} />
          <span className={`block h-px w-4 bg-forest transition-all duration-300 ${open ? "-translate-y-px -rotate-45" : "translate-y-1"}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="container-luxe flex flex-col gap-5 py-8">
            {navItems.map((item) =>
              item.to === "/treatments" ? (
                <div key={item.to} className="flex flex-col gap-3">
                  <Link
                    href="/treatments"
                    onClick={() => setOpen(false)}
                    className="font-serif text-lg text-forest"
                  >
                    Treatments
                  </Link>
                  <div className="flex flex-col gap-2.5 border-l border-border/70 pl-4">
                    {treatmentGoalNav.map((g) => (
                      <Link
                        key={g.goal}
                        href={`/treatments/${g.goal}`}
                        onClick={() => setOpen(false)}
                        className="text-sm text-forest/75"
                      >
                        {g.label}
                      </Link>
                    ))}
                    <Link
                      href="/treatments/all"
                      onClick={() => setOpen(false)}
                      className="text-[0.7rem] uppercase tracking-[0.14em] text-sage"
                    >
                      View All Treatments
                    </Link>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.to}
                  href={item.to}
                  onClick={() => setOpen(false)}
                  className="font-serif text-lg text-forest"
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="hairline my-2" />
            <Link href="/wellness-assessment" onClick={() => setOpen(false)} className="btn-primary self-start">
              Take the Wellness Assessment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}




export { Header as SiteHeader };
