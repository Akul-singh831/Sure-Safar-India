import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const SecurityMetrics = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const liveMetrics = [
    { id: 'uptime', title: 'System Uptime', value: '99.98%', status: 'excellent', icon: 'Activity', description: 'Target availability over last 30 days' },
    { id: 'encryption', title: 'Encryption Status', value: 'Active', status: 'secure', icon: 'Lock', description: 'All data encrypted with AES-256' },
    { id: 'breaches', title: 'Security Incidents', value: '0', status: 'perfect', icon: 'ShieldCheck', description: 'Zero breaches in pilot phase' },
    { id: 'response', title: 'Threat Response', value: '< 2.3s', status: 'excellent', icon: 'Zap', description: 'Projected emergency access time' }
  ];

  const securityAudits = [
    { id: 1, auditor: 'CyberSec Auditors Inc.', type: 'Penetration Testing', date: '2025-08-15', result: 'Passed', score: '98/100', status: 'completed' },
    { id: 2, auditor: 'SecureVerify LLP', type: 'Vulnerability Assessment', date: '2025-09-20', result: 'In Progress', score: 'N/A', status: 'ongoing' },
    { id: 3, auditor: 'GovCert India', type: 'Compliance Audit (DPDP)', date: 'Scheduled', result: 'Pending', score: 'N/A', status: 'pending', nextAudit: '2025-11-10' },
  ];
  
  const getStatusInfo = (status) => {
    switch (status) {
      case 'excellent': case 'secure': case 'perfect': return { color: 'text-success', bg: 'bg-success/10' };
      case 'completed': return { color: 'text-success', bg: 'bg-success/10' };
      case 'ongoing': return { color: 'text-warning', bg: 'bg-warning/10' };
      case 'pending': return { color: 'text-primary', bg: 'bg-primary/10' };
      default: return { color: 'text-text-secondary', bg: 'bg-muted' };
    }
  };


  return (
    <section className="bg-card rounded-2xl p-8 shadow-strong border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Live Security Metrics</h2>
        <p className="text-text-secondary max-w-2xl mx-auto mb-4">
          Real-time monitoring of our security infrastructure with transparent reporting of all metrics and audit results.
        </p>
         <div className="inline-flex items-center space-x-2 bg-muted/50 px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse-soft"></div>
            <span className="text-sm text-text-secondary">
                Last Update: {currentTime.toLocaleTimeString()}
            </span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {liveMetrics.map((metric) => {
           const { color, bg } = getStatusInfo(metric.status);
           return (
            <div key={metric.id} className="bg-muted/30 rounded-xl p-6 transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg ${bg}`}><Icon name={metric.icon} size={24} className={color} /></div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${bg} ${color}`}>{metric.status}</div>
              </div>
              <div className="text-3xl font-bold text-text-primary">{metric.value}</div>
              <div className="font-semibold text-text-primary mb-2">{metric.title}</div>
              <p className="text-xs text-text-secondary">{metric.description}</p>
            </div>
           )
        })}
      </div>
      
      <div>
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Third-Party Security Audits</h3>
        <div className="space-y-3">
          {securityAudits.map((audit) => {
             const { color, bg } = getStatusInfo(audit.status);
             return (
              <div key={audit.id} className="bg-muted/30 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${bg}`}><Icon name={audit.status === 'completed' ? 'CheckCircle' : 'Clock'} size={20} className={color} /></div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{audit.type}</h4>
                    <p className="text-sm text-text-secondary">{audit.auditor}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                   <div className="text-right">
                      <div className="text-sm font-medium text-text-primary">{audit.score}</div>
                      <div className="text-xs text-text-secondary">{audit.date}</div>
                   </div>
                   <div className={`px-3 py-1 w-28 text-center rounded-full text-xs font-medium ${bg} ${color}`}>{audit.result}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityMetrics;
