import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { sectionAssets } from "@/lib/media";

export default function CTASection({
  title = (
    <>
      Your weight-management plan <em className="italic">starts</em> with an
      evaluation.
    </>
  ),
  subtitle = "Complete your medical intake for review by a licensed provider. Depending on your treatment, medical history, location, and clinical needs, your evaluation may be completed asynchronously or through a live consultation.",
  primaryLabel = "Start Your Private Assessment",
  secondaryLabel,
  secondaryHref,
  footerNote,
  secondaryVariant = "outline",
}: {
  title?: ReactNode;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  footerNote?: string;
  secondaryVariant?: "outline" | "ghost";
}) {
  return (
    <section className="container-luxe py-28 md:py-40">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Begin</span>
          </span>
          <h2 className="mt-6 text-balance text-5xl leading-[1.02] md:text-6xl">
            {title}
          </h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href={siteConfig.assessmentUrl} className="btn-primary">
              {primaryLabel}
            </Link>
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                className={secondaryVariant === "ghost" ? "btn-ghost" : "btn-outline"}
              >
                {secondaryLabel}
              </Link>
            )}
          </div>
          {footerNote && (
            <p className="mt-6 text-xs text-sage">{footerNote}</p>
          )}
        </div>
        <div className="md:col-span-5">
          <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-surface">
            <Image
              src={sectionAssets.ctaStretch}
              alt="A man and a woman stretching together in a sunlit sage-toned studio"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              quality={72}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
