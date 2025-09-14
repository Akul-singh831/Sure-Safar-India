import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '../../../components/AppIcon';

const TechnologyShowcase = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      name: t('AI & Machine Learning'),
      icon: 'BrainCircuit',
    },
    {
      name: t('Predictive Analytics'),
      icon: 'TrendingUp',
    },
    {
      name: t('Secure Communication'),
      icon: 'MessageCircle',
    },
  ];

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            {t('Our Technology')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">
            {t('techSubtitle')}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="text-center p-8 bg-card rounded-lg shadow-soft">
              <Icon name={tech.icon} size={48} className="mx-auto text-primary" />
              <h3 className="mt-6 text-xl font-semibold text-text-primary">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyShowcase;