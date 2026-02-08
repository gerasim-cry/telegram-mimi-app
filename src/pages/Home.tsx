import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Briefcase, ChevronRight, Code2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WebApp from '@twa-dev/sdk';
import { stack } from '@/data/stack';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
  }, []);

  const handleContact = () => {
    navigate('/contacts');
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center space-y-10 pb-8 pt-4 text-center"
    >
      {/* Hero Section */}
      <motion.div variants={item} className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-[#c4d0ee] blur opacity-50 animate-pulse"></div>
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-[#30364a] bg-[#3a415a] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300" 
              alt="Profile" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-2 h-7 w-7 rounded-full bg-green-500 border-4 border-[#30364a] shadow-lg" />
        </div>

        <div className="space-y-3 px-4">
          <h1 className="text-3xl font-extrabold tracking-tight">
             <span className="text-gradient">{t('home.role')}</span>
          </h1>
          <p className="mx-auto max-w-[300px] text-slate-300 text-sm leading-relaxed">
            {t('home.description')}
          </p>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div variants={item} className="w-full space-y-6">
        <div className="flex items-center justify-center gap-2 opacity-80">
          <Code2 size={16} className="text-[#c4d0ee]" />
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
            {t('home.stackTitle')}
          </h2>
        </div>
        
        <div className="grid grid-cols-5 gap-2 px-4 max-w-[400px] mx-auto place-items-center w-full">
          {stack.map((tech) => (
            <div 
              key={tech.name}
              className="group glass flex flex-col items-center gap-1.5 rounded-xl p-2 w-full aspect-square justify-center transition-all duration-300 hover:bg-[#c4d0ee]/20 hover:border-[#c4d0ee]/50 hover:shadow-[0_0_15px_rgba(196,208,238,0.2)] hover:-translate-y-1 hover:scale-105"
            >
              <img 
                src={tech.iconUrl || `https://cdn.simpleicons.org/${tech.slug}`} 
                alt={tech.name}
                className="h-6 w-6 transition-all duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <span className="text-[9px] font-medium text-slate-400 transition-colors group-hover:text-[#c4d0ee]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.div variants={item} className="flex w-full max-w-sm flex-col gap-4 px-2">
        <button
          onClick={() => navigate('/portfolio')}
          className="glass group flex w-full items-center justify-between rounded-xl px-6 py-4 font-semibold text-slate-200 transition-all hover:bg-[#c4d0ee]/10 hover:border-[#c4d0ee]/30 active:scale-95"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#c4d0ee]/10 text-[#c4d0ee] transition-colors group-hover:bg-[#c4d0ee]/20 group-hover:text-white">
              <Briefcase size={18} />
            </div>
            {t('home.viewPortfolio')}
          </div>
          <ChevronRight size={18} className="text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-[#c4d0ee]" />
        </button>

        <button
          onClick={handleContact}
          className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#c4d0ee] px-6 py-4 font-bold text-[#30364a] shadow-[0_0_20px_rgba(196,208,238,0.3)] transition-all hover:bg-[#dbe4fa] hover:shadow-[0_0_30px_rgba(196,208,238,0.5)] active:scale-95"
        >
          <Send size={20} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          {t('home.order')}
        </button>
      </motion.div>
    </motion.div>
  );
};
