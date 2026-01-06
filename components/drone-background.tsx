"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function DroneBackground({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <div className="relative min-h-screen bg-black overflow-hidden selection:bg-[#00e5ff]/30">
            {/* Background Grids */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Perspective Grid Bottom - Faster Speed */}
                <div
                    className="absolute inset-x-0 bottom-0 h-[50vh] opacity-30"
                    style={{
                        background: `linear-gradient(to top, transparent 0%, #00e5ff 1px, transparent 2px), linear-gradient(90deg, transparent 0%, #00e5ff 1px, transparent 2px)`,
                        backgroundSize: '40px 40px',
                        transform: 'perspective(500px) rotateX(60deg) translateY(0)',
                        transformOrigin: 'bottom',
                        maskImage: 'linear-gradient(to top, black, transparent)',
                        animation: 'gridMove 2s linear infinite'
                    }}
                />

                {/* Top Radar Grid */}
                <div
                    className="absolute inset-0 opacity-[0.05]"
                    style={{
                        backgroundImage: `radial-gradient(#00e5ff 1px, transparent 1px)`,
                        backgroundSize: '30px 30px'
                    }}
                />

                {/* Vertical Scanning Line */}
                <motion.div
                    className="absolute inset-x-0 h-[2px] bg-[#00e5ff]/30 shadow-[0_0_20px_#00e5ff]"
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                {/* Radar Sweep Animation - Faster */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] rounded-full border border-[#00e5ff]/10"
                    animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                    transition={{
                        rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                        scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                    }}
                >
                    <div className="w-full h-1/2 bg-gradient-to-l from-[#00e5ff]/20 to-transparent blur-3xl opacity-40 origin-bottom" style={{ transformOrigin: '50% 100%' }} />
                </motion.div>

                {/* Moving Drone Dots - Increased Count */}
                {mounted && [...Array(15)].map((_, i) => (
                    <MovingDrone key={i} />
                ))}
            </div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

function MovingDrone() {
    const randomX = Math.random() * 100
    const randomY = Math.random() * 100
    const duration = 10 + Math.random() * 20

    return (
        <motion.div
            className="absolute w-1 h-1 bg-[#00e5ff] rounded-full shadow-[0_0_10px_#00e5ff]"
            initial={{ left: `${randomX}%`, top: `${randomY}%`, opacity: 0 }}
            animate={{
                left: [`${randomX}%`, `${(randomX + 50) % 100}%`],
                top: [`${randomY}%`, `${(randomY + 30) % 100}%`],
                opacity: [0, 1, 0]
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    )
}
