import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const navigationItems = [
    { name: t('Home'), path: '/homepage-unified-landing-experience', icon: 'Home' },
    { name: t('Command Center'), path: '/responder-command-dashboard', icon: 'Activity' },
    { name: t('Trust Center'), path: '/trust-security-center', icon: 'Lock' },
  ];

  const moreItems = [
    { name: t('Onboarding'), path: '/multilingual-onboarding-hub', icon: 'Users' },
    { name: t('Partners'), path: '/integration-partnership-portal', icon: 'Handshake' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
    { code: 'te', name: 'తెలుగు', flag: '🇮🇳' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/homepage-unified-landing-experience" className="flex items-center space-x-3 hover-lift">
              <div className="relative">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-secondary rounded-full animate-pulse-soft"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-primary">Sure Safar</h1>
                <p className="text-xs text-text-secondary -mt-1">{t('Invisible Protection, Visible Innovation')}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth hover:bg-muted ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-medium'
                    : 'text-text-primary hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={18} />
                <span className="font-medium">{item?.name}</span>
              </Link>
            ))}
            
            {/* More Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth hover:bg-muted text-text-primary hover:text-primary">
                <Icon name="MoreHorizontal" size={18} />
                <span className="font-medium">{t('More')}</span>
                <Icon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-strong opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {moreItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`flex items-center space-x-3 px-4 py-2 hover:bg-muted transition-smooth ${
                        isActivePath(item?.path) ? 'bg-accent/10 text-accent' : 'text-text-primary'
                      }`}
                    >
                      <Icon name={item?.icon} size={16} />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Language Selector and CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
             {/* Language Selector Dropdown */}
             <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-smooth hover:bg-muted text-text-primary hover:text-primary">
                <Icon name="Globe" size={18} />
                <Icon name="ChevronDown" size={16} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-strong opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 hover:bg-muted transition-smooth ${
                        i18n.language === lang.code ? 'bg-accent/10 text-accent' : 'text-text-primary'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
              {t('Download App')}
            </Button>
            <Button variant="default" size="sm" iconName="Phone" iconPosition="left">
              {t('Emergency')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth focus-ring"
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card">
            <div className="py-4 space-y-2">
              {[...navigationItems, ...moreItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg mx-4 transition-smooth ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span className="font-medium">{item?.name}</span>
                </Link>
              ))}
              
              <div className="px-4 pt-4 border-t border-border mt-4 space-y-3">
                <Button variant="outline" fullWidth iconName="Download" iconPosition="left">
                  {t('Download App')}
                </Button>
                <Button variant="default" fullWidth iconName="Phone" iconPosition="left">
                  {t('Emergency')}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Trust Indicators Bar */}
      <div className="hidden lg:block bg-muted/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center justify-center space-x-8 text-sm text-text-secondary">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
              <span>{t('System Active')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Users" size={14} />
              <span>2,847 {t('Protected Today')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={14} />
              <span>&lt; 30s {t('Response Time')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={14} />
              <span>{t('Government Certified')}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;