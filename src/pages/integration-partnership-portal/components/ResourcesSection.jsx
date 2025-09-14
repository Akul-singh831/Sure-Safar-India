import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourcesSection = () => {
  const [activeCategory, setActiveCategory] = useState('documentation');

  const resourceCategories = [
    { id: 'documentation', name: 'Documentation', icon: 'BookOpen', count: 24 },
    { id: 'sdk', name: 'SDKs & Tools', icon: 'Code', count: 8 },
    { id: 'guides', name: 'Integration Guides', icon: 'FileText', count: 12 },
    { id: 'support', name: 'Support Resources', icon: 'HelpCircle', count: 16 }
  ];

  const resources = {
    documentation: [
      {
        title: 'API Reference Guide',
        description: 'Complete API documentation with endpoints, parameters, and response formats',
        type: 'PDF',
        size: '2.4 MB',
        downloads: '1,247',
        updated: '2025-01-08',
        icon: 'FileText',
        featured: true
      },
      {
        title: 'Authentication & Security',
        description: 'OAuth 2.0 implementation, API key management, and security best practices',
        type: 'PDF',
        size: '1.8 MB',
        downloads: '892',
        updated: '2025-01-05',
        icon: 'Shield'
      },
      {
        title: 'Webhook Configuration',
        description: 'Real-time event notifications and webhook endpoint setup guide',
        type: 'PDF',
        size: '1.2 MB',
        downloads: '634',
        updated: '2025-01-03',
        icon: 'Zap'
      },
      {
        title: 'Error Handling Guide',
        description: 'Common error codes, troubleshooting steps, and resolution strategies',
        type: 'PDF',
        size: '956 KB',
        downloads: '445',
        updated: '2024-12-28',
        icon: 'AlertCircle'
      }
    ],
    sdk: [
      {
        title: 'JavaScript SDK',
        description: 'Complete JavaScript library for web applications with TypeScript support',
        type: 'NPM',
        size: '145 KB',
        downloads: '3,421',
        updated: '2025-01-10',
        icon: 'Code',
        featured: true
      },
      {
        title: 'Python SDK',
        description: 'Python library for server-side integrations with async support',
        type: 'PyPI',
        size: '89 KB',
        downloads: '1,876',
        updated: '2025-01-08',
        icon: 'Code'
      },
      {
        title: 'React Components',
        description: 'Pre-built React components for tourist safety features',
        type: 'NPM',
        size: '234 KB',
        downloads: '987',
        updated: '2025-01-06',
        icon: 'Layers'
      },
      {
        title: 'Mobile SDK (React Native)',
        description: 'Cross-platform mobile SDK for iOS and Android applications',
        type: 'NPM',
        size: '312 KB',
        downloads: '654',
        updated: '2025-01-04',
        icon: 'Smartphone'
      }
    ],
    guides: [
      {
        title: 'Hotel Integration Walkthrough',
        description: 'Step-by-step guide for integrating SafeGuard into hotel management systems',
        type: 'PDF',
        size: '3.2 MB',
        downloads: '2,134',
        updated: '2025-01-09',
        icon: 'Building',
        featured: true
      },
      {
        title: 'Tour Operator Setup Guide',
        description: 'Complete setup guide for tour operators with group management features',
        type: 'PDF',
        size: '2.8 MB',
        downloads: '1,567',
        updated: '2025-01-07',
        icon: 'MapPin'
      },
      {
        title: 'Travel Agency Integration',
        description: 'Integration guide for travel agencies with booking system connectivity',
        type: 'PDF',
        size: '2.1 MB',
        downloads: '1,234',
        updated: '2025-01-05',
        icon: 'Plane'
      },
      {
        title: 'Government Portal Setup',
        description: 'Multi-agency coordination setup and policy compliance guidelines',
        type: 'PDF',
        size: '4.1 MB',
        downloads: '789',
        updated: '2025-01-02',
        icon: 'Shield'
      }
    ],
    support: [
      {
        title: 'Developer Community Forum',
        description: 'Connect with other developers, share solutions, and get community support',
        type: 'Online',
        size: 'N/A',
        downloads: '5,432 members',
        updated: 'Active',
        icon: 'Users',
        featured: true
      },
      {
        title: 'Technical Support Portal',
        description: '24/7 technical support with priority response for partners',
        type: 'Online',
        size: 'N/A',
        downloads: '< 2hr response',
        updated: 'Live',
        icon: 'Headphones'
      },
      {
        title: 'Video Tutorials',
        description: 'Comprehensive video library covering all integration scenarios',
        type: 'Video',
        size: '12 hours',
        downloads: '3,456 views',
        updated: '2025-01-08',
        icon: 'Play'
      },
      {
        title: 'Certification Program',
        description: 'Official SafeGuard integration certification for developers',
        type: 'Course',
        size: '8 modules',
        downloads: '234 certified',
        updated: '2025-01-01',
        icon: 'Award'
      }
    ]
  };

  const currentResources = resources?.[activeCategory] || [];

  return (
    <div className="bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Developer Resources</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Everything you need to successfully integrate SafeGuard into your systems
        </p>
      </div>
      {/* Category Selector */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {resourceCategories?.map((category) => (
          <button
            key={category?.id}
            onClick={() => setActiveCategory(category?.id)}
            className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-smooth hover-lift ${
              activeCategory === category?.id
                ? 'bg-primary text-primary-foreground shadow-medium'
                : 'bg-card text-text-primary border border-border hover:border-primary/50'
            }`}
          >
            <Icon name={category?.icon} size={18} />
            <span className="font-medium">{category?.name}</span>
            <span className={`px-2 py-1 rounded-full text-xs ${
              activeCategory === category?.id
                ? 'bg-primary-foreground/20 text-primary-foreground'
                : 'bg-muted text-text-secondary'
            }`}>
              {category?.count}
            </span>
          </button>
        ))}
      </div>
      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentResources?.map((resource, index) => (
          <div
            key={index}
            className={`bg-card border rounded-xl p-6 transition-smooth hover-lift ${
              resource?.featured ? 'border-primary shadow-medium' : 'border-border hover:border-primary/50'
            }`}
          >
            {resource?.featured && (
              <div className="flex items-center space-x-2 mb-3">
                <Icon name="Star" size={14} color="var(--color-warning)" />
                <span className="text-xs font-semibold text-warning">Featured</span>
              </div>
            )}

            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name={resource?.icon} size={20} color="var(--color-primary)" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-text-primary mb-1">{resource?.title}</h3>
                <p className="text-sm text-text-secondary line-clamp-2">{resource?.description}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Type:</span>
                <span className="font-medium text-text-primary">{resource?.type}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Size:</span>
                <span className="font-medium text-text-primary">{resource?.size}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Downloads:</span>
                <span className="font-medium text-text-primary">{resource?.downloads}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-text-secondary">Updated:</span>
                <span className="font-medium text-text-primary">{resource?.updated}</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button
                variant={resource?.featured ? "default" : "outline"}
                size="sm"
                fullWidth
                iconName="Download"
                iconPosition="left"
              >
                Download
              </Button>
              <Button variant="ghost" size="sm" iconName="ExternalLink">
                <span className="sr-only">View</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Support CTA */}
      <div className="mt-12 bg-card border border-border rounded-xl p-8 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="HelpCircle" size={32} color="var(--color-primary)" />
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-3">Need Additional Support?</h3>
          <p className="text-text-secondary mb-6">
            Our technical team is here to help you with custom integrations, troubleshooting, and optimization.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="default" iconName="MessageCircle" iconPosition="left">
              Contact Support
            </Button>
            <Button variant="outline" iconName="Calendar" iconPosition="left">
              Schedule Consultation
            </Button>
            <Button variant="outline" iconName="Users" iconPosition="left">
              Join Community
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourcesSection;