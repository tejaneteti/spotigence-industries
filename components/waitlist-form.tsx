"use client"

import type React from "react"

import { useState } from "react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setMessage(null)

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(email)) {
      setStatus("error")
      setMessage("Please enter a valid email address.")
      return
    }

    try {
      setStatus("loading")
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) {
        throw new Error("Failed to join waitlist")
      }
      setStatus("success")
      setMessage("You're on the list. We'll be in touch soon!")
      setEmail("")
    } catch (err) {
      setStatus("error")
      setMessage("Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <label htmlFor="email" className="sr-only">
        Email address
      </label>
      <div className="flex items-stretch gap-2">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-full bg-white/5 text-white placeholder:text-white/50 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
          aria-describedby="waitlist-help"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-3 rounded-full bg-white text-black text-xs font-medium hover:bg-white/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          aria-label="Join waitlist"
        >
          {status === "loading" ? "Joining..." : "Join"}
        </button>
      </div>
      <p id="waitlist-help" className="mt-2 text-[11px] text-white/60">
        We’ll never share your email. Unsubscribe anytime.
      </p>
      {message && (
        <p
          className={`mt-2 text-xs ${status === "success" ? "text-cyan-300" : "text-red-300"}`}
          role={status === "error" ? "alert" : undefined}
        >
          {message}
        </p>
      )}
    </form>
  )
}
