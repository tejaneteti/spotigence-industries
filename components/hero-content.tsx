

"use client"
import { AnimatePresence, motion } from "framer-motion"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"


// Lazy load the 3D model with no SSR
const LogoModel3D = dynamic(() => import("./logo"), {
  ssr: false,
})

 function LogoModel() {
  const [mounted, setMounted] = useState(false)

  // Small delay to let 3D mount & fade nicely
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 300) 
    return () => clearTimeout(t)
  }, [])

  return (
    <div className="relative w-full aspect-square md:aspect-video flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!mounted && (
          <motion.img
            key="loading"
            src="cirrus.png"
            alt="Spotigence Industries Logo"
            className="max-w-[90%] md:max-w-[80%] lg:max-w-[70%] absolute"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
        {mounted && (
          <motion.div
            key="3d"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <LogoModel3D />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
export default function HeroContent() {
  return (
    <div className="w-full">
       <div className="flex-1flex  justify-center items-center w-full">
       <LogoModel />

      </div>
    <main className="absolute bottom-8 left-8 z-20 max-w-lg md:max-w-xl w-full">
      
      <div className="text-left">
        {/* Badge */}
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{ filter: "url(#glass-effect)" }}
          aria-hidden="true"
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Spotigence Industries</span>
        </div>

        <h1 className="text-5xl md:text-6xl tracking-tight font-light text-white mb-4 text-pretty">
          Coming Soon
          <br />
          <span className="font-light text-white/90">Intelligent Systems for the Real World</span>
        </h1>

        <p className="text-sm font-light text-white/75 mb-6 leading-relaxed">
          We’re building vision-driven autonomy—merging perception, planning, and onboard AI into deployable systems
          systems. We’re not ready yet, but we will be soon.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="mailto:info@spotigenceindustries.com"
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white/90 text-xs font-medium transition-colors"
            aria-label="Email Spotigence Industries"
          >
            Contact us
          </a>
          <a
            href="https://spotigenceindustries.com/"
            className="inline-flex items-center px-4 py-2 rounded-full border border-white/15 hover:border-white/25 text-white/80 hover:text-white text-xs font-light transition-colors"
          >
            spotigenceindustries.com
          </a>
        </div>
      </div>
    </main>
    </div>
  )
}
