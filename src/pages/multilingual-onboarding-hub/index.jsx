import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import LanguageSelector from './components/LanguageSelector';
import CountrySpecificFlow from './components/CountrySpecificFlow';
import KYCVerification from './components/KYCVerification';
import CulturalOrientation from './components/CulturalOrientation';
import InteractiveTutorial from './components/InteractiveTutorial';
import FamilySharing from './components/FamilySharing';
import TravelItinerary from './components/TravelItinerary';
import ProgressTracker from './components/ProgressTracker';

const MultilingualOnboardingHub = () => {
  const [currentStep, setCurrentStep] = useState(2); // Set to 2 to show Verification step by default like in image
  const [completedSteps, setCompletedSteps] = useState([0, 1]); // Mark first two steps as complete
  const [onboardingData, setOnboardingData] = useState({
    selectedLanguage: { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸' },
    selectedCountry: { code: 'US', name: 'United States', flag: '🇺🇸' },
    kycCompleted: false,
    culturalOrientationCompleted: false,
    tutorialCompleted: false,
    familySharingCompleted: false,
    itineraryCompleted: false
  });

  const totalSteps = 7;

  // Load saved progress from localStorage
  useEffect(() => {
    const savedProgress = localStorage.getItem('safeguard-onboarding-progress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setOnboardingData(progress?.data || onboardingData);
      setCurrentStep(progress?.currentStep || 2);
      setCompletedSteps(progress?.completedSteps || [0, 1]);
    }
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    const progress = {
      data: onboardingData,
      currentStep,
      completedSteps,
      lastUpdated: new Date()?.toISOString()
    };
    localStorage.setItem('safeguard-onboarding-progress', JSON.stringify(progress));
  }, [onboardingData, currentStep, completedSteps]);

  const handleStepComplete = (stepIndex, data = {}) => {
    setOnboardingData(prev => ({ ...prev, ...data }));
    setCompletedSteps(prev => [...new Set([...prev, stepIndex])]);
    
    if (stepIndex < totalSteps - 1) {
      setCurrentStep(stepIndex + 1);
    }
  };

  const handleLanguageSelect = (language) => {
    setOnboardingData(prev => ({ ...prev, selectedLanguage: language }));
  };

  const handleCountrySelect = (country) => {
    setOnboardingData(prev => ({ ...prev, selectedCountry: country }));
  };
  
  const handleKYCComplete = () => handleStepComplete(2, { kycCompleted: true });
  const handleCulturalOrientationComplete = () => handleStepComplete(3, { culturalOrientationCompleted: true });
  const handleTutorialComplete = () => handleStepComplete(4, { tutorialCompleted: true });
  const handleFamilySharingComplete = () => handleStepComplete(5, { familySharingCompleted: true });
  const handleItineraryComplete = () => handleStepComplete(6, { itineraryCompleted: true });

  const handleCompleteOnboarding = () => {
    localStorage.setItem('safeguard-onboarding-completed', 'true');
    alert('Onboarding completed! Welcome to SafeGuard India.');
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <LanguageSelector
            selectedLanguage={onboardingData?.selectedLanguage}
            onLanguageSelect={handleLanguageSelect}
            onContinue={() => handleStepComplete(0)}
          />
        );
      case 1:
        return (
          <CountrySpecificFlow
            selectedCountry={onboardingData?.selectedCountry}
            onCountrySelect={handleCountrySelect}
            onContinue={() => handleStepComplete(1)}
          />
        );
      case 2:
        return <KYCVerification onComplete={handleKYCComplete} />;
      case 3:
        return <CulturalOrientation selectedCountry={onboardingData?.selectedCountry} onComplete={handleCulturalOrientationComplete} />;
      case 4:
        return <InteractiveTutorial onComplete={handleTutorialComplete} />;
      case 5:
        return <FamilySharing onComplete={handleFamilySharingComplete} />;
      case 6:
        return <TravelItinerary onComplete={handleItineraryComplete} />;
      default:
        return (
          <div className="bg-card rounded-2xl shadow-strong p-8 border border-border text-center">
            <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircle" size={48} color="white" />
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4">Welcome to SafeGuard India!</h2>
            <p className="text-text-secondary mb-6">Your onboarding is complete. You're now ready to explore India with confidence and safety.</p>
            <Button variant="success" size="lg" onClick={handleCompleteOnboarding} iconName="ArrowRight" iconPosition="right">
              Start Using SafeGuard India
            </Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Helmet>
        <title>Multilingual Onboarding Hub - SafeGuard India</title>
        <meta name="description" content="Complete your SafeGuard India setup with personalized onboarding based on your nationality, language preferences, and travel patterns." />
        <meta name="keywords" content="SafeGuard India, onboarding, multilingual, tourist safety, travel setup, KYC verification" />
      </Helmet>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-card border border-border px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Icon name="Sparkles" size={16} className="text-primary" />
              <span>Personalized Setup Experience</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Welcome to <span className="gradient-primary bg-clip-text text-transparent">SafeGuard India</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Let's set up your personalized safety experience based on your nationality, 
              language preferences, and travel patterns for the safest journey in India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Progress Tracker - Left Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <ProgressTracker
                  currentStep={currentStep}
                  completedSteps={completedSteps}
                  totalSteps={totalSteps}
                />
              </div>
            </div>

            {/* Main Content - Right Column */}
            <div className="lg:col-span-2">
              {renderCurrentStep()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MultilingualOnboardingHub;