
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import { EXPERIENCE_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div>
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">Experience</h2>
          <motion.h3 
            whileHover={{ scale: 1.02, x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-4xl font-bold text-slate-900 cursor-default"
          >
            Internships & Professional Growth
          </motion.h3>
        </div>
      </div>

      <div className="space-y-12">
        {EXPERIENCE_DATA.map((exp, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden"
          >
            {/* Background Gradient Detail */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-200">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">{exp.company}</h4>
                    <p className="text-indigo-600 font-semibold">{exp.role}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <span className="text-sm font-bold text-slate-400 tracking-wider uppercase">Duration</span>
                  <p className="text-slate-600 font-medium">{exp.duration}</p>
                </div>
              </div>
              
              <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="space-y-4">
                  {exp.description.map((point, pIdx) => (
                    <div key={pIdx} className="flex gap-4 group">
                      <div className="mt-1 flex-shrink-0">
                        <CheckCircle2 size={20} className="text-emerald-500" />
                      </div>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Visual Stats / Achievements Row */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { label: "Backend Integration", value: "Firestore", color: "indigo" },
          { label: "Platform Focus", value: "Cross-Platform", color: "purple" },
          { label: "Security Focus", value: "Log Monitoring", color: "emerald" },
          { label: "Team Environment", value: "Agile Dev", color: "slate" }
        ].map((stat, i) => (
          <div key={i} className="glass p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{stat.label}</span>
            <span className={`text-xl font-bold text-${stat.color}-600`}>{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
