import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import { homeFaqItems } from "@/lib/faqs";

export default function HomeFaqSection() {
  return (
    <section id="faqs" className="container-luxe py-12 md:py-16" aria-labelledby="home-faq-title">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <h2 id="home-faq-title" className="text-balance text-4xl leading-[1.05] md:text-5xl">
            Frequently asked
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Six of the questions people ask most. Additional policy details are in our terms and
            legal resources.
          </p>
          <Link
            href="/faq"
            className="mt-8 inline-flex text-sm font-medium text-forest underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
          >
            Read the full FAQ
          </Link>
        </div>
        <div>
          <FaqAccordion items={homeFaqItems} />
        </div>
      </div>
    </section>
  );
}
