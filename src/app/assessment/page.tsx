import MultiStepAssessment from "@/components/MultiStepAssessment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Health Assessment",
  description:
    "Answer a few questions about your goals and health history to help a licensed provider evaluate appropriate next steps.",
};

export default function AssessmentPage() {
  return (
    <section className="container-luxe max-w-2xl py-20 md:py-28">
      <h1 className="text-balance font-serif text-4xl leading-[1.08] text-forest md:text-5xl">
        Private Health Assessment
      </h1>
      <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
        Answer a few questions about your goals and health history to help a licensed provider
        evaluate appropriate next steps.
      </p>
      <MultiStepAssessment />
    </section>
  );
}
