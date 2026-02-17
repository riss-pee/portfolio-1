
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Terminal, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const spring = { type: "spring", stiffness: 200, damping: 20 };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...spring, delay: 0.2 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-bright text-indigo-700 text-[10px] font-black uppercase tracking-[0.2em] mb-8 border-white shadow-sm"
          >
            <Sparkles size={14} className="animate-pulse" />
            MCA Student • Full-Stack Dev
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter">
            Creative <br />
            <span className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Developer
            </span>
          </h1>
          
          <p className="mt-8 text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
            Bridging hardware and software with fluid design. Based in {PERSONAL_INFO.location}.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-5">
            <motion.a 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="px-10 py-5 bg-indigo-600 text-white rounded-[2rem] font-bold shadow-2xl shadow-indigo-500/30 hover:bg-indigo-700 transition-all flex items-center gap-3 group"
            >
              Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.button 
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-bright text-slate-800 rounded-[2rem] font-bold border-white/80 hover:bg-white/90 transition-all flex items-center gap-3 shadow-lg"
            >
              <Download size={20} /> CV
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ ...spring, delay: 0.4 }}
          className="relative perspective-1000 hidden lg:block"
        >
          <motion.div 
            whileHover={{ rotateX: 5, rotateY: -5 }}
            className="relative z-10 glass rounded-[3rem] p-10 shadow-2xl border-white/60 shadow-indigo-900/5 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-2xl"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-3 h-3 rounded-full bg-rose-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>

            <div className="font-mono text-sm leading-relaxed space-y-1">
              <p><span className="text-purple-600 font-bold">interface</span> <span className="text-indigo-600">Developer</span> &#123;</p>
              <p className="ml-6"><span className="text-slate-400">name:</span> <span className="text-emerald-600">"{PERSONAL_INFO.name}"</span>;</p>
              <p className="ml-6"><span className="text-slate-400">stack:</span> [<span className="text-indigo-500">"React"</span>, <span className="text-indigo-500">"Java"</span>];</p>
              <p className="ml-6"><span className="text-slate-400">passion:</span> <span className="text-rose-500">"Liquid UI"</span>;</p>
              <p className="ml-6"><span className="text-slate-400">active:</span> <span className="text-amber-600">true</span>;</p>
              <p>&#125;</p>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-12 -right-12 w-48 h-48 glass p-3 rounded-[3rem] shadow-2xl z-20 border-white/80"
          >
            <img src="https://picsum.photos/seed/rsp/400/400" alt="Avatar" className="w-full h-full object-cover rounded-[2.5rem]" />
          </motion.div>
          
          <div className="absolute -bottom-10 -left-10 glass-bright p-8 rounded-[2.5rem] shadow-2xl z-20 border-white/80 max-w-[220px]">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-200">
                <Terminal size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Experience</p>
                <p className="text-lg font-bold text-slate-900">MCA Student</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
