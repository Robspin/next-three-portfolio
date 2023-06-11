"use client"
import {useEffect, useRef, useState} from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Home from "@/components/home"
import Introduction from "@/components/about-me/introduction"
import Technologies from "@/components/about-me/technologies"
import MyWork from "@/components/my-work"
import Contact from "@/components/contact"
import LocaleSwitch from "@/components/locale-switch"
import ThemeSwitch from "@/components/theme-switch"
import MusicBars from "@/components/music-bars"

export default function ScrollDemo() {
    const [scrollProgress, setScrollProgress] = useState(0)
    const [focusedSection, setFocusedSection] = useState(0)
    const [finishedIntroductionEntry, setFinishedIntroductionEntry] = useState(false)
    const mainContainer = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const sections = gsap.utils.toArray(".container section") as HTMLElement[]
        const scrollProgress = document.querySelector(".scroll-progress")

        const ctx = gsap.context(() => {
            const scrollTween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 1,
                    end: "+=3000",
                    snap: 1 / (sections.length - 1),
                    // markers: true,
                }
            });

            gsap.to(scrollProgress, {
                width: "100%",
                ease: "none",
                scrollTrigger: {
                    trigger: ".wrapper",
                    start: "top left",
                    scrub: 1,
                    onUpdate: (self) => setScrollProgress(self.progress)
                }
            });

            // whizz around the sections
            sections.forEach((section, i) => {
                // grab the scoped text
                const text = section.querySelectorAll(".anim")

                // bump out if there's no items to animate
                // if(text.length === 0)  return

                ScrollTrigger.create({
                    trigger: section,
                    containerAnimation: scrollTween,
                    start: 'top 80%',
                    onEnter: () => {
                        console.log('entered: ', i)
                        setFocusedSection(i)
                        if (i === 1 && !finishedIntroductionEntry) setFinishedIntroductionEntry(true)
                        // gsap.to(mainContainer.current, {
                        //     backgroundColor: bgColors[i],
                        // })
                    },
                    onLeaveBack: () => {
                        // gsap.to(mainContainer.current, {
                        //     backgroundColor: bgColors[i - 1],
                        // })
                        console.log('left: ', i)
                    }
                })

                // do a little stagger
                gsap.from(text, {
                    y: -130,
                    opacity: 0,
                    duration: 2,
                    ease: "elastic",
                    stagger: 0.1,
                    delay: 1,
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: scrollTween,
                        start: "left center",
                        // markers: true
                    },
                });
            });
        })

        return () => ctx.revert()
    }, [])

    return (
        <div>
            <div ref={mainContainer} className="overflow-x-hidden relative dark:bg-gray-800 dark:text-white text-black">
                <div className="container flex w-[600vw] scrollx">
                    <section className="sec1 pin">
                        <Home scrollProgress={scrollProgress} />
                    </section>
                    <section className="sec2 pin dark:bg-gray-700">
                        <Introduction finishedIntroductionEntry={finishedIntroductionEntry} />
                    </section>
                    <section className="sec2 pin">
                        <Technologies />
                    </section>
                    <section className="sec3 pin dark:bg-gray-700">
                        <MyWork />
                    </section>
                    <section className="sec4 pin">
                        <Contact />
                    </section>
                </div>
                <header className="w-screen fixed top-4">
                    <div className="flex mx-4 justify-between items-center pointer-events-auto">
                        <div className="-mt-2 w-10 h-8">
                            <MusicBars />
                        </div>
                        <div className="flex text-sm">
                            <LocaleSwitch />
                            <span className="mx-2"></span>
                            <ThemeSwitch />
                        </div>
                    </div>
                </header>
                <footer className="fixed bottom-2 w-screen">
                    <div className="mx-4 flex h-[2px] bg-secondary dark:bg-gray-700 relative">
                        <div className="w-0 h-[2px] bg-red-500 absolute transition scroll-progress"></div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
