import React from 'react';

import Image from '../../../components/AppImage';

const GovernmentPartnerships = () => {
  const partnerships = [
    {
      id: 1,
      ministry: "Ministry of Tourism",
      role: "Primary Implementation Partner",
      agreement: "Strategic Partnership Agreement",
      signedDate: "2024-01-15",
      status: "active",
      description: "Joint development of tourist safety protocols and nationwide deployment framework.",
      logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 2,
      ministry: "Ministry of Home Affairs",
      role: "Security Framework Advisor",
      agreement: "Security Cooperation MoU",
      signedDate: "2024-02-20",
      status: "active",
      description: "Integration with national security infrastructure and emergency response systems.",
      logo: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 3,
      ministry: "Ministry of External Affairs",
      role: "International Coordination",
      agreement: "Diplomatic Support Framework",
      signedDate: "2024-03-10",
      status: "active",
      description: "Embassy integration and international tourist assistance coordination.",
      logo: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=100&h=100&fit=crop&crop=center"
    },
    {
      id: 4,
      ministry: "Ministry of Electronics & IT",
      role: "Technology Standards Partner",
      agreement: "Digital India Initiative",
      signedDate: "2024-04-05",
      status: "active",
      description: "Compliance with national cybersecurity standards and digital governance frameworks.",
      logo: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const timeline = [
    { date: "Jan 2024", event: "Initial Partnership Discussions", status: "completed" },
    { date: "Feb 2024", event: "Security Framework Development", status: "completed" },
    { date: "Mar 2024", event: "Pilot Program Launch", status: "completed" },
    { date: "Apr 2024", event: "National Rollout Phase 1", status: "completed" },
    { date: "Sep 2024", event: "Full Deployment", status: "current" },
    { date: "Dec 2024", event: "International Expansion", status: "upcoming" }
  ];

  return (
    <section className="bg-card rounded-xl p-8 shadow-medium border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Government Partnerships</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          SafeGuard India operates through official partnerships with key government ministries, ensuring seamless integration with national security infrastructure.
        </p>
      </div>
      {/* Partnership Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {partnerships?.map((partnership) => (
          <div key={partnership?.id} className="bg-gradient-to-br from-muted/20 to-muted/40 rounded-lg p-6 hover-lift transition-smooth">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 rounded-lg overflow-hidden shadow-soft bg-white p-2">
                <Image 
                  src={partnership?.logo} 
                  alt={partnership?.ministry}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-text-primary">{partnership?.ministry}</h3>
                  <span className="px-2 py-1 bg-success/10 text-success text-xs rounded-full font-medium">
                    Active
                  </span>
                </div>
                <p className="text-sm font-medium text-primary mb-2">{partnership?.role}</p>
                <p className="text-sm text-text-secondary mb-3">{partnership?.description}</p>
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <span>{partnership?.agreement}</span>
                  <span>Signed: {partnership?.signedDate}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Development Timeline */}
      <div className="bg-muted/20 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-text-primary mb-6 text-center">Development Timeline</h3>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          <div className="space-y-8">
            {timeline?.map((item, index) => (
              <div key={index} className="relative flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className={`inline-block px-3 py-1 rounded-lg text-sm ${
                    item?.status === 'completed' ? 'bg-success/10 text-success' :
                    item?.status === 'current'? 'bg-primary/10 text-primary' : 'bg-muted text-text-secondary'
                  }`}>
                    {item?.date}
                  </div>
                </div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                  item?.status === 'completed' ? 'bg-success border-success' :
                  item?.status === 'current'? 'bg-primary border-primary animate-pulse-soft' : 'bg-muted border-border'
                }`}></div>
                <div className="flex-1 pl-8">
                  <p className={`text-sm font-medium ${
                    item?.status === 'current' ? 'text-primary' : 'text-text-primary'
                  }`}>
                    {item?.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GovernmentPartnerships;