import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { ImageViewer } from '@/components/ImageViewer';

export const Portfolio: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-8"
      >
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">{t('portfolio.title')}</h1>
          <p className="text-sm text-slate-400">Check out my recent work</p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title[lang]}
              description={project.description[lang]}
              image={project.image}
              techStack={project.techStack}
              onClick={() => setSelectedImage(project.image)}
            />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center pb-8">
          <button
            onClick={() => navigate('/contacts')}
            className="w-full max-w-sm rounded-xl bg-[#c4d0ee] px-6 py-4 font-bold text-[#30364a] shadow-[0_0_20px_rgba(196,208,238,0.3)] transition-all hover:bg-[#dbe4fa] hover:shadow-[0_0_30px_rgba(196,208,238,0.5)] active:scale-95"
          >
            {t('portfolio.order')}
          </button>
        </div>
      </motion.div>

      <ImageViewer 
        isOpen={!!selectedImage}
        imageUrl={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
};
