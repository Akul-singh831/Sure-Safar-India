import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnologyTabs = () => {
  const [activeTab, setActiveTab] = useState('ai-detection');

  const tabs = [
    {
      id: 'ai-detection',
      name: 'AI Threat Detection',
      icon: 'Brain',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'blockchain-security',
      name: 'Blockchain Identity',
      icon: 'Shield',
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    {
      id: 'emergency-response',
      name: 'Emergency Response',
      icon: 'Zap',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ];

  const aiDetectionSteps = [
    {
      id: 1,
      title: "Real-time Monitoring",
      description: "AI continuously analyzes tourist behavior patterns, location data, and environmental factors",
      icon: "Eye",
      status: "active"
    },
    {
      id: 2,
      title: "Risk Assessment",
      description: "Machine learning algorithms evaluate potential threats based on historical data and current context",
      icon: "AlertTriangle",
      status: "processing"
    },
    {
      id: 3,
      title: "Predictive Alerts",
      description: "System generates early warnings before situations escalate to critical levels",
      icon: "Bell",
      status: "pending"
    },
    {
      id: 4,
      title: "Automated Response",
      description: "Immediate safety protocols activated with nearest responder notification",
      icon: "Shield",
      status: "completed"
    }
  ];

  const blockchainSteps = [
    {
      id: 1,
      title: "Identity Verification",
      description: "Secure passport and visa verification using blockchain technology",
      icon: "UserCheck",
      status: "active"
    },
    {
      id: 2,
      title: "Privacy Protection",
      description: "Personal data encrypted and stored in decentralized network",
      icon: "Lock",
      status: "processing"
    },
    {
      id: 3,
      title: "Trust Network",
      description: "Verified identity shared securely with authorized responders only",
      icon: "Network",
      status: "pending"
    },
    {
      id: 4,
      title: "Immutable Records",
      description: "All safety interactions recorded permanently for accountability",
      icon: "FileText",
      status: "completed"
    }
  ];

  const emergencySteps = [
    {
      id: 1,
      title: "Alert Detection",
      description: "Emergency signal received from tourist device or AI monitoring system",
      icon: "AlertCircle",
      status: "active"
    },
    {
      id: 2,
      title: "Multi-Agency Coordination",
      description: "Police, medical, and embassy teams notified simultaneously",
      icon: "Users",
      status: "processing"
    },
    {
      id: 3,
      title: "Real-time Communication",
      description: "Live updates shared between all responders and family members",
      icon: "MessageSquare",
      status: "pending"
    },
    {
      id: 4,
      title: "Resolution Tracking",
      description: "Complete incident documentation and follow-up protocols",
      icon: "CheckCircle",
      status: "completed"
    }
  ];

  const getStepsForTab = (tabId) => {
    switch (tabId) {
      case 'ai-detection':
        return aiDetectionSteps;
      case 'blockchain-security':
        return blockchainSteps;
      case 'emergency-response':
        return emergencySteps;
      default:
        return aiDetectionSteps;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active':
        return 'bg-primary text-primary-foreground';
      case 'processing':
        return 'bg-secondary text-secondary-foreground';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      case 'completed':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-strong border border-border overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-border bg-muted/30">
        <div className="flex overflow-x-auto">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-3 px-6 py-4 whitespace-nowrap transition-all duration-300 border-b-2 ${
                activeTab === tab?.id
                  ? `border-primary ${tab?.color} ${tab?.bgColor}`
                  : 'border-transparent text-text-secondary hover:text-text-primary hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={20} />
              <span className="font-semibold">{tab?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${tabs?.find(t => t?.id === activeTab)?.bgColor} mb-4`}>
              <Icon 
                name={tabs?.find(t => t?.id === activeTab)?.icon} 
                size={32} 
                className={tabs?.find(t => t?.id === activeTab)?.color}
              />
            </div>
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              {tabs?.find(t => t?.id === activeTab)?.name}
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              {activeTab === 'ai-detection' && "Advanced machine learning algorithms continuously monitor and analyze tourist safety patterns to prevent incidents before they occur."}
              {activeTab === 'blockchain-security' && "Decentralized identity verification ensures tourist privacy while enabling secure access to emergency services."}
              {activeTab === 'emergency-response' && "Coordinated multi-agency response system ensures rapid assistance with real-time communication and tracking."}
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getStepsForTab(activeTab)?.map((step, index) => (
              <div key={step?.id} className="relative">
                {/* Connection Line */}
                {index < getStepsForTab(activeTab)?.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-6 h-0.5 bg-border z-0"></div>
                )}
                
                {/* Step Card */}
                <div className="relative bg-background border border-border rounded-xl p-6 hover:shadow-medium transition-all duration-300 hover-lift">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mb-4 ${getStatusColor(step?.status)}`}>
                    {step?.id}
                  </div>
                  
                  {/* Step Icon */}
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <Icon name={step?.icon} size={20} className="text-text-primary" />
                    </div>
                    <h4 className="font-semibold text-text-primary">{step?.title}</h4>
                  </div>
                  
                  {/* Step Description */}
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step?.description}
                  </p>
                  
                  {/* Status Indicator */}
                  <div className="mt-4 flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      step?.status === 'active' ? 'bg-primary animate-pulse-soft' :
                      step?.status === 'processing' ? 'bg-secondary animate-pulse-soft' :
                      step?.status === 'completed' ? 'bg-success' : 'bg-muted'
                    }`}></div>
                    <span className="text-xs text-text-secondary capitalize">{step?.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-12">
            <Button variant="default" iconName="Play" iconPosition="left">
              Watch Demo
            </Button>
            <Button variant="outline" iconName="FileText" iconPosition="left">
              Technical Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyTabs;