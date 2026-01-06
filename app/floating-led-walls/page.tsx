"use client"

import { LedBackground } from "@/components/led-background"
import { ProductCarousel } from "@/components/product-carousel"
import { motion } from "framer-motion"

import {
    ArrowRight,
    ChevronDown,
    Maximize,
    Zap,
    Box,
    Layers,
    Monitor,
    Music,
    Building2,
    ShoppingBag
} from "lucide-react"
import Link from "next/link"

export default function LedWallsPage() {
    return (
        <LedBackground>
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center relative px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.0, ease: "easeOut" }}
                    >
                        <div className="inline-block mb-6 px-6 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl">
                            <span className="text-purple-300 font-medium tracking-[0.2em] uppercase text-sm drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                The Future of Display
                            </span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
                            Floating <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x pb-4">
                                LED Dimensions
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-purple-100/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                            Liberate your content from the bezel. Seamless, modular, and infinitely scalable floating LED technologies for immersive environments.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                href="#contact"
                                className="group relative px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]"
                            >
                                Design Your Space
                                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="#technology"
                                className="px-10 py-5 text-white border border-white/20 hover:bg-white/5 rounded-full transition-all font-medium backdrop-blur-sm"
                            >
                                Explore Technology
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
                    animate={{ y: [0, 10, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-8 h-8" />
                </motion.div>
            </section>

            {/* Placeholder for subsequent sections */}
            {/* Problem Section */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full" />
                        <div className="relative p-10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md">
                            <div className="space-y-8">
                                {[
                                    { title: "Heavy Structural Weigth", desc: "Traditional walls require massive reinforcement." },
                                    { title: "Rigid Form Factors", desc: "Limited to flat, rectangular shapes." },
                                    { title: "High Power Consumption", desc: "Inefficient diodes generate excessive heat." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                                            <div className="w-2 h-2 bg-red-500 rounded-full" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold mb-2">{item.title}</h3>
                                            <p className="text-zinc-400 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="order-1 md:order-2">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Static Displays imply <br />
                            <span className="text-zinc-600">Static Thinking.</span>
                        </h2>
                        <p className="text-xl text-zinc-300 leading-relaxed mb-8">
                            Conventional LED walls are heavy, rigid, and energy-hungry. They confine creativity to a box and demand extensive structural support, limiting where and how content can be experienced.
                        </p>
                        <div className="h-1 w-20 bg-purple-500 rounded-full" />
                    </div>
                </div>
            </section>

            {/* Solution Overview */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto text-center mb-20">
                    <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">The Evolution</span>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-8">
                        Defy <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gravity</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                        Our Ultra-Light Floating Modules utilize aerospace-grade carbon fiber composites and localized micro-power distribution to achieve weightlessness in visual design.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-3xl bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 text-center group hover:border-purple-500/50 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                            <Maximize className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Unlimited Scale</h3>
                        <p className="text-zinc-400">Modular interlocking creates seamless canvases of any size or aspect ratio.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 text-center group hover:border-blue-500/50 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                            <Box className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">3D Form Factors</h3>
                        <p className="text-zinc-400">Wrap around columns, create waves, or suspend discrete floating cubes.</p>
                    </div>

                    <div className="p-8 rounded-3xl bg-gradient-to-b from-pink-900/20 to-transparent border border-pink-500/20 text-center group hover:border-pink-500/50 transition-colors">
                        <div className="w-16 h-16 mx-auto bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Eco-Efficiency</h3>
                        <p className="text-zinc-400">Micro-LED tech reduces power draw by 40% while doubling peak brightness.</p>
                    </div>
                </div>
            </section>

            {/* Applications */}
            <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-white mb-16 text-center">Immersive Applications</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: Music, title: "Live Events", desc: "Dynamic stage backdrops that move with the music." },
                            { icon: Building2, title: "Architecture", desc: "Digital facades that blend with building materials." },
                            { icon: ShoppingBag, title: "Retail", desc: "Holographic-effect floating displays for product showcases." }
                        ].map((app, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-2xl aspect-video bg-zinc-900">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                                    <app.icon className="w-10 h-10 text-white mb-4 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                    <h3 className="text-xl font-bold text-white mb-2">{app.title}</h3>
                                    <p className="text-zinc-500 text-sm group-hover:text-zinc-300 transition-colors">{app.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Showcase */}
            <section className="py-32 px-6 relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 blur-[150px] rounded-full" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-purple-400 font-medium tracking-wider uppercase text-sm">The Hardware</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8">
                                Precision Engineering
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { label: "Pixel Pitch", value: "0.9mm MicroLED" },
                                    { label: "Brightness", value: "4000 nits" },
                                    { label: "Transparency", value: "Up to 85%" },
                                    { label: "Refresh Rate", value: "7680 Hz" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4">
                                        <span className="text-zinc-400">{spec.label}</span>
                                        <span className="text-white font-mono font-bold text-lg">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* Abstract Panel Visualization */}
                            <div className="relative aspect-square border-2 border-purple-500/30 rounded-2xl p-4 rotate-3 hover:rotate-0 transition-transform duration-700 bg-black/50 backdrop-blur-sm">
                                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-1 opacity-20">
                                    {[...Array(144)].map((_, i) => (
                                        <div key={i} className="bg-purple-500 rounded-sm" />
                                    ))}
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-2xl opacity-50 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Gallery */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Product Lineup</h2>
                    <p className="text-zinc-400">Explore our varied configurations for any spatial requirement.</p>
                </div>
                <ProductCarousel />
            </section>

            {/* Market & Competitive Edge */}
            <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/5">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Market Dominance</h2>
                        <p className="text-zinc-400">Positioning Spotigence at the forefront of the $27B Digital Signage market.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-black/40 border border-white/10">
                            <h3 className="text-xl font-bold text-white mb-6">Competitive Matrix</h3>
                            <div className="space-y-4">
                                <div className="grid grid-cols-4 text-sm text-zinc-500 pb-2 border-b border-white/10">
                                    <div className="col-span-1">Feature</div>
                                    <div className="text-center">Standard LED</div>
                                    <div className="text-center">OLED</div>
                                    <div className="text-center text-purple-400 font-bold">Spotigence Floating</div>
                                </div>
                                {[
                                    { feat: "Weight", std: "High", oled: "Medium", spot: "Ultra-Low" },
                                    { feat: "Brightness", std: "High", oled: "Medium", spot: "Extreme" },
                                    { feat: "Flexibility", std: "None", oled: "High", spot: "Unlimited" },
                                    { feat: "Install Time", std: "Days", oled: "Hours", spot: "Minutes" }
                                ].map((row, i) => (
                                    <div key={i} className="grid grid-cols-4 text-sm items-center">
                                        <div className="col-span-1 text-white font-medium">{row.feat}</div>
                                        <div className="text-center text-zinc-400">{row.std}</div>
                                        <div className="text-center text-zinc-400">{row.oled}</div>
                                        <div className="text-center text-purple-400 font-bold">{row.spot}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/40 to-black border border-purple-500/20 flex flex-col justify-center text-center">
                            <div className="text-5xl font-bold text-white mb-2">32%</div>
                            <div className="text-purple-300 text-sm mb-8">Projected CAGR (2025-2030)</div>
                            <div className="text-5xl font-bold text-white mb-2">85+</div>
                            <div className="text-purple-300 text-sm">Patents Pending</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-32 px-6 relative z-10 text-center">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
                    Illuminate the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Impossible</span>
                </h2>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-6 bg-white text-black text-xl font-bold rounded-full shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_rgba(255,255,255,0.6)] transition-shadow"
                >
                    Partner With Us
                </motion.button>
            </section>

            <div className="h-[10vh]" />
        </LedBackground>
    )
}
