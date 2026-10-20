import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellness Assessment — Find Your Program | Nautic Health",
  description: "Answer six short questions about your goals to see which Nautic Health treatments and programs may fit. Educational guidance, not a medical intake.",
};

import WellnessAssessment from "@/components/WellnessAssessment";

function WellnessAssessmentPage() {
  return <WellnessAssessment />;
}

export default WellnessAssessmentPage;
