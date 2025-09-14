import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import SecurityCertifications from './components/SecurityCertifications';
import GovernmentPartnerships from './components/GovernmentPartnerships';
import PrivacyTransparency from './components/PrivacyTransparency';
import BlockchainSecurity from './components/BlockchainSecurity';
import SecurityMetrics from './components/SecurityMetrics';
import ComplianceFramework from './components/ComplianceFramework';
import DownloadableResources from './components/DownloadableResources';
import SecurityFAQ from './components/SecurityFAQ';

const TrustSecurityCenter = () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>Trust & Security Center - SafeGuard India</title>
        <meta name="description" content="Comprehensive transparency hub addressing privacy concerns and building confidence through detailed security documentation and government partnerships." />
        <meta name="keywords" content="security, privacy, compliance, blockchain, government partnerships, data protection, SafeGuard India" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Hero Section */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium mb-4">
               <Icon name="ShieldCheck" size={16} className="text-success" />
              <span>Security & Transparency Hub</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 text-balance">
              Building Safety on a
              <span className="block gradient-primary bg-clip-text text-transparent">
                Foundation of Trust
              </span>
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
              Complete transparency about our security infrastructure, privacy practices, and government partnerships. Your safety is built on trust, and trust is built on transparency.
            </p>
          </div>

          {/* Demo Notice */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-800 rounded-2xl p-6 flex items-center space-x-4">
             <Icon name="Beaker" size={32} className="flex-shrink-0" />
             <div>
                <h3 className="font-bold">Demonstration Environment</h3>
                <p className="text-sm">The information on this page is for demonstration purposes only. Certifications, partnerships, and metrics reflect our platform's goals and architecture, not live production data.</p>
             </div>
          </div>
          
          <SecurityMetrics />
          <SecurityCertifications />
          <GovernmentPartnerships />
          <BlockchainSecurity />
          <PrivacyTransparency />
          <ComplianceFramework />
          <DownloadableResources />
          <SecurityFAQ />

          {/* Trust Statement */}
          <div className="text-center bg-card rounded-2xl p-12 border border-border shadow-strong">
            <h2 className="text-3xl font-bold text-text-primary mb-6">Our Commitment to Your Trust</h2>
            <p className="text-lg text-text-secondary max-w-4xl mx-auto mb-8">
              SafeGuard India operates on the principle that trust must be earned through transparency, maintained through excellence, and proven through results. Every security measure is designed with one goal: ensuring your safety while respecting your rights.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-text-secondary">Transparency Goal</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">Zero</div>
                <div className="text-text-secondary">Compromise on Security</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className="text-text-secondary">Security Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TrustSecurityCenter;
