import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = ({ t }) => {
  const projects = [
    {
      title: 'Site Belara',
      description: t.projects_belara_desc,
      image: '/assets/projeto-belara.png',
      tech: ['HTML', 'CSS'],
      github: 'https://github.com/pedrinngkl/site_belara',
      demo: 'https://pedrinngkl.github.io/site_belara/'
    },
    {
      title: 'Gastronelle Delivery',
      description: t.projects_gastronelle_desc,
      image: '/assets/gastronelle.PNG',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/pedrinngkl/Gastronelle-Delivery',
      demo: 'https://pedrinngkl.github.io/Gastronelle-Delivery/'
    },
    {
      title: 'Spotify Clone',
      description: t.projects_spotify_desc,
      image: '/assets/spotify-clone.PNG',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/pedrinngkl/spotify_clone',
      demo: 'https://pedrinngkl.github.io/spotify_clone/'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          {t.projects_title}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-10 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration-300">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-900 transition-colors"
                        title={t.project_btn_view}
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 text-gray-900 transition-colors"
                        title={t.project_btn_demo}
                    >
                        <ExternalLink size={20} />
                    </a>
                </div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                    {project.tech.map(t => (
                        <span key={t} className="text-xs font-medium px-2 py-1 rounded-md bg-primary/10 text-primary dark:bg-primary/20">
                            {t}
                        </span>
                    ))}
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
