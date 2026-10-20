import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  careArea: z.string(),
  referrer: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const data = bodySchema.parse(json);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const userAgent = req.headers.get("user-agent");
    const { error } = await supabaseAdmin.from("wellness_assessment_completions").insert({
      care_area: data.careArea,
      referrer: data.referrer ?? null,
      user_agent: userAgent,
    });
    if (error) {
      console.error(error);
      return NextResponse.json({ error: "Failed to record completion" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
