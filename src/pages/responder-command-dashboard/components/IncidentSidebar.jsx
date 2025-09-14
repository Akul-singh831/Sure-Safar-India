import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IncidentSidebar = ({ incidents, selectedIncident, onIncidentSelect, onIncidentUpdate }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('priority');

  const filterOptions = [
    { value: 'all', label: 'All Incidents', count: incidents?.length },
    { value: 'critical', label: 'Critical', count: incidents?.filter(i => i?.priority === 'critical')?.length },
    { value: 'high', label: 'High Priority', count: incidents?.filter(i => i?.priority === 'high')?.length },
    { value: 'medium', label: 'Medium', count: incidents?.filter(i => i?.priority === 'medium')?.length },
    { value: 'active', label: 'Active', count: incidents?.filter(i => i?.status === 'active')?.length }
  ];

  const sortOptions = [
    { value: 'priority', label: 'Priority' },
    { value: 'time', label: 'Time' },
    { value: 'distance', label: 'Distance' }
  ];

  const filteredIncidents = incidents?.filter(incident => {
    if (filter === 'all') return true;
    if (filter === 'active') return incident?.status === 'active';
    return incident?.priority === filter;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical': return 'text-error bg-error/10 border-error/20';
      case 'high': return 'text-warning bg-warning/10 border-warning/20';
      case 'medium': return 'text-primary bg-primary/10 border-primary/20';
      default: return 'text-text-secondary bg-muted border-border';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return 'AlertCircle';
      case 'responding': return 'Navigation';
      case 'resolved': return 'CheckCircle';
      default: return 'Clock';
    }
  };

  const handleStatusUpdate = (incidentId, newStatus) => {
    onIncidentUpdate(incidentId, { status: newStatus });
  };

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-text-primary">Active Incidents</h2>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
            <span className="text-sm text-text-secondary">Live</span>
          </div>
        </div>

        {/* Filters */}
        <div className="space-y-3">
          <div className="flex space-x-2 overflow-x-auto">
            {filterOptions?.map((option) => (
              <button
                key={option?.value}
                onClick={() => setFilter(option?.value)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-smooth ${
                  filter === option?.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-text-secondary hover:text-text-primary hover:bg-muted/80'
                }`}
              >
                <span>{option?.label}</span>
                <span className="bg-background/20 px-1.5 py-0.5 rounded text-xs">
                  {option?.count}
                </span>
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e?.target?.value)}
            className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {sortOptions?.map((option) => (
              <option key={option?.value} value={option?.value}>
                Sort by {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Incidents List */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-2 space-y-2">
          {filteredIncidents?.map((incident) => (
            <div
              key={incident?.id}
              onClick={() => onIncidentSelect(incident)}
              className={`p-4 rounded-lg border cursor-pointer transition-smooth hover:shadow-medium ${
                selectedIncident?.id === incident?.id
                  ? 'border-primary bg-primary/5 shadow-medium'
                  : 'border-border bg-card hover:border-primary/30'
              }`}
            >
              {/* Incident Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name={getStatusIcon(incident?.status)} size={16} className="text-text-secondary" />
                  <span className="text-sm font-medium text-text-primary">#{incident?.id}</span>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(incident?.priority)}`}>
                  {incident?.priority?.toUpperCase()}
                </div>
              </div>

              {/* Incident Details */}
              <div className="space-y-2">
                <h4 className="font-medium text-text-primary">{incident?.type}</h4>
                <p className="text-sm text-text-secondary line-clamp-2">{incident?.description}</p>
                
                <div className="flex items-center space-x-4 text-xs text-text-secondary">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={12} />
                    <span>{incident?.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{incident?.timeAgo}</span>
                  </div>
                </div>

                {/* Tourist Info */}
                {incident?.tourist && (
                  <div className="flex items-center space-x-2 p-2 bg-muted/50 rounded-md">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-white">
                        {incident?.tourist?.name?.charAt(0)}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary truncate">
                        {incident?.tourist?.name}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {incident?.tourist?.nationality} • {incident?.tourist?.phone}
                      </p>
                    </div>
                  </div>
                )}

                {/* Quick Actions */}
                <div className="flex space-x-2 pt-2">
                  {incident?.status === 'active' && (
                    <Button
                      variant="outline"
                      size="xs"
                      onClick={(e) => {
                        e?.stopPropagation();
                        handleStatusUpdate(incident?.id, 'responding');
                      }}
                      iconName="Navigation"
                      iconPosition="left"
                    >
                      Respond
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={(e) => {
                      e?.stopPropagation();
                      // Handle contact action
                    }}
                    iconName="Phone"
                    iconPosition="left"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Stats */}
      <div className="p-4 border-t border-border bg-muted/30">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-text-primary">
              {incidents?.filter(i => i?.status === 'active')?.length}
            </div>
            <div className="text-xs text-text-secondary">Active</div>
          </div>
          <div>
            <div className="text-lg font-bold text-text-primary">
              {incidents?.filter(i => i?.status === 'responding')?.length}
            </div>
            <div className="text-xs text-text-secondary">Responding</div>
          </div>
          <div>
            <div className="text-lg font-bold text-text-primary">2.3m</div>
            <div className="text-xs text-text-secondary">Avg Response</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentSidebar;