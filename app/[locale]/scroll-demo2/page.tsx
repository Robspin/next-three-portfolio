"use client"
import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Home from "@/components/home"
import Hello from "@/components/about-me/hello"
import ICreate from "@/components/about-me/i-create"
import Technologies from "@/components/about-me/technologies"
import MyWork from "@/components/my-work"
import Contact from "@/components/contact"
import LocaleSwitcher from "@/components/locale-switcher"
import ThemeSwitch from "@/components/theme-switch"

export default function ScrollDemo() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        const container = document.querySelector(".container");
        const sections = gsap.utils.toArray(".container section");
        const texts = gsap.utils.toArray(".anim");
        // const mask = document.querySelector(".mask");
        const scrollProgress = document.querySelector(".scroll-progress");

        const ctx = gsap.context(() => {
            let scrollTween = gsap.to(sections, {
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
                    scrub: 1
                }
            });

            // whizz around the sections
            sections.forEach((section) => {
                // grab the scoped text
                let text = section.querySelectorAll(".anim");

                // bump out if there's no items to animate
                if(text.length === 0)  return

                // do a little stagger
                gsap.from(text, {
                    y: -130,
                    opacity: 0,
                    duration: 2,
                    ease: "elastic",
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: scrollTween,
                        start: "left center",
                        // markers: true
                    }
                });
            });
        })

        return () => ctx.revert()
    }, [])

    return (
        <div>
            <div className="overflow-x-hidden relative">
                <div className="container flex w-[600vw] scrollx">
                    {/*<svg className="absolute top-[12em] left-[10vw] w-[50vw]" viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                    {/*    <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />*/}
                    {/*    <mask id="mask0_0_1" className="w-0" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x={0} y={0} width={900} height={10}>*/}
                    {/*        <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9" />*/}
                    {/*    </mask>*/}
                    {/*    <g mask="url(#mask0_0_1)">*/}
                    {/*        <rect className="mask" y={-49} height={99} fill="black" />*/}
                    {/*    </g>*/}
                    {/*</svg>*/}
                    <section className="sec1 pin">
                        <Home />
                    </section>
                    <section className="sec2 pin bg-secondary">
                        <Hello />
                    </section>
                    <section className="sec2 pin">
                        <ICreate />
                    </section>
                    <section className="sec2 pin bg-secondary">
                        <Technologies />
                    </section>
                    <section className="sec3 pin">
                        <MyWork />
                    </section>
                    <section className="sec4 pin bg-secondary">
                        <Contact />
                    </section>
                </div>
                <header className="w-screen fixed top-4">
                    <div className="flex mx-4 justify-end pointer-events-auto">
                        <div className="flex text-sm">
                            <LocaleSwitcher />
                            <span className="mx-2"></span>
                            <ThemeSwitch handler={() => null} dark={false} />
                        </div>
                    </div>
                </header>
                <footer className="fixed bottom-2 w-screen">
                    <div className="mx-4 flex h-[2px] bg-secondary relative">
                        <div className="w-0 h-[2px] bg-red-500 absolute transition scroll-progress"></div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
