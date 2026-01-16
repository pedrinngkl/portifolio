import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt-BR');

    useEffect(() => {
        const storedLang = localStorage.getItem('language');
        if (storedLang && translations[storedLang]) {
            setLanguage(storedLang);
        } else {
             // Detect browser language if wanted, or default to pt-BR
        }
    }, []);

    const changeLanguage = (lang) => {
        if (translations[lang]) {
            setLanguage(lang);
            localStorage.setItem('language', lang);
            document.documentElement.lang = lang;
        }
    };

    const t = (key) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
