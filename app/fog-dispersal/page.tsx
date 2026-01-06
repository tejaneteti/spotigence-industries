"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check, X, TrendingUp, Cloud, Sun, Plane, ShieldCheck, Activity } from "lucide-react"
import ShaderBackground from "@/components/shader-background"

export default function FogDispersalPage() {
    return (
        <ShaderBackground>
            <div className="min-h-screen text-white font-sans selection:bg-blue-500/30 relative z-10">
                {/* Hero Section */}
                <section className="relative pt-32 pb-20 px-6 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
                    <div className="absolute top-0 inset-x-0 h-96 bg-blue-500/10 blur-[120px] rounded-[50%] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm text-blue-200 mb-6 backdrop-blur-sm">
                            Operational Efficiency Impact
                        </span>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                            The Multi-Billion Euro Cost of <span className="text-blue-400">Fog Disruption</span>
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Fog costs the aviation industry <span className="text-blue-300 font-medium">€13B annually</span> in operational losses. We're building the first scalable solution to reclaim visibility.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#problem"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                            >
                                Request Analysis <ArrowRight className="ml-2 w-4 h-4" />
                            </a>
                            <a
                                href="#metrics"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-all"
                            >
                                See the Data
                            </a>
                        </div>
                    </motion.div>
                </section>

                {/* Global Impact Metrics */}
                <section id="metrics" className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <MetricCard
                            value="13B"
                            label="Annual Industry Loss (€)"
                            sub="Direct operational costs due to fog"
                            color="var(--chart-1)"
                            delay={0.1}
                        />
                        <MetricCard
                            value="620M"
                            label="Passengers Affected"
                            sub="Delayed or cancelled flights annually"
                            color="var(--chart-2)"
                            delay={0.2}
                        />
                        <MetricCard
                            value="12M"
                            label="Tonnes CO₂ Impact"
                            sub="Additional fuel burn from holding patterns"
                            color="var(--chart-3)"
                            delay={0.3}
                        />
                        <MetricCard
                            value="19%"
                            label="Forecast Accuracy"
                            sub="Current industry standard success rate"
                            color="var(--chart-4)"
                            delay={0.4}
                        />
                    </div>
                </section>

                {/* Problem Section */}
                <section id="problem" className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Challenge */}
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8">
                                <span className="text-red-400">The Challenge:</span><br />
                                Traditional Forecasting Fails
                            </h2>
                            <ul className="space-y-6">
                                {[
                                    "Reactive rather than proactive",
                                    "Limited by ground-based sensors",
                                    "High error rate in micro-climate prediction",
                                    "Cascading network delays"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/80">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-red-500" />
                                        </div>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Gap */}
                        <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-xl font-semibold mb-4 text-white">The Technology Gap</h3>
                            <p className="text-white/60 leading-relaxed mb-6">
                                Current airport infrastructure relies on 20th-century meteorological models that cannot account for hyper-local fog formation in real-time. This leaves traffic control with only one option: ground stops.
                            </p>
                            <div className="flex gap-4 items-center text-sm text-white/40">
                                <div className="h-px flex-1 bg-white/10" />
                                <span>Efficiency Loss: 42%</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section id="solution" className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
                    <div className="rounded-3xl border border-white/10 overflow-hidden bg-white/5">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* Before */}
                            <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-white/10 bg-black/40">
                                <div className="flex items-center gap-4 mb-6 opacity-60">
                                    <Cloud className="w-8 h-8" />
                                    <h3 className="text-2xl font-semibold">Traditional Approach</h3>
                                </div>
                                <ul className="space-y-4">
                                    {[
                                        "Wait for natural dissipation",
                                        "Divert flights to other hubs",
                                        "Cancel low-priority routes",
                                        "Passenger compensation payouts"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white/50">
                                            <X className="w-5 h-5 text-red-500/50" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* After */}
                            <div className="p-10 md:p-14 bg-blue-900/10 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-32 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6 text-blue-300">
                                        <Sun className="w-8 h-8" />
                                        <h3 className="text-2xl font-semibold">Fog-Casting Solution</h3>
                                    </div>
                                    <ul className="space-y-4">
                                        {[
                                            "Hyper-local clearing windows",
                                            "Maintain scheduled slots",
                                            "Reduce holding pattern fuel burn",
                                            "Proactive capacity management"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-white">
                                                <Check className="w-5 h-5 text-blue-400" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Airport ROI Section */}
                <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Projected Impact</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Regional Airport */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[50px] group-hover:bg-cyan-500/20 transition-colors" />
                            <h3 className="text-xl font-semibold mb-2 text-cyan-200">Regional Airport</h3>
                            <p className="text-sm text-white/50 mb-8">Base Case: &lt;5M passengers/year</p>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-white/60 mb-1">Recovered Revenue</div>
                                    <div className="text-3xl font-mono font-bold text-cyan-400">€2.4M</div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                        <div className="h-full w-[70%] bg-cyan-500 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-white/60 mb-1">CO₂ Reduction</div>
                                    <div className="text-3xl font-mono font-bold text-white">1,200t</div>
                                </div>
                            </div>
                        </div>

                        {/* Medium Airport */}
                        <div className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[50px] group-hover:bg-blue-500/20 transition-colors" />
                            <h3 className="text-xl font-semibold mb-2 text-blue-200">Medium Hub</h3>
                            <p className="text-sm text-white/50 mb-8">Base Case: 15M-30M passengers/year</p>

                            <div className="space-y-6">
                                <div>
                                    <div className="text-sm text-white/60 mb-1">Recovered Revenue</div>
                                    <div className="text-3xl font-mono font-bold text-blue-400">€18.5M</div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full mt-2">
                                        <div className="h-full w-[85%] bg-blue-500 rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-sm text-white/60 mb-1">CO₂ Reduction</div>
                                    <div className="text-3xl font-mono font-bold text-white">8,500t</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner Benefits Section */}
                <section className="py-20 px-6 md:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <BenefitCard
                            icon={<TrendingUp />}
                            title="Revenue recovery"
                            description="Minimize losses from ground stops and cancellations."
                        />
                        <BenefitCard
                            icon={<ShieldCheck />}
                            title="Safety Compliance"
                            description="Meet safety regulations with higher precision data."
                        />
                        <BenefitCard
                            icon={<Plane />}
                            title="Operational Uptime"
                            description="Keep runways active during low-visibility conditions."
                        />
                        <BenefitCard
                            icon={<Activity />}
                            title="Real-time Analytics"
                            description="Live dashboard of fog density and clearing times."
                        />
                        <BenefitCard
                            icon={<Sun />}
                            title="Carbon Credits"
                            description="Reduction in fuel burn converts to carbon credits."
                        />
                        <BenefitCard
                            icon={<Cloud />}
                            title="All-weather Reliability"
                            description="Consistent schedule adherence regardless of fog."
                        />
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 md:px-8 max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to clear the air?</h2>
                    <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
                        Get a custom analysis of your airport's potential savings and operational improvements with our Fog-Casting solution.
                    </p>
                    <a
                        href="mailto:info@spotigenceindustries.com"
                        className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                    >
                        Request Custom Analysis
                    </a>
                </section>
            </div>
        </ShaderBackground>
    )
}

function MetricCard({ value, label, sub, color, delay }: { value: string; label: string; sub: string; color: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="relative p-6 md:p-8 rounded-2xl border border-white/20 overflow-hidden group hover:border-white/20 transition-colors"
            style={{
                background: `linear-gradient(145deg, ${color}10, transparent)`
            }}
        >
            <div className="absolute inset-0 bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-mono font-bold mb-2 tracking-tight" style={{ color: color }}>
                    {value}
                </div>
                <div className="text-lg font-medium text-white mb-1">
                    {label}
                </div>
                <div className="text-sm text-white/50">
                    {sub}
                </div>
            </div>
        </motion.div>
    )
}

function BenefitCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <div className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
            <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        </div>
    )
}
