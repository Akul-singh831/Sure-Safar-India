import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PartnershipTierCard from './components/PartnershipTierCard';
import APIDocumentationSection from './components/APIDocumentationSection';
import IntegrationShowcase from './components/IntegrationShowcase';
import SuccessStoriesSection from './components/SuccessStoriesSection';
import PartnerLoginSection from './components/PartnerLoginSection';
import ResourcesSection from './components/ResourcesSection';

const IntegrationPartnershipPortal = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const partnershipTiers = [
    {
      name: "Essential Partner",
      description: "For small hotels & local tour operators",
      features: [
        "Basic API access",
        "Tourist registration system",
        "Emergency alert integration",
        "Standard documentation"
      ],
      pricing: "Coming Soon",
      status: "upcoming",
      integrationTime: "1-2 weeks",
      supportLevel: "Email Support",
      icon: "Building",
      color: "bg-blue-500"
    },
    {
      name: "Professional Partner",
      description: "For mid-size hotels & tour companies",
      features: [
        "Full API access",
        "Real-time location tracking",
        "Custom dashboard integration",
        "Priority phone support",
        "Advanced analytics",
        "Webhook notifications"
      ],
      pricing: "Contact Us",
      status: "available",
      integrationTime: "2-3 weeks",
      supportLevel: "Phone & Email",
      icon: "Star",
      color: "bg-primary"
    },
    {
      name: "Enterprise Partner",
      description: "For large hotel chains & organizations",
      features: [
        "Dedicated account manager",
        "Custom feature development",
        "24/7 priority support",
        "Advanced security features",
        "Multi-property management",
        "SLA guarantees"
      ],
      pricing: "Custom Quote",
      status: "available",
      integrationTime: "3-4 weeks",
      supportLevel: "24/7 Dedicated",
      icon: "Crown",
      color: "bg-gradient-to-r from-yellow-500 to-orange-500"
    },
    {
      name: "Government Partner",
      description: "For government agencies & tourism boards",
      features: [
        "Government-grade security",
        "Multi-agency coordination",
        "Policy compliance tools",
        "Public safety analytics",
        "Dedicated infrastructure",
        "Compliance monitoring"
      ],
      pricing: "By Proposal",
      status: "available",
      integrationTime: "4-6 weeks",
      supportLevel: "Dedicated Team",
      icon: "Shield",
      color: "bg-red-500"
    }
  ];

  const navigationSections = [
    { id: 'overview', name: 'Overview', icon: 'Home' },
    { id: 'tiers', name: 'Partnership Tiers', icon: 'Layers' },
    { id: 'showcase', name: 'Integration Showcase', icon: 'Monitor' },
    { id: 'api', name: 'API Documentation', icon: 'Code' },
    { id: 'success', name: 'Success Stories', icon: 'Trophy' },
    { id: 'resources', name: 'Resources', icon: 'BookOpen' },
    { id: 'portal', name: 'Partner Portal', icon: 'Lock' }
  ];

  const renderOverview = () => (
    <div className="space-y-16">
      <div className="text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-primary/20">
          <Icon name="Handshake" size={40} className="text-primary" />
        </div>
        <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6 text-balance">
          Integration & Partnership Portal
        </h1>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
          Transform your tourism operations with SafeGuard's comprehensive safety platform. 
          Join hundreds of partners who have revolutionized their guest safety protocols.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            variant="default" 
            size="lg" 
            iconName="ArrowRight" 
            iconPosition="right"
            onClick={() => setActiveSection('tiers')}
            className="shadow-strong hover-glow"
          >
            Explore Partnerships
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            iconName="Play" 
            iconPosition="left"
          >
            Watch Demo
          </Button>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {[
          { icon: 'Zap', title: 'Rapid Integration', description: 'Get up and running in weeks with our comprehensive SDKs and clear documentation.' },
          { icon: 'Shield', title: 'Enterprise Security', description: 'Bank-grade security with end-to-end encryption and international compliance.' },
          { icon: 'TrendingUp', title: 'Proven ROI', description: 'Partners see significant ROI through improved safety and customer confidence.' }
        ].map((benefit, index) => (
          <div key={index} className="bg-card border border-border rounded-xl p-8 transition-all duration-300 hover:shadow-strong hover:-translate-y-2">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4"><Icon name={benefit.icon} size={28} /></div>
            <h3 className="text-xl font-semibold text-text-primary mb-3">{benefit.title}</h3>
            <p className="text-text-secondary">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>Integration & Partnership Portal - SafeGuard India</title>
        <meta name="description" content="Partner with SafeGuard India to integrate advanced safety features into your tourism operations. Comprehensive API documentation, SDKs, and support for hotels, tour operators, and travel agencies." />
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap justify-center gap-1 bg-card border border-border rounded-xl p-2 shadow-soft">
              {navigationSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-smooth ${
                    activeSection === section.id
                      ? 'bg-primary text-primary-foreground shadow-medium'
                      : 'text-text-secondary hover:text-text-primary hover:bg-muted'
                  }`}
                >
                  <Icon name={section.icon} size={16} />
                  <span className="hidden sm:inline">{section.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            {activeSection === 'overview' && renderOverview()}
            
            {activeSection === 'tiers' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-text-primary mb-4">Partnership Tiers</h2>
                  <p className="text-text-secondary max-w-2xl mx-auto">
                    Choose the partnership level that best fits your organization's needs and scale.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 items-stretch">
                  {partnershipTiers.map((tier, index) => (
                    <PartnershipTierCard 
                      key={index} 
                      tier={tier} 
                      isPopular={index === 1} 
                    />
                  ))}
                </div>
              </div>
            )}
            {activeSection === 'showcase' && <IntegrationShowcase />}
            {activeSection === 'api' && <APIDocumentationSection />}
            {activeSection === 'success' && <SuccessStoriesSection />}
            {activeSection === 'resources' && <ResourcesSection />}
            {activeSection === 'portal' && <PartnerLoginSection />}
          </div>

          <div className="mt-16 bg-foreground text-background rounded-2xl p-12 text-center shadow-strong">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Tourist Safety?</h2>
            <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto">
              Join the SafeGuard ecosystem and be part of India's revolutionary approach to tourist protection.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <Button 
                variant="secondary" 
                size="lg" 
                iconName="Calendar" 
                iconPosition="left"
                className="shadow-strong hover-glow"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IntegrationPartnershipPortal;

