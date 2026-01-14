import React from 'react';

const Footer = ({ t }) => {
  return (
    <footer className="py-8 bg-surface-light dark:bg-surface-dark border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {t.footer_text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
