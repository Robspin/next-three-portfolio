import Image from "next/image"


export default function Hello() {
    return (
        <div className="h-screen w-screen flex justify-center">
            <div className="anim flex flex-col">
                <div className="flex items-center mt-10">
                    <div className="rounded-full overflow-hidden mr-4 shadow-lg border border-gray-600">
                        <Image src="/randomguy.jpg" alt="randomguy" height={120} width={120} />
                    </div>
                    <div className="p-3 bg-white border border-gray-600 rounded shadow-lg">
                        <div className="font-bold text-2xl mb-4">Hello!</div>
                        <div>I am a <span className="font-medium">self taught developer</span>.</div>
                        <div>With a <span className="font-medium">passion</span> for frontend development.</div>
                        <div>Usually based in <span className="font-medium">Delft</span> 🇳🇱 or <span className="font-medium">Tokyo</span> 🇯🇵.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
