import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
    const { t, language } = useLanguage();
    
    // Typing Animation Logic
    const [subTitle, setSubTitle] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    const [headerText, setHeaderText] = useState('');

    useEffect(() => {
        // Reset when language changes
        setSubTitle('');
        setIsDeleting(false);
        setLoopNum(0);
        setHeaderText('');
    }, [language]);

    // Animate Header Name first
    useEffect(() => {
        const name = t('hero_name');
        if (headerText.length < name.length) {
            const timeout = setTimeout(() => {
                setHeaderText(name.substring(0, headerText.length + 1));
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [headerText, language, t]);


    // Animate Roles
    useEffect(() => {
        const roles = t('hero_role'); 
        // Ensure roles is array
        const rolesArray = Array.isArray(roles) ? roles : [roles];
        
        const i = loopNum % rolesArray.length;
        const fullText = rolesArray[i];

        const handleType = () => {
            setSubTitle(current => isDeleting 
                ? fullText.substring(0, current.length - 1) 
                : fullText.substring(0, current.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && subTitle === fullText) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && subTitle === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        // Only start typing roles after name is done relative to user perception? 
        // Or just run parallel. original ran name then roles.
        // Simplified: Run roles constantly.
        
        const timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);

    }, [subTitle, isDeleting, loopNum, t, language]);

    return (
        <section id="inicio" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200/40 via-background-light to-background-light dark:from-purple-900/20 dark:via-background-dark dark:to-background-dark"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                
                {/* Image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="order-1 md:order-2 flex justify-center"
                >
                   <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
                        <img 
                            src="/assets/foto_principal.jpg" 
                            alt="Pedro Gonçalves" 
                            className="relative w-full h-full object-cover rounded-full border-4 border-primary shadow-xl"
                        />
                   </div>
                </motion.div>

                {/* Text */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="order-2 md:order-1 text-center md:text-left space-y-6"
                >
                    <h2 className="text-2xl md:text-3xl font-light text-gray-600 dark:text-gray-300">
                        {t('hero_greeting')}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
                        {headerText}
                        <span className="animate-blink">|</span>
                    </h1>
                    <div className="h-8">
                        <span className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-mono">
                            {subTitle}
                            <span className="inline-block w-0.5 h-6 ml-1 bg-primary animate-blink"></span>
                        </span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Link 
                            to="/projetos" 
                            className="px-8 py-3 bg-primary hover:bg-primary-hover text-white rounded-full font-medium transition-transform hover:scale-105 shadow-lg hover:shadow-primary/50"
                        >
                            {t('hero_btn_projects')}
                        </Link>
                        <Link 
                            to="/contato" 
                            className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full font-medium transition-transform hover:scale-105"
                        >
                            {t('hero_btn_contact')}
                        </Link>
                    </div>
                </motion.div>
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary"
            >
                <Link to="#sobre" onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('sobre')?.scrollIntoView({behavior: 'smooth'});
                }}>
                    <ChevronDownIcon />
                </Link>
            </motion.div>
        </section>
    );
};

// Simple Icon component since I can't import unused Lucide in the snippet for cleaner code
const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
)

export default Hero;
