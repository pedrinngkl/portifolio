import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
    const { t } = useLanguage();

    const projects = [
        {
            id: 'belara',
            titleKey: 'projects_title_belara',
            descKey: 'projects_description_belara',
            img: '/assets/projeto-belara.png',
            tech: [
                { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
                { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' }
            ],
            repo: 'https://github.com/pedrinngkl/site_belara',
            demo: 'https://pedrinngkl.github.io/site_belara/'
        },
        {
            id: 'gastronelle',
            titleKey: 'projects_title_react',
            descKey: 'projects_description_react',
            img: '/assets/gastronelle.PNG',
            tech: [
                { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
                { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
                { name: 'JS', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' }
            ],
            repo: 'https://github.com/pedrinngkl/Gastronelle-Delivery',
            demo: 'https://pedrinngkl.github.io/Gastronelle-Delivery/'
        },
        {
            id: 'spotify',
            titleKey: 'projects_title_csharp_console',
            descKey: 'projects_description_csharp_console',
            img: '/assets/spotify-clone.PNG',
            tech: [
                { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
                { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
                { name: 'JS', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' }
            ],
            repo: 'https://github.com/pedrinngkl/spotify_clone',
            demo: 'https://pedrinngkl.github.io/spotify_clone/'
        }
    ];

    return (
        <section id="projetos" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
                        {t('sections_projects')}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-50 origin-center rounded-full"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <img 
                                    src={project.img} 
                                    alt={t(project.titleKey)} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                     {/* Overlay buttons if needed, keeping them simple in card footer for now */}
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                        {t(project.titleKey)}
                                    </h3>
                                    <div className="flex -space-x-2">
                                        {project.tech.map((t, i) => (
                                            <img 
                                                key={i} 
                                                src={t.icon} 
                                                alt={t.name} 
                                                title={t.name} 
                                                className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800 bg-white"
                                            />
                                        ))}
                                    </div>
                                </div>
                                
                                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                                    {t(project.descKey)}
                                </p>

                                <div className="flex gap-3 mt-auto">
                                    <a 
                                        href={project.repo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        <Eye size={16} />
                                        {t('project_btn_view')}
                                    </a>
                                    <a 
                                        href={project.demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        {t('project_btn_live')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
