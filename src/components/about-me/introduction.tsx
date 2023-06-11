import { ReactNode, Suspense, useState } from "react"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'

import Models from "@/components/canvas/models"

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor'


const ChatWrapper = ({ children, picture = false }: { children: ReactNode, picture?: boolean }) => (
    <div className={`p-3 bg-white border border-gray-600 rounded shadow-lg ${!picture && 'ml-[138px]'}`}>
        {children}
    </div>
)



export default function Introduction({ finishedIntroductionEntry }: { finishedIntroductionEntry: boolean }) {
    const [storyPart, setStoryPart] = useState(0)

    const handleSmoothStoryProgression = () => {
        setStoryPart(3)
        setTimeout(() => setStoryPart(prev => prev + 1), 3000)
    }

    return (
        <div className="h-screen w-screen grid grid-cols-2 gap-10 px-10 pt-28 pb-10 overflow-hidden">
            <div className="flex flex-col overflow-scroll">
                <div className="anim flex items-center">
                    <div className="rounded-full overflow-hidden mr-4 shadow-lg border border-gray-600">
                        <Image src="/randomguy.jpg" alt="randomguy" height={120} width={120} />
                    </div>
                    <ChatWrapper picture>
                        {finishedIntroductionEntry &&
                            <TypeAnimation speed={50}  style={{ whiteSpace: 'pre-line', display: 'block' }} cursor={false}
                               className={CURSOR_CLASS_NAME}
                                sequence={[
                                    3000, "Hello, Robin here.",
                                    2000, "Hello, Robin here. \nI am a self taught developer.",
                                    2000, "Hello, Robin here. \nI am a self taught developer.\nWith a passion for frontend development.",
                                    1000, "Hello, Robin here. \nI am a self taught developer.\nWith a passion for frontend development.\nBased in Delft 🇳🇱 or Tokyo 🇯🇵.",
                                    1000, (el) => {
                                        el.classList.remove(CURSOR_CLASS_NAME)
                                        setStoryPart(1)
                                    }
                                ]}  />}
                    </ChatWrapper>
                </div>
                {storyPart > 0 &&
                    <div className="flex mt-6">
                        <ChatWrapper>
                            <TypeAnimation speed={50} deletionSpeed={75}
                                           style={{ whiteSpace: 'pre-line', display: 'block' }} cursor={false}
                                           className={CURSOR_CLASS_NAME}
                                           sequence={[
                                               1000, "I create react applications.",
                                               1000, "I create fun and interactive react applications!",
                                               2000, "I create fun and interactive react applications!\nFor example using nextjs and threejs.",
                                               1000, "I create fun and interactive react applications!\nFor example using nextjs and threejs.\nI will show you an example...",
                                               1000, (el) => {
                                                   el.classList.remove(CURSOR_CLASS_NAME)
                                                   setStoryPart(2)
                                               }
                                           ]}  />
                        </ChatWrapper>
                    </div>
                    }
                {storyPart > 3 &&
                    <div className="flex mt-6">
                        <ChatWrapper>
                            <TypeAnimation speed={50}  style={{ whiteSpace: 'pre-line', display: 'block' }} cursor={false}
                                           className={CURSOR_CLASS_NAME}
                                           sequence={[
                                               1000, "Cool huh.",
                                               2000, "Cool huh.\nReact and threejs together are really powerful!",
                                               2000, "Cool huh.\nReact and threejs together are really powerful!\nTry clicking and dragging inside the scene.",
                                               (el) => {
                                                   setStoryPart(5)
                                                   el.classList.remove(CURSOR_CLASS_NAME)
                                               }
                                           ]}  />
                        </ChatWrapper>
                    </div>
                }
                {storyPart > 4 &&
                    <div className="flex mt-6">
                        <ChatWrapper>
                            <TypeAnimation speed={50}  style={{ whiteSpace: 'pre-line', display: 'block' }} cursor={false}
                                           className={CURSOR_CLASS_NAME}
                                           sequence={[
                                               1000, "Keep scrolling to find out more about me...",
                                               (el) => el.classList.remove(CURSOR_CLASS_NAME)
                                           ]}  />
                        </ChatWrapper>
                    </div>
                }
            </div>
            <div className={`grid ${storyPart > 2 && 'grid-rows-2'} gap-4 w-full h-full overflow-hidden px-4 pb-4`}>

                {storyPart > 1 && <div className="rounded border border-slate-400 w-full flex flex-col bg-slate-800 text-slate-100 overflow-hidden transition-all mb-4 shadow-lg">
                    <div className="w-full border-b border-slate-400">
                        <div className="border-b-2 border-blue-500 px-3 py-2 inline-block">scene.tsx</div>
                    </div>
                    <div className="px-3 py-2 text-sm overflow-scroll flex flex-col-reverse">
                        <TypeAnimation speed={85} style={{ whiteSpace: 'pre', display: 'block' }} cursor={false}
                                       className={CURSOR_CLASS_NAME}
                                       sequence={[
                                           1000,
                                           "import { useRef } from \"react\"\nimport { useFrame, useContext } from \"@react-three/fiber\"\nimport { Canvas, Icosahedron, Heart, ReactLogo, Sky, Stars } from \"@/components/scene\"\nimport { ThemeContext } from \"@/utils/theme/theme-context\"\n\nconst ExampleScene = () => {\n\tconst { darkMode } = useContext(ThemeContext)\n\tconst groupRef = useRef()\n\tuseFrame(({ clock }) => groupRef.current.position.y += (0.01 * Math.sin(clock.getElapsedTime())))\n\nreturn (\n\t<Canvas>\n\t\t{darkMode ? <Stars /> : <Sky />}\n\t\t<group ref={groupRef}>\n\t\t\t<Icosahedron />\n\t\t\t<Heart />\n\t\t\t<ReactLogo />\n\t\t</group>\n\t</Canvas>\n\t)\n}",
                                           1000,
                                           (el) => {
                                              el.classList.remove(CURSOR_CLASS_NAME)
                                               handleSmoothStoryProgression()
                                           }
                                       ]}/>
                    </div>
                </div>}
                {storyPart > 2 &&
                    <div className="h-full w-full rounded overflow-hidden rounded-lg border shadow-inner bg-black">
                        <Suspense fallback={<div className="h-full w-full flex justify-center items-center">Loading...</div>}>
                            <Models />
                        </Suspense>
                    </div>
                }
            </div>
        </div>
    )
}
