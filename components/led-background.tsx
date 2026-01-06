"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function LedBackground({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-purple-500/30">
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Deep Atmospheric Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-[#120524]" />

                {/* Floating Light Waves */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-[60vh] opacity-30 blur-[100px]"
                    animate={{
                        background: [
                            "radial-gradient(circle at 0% 0%, #7c3aed 0%, transparent 50%)",
                            "radial-gradient(circle at 100% 0%, #3b82f6 0%, transparent 50%)",
                            "radial-gradient(circle at 0% 0%, #7c3aed 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />

                <motion.div
                    className="absolute bottom-0 right-0 w-full h-[60vh] opacity-20 blur-[120px]"
                    animate={{
                        background: [
                            "radial-gradient(circle at 100% 100%, #db2777 0%, transparent 50%)",
                            "radial-gradient(circle at 0% 100%, #8b5cf6 0%, transparent 50%)",
                            "radial-gradient(circle at 100% 100%, #db2777 0%, transparent 50%)"
                        ]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Floating LED Particles */}
                {mounted && [...Array(20)].map((_, i) => (
                    <FloatingParticle key={i} delay={i * 0.5} />
                ))}
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

function FloatingParticle({ delay }: { delay: number }) {
    const randomX = Math.random() * 100
    const size = Math.random() * 4 + 2
    const duration = 10 + Math.random() * 10

    return (
        <motion.div
            className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{
                left: `${randomX}%`,
                width: size,
                height: size
            }}
            initial={{ bottom: "-10%", opacity: 0 }}
            animate={{
                bottom: "110%",
                opacity: [0, 0.4, 0.8, 0.4, 0],
                x: [0, (Math.random() - 0.5) * 50, 0] // Gentle drift
            }}
            transition={{
                duration: duration,
                delay: delay,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    )
}
