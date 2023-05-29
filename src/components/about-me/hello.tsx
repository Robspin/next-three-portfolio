

export default function Hello() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="anim flex flex-col">
                <div className="mt-6 p-3 border border-gray-600 rounded">
                    <div className="font-bold text-2xl mb-4">Hello!</div>
                    <div>I am a <span className="font-medium">self taught developer</span>.</div>
                    <div>With a <span className="font-medium">passion</span> for frontend development.</div>
                    <div>Usually based in <span className="font-medium">Delft</span> 🇳🇱 or <span className="font-medium">Tokyo</span> 🇯🇵.</div>
                </div>
            </div>
        </div>
    )
}
