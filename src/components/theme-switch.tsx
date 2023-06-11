import { useContext } from "react"
import Moon from "@/components/icons/moon"
import Sun from "@/components/icons/sun"
import { ThemeContext } from "@/utils/theme/theme-provider"

const ThemeSwitch = () => {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext)

    return <>
            {darkMode ? <button onClick={toggleDarkMode} className="fill-red-500 h-[1.15rem] w-[1.15rem] hover:animate-spin-slow">
                        <Sun />
                    </button>
                    :
                <button onClick={toggleDarkMode} className="fill-red-500 h-[1rem] w-[1rem] hover:animate-wiggle -mt-[2px]">
                    <Moon />
                </button>
            }
    </>
}

export default ThemeSwitch
