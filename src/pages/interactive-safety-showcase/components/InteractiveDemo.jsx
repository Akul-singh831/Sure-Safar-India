import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [selectedTourist, setSelectedTourist] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [demoStep, setDemoStep] = useState(1);

  const tourists = [
    {
      id: 1,
      name: "Sarah Johnson",
      country: "United States",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      status: "safe",
      location: "Red Fort, Delhi",
      lastUpdate: "2 minutes ago",
      riskLevel: "low",
      verificationStatus: "verified"
    },
    {
      id: 2,
      name: "Marco Rodriguez",
      country: "Spain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      status: "alert",
      location: "Connaught Place, Delhi",
      lastUpdate: "5 minutes ago",
      riskLevel: "medium",
      verificationStatus: "verified"
    },
    {
      id: 3,
      name: "Emma Thompson",
      country: "United Kingdom",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      status: "safe",
      location: "India Gate, Delhi",
      lastUpdate: "1 minute ago",
      riskLevel: "low",
      verificationStatus: "verified"
    }
  ];

  const locations = [
    {
      id: 1,
      name: "Red Fort",
      area: "Old Delhi",
      coverage: "Full Coverage",
      responders: 12,
      avgResponseTime: "3.2 minutes",
      safetyRating: 4.8,
      coordinates: { lat: 28.6562, lng: 77.2410 }
    },
    {
      id: 2,
      name: "Connaught Place",
      area: "Central Delhi",
      coverage: "Enhanced Coverage",
      responders: 18,
      avgResponseTime: "2.8 minutes",
      safetyRating: 4.9,
      coordinates: { lat: 28.6315, lng: 77.2167 }
    },
    {
      id: 3,
      name: "India Gate",
      area: "Central Delhi",
      coverage: "Full Coverage",
      responders: 15,
      avgResponseTime: "3.0 minutes",
      safetyRating: 4.7,
      coordinates: { lat: 28.6129, lng: 77.2295 }
    }
  ];

  const emergencyScenarios = [
    {
      id: 1,
      title: "Medical Emergency",
      description: "Tourist requires immediate medical assistance",
      responseTime: "2.3 minutes",
      agencies: ["Medical", "Police", "Embassy"]
    },
    {
      id: 2,
      title: "Lost Tourist",
      description: "Tourist separated from group in crowded area",
      responseTime: "1.8 minutes",
      agencies: ["Police", "Tourist Helpline"]
    },
    {
      id: 3,
      title: "Safety Concern",
      description: "Potential threat detected by AI monitoring",
      responseTime: "1.2 minutes",
      agencies: ["Police", "Security"]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'safe':
        return 'text-success bg-success/10 border-success/20';
      case 'alert':
        return 'text-warning bg-warning/10 border-warning/20';
      case 'emergency':
        return 'text-error bg-error/10 border-error/20';
      default:
        return 'text-muted bg-muted/10 border-muted/20';
    }
  };

  const getRiskLevelColor = (level) => {
    switch (level) {
      case 'low':
        return 'bg-success text-success-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'high':
        return 'bg-error text-error-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const simulateEmergency = () => {
    setEmergencyActive(true);
    setDemoStep(1);
    
    // Simulate emergency response steps
    setTimeout(() => setDemoStep(2), 1000);
    setTimeout(() => setDemoStep(3), 3000);
    setTimeout(() => setDemoStep(4), 5000);
    setTimeout(() => {
      setEmergencyActive(false);
      setDemoStep(1);
    }, 8000);
  };

  return (
    <div className="space-y-8">
      {/* Demo Controls */}
      <div className="bg-card rounded-xl border border-border p-6">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2">Live Demo Environment</h3>
            <p className="text-text-secondary">Interact with tourists, locations, and emergency scenarios to see SafeGuard in action</p>
          </div>
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              iconName="RotateCcw" 
              iconPosition="left"
              onClick={() => {
                setSelectedTourist(null);
                setSelectedLocation(null);
                setEmergencyActive(false);
                setDemoStep(1);
              }}
            >
              Reset Demo
            </Button>
            <Button 
              variant="destructive" 
              iconName="AlertTriangle" 
              iconPosition="left"
              onClick={simulateEmergency}
              disabled={emergencyActive}
            >
              {emergencyActive ? 'Emergency Active' : 'Simulate Emergency'}
            </Button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Tourist Monitoring Panel */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Active Tourists</h3>
              <p className="text-sm text-text-secondary">Click on any tourist to view their protection status</p>
            </div>
          </div>

          <div className="space-y-4">
            {tourists?.map((tourist) => (
              <div
                key={tourist?.id}
                onClick={() => setSelectedTourist(tourist)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:shadow-medium ${
                  selectedTourist?.id === tourist?.id
                    ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={tourist?.avatar}
                      alt={tourist?.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                      tourist?.status === 'safe' ? 'bg-success' : 
                      tourist?.status === 'alert' ? 'bg-warning' : 'bg-error'
                    }`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-text-primary">{tourist?.name}</h4>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(tourist?.status)}`}>
                        {tourist?.status?.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-text-secondary">{tourist?.country}</p>
                    <p className="text-xs text-text-secondary mt-1">{tourist?.location} • {tourist?.lastUpdate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tourist Details Panel */}
          {selectedTourist && (
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
              <h4 className="font-semibold text-text-primary mb-3">Protection Status</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-text-secondary">Risk Level</p>
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getRiskLevelColor(selectedTourist?.riskLevel)}`}>
                    {selectedTourist?.riskLevel?.toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Verification</p>
                  <div className="flex items-center space-x-1">
                    <Icon name="CheckCircle" size={14} className="text-success" />
                    <span className="text-xs text-success font-medium">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Location Coverage Panel */}
        <div className="bg-card rounded-xl border border-border p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name="MapPin" size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Coverage Areas</h3>
              <p className="text-sm text-text-secondary">Select a location to view safety details</p>
            </div>
          </div>

          <div className="space-y-4">
            {locations?.map((location) => (
              <div
                key={location?.id}
                onClick={() => setSelectedLocation(location)}
                className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 hover:shadow-medium ${
                  selectedLocation?.id === location?.id
                    ? 'border-accent bg-accent/5' :'border-border hover:border-accent/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-text-primary">{location?.name}</h4>
                    <p className="text-sm text-text-secondary">{location?.area}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-secondary fill-current" />
                      <span className="text-sm font-medium text-text-primary">{location?.safetyRating}</span>
                    </div>
                    <p className="text-xs text-text-secondary">{location?.coverage}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Location Details Panel */}
          {selectedLocation && (
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-border">
              <h4 className="font-semibold text-text-primary mb-3">Safety Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-text-secondary">Active Responders</p>
                  <p className="text-lg font-bold text-text-primary">{selectedLocation?.responders}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Avg Response Time</p>
                  <p className="text-lg font-bold text-text-primary">{selectedLocation?.avgResponseTime}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Emergency Response Simulation */}
      {emergencyActive && (
        <div className="bg-error/5 border border-error/20 rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-error/10 rounded-lg flex items-center justify-center">
              <Icon name="AlertTriangle" size={20} className="text-error animate-pulse-soft" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-error">Emergency Response Simulation</h3>
              <p className="text-sm text-text-secondary">Watching real-time emergency coordination</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: 1, title: "Alert Received", icon: "Bell", time: "0:00" },
              { step: 2, title: "Agencies Notified", icon: "Users", time: "0:15" },
              { step: 3, title: "Response Dispatched", icon: "Truck", time: "0:45" },
              { step: 4, title: "On-Site Assistance", icon: "CheckCircle", time: "2:30" }
            ]?.map((item) => (
              <div
                key={item?.step}
                className={`p-4 rounded-lg border transition-all duration-500 ${
                  demoStep >= item?.step
                    ? 'bg-success/10 border-success/20' :'bg-muted/30 border-border'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    demoStep >= item?.step ? 'bg-success text-success-foreground' : 'bg-muted text-muted-foreground'
                  }`}>
                    <Icon name={item?.icon} size={16} />
                  </div>
                  <span className="text-xs font-medium text-text-secondary">{item?.time}</span>
                </div>
                <h4 className="font-semibold text-text-primary text-sm">{item?.title}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDemo;