import Moon from "@/components/icons/moon"
import Sun from "@/components/icons/sun"
import { useDarkMode } from "@/hooks/useDarkMode"

const ThemeSwitch = () => {
    const { darkMode, setDarkMode } = useDarkMode()

    return <>
            {darkMode ? <button onClick={() => setDarkMode(prev => !prev)} className="fill-red-500 h-[1.15rem] w-[1.15rem] hover:animate-spin-slow">
                        <Sun />
                    </button>
                    :
                <button onClick={() => setDarkMode(prev => !prev)} className="fill-red-500 h-[1rem] w-[1rem] hover:animate-wiggle -mt-[2px]">
                    <Moon />
                </button>
            }
    </>
}

export default ThemeSwitch
