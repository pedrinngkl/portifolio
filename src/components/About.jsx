import React from 'react';
import { Briefcase, GraduationCap, FileText, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const About = ({ t }) => {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-[#1a1a1a]/50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          {t.about_title}
        </motion.h2>

        <div className="flex flex-col gap-12">

          {/* Bio Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
          >
             <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
               {t.about_bio}
             </p>

             <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="https://www.linkedin.com/in/pedro-gon%C3%A7alves-56021336a/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                    <Linkedin size={18} /> LinkedIn
                </a>
                <a href="https://github.com/pedrinngkl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
                    <Github size={18} /> GitHub
                </a>
                <a href="/assets/Curriculo.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white hover:bg-primary-dark transition-colors">
                    <FileText size={18} /> {t.about_resume}
                </a>
             </div>
          </motion.div>

          {/* Timeline Grid */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Experience */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        <Briefcase size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold">{t.xp_title}</h3>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-8">
                    <div className="relative">
                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-[#1a1a1a]"></div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{t.xp_role}</h4>
                        <p className="text-primary font-medium mb-1">{t.xp_company}</p>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">{t.xp_date}</span>
                        <p className="text-gray-600 dark:text-gray-300">
                            {t.xp_desc}
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Education */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-purple-500/10 rounded-lg text-purple-500">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold">{t.edu_title}</h3>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-8">
                    <div className="relative">
                         <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-purple-500 border-4 border-white dark:border-[#1a1a1a]"></div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">{t.edu_course}</h4>
                        <p className="text-purple-500 font-medium mb-1">{t.edu_school}</p>
                        <span className="text-sm text-gray-500 dark:text-gray-400 block mb-2">{t.edu_date}</span>
                    </div>
                </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
