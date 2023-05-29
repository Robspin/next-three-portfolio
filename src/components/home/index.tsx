"use client"
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import Titles from "@/components/titles"
import LocaleSwitcher from "@/components/locale-switcher"
import ThemeSwitch from "@/components/theme-switch"
import Mac from "@/components/canvas/Mac"

export default function index() {
    const [dark, setDark] = useState(false)
    // const { progress } = useProgress()
    const t = useTranslations('Landing')

    return (
        <div className={`${dark && 'bg-black text-white'} h-screen w-screen relative overflow-hidden`}>
            <div className='absolute w-full h-full'>
                <Mac />
            </div>
            <div className="flex flex-col p-4 absolute w-full h-full pointer-events-none">
                <div className="flex w-full justify-end pointer-events-auto">
                    <div className="flex text-sm">
                        <LocaleSwitcher />
                        <span className="mx-2"></span>
                        <ThemeSwitch handler={() => setDark(!dark)} dark={dark} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mt-[100px]">
                        <div className="text-[4vw] font-bold">Robin Steeman</div>
                        <div className="mt-[1vw] text-[4vw] font-extrabold"><Titles /></div>
                    </div>
                </div>
                {/*<ul className="mt-auto font-bold text-3xl pointer-events-auto">*/}
                {/*    <li className="transition hover:translate-x-1"><Link href="/about-me">{t('links.aboutMe')}</Link></li>*/}
                {/*    <li className="transition hover:translate-x-1"><Link href="/my-work">{t('links.myWork')}</Link></li>*/}
                {/*    <li className="transition hover:translate-x-1"><Link href="https://blog.robinsteeman.com/" target="_blank">{t('links.blog')}</Link></li>*/}
                {/*</ul>*/}
            </div>
        </div>
    )
}
