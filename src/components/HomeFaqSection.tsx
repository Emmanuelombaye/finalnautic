import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { homeFaqItems } from "@/lib/faqs";

export default function HomeFaqSection() {
  return (
    <section className="container-luxe py-28 md:py-40">
      <div className="mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-3">
          <span className="h-px w-6 bg-sage" />
          <span className="eyebrow">FAQ</span>
        </span>
        <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
          Frequently asked
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Six of the questions people ask most. Additional details are in our terms and full FAQ.
        </p>
        <div className="mt-10">
          <FaqAccordion items={homeFaqItems} />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/faq" className="btn-outline">
            Read the full FAQ
          </Link>
          <Link href="/terms" className="btn-outline">
            Read terms and policies
          </Link>
        </div>
      </div>
    </section>
  );
}
