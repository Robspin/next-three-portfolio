import dynamic from "next/dynamic"
import { useContext, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Icosahedron, useProgress, Sky, OrbitControls, Stars } from "@react-three/drei"
import { ThemeContext } from "@/utils/theme/theme-provider"

// todo change with other low size models

const Heart = dynamic(() => import('@/components/canvas/Heart').then((mod) => mod.Heart), { ssr: false })

const WireReactLogo = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.WireReactLogo), { ssr: false })

export default function ModelsScene() {
    const { darkMode } = useContext(ThemeContext)

    return (
        <Canvas>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <pointLight position={[20, 30, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color='blue' />
            <Models />
            {darkMode ? <Stars radius={100} depth={5} count={5000} factor={4} saturation={0} fade speed={1} /> :
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
            }
        </Canvas>
    )
}

const Models = () => {
    const icosahedron = useRef()
    const heart = useRef()
    const groupRef = useRef()
    const { progress } = useProgress()

    useFrame(({ clock }) => {
        icosahedron.current.rotation.y += 0.02
        icosahedron.current.rotation.x += 0.02
        icosahedron.current.rotation.z += 0.02
        groupRef.current.position.y += (0.01 * Math.sin(clock.getElapsedTime()))
        heart.current.rotation.y += 0.02
    })

    return (
            <group ref={groupRef}>
                <Icosahedron ref={icosahedron} args={[2, 4]} scale={[0.4, 0.4, 0.4]} position={[-4, -0.5, 0]} >
                    <meshStandardMaterial wireframe attach="material" color="#62dafb" metallic={1} />
                </Icosahedron>
                <group ref={heart}>
                    <Heart scale={[0.025, 0.025, 0.025]} position={[0, -1.4, 0]} />
                </group>
                <WireReactLogo scale={[0.40, 0.40, 0.40]} position={[4, -0.5, 0]} />
            </group>
    )
}
