import dynamic from "next/dynamic"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Icosahedron, Text, useProgress } from "@react-three/drei"

// todo change with other low size models

const Heart = dynamic(() => import('@/components/canvas/Heart').then((mod) => mod.Heart), { ssr: false })

const WireReactLogo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.WireReactLogo), { ssr: false })

export const Loader = () => {
    const icosahedron = useRef()
    const heart = useRef()
    const groupRef = useRef()
    const { progress } = useProgress()

    useFrame(({ clock }) => {
        icosahedron.current.rotation.y += 0.02
        icosahedron.current.rotation.x += 0.02
        icosahedron.current.rotation.z += 0.02
        groupRef.current.position.y += (0.005 * Math.sin(clock.getElapsedTime()))
        heart.current.rotation.y += 0.02
    })

    return (
        <>
                <group ref={groupRef}>
                    <Icosahedron ref={icosahedron} args={[2, 4]} scale={[0.2, 0.2, 0.2]} position={[-2, 0.35, 0]} >
                        <meshStandardMaterial wireframe attach="material" color="white" metallic={1} />
                    </Icosahedron>
                    <group ref={heart}>
                        <Heart scale={[0.01, 0.01, 0.01]} />
                    </group>
                    <WireReactLogo scale={[0.13, 0.13, 0.13]} position={[2, 0.35, 0]} />
                </group>
                <Text scale={[0.5,0.5,0.5]} position={[0,-1,0]}>
                    {progress} %
                </Text>
        </>
    )
}
