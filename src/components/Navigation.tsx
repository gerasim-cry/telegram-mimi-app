import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Briefcase, Star, Mail } from 'lucide-react';
import { cn } from '@/utils/cn';
import { motion } from 'framer-motion';

export const Navigation: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { to: '/', icon: Home, label: t('nav.home') },
    { to: '/portfolio', icon: Briefcase, label: t('nav.portfolio') },
    { to: '/reviews', icon: Star, label: t('nav.reviews') },
    { to: '/contacts', icon: Mail, label: t('nav.contacts') },
  ];

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50 flex justify-center">
      <nav className="glass flex items-center gap-1 rounded-2xl px-2 py-2 pb-safe">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              cn(
                "relative flex flex-col items-center justify-center gap-1 rounded-xl px-4 py-2 transition-all duration-300",
                isActive 
                  ? "text-white" 
                  : "text-slate-400 hover:text-slate-200"
              )
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 z-[-1] rounded-xl bg-[#c4d0ee] shadow-[0_0_15px_rgba(196,208,238,0.4)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} className={isActive ? "text-[#30364a]" : ""} />
                <span className={cn("text-[10px] font-medium", isActive ? "text-[#30364a]" : "")}>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
