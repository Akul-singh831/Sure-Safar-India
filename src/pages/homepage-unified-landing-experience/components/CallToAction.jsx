import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary">
          {t('ctaTitle')}
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-text-secondary">
          {t('ctaSubtitle')}
        </p>
        <div className="mt-8">
          <Button size="lg">
            {t('Register Now')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;