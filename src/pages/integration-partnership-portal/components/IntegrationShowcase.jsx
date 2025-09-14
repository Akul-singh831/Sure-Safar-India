import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IntegrationShowcase = () => {
  const [activeIntegration, setActiveIntegration] = useState('hotel');

  const integrations = {
    hotel: {
      title: 'Hotel Integration',
      description: 'Comprehensive guest safety management system',
      features: [
        'Automated guest check-in notifications',
        'Real-time guest location monitoring',
        'Emergency coordination protocols',
        'Safety dashboard for front desk',
        'Incident reporting system',
        'Guest communication tools'
      ],
      benefits: [
        '40% faster emergency response',
        '95% guest satisfaction increase',
        '60% reduction in safety incidents',
        'Enhanced reputation management'
      ],
      mockData: {
        totalGuests: 247,
        activeAlerts: 2,
        safetyScore: 98,
        responseTime: '< 2 min'
      },
      screenshot: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop'
    },
    tour: {
      title: 'Tour Operator Tools',
      description: 'Advanced group management and safety monitoring',
      features: [
        'Group management dashboard',
        'Itinerary safety scoring',
        'Real-time tourist tracking',
        'Route optimization',
        'Emergency broadcast system',
        'Guide communication tools'
      ],
      benefits: [
        '50% improvement in group safety',
        '30% increase in booking confidence',
        '80% faster incident resolution',
        'Streamlined operations'
      ],
      mockData: {
        activeGroups: 12,
        touristsTracked: 156,
        safetyAlerts: 1,
        avgSafetyScore: 94
      },
      screenshot: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop'
    },
    agency: {
      title: 'Travel Agency Portal',
      description: 'Client safety assurance and booking enhancement',
      features: [
        'Client safety profiles',
        'Destination safety reports',
        'Booking safety integration',
        'Emergency contact management',
        'Travel insurance coordination',
        'Safety certification display'
      ],
      benefits: [
        '35% increase in bookings',
        '90% client confidence boost',
        '25% reduction in cancellations',
        'Premium service positioning'
      ],
      mockData: {
        activeClients: 89,
        safetyReports: 156,
        bookingIncrease: '+35%',
        clientSatisfaction: 96
      },
      screenshot: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop'
    },
    government: {
      title: 'Government Integration',
      description: 'Multi-agency coordination and policy implementation',
      features: [
        'Inter-agency data sharing',
        'Policy compliance monitoring',
        'Statistical reporting',
        'Resource allocation optimization',
        'Public safety analytics',
        'International coordination'
      ],
      benefits: [
        '70% improved coordination',
        '45% faster policy implementation',
        '60% better resource utilization',
        'Enhanced international relations'
      ],
      mockData: {
        agencies: 15,
        dataPoints: '2.4M',
        compliance: '99.2%',
        efficiency: '+45%'
      },
      screenshot: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    }
  };

  const integrationTypes = [
    { id: 'hotel', name: 'Hotels', icon: 'Building', color: 'bg-blue-500' },
    { id: 'tour', name: 'Tour Operators', icon: 'MapPin', color: 'bg-green-500' },
    { id: 'agency', name: 'Travel Agencies', icon: 'Plane', color: 'bg-purple-500' },
    { id: 'government', name: 'Government', icon: 'Shield', color: 'bg-red-500' }
  ];

  const currentIntegration = integrations?.[activeIntegration];

  return (
    <div className="bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Integration Showcase</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Discover how different stakeholders integrate SafeGuard capabilities into their operations
        </p>
      </div>
      {/* Integration Type Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {integrationTypes?.map((type) => (
          <button
            key={type?.id}
            onClick={() => setActiveIntegration(type?.id)}
            className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-smooth hover-lift ${
              activeIntegration === type?.id
                ? 'bg-primary text-primary-foreground shadow-medium'
                : 'bg-card text-text-primary border border-border hover:border-primary/50'
            }`}
          >
            <div className={`w-8 h-8 ${type?.color} rounded-lg flex items-center justify-center`}>
              <Icon name={type?.icon} size={16} color="white" />
            </div>
            <span className="font-medium">{type?.name}</span>
          </button>
        ))}
      </div>
      {/* Integration Details */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left Column - Details */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              {currentIntegration?.title}
            </h3>
            <p className="text-text-secondary text-lg">
              {currentIntegration?.description}
            </p>
          </div>

          {/* Features */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="Star" size={20} color="var(--color-warning)" />
              <span>Key Features</span>
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {currentIntegration?.features?.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} color="var(--color-success)" />
                  </div>
                  <span className="text-sm text-text-primary">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h4 className="text-lg font-semibold text-text-primary mb-4 flex items-center space-x-2">
              <Icon name="TrendingUp" size={20} color="var(--color-success)" />
              <span>Proven Benefits</span>
            </h4>
            <div className="space-y-3">
              {currentIntegration?.benefits?.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Icon name="ArrowRight" size={16} color="var(--color-primary)" />
                  <span className="text-text-primary">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex space-x-3">
            <Button variant="default" iconName="Play" iconPosition="left">
              View Demo
            </Button>
            <Button variant="outline" iconName="Download" iconPosition="left">
              Integration Guide
            </Button>
          </div>
        </div>

        {/* Right Column - Visual */}
        <div className="space-y-6">
          {/* Mock Dashboard */}
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold text-text-primary">Live Dashboard Preview</h4>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
                <span className="text-xs text-text-secondary">Live Data</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {Object.entries(currentIntegration?.mockData)?.map(([key, value]) => (
                <div key={key} className="bg-muted rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                  <div className="text-xs text-text-secondary capitalize">
                    {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                  </div>
                </div>
              ))}
            </div>

            {/* Screenshot */}
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={currentIntegration?.screenshot}
                alt={`${currentIntegration?.title} Dashboard`}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <Button variant="default" size="sm" iconName="Play">
                  View Full Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Integration Steps */}
          <div className="bg-card border border-border rounded-xl p-6">
            <h4 className="font-semibold text-text-primary mb-4">Integration Process</h4>
            <div className="space-y-4">
              {[
                'API key registration and authentication setup',
                'Configure webhooks and data endpoints',
                'Test integration in sandbox environment',
                'Deploy to production with monitoring'
              ]?.map((step, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sm text-text-primary">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationShowcase;