import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { fullFaqItems } from "@/lib/faqs";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Nautic Health intake timing, pricing, prescriptions, compounded medications, and program management.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <nav className="mb-6 flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.18em] text-sage">
            <Link href="/" className="hover:text-forest">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span>FAQ</span>
          </nav>
          <p className="eyebrow mb-4">FAQ</p>
          <h1 className="heading-display max-w-3xl">Frequently asked questions</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Answers on intake timing, pricing, prescriptions, compounded medications, and program
            management.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={siteConfig.assessmentUrl} className="btn-primary">
              Start clinical intake
            </Link>
            <Link href="/how-it-works" className="btn-outline">
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-border/40 bg-surface/40">
        <div className="container-luxe max-w-3xl">
          <FaqAccordion items={fullFaqItems} />
        </div>
      </section>

      <section className="border-t border-border/40 py-16">
        <div className="container-luxe flex flex-wrap gap-x-8 gap-y-4 text-sm text-forest">
          <Link
            href="/how-it-works"
            className="underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            How it works
          </Link>
          <Link
            href="/about"
            className="underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            Safety and eligibility
          </Link>
          <Link
            href="/terms"
            className="underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
          >
            Terms and policies
          </Link>
        </div>
      </section>
    </>
  );
}
