import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DownloadableResources = () => {
  const [downloadCounts, setDownloadCounts] = useState({});

  const securityDocuments = [
    {
      id: 'security-whitepaper',
      title: 'Security Architecture Whitepaper',
      description: 'Comprehensive technical documentation of our security infrastructure, encryption methods, and blockchain implementation.',
      type: 'PDF',
      size: '2.4 MB',
      pages: 45,
      lastUpdated: '2024-09-01',
      category: 'Technical',
      icon: 'FileText',
      color: 'text-primary'
    },
    {
      id: 'privacy-policy',
      title: 'Privacy Policy & Data Handling',
      description: 'Detailed privacy policy explaining data collection, processing, storage, and sharing practices in multiple languages.',
      type: 'PDF',
      size: '1.8 MB',
      pages: 32,
      lastUpdated: '2024-08-15',
      category: 'Legal',
      icon: 'Shield',
      color: 'text-secondary'
    },
    {
      id: 'compliance-certificates',
      title: 'Compliance Certificates Bundle',
      description: 'Collection of all security certifications including ISO 27001, SOC 2, GDPR compliance, and government approvals.',
      type: 'ZIP',
      size: '5.2 MB',
      pages: 'Multiple',
      lastUpdated: '2024-09-10',
      category: 'Certificates',
      icon: 'Award',
      color: 'text-accent'
    },
    {
      id: 'partnership-agreements',
      title: 'Government Partnership Framework',
      description: 'Public versions of partnership agreements with government ministries and international cooperation frameworks.',
      type: 'PDF',
      size: '3.1 MB',
      pages: 28,
      lastUpdated: '2024-08-30',
      category: 'Legal',
      icon: 'Handshake',
      color: 'text-trust'
    },
    {
      id: 'audit-reports',
      title: 'Security Audit Reports',
      description: 'Executive summaries of third-party security audits, penetration testing results, and vulnerability assessments.',
      type: 'PDF',
      size: '4.7 MB',
      pages: 67,
      lastUpdated: '2024-09-05',
      category: 'Technical',
      icon: 'Search',
      color: 'text-primary'
    },
    {
      id: 'incident-response',
      title: 'Incident Response Procedures',
      description: 'Public documentation of our incident response procedures, escalation protocols, and communication frameworks.',
      type: 'PDF',
      size: '1.5 MB',
      pages: 24,
      lastUpdated: '2024-08-20',
      category: 'Procedures',
      icon: 'AlertTriangle',
      color: 'text-error'
    }
  ];

  const categories = ['All', 'Technical', 'Legal', 'Certificates', 'Procedures'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredDocuments = activeCategory === 'All' 
    ? securityDocuments 
    : securityDocuments?.filter(doc => doc?.category === activeCategory);

  const handleDownload = (documentId, title) => {
    // Simulate download
    setDownloadCounts(prev => ({
      ...prev,
      [documentId]: (prev?.[documentId] || 0) + 1
    }));
    
    // In a real application, this would trigger the actual download
    console.log(`Downloading: ${title}`);
  };

  const getDownloadCount = (documentId) => {
    return downloadCounts?.[documentId] || Math.floor(Math.random() * 500) + 100;
  };

  return (
    <section className="bg-card rounded-xl p-8 shadow-medium border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Downloadable Resources</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Access comprehensive documentation, certificates, and technical resources for detailed security and compliance information.
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories?.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-smooth ${
              activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-soft'
                : 'bg-muted/20 text-text-secondary hover:text-text-primary hover:bg-muted/40'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Document Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredDocuments?.map((document) => (
          <div key={document?.id} className="bg-muted/20 rounded-lg p-6 hover-lift transition-smooth">
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-lg bg-white shadow-soft ${document?.color}`}>
                <Icon name={document?.icon} size={24} />
              </div>
              <div className="text-right">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                  {document?.category}
                </span>
              </div>
            </div>
            
            <h3 className="font-semibold text-text-primary mb-2">{document?.title}</h3>
            <p className="text-sm text-text-secondary mb-4 line-clamp-3">{document?.description}</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>Format: {document?.type}</span>
                <span>Size: {document?.size}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <span>Pages: {document?.pages}</span>
                <span>Updated: {document?.lastUpdated}</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-text-secondary">
                <Icon name="Download" size={12} />
                <span>{getDownloadCount(document?.id)} downloads</span>
              </div>
            </div>
            
            <Button
              variant="outline"
              fullWidth
              iconName="Download"
              iconPosition="left"
              onClick={() => handleDownload(document?.id, document?.title)}
            >
              Download
            </Button>
          </div>
        ))}
      </div>
      {/* Quick Access Section */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4 text-center">Quick Access Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
            <Icon name="FileText" size={20} className="text-primary" />
            <div>
              <div className="font-medium text-text-primary">Security Summary</div>
              <div className="text-sm text-text-secondary">One-page overview</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
            <Icon name="Phone" size={20} className="text-secondary" />
            <div>
              <div className="font-medium text-text-primary">Emergency Contacts</div>
              <div className="text-sm text-text-secondary">24/7 support numbers</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-soft">
            <Icon name="Globe" size={20} className="text-accent" />
            <div>
              <div className="font-medium text-text-primary">API Documentation</div>
              <div className="text-sm text-text-secondary">Integration guides</div>
            </div>
          </div>
        </div>
      </div>
      {/* Legal Notice */}
      <div className="mt-6 p-4 bg-muted/10 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={16} className="text-primary mt-0.5" />
          <div className="text-sm text-text-secondary">
            <p className="mb-2">
              <strong>Legal Notice:</strong> These documents are provided for transparency and compliance purposes. 
              Some technical details may be redacted for security reasons.
            </p>
            <p>
              For specific compliance questions or additional documentation requirements, please contact our 
              legal team at <span className="text-primary font-medium">legal@safeguardindia.gov.in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadableResources;