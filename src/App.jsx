import React, { useState } from 'react';
import Routes from './Routes';
import CommunicationPanel from './pages/responder-command-dashboard/components/CommunicationPanel';

function App() {
  const [isCommPanelOpen, setIsCommPanelOpen] = useState(false);

  const toggleCommPanel = () => {
    setIsCommPanelOpen(prev => !prev);
  };

  return (
    // The main container for your application
    <div className="bg-background text-text-primary min-h-screen">
      <Routes />
      <CommunicationPanel isOpen={isCommPanelOpen} onToggle={toggleCommPanel} />
    </div>
  );
}

export default App;