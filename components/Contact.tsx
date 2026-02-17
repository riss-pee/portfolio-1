
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-600 uppercase mb-2">Let's Talk</h2>
        <h3 className="text-4xl font-bold text-slate-900">Get In Touch</h3>
        <p className="mt-4 text-slate-500 max-w-xl mx-auto">
          Currently open to internships and collaborative projects. Feel free to reach out via any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-slate-800 hover:text-indigo-600 transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold text-slate-800 hover:text-emerald-600 transition-colors">
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <Linkedin size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">LinkedIn</p>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-lg font-bold text-slate-800 hover:text-sky-600 transition-colors">
                Rosangpuia Chhakchhuak
              </a>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-lg transition-all">
            <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-bold text-slate-800">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="glass p-10 rounded-3xl border border-slate-100 h-full">
            <h4 className="text-2xl font-bold text-slate-900 mb-8">Send a Message</h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                  <input type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Subject</label>
                <input type="text" placeholder="What are you interested in?" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea rows={4} placeholder="Your Message..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"></textarea>
              </div>
              <button className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
