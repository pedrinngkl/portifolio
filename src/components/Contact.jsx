import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const URL_DO_NAS = 'https://api-pedrogoncalves.com.br/enviar-contato';

    try {
        const resposta = await fetch(URL_DO_NAS, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (resposta.ok) {
            setStatus('success');
            setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    } catch (error) {
        console.error(error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
    }
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
          {t.contact_title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {t.contact_subtitle}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                    {t.contact_text}
                </p>

                <div className="space-y-6">
                    <a href="tel:+5531989908285" className="flex items-center gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors group">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.contact_phone}</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">(31) 98990-8285</p>
                        </div>
                    </a>

                    <a href="mailto:pedrogpereira9@gmail.com" className="flex items-center gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors group">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.contact_email}</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white break-all">pedrogpereira9@gmail.com</p>
                        </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-colors group">
                        <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{t.contact_location}</p>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white">{t.contact_location_value}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="nome" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.form_name}</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.form_email}</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="assunto" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.form_subject}</label>
                        <input
                            type="text"
                            id="assunto"
                            name="assunto"
                            value={formData.assunto}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="mensagem" className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.form_message}</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="4"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className={`w-full py-3.5 rounded-lg font-semibold transition-all transform hover:-translate-y-1 shadow-lg flex items-center justify-center gap-2 ${
                            status === 'success' ? 'bg-green-500 text-white hover:bg-green-600 shadow-green-500/30' :
                            status === 'error' ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/30' :
                            'bg-primary text-white hover:bg-primary-dark shadow-primary/30'
                        }`}
                    >
                        {status === 'sending' ? (
                            <span>{t.form_sending}</span>
                        ) : status === 'success' ? (
                            <span>{t.form_success}</span>
                        ) : status === 'error' ? (
                            <span>{t.form_error}</span>
                        ) : (
                            <>
                                <Send size={20} /> {t.form_send}
                            </>
                        )}
                    </button>
                </form>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
