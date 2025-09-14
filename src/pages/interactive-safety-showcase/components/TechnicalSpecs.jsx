import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalSpecs = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const technicalSections = [
    {
      id: 'ai-algorithms',
      title: 'AI & Machine Learning',
      icon: 'Brain',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      summary: 'Advanced neural networks for real-time threat detection and behavioral analysis',
      details: {
        overview: `Our AI system employs a multi-layered approach combining computer vision, natural language processing, and predictive analytics to ensure comprehensive tourist safety monitoring.`,
        technologies: [
          { name: 'Deep Learning Models', description: 'Convolutional Neural Networks for image and video analysis' },
          { name: 'Behavioral Analytics', description: 'Pattern recognition algorithms for anomaly detection' },
          { name: 'Predictive Modeling', description: 'Risk assessment based on historical data and real-time inputs' },
          { name: 'Natural Language Processing', description: 'Multi-language communication and sentiment analysis' }
        ],
        specifications: [
          { metric: 'Processing Speed', value: '< 100ms response time' },
          { metric: 'Accuracy Rate', value: '99.7% threat detection' },
          { metric: 'Language Support', value: '15+ languages' },
          { metric: 'Data Processing', value: '10TB+ daily analysis' }
        ]
      }
    },
    {
      id: 'blockchain-security',
      title: 'Blockchain Infrastructure',
      icon: 'Shield',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      summary: 'Decentralized identity verification and immutable security records',
      details: {
        overview: `Blockchain technology ensures secure, tamper-proof identity verification while maintaining tourist privacy through advanced cryptographic protocols.`,
        technologies: [
          { name: 'Identity Verification', description: 'Decentralized identity management with zero-knowledge proofs' },
          { name: 'Smart Contracts', description: 'Automated emergency response protocols and access control' },
          { name: 'Cryptographic Security', description: 'End-to-end encryption with multi-signature authentication' },
          { name: 'Immutable Records', description: 'Permanent audit trail for all safety interactions' }
        ],
        specifications: [
          { metric: 'Encryption Standard', value: 'AES-256 + RSA-4096' },
          { metric: 'Block Time', value: '< 3 seconds' },
          { metric: 'Network Nodes', value: '500+ validators' },
          { metric: 'Privacy Level', value: 'Zero-knowledge proofs' }
        ]
      }
    },
    {
      id: 'communication-systems',
      title: 'Communication Networks',
      icon: 'Zap',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      summary: 'Multi-channel emergency communication with real-time coordination',
      details: {
        overview: `Redundant communication infrastructure ensures reliable connectivity across all emergency response scenarios with multiple fallback systems.`,
        technologies: [
          { name: 'Multi-Protocol Support', description: '4G/5G, WiFi, Satellite, and mesh networking capabilities' },
          { name: 'Real-time Messaging', description: 'WebSocket connections for instant communication' },
          { name: 'Voice & Video Calls', description: 'WebRTC-based emergency communication channels' },
          { name: 'Offline Capabilities', description: 'Local data storage and sync when connectivity returns' }
        ],
        specifications: [
          { metric: 'Network Uptime', value: '99.99% availability' },
          { metric: 'Message Delivery', value: '< 500ms latency' },
          { metric: 'Concurrent Users', value: '1M+ simultaneous' },
          { metric: 'Backup Systems', value: '3-tier redundancy' }
        ]
      }
    },
    {
      id: 'data-analytics',
      title: 'Analytics & Intelligence',
      icon: 'BarChart3',
      color: 'text-trust',
      bgColor: 'bg-trust/10',
      summary: 'Real-time data processing and predictive safety intelligence',
      details: {
        overview: `Advanced analytics platform processes millions of data points to identify patterns, predict risks, and optimize emergency response strategies.`,
        technologies: [
          { name: 'Real-time Processing', description: 'Stream processing for immediate threat identification' },
          { name: 'Predictive Analytics', description: 'Machine learning models for risk forecasting' },
          { name: 'Geospatial Analysis', description: 'Location-based risk assessment and coverage optimization' },
          { name: 'Performance Metrics', description: 'Comprehensive KPI tracking and reporting systems' }
        ],
        specifications: [
          { metric: 'Data Processing', value: '1M+ events/second' },
          { metric: 'Storage Capacity', value: '100PB+ data lake' },
          { metric: 'Query Response', value: '< 50ms average' },
          { metric: 'Retention Period', value: '7 years encrypted' }
        ]
      }
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="bg-card rounded-2xl shadow-strong border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-cultural text-primary-foreground p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
            <Icon name="Settings" size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Technical Architecture</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Comprehensive technical specifications and implementation details of SafeGuard's advanced safety infrastructure
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {technicalSections?.map((section) => (
            <div key={section?.id} className="border border-border rounded-xl overflow-hidden">
              {/* Section Header */}
              <button
                onClick={() => toggleSection(section?.id)}
                className="w-full p-6 text-left hover:bg-muted/30 transition-all duration-300 focus-ring"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${section?.bgColor}`}>
                      <Icon name={section?.icon} size={24} className={section?.color} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">{section?.title}</h3>
                      <p className="text-text-secondary mt-1">{section?.summary}</p>
                    </div>
                  </div>
                  <Icon 
                    name="ChevronDown" 
                    size={24} 
                    className={`text-text-secondary transition-transform duration-300 ${
                      expandedSection === section?.id ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedSection === section?.id && (
                <div className="border-t border-border bg-muted/20">
                  <div className="p-6 space-y-8">
                    {/* Overview */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-3">Overview</h4>
                      <p className="text-text-secondary leading-relaxed">{section?.details?.overview}</p>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Core Technologies</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section?.details?.technologies?.map((tech, index) => (
                          <div key={index} className="bg-background border border-border rounded-lg p-4">
                            <h5 className="font-semibold text-text-primary mb-2">{tech?.name}</h5>
                            <p className="text-sm text-text-secondary">{tech?.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications */}
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-4">Technical Specifications</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {section?.details?.specifications?.map((spec, index) => (
                          <div key={index} className="flex items-center justify-between p-4 bg-background border border-border rounded-lg">
                            <span className="text-text-secondary">{spec?.metric}</span>
                            <span className="font-bold text-text-primary">{spec?.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 border-t border-border">
                      <Button variant="outline" iconName="FileText" iconPosition="left">
                        Detailed Documentation
                      </Button>
                      <Button variant="ghost" iconName="Code" iconPosition="left">
                        API Reference
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* System Architecture Diagram */}
        <div className="mt-12 bg-muted/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-text-primary text-center mb-8">System Architecture Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Smartphone" size={32} className="text-primary" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Frontend Layer</h4>
              <p className="text-sm text-text-secondary mb-4">Mobile apps, web dashboard, and responder interfaces</p>
              <div className="space-y-2 text-xs text-text-secondary">
                <div>React Native Mobile App</div>
                <div>Web Dashboard (React)</div>
                <div>Responder Portal</div>
              </div>
            </div>

            {/* Processing Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Cpu" size={32} className="text-accent" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Processing Layer</h4>
              <p className="text-sm text-text-secondary mb-4">AI engines, blockchain network, and communication systems</p>
              <div className="space-y-2 text-xs text-text-secondary">
                <div>AI/ML Processing</div>
                <div>Blockchain Network</div>
                <div>Communication Hub</div>
              </div>
            </div>

            {/* Data Layer */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name="Database" size={32} className="text-secondary" />
              </div>
              <h4 className="font-bold text-text-primary mb-2">Data Layer</h4>
              <p className="text-sm text-text-secondary mb-4">Secure storage, analytics, and backup systems</p>
              <div className="space-y-2 text-xs text-text-secondary">
                <div>Encrypted Databases</div>
                <div>Analytics Engine</div>
                <div>Backup Systems</div>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="hidden md:flex items-center justify-center mt-8 space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-primary"></div>
              <Icon name="ArrowRight" size={16} className="text-primary" />
              <div className="w-4 h-0.5 bg-primary"></div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-0.5 bg-accent"></div>
              <Icon name="ArrowRight" size={16} className="text-accent" />
              <div className="w-4 h-0.5 bg-accent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSpecs;