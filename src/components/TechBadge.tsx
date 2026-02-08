import React from 'react';

interface TechBadgeProps {
  name: string;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name }) => {
  return (
    <span className="inline-flex items-center rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm transition-colors hover:bg-[#c4d0ee]/20 hover:border-[#c4d0ee]/50 hover:text-[#c4d0ee] hover:shadow-[0_0_10px_rgba(196,208,238,0.2)]">
      {name}
    </span>
  );
};
