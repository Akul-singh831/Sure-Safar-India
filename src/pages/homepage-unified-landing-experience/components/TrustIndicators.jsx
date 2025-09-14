import React from 'react';
import { useTranslation } from 'react-i18next';

const TrustIndicators = () => {
  const { t } = useTranslation();

  const indicators = [
    {
      value: t('24/7 Monitoring'),
    },
    {
      value: t('99.9% Uptime'),
    },
    {
      value: t('10M+ Users'),
    },
  ];

  return (
    <section className="py-20 lg:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            {t('Trusted by the Nation')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">
            {t('trustSubtitle')}
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {indicators.map((indicator) => (
            <div key={indicator.value} className="text-center p-8 bg-card rounded-lg shadow-soft">
              <p className="text-3xl font-bold text-primary">{indicator.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;