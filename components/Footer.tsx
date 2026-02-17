
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      href: PERSONAL_INFO.linkedin, 
      hoverColor: 'hover:text-sky-600 hover:bg-sky-50',
      activeColor: 'text-sky-600'
    },
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      href: '#', 
      hoverColor: 'hover:text-slate-900 hover:bg-slate-100',
      activeColor: 'text-slate-900'
    },
    { 
      name: 'Mail', 
      icon: <Mail size={20} />, 
      href: `mailto:${PERSONAL_INFO.email}`, 
      hoverColor: 'hover:text-rose-500 hover:bg-rose-50',
      activeColor: 'text-rose-500'
    },
  ];

  return (
    <footer className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Rosangpuia C.
            </h4>
            <p className="mt-2 text-slate-500 font-medium">MCA Student | Full-Stack Developer</p>
          </div>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            {socialLinks.map((link) => (
              <motion.a 
                key={link.name}
                href={link.href} 
                target={link.name === 'Mail' ? '_self' : '_blank'}
                rel="noreferrer"
                whileHover={{ 
                  scale: 1.15, 
                  y: -5,
                  rotate: [0, -5, 5, 0],
                  transition: { type: 'spring', stiffness: 400, damping: 10 }
                }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 shadow-sm hover:shadow-lg transition-all duration-300 ${link.hoverColor}`}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Rosangpuia Chhakchhuak. Built with React & Tailwind.
          </p>
          <motion.button 
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Back to Top <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowUp size={16} />
            </motion.span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
