import { NextResponse } from "next/server";

type AssessmentPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  treatment?: string;
  goals?: string;
};

export async function POST(request: Request) {
  let body: AssessmentPayload;

  try {
    body = (await request.json()) as AssessmentPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (!body.firstName?.trim() || !body.lastName?.trim() || !body.email?.trim()) {
    return NextResponse.json(
      { error: "First name, last name, and email are required." },
      { status: 400 }
    );
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;

  if (formspreeId) {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone ?? "",
        treatment: body.treatment ?? "",
        goals: body.goals ?? "",
        _subject: "Nautic Health Assessment Intake",
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Unable to submit assessment right now." },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ ok: true });
}
