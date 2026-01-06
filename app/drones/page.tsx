"use client"

import { DroneBackground } from "@/components/drone-background"

import { FeatureCard } from "@/components/feature-card"
import { motion } from "framer-motion"
import {
    ArrowRight,
    Shield,
    Zap,
    Eye,
    Cpu,
    Crosshair,
    Wifi,
    Battery,
    Server,
    AlertTriangle,
    CheckCircle2,
    Layers,
    Globe,
    TrendingUp,
    Award,
    ChevronRight
} from "lucide-react"
import Link from "next/link"

export default function DronesPage() {
    return (
        <DroneBackground>
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none" />

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00e5ff]/30 bg-[#00e5ff]/5 backdrop-blur-md mb-8">
                                <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
                                <span className="text-[#00e5ff] text-sm font-medium tracking-wider uppercase">Advanced Aerial Systems</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-8">
                                Dominate <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] to-blue-600">
                                    The Skies
                                </span>
                            </h1>

                            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Next-generation autonomous drone fleets for surveillance, inspection, and tactical operations. Precision engineering meets swarm intelligence.
                            </p>

                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <Link
                                    href="#contact"
                                    className="group relative px-8 py-4 bg-[#00e5ff] hover:bg-[#00c2d9] text-black font-bold rounded-lg transition-all hover:scale-105 flex items-center gap-2"
                                >
                                    Deploy Fleet
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <Link
                                    href="#capabilities"
                                    className="px-8 py-4 text-white border border-white/20 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 rounded-lg transition-all font-medium"
                                >
                                    View Capabilities
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-12 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
                            <div className="w-1 h-2 bg-[#00e5ff] rounded-full" />
                        </div>
                    </motion.div>
                </section>

                {/* Industry Problem Section */}
                <section className="py-24 px-6 relative z-10 bg-black/50 backdrop-blur-sm border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 mb-6">
                                    <AlertTriangle className="w-4 h-4 text-red-500" />
                                    <span className="text-red-500 text-sm font-medium uppercase tracking-wider">The Challenge</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                    Traditional Surveillance is <span className="text-zinc-500">Obsolete</span>
                                </h2>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    Static cameras have blind spots. Manned patrols are costly and dangerous. Satellite imagery is too slow. Modern security threats require real-time, adaptive, and autonomous aerial intelligence.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Limited coverage area & stationary blindspots",
                                        "High operational costs for 24/7 monitoring",
                                        "Inability to track moving targets effectively",
                                        "Slow response times to critical incidents"
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-2 h-2 rounded-full bg-red-500" />
                                            </div>
                                            <span className="text-zinc-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff]/20 to-blue-600/20 blur-3xl rounded-full opacity-20" />
                                <div className="relative p-8 rounded-2xl border border-white/10 bg-black/60">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-3 bg-green-500/10 rounded-lg">
                                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">The Autonomous Solution</h3>
                                            <p className="text-zinc-400 text-sm">AI-Driven Aerial Superiority</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            { label: "Coverage", old: "Static / Limited", new: "Infinite / Dynamic" },
                                            { label: "Response Time", old: "15-30 Minutes", new: "< 2 Minutes" },
                                            { label: "Cost Per Hour", old: "$500+ (Manned)", new: "$15 (Auto-Drone)" },
                                            { label: "Intelligence", old: "Reactive", new: "Predictive AI" }
                                        ].map((stat, i) => (
                                            <div key={i} className="grid grid-cols-3 items-center text-sm gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                                                <span className="text-zinc-500">{stat.label}</span>
                                                <span className="text-red-400/80 line-through decoration-red-500/50">{stat.old}</span>
                                                <span className="text-[#00e5ff] font-medium">{stat.new}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section id="capabilities" className="py-32 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <span className="text-[#00e5ff] font-medium tracking-wider uppercase text-sm">Key Capabilities</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                                Engineered for <span className="text-[#00e5ff]">Mission Success</span>
                            </h2>
                            <p className="text-zinc-400 text-lg">
                                Our drone platforms integrate cutting-edge aerospace engineering with military-grade AI for unmatched performance in any environment.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <FeatureCard
                                icon={Crosshair}
                                title="Precision Tracking"
                                description="AI-powered object detection and locking ensures targets are never lost, even in complex urban environments."
                                delay={0.1}
                            />
                            <FeatureCard
                                icon={Eye}
                                title="Thermal Vision"
                                description="Advanced IR sensors provide clear visibility in total darkness, fog, and smoke for 24/7 operational capability."
                                delay={0.2}
                            />
                            <FeatureCard
                                icon={Wifi}
                                title="Mesh Networking"
                                description="Swarm intelligence allows drones to communicate and coordinate without central command, ensuring resilience."
                                delay={0.3}
                            />
                            <FeatureCard
                                icon={Battery}
                                title="Extended Endurance"
                                description="Hybrid power systems deliver 4x flight time compared to standard commercial drones, covering up to 50km."
                                delay={0.4}
                            />
                            <FeatureCard
                                icon={Shield}
                                title="Collision Avoidance"
                                description="360-degree LiDAR and optical flow sensors enable autonomous navigation through dense obstacles."
                                delay={0.5}
                            />
                            <FeatureCard
                                icon={Server}
                                title="Edge Computing"
                                description="Onboard heavy-compute modules process video and data in real-time, reducing bandwidth requirements."
                                delay={0.6}
                            />
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="py-24 px-6 relative z-10 bg-white/5 border-y border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                            <div>
                                <span className="text-[#00e5ff] font-medium tracking-wider uppercase text-sm">Deployment Scenarios</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Versatile Operations</h2>
                            </div>
                            <Link href="#" className="flex items-center gap-2 text-[#00e5ff] hover:text-white transition-colors">
                                All Use Cases <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { title: "Border Security", desc: "Autonomous patrol of remote borderlines with anomaly detection." },
                                { title: "Infrastructure Inspection", desc: "High-res thermal scanning of power lines, pipelines, and bridges." },
                                { title: "Tactical Reconnaissance", desc: "Real-time situational awareness for rapid response units." }
                            ].map((caseItem, i) => (
                                <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-900 border border-white/10">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                                    <div className="absolute inset-0 bg-zinc-800 group-hover:scale-110 transition-transform duration-700" />

                                    <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                        <h3 className="text-2xl font-bold text-white mb-2">{caseItem.title}</h3>
                                        <p className="text-zinc-400 mb-6">{caseItem.desc}</p>
                                        <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                                            Read Case Study <ChevronRight className="w-4 h-4 text-[#00e5ff]" />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack & Showcase */}
                <section className="py-32 px-6 relative z-10">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <span className="text-[#00e5ff] font-medium tracking-wider uppercase text-sm">Proprietary Tech Stack</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8">
                                Vertical Integration <br />
                                <span className="text-zinc-500">From Chip to Cloud</span>
                            </h2>

                            <div className="space-y-8">
                                {[
                                    { icon: Layers, title: "Hardware Layer", desc: "Custom carbon-fiber airframes with integrated composite antennas." },
                                    { icon: Cpu, title: "Compute Layer", desc: "Dual NVIDIA Orin NX modules for 200 TOPS onboard AI processing." },
                                    { icon: Wifi, title: "Comms Layer", desc: "Quantum-resistant encrypted mesh link with satellite fallback." },
                                    { icon: Globe, title: "Control Layer", desc: "Global fleet management dashboard with AR tactical overlay." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center shrink-0">
                                            <item.icon className="w-6 h-6 text-[#00e5ff]" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                                            <p className="text-zinc-400">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            {/* Abstract Drone Visualization */}
                            <div className="relative aspect-square rounded-full border border-white/10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[#00e5ff]/5 rounded-full animate-pulse" />
                                <div className="absolute w-[80%] h-[80%] border border-[#00e5ff]/20 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
                                <div className="absolute w-[60%] h-[60%] border border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />

                                <div className="relative z-10 text-center">
                                    <div className="text-6xl font-bold text-white mb-2">350+</div>
                                    <div className="text-[#00e5ff] uppercase tracking-widest text-sm">Patents Filed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Market Opportunity */}
                <section className="py-24 px-6 relative z-10 bg-black/50 border-y border-white/5">
                    <div className="max-w-7xl mx-auto text-center">
                        <span className="text-[#00e5ff] font-medium tracking-wider uppercase text-sm">Market Velocity</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-16">
                            Explosive Sector Growth
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { label: "TAM by 2030", value: "$58B", icon: TrendingUp },
                                { label: "YoY Growth", value: "142%", icon: Zap },
                                { label: "Gov Contracts", value: "Secure", icon: Award }
                            ].map((stat, i) => (
                                <div key={i} className="p-10 rounded-2xl bg-white/5 border border-white/10">
                                    <stat.icon className="w-8 h-8 text-[#00e5ff] mx-auto mb-6" />
                                    <div className="text-4xl md:text-6xl font-bold text-white mb-2">{stat.value}</div>
                                    <div className="text-zinc-400 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section id="contact" className="py-32 px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                            Ready to define the future of <br />
                            <span className="text-[#00e5ff]">Aerial Autonomy?</span>
                        </h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-[#00e5ff] hover:bg-[#00c2d9] text-black text-lg font-bold rounded-lg transition-all hover:scale-105">
                                Request Investor Deck
                            </button>
                            <button className="px-10 py-5 text-white border border-white/20 hover:border-[#00e5ff]/50 hover:bg-[#00e5ff]/5 rounded-lg transition-all text-lg font-medium">
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </DroneBackground>
    )
}
