import { LucideIcon } from "lucide-react"

interface FeatureCardProps {
    icon: LucideIcon
    title: string
    description: string
    delay?: number
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
    return (
        <div
            className="group relative p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-white/10 overflow-hidden hover:border-[#00e5ff]/50 transition-colors duration-500"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-[#00e5ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#00e5ff]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-6 h-6 text-[#00e5ff]" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00e5ff] transition-colors duration-300">
                    {title}
                </h3>

                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {description}
                </p>
            </div>
        </div>
    )
}
