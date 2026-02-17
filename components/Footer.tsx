
import React from 'react';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div>
            <h4 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Rosangpuia C.
            </h4>
            <p className="mt-2 text-slate-500 font-medium">MCA Student | Full-Stack Developer</p>
          </div>
          <div className="flex items-center gap-4 mt-8 md:mt-0">
            <a href={PERSONAL_INFO.linkedin} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-indigo-600 shadow-sm hover:shadow-md transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-slate-900 shadow-sm hover:shadow-md transition-all">
              <Github size={20} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-rose-500 shadow-sm hover:shadow-md transition-all">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Rosangpuia Chhakchhuak. Built with React & Tailwind.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
