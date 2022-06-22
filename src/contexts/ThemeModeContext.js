import React, { useState, createContext } from 'react';

export const ThemeModeContext = createContext();

export default function ThemeModeContextProvider({ children }) {
    const [isDarkModeOn, setIsDarkModeOn] = useState(false);

    const changeThemeMode = (value) => {
        setIsDarkModeOn(value);
    }
    return (
        <ThemeModeContext.Provider value={{ isDarkModeOn, changeThemeMode }}>
            {children}
        </ThemeModeContext.Provider>
    )
}
