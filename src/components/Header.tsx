import React from 'react';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex h-16 items-center justify-between px-6">
      <div className="text-xl font-bold tracking-tight">
        <span className="text-gradient">Portfolio</span>
      </div>
      <button
        onClick={toggleLanguage}
        className="glass rounded-full px-4 py-1.5 text-xs font-bold text-slate-200 transition-transform active:scale-95 hover:bg-white/10"
      >
        {i18n.language === 'ru' ? '🇬🇧 EN' : '🇷🇺 RU'}
      </button>
    </header>
  );
};
