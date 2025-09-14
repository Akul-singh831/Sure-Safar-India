import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ComplianceFramework = () => {
  const [activeTab, setActiveTab] = useState('international');

  const internationalCompliance = [
    {
      id: 'gdpr',
      name: 'GDPR',
      fullName: 'General Data Protection Regulation',
      region: 'European Union',
      status: 'Compliant',
      description: 'Full compliance with EU data protection requirements including right to be forgotten, data portability, and consent management.',
      requirements: [
        'Data subject rights implementation',
        'Privacy by design architecture',
        'Data protection impact assessments',
        'Breach notification procedures'
      ],
      icon: 'Globe',
      color: 'text-primary'
    },
    {
      id: 'ccpa',
      name: 'CCPA',
      fullName: 'California Consumer Privacy Act',
      region: 'United States',
      status: 'Compliant',
      description: 'Adherence to California privacy laws ensuring consumer rights to know, delete, and opt-out of data sales.',
      requirements: [
        'Consumer rights disclosure',
        'Opt-out mechanisms',
        'Data deletion procedures',
        'Third-party sharing transparency'
      ],
      icon: 'Flag',
      color: 'text-secondary'
    },
    {
      id: 'pipeda',
      name: 'PIPEDA',
      fullName: 'Personal Information Protection Act',
      region: 'Canada',
      status: 'Compliant',
      description: 'Compliance with Canadian federal privacy legislation for personal information handling.',
      requirements: [
        'Consent for collection',
        'Purpose limitation',
        'Accuracy maintenance',
        'Safeguards implementation'
      ],
      icon: 'Leaf',
      color: 'text-accent'
    }
  ];

  const indianCompliance = [
    {
      id: 'dpdp',
      name: 'DPDP Act 2023',
      fullName: 'Digital Personal Data Protection Act',
      region: 'India',
      status: 'Compliant',
      description: 'Full compliance with India\'s comprehensive data protection framework including consent management and data localization.',
      requirements: [
        'Data localization compliance',
        'Consent manager integration',
        'Data fiduciary obligations',
        'Cross-border transfer protocols'
      ],
      icon: 'MapPin',
      color: 'text-primary'
    },
    {
      id: 'it-act',
      name: 'IT Act 2000',
      fullName: 'Information Technology Act',
      region: 'India',
      status: 'Compliant',
      description: 'Adherence to Indian cybersecurity and electronic governance requirements.',
      requirements: [
        'Digital signature compliance',
        'Cybersecurity framework',
        'Electronic records management',
        'Audit trail maintenance'
      ],
      icon: 'Server',
      color: 'text-secondary'
    },
    {
      id: 'rbi-guidelines',
      name: 'RBI Guidelines',
      fullName: 'Reserve Bank of India Data Guidelines',
      region: 'India',
      status: 'Compliant',
      description: 'Compliance with RBI data localization and security requirements for financial data.',
      requirements: [
        'Payment data localization',
        'Security standards compliance',
        'Incident reporting procedures',
        'Regular security audits'
      ],
      icon: 'CreditCard',
      color: 'text-accent'
    }
  ];

  const crossBorderProtocols = [
    {
      title: 'Data Transfer Mechanisms',
      description: 'Standard Contractual Clauses (SCCs) and adequacy decisions for lawful international transfers',
      icon: 'ArrowRightLeft',
      status: 'active'
    },
    {
      title: 'Embassy Integration',
      description: 'Secure data sharing protocols with diplomatic missions for citizen protection',
      icon: 'Building',
      status: 'active'
    },
    {
      title: 'Emergency Protocols',
      description: 'Cross-border emergency response data sharing under international agreements',
      icon: 'AlertTriangle',
      status: 'active'
    },
    {
      title: 'Mutual Legal Assistance',
      description: 'Compliance with MLAT requirements for law enforcement cooperation',
      icon: 'Scale',
      status: 'active'
    }
  ];

  const getCurrentCompliance = () => {
    return activeTab === 'international' ? internationalCompliance : indianCompliance;
  };

  return (
    <section className="bg-card rounded-xl p-8 shadow-medium border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">International Compliance Framework</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our platform maintains compliance with global data protection regulations and cross-border information sharing protocols.
        </p>
      </div>
      {/* Compliance Tabs */}
      <div className="flex justify-center mb-8">
        <div className="bg-muted/20 rounded-lg p-1 inline-flex">
          <button
            onClick={() => setActiveTab('international')}
            className={`px-6 py-2 rounded-lg font-medium transition-smooth ${
              activeTab === 'international' ?'bg-primary text-primary-foreground shadow-soft' :'text-text-secondary hover:text-text-primary'
            }`}
          >
            International Standards
          </button>
          <button
            onClick={() => setActiveTab('indian')}
            className={`px-6 py-2 rounded-lg font-medium transition-smooth ${
              activeTab === 'indian' ?'bg-primary text-primary-foreground shadow-soft' :'text-text-secondary hover:text-text-primary'
            }`}
          >
            Indian Regulations
          </button>
        </div>
      </div>
      {/* Compliance Details */}
      <div className="space-y-6 mb-12">
        {getCurrentCompliance()?.map((compliance) => (
          <div key={compliance?.id} className="bg-muted/20 rounded-lg p-6 hover-lift transition-smooth">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg bg-white shadow-soft ${compliance?.color}`}>
                <Icon name={compliance?.icon} size={24} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-text-primary">{compliance?.fullName}</h3>
                    <p className="text-sm text-text-secondary">{compliance?.name} • {compliance?.region}</p>
                  </div>
                  <span className="px-3 py-1 bg-success/10 text-success text-sm rounded-full font-medium">
                    {compliance?.status}
                  </span>
                </div>
                <p className="text-sm text-text-secondary mb-4">{compliance?.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {compliance?.requirements?.map((requirement, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="CheckCircle" size={16} className="text-success" />
                      <span className="text-sm text-text-secondary">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Cross-Border Protocols */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Cross-Border Data Sharing Protocols</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crossBorderProtocols?.map((protocol, index) => (
            <div key={index} className="bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg p-6 hover-lift transition-smooth">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Icon name={protocol?.icon} size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-text-primary">{protocol?.title}</h4>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
                      <span className="text-xs text-success font-medium">Active</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary">{protocol?.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Compliance Summary */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Compliance Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">12+</div>
              <div className="text-sm text-text-secondary">Regulations Compliant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary mb-1">100%</div>
              <div className="text-sm text-text-secondary">Audit Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">45+</div>
              <div className="text-sm text-text-secondary">Countries Covered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-trust mb-1">24/7</div>
              <div className="text-sm text-text-secondary">Compliance Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceFramework;