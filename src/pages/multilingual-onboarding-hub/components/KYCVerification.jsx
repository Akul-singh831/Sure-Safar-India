import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { cn } from '../../../utils/cn';

const KYCVerification = ({ onComplete }) => {
  const [internalStep, setInternalStep] = useState(1);
  const [verificationData, setVerificationData] = useState({
    documentType: '',
    documentNumber: '',
    fullName: '',
    dateOfBirth: '',
    nationality: '',
    uploadedFiles: []
  });
  const [verificationStatus, setVerificationStatus] = useState('pending');
  const totalInternalSteps = 3;

  const mainOnboardingSteps = [
    { id: 'kyc', name: 'Identity Verification', icon: 'Shield' },
    { id: 'culture', name: 'Orientation', icon: 'BookOpen' },
    { id: 'tutorial', name: 'Tutorial', icon: 'Play' },
    { id: 'family', name: 'Family Network', icon: 'Users' },
    { id: 'itinerary', name: 'Travel Plans', icon: 'Route' },
  ];

  const documentTypes = [
    { value: 'passport', label: 'Passport', icon: 'FileText', description: 'International travelers' },
    { value: 'aadhaar', label: 'Aadhaar Card', icon: 'CreditCard', description: 'Indian nationals' },
    { value: 'visa', label: 'Visa Document', icon: 'Stamp', description: 'Visa holders' },
    { value: 'driving_license', label: 'Driving License', icon: 'Car', description: 'Alternative ID' },
  ];

  const handleDocumentTypeSelect = (type) => {
    setVerificationData(prev => ({ ...prev, documentType: type }));
    setInternalStep(2);
  };

  const handleInputChange = (field, value) => {
    setVerificationData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    setVerificationData(prev => ({
      ...prev,
      uploadedFiles: [...prev.uploadedFiles, ...files]
    }));
  };

  const simulateVerification = () => {
    setVerificationStatus('processing');
    setTimeout(() => {
      setVerificationStatus('verified');
      setTimeout(() => {
        onComplete();
      }, 1500);
    }, 2500);
  };
  
  const renderFormContent = () => {
    switch (internalStep) {
        case 1:
            return (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-text-primary mb-2 text-center">Choose your document type</h2>
                <p className="text-text-secondary text-center">Select a document for secure identity verification.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {documentTypes.map((doc) => (
                    <button key={doc.value} onClick={() => handleDocumentTypeSelect(doc.value)} className="p-4 border-2 border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200 text-left">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center"><Icon name={doc.icon} size={24} className="text-primary"/></div>
                        <div>
                          <h3 className="font-semibold text-text-primary">{doc.label}</h3>
                          <p className="text-sm text-text-secondary">{doc.description}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            );
        case 2:
            return (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Enter Document Details</h2>
                <Input label="Full Name (as on document)" type="text" value={verificationData.fullName} onChange={(e) => handleInputChange('fullName', e.target.value)} required />
                <Input label="Document Number" type="text" value={verificationData.documentNumber} onChange={(e) => handleInputChange('documentNumber', e.target.value)} required />
                <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                  <Icon name="UploadCloud" size={32} className="text-text-secondary mx-auto mb-2" />
                  <p className="text-sm text-text-secondary mb-2">Upload document photos (front/back)</p>
                  <input type="file" multiple onChange={handleFileUpload} className="hidden" id="file-upload" />
                  <label htmlFor="file-upload"><Button variant="outline" asChild><span>Choose Files</span></Button></label>
                  {verificationData.uploadedFiles.length > 0 && <p className="text-xs text-success mt-2">{verificationData.uploadedFiles.length} file(s) selected.</p>}
                </div>
                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setInternalStep(1)}>Back</Button>
                  <Button onClick={() => setInternalStep(3)} disabled={!verificationData.fullName || !verificationData.documentNumber || verificationData.uploadedFiles.length === 0}>Review & Submit</Button>
                </div>
              </div>
            );
        case 3:
            return (
                <div className="text-center flex flex-col items-center justify-center h-full">
                    {verificationStatus === 'processing' && <Icon name="Loader" size={48} className="text-primary animate-spin mb-4" />}
                    {verificationStatus === 'verified' && <Icon name="CheckCircle" size={48} className="text-success mb-4" />}
                    <h2 className="text-2xl font-bold text-text-primary mb-2">
                        {verificationStatus === 'pending' && 'Review & Verify'}
                        {verificationStatus === 'processing' && 'Verifying...'}
                        {verificationStatus === 'verified' && 'Verification Complete!'}
                    </h2>
                    <p className="text-text-secondary mb-6">
                        {verificationStatus === 'pending' && 'Please review your information before final submission.'}
                        {verificationStatus === 'processing' && 'This will take just a moment.'}
                        {verificationStatus === 'verified' && 'You will be moved to the next step automatically.'}
                    </p>
                    {verificationStatus === 'pending' && (
                        <div className="flex justify-center space-x-4">
                           <Button variant="outline" onClick={() => setInternalStep(2)}>Edit</Button>
                           <Button onClick={simulateVerification}>Submit for Verification</Button>
                        </div>
                    )}
                </div>
            );
        default: return null;
    }
  };


  return (
    <div className="bg-card rounded-2xl shadow-strong p-8 border border-border">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-text-secondary">
            Step {internalStep} of {totalInternalSteps}
          </span>
          <span className="text-sm font-medium text-primary">
            {Math.round(((internalStep) / totalInternalSteps) * 100)}% Complete
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${(internalStep / totalInternalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="min-h-[450px]">
        {renderFormContent()}
      </div>
      
      <div className="mt-8 pt-6 border-t border-border">
        <div className="flex justify-around items-start text-center">
          {mainOnboardingSteps.map((step) => (
            <div key={step.id} className="flex flex-col items-center w-24">
              <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-colors",
                  step.id === 'kyc' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                )}>
                <Icon name={step.icon} size={32} />
              </div>
              <span className={cn(
                  "font-medium text-sm",
                  step.id === 'kyc' ? 'text-primary' : 'text-text-secondary'
                )}>
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KYCVerification;