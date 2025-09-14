import React from 'react';
import Icon from '../../../components/AppIcon';

const BlockchainSecurity = () => {
  const securityLayers = [
    {
      id: 1,
      title: "Identity Encryption",
      description: "Tourist identities are encrypted using AES-256 encryption before blockchain storage",
      icon: "Lock",
      color: "text-primary",
      status: "active"
    },
    {
      id: 2,
      title: "Distributed Storage",
      description: "Data is distributed across multiple nodes, preventing single points of failure",
      icon: "Network",
      color: "text-secondary",
      status: "active"
    },
    {
      id: 3,
      title: "Smart Contracts",
      description: "Automated emergency access protocols with multi-signature authorization",
      icon: "FileText",
      color: "text-accent",
      status: "active"
    },
    {
      id: 4,
      title: "Immutable Audit Trail",
      description: "All access attempts and data modifications are permanently recorded",
      icon: "History",
      color: "text-trust",
      status: "active"
    }
  ];

  const emergencyAccessFlow = [
    {
      step: 1,
      title: "Emergency Detected",
      description: "AI system or manual trigger initiates emergency protocol",
      icon: "AlertTriangle",
      color: "text-error"
    },
    {
      step: 2,
      title: "Multi-Signature Request",
      description: "System requests authorization from multiple government authorities",
      icon: "Users",
      color: "text-warning"
    },
    {
      step: 3,
      title: "Blockchain Verification",
      description: "Smart contract verifies emergency status and authorization levels",
      icon: "CheckCircle",
      color: "text-primary"
    },
    {
      step: 4,
      title: "Secure Data Access",
      description: "Encrypted data is temporarily decrypted for emergency responders",
      icon: "Unlock",
      color: "text-success"
    }
  ];

  const blockchainStats = [
    {
      metric: "99.99%",
      label: "Uptime Guarantee",
      description: "Distributed network ensures continuous availability",
      icon: "Activity"
    },
    {
      metric: "256-bit",
      label: "Encryption Standard",
      description: "Military-grade encryption for all stored data",
      icon: "Shield"
    },
    {
      metric: "< 3 sec",
      label: "Emergency Access Time",
      description: "Rapid authorization for critical situations",
      icon: "Zap"
    },
    {
      metric: "Zero",
      label: "Data Breaches",
      description: "Perfect security record since deployment",
      icon: "Award"
    }
  ];

  return (
    <section className="bg-card rounded-xl p-8 shadow-medium border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Blockchain Security Architecture</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our blockchain-based security system ensures tourist identities remain encrypted while enabling instant emergency access through smart contracts and multi-signature authorization.
        </p>
      </div>
      {/* Security Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {blockchainStats?.map((stat, index) => (
          <div key={index} className="text-center p-6 bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg hover-lift transition-smooth">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Icon name={stat?.icon} size={24} className="text-primary" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">{stat?.metric}</div>
            <div className="font-medium text-text-primary mb-2">{stat?.label}</div>
            <p className="text-xs text-text-secondary">{stat?.description}</p>
          </div>
        ))}
      </div>
      {/* Security Layers */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Multi-Layer Security Protection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityLayers?.map((layer) => (
            <div key={layer?.id} className="bg-muted/20 rounded-lg p-6 hover-lift transition-smooth">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-white shadow-soft ${layer?.color}`}>
                  <Icon name={layer?.icon} size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-text-primary">{layer?.title}</h4>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
                      <span className="text-xs text-success font-medium">Active</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">{layer?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Emergency Access Flow */}
      <div className="bg-muted/10 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Emergency Access Protocol</h3>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {emergencyAccessFlow?.map((step, index) => (
              <div key={step?.step} className="relative">
                <div className="bg-card rounded-lg p-4 shadow-soft hover-lift transition-smooth">
                  <div className="text-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                      step?.step === 1 ? 'bg-error/10' :
                      step?.step === 2 ? 'bg-warning/10' :
                      step?.step === 3 ? 'bg-primary/10': 'bg-success/10'
                    }`}>
                      <Icon name={step?.icon} size={20} className={step?.color} />
                    </div>
                    <div className="text-sm font-bold text-text-secondary mb-2">Step {step?.step}</div>
                    <h4 className="font-semibold text-text-primary mb-2 text-sm">{step?.title}</h4>
                    <p className="text-xs text-text-secondary">{step?.description}</p>
                  </div>
                </div>
                {index < emergencyAccessFlow?.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="ChevronRight" size={12} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Technical Details */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-trust/5 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">Technical Implementation</h3>
            <p className="text-sm text-text-secondary">
              Built on Ethereum-compatible blockchain with custom smart contracts for emergency access control
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-lg font-bold text-primary">24/7</div>
              <div className="text-xs text-text-secondary">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-secondary">100%</div>
              <div className="text-xs text-text-secondary">Encrypted</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-accent">Multi-Sig</div>
              <div className="text-xs text-text-secondary">Authorization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlockchainSecurity;