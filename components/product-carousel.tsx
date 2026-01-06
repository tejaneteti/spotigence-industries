"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselItem {
    id: number
    title: string
    desc: string
    color: string
}

const items: CarouselItem[] = [
    { id: 1, title: "Modulo-Cube", desc: "Stackable 3D LED blocks for architectural sculpture.", color: "from-purple-500" },
    { id: 2, title: "Flex-Sheet", desc: "Ultra-thin, bendable panels for curved surfaces.", color: "from-blue-500" },
    { id: 3, title: "Aero-Mesh", desc: "70% transparent mesh for window displays.", color: "from-pink-500" },
    { id: 4, title: "Holo-Blade", desc: "High-RPM spinning blades for 3D holographic effects.", color: "from-cyan-500" },
]

export function ProductCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % items.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length)
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)

    return (
        <div className="relative w-full max-w-5xl mx-auto h-[500px] overflow-hidden rounded-3xl bg-black/50 border border-white/10 backdrop-blur-xl group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center p-12"
                >
                    <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                        <div className="relative aspect-square rounded-2xl bg-gradient-to-br to-transparent opacity-80 flex items-center justify-center overflow-hidden border border-white/10"
                            style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), transparent)` }} >
                            <div className={`absolute inset-0 bg-gradient-to-br ${items[currentIndex].color} to-transparent opacity-20`} />
                            <div className={`w-32 h-32 rounded-full bg-gradient-to-r ${items[currentIndex].color} to-white blur-3xl opacity-60 animate-pulse`} />
                            <div className="relative z-10 text-9xl font-bold text-white/5">{items[currentIndex].id}</div>
                        </div>

                        <div>
                            <span className={`text-sm font-medium uppercase tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${items[currentIndex].color} to-white`}>
                                Product Series
                            </span>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">{items[currentIndex].title}</h3>
                            <p className="text-xl text-zinc-400 leading-relaxed mb-8">{items[currentIndex].desc}</p>
                            <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors font-medium border border-white/5">
                                View Specifications
                            </button>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "w-8 bg-white" : "bg-white/30 hover:bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    )
}
