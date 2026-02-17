
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Download, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-semibold uppercase tracking-wider mb-6 border border-indigo-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for Internships
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 max-w-lg leading-relaxed font-light">
            {PERSONAL_INFO.role}. Currently bridging the gap between hardware and software through innovative solutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-semibold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-2 group">
              View Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
              <Download size={20} /> Download Resume
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass rounded-3xl p-8 shadow-2xl border border-white/50">
            <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <span className="ml-4 text-xs font-mono text-slate-400">~/rosangpuia/intro.js</span>
            </div>
            <div className="font-mono text-sm leading-relaxed">
              <p className="text-indigo-600"><span className="text-slate-400">1</span> const developer = &#123;</p>
              <p className="text-indigo-600 ml-4"><span className="text-slate-400">2</span> name: <span className="text-emerald-500">"{PERSONAL_INFO.name}"</span>,</p>
              <p className="text-indigo-600 ml-4"><span className="text-slate-400">3</span> status: <span className="text-emerald-500">"MCA Final Year"</span>,</p>
              <p className="text-indigo-600 ml-4"><span className="text-slate-400">4</span> stack: [<span className="text-emerald-500">"React"</span>, <span className="text-emerald-500">"Java"</span>, <span className="text-emerald-500">"Python"</span>],</p>
              <p className="text-indigo-600 ml-4"><span className="text-slate-400">5</span> passions: [<span className="text-emerald-500">"IoT"</span>, <span className="text-emerald-500">"Web3"</span>, <span className="text-emerald-500">"UI Design"</span>],</p>
              <p className="text-indigo-600 ml-4"><span className="text-slate-400">6</span> location: <span className="text-emerald-500">"{PERSONAL_INFO.location}"</span></p>
              <p className="text-indigo-600"><span className="text-slate-400">7</span> &#125;;</p>
              <p className="text-slate-400 mt-4"><span className="text-slate-400">8</span> // Building next-gen experiences</p>
            </div>
          </div>
          
          {/* Floating Avatar Placeholder */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white p-2 rounded-full shadow-2xl z-20 border border-slate-50 overflow-hidden rotate-6">
            <img src="https://picsum.photos/seed/ros/200/200" alt="Avatar" className="w-full h-full object-cover rounded-full" />
          </div>
          
          <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl z-20 border border-white/50 max-w-[200px]">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <Terminal size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-800">4+ Major Projects</p>
                <p className="text-[10px] text-slate-500">Active Github</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
