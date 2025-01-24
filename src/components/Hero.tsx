import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden hover:scale-105 transition-transform duration-300"
        >
          {theme === "dark"
            ? <img
              src="/profile-pic-dark.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
            : <img
              src="/profile-pic-light.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          }
          
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold text-gray-900 dark:text-white mb-2"
        >
          {t.hero.greeting} <span className="text-blue-600 dark:text-blue-400">Sebastian Cardoso</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl text-gray-600 dark:text-gray-400"
        >
          {t.hero.role}
        </motion.p>
      </div>
    </div>
  );
}