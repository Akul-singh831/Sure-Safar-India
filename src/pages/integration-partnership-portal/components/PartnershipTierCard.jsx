import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { cn } from '../../../utils/cn';

const PartnershipTierCard = ({ tier, isPopular = false }) => {
  const { name, description, features, pricing, status, icon, color } = tier;

  const isUpcoming = status === 'upcoming';

  return (
    <div className={cn(
      "relative flex flex-col bg-card border-2 rounded-2xl p-6 transition-all duration-300 hover:shadow-strong hover:-translate-y-2",
      isPopular ? 'border-primary shadow-xl' : 'border-border'
    )}>
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-soft">
            Most Popular
          </div>
        </div>
      )}
      <div className="flex-grow">
        <div className="flex items-center space-x-4 mb-4">
          <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", color)}>
            <Icon name={icon} size={24} color="white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-text-primary">{name}</h3>
            <p className="text-sm text-text-secondary">{description}</p>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-text-primary">{pricing}</span>
            {!isUpcoming && <span className="text-text-secondary">/month</span>}
          </div>
        </div>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-success/10 text-success rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Check" size={12} />
              </div>
              <span className="text-sm text-text-primary">{feature}</span>
            </li>
          ))}
           {isUpcoming && (
             <li className="flex items-center space-x-3">
              <div className="w-5 h-5 bg-secondary/10 text-secondary rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Plus" size={12} />
              </div>
              <span className="text-sm text-secondary">More features coming...</span>
            </li>
           )}
        </ul>
      </div>
      <div className="mt-auto">
        <Button 
          variant={isPopular ? "default" : "outline"} 
          fullWidth 
          iconName={isUpcoming ? "Bell" : "ArrowRight"}
          iconPosition="right"
          disabled={isUpcoming}
          className="font-semibold"
        >
          {isUpcoming ? 'Notify Me' : 'Get Started'}
        </Button>
      </div>
    </div>
  );
};

export default PartnershipTierCard;
