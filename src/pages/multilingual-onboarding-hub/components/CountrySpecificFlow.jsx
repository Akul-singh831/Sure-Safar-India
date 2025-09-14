import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CountrySpecificFlow = ({ selectedCountry, onCountrySelect, onContinue }) => {
  const countries = [
    {
      code: 'US',
      name: 'United States',
      flag: '🇺🇸',
      region: 'North America',
      specialRequirements: ['Embassy Contact Information', 'ESTA Verification', 'Travel Insurance'],
      riskLevel: 'low',
      embassyContact: '+91-11-2419-8000',
      specificInfo: 'US citizens can contact the American Embassy in New Delhi for emergency assistance.'
    },
    {
      code: 'GB',
      name: 'United Kingdom',
      flag: '🇬🇧',
      region: 'Europe',
      specialRequirements: ['GDPR Compliance', 'Brexit Travel Updates', 'NHS Travel Coverage'],
      riskLevel: 'low',
      embassyContact: '+91-11-2419-2100',
      specificInfo: 'UK citizens benefit from comprehensive GDPR data protection during their stay.'
    },
    {
      code: 'DE',
      name: 'Germany',
      flag: '🇩🇪',
      region: 'Europe',
      specialRequirements: ['GDPR Compliance', 'Schengen Area Benefits', 'Health Insurance'],
      riskLevel: 'low',
      embassyContact: '+91-11-4419-9199',
      specificInfo: 'German citizens enjoy enhanced data protection under GDPR regulations.'
    },
    {
      code: 'JP',
      name: 'Japan',
      flag: '🇯🇵',
      region: 'Asia',
      specialRequirements: ['Cultural Orientation', 'Language Support', 'Dietary Considerations'],
      riskLevel: 'low',
      embassyContact: '+91-11-4610-4610',
      specificInfo: 'Japanese tourists receive specialized cultural orientation and language assistance.'
    },
    {
      code: 'AU',
      name: 'Australia',
      flag: '🇦🇺',
      region: 'Oceania',
      specialRequirements: ['Travel Advisory Updates', 'Medical Coverage', 'Wildlife Safety'],
      riskLevel: 'low',
      embassyContact: '+91-11-4139-9900',
      specificInfo: 'Australian travelers get comprehensive safety briefings and medical support.'
    },
    {
      code: 'CA',
      name: 'Canada',
      flag: '🇨🇦',
      region: 'North America',
      specialRequirements: ['Consular Services', 'Health Coverage', 'Emergency Protocols'],
      riskLevel: 'low',
      embassyContact: '+91-11-4178-2000',
      specificInfo: 'Canadian citizens receive enhanced consular support and emergency assistance.'
    },
    {
      code: 'FR',
      name: 'France',
      flag: '🇫🇷',
      region: 'Europe',
      specialRequirements: ['GDPR Compliance', 'Cultural Exchange', 'Medical Support'],
      riskLevel: 'low',
      embassyContact: '+91-11-4319-6100',
      specificInfo: 'French tourists benefit from cultural exchange programs and medical assistance.'
    },
    {
      code: 'BR',
      name: 'Brazil',
      flag: '🇧🇷',
      region: 'South America',
      specialRequirements: ['Enhanced Security Briefing', 'Language Support', 'Cultural Orientation'],
      riskLevel: 'medium',
      embassyContact: '+91-11-4163-8200',
      specificInfo: 'Brazilian visitors receive enhanced security briefings and cultural support.'
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const filteredCountries = countries?.filter(country =>
    country?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
  );

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'low': return 'text-success bg-success/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'high': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
      <div className="text-center mb-8">
        <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="MapPin" size={32} color="white" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Select Your Country</h2>
        <p className="text-text-secondary">We'll customize your experience based on your nationality</p>
      </div>
      <div className="mb-6">
        <div className="relative">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search for your country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e?.target?.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
        {filteredCountries?.map((country) => (
          <button
            key={country?.code}
            onClick={() => onCountrySelect(country)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-medium text-left ${
              selectedCountry?.code === country?.code
                ? 'border-primary bg-primary/5 shadow-medium'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-start space-x-3">
              <span className="text-3xl">{country?.flag}</span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-text-primary">{country?.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getRiskLevelColor(country?.riskLevel)}`}>
                    {country?.riskLevel?.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-2">{country?.region}</p>
                <div className="space-y-1">
                  {country?.specialRequirements?.slice(0, 2)?.map((req, index) => (
                    <div key={index} className="flex items-center text-xs text-text-secondary">
                      <Icon name="Check" size={12} className="text-success mr-1" />
                      {req}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedCountry && (
        <div className="mt-8 pt-6 border-t border-border">
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-3 mb-3">
              <span className="text-2xl">{selectedCountry?.flag}</span>
              <div>
                <h3 className="font-semibold text-text-primary">{selectedCountry?.name}</h3>
                <p className="text-sm text-text-secondary">{selectedCountry?.region}</p>
              </div>
            </div>
            <p className="text-sm text-text-secondary mb-3">{selectedCountry?.specificInfo}</p>
            <div className="flex items-center space-x-2 text-sm">
              <Icon name="Phone" size={16} className="text-primary" />
              <span className="text-text-primary">Embassy: {selectedCountry?.embassyContact}</span>
            </div>
          </div>
          <Button variant="default" onClick={onContinue} iconName="ArrowRight" iconPosition="right" fullWidth>
            Continue with {selectedCountry?.name}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CountrySpecificFlow;