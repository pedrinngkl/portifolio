import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Skills = () => {
    const { t } = useLanguage();

    const skills = [
        { key: 'skills_html', icon: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000' },
        { key: 'skills_css', icon: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000' },
        { key: 'skills_csharp', icon: 'https://img.icons8.com/?size=100&id=55251&format=png&color=000000' },
        { key: 'skills_linux', icon: 'https://img.icons8.com/?size=100&id=17842&format=png&color=000000' },
        { key: 'skills_mysql', icon: 'https://img.icons8.com/?size=100&id=hYoELNwniGhi&format=png&color=000000' },
        { key: 'skills_maintenance', icon: 'https://img.icons8.com/?size=100&id=2884&format=png&color=000000' },
        { key: 'skills_docker', icon: 'https://img.icons8.com/?size=100&id=pGtJdBrlGFyr&format=png&color=000000' },
        { key: 'skills_js', icon: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000' },
        { key: 'skills_infra', icon: 'https://img.icons8.com/?size=100&id=9948&format=png&color=000000' },
        { key: 'skills_aws', icon: 'https://img.icons8.com/?size=100&id=33039&format=png&color=000000' },
        { key: 'skills_grafana', icon: 'https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg' },
        { key: 'skills_zabbix', icon: 'https://www.vectorlogo.zone/logos/zabbix/zabbix-icon.svg' },
    ];

    return (
        <section id="habilidades" className="py-20 bg-gray-50 dark:bg-background-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
                        {t('sections_skills')}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-50 origin-center rounded-full"></span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.key}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-[#8257E5] dark:bg-[#6d28d9] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:brightness-110 hover:shadow-xl"
                        >
                            <img src={skill.icon} alt={t(skill.key)} className="w-12 h-12 object-contain drop-shadow-sm" />
                            <span className="font-bold text-white text-sm sm:text-base tracking-wide text-center">{t(skill.key)}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
