// logo.tsx
"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, useGLTF } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

function Logo() {
  const { scene } = useGLTF("/cirrus.glb")
  const logoRef = useRef<THREE.Object3D>(null!)

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(t * 0.5) * (5 * Math.PI / 180)
      logoRef.current.rotation.x = Math.sin(t * 0.3) * (2 * Math.PI / 180)
    }
  })

  return <primitive ref={logoRef} object={scene} scale={2} />
}

export default function LogoModel() {
   const breakpoint = useBreakpoint()

  const fov = breakpoint === "lg" ? 30 : 50 // lg:30, md/sm:50

  return (
    <div className="relative w-full aspect-square md:aspect-video">
      <Canvas camera={{ position: [5, 0, 0], fov: fov }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Logo />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

function useBreakpoint() {
  const [width, setWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  if (width >= 1024) return "lg"   // Tailwind lg breakpoint
  if (width >= 768) return "md"    // Tailwind md breakpoint
  return "sm"
}
 