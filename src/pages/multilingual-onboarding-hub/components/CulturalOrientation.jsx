import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CulturalOrientation = ({ selectedCountry, onComplete }) => {
  const [currentModule, setCurrentModule] = useState(0);
  const [completedModules, setCompletedModules] = useState(new Set());

  const culturalModules = [
    {
      id: 'safety-tips',
      title: 'Regional Safety Tips',
      icon: 'Shield',
      duration: '5 min',
      content: {
        overview: 'Essential safety guidelines for your region of travel in India',
        tips: [
          'Always carry a copy of your passport and visa',
          'Use registered taxis or ride-sharing apps like Uber/Ola',
          'Avoid displaying expensive jewelry or electronics openly',
          'Stay hydrated and use bottled water in unfamiliar areas',
          'Keep emergency contacts saved in your phone',
          'Inform someone about your daily itinerary'
        ],
        emergencyNumbers: [
          { service: 'Police', number: '100', description: 'For immediate police assistance' },
          { service: 'Medical Emergency', number: '108', description: 'Ambulance and medical help' },
          { service: 'Tourist Helpline', number: '1363', description: '24/7 tourist assistance' },
          { service: 'Fire Brigade', number: '101', description: 'Fire emergency services' }
        ]
      }
    },
    {
      id: 'local-customs',
      title: 'Local Customs & Etiquette',
      icon: 'Heart',
      duration: '7 min',
      content: {
        overview: 'Understanding Indian culture and social norms for respectful interactions',
        customs: [
          {
            title: 'Greetings',
            description: 'Namaste with palms together is widely appreciated',
            dos: ['Use both hands when receiving items', 'Remove shoes before entering homes/temples'],
            donts: ['Avoid pointing feet towards people', 'Don\'t touch someone\'s head']
          },
          {
            title: 'Dining Etiquette',
            description: 'Food is often eaten with hands, especially bread and rice',
            dos: ['Wash hands before and after meals', 'Try local cuisine with an open mind'],
            donts: ['Don\'t use left hand for eating', 'Avoid beef in Hindu-majority areas']
          },
          {
            title: 'Religious Sites',
            description: 'India has diverse religious practices requiring respect',
            dos: ['Dress modestly covering shoulders and knees', 'Follow photography rules'],
            donts: ['Don\'t wear leather items in some temples', 'Avoid loud conversations']
          }
        ]
      }
    },
    {
      id: 'emergency-protocols',
      title: 'Emergency Protocols',
      icon: 'AlertTriangle',
      duration: '6 min',
      content: {
        overview: 'Step-by-step procedures for various emergency situations',
        scenarios: [
          {
            type: 'Medical Emergency',
            icon: 'Heart',
            steps: [
              'Call 108 for ambulance services immediately',
              'Contact your embassy if serious',
              'Keep insurance documents ready',
              'Inform SafeGuard India through the app',
              'Have someone accompany you to hospital'
            ]
          },
          {
            type: 'Lost/Stolen Documents',
            icon: 'FileX',
            steps: [
              'Report to local police station immediately',
              'Contact your embassy/consulate',
              'File FIR (First Information Report)',
              'Apply for emergency travel documents',
              'Inform your travel insurance provider'
            ]
          },
          {
            type: 'Natural Disasters',
            icon: 'Cloud',
            steps: [
              'Follow local authority instructions',
              'Move to designated safe areas',
              'Keep emergency kit ready',
              'Stay updated through official channels',
              'Contact embassy for evacuation if needed'
            ]
          }
        ]
      }
    },
    {
      id: 'communication-guide',
      title: 'Communication Guide',
      icon: 'MessageCircle',
      duration: '4 min',
      content: {
        overview: 'Essential phrases and communication tips for India',
        phrases: [
          { english: 'Hello', hindi: 'Namaste', pronunciation: 'nah-mas-tay' },
          { english: 'Thank you', hindi: 'Dhanyawad', pronunciation: 'dhan-ya-waad' },
          { english: 'Please help me', hindi: 'Kripaya meri madad kariye', pronunciation: 'kri-pa-ya me-ri ma-dad ka-ri-ye' },
          { english: 'Where is...?', hindi: 'Kahan hai...?', pronunciation: 'ka-han hai' },
          { english: 'How much?', hindi: 'Kitna paisa?', pronunciation: 'kit-na pai-sa' },
          { english: 'I need a doctor', hindi: 'Mujhe doctor chahiye', pronunciation: 'muj-he doc-tor cha-hi-ye' }
        ],
        tips: [
          'English is widely spoken in tourist areas',
          'Use translation apps for complex conversations',
          'Learn basic numbers for shopping and bargaining',
          'Gestures can help bridge language gaps',
          'Hotel staff usually speak multiple languages'
        ]
      }
    }
  ];

  const handleModuleComplete = (moduleId) => {
    setCompletedModules(prev => new Set([...prev, moduleId]));
    if (currentModule < culturalModules?.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };

  const renderModuleContent = (module) => {
    switch (module.id) {
      case 'safety-tips':
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-text-secondary">{module.content?.overview}</p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="CheckCircle" size={20} className="text-success mr-2" />
                Essential Safety Tips
              </h4>
              <div className="space-y-3">
                {module.content?.tips?.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-card border border-border rounded-lg">
                    <Icon name="Shield" size={16} className="text-primary mt-0.5" />
                    <span className="text-sm text-text-primary">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Phone" size={20} className="text-error mr-2" />
                Emergency Numbers
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {module.content?.emergencyNumbers?.map((emergency, index) => (
                  <div key={index} className="p-4 bg-error/5 border border-error/20 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-text-primary">{emergency?.service}</span>
                      <span className="text-xl font-bold text-error">{emergency?.number}</span>
                    </div>
                    <p className="text-sm text-text-secondary">{emergency?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'local-customs':
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-text-secondary">{module.content?.overview}</p>
            </div>
            {module.content?.customs?.map((custom, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <h4 className="font-semibold text-text-primary mb-2">{custom?.title}</h4>
                <p className="text-text-secondary mb-4">{custom?.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-success mb-2 flex items-center">
                      <Icon name="Check" size={16} className="mr-1" />
                      Do's
                    </h5>
                    <ul className="space-y-1">
                      {custom?.dos?.map((item, idx) => (
                        <li key={idx} className="text-sm text-text-secondary flex items-start">
                          <Icon name="Dot" size={16} className="text-success mr-1 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-error mb-2 flex items-center">
                      <Icon name="X" size={16} className="mr-1" />
                      Don'ts
                    </h5>
                    <ul className="space-y-1">
                      {custom?.donts?.map((item, idx) => (
                        <li key={idx} className="text-sm text-text-secondary flex items-start">
                          <Icon name="Dot" size={16} className="text-error mr-1 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'emergency-protocols':
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-text-secondary">{module.content?.overview}</p>
            </div>
            {module.content?.scenarios?.map((scenario, index) => (
              <div key={index} className="border border-border rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
                    <Icon name={scenario?.icon} size={20} className="text-error" />
                  </div>
                  <h4 className="font-semibold text-text-primary">{scenario?.type}</h4>
                </div>
                
                <div className="space-y-3">
                  {scenario?.steps?.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
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

      case 'communication-guide':
        return (
          <div className="space-y-6">
            <div className="bg-muted/50 rounded-lg p-4">
              <p className="text-text-secondary">{module.content?.overview}</p>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Languages" size={20} className="text-primary mr-2" />
                Essential Phrases
              </h4>
              <div className="space-y-3">
                {module.content?.phrases?.map((phrase, index) => (
                  <div key={index} className="p-4 bg-card border border-border rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      <div>
                        <span className="text-sm text-text-secondary">English</span>
                        <p className="font-medium text-text-primary">{phrase?.english}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Hindi</span>
                        <p className="font-medium text-text-primary">{phrase?.hindi}</p>
                      </div>
                      <div>
                        <span className="text-sm text-text-secondary">Pronunciation</span>
                        <p className="font-medium text-accent">{phrase?.pronunciation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4 flex items-center">
                <Icon name="Lightbulb" size={20} className="text-secondary mr-2" />
                Communication Tips
              </h4>
              <div className="space-y-2">
                {module.content?.tips?.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
                    <Icon name="MessageCircle" size={16} className="text-secondary mt-0.5" />
                    <span className="text-sm text-text-primary">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const currentModuleData = culturalModules?.[currentModule];
  const isCompleted = completedModules?.has(currentModuleData?.id);
  const allCompleted = completedModules?.size === culturalModules?.length;

  return (
    <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
      <div className="mb-8">
        <div className="text-center mb-6">
          <div className="w-16 h-16 gradient-cultural rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="BookOpen" size={32} color="white" />
          </div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Cultural Orientation</h2>
          <p className="text-text-secondary">Learn about Indian culture and safety practices</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-text-secondary">
            Module {currentModule + 1} of {culturalModules?.length}
          </span>
          <span className="text-sm text-text-secondary">
            {Math.round(((currentModule + 1) / culturalModules?.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2 mb-6">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentModule + 1) / culturalModules?.length) * 100}%` }}
          ></div>
        </div>

        <div className="flex space-x-2 mb-6 overflow-x-auto">
          {culturalModules?.map((module, index) => (
            <button
              key={module.id}
              onClick={() => setCurrentModule(index)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-200 ${
                index === currentModule
                  ? 'bg-primary text-primary-foreground'
                  : completedModules?.has(module.id)
                  ? 'bg-success/10 text-success border border-success/20' :'bg-muted text-text-secondary hover:bg-muted/80'
              }`}
            >
              <Icon
                name={completedModules?.has(module.id) ? 'CheckCircle' : module.icon}
                size={16}
              />
              <span className="text-sm font-medium">{module.title}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              isCompleted ? 'bg-success/20' : 'bg-primary/20'
            }`}>
              <Icon
                name={isCompleted ? 'CheckCircle' : currentModuleData?.icon}
                size={24}
                className={isCompleted ? 'text-success' : 'text-primary'}
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-text-primary">{currentModuleData?.title}</h3>
              <p className="text-sm text-text-secondary">Duration: {currentModuleData?.duration}</p>
            </div>
          </div>
          {isCompleted && (
            <div className="flex items-center space-x-2 text-success">
              <Icon name="CheckCircle" size={20} />
              <span className="text-sm font-medium">Completed</span>
            </div>
          )}
        </div>

        {renderModuleContent(currentModuleData)}
      </div>
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentModule(Math.max(0, currentModule - 1))}
          disabled={currentModule === 0}
          iconName="ArrowLeft"
          iconPosition="left"
        >
          Previous
        </Button>

        {!isCompleted ? (
          <Button
            variant="default"
            onClick={() => handleModuleComplete(currentModuleData?.id)}
            iconName="Check"
            iconPosition="left"
          >
            Complete Module
          </Button>
        ) : currentModule < culturalModules?.length - 1 ? (
          <Button
            variant="default"
            onClick={() => setCurrentModule(currentModule + 1)}
            iconName="ArrowRight"
            iconPosition="right"
          >
            Next Module
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={onComplete}
            iconName="CheckCircle"
            iconPosition="left"
          >
            Complete Orientation
          </Button>
        )}
      </div>
      {allCompleted && (
        <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg text-center">
          <Icon name="Award" size={24} className="text-success mx-auto mb-2" />
          <p className="text-success font-medium">Congratulations! You've completed all cultural orientation modules.</p>
        </div>
      )}
    </div>
  );
};

export default CulturalOrientation;