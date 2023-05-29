import Link from "next/link"
import { Share_Tech_Mono } from "next/font/google"

const shareTechMono = Share_Tech_Mono({ weight: '400', subsets: ['latin'] })

const AboutMe = () => {
    return (
        <div className="p-4">
            <Link href="/" className="underline mb-4">Landing</Link>
            <h1 className="font-bold my-4">About me</h1>
            <ul>
                <li className="mt-6 p-3 border border-gray-600 rounded">
                    <div className="font-bold text-2xl mb-4">Hello!</div>
                    <div>I am a <span className="font-medium">self taught developer</span>.</div>
                    <div>With a <span className="font-medium">passion</span> for frontend development.</div>
                    <div>Usually based in <span className="font-medium">Delft</span> 🇳🇱 or <span className="font-medium">Tokyo</span> 🇯🇵.</div>
                </li>
                <li className="mt-6 p-3 border border-gray-600 rounded">
                    <div>
                        <div className="font-bold text-2xl mb-4">I CREATE</div>
                        <div className="font-medium"><span className="font-bold italic">Advanced</span> React applications</div>
                        <div className={`text-gray-800 bg-red-100 ${shareTechMono.className}`}>nextjs, react-three-fiber</div>
                        <div className="font-medium"><span className="font-bold italic">New features</span> from scratch</div>
                        <div className={`text-gray-800 bg-red-100 ${shareTechMono.className}`}>concept -> brainstorming -> design -> build -> test -> deploy</div>
                        <div className="font-medium"><span className="font-bold italic">Robust</span> Microservices</div>
                        <div className={`text-gray-800 bg-red-100 ${shareTechMono.className}`}>deno</div>
                    </div>
                </li>
                <li className="mt-6 p-3 border border-gray-600 rounded">
                    <div className="font-bold text-2xl mb-4 flex">Technologies I
                        <span className="relative flex h-3 w-3 mx-2 justify-center items-center">
                          <span className="animate-ping absolute inline-flex opacity-25 -right-3 top-1">❤️</span>
                          <span className="relative inline-flex h-3 w-3 animate-pound">❤️</span>
                        </span>
                    </div>
                    <div className={`text-gray-800 bg-red-100 ${shareTechMono.className}`}>typescript, react, deno, threejs, zod</div>
                </li>
                <li className="mt-6 p-3 border border-gray-600 rounded">
                    <div className="font-bold text-2xl mb-4">CONTACT</div>
                    <div>For more about me or collaboration</div>
                    <div>Hit me up at: <span className="font-medium">robin_steeman@hotmail.com</span></div>
                </li>
            </ul>
        </div>
    )
}

export default AboutMe