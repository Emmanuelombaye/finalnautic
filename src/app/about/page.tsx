import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Nautic Health",
  description: "Our philosophy: proactive, personalized, evidence-based longevity care for people who take their health seriously.",
};

import Link from "next/link";
import philosophyImg from "@/assets/philosophy.jpg";
import clinicImg from "@/assets/clinic.jpg";
import coupleImg from "@/assets/couple.jpg";
import { Eyebrow, SectionHeading } from "@/components/ui/section";

const principles = [
  { t: "Proactive", d: "We measure early, act early, and adjust often. Health is a long game." },
  { t: "Personal", d: "No two plans are alike. Every protocol is a reflection of your data and goals." },
  { t: "Evidence-based", d: "We integrate the newest science with the discipline of clinical medicine." },
  { t: "Discreet", d: "Concierge care, delivered with the calm of a well-run practice." },
];

function About() {
  return (
    <>
      <section className="container-luxe pt-16 md:pt-24 pb-20">
        <div className="max-w-3xl">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.02] text-balance">
            A practice built for the <em className="italic">next</em> chapter of medicine.
          </h1>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
            Nautic Health is a modern longevity clinic that partners with
            adults who take their health seriously. We measure what matters,
            design plans that hold up over decades, and stay close as your life
            changes — because meaningful health outcomes are the result of
            small, consistent decisions made over time.
          </p>
        </div>
      </section>

      <section className="container-luxe">
        <div className="aspect-[16/8] rounded-3xl overflow-hidden">
          <img src={clinicImg} alt="Nautic Health clinic interior" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="container-luxe py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-14 items-start">
          <div className="md:col-span-5 md:sticky md:top-28">
            <Eyebrow>Philosophy</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-balance">
              Care that compounds. <em className="italic">Quietly.</em>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-8 text-lg leading-relaxed text-forest/85">
            <p>
              Conventional medicine excels at responding to illness. But most of
              the outcomes we care about — energy, resilience, sharp cognition,
              a body that moves the way we want it to at 70 — are shaped long
              before disease appears. Nautic Health was built to occupy that space.
            </p>
            <p>
              We combine advanced diagnostics, physician oversight, and a small,
              considered set of interventions to help you build a life that ages
              well. Every plan is tailored to your data and your goals. No
              gimmicks. No fads. No selling.
            </p>
            <p>
              The result is a practice that feels less like a clinic and more
              like a trusted advisor — one that respects your time, your
              intelligence, and the seriousness of what's at stake.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface/60 py-28 md:py-32">
        <div className="container-luxe">
          <SectionHeading eyebrow="Principles" title="Four commitments." />
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {principles.map((p, i) => (
              <div key={p.t} className="border-t border-forest/15 pt-6">
                <span className="font-serif text-sm text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-2xl text-forest">{p.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-28 md:py-40">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={philosophyImg} alt="A morning wellness ritual" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <Eyebrow>The team</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl leading-[1.05] text-balance">
              Physicians who think like <em className="italic">longevity partners.</em>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our medical team brings together internal medicine, endocrinology,
              sports medicine, and functional health. What unites us is a
              belief that the best care is quiet, considered, and deeply
              personal. Your case is reviewed by a licensed provider who understands your plan.
            </p>
            <div className="mt-10">
              <Link href="/wellness-assessment" className="btn-primary">Take the Wellness Assessment</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe pb-28">
        <div className="relative min-h-[28rem] overflow-hidden rounded-[2.5rem] md:min-h-[32rem]">
          <img src={coupleImg} alt="A couple sharing morning coffee" className="absolute inset-0 h-full w-full object-cover object-[58%_38%] md:object-[62%_40%]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/65 to-forest/10" />
          <div className="relative flex min-h-[28rem] max-w-2xl items-center p-10 md:min-h-[32rem] md:p-20">
            <div>
            <h3 className="font-serif text-3xl leading-[1.05] text-balance text-primary-foreground drop-shadow-sm md:text-5xl">
              Join a practice designed around the life you want to be living.
            </h3>
            <div className="mt-8">
              <Link href="/wellness-assessment" className="btn-primary" style={{ background: "var(--gold)", color: "var(--forest)" }}>
                Take the Wellness Assessment
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
