import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data, error } = await supabaseAdmin
      .from("wellness_assessment_completions")
      .select("care_area, created_at")
      .order("created_at", { ascending: false });
    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to load insights" }, { status: 500 });
    }
    const rows = data ?? [];
    const total = rows.length;
    const byCareArea = rows.reduce<Record<string, number>>((acc, row) => {
      acc[row.care_area] = (acc[row.care_area] ?? 0) + 1;
      return acc;
    }, {});
    const last24h = rows.filter(
      (row) => new Date(row.created_at).getTime() > Date.now() - 24 * 60 * 60 * 1000,
    ).length;
    const recent = rows.slice(0, 30).map((row) => ({
      careArea: row.care_area,
      date: row.created_at,
    }));
    return NextResponse.json({ total, last24h, byCareArea, recent });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
