import React from 'react';
import Icon from '../../../components/AppIcon';

const SecurityCertifications = () => {
  const certifications = [
    {
      name: "ISO 27001:2022",
      description: "Information Security Management",
      issuer: "International Organization for Standardization",
      status: "Certified",
      validUntil: "2025-12-31",
      icon: "ShieldCheck",
      color: "success"
    },
    {
      name: "SOC 2 Type II",
      description: "Security, Availability & Confidentiality",
      issuer: "American Institute of CPAs",
      status: "Audit In Progress",
      validUntil: "Est. Q4 2025",
      icon: "Clock",
      color: "warning"
    },
    {
      name: "CERT-In Empanelled",
      description: "Indian Computer Emergency Response Team",
      issuer: "Government of India",
      status: "Application Submitted",
      validUntil: "Est. Q1 2026",
      icon: "FileCheck",
      color: "primary"
    },
    {
      name: "GDPR Compliant",
      description: "General Data Protection Regulation",
      issuer: "European Union",
      status: "Compliant",
      validUntil: "Ongoing",
      icon: "Globe",
      color: "success"
    }
  ];
  
  const getStatusInfo = (status) => {
      if (status === 'Certified' || status === 'Compliant') return { color: 'text-success', bg: 'bg-success/10' };
      if (status === 'Audit In Progress') return { color: 'text-warning', bg: 'bg-warning/10' };
      if (status === 'Application Submitted') return { color: 'text-primary', bg: 'bg-primary/10' };
      return { color: 'text-text-secondary', bg: 'bg-muted' };
  };

  return (
    <section className="bg-card rounded-2xl p-8 shadow-strong border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Security Certifications</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Our platform is being built to maintain the highest security standards through internationally recognized certifications and compliance frameworks.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => {
          const { color, bg } = getStatusInfo(cert.status);
          return (
            <div key={cert.name} className="bg-muted/30 rounded-xl p-6 transition-all duration-300 hover:shadow-medium hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className={`p-4 rounded-lg bg-card shadow-soft`}><Icon name={cert.icon} size={24} className={color} /></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-text-primary">{cert.name}</h3>
                    <span className={`px-2 py-1 ${bg} ${color} text-xs rounded-full font-medium`}>
                      {cert.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{cert.description}</p>
                  <div className="text-xs text-text-secondary space-y-1">
                      <p><span className="font-medium">Issuer:</span> {cert.issuer}</p>
                      <p><span className="font-medium">Target Date:</span> {cert.validUntil}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default SecurityCertifications;
