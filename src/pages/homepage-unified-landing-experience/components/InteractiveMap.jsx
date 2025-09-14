import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/ui/Button';

const InteractiveMap = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-24 bg-background-alt">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            {t('Real-time Threat Monitoring')}
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">
            {t('mapSubtitle')}
          </p>
          <div className="mt-8">
            <Button size="lg" variant="secondary">
              {t('Explore the Map')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;