import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './data/translations';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('pt-BR');

  useEffect(() => {
    // Check system preference or saved preference for theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }

    // Check saved language
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        language={language}
        setLanguage={changeLanguage}
        t={t}
      />

      <main>
        <div id="inicio">
          <Hero t={t} />
        </div>
        <div id="sobre">
          <About t={t} />
        </div>
        <div id="habilidades">
          <Skills t={t} />
        </div>
        <div id="projetos">
          <Projects t={t} />
        </div>
        <div id="contato">
          <Contact t={t} />
        </div>
      </main>

      <Footer t={t} />
    </div>
  );
}

export default App;
