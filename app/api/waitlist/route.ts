import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailPattern.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 })
    }

    // No database connected; you can wire this up later to Supabase/Neon or an email provider.
    // For now, we log to server output.
    console.log("[Spotigence Waitlist] New subscriber:", email)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Bad request" }, { status: 400 })
  }
}
