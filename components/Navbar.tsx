
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, User, Code, Briefcase, FileText, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-6 py-4 ${scrolled ? 'mt-4 mx-auto max-w-5xl rounded-full glass shadow-lg' : 'bg-transparent'}`}>
      <div className="flex items-center justify-between">
        <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          RC.
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 glass rounded-2xl mx-6 p-6 shadow-xl md:hidden"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-slate-700 flex items-center gap-3"
                onClick={() => setIsOpen(false)}
              >
                {item.icon} {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
