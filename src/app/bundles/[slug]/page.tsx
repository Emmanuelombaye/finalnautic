import { notFound } from "next/navigation";
import BundlePage from "@/components/BundlePage";
import { bundleSlugs, getBundleBySlug } from "@/lib/programs";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return bundleSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bundle = getBundleBySlug(slug);
  if (!bundle) return { title: "Bundle" };
  return {
    title: `${bundle.name} | Signature Wellness Bundle`,
    description: bundle.subtitle,
  };
}

export default async function DynamicBundlePage({ params }: Props) {
  const { slug } = await params;
  const bundle = getBundleBySlug(slug);
  if (!bundle) notFound();
  return <BundlePage bundle={bundle} />;
}
