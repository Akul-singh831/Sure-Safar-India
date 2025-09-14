import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const TravelItinerary = ({ onComplete }) => {
  const [itinerary, setItinerary] = useState([]);
  const [newDestination, setNewDestination] = useState({
    city: '',
    state: '',
    arrivalDate: '',
    departureDate: '',
    accommodation: '',
    activities: []
  });
  const [safetyRecommendations, setSafetyRecommendations] = useState([]);

  const popularDestinations = [
    { city: 'New Delhi', state: 'Delhi', safetyLevel: 'high', coverage: '100%' },
    { city: 'Mumbai', state: 'Maharashtra', safetyLevel: 'high', coverage: '100%' },
    { city: 'Bangalore', state: 'Karnataka', safetyLevel: 'high', coverage: '95%' },
    { city: 'Jaipur', state: 'Rajasthan', safetyLevel: 'high', coverage: '90%' },
    { city: 'Goa', state: 'Goa', safetyLevel: 'medium', coverage: '85%' },
    { city: 'Agra', state: 'Uttar Pradesh', safetyLevel: 'medium', coverage: '80%' },
    { city: 'Varanasi', state: 'Uttar Pradesh', safetyLevel: 'medium', coverage: '75%' },
    { city: 'Rishikesh', state: 'Uttarakhand', safetyLevel: 'medium', coverage: '70%' }
  ];

  const accommodationTypes = [
    'Hotel', 'Resort', 'Guesthouse', 'Hostel', 'Homestay', 'Airbnb', 'Other'
  ];

  const activityOptions = [
    'Sightseeing', 'Adventure Sports', 'Cultural Tours', 'Food Tours', 
    'Shopping', 'Religious Sites', 'Nature/Wildlife', 'Photography'
  ];

  const handleInputChange = (field, value) => {
    setNewDestination(prev => ({ ...prev, [field]: value }));
  };

  const handleActivityToggle = (activity) => {
    setNewDestination(prev => ({
      ...prev,
      activities: prev?.activities?.includes(activity)
        ? prev?.activities?.filter(a => a !== activity)
        : [...prev?.activities, activity]
    }));
  };

  const addDestination = () => {
    if (newDestination?.city && newDestination?.arrivalDate) {
      const destination = {
        ...newDestination,
        id: Date.now(),
        safetyCheckpoints: generateSafetyCheckpoints(newDestination),
        recommendations: generateRecommendations(newDestination)
      };
      setItinerary(prev => [...prev, destination]);
      setNewDestination({
        city: '',
        state: '',
        arrivalDate: '',
        departureDate: '',
        accommodation: '',
        activities: []
      });
      generateSafetyRecommendations([...itinerary, destination]);
    }
  };

  const removeDestination = (id) => {
    const updatedItinerary = itinerary?.filter(dest => dest?.id !== id);
    setItinerary(updatedItinerary);
    generateSafetyRecommendations(updatedItinerary);
  };

  const generateSafetyCheckpoints = (destination) => {
    const checkpoints = [
      'Arrival notification to emergency contacts',
      'Verify accommodation safety features',
      'Register with local authorities if required'
    ];

    if (destination?.activities?.includes('Adventure Sports')) {
      checkpoints?.push('Verify adventure operator certifications');
    }
    if (destination?.activities?.includes('Nature/Wildlife')) {
      checkpoints?.push('Check weather conditions and wildlife alerts');
    }
    if (destination?.activities?.includes('Religious Sites')) {
      checkpoints?.push('Review dress code and cultural guidelines');
    }

    return checkpoints;
  };

  const generateRecommendations = (destination) => {
    const destInfo = popularDestinations?.find(d => 
      d?.city?.toLowerCase() === destination?.city?.toLowerCase()
    );

    const recommendations = [
      'Download offline maps for the area',
      'Save local emergency contacts',
      'Keep copies of important documents'
    ];

    if (destInfo) {
      if (destInfo?.safetyLevel === 'medium') {
        recommendations?.push('Exercise extra caution, especially at night');
        recommendations?.push('Use registered transportation only');
      }
      if (destInfo?.coverage < 90) {
        recommendations?.push('Consider satellite communication device');
      }
    }

    return recommendations;
  };

  const generateSafetyRecommendations = (destinations) => {
    const recommendations = [];

    if (destinations?.length > 3) {
      recommendations?.push({
        type: 'planning',
        title: 'Extensive Travel Plan',
        message: 'Consider travel insurance for multi-city trips',
        icon: 'Shield'
      });
    }

    const hasRemoteDestinations = destinations?.some(dest => {
      const destInfo = popularDestinations?.find(d => 
        d?.city?.toLowerCase() === dest?.city?.toLowerCase()
      );
      return destInfo && destInfo?.coverage < 80;
    });

    if (hasRemoteDestinations) {
      recommendations?.push({
        type: 'connectivity',
        title: 'Remote Area Coverage',
        message: 'Some destinations have limited SafeGuard coverage. Consider satellite communication.',
        icon: 'Satellite'
      });
    }

    setSafetyRecommendations(recommendations);
  };

  const getSafetyLevelColor = (level) => {
    switch (level) {
      case 'high': return 'text-success bg-success/10';
      case 'medium': return 'text-warning bg-warning/10';
      case 'low': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
      <div className="text-center mb-8">
        <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="MapPin" size={32} color="white" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Travel Itinerary Integration</h2>
        <p className="text-text-secondary">Plan your journey with integrated safety recommendations</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add Destination Form */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-text-primary flex items-center">
            <Icon name="Plus" size={20} className="text-primary mr-2" />
            Add Destination
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="City"
                type="text"
                placeholder="Enter city name"
                value={newDestination?.city}
                onChange={(e) => handleInputChange('city', e?.target?.value)}
                required
              />

              <Input
                label="State"
                type="text"
                placeholder="Enter state"
                value={newDestination?.state}
                onChange={(e) => handleInputChange('state', e?.target?.value)}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Arrival Date"
                type="date"
                value={newDestination?.arrivalDate}
                onChange={(e) => handleInputChange('arrivalDate', e?.target?.value)}
                required
              />

              <Input
                label="Departure Date"
                type="date"
                value={newDestination?.departureDate}
                onChange={(e) => handleInputChange('departureDate', e?.target?.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Accommodation Type</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {accommodationTypes?.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleInputChange('accommodation', type)}
                    className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                      newDestination?.accommodation === type
                        ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-text-secondary'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Planned Activities</label>
              <div className="grid grid-cols-2 gap-2">
                {activityOptions?.map((activity) => (
                  <label key={activity} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={newDestination?.activities?.includes(activity)}
                      onChange={() => handleActivityToggle(activity)}
                      className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                    />
                    <span className="text-sm text-text-primary">{activity}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              variant="default"
              onClick={addDestination}
              disabled={!newDestination?.city || !newDestination?.arrivalDate}
              iconName="Plus"
              iconPosition="left"
              fullWidth
            >
              Add to Itinerary
            </Button>
          </div>

          {/* Popular Destinations */}
          <div>
            <h4 className="font-medium text-text-primary mb-3 flex items-center">
              <Icon name="TrendingUp" size={16} className="text-secondary mr-2" />
              Popular Destinations
            </h4>
            <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
              {popularDestinations?.map((dest, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleInputChange('city', dest?.city);
                    handleInputChange('state', dest?.state);
                  }}
                  className="flex items-center justify-between p-3 border border-border rounded-lg hover:border-primary/50 transition-colors duration-200 text-left"
                >
                  <div>
                    <span className="font-medium text-text-primary">{dest?.city}</span>
                    <span className="text-sm text-text-secondary ml-2">{dest?.state}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyLevelColor(dest?.safetyLevel)}`}>
                      {dest?.safetyLevel?.toUpperCase()}
                    </span>
                    <span className="text-xs text-text-secondary">{dest?.coverage}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Itinerary List */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-text-primary flex items-center">
            <Icon name="Route" size={20} className="text-accent mr-2" />
            Your Itinerary ({itinerary?.length} destinations)
          </h3>

          {itinerary?.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-border rounded-lg">
              <Icon name="MapPin" size={48} className="text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">No destinations added yet</p>
              <p className="text-sm text-text-secondary">Add your first destination to get started</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {itinerary?.map((destination, index) => {
                const destInfo = popularDestinations?.find(d => 
                  d?.city?.toLowerCase() === destination?.city?.toLowerCase()
                );
                
                return (
                  <div key={destination?.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-text-primary">
                            {destination?.city}, {destination?.state}
                          </h4>
                          <p className="text-sm text-text-secondary">
                            {destination?.arrivalDate} 
                            {destination?.departureDate && ` - ${destination?.departureDate}`}
                          </p>
                          {destination?.accommodation && (
                            <p className="text-xs text-text-secondary">
                              Staying at: {destination?.accommodation}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {destInfo && (
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSafetyLevelColor(destInfo?.safetyLevel)}`}>
                            {destInfo?.coverage} Coverage
                          </span>
                        )}
                        <button
                          onClick={() => removeDestination(destination?.id)}
                          className="p-1 text-error hover:bg-error/10 rounded"
                        >
                          <Icon name="X" size={16} />
                        </button>
                      </div>
                    </div>
                    {destination?.activities?.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs text-text-secondary mb-1">Planned Activities:</p>
                        <div className="flex flex-wrap gap-1">
                          {destination?.activities?.map((activity, idx) => (
                            <span key={idx} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-text-primary">Safety Checkpoints:</p>
                      {destination?.safetyCheckpoints?.slice(0, 2)?.map((checkpoint, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="CheckCircle" size={12} className="text-success mt-0.5" />
                          <span className="text-xs text-text-secondary">{checkpoint}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Safety Recommendations */}
          {safetyRecommendations?.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-medium text-text-primary flex items-center">
                <Icon name="AlertTriangle" size={16} className="text-warning mr-2" />
                Safety Recommendations
              </h4>
              {safetyRecommendations?.map((rec, index) => (
                <div key={index} className="p-3 bg-warning/5 border border-warning/20 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Icon name={rec?.icon} size={16} className="text-warning mt-0.5" />
                    <div>
                      <p className="font-medium text-warning text-sm">{rec?.title}</p>
                      <p className="text-xs text-text-secondary">{rec?.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {itinerary?.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Shield" size={20} className="text-primary" />
              <span className="font-medium text-primary">Smart Safety Integration</span>
            </div>
            <p className="text-sm text-text-secondary">
              Your itinerary is integrated with SafeGuard India's monitoring system. You'll receive location-specific safety updates and emergency contacts will be notified of your planned movements.
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-text-secondary">
              {itinerary?.length} destinations planned with safety checkpoints
            </div>
            <Button variant="success" onClick={onComplete} iconName="CheckCircle" iconPosition="left">
              Complete Itinerary Setup
            </Button>
          </div>
        </div>
      )}
      {itinerary?.length === 0 && (
        <div className="mt-8 pt-6 border-t border-border text-center">
          <Button variant="outline" onClick={onComplete}>
            Skip Itinerary Setup
          </Button>
        </div>
      )}
    </div>
  );
};

export default TravelItinerary;