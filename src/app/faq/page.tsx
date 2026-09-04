import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { fullFaqItems } from "@/lib/faqs";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on intake, pricing, prescriptions, compounded medications, and program management.",
};

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <p className="eyebrow mb-4">FAQ</p>
          <h1 className="heading-display max-w-3xl">Frequently asked questions</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Answers on intake, pricing, prescriptions, compounded medications, and program
            management.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border/40">
        <div className="container-luxe max-w-3xl">
          <FaqAccordion items={fullFaqItems} />
          <div className="mt-12 flex flex-wrap gap-3">
            <Link href={siteConfig.assessmentUrl} className="btn-primary">
              Start Your Private Assessment
            </Link>
            <Link href="/how-it-works" className="btn-outline">
              How it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
