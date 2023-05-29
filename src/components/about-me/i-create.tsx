import dynamic from "next/dynamic"
import { Suspense } from "react"
import Models from "@/components/canvas/models"

export default function ICreate() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="anim flex flex-col">
                <div className="mt-6 p-3 border border-gray-600 rounded">
                    <div>
                        <div className="font-bold text-2xl mb-4">I CREATE</div>
                        <div className="font-medium"><span className="font-bold italic">Advanced</span> React applications</div>
                        <div className={`text-gray-800 bg-red-100`}>nextjs, react-three-fiber</div>
                        <div className="font-medium"><span className="font-bold italic">New features</span> from scratch</div>
                        <div className={`text-gray-800 bg-red-100`}>concept -> brainstorming -> design -> build -> test -> deploy</div>
                        <div className="font-medium"><span className="font-bold italic">Robust</span> Microservices</div>
                        <div className={`text-gray-800 bg-red-100`}>deno</div>
                    </div>
                </div>
                <div className='flex h-96 w-full flex-col items-center justify-center'>
                    <Models />
                </div>
            </div>
        </div>
    )
}
