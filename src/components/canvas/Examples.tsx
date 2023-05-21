'use client'

import {Icosahedron, useGLTF} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useMemo, useRef, useState } from 'react'
import { Line, useCursor, MeshDistortMaterial } from '@react-three/drei'
import { useRouter } from 'next/navigation'

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  )
}

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef(null)
  const router = useRouter()

  const [hovered, hover] = useState(false)
  const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

  useCursor(hovered)
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
    mesh.current.rotation.z -= delta / 4
  })

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, 1]} />
      {/* @ts-ignore */}
      <Line worldUnits points={points} color='#1fb2f5' lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh onClick={() => router.push(route)} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial wireframe={true} roughness={0} color={'white'} />
      </mesh>
    </group>
  )
}

export const WireReactLogo = (props) => {
    const mesh = useRef(null)

    const points = useMemo(() => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100), [])

    useFrame((state, delta) => {
        const t = state.clock.getElapsedTime()
        mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8)
        mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8)
        mesh.current.rotation.z -= delta / 4
    })

    return (
        <group ref={mesh} {...props}>
            <Line worldUnits points={points} color='#fff' wireframe={true} lineWidth={0.03} />
            <Line worldUnits points={points} color='#fff' wireframe={true} lineWidth={0.03} rotation={[0, 0, 1]} />
            <Line worldUnits points={points} color='#fff' wireframe={true} lineWidth={0.03} rotation={[0, 0, -1]} />
            <Icosahedron args={[1, 1]} scale={[0.2, 0.2, 0.2]}>
                <meshStandardMaterial wireframe attach="material" color="white" metallic={1} />
            </Icosahedron>
        </group>
    )
}

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb')

  useFrame((state, delta) => (scene.rotation.y += delta))

  return <primitive object={scene} {...props} />
}
export function Dog(props) {
  const { scene } = useGLTF('/dog.glb')

  return <primitive object={scene} {...props} />
}
export function Heart(props) {
  const { scene } = useGLTF('/heart.glb')
    console.log(scene)
    useFrame(({ clock }) => {
        scene.rotation.y += 0.02
    });

  return <primitive object={scene} {...props} />
}

export function Display(props) {
  const { scene } = useGLTF('/sci-fi-display.glb')

  return <primitive object={scene} {...props} />
}

export function Mac(props) {
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    useFrame((state, delta) => (scene.rotation.y += (delta * 0.3)))

    return <primitive object={scene} {...props} />
}

