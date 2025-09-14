import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import DashboardHeader from './components/DashboardHeader';
import MapInterface from './components/MapInterface';
import IncidentSidebar from './components/IncidentSidebar';
import IncidentDetailPanel from './components/IncidentDetailPanel';
import CommunicationPanel from './components/CommunicationPanel';
import AnalyticsPanel from './components/AnalyticsPanel';

const ResponderCommandDashboard = () => {
  const [selectedIncident, setSelectedIncident] = useState(null);
  const [showIncidentDetail, setShowIncidentDetail] = useState(false);
  const [isCommunicationOpen, setIsCommunicationOpen] = useState(false);
  const [isAnalyticsMinimized, setIsAnalyticsMinimized] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Mock data for incidents
  const [incidents, setIncidents] = useState([
    {
      id: 1247,
      type: "Medical Emergency",
      description: "Tourist experiencing chest pain near India Gate. Requires immediate medical attention.",
      priority: "critical",
      status: "active",
      location: "India Gate, New Delhi",
      coordinates: { lat: 28.6129, lng: 77.2295 },
      timeAgo: "2 min ago",
      locationAccuracy: "±5 meters",
      aiConfidence: "94%",
      tourist: {
        name: "John Smith",
        nationality: "United States",
        phone: "+1-555-0123",
        emergencyContact: "+1-555-0456",
        age: 45,
        medicalInfo: "No known allergies"
      },
      aiRecommendations: [
        "Dispatch medical team immediately - chest pain indicates potential cardiac event",
        "Contact nearest hospital (AIIMS) for standby preparation",
        "Notify US Embassy of citizen medical emergency",
        "Ensure clear evacuation route to ambulance"
      ],
      notes: []
    },
    {
      id: 1248,
      type: "Safety Concern",
      description: "Tourist reports feeling unsafe in crowded market area. Requesting assistance.",
      priority: "high",
      status: "responding",
      location: "Chandni Chowk Market",
      coordinates: { lat: 28.6506, lng: 77.2334 },
      timeAgo: "8 min ago",
      locationAccuracy: "±12 meters",
      aiConfidence: "87%",
      tourist: {
        name: "Sarah Johnson",
        nationality: "Canada",
        phone: "+1-416-555-0789",
        emergencyContact: "+1-416-555-0321",
        age: 28,
        medicalInfo: "None"
      },
      aiRecommendations: [
        "Deploy nearest patrol officer to provide escort",
        "Guide tourist to designated safe zone",
        "Monitor crowd density in surrounding area",
        "Provide cultural orientation and safety tips"
      ],
      notes: []
    },
    {
      id: 1249,
      type: "Lost Tourist",
      description: "Elderly tourist separated from tour group, unable to find way back to hotel.",
      priority: "medium",
      status: "active",
      location: "Red Fort Complex",
      coordinates: { lat: 28.6562, lng: 77.2410 },
      timeAgo: "15 min ago",
      locationAccuracy: "±8 meters",
      aiConfidence: "91%",
      tourist: {
        name: "Maria Rodriguez",
        nationality: "Spain",
        phone: "+34-600-123-456",
        emergencyContact: "+34-600-789-012",
        age: 67,
        medicalInfo: "Diabetes medication required"
      },
      aiRecommendations: [
        "Contact tour operator to locate group",
        "Provide translation assistance in Spanish",
        "Arrange safe transport back to hotel",
        "Check medical needs and medication schedule"
      ],
      notes: []
    },
    {
      id: 1250,
      type: "Theft Report",
      description: "Tourist reports wallet stolen while taking photos at monument.",
      priority: "medium",
      status: "active",
      location: "Qutub Minar",
      coordinates: { lat: 28.5245, lng: 77.1855 },
      timeAgo: "25 min ago",
      locationAccuracy: "±15 meters",
      aiConfidence: "89%",
      tourist: {
        name: "David Chen",
        nationality: "Australia",
        phone: "+61-400-123-456",
        emergencyContact: "+61-400-789-012",
        age: 32,
        medicalInfo: "None"
      },
      aiRecommendations: [
        "File police report immediately",
        "Contact banks to freeze credit cards",
        "Assist with embassy documentation",
        "Provide temporary financial assistance information"
      ],
      notes: []
    }
  ]);

  // Mock data for tourists
  const tourists = [
    { id: 1, name: "John Smith", location: "India Gate", status: "safe" },
    { id: 2, name: "Sarah Johnson", location: "Chandni Chowk", status: "assisted" },
    { id: 3, name: "Maria Rodriguez", location: "Red Fort", status: "lost" },
    { id: 4, name: "David Chen", location: "Qutub Minar", status: "incident" },
    { id: 5, name: "Emma Wilson", location: "Lotus Temple", status: "safe" },
    { id: 6, name: "Ahmed Hassan", location: "Humayun\'s Tomb", status: "safe" }
  ];

  const currentUser = {
    name: "Officer Rajesh Sharma",
    role: "Emergency Response Coordinator",
    badge: "ERC-2847",
    department: "Delhi Police Special Tourist Unit"
  };

  const handleIncidentSelect = (incident) => {
    setSelectedIncident(incident);
    setShowIncidentDetail(true);
  };

  const handleIncidentUpdate = (incidentId, updates) => {
    setIncidents(prev => prev?.map(incident => 
      incident?.id === incidentId 
        ? { ...incident, ...updates }
        : incident
    ));
    
    if (selectedIncident?.id === incidentId) {
      setSelectedIncident(prev => ({ ...prev, ...updates }));
    }
  };

  const handleCloseIncidentDetail = () => {
    setShowIncidentDetail(false);
    setSelectedIncident(null);
  };

  const handleProfileClick = () => {
    // Handle profile menu
    console.log('Profile clicked');
  };

  const handleSettingsClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e?.ctrlKey || e?.metaKey) {
        switch (e?.key) {
          case 'c':
            e?.preventDefault();
            setIsCommunicationOpen(!isCommunicationOpen);
            break;
          case 'a':
            e?.preventDefault();
            setIsAnalyticsMinimized(!isAnalyticsMinimized);
            break;
          case 'Escape':
            e?.preventDefault();
            if (showIncidentDetail) {
              handleCloseIncidentDetail();
            }
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isCommunicationOpen, isAnalyticsMinimized, showIncidentDetail]);

  return (
    <>
      <Helmet>
        <title>Command Center - SafeGuard India</title>
        <meta name="description" content="Emergency response command center for real-time incident management and tourist safety coordination." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className={`min-h-screen bg-background ${isDarkMode ? 'dark' : ''}`}>
        {/* Main Header */}
        <Header />
        
        {/* Dashboard Header */}
        <div className="pt-20">
          <DashboardHeader
            user={currentUser}
            onProfileClick={handleProfileClick}
            onSettingsClick={handleSettingsClick}
          />
        </div>

        {/* Main Dashboard Content */}
        <div className="flex h-[calc(100vh-160px)]">
          {/* Incident Sidebar */}
          <IncidentSidebar
            incidents={incidents}
            selectedIncident={selectedIncident}
            onIncidentSelect={handleIncidentSelect}
            onIncidentUpdate={handleIncidentUpdate}
          />

          {/* Map Interface */}
          <MapInterface
            incidents={incidents}
            tourists={tourists}
            selectedIncident={selectedIncident}
            onIncidentSelect={handleIncidentSelect}
          />
        </div>

        {/* Incident Detail Panel */}
        {showIncidentDetail && (
          <IncidentDetailPanel
            incident={selectedIncident}
            onClose={handleCloseIncidentDetail}
            onUpdate={handleIncidentUpdate}
          />
        )}

        {/* Communication Panel */}
        <CommunicationPanel
          isOpen={isCommunicationOpen}
          onToggle={() => setIsCommunicationOpen(!isCommunicationOpen)}
        />

        {/* Analytics Panel */}
        <AnalyticsPanel
          isMinimized={isAnalyticsMinimized}
          onToggle={() => setIsAnalyticsMinimized(!isAnalyticsMinimized)}
        />

        {/* Keyboard Shortcuts Help */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-card/95 backdrop-blur-md border border-border rounded-lg px-4 py-2 shadow-soft z-20">
          <div className="flex items-center space-x-4 text-xs text-text-secondary">
            <span><kbd className="px-1 py-0.5 bg-muted rounded">Ctrl+C</kbd> Communication</span>
            <span><kbd className="px-1 py-0.5 bg-muted rounded">Ctrl+A</kbd> Analytics</span>
            <span><kbd className="px-1 py-0.5 bg-muted rounded">Esc</kbd> Close Panel</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponderCommandDashboard;