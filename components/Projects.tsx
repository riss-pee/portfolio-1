
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...Array.from(new Set(PROJECTS_DATA.map(p => p.category)))];

  const filteredProjects = filter === 'All' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
        <div>
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">Portfolio</h2>
          <h3 className="text-4xl font-bold text-slate-900">Featured Projects</h3>
        </div>
        <div className="flex flex-wrap gap-2 p-1 bg-slate-100/50 rounded-xl glass">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                filter === cat ? 'bg-white shadow-sm text-indigo-600' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group glass rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-50/50 transition-all flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-[10px] font-bold px-2 py-1 rounded-full text-slate-800 shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h4>
                <p className="text-sm text-slate-500 mb-6 flex-1 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded uppercase border border-slate-100">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 border-t border-slate-50 pt-4 mt-auto">
                  {project.github && (
                    <a href={project.github} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">
                      <Github size={14} /> Source
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  <div className="ml-auto text-slate-300">
                    <Folder size={16} />
                  </div>
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
