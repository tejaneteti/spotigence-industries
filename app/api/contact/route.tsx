// Requires environment variables in Project Settings:
// - RESEND_API_KEY
// - CONTACT_TO (recipient email address)
// - CONTACT_FROM (verified sender, e.g. "Spotigence Industries <noreply@yourdomain.com>")
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name = "", email = "", company = "", message = "" } = await req.json()

    if (!email || !message) {
      return NextResponse.json({ error: "Email and message are required." }, { status: 400 })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO = process.env.CONTACT_TO
    const CONTACT_FROM = process.env.CONTACT_FROM || "Spotigence Industries <onboarding@resend.dev>"

    if (!RESEND_API_KEY || !CONTACT_TO) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please set RESEND_API_KEY and CONTACT_TO (and optionally CONTACT_FROM) in Project Settings.",
        },
        { status: 500 },
      )
    }

    const subject = `New contact — Spotigence Industries`
    const html = `
      <div>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `.trim()

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_TO,
        subject,
        html,
        reply_to: email || undefined,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`,
      }),
    })

    const data = await res.json()
    if (!res.ok) {
      return NextResponse.json({ error: data?.message || "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || "Unexpected error" }, { status: 500 })
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
