import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SecurityFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqCategories = [
    {
      id: 'privacy',
      title: 'Privacy & Data Protection',
      icon: 'Shield',
      color: 'text-primary',
      questions: [
        {
          id: 'data-collection',
          question: 'What personal data does SafeGuard India collect?',
          answer: `We collect only essential data for your safety:\n\n• Location data (GPS coordinates) for emergency response\n• Identity information (passport details) for verification\n• Emergency contacts for crisis communication\n• Device information for technical support\n\nAll data collection is transparent, with clear consent mechanisms and detailed explanations of usage purposes.`
        },
        {
          id: 'data-sharing',
          question: 'Who has access to my personal information?',
          answer: `Your data access is strictly controlled:\n\n• Emergency responders: Only during active incidents\n• Government authorities: Only with legal authorization\n• Your emergency contacts: Location and status updates\n• Technical support: Anonymized data for troubleshooting\n\nWe never sell or share your data for commercial purposes. All access is logged and auditable.`
        },
        {
          id: 'data-deletion',
          question: 'How can I delete my data from SafeGuard India?',
          answer: `You have complete control over your data:\n\n• Account deletion: Removes all personal information within 30 days\n• Selective deletion: Remove specific data types while keeping account active\n• Automatic cleanup: Location data auto-deletes after 30 days\n• Legal retention: Some data may be retained for legal compliance (7 years maximum)\n\nContact our privacy team for immediate deletion requests.`
        }
      ]
    },
    {
      id: 'surveillance',
      title: 'Surveillance & Monitoring',
      icon: 'Eye',
      color: 'text-secondary',
      questions: [
        {
          id: 'surveillance-concerns',
          question: 'Is SafeGuard India a surveillance system?',
          answer: `SafeGuard India is a safety system, not surveillance:\n\n• Purpose-built for tourist protection, not monitoring\n• Data collection only when you opt-in and activate services\n• No continuous tracking without your explicit consent\n• Emergency-only access to sensitive information\n• Complete transparency about all data usage\n\nYour privacy is protected while ensuring your safety.`
        },
        {
          id: 'location-tracking',
          question: 'Can the government track my location at all times?',
          answer: `Location tracking is strictly controlled:\n\n• Only active when you enable emergency services\n• Encrypted and stored securely on blockchain\n• Government access requires emergency authorization\n• You can disable location sharing at any time\n• Complete audit trail of all access attempts\n\nYour location privacy is protected by multiple security layers.`
        },
        {
          id: 'data-misuse',
          question: 'How do you prevent data misuse by authorities?',
          answer: `Multiple safeguards prevent data misuse:\n\n• Multi-signature authorization for data access\n• Blockchain-based audit trails (immutable records)\n• Regular third-party security audits\n• Legal frameworks limiting data usage\n• Automatic access logging and monitoring\n• Whistleblower protection for reporting misuse\n\nTransparency and accountability are built into our system architecture.`
        }
      ]
    },
    {
      id: 'security',
      title: 'Technical Security',
      icon: 'Lock',
      color: 'text-accent',
      questions: [
        {
          id: 'encryption-methods',
          question: 'How is my data encrypted and protected?',
          answer: `We use military-grade security measures:\n\n• AES-256 encryption for all stored data\n• End-to-end encryption for communications\n• Blockchain technology for identity protection\n• Multi-layer security architecture\n• Regular penetration testing and security audits\n• Zero-knowledge architecture where possible\n\nYour data is protected using the highest security standards available.`
        },
        {
          id: 'data-breaches',
          question: 'What happens if there is a data breach?',
          answer: `Our breach response protocol ensures rapid action:\n\n• Immediate containment and investigation\n• Notification within 72 hours (GDPR compliance)\n• Detailed impact assessment and user notification\n• Free credit monitoring and identity protection services\n• Transparent reporting of breach details and remediation\n• Continuous monitoring to prevent future incidents\n\nWe maintain a perfect security record with zero breaches to date.`
        },
        {
          id: 'third-party-security',
          question: 'How do you ensure third-party vendor security?',
          answer: `All vendors undergo rigorous security vetting:\n\n• Comprehensive security assessments before engagement\n• Regular security audits and compliance checks\n• Contractual security requirements and penalties\n• Limited data access on need-to-know basis\n• Continuous monitoring of vendor security practices\n• Immediate termination for security violations\n\nWe maintain the same security standards across our entire ecosystem.`
        }
      ]
    },
    {
      id: 'rights',
      title: 'Tourist Rights & Control',
      icon: 'Users',
      color: 'text-trust',
      questions: [
        {
          id: 'opt-out',
          question: 'Can I opt out of data collection while still using the service?',
          answer: `You have granular control over data sharing:\n\n• Essential safety data: Required for emergency response\n• Location sharing: Can be disabled (reduces safety features)\n• Analytics data: Completely optional\n• Communication preferences: Fully customizable\n• Emergency contacts: You control who receives updates\n\nWe provide maximum choice while maintaining essential safety capabilities.`
        },
        {
          id: 'data-portability',
          question: 'Can I export my data to another service?',
          answer: `Full data portability is supported:\n\n• Complete data export in standard formats (JSON, CSV)\n• Emergency contact lists and preferences\n• Location history and safety incident records\n• Account settings and communication preferences\n• API access for automated data transfer\n• No vendor lock-in or export restrictions\n\nYour data belongs to you, and you can take it anywhere.`
        },
        {
          id: 'consent-management',
          question: 'How can I manage my consent and privacy settings?',
          answer: `Comprehensive consent management tools:\n\n• Granular privacy controls in your account dashboard\n• Real-time consent modification (takes effect immediately)\n• Clear explanations of each data usage purpose\n• Consent history and audit trail\n• Easy withdrawal of consent for any data type\n• Regular consent renewal requests for transparency\n\nYou maintain complete control over your privacy preferences at all times.`
        }
      ]
    }
  ];

  const toggleFAQ = (categoryId, questionId) => {
    const faqId = `${categoryId}-${questionId}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="bg-card rounded-xl p-8 shadow-medium border border-border">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Security & Privacy FAQ</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Common questions about surveillance, data ownership, tourist privacy rights, and our security practices.
        </p>
      </div>
      <div className="space-y-8">
        {faqCategories?.map((category) => (
          <div key={category?.id} className="bg-muted/10 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-2 rounded-lg bg-white shadow-soft ${category?.color}`}>
                <Icon name={category?.icon} size={20} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">{category?.title}</h3>
            </div>

            <div className="space-y-4">
              {category?.questions?.map((faq) => {
                const faqId = `${category?.id}-${faq?.id}`;
                const isOpen = openFAQ === faqId;

                return (
                  <div key={faq?.id} className="border border-border rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(category?.id, faq?.id)}
                      className="w-full p-4 bg-card hover:bg-muted/20 transition-smooth flex items-center justify-between text-left"
                    >
                      <span className="font-medium text-text-primary pr-4">{faq?.question}</span>
                      <Icon 
                        name="ChevronDown" 
                        size={20} 
                        className={`text-text-secondary transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-muted/5 border-t border-border">
                        <div className="text-sm text-text-secondary whitespace-pre-line">
                          {faq?.answer}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Contact Section */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-trust/5 rounded-lg">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Still Have Questions?</h3>
          <p className="text-text-secondary mb-6">
            Our security and privacy team is available 24/7 to address your concerns and provide detailed explanations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center justify-center space-x-2 p-3 bg-card rounded-lg shadow-soft">
              <Icon name="Mail" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">privacy@safeguardindia.gov.in</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-3 bg-card rounded-lg shadow-soft">
              <Icon name="Phone" size={16} className="text-secondary" />
              <span className="text-sm font-medium text-text-primary">+91-11-2345-6789</span>
            </div>
            <div className="flex items-center justify-center space-x-2 p-3 bg-card rounded-lg shadow-soft">
              <Icon name="MessageCircle" size={16} className="text-accent" />
              <span className="text-sm font-medium text-text-primary">Live Chat Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityFAQ;