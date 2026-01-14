import React from 'react';
import { motion } from 'framer-motion';

const Skills = ({ t }) => {
  const skills = [
    { name: 'HTML', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
    { name: 'CSS', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
    { name: 'JavaScript', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
    { name: 'C#', icon: 'https://img.icons8.com/?size=100&id=55251&format=png&color=000000' },
    { name: 'Linux', icon: 'https://img.icons8.com/?size=100&id=17842&format=png&color=000000' },
    { name: 'MySQL', icon: 'https://img.icons8.com/?size=100&id=hYoELNwniGhi&format=png&color=000000' },
    { name: 'Docker', icon: 'https://img.icons8.com/?size=100&id=pGtJdBrlGFyr&format=png&color=000000' },
    { name: t.skills_infra, icon: 'https://img.icons8.com/?size=100&id=9948&format=png&color=000000' },
    { name: t.skills_maintenance, icon: 'https://img.icons8.com/?size=100&id=2884&format=png&color=000000' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          {t.skills_title}
        </motion.h2>

        <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
                key={skill.name}
                variants={item}
                className="group flex flex-col items-center p-6 bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center p-2 bg-white dark:bg-gray-800 rounded-full group-hover:scale-110 transition-transform">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-200 group-hover:text-primary transition-colors text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
