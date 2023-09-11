"use client"
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemProvider = ({ children }) => {
    const [mode, setMode] = useState("light")

    const taggle = () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ taggle, mode }}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider >
    );
};

export default ThemProvider;