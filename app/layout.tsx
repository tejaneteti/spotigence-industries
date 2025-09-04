import type React from "react"
import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Instrument_Serif } from "next/font/google"
import "./globals.css"

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
})


export const metadata: Metadata = {
  title: "Spotigence Industries | Systems, AI Autonomy & Intelligent Machines",
  description:
    "Spotigence Industries builds intelligent systems for the real world. Vision-driven autonomy, advanced perception, planning systems, and onboard AI. Join our waitlist to explore next-gen automation.",
  keywords: [
    "Spotigence",
    "systems startup",
    "AI systems",
    "autonomous robots",
    "vision-driven autonomy",
    "perception and planning",
    "intelligent machines",
    "systems AI company",
  ],
  authors: [{ name: "Spotigence Industries", url: "https://www.spotigenceindustries.com/" }],
  creator: "Spotigence Industries",
  publisher: "Spotigence Industries",
  metadataBase: new URL("https://www.spotigenceindustries.com/"),

  openGraph: {
    title: "Spotigence Industries — Systems & AI Autonomy",
    description:
      "Intelligent systems for the real world. Vision-driven autonomy, perception, planning, and onboard AI.",
    url: "https://www.spotigenceindustries.com/",
    siteName: "Spotigence Industries",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 1200,
        height: 630,
        alt: "Spotigence Industries Logo and Systems AI Tagline",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Spotigence Industries | Systems & AI Autonomy",
    description:
      "Systems startup building vision-driven autonomy, onboard AI, and intelligent machines.",
    images: ["/favicon-32x32.png"],
    creator: "@spotigenceindustries",
  },

  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon.ico",
    apple: "/favicon-32x32.png",
  },

  alternates: {
    canonical: "https://www.spotigenceindustries.com/",
  },

  other: {
    "contact:email": "info@spotigenceindustries.com",
    "contact:phone_number": "+91-9014982291",
    "contact:address": "opposite zp highschool , datti village , dattirajeru sub-district vizianagaram district , andhrapradesh pincode:535580, india",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${instrumentSerif.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>

  )
}
