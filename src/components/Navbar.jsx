import React, { useState } from 'react';
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = ({ darkMode, toggleTheme, language, setLanguage, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const navLinks = [
    { name: t.nav_inicio, href: '#inicio' },
    { name: t.nav_sobre, href: '#sobre' },
    { name: t.nav_projetos, href: '#projetos' },
    { name: t.nav_habilidades, href: '#habilidades' },
    { name: t.nav_contato, href: '#contato' },
  ];

  const toggleLang = () => {
    const newLang = language === 'pt-BR' ? 'en-US' : 'pt-BR';
    setLanguage(newLang);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="text-xl font-bold text-gray-900 dark:text-gray-100">
          Pedro Gonçalves
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls (Theme + Lang + Mobile Toggle) */}
        <div className="flex items-center gap-4">

          {/* Language Selector */}
          <button
            onClick={toggleLang}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm font-medium cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-800 dark:text-gray-200"
          >
            <img
                src={language === 'pt-BR'
                    ? "https://img.icons8.com/?size=100&id=zHmH8HpOmM90&format=png&color=000000"
                    : "https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000"
                }
                alt={language}
                className="w-5 h-5"
            />
            <span>{language === 'pt-BR' ? 'PT-BR' : 'EN-US'}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Alternar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-800 dark:text-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-light dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4 shadow-lg h-screen">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg text-center text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary-light py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
             <button
                onClick={() => { toggleLang(); setIsMenuOpen(false); }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 text-sm font-medium text-gray-800 dark:text-gray-200"
             >
                <img
                    src={language === 'pt-BR'
                        ? "https://img.icons8.com/?size=100&id=zHmH8HpOmM90&format=png&color=000000"
                        : "https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000"
                    }
                    alt={language}
                    className="w-5 h-5"
                />
                <span>{language === 'pt-BR' ? 'PT-BR' : 'EN-US'}</span>
             </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
