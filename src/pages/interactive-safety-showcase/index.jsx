import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import TechnologyTabs from './components/TechnologyTabs';
import InteractiveDemo from './components/InteractiveDemo';
import CaseStudySection from './components/CaseStudySection';
import TechnicalSpecs from './components/TechnicalSpecs';
import LiveDemoEnvironment from './components/LiveDemoEnvironment';

const InteractiveSafetyShowcase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 cultural-pattern opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2 mb-6">
              <Icon name="Zap" size={16} />
              <span className="text-sm font-medium">Live Technology Demonstration</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-shadow-md">
              Experience SafeGuard's
              <span className="block gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent text-shadow-md">
                AI-Powered Protection
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed text-shadow-md">
              Immerse yourself in interactive demonstrations of our cutting-edge safety technologies. 
              See how AI threat detection, blockchain security, and emergency coordination work together 
              to create India's most advanced tourist protection system.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button variant="secondary" size="lg" iconName="Play" iconPosition="left">
                Start Interactive Tour
              </Button>
              <Button variant="outline" size="lg" iconName="Download" iconPosition="left">
                Download Technical Brief
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-accent/20 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </section>
      {/* Technology Showcase Tabs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Core Technology Stack
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Explore the three pillars of SafeGuard's protection system through interactive workflows and real-time demonstrations
            </p>
          </div>
          
          <TechnologyTabs />
        </div>
      </section>
      {/* Interactive Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Icon name="MousePointer" size={16} />
              <span className="text-sm font-medium">Interactive Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Real-Time Safety Monitoring
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Click on tourists and locations to explore protection status, coverage details, and emergency response protocols
            </p>
          </div>
          
          <InteractiveDemo />
        </div>
      </section>
      {/* Live Demo Environment */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <LiveDemoEnvironment />
        </div>
      </section>
      {/* Case Studies Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <CaseStudySection />
        </div>
      </section>
      {/* Technical Specifications */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <TechnicalSpecs />
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-20 bg-gradient-cultural text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Icon name="Rocket" size={32} />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience SafeGuard?
          </h2>
          
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of tourists who trust SafeGuard for their safety in India. 
            Download the app and activate your protection today.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button variant="secondary" size="lg" iconName="Download" iconPosition="left">
              Download Mobile App
            </Button>
            <Button variant="outline" size="lg" iconName="Users" iconPosition="left">
              Join Beta Program
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center space-x-8 mt-12 text-sm text-primary-foreground/60">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>Government Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Lock" size={16} />
              <span>End-to-End Encrypted</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Globe" size={16} />
              <span>Multi-Language Support</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">SafeGuard India</h3>
                  <p className="text-sm text-text-secondary">Invisible Protection, Visible Innovation</p>
                </div>
              </div>
              <p className="text-text-secondary mb-4 max-w-md">
                India's first AI-powered tourist safety platform, ensuring peace of mind through 
                cutting-edge technology and seamless emergency response coordination.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" iconName="Twitter">Twitter</Button>
                <Button variant="ghost" size="sm" iconName="Linkedin">LinkedIn</Button>
                <Button variant="ghost" size="sm" iconName="Github">GitHub</Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="/homepage-unified-landing-experience" className="block text-text-secondary hover:text-primary transition-colors">Home</a>
                <a href="/trust-security-center" className="block text-text-secondary hover:text-primary transition-colors">Security Center</a>
                <a href="/responder-command-dashboard" className="block text-text-secondary hover:text-primary transition-colors">Command Dashboard</a>
                <a href="/multilingual-onboarding-hub" className="block text-text-secondary hover:text-primary transition-colors">Onboarding</a>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Emergency Contact</h4>
              <div className="space-y-2 text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+91-1800-SAFEGUARD</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>emergency@safeguard.gov.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>New Delhi, India</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-text-secondary text-sm">
              © {new Date()?.getFullYear()} SafeGuard India. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-text-secondary hover:text-primary text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default InteractiveSafetyShowcase;