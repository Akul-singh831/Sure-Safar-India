import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const PrivacyTransparency = () => {
  const [activeToggle, setActiveToggle] = useState(null);

  const dataCollectionItems = [
    {
      id: 'location',
      title: 'Location Data',
      description: 'Real-time GPS coordinates for emergency response',
      collected: 'Continuous when app is active',
      purpose: 'Emergency response and safety zone alerts',
      retention: '30 days after trip completion',
      sharing: 'Emergency responders only during incidents',
      icon: 'MapPin',
      color: 'text-primary'
    },
    {
      id: 'identity',
      title: 'Identity Information',
      description: 'Passport details and emergency contacts',
      collected: 'During registration and KYC',
      purpose: 'Identity verification and emergency contact',
      retention: 'Duration of account + 2 years',
      sharing: 'Authorities only during emergencies',
      icon: 'User',
      color: 'text-secondary'
    },
    {
      id: 'communication',
      title: 'Communication Data',
      description: 'Emergency calls and messages',
      collected: 'During emergency situations only',
      purpose: 'Incident response and resolution',
      retention: '7 years for legal compliance',
      sharing: 'Law enforcement as required',
      icon: 'MessageCircle',
      color: 'text-accent'
    },
    {
      id: 'device',
      title: 'Device Information',
      description: 'Device type, OS version, and app usage',
      collected: 'Automatically when using app',
      purpose: 'Technical support and app improvement',
      retention: '1 year from last activity',
      sharing: 'Never shared with third parties',
      icon: 'Smartphone',
      color: 'text-trust'
    }
  ];

  const privacyPrinciples = [
    {
      title: "Data Minimization",
      description: "We collect only the minimum data necessary for your safety and security.",
      icon: "Minimize"
    },
    {
      title: "Purpose Limitation",
      description: "Your data is used exclusively for safety purposes, never for commercial gain.",
      icon: "Target"
    },
    {
      title: "Transparency",
      description: "Complete visibility into what data we collect, why, and how it's protected.",
      icon: "Eye"
    },
    {
      title: "User Control",
      description: "You maintain control over your data with options to view, modify, or delete.",
      icon: "Settings"
    }
  ];

  const toggleDetails = (id) => {
    setActiveToggle(activeToggle === id ? null : id);
  };

  return (
    <section className="bg-card rounded-xl p-8 shadow-medium border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Privacy & Transparency</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          We believe in complete transparency about data collection and usage. Understand exactly what information we collect and why it's essential for your safety.
        </p>
      </div>
      {/* Privacy Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {privacyPrinciples?.map((principle, index) => (
          <div key={index} className="text-center p-6 bg-muted/20 rounded-lg hover-lift transition-smooth">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name={principle?.icon} size={24} className="text-primary" />
            </div>
            <h3 className="font-semibold text-text-primary mb-2">{principle?.title}</h3>
            <p className="text-sm text-text-secondary">{principle?.description}</p>
          </div>
        ))}
      </div>
      {/* Data Collection Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-text-primary mb-6">Data Collection Transparency</h3>
        {dataCollectionItems?.map((item) => (
          <div key={item?.id} className="border border-border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleDetails(item?.id)}
              className="w-full p-4 bg-muted/10 hover:bg-muted/20 transition-smooth flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg bg-white shadow-soft ${item?.color}`}>
                  <Icon name={item?.icon} size={20} />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-text-primary">{item?.title}</h4>
                  <p className="text-sm text-text-secondary">{item?.description}</p>
                </div>
              </div>
              <Icon 
                name="ChevronDown" 
                size={20} 
                className={`text-text-secondary transition-transform duration-200 ${
                  activeToggle === item?.id ? 'rotate-180' : ''
                }`}
              />
            </button>
            
            {activeToggle === item?.id && (
              <div className="p-6 bg-card border-t border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-text-primary mb-2 flex items-center">
                      <Icon name="Clock" size={16} className="mr-2 text-primary" />
                      When Collected
                    </h5>
                    <p className="text-sm text-text-secondary mb-4">{item?.collected}</p>
                    
                    <h5 className="font-medium text-text-primary mb-2 flex items-center">
                      <Icon name="Target" size={16} className="mr-2 text-secondary" />
                      Purpose
                    </h5>
                    <p className="text-sm text-text-secondary">{item?.purpose}</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-text-primary mb-2 flex items-center">
                      <Icon name="Archive" size={16} className="mr-2 text-accent" />
                      Retention Period
                    </h5>
                    <p className="text-sm text-text-secondary mb-4">{item?.retention}</p>
                    
                    <h5 className="font-medium text-text-primary mb-2 flex items-center">
                      <Icon name="Share" size={16} className="mr-2 text-trust" />
                      Data Sharing
                    </h5>
                    <p className="text-sm text-text-secondary">{item?.sharing}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Privacy Controls */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Your Privacy Rights</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Icon name="Eye" size={20} className="text-primary" />
            <span className="text-sm text-text-secondary">View all collected data</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Edit" size={20} className="text-secondary" />
            <span className="text-sm text-text-secondary">Modify your information</span>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Trash2" size={20} className="text-error" />
            <span className="text-sm text-text-secondary">Delete your account</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyTransparency;