
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS_DATA.map(s => s.category)));

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">My Toolkit</h2>
        <motion.h3 
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="text-4xl font-bold text-slate-900 cursor-default"
        >
          Technical Proficiency
        </motion.h3>
        <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
          Equipped with a diverse set of technologies, ranging from robust backend systems to modern, responsive frontend frameworks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-6"
          >
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-2">{cat}</h4>
            <div className="space-y-4">
              {SKILLS_DATA.filter(s => s.category === cat).map((skill) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                    <span className="text-xs text-indigo-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full ${
                        cat === 'Language' ? 'bg-indigo-500' :
                        cat === 'Frontend' ? 'bg-emerald-500' :
                        cat === 'Backend' ? 'bg-purple-500' : 'bg-slate-500'
                      }`}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Featured Skills Grid */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {['Java', 'Python', 'React', 'Tailwind', 'Firebase', 'Supabase'].map((item) => (
          <div key={item} className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:-translate-y-2 transition-transform shadow-sm">
            <div className="w-12 h-12 mb-4 bg-white rounded-xl shadow-inner flex items-center justify-center">
              <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${item.toLowerCase()}/${item.toLowerCase()}-original.svg`} 
                   alt={item} 
                   className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity"
                   onError={(e) => { (e.target as any).src = 'https://lucide.dev/api/icon/code-2?size=32'; }}
              />
            </div>
            <span className="text-xs font-bold text-slate-600">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
