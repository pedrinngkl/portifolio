import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.substring(1);
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
             window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="bg-background-light dark:bg-background-dark overflow-x-hidden">
            <Hero />
            <About isPage={false} />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
};

export default Home;
