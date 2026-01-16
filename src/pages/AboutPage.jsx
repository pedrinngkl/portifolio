import React, { useEffect } from 'react';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';

const AboutPage = () => {
    useEffect(() => {
        if (window.location.hash) {
            const id = window.location.hash.substring(1);
             setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <div className="pt-8">
            <About isPage={true} />
            <Experience />
            <Skills />
        </div>
    );
};

export default AboutPage;
