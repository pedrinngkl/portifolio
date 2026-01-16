import React, { useEffect } from 'react';
import Projects from '../components/Projects';

const ProjectsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-8 min-h-screen">
            <Projects />
        </div>
    );
};

export default ProjectsPage;
