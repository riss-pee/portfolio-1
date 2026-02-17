
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];
  const spring = { type: "spring", stiffness: 300, damping: 30 };

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[10px] font-black tracking-[0.4em] text-indigo-600 uppercase mb-4"
          >
            Featured Work
          </motion.h2>
          <motion.h3 
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-5xl font-black text-slate-900 tracking-tighter cursor-default"
          >
            Liquid Projects
          </motion.h3>
        </div>
        <div className="flex flex-wrap gap-2 p-2 glass rounded-[2rem] shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full text-xs font-bold transition-all duration-300 ${
                filter === cat ? 'bg-indigo-600 shadow-lg text-white scale-105' : 'text-slate-500 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ ...spring, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group glass rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-900/5 border-white/60 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden p-3">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-[2rem] m-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-6 right-6">
                  <div className="p-3 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl text-indigo-600 rotate-12 group-hover:rotate-0 transition-transform">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-indigo-500 px-3 py-1 bg-indigo-50 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{project.title}</h4>
                <p className="text-sm text-slate-500 mb-6 flex-1 font-medium leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map(t => (
                    <span key={t} className="text-[9px] font-black text-slate-500 bg-white/60 px-3 py-1.5 rounded-xl uppercase border border-white">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 pt-6 border-t border-white/60">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-2 text-xs font-black text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">
                      <Github size={16} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="flex items-center gap-2 text-xs font-black text-slate-600 hover:text-indigo-600 transition-colors uppercase tracking-widest">
                      <ExternalLink size={16} /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
