import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedPost, journalPosts } from "@/lib/journal";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Journal",
  description:
    "Expert insights, wellness education and physician-guided resources on longevity, metabolic health, recovery and personalized care.",
};

export default function JournalPage() {
  const featured = getFeaturedPost();
  const rest = journalPosts.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="container-luxe pb-12 pt-20 md:pt-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-sage" />
            <span className="eyebrow">The Nautic Health Publication</span>
          </span>
          <h1 className="mt-6 text-balance text-5xl leading-[1.02] md:text-7xl">
            Wellness Journal
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Expert insights, wellness education and physician-guided resources designed to
            help you make informed decisions about your long-term health.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#articles" className="btn-primary">
              Explore Articles
            </a>
            <Link href={siteConfig.assessmentUrl} className="btn-outline">
              Take the Wellness Quiz
            </Link>
          </div>
        </div>
      </section>

      <section id="articles" className="container-luxe pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <Link
            href={`/journal/${featured.slug}`}
            className="group relative overflow-hidden rounded-[2rem] lg:col-span-7"
          >
            <div className="relative aspect-[4/3] md:aspect-[16/10]">
              <Image
                src={featured.image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/20 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
              <p className="text-[0.6rem] uppercase tracking-[0.22em] text-primary-foreground/70">
                {featured.section} • {featured.readTime}
              </p>
              <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-primary-foreground md:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-primary-foreground/80 md:text-base">
                {featured.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.22em] text-gold">
                Read Article <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </span>
            </div>
          </Link>

          <div className="grid gap-8 lg:col-span-5">
            {rest.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
                href={`/journal/${post.slug}`}
                className="group grid grid-cols-[7rem_1fr] items-center gap-5 sm:grid-cols-[10rem_1fr] sm:gap-7"
              >
                <div className="relative aspect-square overflow-hidden rounded-[1.25rem]">
                  <Image
                    src={post.image}
                    alt=""
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-1000 group-hover:scale-[1.06]"
                  />
                </div>
                <div>
                  <p className="text-[0.6rem] uppercase tracking-[0.22em] text-sage">
                    {post.section} • {post.readTime}
                  </p>
                  <h3 className="mt-2 text-balance font-serif text-xl leading-tight text-forest md:text-2xl">
                    {post.title}
                  </h3>
                  <span className="mt-3 inline-block text-[0.68rem] uppercase tracking-[0.22em] text-forest/70">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.slice(3).map((post) => (
            <Link
              key={post.slug}
              href={`/journal/${post.slug}`}
              className="group overflow-hidden rounded-[1.75rem] border border-border/60 bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-7">
                <p className="text-[0.6rem] uppercase tracking-[0.22em] text-sage">
                  {post.section} • {post.readTime}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-tight text-forest">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-luxe pb-28 text-center">
        <p className="text-base text-muted-foreground">
          Ready to explore physician-guided care?
        </p>
        <Link href={siteConfig.assessmentUrl} className="btn-primary mt-8 inline-flex">
          Start Your Private Assessment
        </Link>
      </section>
    </>
  );
}
