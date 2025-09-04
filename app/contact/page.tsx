"use client"

import type React from "react"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<null | { type: "success" | "error"; message: string }>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      company: String(data.get("company") || ""),
      message: String(data.get("message") || ""),
    }

    if (!payload.email || !payload.message) {
      setStatus({ type: "error", message: "Please provide at least your email and a message." })
      return
    }

    try {
      setLoading(true)
      setStatus(null)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) {
        throw new Error(json?.error || "Failed to send message")
      }
      setStatus({ type: "success", message: "Thanks! Your message has been sent." })
      toast({ title: "Message sent", description: "We’ll get back to you shortly." })
      form.reset()
    } catch (err: any) {
      setStatus({ type: "error", message: err?.message || "Something went wrong" })
      toast({ title: "Send failed", description: "Please try again in a moment.", variant: "destructive" as any })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="max-w-xl mx-auto px-6 py-20">
        <a
          href="/"
          className="text-xs text-white/60 hover:text-white/80 transition-colors inline-block mb-6"
          aria-label="Back to home"
        >
          ← Back
        </a>

        <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-3 text-pretty">
          Contact Spotigence Industries
        </h1>
        <p className="text-sm text-white/75 leading-relaxed mb-10">
          Tell us about your use case or partnership idea. We’ll reach out shortly.
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs text-white/75 mb-1">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="Ada Lovelace"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-xs text-white/75 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                placeholder="you@company.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block text-xs text-white/75 mb-1">
              Company
            </label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="Acme Systems"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs text-white/75 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              placeholder="How can we help?"
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 disabled:opacity-50 text-white/90 text-xs font-medium transition-colors"
            >
              {loading ? "Sending..." : "Send message"}
            </button>
            {status && (
              <p role="status" className={`text-xs ${status.type === "success" ? "text-green-400" : "text-red-400"}`}>
                {status.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
