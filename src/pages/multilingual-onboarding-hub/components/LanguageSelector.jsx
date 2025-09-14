import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LanguageSelector = ({ selectedLanguage, onLanguageSelect, onContinue }) => {
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', popular: true },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', popular: true },
    { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', popular: true },
    { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', popular: true },
    { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', popular: true },
    { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', popular: true },
    { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', popular: false },
    { code: 'zh', name: 'Chinese', nativeName: '中文', flag: '🇨🇳', popular: false },
    { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', popular: false },
    { code: 'ar', name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', popular: false },
    { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇵🇹', popular: false },
    { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', popular: false },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', popular: false },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', popular: false },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', popular: false },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', popular: false }
  ];

  const [showAll, setShowAll] = useState(false);
  const popularLanguages = languages?.filter(lang => lang?.popular);
  const otherLanguages = languages?.filter(lang => !lang?.popular);

  return (
    <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
      <div className="text-center mb-8">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Globe" size={32} color="white" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Choose Your Language</h2>
        <p className="text-text-secondary">Select your preferred language for the best experience</p>
      </div>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
            <Icon name="Star" size={20} className="text-secondary mr-2" />
            Popular Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {popularLanguages?.map((language) => (
              <button
                key={language?.code}
                onClick={() => onLanguageSelect(language)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-medium ${
                  selectedLanguage?.code === language?.code
                    ? 'border-primary bg-primary/5 shadow-medium'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{language?.flag}</span>
                  <div className="text-left">
                    <div className="font-medium text-text-primary">{language?.nativeName}</div>
                    <div className="text-sm text-text-secondary">{language?.name}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {showAll && (
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Languages" size={20} className="text-accent mr-2" />
              More Languages
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {otherLanguages?.map((language) => (
                <button
                  key={language?.code}
                  onClick={() => onLanguageSelect(language)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-medium ${
                    selectedLanguage?.code === language?.code
                      ? 'border-primary bg-primary/5 shadow-medium'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{language?.flag}</span>
                    <div className="text-left">
                      <div className="font-medium text-text-primary">{language?.nativeName}</div>
                      <div className="text-sm text-text-secondary">{language?.name}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary hover:text-primary/80 font-medium transition-colors duration-200 flex items-center mx-auto"
          >
            {showAll ? 'Show Less' : 'Show More Languages'}
            <Icon name={showAll ? "ChevronUp" : "ChevronDown"} size={20} className="ml-1" />
          </button>
        </div>
      </div>
      {selectedLanguage && (
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{selectedLanguage?.flag}</span>
              <div>
                <div className="font-medium text-text-primary">{selectedLanguage?.nativeName}</div>
                <div className="text-sm text-text-secondary">Selected Language</div>
              </div>
            </div>
            <Button variant="default" onClick={onContinue} iconName="ArrowRight" iconPosition="right">
              Continue
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;