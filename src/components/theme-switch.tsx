import Moon from "@/components/icons/moon"
import Sun from "@/components/icons/sun"

type Props = {
    handler: () => void,
    dark: boolean
}

const ThemeSwitch = ({ handler, dark }: Props) => {

    return <>
            {dark ? <button onClick={() => handler()} className="fill-red-500 h-[1.15rem] w-[1.15rem] hover:animate-spin-slow">
                        <Sun />
                    </button>
                    :
                <button onClick={() => handler()} className="fill-red-500 h-[1rem] w-[1rem] hover:animate-wiggle -mt-[2px]">
                    <Moon />
                </button>
            }
    </>
}

export default ThemeSwitch