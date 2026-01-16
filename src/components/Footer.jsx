import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    return (
        <footer className="bg-white dark:bg-background-dark py-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <p className="text-gray-600 dark:text-gray-400">
                    {t('sections_footer')}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
