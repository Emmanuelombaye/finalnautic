import { notFound } from "next/navigation";
import ProgramPage from "@/components/ProgramPage";
import { getProgramByRouteSlug, programRouteSlugs } from "@/lib/programs";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return programRouteSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramByRouteSlug(slug);
  if (!program) return { title: "Program" };
  return {
    title: `${program.name} | ${program.programLabel}`,
    description: program.description,
  };
}

export default async function DynamicProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = getProgramByRouteSlug(slug);
  if (!program) notFound();
  return <ProgramPage treatment={program} />;
}
