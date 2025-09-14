import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <p className="text-text-secondary">{t('copyright')}</p>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-6">
            <Link to="/about" className="text-text-secondary hover:text-primary">
              {t('About Us')}
            </Link>
            <Link to="/contact" className="text-text-secondary hover:text-primary">
              {t('Contact')}
            </Link>
            <Link to="/privacy" className="text-text-secondary hover:text-primary">
              {t('Privacy Policy')}
            </Link>
            <Link to="/terms" className="text-text-secondary hover:text-primary">
              {t('Terms of Service')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;