
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin, Send, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    githubUrl: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    githubUrl: ''
  });

  const validateGitHub = (url: string) => {
    if (!url) return '';
    const regex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+\/?$/;
    if (!regex.test(url)) {
      return 'Please enter a valid GitHub profile URL (e.g., github.com/username)';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'githubUrl') {
      setErrors(prev => ({ ...prev, githubUrl: validateGitHub(value) }));
    }
  };

  const inputClasses = "w-full px-6 py-4 rounded-2xl bg-white/50 border border-slate-100 outline-none transition-all duration-300 placeholder:text-slate-300 focus:bg-white focus:border-indigo-400 focus:ring-4 focus:ring-indigo-500/10 focus:shadow-[0_0_20px_rgba(99,102,241,0.1)]";

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
          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-lg font-bold text-slate-800 hover:text-indigo-600 transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
              <a href={`tel:${PERSONAL_INFO.phone}`} className="text-lg font-bold text-slate-800 hover:text-emerald-600 transition-colors">
                {PERSONAL_INFO.phone}
              </a>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-sky-500/5 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-all">
              <Linkedin size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">LinkedIn</p>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-lg font-bold text-slate-800 hover:text-sky-600 transition-colors">
                Rosangpuia Chhakchhuak
              </a>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass p-8 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Location</p>
              <p className="text-lg font-bold text-slate-800">{PERSONAL_INFO.location}</p>
            </div>
          </motion.div>
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
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className={inputClasses} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" 
                    className={inputClasses} 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What are you interested in?" 
                    className={inputClasses} 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 flex items-center gap-1">
                    GitHub URL <span className="text-[10px] lowercase font-normal opacity-60">(optional)</span>
                  </label>
                  <div className="relative">
                    <input 
                      type="text" 
                      name="githubUrl"
                      value={formData.githubUrl}
                      onChange={handleChange}
                      placeholder="github.com/username" 
                      className={`${inputClasses} ${
                        errors.githubUrl 
                        ? 'border-red-300 focus:ring-red-500/20 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.1)]' 
                        : ''
                      }`} 
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                      <Github size={18} />
                    </div>
                  </div>
                  {errors.githubUrl && (
                    <p className="text-[10px] text-red-500 font-bold ml-1 animate-pulse">{errors.githubUrl}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Your Message..." 
                  className={inputClasses}
                ></textarea>
              </div>
              <motion.button 
                whileHover={!errors.githubUrl ? { 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(79, 70, 229, 0.2), 0 8px 10px -6px rgba(79, 70, 229, 0.2)" 
                } : {}}
                whileTap={!errors.githubUrl ? { scale: 0.98 } : {}}
                disabled={!!errors.githubUrl}
                className={`w-full py-4 font-bold rounded-2xl shadow-xl flex items-center justify-center gap-3 transition-all duration-300 ${
                  errors.githubUrl 
                  ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
                  : 'bg-indigo-600 text-white shadow-indigo-100/50 hover:bg-indigo-700'
                }`}
              >
                Send Message <Send size={20} />
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
