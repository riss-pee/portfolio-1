
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Trophy, Users } from 'lucide-react';
import { CERTIFICATIONS, RESPONSIBILITIES } from '../constants';

const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Certifications column */}
        <div>
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">Recognition</h2>
            <h3 className="text-4xl font-bold text-slate-900">Certifications</h3>
          </div>
          <div className="space-y-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex gap-6 p-6 rounded-2xl glass hover:bg-white hover:shadow-lg transition-all border border-slate-50"
              >
                <div className="w-12 h-12 shrink-0 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">{cert.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Positions column */}
        <div>
          <div className="mb-12">
            <h2 className="text-sm font-bold tracking-[0.2em] text-purple-600 uppercase mb-2">Leadership</h2>
            <h3 className="text-4xl font-bold text-slate-900">Responsibility</h3>
          </div>
          <div className="space-y-6">
            {RESPONSIBILITIES.map((resp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center gap-6 p-6 rounded-2xl glass hover:bg-white hover:shadow-lg transition-all border border-slate-50"
              >
                <div className="w-12 h-12 shrink-0 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {idx % 2 === 0 ? <Users size={24} /> : <ShieldCheck size={24} />}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 leading-tight">{resp}</h4>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Honorary Position</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Awards Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 text-white relative overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <Trophy size={32} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase opacity-70">Major Award</p>
                <h4 className="text-2xl font-bold">Proficiency Award</h4>
                <p className="text-sm opacity-90 mt-1">HATIM – 2024 Recognition of Academic Excellence</p>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Trophy size={140} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
