import Moon from "@/components/icons/moon"
import Sun from "@/components/icons/sun"

type Props = {
    handler: () => void
}

const ThemeSwitch = ({ handler }: Props) => {


    return (
        <button onClick={() => handler()} className="fill-red-500 h-[1.15rem] w-[1.15rem] hover:animate-spin-slow">
            <Sun />
        </button>
        // <button onClick={() => handler()} className="fill-red-500 h-4 w-4 animate-bounce">
        //     <Moon />
        // </button>
    )
}

export default ThemeSwitch
