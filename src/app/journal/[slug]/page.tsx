import Link from "next/link";
import { notFound } from "next/navigation";
import { getJournalPost, journalPosts } from "@/lib/journal";
import { siteConfig } from "@/lib/data";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) return { title: "Wellness Journal" };
  return { title: post.title, description: post.description };
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getJournalPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="container-luxe pb-20 pt-20 md:pt-32">
        <Link
          href="/journal"
          className="text-[0.68rem] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-forest"
        >
          ← Wellness Journal
        </Link>
        <p className="mt-8 text-[0.6rem] uppercase tracking-[0.22em] text-sage">
          {post.section} • {post.readTime}
        </p>
        <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.05] md:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {post.description}
        </p>
        <div className="prose-nautic mt-12 max-w-3xl space-y-6">
          {post.body.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
      <section className="border-t border-border/40 bg-surface/60 py-20">
        <div className="container-luxe text-center">
          <h2 className="heading-section">Interested in physician-guided care?</h2>
          <Link href={siteConfig.assessmentUrl} className="btn-primary mt-8 inline-flex">
            Start Your Private Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
