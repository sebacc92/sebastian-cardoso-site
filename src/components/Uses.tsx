import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Monitor, Code2, AppWindow, Headphones } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';

interface Tool {
  name: string;
  description: string;
  link?: string;
}

interface Category {
  icon: JSX.Element;
  title: string;
  tools: Tool[];
}

export default function Uses() {
  const { language } = useLanguage();
  const t = translations[language];

  const categories: Category[] = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: t.uses.categories.workstation,
      tools: [
        {
          name: 'MacBook Pro M1',
          description: '14-inch, 2021 - 16GB RAM, 1TB SSD',
          link: 'https://www.apple.com/macbook-pro/'
        },
        {
          name: 'Dell UltraSharp 27"',
          description: '4K USB-C Monitor',
          link: 'https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-usb-c-monitor-u2720q/apd/210-avjv/monitors-monitor-accessories'
        },
        {
          name: 'Keychron K6',
          description: 'Wireless Mechanical Keyboard with Gateron Brown switches',
          link: 'https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard'
        }
      ]
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: t.uses.categories.coding,
      tools: [
        {
          name: 'VS Code',
          description: 'My main code editor with custom theme and extensions',
          link: 'https://code.visualstudio.com/'
        },
        {
          name: 'iTerm2',
          description: 'Terminal emulator for macOS',
          link: 'https://iterm2.com/'
        },
        {
          name: 'Oh My Zsh',
          description: 'Framework for managing Zsh configuration',
          link: 'https://ohmyz.sh/'
        }
      ]
    },
    {
      icon: <AppWindow className="w-6 h-6" />,
      title: t.uses.categories.apps,
      tools: [
        {
          name: 'Notion',
          description: 'All-in-one workspace for notes and project management',
          link: 'https://www.notion.so/'
        },
        {
          name: 'Fig',
          description: 'Terminal autocomplete with IDE-style suggestions',
          link: 'https://fig.io/'
        },
        {
          name: 'CleanShot X',
          description: 'Screenshot and screen recording tool',
          link: 'https://cleanshot.com/'
        }
      ]
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: t.uses.categories.audio,
      tools: [
        {
          name: 'Sony WH-1000XM4',
          description: 'Wireless noise-cancelling headphones',
          link: 'https://electronics.sony.com/audio/headphones/headband/p/wh1000xm4-b'
        },
        {
          name: 'Blue Yeti X',
          description: 'USB condenser microphone',
          link: 'https://www.bluemic.com/en-us/products/yeti-x/'
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.uses.title}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              {t.uses.subtitle}
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              {t.uses.description}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={toolIndex}
                    whileHover={{ x: 10 }}
                    className="group"
                  >
                    {tool.link ? (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                          {tool.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {tool.description}
                        </p>
                      </a>
                    ) : (
                      <>
                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                          {tool.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {tool.description}
                        </p>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}