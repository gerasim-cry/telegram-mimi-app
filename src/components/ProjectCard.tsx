import React from 'react';
import { TechBadge } from './TechBadge';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, techStack, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group glass-card overflow-hidden rounded-2xl transition-all hover:border-[#c4d0ee]/40 hover:shadow-[0_0_20px_rgba(196,208,238,0.1)]"
    >
      <button 
        type="button"
        onClick={onClick}
        className="relative block aspect-video w-full cursor-zoom-in overflow-hidden bg-[#252a3a]"
      >
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#30364a]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </button>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-[#c4d0ee] transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-300">{description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
