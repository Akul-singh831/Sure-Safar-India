import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const LiveDemoEnvironment = () => {
  const [activeDemo, setActiveDemo] = useState('checkin');
  const [demoData, setDemoData] = useState({
    touristName: '',
    passportNumber: '',
    location: '',
    emergencyType: 'medical'
  });
  const [demoStep, setDemoStep] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);

  const demoTypes = [
    {
      id: 'checkin',
      name: 'Tourist Check-in',
      icon: 'UserPlus',
      description: 'Simulate tourist registration and identity verification'
    },
    {
      id: 'tracking',
      name: 'Location Sharing',
      icon: 'MapPin',
      description: 'Experience real-time location tracking and family sharing'
    },
    {
      id: 'emergency',
      name: 'Emergency Alert',
      icon: 'AlertTriangle',
      description: 'Test emergency response coordination and communication'
    }
  ];

  const emergencyTypes = [
    { id: 'medical', name: 'Medical Emergency', icon: 'Heart' },
    { id: 'safety', name: 'Safety Concern', icon: 'Shield' },
    { id: 'lost', name: 'Lost/Separated', icon: 'Search' },
    { id: 'other', name: 'Other Emergency', icon: 'AlertCircle' }
  ];

  const mockLocations = [
    'Red Fort, Delhi',
    'Taj Mahal, Agra',
    'Hawa Mahal, Jaipur',
    'Gateway of India, Mumbai',
    'Mysore Palace, Karnataka'
  ];

  const simulateProcess = async (steps) => {
    setIsProcessing(true);
    setDemoStep(0);
    
    for (let i = 0; i < steps?.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setDemoStep(i + 1);
    }
    
    setTimeout(() => {
      setIsProcessing(false);
      setDemoStep(0);
    }, 2000);
  };

  const handleCheckinDemo = () => {
    const steps = [
      'Verifying passport details...',
      'Checking visa status...',
      'Creating blockchain identity...',
      'Activating safety monitoring...',
      'Registration complete!'
    ];
    simulateProcess(steps);
  };

  const handleTrackingDemo = () => {
    const steps = [
      'Activating GPS tracking...',
      'Establishing secure connection...',
      'Notifying family members...',
      'Location sharing active!'
    ];
    simulateProcess(steps);
  };

  const handleEmergencyDemo = () => {
    const steps = [
      'Emergency alert received...',
      'Identifying nearest responders...',
      'Notifying emergency services...',
      'Coordinating response team...',
      'Help is on the way!'
    ];
    simulateProcess(steps);
  };

  const getStepStatus = (stepIndex) => {
    if (stepIndex < demoStep) return 'completed';
    if (stepIndex === demoStep) return 'active';
    return 'pending';
  };

  const getStepColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-success text-success-foreground';
      case 'active':
        return 'bg-primary text-primary-foreground animate-pulse-soft';
      case 'pending':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-strong border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-secondary text-secondary-foreground p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
            <Icon name="Play" size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Live Demo Environment</h2>
          <p className="text-secondary-foreground/80 max-w-2xl mx-auto">
            Experience SafeGuard's capabilities through interactive simulations. Test tourist registration, location sharing, and emergency response protocols.
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Demo Type Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {demoTypes?.map((demo) => (
              <button
                key={demo?.id}
                onClick={() => setActiveDemo(demo?.id)}
                className={`p-6 rounded-xl border transition-all duration-300 text-left hover:shadow-medium ${
                  activeDemo === demo?.id
                    ? 'border-primary bg-primary/5 shadow-medium'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  activeDemo === demo?.id ? 'bg-primary/20' : 'bg-muted'
                }`}>
                  <Icon 
                    name={demo?.icon} 
                    size={24} 
                    className={activeDemo === demo?.id ? 'text-primary' : 'text-text-secondary'} 
                  />
                </div>
                <h3 className="font-bold text-text-primary mb-2">{demo?.name}</h3>
                <p className="text-sm text-text-secondary">{demo?.description}</p>
              </button>
            ))}
          </div>

          {/* Demo Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <div className="bg-muted/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-text-primary mb-6">
                {demoTypes?.find(d => d?.id === activeDemo)?.name} Demo
              </h3>

              {/* Tourist Check-in Form */}
              {activeDemo === 'checkin' && (
                <div className="space-y-4">
                  <Input
                    label="Tourist Name"
                    type="text"
                    placeholder="Enter full name"
                    value={demoData?.touristName}
                    onChange={(e) => setDemoData({...demoData, touristName: e?.target?.value})}
                  />
                  <Input
                    label="Passport Number"
                    type="text"
                    placeholder="Enter passport number"
                    value={demoData?.passportNumber}
                    onChange={(e) => setDemoData({...demoData, passportNumber: e?.target?.value})}
                  />
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-2">Current Location</label>
                    <select 
                      className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                      value={demoData?.location}
                      onChange={(e) => setDemoData({...demoData, location: e?.target?.value})}
                    >
                      <option value="">Select location</option>
                      {mockLocations?.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                      ))}
                    </select>
                  </div>
                  <Button 
                    variant="default" 
                    fullWidth 
                    iconName="UserPlus" 
                    iconPosition="left"
                    onClick={handleCheckinDemo}
                    disabled={isProcessing || !demoData?.touristName || !demoData?.passportNumber || !demoData?.location}
                    loading={isProcessing}
                  >
                    Start Check-in Process
                  </Button>
                </div>
              )}

              {/* Location Tracking Form */}
              {activeDemo === 'tracking' && (
                <div className="space-y-4">
                  <div className="bg-background border border-border rounded-lg p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={20} className="text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary">Current Location</h4>
                        <p className="text-sm text-text-secondary">Red Fort, Delhi</p>
                      </div>
                    </div>
                    <div className="text-xs text-text-secondary">
                      Last updated: {new Date()?.toLocaleTimeString()}
                    </div>
                  </div>
                  
                  <div className="bg-background border border-border rounded-lg p-4">
                    <h4 className="font-semibold text-text-primary mb-3">Family Members to Notify</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Image
                          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                          alt="Family member"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-text-primary">John Smith (Father)</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Image
                          src="https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=40&h=40&fit=crop&crop=face"
                          alt="Family member"
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-text-primary">Mary Smith (Mother)</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="default" 
                    fullWidth 
                    iconName="Share" 
                    iconPosition="left"
                    onClick={handleTrackingDemo}
                    disabled={isProcessing}
                    loading={isProcessing}
                  >
                    Activate Location Sharing
                  </Button>
                </div>
              )}

              {/* Emergency Alert Form */}
              {activeDemo === 'emergency' && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-primary mb-3">Emergency Type</label>
                    <div className="grid grid-cols-2 gap-3">
                      {emergencyTypes?.map((type) => (
                        <button
                          key={type?.id}
                          onClick={() => setDemoData({...demoData, emergencyType: type?.id})}
                          className={`p-3 rounded-lg border transition-all duration-300 ${
                            demoData?.emergencyType === type?.id
                              ? 'border-error bg-error/5 text-error' :'border-border hover:border-error/50'
                          }`}
                        >
                          <div className="flex items-center space-x-2">
                            <Icon name={type?.icon} size={16} />
                            <span className="text-sm font-medium">{type?.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="AlertTriangle" size={20} className="text-warning mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-warning mb-1">Demo Alert</h4>
                        <p className="text-sm text-text-secondary">
                          This is a simulation. No actual emergency services will be contacted.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="destructive" 
                    fullWidth 
                    iconName="AlertTriangle" 
                    iconPosition="left"
                    onClick={handleEmergencyDemo}
                    disabled={isProcessing}
                    loading={isProcessing}
                  >
                    Trigger Emergency Alert
                  </Button>
                </div>
              )}
            </div>

            {/* Process Visualization */}
            <div className="bg-background border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-text-primary mb-6">Process Visualization</h3>

              {!isProcessing && demoStep === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Play" size={32} className="text-text-secondary" />
                  </div>
                  <p className="text-text-secondary">
                    Fill out the form and click the button to start the demo
                  </p>
                </div>
              )}

              {(isProcessing || demoStep > 0) && (
                <div className="space-y-4">
                  {activeDemo === 'checkin' && [
                    'Verifying passport details',
                    'Checking visa status',
                    'Creating blockchain identity',
                    'Activating safety monitoring',
                    'Registration complete'
                  ]?.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getStepColor(getStepStatus(index))}`}>
                        {getStepStatus(index) === 'completed' ? (
                          <Icon name="Check" size={16} />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className="text-text-primary">{step}</span>
                    </div>
                  ))}

                  {activeDemo === 'tracking' && [
                    'Activating GPS tracking',
                    'Establishing secure connection',
                    'Notifying family members',
                    'Location sharing active'
                  ]?.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getStepColor(getStepStatus(index))}`}>
                        {getStepStatus(index) === 'completed' ? (
                          <Icon name="Check" size={16} />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className="text-text-primary">{step}</span>
                    </div>
                  ))}

                  {activeDemo === 'emergency' && [
                    'Emergency alert received',
                    'Identifying nearest responders',
                    'Notifying emergency services',
                    'Coordinating response team',
                    'Help is on the way'
                  ]?.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getStepColor(getStepStatus(index))}`}>
                        {getStepStatus(index) === 'completed' ? (
                          <Icon name="Check" size={16} />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className="text-text-primary">{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {!isProcessing && demoStep > 0 && (
                <div className="mt-6 p-4 bg-success/10 border border-success/20 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={20} className="text-success" />
                    <span className="font-semibold text-success">Demo Completed Successfully!</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveDemoEnvironment;