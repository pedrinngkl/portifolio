import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    const { t, language } = useLanguage();
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        const formData = {
            nome: e.target.nome.value,
            email: e.target.email.value,
            assunto: e.target.assunto.value,
            mensagem: e.target.mensagem.value
        };

        const URL_DO_NAS = 'https://api-pedrogoncalves.com.br/enviar-contato';

        try {
            const response = await fetch(URL_DO_NAS, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error_server');
            }
        } catch (error) {
            console.error(error);
            setStatus('error_connection');
        }
    };

    const contactLinks = [
        { key: 'contact_phone', value: '(31) 98990-8285', href: 'tel:+5531989908285', icon: Phone },
        { key: 'contact_email', value: 'pedrogpereira9@gmail.com', href: 'mailto:pedrogpereira9@gmail.com', icon: Mail },
        { key: 'contact_linkedin', value: '/pedro-goncalves', href: 'https://www.linkedin.com/in/pedro-gon%C3%A7alves-56021336a/', icon: Linkedin },
        { key: 'contact_github', value: '/pedrinngkl', href: 'https://github.com/pedrinngkl', icon: Github },
    ];

    return (
        <section id="contato" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 relative inline-block">
                        {t('sections_contact')}
                        <span className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-50 origin-center rounded-full"></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('contact_links_title')}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactLinks.map((link) => (
                                <a 
                                    key={link.key} 
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105 border border-gray-100 dark:border-gray-700 group"
                                >
                                    <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-3">
                                        <link.icon size={24} />
                                    </div>
                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{t(link.key)}</span>
                                    <span className="text-gray-900 dark:text-white font-medium text-center break-all">{link.value}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-primary/5 dark:bg-gray-800/50 p-8 rounded-2xl border border-primary/10">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{t('form_title')}</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('form_name')}</label>
                                <input type="text" id="nome" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('form_email')}</label>
                                <input type="email" id="email" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" />
                            </div>
                            <div>
                                <label htmlFor="assunto" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('form_subject')}</label>
                                <input type="text" id="assunto" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow" />
                            </div>
                            <div>
                                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('form_message')}</label>
                                <textarea id="mensagem" rows="4" required className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={status === 'sending'}
                                className="w-full py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-bold shadow-lg shadow-primary/30 transform hover:translate-y-[-2px] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        {t('msg_sending')}
                                    </>
                                ) : (
                                    <>
                                        <Send size={18} />
                                        {t('form_button')}
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm text-center font-medium animate-fade-in">
                                    {t('msg_success')}
                                </div>
                            )}
                            {(status === 'error_server' || status === 'error_connection') && (
                                <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm text-center font-medium animate-fade-in">
                                    {status === 'error_server' ? t('msg_error_server') : t('msg_error_connection')}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
