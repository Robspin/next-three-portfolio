"use client"
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Titles from "@/components/titles"
import LocaleSwitch from "@/components/locale-switch"
import ThemeSwitch from "@/components/theme-switch"
import Mac from "@/components/canvas/Mac"

export default function index({ scrollProgress }: { scrollProgress: number }) {
    // const { progress } = useProgress()
    const t = useTranslations('Landing')

    return (
        <div className="h-screen w-screen relative overflow-hidden">
            <div className='absolute w-full h-full'>
                <Mac scrollProgress={scrollProgress} />
            </div>
            <div className="flex flex-col p-4 absolute w-full h-full pointer-events-none">
                <div className="flex flex-col">
                    <div className="mt-[100px]">
                        <div className="text-[4vw] font-bold">Robin Steeman</div>
                        <div className="mt-[1vw] text-[4vw] font-extrabold"><Titles /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
