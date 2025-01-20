import React from 'react';
import { Github, Twitter, Linkedin, Instagram, Youtube, GitBranch as BrandTiktok } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socials = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/sebacc' },
    { icon: <Twitter className="h-5 w-5" />, url: 'https://twitter.com/sebacc' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/in/sebacc' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/sebacc' },
    { icon: <Youtube className="h-5 w-5" />, url: 'https://youtube.com/@sebacc' },
    { icon: <BrandTiktok className="h-5 w-5" />, url: 'https://tiktok.com/@sebacc' }
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
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.div variants={container} className="flex space-x-6">
            {socials.map((social, index) => (
              <motion.a
                key={index}
                variants={item}
                whileHover={{ scale: 1.2, rotate: 5 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.div
            variants={item}
            className="text-gray-600 dark:text-gray-400"
          >
            © {new Date().getFullYear()} Sebastian Cardoso
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}