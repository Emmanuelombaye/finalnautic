import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  return (
    <section className="mt-28 bg-surface/60 py-28 md:py-40">
      <div className="container-luxe">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">Voices from the practice</span>
          </span>
          <h2 className="mt-6 text-balance text-4xl leading-[1.05] md:text-5xl">
            Care that <em className="italic">compounds.</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-3xl border border-border/60 bg-card p-10"
            >
              <span className="font-serif text-4xl leading-none text-gold">
                &ldquo;
              </span>
              <blockquote className="mt-4 text-base leading-relaxed text-forest/90">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="font-serif text-lg text-forest">{t.name}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
