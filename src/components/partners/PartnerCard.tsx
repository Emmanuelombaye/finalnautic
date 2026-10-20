import type { Partner } from "@/lib/partners-content";

function Monogram({ name }: { name: string }) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <span className="font-serif text-xl leading-none text-forest/70">{initials}</span>
  );
}

export function PartnerCard({ partner }: { partner: Partner }) {
  const {
    name,
    category,
    location,
    description,
    website,
    social,
    offer,
    promoCode,
    ctaLabel,
    logo,
    featured,
  } = partner;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-3xl border p-8 transition-all duration-500 ease-out hover:-translate-y-1 ${
        featured
          ? "border-gold/40 bg-card shadow-[0_24px_60px_-42px_rgba(68,86,74,0.55)] hover:shadow-[0_28px_70px_-38px_rgba(68,86,74,0.6)]"
          : "border-border/60 bg-card/70 hover:border-forest/25 hover:shadow-[0_22px_54px_-42px_rgba(68,86,74,0.5)]"
      }`}
    >
      {featured && (
        <span className="absolute right-6 top-6 rounded-full border border-gold/50 px-3 py-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-gold">
          Featured
        </span>
      )}

      <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-surface/70">
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain p-2" loading="lazy" />
        ) : (
          <Monogram name={name} />
        )}
      </div>

      <h3 className="mt-6 font-serif text-2xl leading-snug">{name}</h3>

      <p className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-sage">
        {category}
      </p>
      {location && <p className="mt-1 text-sm text-muted-foreground">{location}</p>}

      <p className="mt-5 text-sm leading-relaxed text-forest/80">{description}</p>

      {offer && (
        <div className="mt-6 rounded-2xl border border-gold/30 bg-surface/50 p-5">
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.2em] text-gold">
            Exclusive Partner Offer
          </p>
          <p className="mt-2 text-sm leading-relaxed text-forest/85">{offer}</p>
          {promoCode && (
            <p className="mt-3 text-xs text-muted-foreground">
              Code{" "}
              <span className="rounded-full border border-border bg-background px-3 py-1 font-medium tracking-[0.12em] text-forest">
                {promoCode}
              </span>
            </p>
          )}
        </div>
      )}

      <div className="mt-auto flex flex-wrap items-center gap-4 pt-8">
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="group/link inline-flex items-center gap-2 text-sm text-forest"
          >
            <span>{ctaLabel ?? "Visit Partner"}</span>
            <span className="h-px w-6 bg-gold transition-all duration-500 group-hover/link:w-10" />
          </a>
        )}
        {social && (
          <a
            href={social}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-sm text-muted-foreground transition-colors hover:text-forest"
          >
            Social
          </a>
        )}
      </div>
    </article>
  );
}
