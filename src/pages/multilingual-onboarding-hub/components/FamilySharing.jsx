import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const FamilySharing = ({ onComplete }) => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    phone: '',
    relationship: '',
    permissions: {
      realTimeLocation: false,
      emergencyAlerts: true,
      checkInNotifications: false,
      itineraryAccess: false
    }
  });
  const [invitationsSent, setInvitationsSent] = useState([]);

  const relationships = [
    'Parent', 'Spouse', 'Child', 'Sibling', 'Friend', 'Colleague', 'Emergency Contact', 'Other'
  ];

  const handleInputChange = (field, value) => {
    setNewContact(prev => ({ ...prev, [field]: value }));
  };

  const handlePermissionChange = (permission, value) => {
    setNewContact(prev => ({
      ...prev,
      permissions: { ...prev?.permissions, [permission]: value }
    }));
  };

  const addContact = () => {
    if (newContact?.name && (newContact?.email || newContact?.phone)) {
      const contact = {
        ...newContact,
        id: Date.now(),
        status: 'pending'
      };
      setContacts(prev => [...prev, contact]);
      setNewContact({
        name: '',
        email: '',
        phone: '',
        relationship: '',
        permissions: {
          realTimeLocation: false,
          emergencyAlerts: true,
          checkInNotifications: false,
          itineraryAccess: false
        }
      });
    }
  };

  const removeContact = (id) => {
    setContacts(prev => prev?.filter(contact => contact?.id !== id));
  };

  const sendInvitations = () => {
    const pendingContacts = contacts?.filter(contact => contact?.status === 'pending');
    setInvitationsSent(pendingContacts?.map(contact => contact?.id));
    
    // Simulate invitation sending
    setTimeout(() => {
      setContacts(prev => prev?.map(contact => 
        pendingContacts?.find(pc => pc?.id === contact?.id) 
          ? { ...contact, status: 'invited' }
          : contact
      ));
    }, 2000);
  };

  const mockAcceptInvitation = (contactId) => {
    setContacts(prev => prev?.map(contact => 
      contact?.id === contactId 
        ? { ...contact, status: 'connected' }
        : contact
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-warning bg-warning/10';
      case 'invited': return 'text-primary bg-primary/10';
      case 'connected': return 'text-success bg-success/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return 'Clock';
      case 'invited': return 'Mail';
      case 'connected': return 'CheckCircle';
      default: return 'User';
    }
  };

  return (
    <div className="bg-card rounded-xl shadow-medium p-8 border border-border">
      <div className="text-center mb-8">
        <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Users" size={32} color="white" />
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-2">Family Safety Network</h2>
        <p className="text-text-secondary">Connect with loved ones for enhanced safety and peace of mind</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Add New Contact Form */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-text-primary flex items-center">
            <Icon name="UserPlus" size={20} className="text-primary mr-2" />
            Add Trusted Contact
          </h3>

          <div className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter contact's name"
              value={newContact?.name}
              onChange={(e) => handleInputChange('name', e?.target?.value)}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Email Address"
                type="email"
                placeholder="contact@example.com"
                value={newContact?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+1 234 567 8900"
                value={newContact?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Relationship</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {relationships?.map((rel) => (
                  <button
                    key={rel}
                    onClick={() => handleInputChange('relationship', rel)}
                    className={`p-2 text-sm rounded-lg border transition-all duration-200 ${
                      newContact?.relationship === rel
                        ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-text-secondary'
                    }`}
                  >
                    {rel}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-medium text-text-primary mb-3">Sharing Permissions</h4>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newContact?.permissions?.realTimeLocation}
                    onChange={(e) => handlePermissionChange('realTimeLocation', e?.target?.checked)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <div>
                    <span className="text-sm font-medium text-text-primary">Real-time Location</span>
                    <p className="text-xs text-text-secondary">Share your live location continuously</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newContact?.permissions?.emergencyAlerts}
                    onChange={(e) => handlePermissionChange('emergencyAlerts', e?.target?.checked)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <div>
                    <span className="text-sm font-medium text-text-primary">Emergency Alerts</span>
                    <p className="text-xs text-text-secondary">Notify during emergency situations</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newContact?.permissions?.checkInNotifications}
                    onChange={(e) => handlePermissionChange('checkInNotifications', e?.target?.checked)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <div>
                    <span className="text-sm font-medium text-text-primary">Check-in Notifications</span>
                    <p className="text-xs text-text-secondary">Receive updates when you reach destinations</p>
                  </div>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newContact?.permissions?.itineraryAccess}
                    onChange={(e) => handlePermissionChange('itineraryAccess', e?.target?.checked)}
                    className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
                  />
                  <div>
                    <span className="text-sm font-medium text-text-primary">Itinerary Access</span>
                    <p className="text-xs text-text-secondary">View your travel plans and schedule</p>
                  </div>
                </label>
              </div>
            </div>

            <Button
              variant="default"
              onClick={addContact}
              disabled={!newContact?.name || (!newContact?.email && !newContact?.phone)}
              iconName="Plus"
              iconPosition="left"
              fullWidth
            >
              Add Contact
            </Button>
          </div>
        </div>

        {/* Contact List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-text-primary flex items-center">
              <Icon name="Users" size={20} className="text-accent mr-2" />
              Trusted Contacts ({contacts?.length})
            </h3>
            {contacts?.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                onClick={sendInvitations}
                disabled={!contacts?.some(c => c?.status === 'pending')}
                iconName="Send"
                iconPosition="left"
              >
                Send Invitations
              </Button>
            )}
          </div>

          {contacts?.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-border rounded-lg">
              <Icon name="Users" size={48} className="text-text-secondary mx-auto mb-4" />
              <p className="text-text-secondary">No contacts added yet</p>
              <p className="text-sm text-text-secondary">Add your first trusted contact to get started</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {contacts?.map((contact) => (
                <div key={contact?.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="User" size={20} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="font-medium text-text-primary">{contact?.name}</h4>
                        <p className="text-sm text-text-secondary">{contact?.relationship}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          {contact?.email && (
                            <span className="text-xs text-text-secondary">{contact?.email}</span>
                          )}
                          {contact?.phone && (
                            <span className="text-xs text-text-secondary">{contact?.phone}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contact?.status)}`}>
                        <Icon name={getStatusIcon(contact?.status)} size={12} className="inline mr-1" />
                        {contact?.status?.charAt(0)?.toUpperCase() + contact?.status?.slice(1)}
                      </span>
                      <button
                        onClick={() => removeContact(contact?.id)}
                        className="p-1 text-error hover:bg-error/10 rounded"
                      >
                        <Icon name="X" size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {Object.entries(contact?.permissions)?.map(([key, value]) => {
                      if (!value) return null;
                      const labels = {
                        realTimeLocation: 'Live Location',
                        emergencyAlerts: 'Emergency Alerts',
                        checkInNotifications: 'Check-ins',
                        itineraryAccess: 'Itinerary'
                      };
                      return (
                        <span key={key} className="px-2 py-1 bg-success/10 text-success text-xs rounded-full">
                          {labels?.[key]}
                        </span>
                      );
                    })}
                  </div>

                  {contact?.status === 'invited' && (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => mockAcceptInvitation(contact?.id)}
                        iconName="Check"
                        iconPosition="left"
                      >
                        Simulate Accept
                      </Button>
                    </div>
                  )}

                  {contact?.status === 'connected' && (
                    <div className="flex items-center space-x-2 text-success text-sm">
                      <Icon name="CheckCircle" size={16} />
                      <span>Connected and sharing enabled</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {contacts?.length > 0 && (
        <div className="mt-8 pt-6 border-t border-border">
          <div className="bg-muted/50 rounded-lg p-4 mb-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Shield" size={20} className="text-primary" />
              <span className="font-medium text-primary">Privacy & Security</span>
            </div>
            <p className="text-sm text-text-secondary">
              Your location data is encrypted and only shared with contacts you approve. 
              You can modify permissions or remove contacts at any time through the app settings.
            </p>
          </div>
          
          <div className="flex justify-between items-center">
            <div className="text-sm text-text-secondary">
              {contacts?.filter(c => c?.status === 'connected')?.length} of {contacts?.length} contacts connected
            </div>
            <Button variant="success" onClick={onComplete} iconName="CheckCircle" iconPosition="left">
              Complete Setup
            </Button>
          </div>
        </div>
      )}
      {contacts?.length === 0 && (
        <div className="mt-8 pt-6 border-t border-border text-center">
          <Button variant="outline" onClick={onComplete}>
            Skip for Now
          </Button>
        </div>
      )}
    </div>
  );
};

export default FamilySharing;