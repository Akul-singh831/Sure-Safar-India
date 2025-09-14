import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudySection = () => {
  const [selectedCase, setSelectedCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "Medical Emergency Response",
      location: "Jaipur, Rajasthan",
      date: "November 2024",
      category: "Medical",
      outcome: "Successful",
      responseTime: "2.3 minutes",
      description: "Tourist experienced severe allergic reaction during heritage site visit. AI monitoring detected distress signals and coordinated immediate medical response.",
      timeline: [
        { time: "14:23", event: "AI detects irregular heart rate pattern", status: "detected" },
        { time: "14:24", event: "Emergency alert triggered automatically", status: "alert" },
        { time: "14:25", event: "Medical team and police dispatched", status: "response" },
        { time: "14:26", event: "Tourist's family notified via app", status: "notification" },
        { time: "14:28", event: "Medical assistance arrives on scene", status: "arrival" },
        { time: "14:35", event: "Tourist stabilized and transported", status: "resolved" }
      ],
      metrics: {
        agenciesInvolved: 3,
        touristsHelped: 1,
        familyNotified: "Yes",
        followUpCompleted: "Yes"
      },
      image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Lost Tourist Recovery",
      location: "Old Delhi Market",
      date: "October 2024",
      category: "Safety",
      outcome: "Successful",
      responseTime: "1.8 minutes",
      description: "Tourist separated from group in crowded market area. Blockchain identity verification enabled rapid location and safe reunion.",
      timeline: [
        { time: "16:45", event: "Tourist reports separation from group", status: "detected" },
        { time: "16:46", event: "Location tracking activated", status: "alert" },
        { time: "16:47", event: "Local police and guides notified", status: "response" },
        { time: "16:48", event: "Tourist\'s group contacted", status: "notification" },
        { time: "16:52", event: "Tourist located using GPS tracking", status: "arrival" },
        { time: "16:58", event: "Safe reunion with travel group", status: "resolved" }
      ],
      metrics: {
        agenciesInvolved: 2,
        touristsHelped: 1,
        familyNotified: "Yes",
        followUpCompleted: "Yes"
      },
      image: "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Preventive Safety Intervention",
      location: "Goa Beach Area",
      date: "December 2024",
      category: "Prevention",
      outcome: "Successful",
      responseTime: "1.2 minutes",
      description: "AI monitoring identified potential safety risk based on location and time patterns. Proactive intervention prevented incident escalation.",
      timeline: [
        { time: "22:15", event: "AI flags unusual location pattern", status: "detected" },
        { time: "22:16", event: "Risk assessment algorithm activated", status: "alert" },
        { time: "22:17", event: "Local security team alerted", status: "response" },
        { time: "22:18", event: "Tourist contacted via app notification", status: "notification" },
        { time: "22:20", event: "Security personnel arrive at location", status: "arrival" },
        { time: "22:25", event: "Situation assessed as safe", status: "resolved" }
      ],
      metrics: {
        agenciesInvolved: 2,
        touristsHelped: 2,
        familyNotified: "No",
        followUpCompleted: "Yes"
      },
      image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?w=400&h=250&fit=crop"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'detected':
        return 'bg-secondary text-secondary-foreground';
      case 'alert':
        return 'bg-warning text-warning-foreground';
      case 'response':
        return 'bg-primary text-primary-foreground';
      case 'notification':
        return 'bg-accent text-accent-foreground';
      case 'arrival':
        return 'bg-trust text-trust-foreground';
      case 'resolved':
        return 'bg-success text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Medical':
        return 'bg-error/10 text-error border-error/20';
      case 'Safety':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Prevention':
        return 'bg-success/10 text-success border-success/20';
      default:
        return 'bg-muted/10 text-muted border-muted/20';
    }
  };

  const currentCase = caseStudies?.[selectedCase];

  return (
    <div className="bg-card rounded-2xl shadow-strong border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-4">
            <Icon name="FileText" size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-2">Real Success Stories</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Anonymized case studies showcasing how SafeGuard's AI-powered system has successfully protected tourists across India
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Case Study Navigation */}
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
            {caseStudies?.map((caseStudy, index) => (
              <button
                key={caseStudy?.id}
                onClick={() => setSelectedCase(index)}
                className={`flex-1 p-4 rounded-xl border transition-all duration-300 text-left hover:shadow-medium ${
                  selectedCase === index
                    ? 'border-primary bg-primary/5 shadow-medium'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(caseStudy?.category)}`}>
                    {caseStudy?.category}
                  </span>
                  <span className="text-xs text-text-secondary">{caseStudy?.date}</span>
                </div>
                <h3 className="font-semibold text-text-primary mb-1">{caseStudy?.title}</h3>
                <p className="text-sm text-text-secondary">{caseStudy?.location}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} className="text-success" />
                    <span className="text-xs text-success font-medium">{caseStudy?.responseTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="CheckCircle" size={12} className="text-success" />
                    <span className="text-xs text-success font-medium">{caseStudy?.outcome}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Case Study Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case Overview */}
            <div className="lg:col-span-2 space-y-6">
              {/* Case Header */}
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Image
                    src={currentCase?.image}
                    alt={currentCase?.title}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-text-primary">{currentCase?.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(currentCase?.category)}`}>
                        {currentCase?.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={14} />
                        <span>{currentCase?.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{currentCase?.date}</span>
                      </div>
                    </div>
                    <p className="text-text-secondary leading-relaxed">{currentCase?.description}</p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="bg-background border border-border rounded-xl p-6">
                <h4 className="text-lg font-bold text-text-primary mb-6">Response Timeline</h4>
                <div className="space-y-4">
                  {currentCase?.timeline?.map((event, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex flex-col items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${getStatusColor(event?.status)}`}>
                          {index + 1}
                        </div>
                        {index < currentCase?.timeline?.length - 1 && (
                          <div className="w-0.5 h-8 bg-border mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 pb-4">
                        <div className="flex items-center space-x-3 mb-1">
                          <span className="text-sm font-medium text-text-primary">{event?.time}</span>
                          <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(event?.status)}`}>
                            {event?.status?.toUpperCase()}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary">{event?.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics & Impact */}
            <div className="space-y-6">
              {/* Key Metrics */}
              <div className="bg-background border border-border rounded-xl p-6">
                <h4 className="text-lg font-bold text-text-primary mb-4">Impact Metrics</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Response Time</span>
                    <span className="text-lg font-bold text-success">{currentCase?.responseTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Agencies Involved</span>
                    <span className="text-lg font-bold text-text-primary">{currentCase?.metrics?.agenciesInvolved}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Tourists Helped</span>
                    <span className="text-lg font-bold text-text-primary">{currentCase?.metrics?.touristsHelped}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Family Notified</span>
                    <div className="flex items-center space-x-1">
                      <Icon 
                        name={currentCase?.metrics?.familyNotified === 'Yes' ? 'CheckCircle' : 'XCircle'} 
                        size={16} 
                        className={currentCase?.metrics?.familyNotified === 'Yes' ? 'text-success' : 'text-muted'} 
                      />
                      <span className="text-sm font-medium text-text-primary">{currentCase?.metrics?.familyNotified}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-text-secondary">Follow-up Completed</span>
                    <div className="flex items-center space-x-1">
                      <Icon 
                        name={currentCase?.metrics?.followUpCompleted === 'Yes' ? 'CheckCircle' : 'XCircle'} 
                        size={16} 
                        className={currentCase?.metrics?.followUpCompleted === 'Yes' ? 'text-success' : 'text-muted'} 
                      />
                      <span className="text-sm font-medium text-text-primary">{currentCase?.metrics?.followUpCompleted}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Outcome Badge */}
              <div className="bg-success/10 border border-success/20 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name="CheckCircle" size={24} className="text-success" />
                </div>
                <h4 className="font-bold text-success mb-2">Successful Resolution</h4>
                <p className="text-sm text-text-secondary">
                  Tourist safety ensured with full coordination between agencies and family notification
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button variant="outline" fullWidth iconName="Download" iconPosition="left">
                  Download Full Report
                </Button>
                <Button variant="ghost" fullWidth iconName="Share" iconPosition="left">
                  Share Case Study
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySection;