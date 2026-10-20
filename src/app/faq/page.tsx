"use client";

import Link from "next/link";
import { useState } from "react";
import { Eyebrow } from "@/components/ui/section";

const faqs = [
  {
    q: "Is Nautic Health a medical practice?",
    a: "Yes. Every plan is authored and reviewed by licensed physicians. We are a medical practice focused on longevity and wellness — not a med-spa, TRT clinic, or supplement brand.",
  },
  {
    q: "Do I need a live consultation?",
    a: "Not always. Provider evaluations may be completed asynchronously or through a live consultation depending on the treatment, your medical history, state requirements, and the provider’s clinical judgment. If a live consultation is needed, you’ll be given instructions for the next step.",
  },
  {
    q: "Will a licensed medical provider review my case?",
    a: "Yes. All treatment is subject to evaluation by a licensed medical provider. Depending on your treatment and clinical circumstances, the evaluation may be completed asynchronously or may include a live consultation.",
  },
  {
    q: "How is Nautic Health different from primary care?",
    a: "Your PCP is essential. Nautic Health sits alongside them — focused on proactive, personalized medicine and longevity. We coordinate closely with your existing team.",
  },
  {
    q: "Do you take insurance?",
    a: "We are a membership practice. Diagnostics may be billed to your insurance where applicable; memberships and medications are typically self-pay and often HSA/FSA eligible.",
  },
  {
    q: "How long until I notice results?",
    a: "Many patients feel meaningful shifts in energy, sleep, and clarity within the first eight weeks. Longevity outcomes compound over years — which is precisely the point.",
  },
  {
    q: "Is my information private?",
    a: "Discretion is core to our practice. Records are HIPAA-compliant, encrypted, and never shared without your explicit consent.",
  },
  {
    q: "Can I cancel my membership?",
    a: "Yes. All memberships are month-to-month. You may pause or cancel at any time.",
  },
];

function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="container-luxe pt-16 md:pt-24 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Questions, answered</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.02] text-balance">
            The things patients <em className="italic">actually</em> ask.
          </h1>
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-t border-forest/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-8 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl md:text-2xl text-forest text-balance">
                    {f.q}
                  </span>
                  <span
                    className={`mt-2 shrink-0 w-8 h-8 rounded-full border border-forest/25 grid place-items-center text-forest transition-transform duration-500 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-500 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-8 pr-14 text-base leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-forest/15" />
        </div>
      </section>

      <section className="container-luxe pb-32">
        <div className="rounded-3xl bg-surface/60 p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-forest text-balance">
              Still have a question?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Reach us directly, or begin your confidential medical evaluation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-ghost">Contact us</Link>
            <Link href="/wellness-assessment" className="btn-primary">Take the Wellness Assessment</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
