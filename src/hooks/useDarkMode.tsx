import { useEffect, useState } from "react"

export const useDarkMode = () => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const html = document.querySelector("html")
        if (darkMode) html.classList.add('dark')
        else html.classList.remove('dark')
    }, [darkMode])

    return { darkMode, setDarkMode }
}
