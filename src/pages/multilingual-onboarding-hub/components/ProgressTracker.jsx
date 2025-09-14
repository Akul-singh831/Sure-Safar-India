import React from 'react';
import Icon from '../../../components/AppIcon';
import { cn } from '../../../utils/cn';

const ProgressTracker = ({ currentStep, completedSteps, totalSteps }) => {
  const steps = [
    { id: 'language', name: 'Language', icon: 'Globe' },
    { id: 'country', name: 'Country', icon: 'MapPin' },
    { id: 'kyc', name: 'Verification', icon: 'Shield' },
    { id: 'culture', name: 'Orientation', icon: 'BookOpen' },
    { id: 'tutorial', name: 'Tutorial', icon: 'Play' },
    { id: 'family', name: 'Family Network', icon: 'Users' },
    { id: 'itinerary', name: 'Travel Plans', icon: 'Route' }
  ];

  const getStepStatus = (stepIndex) => {
    if (completedSteps.includes(stepIndex)) return 'completed';
    if (stepIndex === currentStep) return 'current';
    return 'pending';
  };

  const completionPercentage = Math.round((completedSteps.length / totalSteps) * 100);

  return (
    <div className="bg-card rounded-2xl shadow-strong p-6 border border-border">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-text-primary">Onboarding Progress</h3>
          <span className="text-sm font-medium text-primary">{completionPercentage}% Complete</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2.5">
          <div
            className="bg-primary h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${completionPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-2">
        {steps.map((step, index) => {
          const status = getStepStatus(index);
          const isCompleted = status === 'completed';
          const isCurrent = status === 'current';

          return (
            <div
              key={step.id}
              className={cn(
                "flex items-center p-3 rounded-lg transition-colors duration-200",
                isCurrent && "bg-primary/10"
              )}
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center mr-4 transition-colors duration-300 flex-shrink-0",
                  isCompleted ? "bg-success text-success-foreground" :
                  isCurrent ? "bg-primary text-primary-foreground" :
                  "bg-muted text-muted-foreground"
                )}
              >
                <Icon name={isCompleted ? 'Check' : step.icon} size={20} />
              </div>
              <span
                className={cn(
                  "font-medium flex-grow",
                  isCompleted ? "text-text-secondary line-through" :
                  isCurrent ? "text-primary" :
                  "text-text-primary"
                )}
              >
                {step.name}
              </span>
              {isCompleted && (
                 <Icon name="CheckCircle" size={20} className="ml-4 text-success flex-shrink-0" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;