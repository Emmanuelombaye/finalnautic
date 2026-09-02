import MultiStepAssessment from "@/components/MultiStepAssessment";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Health Assessment",
  description:
    "Answer a few questions about your goals and health history to help a licensed provider evaluate appropriate next steps.",
};

export default function AssessmentPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container-luxe section-padding pb-16">
          <h1 className="heading-display max-w-3xl">Private Health Assessment</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Answer a few questions about your goals and health history to help a licensed
            provider evaluate appropriate next steps.
          </p>
        </div>
      </section>
      <MultiStepAssessment />
    </>
  );
}
