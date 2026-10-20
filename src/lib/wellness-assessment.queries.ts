import { queryOptions } from "@tanstack/react-query";
import { getWellnessAssessmentInsights } from "@/lib/wellness-assessment.functions";

export const wellnessAssessmentInsightsQuery = () =>
  queryOptions({
    queryKey: ["wellness-assessment-insights"],
    queryFn: async () => getWellnessAssessmentInsights(),
  });
