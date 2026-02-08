import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ReviewCard } from '@/components/ReviewCard';
import { reviews } from '@/data/reviews';

export const Reviews: React.FC = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('ru') ? 'ru' : 'en';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-white">{t('reviews.title')}</h1>
        <p className="text-sm text-slate-400">What people say about my work</p>
      </div>
      
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            text={review.text[lang]}
          />
        ))}
      </div>
    </motion.div>
  );
};
