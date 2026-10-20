export async function recordWellnessAssessmentCompletion(data: {
  careArea: string;
  referrer?: string;
}) {
  const res = await fetch("/api/wellness-assessment/complete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to record completion");
  return res.json() as Promise<{ ok: true }>;
}

export async function getWellnessAssessmentInsights() {
  const res = await fetch("/api/wellness-assessment/insights");
  if (!res.ok) throw new Error("Failed to load insights");
  return res.json() as Promise<{
    total: number;
    last24h: number;
    byCareArea: Record<string, number>;
    recent: { careArea: string; date: string }[];
  }>;
}
