import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Mail, User } from 'lucide-react';
import WebApp from '@twa-dev/sdk';

export const Contacts: React.FC = () => {
  const { t } = useTranslation();

  const handleTelegramContact = () => {
    WebApp.openTelegramLink('https://t.me/your_username');
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:contact@example.com';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center justify-center space-y-10 pt-8"
    >
      <div className="text-center space-y-4">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border border-white/10 shadow-xl">
          <User size={32} className="text-violet-300" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-white">{t('contacts.title')}</h1>
        <p className="text-slate-400">Feel free to reach out anytime</p>
      </div>

      <div className="w-full max-w-xs space-y-4">
        <button
          onClick={handleTelegramContact}
          className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#c4d0ee] px-6 py-4 font-bold text-[#30364a] shadow-[0_0_20px_rgba(196,208,238,0.3)] transition-all hover:bg-[#dbe4fa] hover:shadow-[0_0_30px_rgba(196,208,238,0.5)] active:scale-95"
        >
          <Send size={24} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          {t('contacts.cta')}
        </button>

        <button
          onClick={handleEmailContact}
          className="glass group flex w-full items-center justify-center gap-3 rounded-xl px-6 py-4 font-semibold text-slate-200 transition-all hover:bg-[#c4d0ee]/10 active:scale-95"
        >
          <Mail size={24} />
          {t('contacts.email')}
        </button>
      </div>
    </motion.div>
  );
};
