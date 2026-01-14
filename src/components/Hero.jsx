import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ t }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const toRotate = t.hero_role;
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting, t]); // Add t to dependencies to reset if lang changes

  // Reset typing when language changes
  useEffect(() => {
      setText('');
      setLoopNum(0);
      setIsDeleting(false);
  }, [t]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(500);
    } else {
        if(isDeleting && typingSpeed > 100) setTypingSpeed(100);
        if(!isDeleting && typingSpeed > 200) setTypingSpeed(150);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 relative overflow-hidden">

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-6xl w-full z-10">

        {/* Image */}
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 md:order-2 flex justify-center"
        >
            <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-primary to-purple-400 shadow-2xl">
                <img
                    src="/assets/foto_principal.jpg"
                    alt="Pedro Gonçalves"
                    className="w-full h-full object-cover rounded-full bg-surface-light dark:bg-surface-dark border-4 border-white dark:border-gray-900"
                />
            </div>
        </motion.div>

        {/* Text */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          <span className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-2">
            {t.hero_greeting}
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 min-h-[80px] md:min-h-[140px]">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
               {text}
             </span>
             <span className="border-r-2 border-primary animate-pulse ml-1">&nbsp;</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <a
                href="#projetos"
                className="px-8 py-3 rounded-lg bg-primary hover:bg-primary-dark text-white font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/30"
            >
                {t.hero_btn_projects}
            </a>
            <a
                href="#contato"
                className="px-8 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white font-semibold hover:bg-gray-300 dark:hover:bg-gray-700 transition-all transform hover:scale-105"
            >
                {t.hero_btn_contact}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-400 hover:text-primary transition-colors cursor-pointer"
        aria-label="Rolar para baixo"
      >
        <ArrowDown size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;
