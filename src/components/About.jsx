import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = ({ isPage = false }) => {
    const { t } = useLanguage();

    return (
        <section id="sobre" className={`py-20 ${isPage ? 'min-h-[calc(100vh-4rem)] flex items-center' : ''}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white relative inline-block">
                        {t('sections_about')}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-50 origin-center rounded-full"></span>
                    </h2>

                    {isPage && (
                        <img 
                            src="/assets/foto_principal.jpg" 
                            alt="Pedro" 
                            className="w-32 h-32 rounded-full object-cover mb-6 border-4 border-primary/50 shadow-lg"
                        />
                    )}

                    <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-300 max-w-none">
                        {isPage ? (
                            <>
                                <p className="mb-4">{t('about_p1')}</p>
                                <p className="mb-4">{t('about_p2')}</p>
                                <p className="mb-6">{t('about_p3')}</p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                                    <a href="mailto:pedrogpereira9@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                                        {t('contact_email')}
                                    </a>
                                    <a href="tel:+5531989908285" className="flex items-center gap-2 text-primary hover:underline">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                        {t('contact_phone')}
                                    </a>
                                </div>
                                
                                <div className="flex gap-4 justify-center mt-6">
                                    <a href="https://www.linkedin.com/in/pedro-gon%C3%A7alves-56021336a/" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                                        LinkedIn
                                    </a>
                                    <a href="https://github.com/pedrinngkl" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                                        GitHub
                                    </a>
                                     <a href="/assets/Curriculo.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition">
                                        {t('resume')}
                                    </a>
                                </div>
                            </>
                        ) : (
                            <p>{t('sections_aboutText')}</p>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
