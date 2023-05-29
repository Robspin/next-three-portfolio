

export default function Technologies() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="anim flex flex-col">
                <div className="mt-6 p-3 border border-gray-600 rounded">
                    <div className="font-bold text-2xl mb-4 flex">Technologies I
                        <span className="relative flex h-3 w-3 mx-2 justify-center items-center">
                                                  <span className="animate-ping absolute inline-flex opacity-25 -right-3 top-1">❤️</span>
                                                  <span className="relative inline-flex h-3 w-3 animate-pound">❤️</span>
                                                </span>
                    </div>
                    <div className={`text-gray-800 bg-red-100`}>typescript, react, deno, threejs, zod</div>
                </div>
            </div>
        </div>
    )
}
