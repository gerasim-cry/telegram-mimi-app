import React from 'react';
import { motion } from 'framer-motion';

interface ReviewCardProps {
  name: string;
  text: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ name, text }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 transition-colors hover:bg-white/5"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c4d0ee] text-lg font-bold text-[#30364a] shadow-lg shadow-[#c4d0ee]/20">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-slate-100">{name}</div>
          <div className="flex gap-0.5 text-yellow-500">
            {'★★★★★'.split('').map((star, i) => (
              <span key={i} className="text-xs">{star}</span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-300 italic">
        "{text}"
      </p>
    </motion.div>
  );
};
