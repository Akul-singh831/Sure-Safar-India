import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const APIDocumentationSection = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('tourist-registration');

  const endpoints = [
    { id: 'tourist-registration', method: 'POST', path: '/v1/tourists/register', description: 'Register a new tourist for monitoring.'},
    { id: 'location-tracking', method: 'GET', path: '/v1/tourists/{id}/location', description: 'Get real-time tourist location.' },
    { id: 'emergency-alert', method: 'POST', path: '/v1/emergency/alert', description: 'Trigger an emergency alert.' },
    { id: 'safety-score', method: 'GET', path: '/v1/locations/safety-score', description: 'Get a location\'s safety score.'}
  ];

  const codeExamples = {
    'tourist-registration': `// DEMO: Register a new tourist
const touristData = {
  name: "Jane Doe",
  passport: "US12345678",
  phone: "+15551234567"
};

fetch('https://api.sandbox.safeguard.in/v1/tourists/register', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_SANDBOX_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(touristData)
})
.then(res => res.json())
.then(console.log);`,
    'location-tracking': `// DEMO: Get tourist location
const touristId = 'tourist_abc_123';

fetch(\`https://api.sandbox.safeguard.in/v1/tourists/\${touristId}/location\`, {
  headers: {
    'Authorization': 'Bearer YOUR_SANDBOX_KEY'
  }
})
.then(res => res.json())
.then(console.log);`,
    'emergency-alert': `// DEMO: Trigger an emergency alert
const alertData = {
  tourist_id: 'tourist_abc_123',
  alert_type: 'medical',
  location: { lat: 28.6129, lng: 77.2295 }
};

fetch('https://api.sandbox.safeguard.in/v1/emergency/alert', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_SANDBOX_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(alertData)
})
.then(res => res.json())
.then(console.log);`,
    'safety-score': `// DEMO: Get location safety score
const location = { lat: 28.6562, lng: 77.2410 }; // Red Fort

fetch(\`https://api.sandbox.safeguard.in/v1/locations/safety-score?lat=\${location.lat}&lng=\${location.lng}\`, {
  headers: {
    'Authorization': 'Bearer YOUR_SANDBOX_KEY'
  }
})
.then(res => res.json())
.then(console.log);`
  };

  const currentEndpoint = endpoints.find(e => e.id === selectedEndpoint);

  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-strong">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">API Documentation</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Explore our REST API to integrate SafeGuard's features into your applications.
        </p>
      </div>

      <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-700 rounded-lg p-4 flex items-center space-x-3 mb-8">
        <Icon name="Beaker" size={24} />
        <div>
          <h4 className="font-bold">Sandbox Environment</h4>
          <p className="text-sm">This is a demonstration API. All endpoints use mock data and do not trigger real-world actions.</p>
        </div>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h3 className="font-semibold text-text-primary mb-4">API Endpoints</h3>
          <div className="space-y-2">
            {endpoints.map((endpoint) => (
              <button
                key={endpoint.id}
                onClick={() => setSelectedEndpoint(endpoint.id)}
                className={`w-full text-left p-3 rounded-lg transition-colors ${
                  selectedEndpoint === endpoint.id
                    ? 'bg-primary/10 text-primary'
                    : 'hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className={`w-16 text-center px-2 py-1 rounded text-xs font-semibold ${
                    endpoint.method === 'GET' ? 'bg-success/20 text-success' : 'bg-primary/20 text-primary'
                  }`}>{endpoint.method}</span>
                  <span className="font-mono text-sm">{endpoint.path}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-2">
           <h3 className="font-semibold text-text-primary mb-4">{currentEndpoint.description}</h3>
           <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="flex justify-between items-center p-3 bg-gray-800">
                    <span className="text-gray-300 text-sm font-medium">JavaScript Example</span>
                    <Button variant="ghost" size="sm" iconName="Copy" className="text-gray-400 hover:text-white">Copy</Button>
                </div>
                <pre className="p-4 text-green-400 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                  <code>{codeExamples[selectedEndpoint]}</code>
                </pre>
            </div>
        </div>
      </div>
    </div>
  );
};

export default APIDocumentationSection;
