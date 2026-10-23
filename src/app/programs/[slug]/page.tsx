"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Eyebrow, SectionHeading } from "@/components/ui/section";
import {
  BenefitGrid,
  Breadcrumb,
  CheckList,
  FaqAccordion,
  FinalCta,
  LandingHero,
  MedicalDisclaimer,
  Prose,
  RelatedCard,
  StepList,
} from "@/components/landing/LandingParts";
import type { BundlePage, ProgramPage } from "@/lib/program-content";
import { bundlePages, getProgram, programPages } from "@/lib/program-content";

export default function ProgramPage() {
  const params = useParams<{ slug: string }>();
  const p = getProgram(params.slug);
  if (!p) notFound();

  const related = p.relatedPrograms
    .map((s: string) => programPages.find((x) => x.slug === s))
    .filter(Boolean);
  const relatedBundles = p.relatedBundles
    .map((s: string) => bundlePages.find((x) => x.slug === s))
    .filter(Boolean);

  return (
    <>
      <LandingHero
        eyebrow={p.eyebrow}
        name={p.name}
        tagline={p.tagline}
        price={p.price}
        image={p.image}
        chips={[`Includes ${p.includes}`]}
        treatmentKey={p.slug}
      />
      <Breadcrumb label="Programs" to="/treatments" />
      <section className="container-luxe py-20 md:py-28">
        <Eyebrow>Overview</Eyebrow>
        <div className="mt-8"><Prose paragraphs={p.overview} /></div>
      </section>
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="Benefits" title={<>What this program <em className="italic">supports</em></>} />
          <BenefitGrid items={p.benefits} />
        </div>
      </section>
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading
          eyebrow="How it works"
          title={<>A clear, unhurried <em className="italic">clinical path</em></>}
          intro="Every step is provider-led. Nothing is prescribed before your history and diagnostics are reviewed."
        />
        <StepList steps={p.howItWorks} />
      </section>
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Candidacy"
            title={<>Who may <em className="italic">benefit</em></>}
            intro="Candidacy is determined only by a licensed provider after reviewing your assessment."
          />
          <CheckList items={p.whoMayBenefit} />
        </div>
      </section>
      <section className="container-luxe py-20 md:py-28">
        <SectionHeading eyebrow="Questions" title={<>Answered with <em className="italic">care.</em></>} />
        <FaqAccordion faqs={p.faqs} />
      </section>
      <section className="bg-surface/50 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeading eyebrow="Related" title={<>Other paths worth <em className="italic">considering</em></>} />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {(related as ProgramPage[]).map((r) => (
              <RelatedCard key={r!.slug} to="/programs/$slug" slug={r!.slug} name={r!.name} note={r!.tagline} kind="Program" />
            ))}
            {(relatedBundles as BundlePage[]).map((b) => (
              <RelatedCard key={b!.slug} to="/bundles/$slug" slug={b!.slug} name={b!.name} note={b!.tagline} kind="Bundle" />
            ))}
          </div>
        </div>
      </section>
      <div className="pt-20 md:pt-28" />
      <MedicalDisclaimer />
      <div className="pt-14" />
      <FinalCta
        title={<>Begin with an <em className="italic">assessment</em>, not an assumption.</>}
        intro="A licensed provider will review your history and tell you honestly whether this program is right for you."
        treatmentKey={p.slug}
      />
    </>
  );
}
