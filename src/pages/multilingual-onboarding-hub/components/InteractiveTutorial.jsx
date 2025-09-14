import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveTutorial = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const tutorialSteps = [
    {
      id: 'app-overview',
      title: 'SafeGuard India App Overview',
      description: 'Get familiar with the main features and interface',
      duration: '2 min',
      icon: 'Smartphone',
      content: {
        overview: 'Welcome to SafeGuard India - your personal safety companion while traveling in India.',
        features: [
          {
            name: 'Real-time Location Sharing',
            description: 'Share your location with trusted contacts automatically',
            icon: 'MapPin',
            demo: 'Tap the location icon to enable GPS tracking and share with family'
          },
          {
            name: 'Emergency SOS',
            description: 'One-tap emergency alert to authorities and contacts',
            icon: 'AlertTriangle',
            demo: 'Press and hold the red SOS button for 3 seconds to activate'
          },
          {
            name: 'AI Safety Assistant',
            description: 'Get instant safety recommendations based on your location',
            icon: 'Bot',
            demo: 'Ask questions like "Is this area safe?" or "Find nearest hospital"'
          },
          {
            name: 'Cultural Guide',
            description: 'Access local customs, phrases, and etiquette tips',
            icon: 'Book',
            demo: 'Browse region-specific guides and emergency phrases'
          }
        ]
      }
    },
    {
      id: 'emergency-features',
      title: 'Emergency Response System',
      description: 'Learn how to use emergency features effectively',
      duration: '3 min',
      icon: 'Shield',
      content: {
        overview: 'Understanding emergency features can be life-saving. Practice these steps in a safe environment.',
        scenarios: [
          {
            type: 'Medical Emergency',
            steps: [
              'Open SafeGuard India app',
              'Tap "Medical Emergency" button',
              'Confirm your location is accurate',
              'Select type of medical help needed',
              'App automatically contacts 108 (ambulance)',
              'Your emergency contacts are notified',
              'Follow dispatcher instructions'
            ],
            icon: 'Heart'
          },
          {
            type: 'Safety Threat',
            steps: [
              'Activate SOS by pressing power button 3 times',
              'Or use in-app panic button',
              'Location shared with police (100)',
              'Loud alarm can be activated',
              'Photos/audio automatically recorded',
              'Embassy notified if international tourist',
              'Stay on line with emergency services'
            ],
            icon: 'AlertTriangle'
          },
          {
            type: 'Lost or Stranded',
            steps: [
              'Use "I\'m Lost" feature in app',
              'Share location with trusted contacts',
              'Access offline maps and directions',
              'Contact tourist helpline (1363)',
              'Find nearest police station or embassy',
              'Use translation feature for help',
              'Keep phone charged with power-saving mode'
            ],
            icon: 'MapPin'
          }
        ]
      }
    },
    {
      id: 'location-sharing',
      title: 'Location Sharing & Privacy',
      description: 'Control who can see your location and when',
      duration: '2 min',
      icon: 'MapPin',
      content: {
        overview: 'Manage your location privacy while staying connected with loved ones.',
        settings: [
          {
            feature: 'Trusted Contacts',
            description: 'Add family and friends who can see your location',
            steps: [
              'Go to Settings > Trusted Contacts',
              'Add contacts by phone or email',
              'Set permission levels (Always, Emergency Only, Trip Duration)',
              'Contacts receive invitation to join your safety network'
            ]
          },
          {
            feature: 'Location Accuracy',
            description: 'Choose how precise your shared location is',
            options: [
              'Exact Location - For emergency contacts',
              'Approximate Area - For general contacts',
              'City Level - For social sharing',
              'Off - Complete privacy'
            ]
          },
          {
            feature: 'Auto-Check-ins',
            description: 'Automatically notify contacts when you reach destinations',
            benefits: [
              'Peace of mind for family',
              'Proof of safe arrival',
              'Helps in case of unexpected delays',
              'Creates travel history for reference'
            ]
          }
        ]
      }
    },
    {
      id: 'ai-assistant',
      title: 'AI Safety Assistant',
      description: 'Get personalized safety recommendations',
      duration: '2 min',
      icon: 'Bot',
      content: {
        overview: 'Your AI assistant provides real-time safety insights and recommendations.',
        capabilities: [
          {
            category: 'Area Safety Assessment',
            examples: [
              '"Is Connaught Place safe at night?"',
              '"What are the safety concerns in Goa?"',
              '"Best time to visit local markets?"'
            ],
            icon: 'MapPin'
          },
          {
            category: 'Emergency Assistance',
            examples: [
              '"Find nearest hospital"',
              '"I need police help"',
              '"Where is the closest embassy?"'
            ],
            icon: 'AlertTriangle'
          },
          {
            category: 'Cultural Guidance',
            examples: [
              '"How to dress for temple visit?"',
              '"Local dining etiquette tips"',
              '"Common Hindi phrases for shopping"'
            ],
            icon: 'Heart'
          },
          {
            category: 'Travel Planning',
            examples: [
              '"Safe routes to Red Fort"',
              '"Recommended tour guides in Rajasthan"',
              '"Weather alerts for my location"'
            ],
            icon: 'Route'
          }
        ]
      }
    },
    {
      id: 'offline-features',
      title: 'Offline Capabilities',
      description: 'Stay safe even without internet connection',
      duration: '2 min',
      icon: 'Wifi',
      content: {
        overview: 'Essential features work offline to ensure your safety in remote areas.',
        offlineFeatures: [
          {
            feature: 'Emergency Contacts',
            description: 'Pre-saved emergency numbers work without internet',
            details: [
              'Police: 100',
              'Medical: 108',
              'Tourist Helpline: 1363',
              'Your personal emergency contacts'
            ]
          },
          {
            feature: 'Offline Maps',
            description: 'Download maps before traveling to remote areas',
            benefits: [
              'GPS navigation without data',
              'Find nearby facilities',
              'Share location via SMS',
              'Mark safe locations'
            ]
          },
          {
            feature: 'Emergency Phrases',
            description: 'Essential phrases in local languages',
            categories: [
              'Medical emergencies',
              'Police assistance',
              'Basic directions',
              'Food and water requests'
            ]
          },
          {
            feature: 'Document Storage',
            description: 'Secure offline access to important documents',
            documents: [
              'Passport copy',
              'Visa information',
              'Insurance details',
              'Emergency contact list'
            ]
          }
        ]
      }
    }
  ];

  const currentTutorial = tutorialSteps?.[currentStep];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    // Simulate audio playback
    if (!isPlaying) {
      setTimeout(() => setIsPlaying(false), 3000);
    }
  };

  const renderTutorialContent = () => {
    switch (currentTutorial?.id) {
      case 'app-overview':
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-text-secondary">{currentTutorial?.content?.overview}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTutorial?.content?.features?.map((feature, index) => (
                <div key={index} className="p-4 bg-card border border-border rounded-lg hover:shadow-medium transition-shadow duration-200">
                  <div className="flex items-start space-x-3 mb-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={feature?.icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{feature?.name}</h4>
                      <p className="text-sm text-text-secondary">{feature?.description}</p>
                    </div>
                  </div>
                  <div className="bg-primary/5 rounded-lg p-3">
                    <p className="text-sm text-primary font-medium">Demo: {feature?.demo}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'emergency-features':
        return (
          <div className="space-y-6">
            <div className="bg-error/5 border border-error/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="AlertTriangle" size={20} className="text-error" />
                <span className="font-medium text-error">Important</span>
              </div>
              <p className="text-text-secondary">{currentTutorial?.content?.overview}</p>
            </div>
            {currentTutorial?.content?.scenarios?.map((scenario, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-error/10 rounded-lg flex items-center justify-center">
                    <Icon name={scenario?.icon} size={24} className="text-error" />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary">{scenario?.type}</h4>
                </div>
                
                <div className="space-y-3">
                  {scenario?.steps?.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-text-primary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'location-sharing':
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-text-secondary">{currentTutorial?.content?.overview}</p>
            </div>
            {currentTutorial?.content?.settings?.map((setting, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-3">{setting?.feature}</h4>
                <p className="text-text-secondary mb-4">{setting?.description}</p>
                
                {setting?.steps && (
                  <div className="space-y-2">
                    {setting?.steps?.map((step, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Icon name="ArrowRight" size={16} className="text-primary mt-0.5" />
                        <span className="text-sm text-text-primary">{step}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {setting?.options && (
                  <div className="space-y-2">
                    {setting?.options?.map((option, idx) => (
                      <div key={idx} className="flex items-start space-x-3 p-2 bg-muted/30 rounded">
                        <Icon name="Settings" size={16} className="text-accent mt-0.5" />
                        <span className="text-sm text-text-primary">{option}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {setting?.benefits && (
                  <div className="space-y-2">
                    {setting?.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-0.5" />
                        <span className="text-sm text-text-primary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'ai-assistant':
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-text-secondary">{currentTutorial?.content?.overview}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentTutorial?.content?.capabilities?.map((capability, index) => (
                <div key={index} className="border border-border rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name={capability?.icon} size={20} className="text-accent" />
                    </div>
                    <h4 className="font-semibold text-text-primary">{capability?.category}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {capability?.examples?.map((example, idx) => (
                      <div key={idx} className="p-3 bg-accent/5 rounded-lg">
                        <div className="flex items-start space-x-2">
                          <Icon name="MessageCircle" size={16} className="text-accent mt-0.5" />
                          <span className="text-sm text-text-primary italic">"{example}"</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'offline-features':
        return (
          <div className="space-y-6">
            <div className="bg-warning/5 border border-warning/20 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="WifiOff" size={20} className="text-warning" />
                <span className="font-medium text-warning">Offline Mode</span>
              </div>
              <p className="text-text-secondary">{currentTutorial?.content?.overview}</p>
            </div>
            {currentTutorial?.content?.offlineFeatures?.map((feature, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <h4 className="text-lg font-semibold text-text-primary mb-3">{feature?.feature}</h4>
                <p className="text-text-secondary mb-4">{feature?.description}</p>
                
                {feature?.details && (
                  <div className="grid grid-cols-2 gap-2">
                    {feature?.details?.map((detail, idx) => (
                      <div key={idx} className="p-2 bg-error/5 rounded text-center">
                        <span className="text-sm font-medium text-error">{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {feature?.benefits && (
                  <div className="space-y-2">
                    {feature?.benefits?.map((benefit, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-success mt-0.5" />
                        <span className="text-sm text-text-primary">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {feature?.categories && (
                  <div className="grid grid-cols-2 gap-2">
                    {feature?.categories?.map((category, idx) => (
                      <div key={idx} className="p-2 bg-secondary/5 rounded text-center">
                        <span className="text-sm text-secondary">{category}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {feature?.documents && (
                  <div className="space-y-2">
                    {feature?.documents?.map((doc, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-2 bg-muted/30 rounded">
                        <Icon name="FileText" size={16} className="text-primary" />
                        <span className="text-sm text-text-primary">{doc}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
      <div className="mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Play" size={32} color="white" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Interactive Tutorial</h2>
          <p className="text-text-secondary">Learn how to use SafeGuard India effectively</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-text-secondary">
            Step {currentStep + 1} of {tutorialSteps?.length}
          </span>
          <span className="text-sm text-text-secondary">
            {Math.round(((currentStep + 1) / tutorialSteps?.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-6">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / tutorialSteps?.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {tutorialSteps?.map((step, index) => (
            <button
              key={step?.id}
              onClick={() => setCurrentStep(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                index === currentStep
                  ? 'bg-primary text-primary-foreground'
                  : index < currentStep
                  ? 'bg-success/10 text-success border border-success/20' :'bg-muted text-text-secondary hover:bg-muted/80'
              }`}
            >
              <Icon
                name={index < currentStep ? 'CheckCircle' : step?.icon}
                size={16}
              />
              <span className="text-sm font-medium">{step?.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name={currentTutorial?.icon} size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary">{currentTutorial?.title}</h3>
              <p className="text-sm text-text-secondary">{currentTutorial?.description}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-text-secondary">{currentTutorial?.duration}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={handlePlayPause}
              iconName={isPlaying ? "Pause" : "Play"}
              iconPosition="left"
            >
              {isPlaying ? 'Pause' : 'Play'} Audio
            </Button>
          </div>
        </div>

        {renderTutorialContent()}
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Previous
        </Button>

        {currentStep < tutorialSteps?.length - 1 ? (
          <Button
            variant="default"
            onClick={() => setCurrentStep(currentStep + 1)}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Next Step
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={onComplete}
            iconName="CheckCircle"
            iconPosition="left"
          >
            Complete Tutorial
          </Button>
        )}
      </div>
      {currentStep === tutorialSteps?.length - 1 && (
        <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg text-center">
          <Icon name="Award" size={24} className="text-success mx-auto mb-2" />
          <p className="text-success font-medium">Great job! You're now ready to use SafeGuard India safely.</p>
        </div>
      )}
    </div>
  );
};

export default InteractiveTutorial;