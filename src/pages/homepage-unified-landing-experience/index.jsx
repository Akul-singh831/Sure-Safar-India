import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import InteractiveMap from './components/InteractiveMap';
import TechnologyShowcase from './components/TechnologyShowcase';
import TrustIndicators from './components/TrustIndicators';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const HomepageUnifiedLandingExperience = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        <InteractiveMap />
        <TechnologyShowcase />
        <TrustIndicators />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomepageUnifiedLandingExperience;