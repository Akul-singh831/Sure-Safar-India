import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const MapInterface = () => {
  const [isMapActive, setIsMapActive] = useState(false);

  // Static map image URL - loads much faster than an iframe
  const staticMapImageUrl = "http://googleusercontent.com/maps.google.com/4";

  return (
    <div className="flex-1 relative bg-card rounded-lg overflow-hidden shadow-medium flex items-center justify-center">
      {isMapActive ? (
        // The interactive iframe is only loaded when the user clicks
        <iframe
          width="100%"
          height="100%"
          loading="eager" // Load immediately once activated
          title="Emergency Response Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54002444055!2d77.06889753177114!3d28.52728033804291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1726302219878"
          className="border-0"
        />
      ) : (
        // Initially, show a lightweight static image
        <div 
          className="w-full h-full bg-cover bg-center relative cursor-pointer" 
          style={{ backgroundImage: `url(${staticMapImageUrl})` }}
          onClick={() => setIsMapActive(true)}
        >
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center">
            <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Map" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Map is ready to load</h3>
                <p className="text-text-secondary mb-4">Click to enable interactive controls.</p>
                <Button 
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsMapActive(true);
                    }}
                    variant="default"
                    iconName="MousePointerClick"
                    iconPosition="left"
                >
                    Load Interactive Map
                </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapInterface;