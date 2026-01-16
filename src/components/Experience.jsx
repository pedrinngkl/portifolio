import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    const { t } = useLanguage();

    return (
        <section className="py-20 bg-gray-50 dark:bg-background-dark/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Experience */}
                    <div id="experiencia">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex items-center gap-3"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <Briefcase size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('sections_experience')}</h2>
                        </motion.div>

                        <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-primary bg-white dark:bg-gray-900"></span>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t('xp_role_1')}</h3>
                                <p className="text-primary font-medium">{t('xp_company_1')}</p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1 mb-2">
                                    <Calendar size={14} className="mr-1" />
                                    {t('xp_date_1')}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {t('xp_desc_1')}
                                </p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Education */}
                    <div id="formacao">
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="mb-8 flex items-center gap-3"
                        >
                            <div className="p-3 bg-primary/10 rounded-lg text-primary">
                                <GraduationCap size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t('sections_education')}</h2>
                        </motion.div>

                        <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-8">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="relative"
                            >
                                <span className="absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-primary bg-white dark:bg-gray-900"></span>
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{t('education_course')}</h3>
                                <p className="text-primary font-medium">{t('education_school')}</p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                                    <Calendar size={14} className="mr-1" />
                                    {t('education_period')}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
