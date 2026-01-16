import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, Globe, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { t, language, changeLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [langDropdownOpen, setLangDropdownOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { key: 'nav_inicio', path: '/#inicio', external: false },
        { key: 'nav_sobre', path: '/sobre', external: false },
        { key: 'nav_projetos', path: '/projetos', external: false },
        { key: 'nav_habilidades', path: '/#habilidades', external: false },
        { key: 'nav_contato', path: '/contato', external: false },
    ];

    // Handle smooth scoll for hash links on home
    const handleNavClick = (path) => {
        setIsOpen(false);
        if (path.startsWith('/#')) {
            const hash = path.substring(2);
            if (location.pathname !== '/') {
                // Navigate to home then scroll
                window.location.href = path;
            } else {
                const element = document.getElementById(hash);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-colors duration-300 ${isOpen ? 'bg-white dark:bg-gray-900 border-b border-transparent' : 'bg-surface-light/80 dark:bg-surface-dark/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
                            Pedro Gonçalves
                        </Link>
                    </div>
                    
                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                link.path.startsWith('/#') ? (
                                    <button 
                                        key={link.key}
                                        onClick={() => handleNavClick(link.path)}
                                        className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {t(link.key)}
                                    </button>
                                ) : (
                                    <Link
                                        key={link.key}
                                        to={link.path}
                                        className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                    >
                                        {t(link.key)}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button 
                                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-primary"
                            >
                                <Globe size={18} />
                                <span className="text-sm">{language === 'pt-BR' ? 'PT-BR' : 'EN-US'}</span>
                                <ChevronDown size={14} />
                            </button>
                            <AnimatePresence>
                                {langDropdownOpen && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    >
                                        <div className="py-1">
                                            <button
                                                onClick={() => { changeLanguage('pt-BR'); setLangDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                PT-BR
                                            </button>
                                            <button
                                                onClick={() => { changeLanguage('en-US'); setLangDropdownOpen(false); }}
                                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                            >
                                                EN-US
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Theme Toggle */}
                        <button 
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-400 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                        >
                            {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-white hover:bg-primary focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 top-16 z-40 bg-white dark:bg-gray-900 md:hidden flex flex-col"
                    >
                        <div className="flex-1 flex flex-col pt-8 px-6 space-y-2">
                             {navLinks.map((link) => (
                                <motion.div 
                                    key={link.key}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="w-full"
                                >
                                    {link.path.startsWith('/#') ? (
                                        <button
                                            onClick={() => handleNavClick(link.path)}
                                            className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary block w-full text-left py-3 border-b border-gray-100 dark:border-gray-800 transition-colors"
                                        >
                                            {t(link.key)}
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary block w-full text-left py-3 border-b border-gray-100 dark:border-gray-800 transition-colors"
                                        >
                                            {t(link.key)}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-6 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50">
                             <div className="flex items-center justify-between">
                                {/* Language Mobile */}
                                <div className="flex gap-2">
                                    <button 
                                        onClick={() => changeLanguage('pt-BR')} 
                                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${language === 'pt-BR' ? 'bg-white dark:bg-gray-800 border-primary text-primary shadow-sm' : 'border-transparent text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        <img src="https://flagcdn.com/w20/br.png" alt="Brasil" className="w-4 h-auto rounded-sm" />
                                        PT
                                    </button>
                                    <button 
                                        onClick={() => changeLanguage('en-US')} 
                                        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors border ${language === 'en-US' ? 'bg-white dark:bg-gray-800 border-primary text-primary shadow-sm' : 'border-transparent text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                                    >
                                        <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-4 h-auto rounded-sm" />
                                        EN
                                    </button>
                                </div>

                                {/* Theme Mobile */}
                                <button 
                                    onClick={toggleTheme} 
                                    className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-500 dark:text-yellow-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
                                </button>
                             </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
