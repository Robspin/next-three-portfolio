'use client'

import { forwardRef, useEffect, useState } from 'react'
// import * as THREE from "three"
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, useTexture, useHelper } from '@react-three/drei'
import gsap from 'gsap'
import useRefs from 'react-use-refs'


export default function MacScene() {
    return (
        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, -3.2, 40], fov: 12 }} linear>
            <Composition />
        </Canvas>
    )
}

function Composition({ ...props }) {
    const { width, height } = useThree((state) => state.viewport)
    const [group, mbp16, keyLight, stripLight, fillLight] = useRefs()
    const [vscode1, vscode2] = useTexture(['/vscode1.png', '/vscode2.png'])
    const [currentTexture, setCurrentTexture] = useState(vscode1)
    const [macOpened, setMacOpened] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTexture((prev) => prev === vscode1 ? vscode2 : vscode1)
        }, 500)

        return () => clearInterval(interval)
    }, [])

    const openMac = (delay = 0) => {
        if (!mbp16.current) return
        mbp16.current.rotation.x = Math.PI
        gsap.to(mbp16.current.rotation, {
            x: 1.36,
            ease: "ease-in",
            duration: 2,
            delay: delay,
            onComplete: () => setMacOpened(true)
        })
    }

    const closeMac = () => {
        if (!mbp16.current) return
        gsap.to(mbp16.current.rotation, {
            x: Math.PI,
            ease: "ease-in",
            duration: 2,
            onComplete: () => setMacOpened(false)
        })
    }

    useEffect(() => {
        openMac(2)
        stripLight.current.target = mbp16.current
    }, [mbp16])
    // useHelper(stripLight, THREE.SpotlightHelper, 0.5, "teal")
    // useHelper(keyLight, THREE.DirectionalLightHelper, 0.5, "red")

    const toggleMac = () => macOpened ? closeMac() : openMac()

    useEffect(() => {
        console.log(width)
    }, [width])

    return (
        <>
            <spotLight position={[0, -width * 0.7, 0]} intensity={0.5} />
            <directionalLight ref={keyLight} castShadow intensity={2}>
                <orthographicCamera attachObject={['shadow', 'camera']} args={[-10, 10, 10, -10, 0.5, 30]} />
            </directionalLight>
            <group ref={group} position={[0, -height / 2.65, 0]} {...props}>
                <spotLight ref={stripLight} position={[width * 3, 0, width]} angle={0.19} penumbra={1} intensity={6} />
                {/*<spotLight ref={fillLight} position={[0, -width / 2.4, -width * 2.2]} angle={0.2} penumbra={1} intensity={2} distance={width * 3} />*/}
                <Mac onClick={toggleMac} className="cursor-pointer" ref={mbp16} texture={currentTexture} scale={width / 80} position={[width / 10, 1, 0]} rotation={[0.1, -0.1, 0]} />
            </group>
        </>
    )
}

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: akshatmittal (https://sketchfab.com/akshatmittal)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/2021-macbook-pro-14-m1-pro-m1-max-f6b0b940fb6a4286b18a674ef32af2d3
title: 2021 Macbook Pro 14" (M1 Pro / M1 Max)
*/
// @ts-ignore
const Mac = forwardRef(({ texture, ...props }: any, ref) => {
    const { nodes, materials } = useGLTF('/mbp-v1-pipe.glb')

    return (
        <group {...props} dispose={null}>
            <group ref={ref} position={[0, -0.43, -11.35]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.back_1.geometry} material={materials.blackmatte} />
                <mesh receiveShadow castShadow geometry={nodes.back_2.geometry} material={materials.aluminium} />
                <mesh geometry={nodes.matte.geometry} >
                    <meshLambertMaterial map={texture} toneMapped={false} />
                </mesh>
            </group>
            <mesh geometry={nodes.body_1.geometry} material={materials.aluminium} material-color="#aaaaaf" material-envMapIntensity={0.2} />
            <mesh geometry={nodes.body_2.geometry} material={materials.blackmatte} />
        </group>
    )
})
