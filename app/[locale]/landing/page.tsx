"use client";
import { useEffect, useState } from 'react'
import dynamic from "next/dynamic"
import { useProgress } from "@react-three/drei"
import Titles from "@/components/titles"
import { useTranslations } from 'next-intl'
import LocaleSwitcher from "@/components/locale-switcher"

const Mac = dynamic(() => import('@/components/canvas/Examples').then((mod) => mod.Mac), { ssr: false })
const View = dynamic(() => import('@/components/canvas/View').then((mod) => mod.View), {
    ssr: false
})
const Common = dynamic(() => import('@/components/canvas/View').then((mod) => mod.Common), { ssr: false })

export default function App() {
    const [dark, setDark] = useState(false)
    const { progress } = useProgress()
    const t = useTranslations('Landing')

    useEffect(() => {
        console.log(progress)
    }, [progress])

    return (
        <div className={`h-full flex flex-col p-4 ${dark && 'bg-black text-white'} relative`}>
            <div className="flex">
                <button onClick={() => setDark(!dark)}>darkmode</button>
                <div className="ml-auto flex text-sm">
                    {/*<button className="cursor-pointer transition-color hover:text-violet-500">EN</button>*/}
                    {/*<span className="mx-2"> | </span>*/}
                    <button className="cursor-pointer transition-color hover:text-violet-500">日本語</button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row">
                <div className="mt-[200px]">
                    <div className="text-[7vw] font-extrabold">ROBIN STEEMAN</div>
                    <div className="text-[7vw] font-extrabold mt-8"><Titles /></div>
                    <div className="mt-8">{t('test')}</div>
                    <LocaleSwitcher />
                </div>
                {/*<div className='sm:mt-[140px] h-48 sm:h-full w-full sm:w-1/2 md:mb-40 relative'>*/}
                {/*    <View orbit className='relative h-full sm:w-full'>*/}
                {/*        <Mac scale={1} position={[0, -1.6, 0]} rotation={[0.0, -0.3, 0]} />*/}
                {/*        <Common color={dark ? 'black' : 'white'} />*/}
                {/*    </View>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
