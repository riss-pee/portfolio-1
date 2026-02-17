
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../constants';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div>
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">About Me</h2>
          <h3 className="text-4xl font-bold text-slate-900">Background & Education</h3>
        </div>
        <div className="hidden md:flex gap-6 mt-4 md:mt-0">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin size={16} /> {PERSONAL_INFO.location}
          </div>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Mail size={16} /> {PERSONAL_INFO.email}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="glass p-8 rounded-3xl shadow-sm border border-slate-100">
            <p className="text-slate-600 leading-relaxed text-lg italic">
              "Highly motivated, friendly, and open-minded MCA student... Possess strong time management skills with a solid foundation in programming."
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Phone</p>
                  <p className="text-slate-800 font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email</p>
                  <p className="text-slate-800 font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7"
        >
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                  <GraduationCap size={18} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">{edu.year}</span>
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">{edu.percentage}</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">{edu.qualification}</h4>
                  <p className="text-sm text-slate-500">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
