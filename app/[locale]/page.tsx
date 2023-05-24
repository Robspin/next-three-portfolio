"use client"
import { useState } from 'react'
import Titles from "@/components/titles"
import { useTranslations } from 'next-intl'
import LocaleSwitcher from "@/components/locale-switcher"
import ThemeSwitch from "@/components/theme-switch"
import Mac from "@/components/canvas/Mac"

export default function App() {
    const [dark, setDark] = useState(false)
    // const { progress } = useProgress()
    const t = useTranslations('Landing')

    return (
        <div className={`${dark && 'bg-black text-white'} h-screen w-screen relative overflow-hidden`}>
            <div className='absolute w-full h-full'>
                <Mac />
            </div>
            <div className="flex flex-col p-4 absolute w-full h-full pointer-events-none">
                <div className="flex w-full justify-end pointer-events-auto bg-green-100">
                    <div className="flex text-sm">
                        <LocaleSwitcher />
                        <span className="mx-2"></span>
                        <ThemeSwitch handler={() => setDark(!dark)} />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="mt-[100px]">
                        <div className="text-[6vw] font-extrabold">ROBIN STEEMAN</div>
                        <div className="mt-[2vw] text-[6vw] font-extrabold"><Titles /></div>
                    </div>
                </div>
                <ul className="mt-auto font-bold text-xl pointer-events-auto">
                    <li className="transition hover:translate-x-1"><button>ABOUT ME</button></li>
                    <li className="transition hover:translate-x-1"><button>MY WORK</button></li>
                    <li className="transition hover:translate-x-1"><button>BLOG</button></li>
                </ul>
            </div>
        </div>
    )
}
