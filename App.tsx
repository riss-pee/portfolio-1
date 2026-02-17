
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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
  const { scrollY } = useScroll();

  // Parallax transforms for background blobs
  const y1 = useTransform(scrollY, [0, 5000], [0, 800]);
  const y2 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y3 = useTransform(scrollY, [0, 5000], [0, 300]);
  const y4 = useTransform(scrollY, [0, 5000], [0, -200]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const springConfig = { type: "spring", stiffness: 260, damping: 20 };

  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-700 relative">
      {/* Liquid Parallax Background Elements */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div style={{ y: y1 }} className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[120px] animate-blob"></motion.div>
        <motion.div style={{ y: y2 }} className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-purple-200/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></motion.div>
        <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-pink-100/40 rounded-full blur-[120px] animate-blob animation-delay-4000"></motion.div>
        <motion.div style={{ y: y4 }} className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-blue-100/30 rounded-full blur-[80px] animate-blob"></motion.div>
      </div>

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-white"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)", transition: { duration: 0.6, ease: "easeInOut" } }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
              className="flex flex-col items-center"
            >
              <div className="w-16 h-16 border-[6px] border-indigo-50 border-t-indigo-600 rounded-full animate-spin shadow-inner"></div>
              <p className="mt-6 text-indigo-600 font-bold tracking-[0.3em] uppercase text-[10px]">Processing Reality</p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springConfig, duration: 0.8 }}
            className="relative"
          >
            <Navbar />
            <section id="hero"><Hero /></section>
            <section id="about" className="py-24"><About /></section>
            <section id="skills" className="py-24 relative"><Skills /></section>
            <section id="projects" className="py-24"><Projects /></section>
            <section id="experience" className="py-24 relative"><Experience /></section>
            <section id="certifications" className="py-24"><Certifications /></section>
            <section id="contact" className="py-24"><Contact /></section>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
