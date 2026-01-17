"use client"

import HeroContent from "@/components/hero-content"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"

export default function Airship() {
  return (
    <ShaderBackground>
      {/* <Header /> */}
      <HeroContent />
      <PulsingCircle />
    </ShaderBackground>
  )
}
