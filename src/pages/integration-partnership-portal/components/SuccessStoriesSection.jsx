import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SuccessStoriesSection = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const successStories = [
    {
      id: 1,
      company: "Taj Hotels & Resorts",
      type: "Luxury Hotel Chain (Pilot Program)",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=100&h=100&fit=crop",
      challenge: "Managing safety for international guests across multiple properties with varying risk profiles.",
      solution: "Integrated SafeGuard's system for automated guest registration and real-time monitoring.",
      results: [
        { metric: "Guest Safety Incidents", improvement: "-75%", icon: "Shield" },
        { metric: "Emergency Response Time", improvement: "< 90s", icon: "Clock" },
        { metric: "Guest Satisfaction", improvement: "+40%", icon: "Star" }
      ],
      testimonial: "The pilot program with SafeGuard has shown remarkable potential. The real-time monitoring and instant response capabilities are set to enhance guest confidence significantly.",
      spokesperson: "Rajesh Kumar",
      position: "General Manager (Pilot Lead)",
      implementation: "Target: Q4 2025"
    },
    {
      id: 2,
      company: "Incredible India Tours",
      type: "Tour Operator (Pilot Program)",
      logo: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=100&h=100&fit=crop",
      challenge: "Ensuring safety of multiple tour groups simultaneously across diverse Indian destinations.",
      solution: "Deployed group management tools with offline capabilities and automated safety scoring for itineraries.",
      results: [
        { metric: "Group Safety Score", improvement: "+85%", icon: "Users" },
        { metric: "Incident Resolution", improvement: "60% faster", icon: "Zap" },
        { metric: "Operational Efficiency", improvement: "+70%", icon: "Activity" }
      ],
      testimonial: "The group management features have revolutionized our pilot operations. We can now confidently handle larger groups while maintaining the highest safety standards.",
      spokesperson: "Priya Sharma",
      position: "Operations Director",
      implementation: "Target: Q1 2026"
    }
  ];

  const currentStory = successStories[selectedStory];

  return (
    <div className="bg-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Projected Success Stories</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Discover the anticipated outcomes based on our successful pilot programs with industry leaders.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {successStories.map((story, index) => (
          <button
            key={story.id}
            onClick={() => setSelectedStory(index)}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-smooth hover-lift ${
              selectedStory === index
                ? 'bg-primary text-primary-foreground shadow-medium'
                : 'bg-card text-text-primary border border-border hover:border-primary/50'
            }`}
          >
            <img src={story.logo} alt={story.company} className="w-8 h-8 rounded-lg object-cover" />
            <div className="text-left">
              <div className="font-medium text-sm">{story.company}</div>
              <div className="text-xs opacity-80">{story.type}</div>
            </div>
          </button>
        ))}
      </div>
      <div className="bg-card border border-border rounded-2xl p-8">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="flex items-center space-x-4 mb-6">
              <img src={currentStory.logo} alt={currentStory.company} className="w-16 h-16 rounded-xl object-cover" />
              <div>
                <h3 className="text-2xl font-bold text-text-primary">{currentStory.company}</h3>
                <p className="text-text-secondary">{currentStory.type}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-text-primary mb-2 flex items-center space-x-2"><Icon name="Target" size={18} className="text-warning" /><span>Challenge</span></h4>
                <p className="text-text-secondary">{currentStory.challenge}</p>
              </div>
              <div>
                <h4 className="font-semibold text-text-primary mb-2 flex items-center space-x-2"><Icon name="Lightbulb" size={18} className="text-success" /><span>Solution</span></h4>
                <p className="text-text-secondary">{currentStory.solution}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4 italic">
                <Icon name="Quote" size={20} className="text-primary mb-2" />
                <p className="text-text-primary mb-4">"{currentStory.testimonial}"</p>
                <p className="font-semibold text-text-primary">{currentStory.spokesperson}</p>
                <p className="text-sm text-text-secondary">{currentStory.position}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="bg-muted/50 rounded-xl p-6">
              <h4 className="font-semibold text-text-primary mb-4 flex items-center space-x-2"><Icon name="BarChart3" size={18} className="text-success" /><span>Projected Results</span></h4>
              <div className="space-y-4">
                {currentStory.results.map((result, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center mr-3"><Icon name={result.icon} size={20} className="text-success" /></div>
                    <div>
                      <div className="text-xl font-bold text-success">{result.improvement}</div>
                      <div className="text-sm text-text-secondary">{result.metric}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-text-secondary mt-4 text-center">Full implementation target: {currentStory.implementation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoriesSection;
