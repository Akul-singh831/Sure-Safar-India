import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const IncidentDetailPanel = ({ incident, onClose, onUpdate }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState(incident?.status || 'active');

  if (!incident) return null;

  const tabs = [
    { id: 'details', label: 'Details', icon: 'FileText' },
    { id: 'communication', label: 'Communication', icon: 'MessageSquare' },
    { id: 'timeline', label: 'Timeline', icon: 'Clock' },
    { id: 'resources', label: 'Resources', icon: 'Users' }
  ];

  const statusOptions = [
    { value: 'active', label: 'Active', color: 'error' },
    { value: 'responding', label: 'Responding', color: 'warning' },
    { value: 'resolved', label: 'Resolved', color: 'success' },
    { value: 'escalated', label: 'Escalated', color: 'primary' }
  ];

  const mockTimeline = [
    { id: 1, time: '14:32', action: 'Incident reported', user: 'System', type: 'system' },
    { id: 2, time: '14:33', action: 'AI analysis completed', user: 'SafeGuard AI', type: 'ai' },
    { id: 3, time: '14:34', action: 'Responder assigned', user: 'Dispatch', type: 'user' },
    { id: 4, time: '14:35', action: 'En route to location', user: 'Officer Sharma', type: 'user' }
  ];

  const mockResources = [
    { id: 1, name: 'Officer Rajesh Sharma', role: 'Primary Responder', status: 'En Route', eta: '3 min' },
    { id: 2, name: 'Dr. Priya Patel', role: 'Medical Support', status: 'On Standby', eta: '8 min' },
    { id: 3, name: 'Embassy Contact', role: 'Consular Services', status: 'Notified', eta: 'N/A' }
  ];

  const handleStatusUpdate = (newStatus) => {
    setStatus(newStatus);
    onUpdate(incident?.id, { status: newStatus });
  };

  const handleAddNote = () => {
    if (notes?.trim()) {
      onUpdate(incident?.id, { 
        notes: [...(incident?.notes || []), {
          id: Date.now(),
          text: notes,
          timestamp: new Date()?.toLocaleTimeString(),
          user: 'Current User'
        }]
      });
      setNotes('');
    }
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-lg shadow-strong border border-border w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-4">
            <div className={`w-3 h-3 rounded-full ${
              incident?.priority === 'critical' ? 'bg-error animate-pulse' :
              incident?.priority === 'high'? 'bg-warning' : 'bg-primary'
            }`}></div>
            <div>
              <h2 className="text-xl font-semibold text-text-primary">
                Incident #{incident?.id} - {incident?.type}
              </h2>
              <p className="text-sm text-text-secondary">
                {incident?.location} • {incident?.timeAgo}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={status}
              onChange={(e) => handleStatusUpdate(e?.target?.value)}
              className="px-3 py-2 bg-background border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {statusOptions?.map((option) => (
                <option key={option?.value} value={option?.value}>
                  {option?.label}
                </option>
              ))}
            </select>
            <Button variant="ghost" size="sm" onClick={onClose} iconName="X" />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-6 py-3 text-sm font-medium transition-smooth ${
                activeTab === tab?.id
                  ? 'border-b-2 border-primary text-primary bg-primary/5' :'text-text-secondary hover:text-text-primary hover:bg-muted/50'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span>{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'details' && (
            <div className="space-y-6">
              {/* Tourist Information */}
              {incident?.tourist && (
                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                    <Icon name="User" size={20} />
                    <span>Tourist Information</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-text-secondary">Name</label>
                      <p className="text-text-primary">{incident?.tourist?.name}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-secondary">Nationality</label>
                      <p className="text-text-primary">{incident?.tourist?.nationality}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-secondary">Phone</label>
                      <p className="text-text-primary">{incident?.tourist?.phone}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-secondary">Emergency Contact</label>
                      <p className="text-text-primary">{incident?.tourist?.emergencyContact}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Incident Details */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                  <Icon name="AlertTriangle" size={20} />
                  <span>Incident Details</span>
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-text-secondary">Description</label>
                    <p className="text-text-primary">{incident?.description}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-text-secondary">Priority</label>
                      <p className={`font-medium ${
                        incident?.priority === 'critical' ? 'text-error' :
                        incident?.priority === 'high'? 'text-warning' : 'text-primary'
                      }`}>
                        {incident?.priority?.toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-secondary">Location Accuracy</label>
                      <p className="text-text-primary">{incident?.locationAccuracy}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-text-secondary">AI Confidence</label>
                      <p className="text-text-primary">{incident?.aiConfidence}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Recommendations */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2 text-accent">
                  <Icon name="Brain" size={20} />
                  <span>AI Recommendations</span>
                </h3>
                <div className="space-y-3">
                  {incident?.aiRecommendations?.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-text-primary">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'communication' && (
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 h-64 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 max-w-xs">
                      <p className="text-sm">Are you safe? We're sending help to your location.</p>
                      <span className="text-xs opacity-75">14:35</span>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-card border border-border rounded-lg px-3 py-2 max-w-xs">
                      <p className="text-sm">Yes, I'm okay but scared. Please hurry.</p>
                      <span className="text-xs text-text-secondary">14:36</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                <Input
                  placeholder="Type a message..."
                  className="flex-1"
                />
                <Button iconName="Send" />
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              {mockTimeline?.map((item) => (
                <div key={item?.id} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Clock" size={14} color="white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-text-primary">{item?.action}</span>
                      <span className="text-xs text-text-secondary">by {item?.user}</span>
                    </div>
                    <span className="text-xs text-text-secondary">{item?.time}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-4">
              {mockResources?.map((resource) => (
                <div key={resource?.id} className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-text-primary">{resource?.name}</h4>
                      <p className="text-sm text-text-secondary">{resource?.role}</p>
                    </div>
                    <div className="text-right">
                      <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        resource?.status === 'En Route' ? 'bg-warning/10 text-warning' :
                        resource?.status === 'On Standby'? 'bg-primary/10 text-primary' : 'bg-success/10 text-success'
                      }`}>
                        {resource?.status}
                      </div>
                      {resource?.eta !== 'N/A' && (
                        <p className="text-xs text-text-secondary mt-1">ETA: {resource?.eta}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border">
          <div className="flex space-x-2">
            <Input
              placeholder="Add a note..."
              value={notes}
              onChange={(e) => setNotes(e?.target?.value)}
              className="w-64"
            />
            <Button onClick={handleAddNote} iconName="Plus">
              Add Note
            </Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button variant="default" iconName="Phone">
              Call Tourist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncidentDetailPanel;