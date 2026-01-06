"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function PulsingCircle() {
    return (
        <div className="absolute bottom-8 right-8 z-30">
            {/* Container for logo + animated border */}
            <div className="relative w-20 h-20 flex items-center justify-center">

                {/* Pulsing border around the logo */}
                <PulsingBorder
                    colors={[
                        "#BEECFF",
                        "#E77EDC",
                        "#FF4C3E",
                        "#00FF88",
                        "#FFD700",
                        "#FF6B35",
                        "#8A2BE2",
                    ]}
                    colorBack="#00000000"
                    speed={1.5}
                    roundness={1}
                    thickness={0.15}
                    softness={0.2}
                    intensity={5}
                    // spotsPerColor={5}
                    spotSize={0.1}
                    pulse={0.15}
                    smoke={0.5}
                    smokeSize={4}
                    scale={0.95}
                    rotation={0}
                    style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        width: "100%",
                        height: "100%",
                    }}
                />

                {/* Center logo */}
                <motion.img
                    src="favicon-32x32.png"
                    width={50}
                    height={50}
                    className="rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 200 }}
                />
            </div>
        </div>
    )
}
