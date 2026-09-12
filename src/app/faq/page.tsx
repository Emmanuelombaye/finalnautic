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
        <div className="container-luxe pb-10 md:pb-12">
          <p className="eyebrow mb-4">FAQ</p>
          <h1 className="heading-display max-w-3xl">Frequently asked questions</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Answers on intake timing, pricing, prescriptions, compounded medications, and program
            management.
          </p>
        </div>
      </section>

      <section className="section-padding border-t border-border/40 bg-surface/40">
        <div className="container-luxe max-w-3xl">
          <FaqAccordion items={fullFaqItems} />
        </div>
      </section>

      <section className="border-t border-border/40 py-14 md:py-16">
        <div className="container-luxe max-w-3xl text-center">
          <h2 className="heading-section">Still have a question?</h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground">
            Reach our team or begin a confidential intake for licensed-provider review.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-outline">
              Contact
            </Link>
            <Link href={siteConfig.assessmentUrl} className="btn-primary">
              Start Your Private Assessment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
