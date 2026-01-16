import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            document.body.classList.toggle('dark', storedTheme === 'dark');
            document.documentElement.setAttribute('data-theme', storedTheme);
        } else {
             // System preference check
             if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                 setTheme('dark');
                 document.body.classList.add('dark');
                 document.documentElement.setAttribute('data-theme', 'dark');
             }
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.classList.toggle('dark', newTheme === 'dark');
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
