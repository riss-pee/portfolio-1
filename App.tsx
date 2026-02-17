
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-700">
      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-indigo-600 font-medium tracking-widest uppercase text-xs">RC Portfolio</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Navbar />
            <section id="hero"><Hero /></section>
            <section id="about" className="py-20"><About /></section>
            <section id="skills" className="py-20 bg-slate-50/50"><Skills /></section>
            <section id="projects" className="py-20"><Projects /></section>
            <section id="experience" className="py-20 bg-slate-50/50"><Experience /></section>
            <section id="certifications" className="py-20"><Certifications /></section>
            <section id="contact" className="py-20 bg-white"><Contact /></section>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
