import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  description?: string;
  lastUpdated?: string;
  children: ReactNode;
};

/**
 * Shared prose layout for policy / consent pages (Efexia-style legal pages).
 */
export default function LegalPage({
  title,
  description,
  lastUpdated,
  children,
}: LegalPageProps) {
  return (
    <section className="pt-8 md:pt-10">
      <div className="container-nautic section-padding max-w-3xl">
        <h1 className="heading-section">{title}</h1>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
        {lastUpdated ? (
          <p className="mt-3 text-xs uppercase tracking-[0.14em] text-sage">
            Last updated: {lastUpdated}
          </p>
        ) : null}
        <div className="legal-prose mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground [&_a]:text-gold [&_a]:underline [&_a]:underline-offset-2 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-forest [&_h2]:mt-10 [&_h2]:first:mt-0 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
          {children}
        </div>
      </div>
    </section>
  );
}
