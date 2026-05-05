"use client"

import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import { Suspense, useRef } from "react"
import * as THREE from "three"

import { glassHeroPanels } from "@/lib/home-hero"
import { cn } from "@/lib/utils"

const PANEL_DATA = glassHeroPanels.slice(0, 6)

const LAYOUT: readonly {
  position: [number, number, number]
  rotation: [number, number, number]
  phase: number
}[] = [
  { position: [-1.42, 0.82, 0.12], rotation: [0.1, 0.28, 0.06], phase: 0 },
  { position: [-0.05, 1.02, -0.08], rotation: [-0.05, -0.12, 0.04], phase: 0.9 },
  { position: [1.38, 0.78, 0.08], rotation: [0.06, -0.22, -0.05], phase: 1.7 },
  { position: [-1.22, -0.32, 0.18], rotation: [-0.08, 0.18, -0.04], phase: 2.4 },
  { position: [0.28, -0.48, -0.06], rotation: [0.04, 0.08, 0.12], phase: 3.1 },
  { position: [1.32, -0.38, 0.12], rotation: [-0.06, -0.3, 0.05], phase: 3.8 },
]

const GLASS_MAT = {
  color: "#9ec0f0",
  metalness: 0.06,
  roughness: 0.14,
  transmission: 0.78,
  thickness: 0.42,
  ior: 1.45,
  transparent: true,
  opacity: 1,
  side: THREE.DoubleSide,
  clearcoat: 0.38,
  clearcoatRoughness: 0.35,
  envMapIntensity: 0,
  attenuationDistance: 0.85,
  attenuationColor: "#0a1020",
} as const

function GlassPanel({
  label,
  position,
  rotation,
  phase,
}: {
  label: string
  position: [number, number, number]
  rotation: [number, number, number]
  phase: number
}) {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const g = group.current
    if (!g) return
    g.position.y = position[1] + Math.sin(t * 0.85 + phase) * 0.07
    g.position.x = position[0] + Math.sin(t * 0.35 + phase * 0.5) * 0.02
  })

  return (
    <group ref={group} position={position} rotation={rotation}>
      <mesh castShadow={false} receiveShadow={false}>
        <boxGeometry args={[1.35, 0.58, 0.055]} />
        <meshPhysicalMaterial {...GLASS_MAT} />
      </mesh>
      <Html
        transform
        position={[0, 0, 0.04]}
        distanceFactor={5.2}
        center
        occlude={false}
        style={{ pointerEvents: "none" }}
      >
        <div className="whitespace-nowrap rounded border border-white/15 bg-black/45 px-1.5 py-0.5 font-mono text-[9px] leading-tight text-white/90 shadow-sm backdrop-blur-sm">
          {label}
        </div>
      </Html>
    </group>
  )
}

function CameraRig() {
  const { camera, pointer } = useThree()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const targetX = pointer.x * 0.52
    const targetY = pointer.y * 0.34 + 0.22
    const targetZ = 6.35 + Math.sin(t * 0.19) * 0.15
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.055)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.055)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.045)
    camera.lookAt(0, 0.02, 0)
  })

  return null
}

function SceneGroup() {
  const root = useRef<THREE.Group>(null)
  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (root.current) root.current.rotation.y = Math.sin(t * 0.14) * 0.11
  })

  return (
    <group ref={root}>
      {PANEL_DATA.map((p, i) => (
        <GlassPanel
          key={p.id}
          label={p.label}
          position={LAYOUT[i]!.position}
          rotation={LAYOUT[i]!.rotation}
          phase={LAYOUT[i]!.phase}
        />
      ))}
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.18} />
      <directionalLight position={[4.2, 5.5, 7.5]} intensity={0.52} color="#d4e6ff" />
      <fog attach="fog" args={["#050712", 5.5, 13]} />
      <SceneGroup />
      <CameraRig />
    </>
  )
}

export type R3FGlassHeroSceneProps = {
  className?: string
}

export default function R3FGlassHeroScene({ className }: R3FGlassHeroSceneProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-5/4 max-h-[min(440px,52vh)] w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/6 bg-[oklch(0.055_0.018_264)] shadow-glass",
        className
      )}
      role="img"
      aria-label="3D-иллюстрация стеклянных панелей со стеком технологий"
    >
      <Canvas
        className="h-full! min-h-[min(360px,52vh)]! w-full"
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
        }}
        dpr={[1, 1.25]}
        camera={{ fov: 38, near: 0.1, far: 24, position: [0, 0.22, 6.35] }}
        frameloop="always"
        performance={{ min: 0.5 }}
      >
        <color attach="background" args={["#050712"]} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}
