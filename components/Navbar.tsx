
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Code, Briefcase, FileText, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', icon: <User size={18} />, href: '#about' },
    { name: 'Skills', icon: <Code size={18} />, href: '#skills' },
    { name: 'Projects', icon: <Briefcase size={18} />, href: '#projects' },
    { name: 'Resume', icon: <FileText size={18} />, href: '#experience' },
    { name: 'Contact', icon: <Phone size={18} />, href: '#contact' },
  ];

  const spring = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none p-6">
      <motion.div 
        animate={{ 
          y: scrolled ? 0 : 10,
          width: scrolled ? "auto" : "100%",
          maxWidth: scrolled ? "600px" : "1200px"
        }}
        transition={spring}
        className={`pointer-events-auto flex items-center justify-between px-8 py-4 rounded-[2.5rem] transition-all duration-500 ${scrolled ? 'glass shadow-2xl shadow-indigo-500/10' : 'bg-transparent'}`}
      >
        <a href="#hero" className="text-2xl font-black bg-gradient-to-br from-indigo-700 to-violet-700 bg-clip-text text-transparent tracking-tighter">
          RC.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-4 py-2 rounded-full text-sm font-bold text-slate-600 hover:text-indigo-600 hover:bg-white/50 transition-all flex items-center gap-2"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-800 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={spring}
              className="absolute top-[calc(100%+12px)] left-0 right-0 glass-bright rounded-[2rem] p-6 shadow-2xl md:hidden flex flex-col gap-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-6 py-4 rounded-2xl bg-white/40 text-lg font-bold text-slate-800 flex items-center gap-4 active:scale-95 transition-transform"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="p-2 bg-indigo-50 rounded-xl text-indigo-600">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
