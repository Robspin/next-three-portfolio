'use client'

import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import randomWord from 'random-words'
import dynamic from "next/dynamic"
import { Loader } from "@/components/canvas/Loader"


const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false
})

const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

function Word({ children, ...props }) {
    const color = new THREE.Color()
    const fontProps = { font: '/Inter-Bold.woff', fontSize: 2.5, letterSpacing: -0.05, lineHeight: 1, 'material-toneMapped': false }
    const ref = useRef()
    const [hovered, setHovered] = useState(false)
    const over = (e) => (e.stopPropagation(), setHovered(true))
    const out = () => setHovered(false)
    // Change the mouse cursor on hover
    useEffect(() => {
        if (hovered) document.body.style.cursor = 'pointer'
        return () => (document.body.style.cursor = 'auto')
    }, [hovered])
    // Tie component to the render-loop
    useFrame(({ camera }) => {
        // Make text face the camera
        ref.current.quaternion.copy(camera.quaternion)
        // Animate font color
        ref.current.material.color.lerp(color.set(hovered ? '#fa2720' : 'white'), 0.1)
    })
    return <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...props} {...fontProps} children={children} />
}

function Cloud({ count = 4, radius = 20 }) {
    // Create a count x count random words with spherical distribution
    const words = useMemo(() => {
        const temp = []
        const spherical = new THREE.Spherical()
        const phiSpan = Math.PI / (count + 1)
        const thetaSpan = (Math.PI * 2) / count
        for (let i = 1; i < count + 1; i++)
            for (let j = 0; j < count; j++) temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), randomWord()])
        return temp
    }, [count, radius])
    return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />)
}

export default function App() {
    return (
        <View className='absolute top-0 flex h-screen w-full flex-col items-center justify-center bg-black text-white'>
            <Loader />
            <fog attach="fog" args={['#202025', 0, 80]} />
            <directionalLight intensity={0.5} />
            {/*<Suspense fallback={<Loader />}>*/}
            {/*    <Cloud count={8} radius={20} />*/}
            {/*    <TrackballControls />*/}
            {/*    <Common dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }} />*/}
            {/*</Suspense>*/}
            <Common />
        </View>
    )
}


// import dynamic from 'next/dynamic'
// import { Text, Html, ContactShadows, Environment, Float, PresentationControls, useGLTF, Image } from '@react-three/drei'
// import { useState } from "react"
//
// const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
//     ssr: false,
//     loading: () => (
//         <div className='flex h-96 w-full flex-col items-center justify-center'>
//             <svg className='-ml-1 mr-3 h-5 w-5 animate-spin text-black' fill='none' viewBox='0 0 24 24'>
//                 <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
//                 <path
//                     className='opacity-75'
//                     fill='currentColor'
//                     d='M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
//                 />
//             </svg>
//         </div>
//     ),
// })
//
// const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })
//
// export default function Page() {
//     const [clicked, setClicked] = useState(true)
//
//     return (
//         <>
//             <div className='mx-auto flex w-full flex-col flex-wrap items-center md:flex-row  lg:w-4/5'>
//                 <div className='flex w-full flex-col items-start justify-center p-12 text-center md:w-2/5 md:text-left'>
//                     <p className='w-full uppercase'>ABOUT ME</p>
//                     <h1 className='my-4 text-5xl font-bold leading-tight'>Robin Steeman</h1>
//                     <p className='mb-8 text-2xl leading-normal'>"Failing upwards", that is kinda how my life feels</p>
//                 </div>
//             </div>
//
//             <View className='absolute top-0 flex h-screen w-full flex-col items-center justify-center' orbit>
//                 <Common />
//             </View>
//         </>
//     )
// }
