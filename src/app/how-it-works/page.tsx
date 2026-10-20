import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works — Nautic Health",
  description: "Five clear steps from medical intake and licensed provider review to ongoing, physician-guided care.",
};

import Link from "next/link";
import clinicImg from "@/assets/clinic.jpg";
import { Eyebrow } from "@/components/ui/section";

const steps = [
  {
    n: "01",
    title: "Choose your treatment or program",
    body: "Explore Nautic Health treatments and programs based on your health and wellness goals.",
  },
  {
    n: "02",
    title: "Complete your medical intake",
    body: "Provide the medical information needed for a licensed provider to evaluate your eligibility and determine whether treatment is medically appropriate.",
  },
  {
    n: "03",
    title: "Provider review",
    body: "A licensed medical provider reviews your information. Depending on your treatment, medical history, state requirements, and clinical needs, this review may be completed asynchronously or may include a live consultation.",
  },
  {
    n: "04",
    title: "Treatment determination",
    body: "If treatment is medically appropriate, your provider determines the appropriate treatment plan and prescription.",
  },
  {
    n: "05",
    title: "Ongoing care",
    body: "Receive ongoing physician-guided support and follow-up as appropriate for your treatment plan.",
  },
];

function HowItWorks() {
  return (
    <>
      <section className="container-luxe pt-16 md:pt-24 pb-16">
        <div className="max-w-3xl">
          <Eyebrow>How it works</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.02] text-balance">
            Five considered steps to <em className="italic">a better decade.</em>
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            The Nautic Health journey is deliberately quiet. We take the time to
            understand you — and then we stay close for the long run.
          </p>
        </div>
      </section>

      <section className="container-luxe pb-32">
        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 md:sticky md:top-28 h-fit">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img src={clinicImg} alt="Nautic Health clinic" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
          <ol className="md:col-span-7 space-y-14">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr] gap-6 md:gap-8 border-t border-forest/15 pt-8">
                <span className="font-serif text-4xl text-gold leading-none">{s.n}</span>
                <div>
                  <h3 className="font-serif text-2xl md:text-3xl text-forest text-balance">{s.title}</h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface/60 py-24">
        <div className="container-luxe flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <Eyebrow>Ready when you are</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-forest text-balance max-w-xl">
              Begin with a confidential medical intake.
            </h2>
          </div>
          <Link href="/wellness-assessment" className="btn-primary self-start md:self-auto">Take the Wellness Assessment</Link>
        </div>
      </section>
    </>
  );
}

export default HowItWorks;
