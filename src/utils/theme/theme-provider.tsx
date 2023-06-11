import React, {createContext, useEffect, useState} from 'react';

export const ThemeContext = createContext(null)

// Create the provider component
export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        const html = document.querySelector('html')

        if (darkMode) html.classList.add('dark')
        else html.classList.remove('dark')
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
