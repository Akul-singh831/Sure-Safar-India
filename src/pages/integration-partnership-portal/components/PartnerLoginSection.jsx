import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const PartnerLoginSection = () => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showDashboard, setShowDashboard] = useState(false);
  const [error, setError] = useState('');

  const mockCredentials = {
    hotel: { email: 'hotel@partner.com', password: 'Password123' },
    tour: { email: 'tour@partner.com', password: 'Password123' },
    agency: { email: 'agency@partner.com', password: 'Password123' },
    government: { email: 'gov@partner.com', password: 'Password123' }
  };

  const handleInputChange = (e) => {
    setError('');
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = Object.values(mockCredentials).some(
      cred => cred.email === loginData.email && cred.password === loginData.password
    );
    if (isValid) {
      setShowDashboard(true);
      setError('');
    } else {
      setError('Invalid credentials. Please use one of the demo accounts provided.');
    }
  };
  
  // ... (rest of the dashboard and form rendering logic) ...

  if (showDashboard) {
    // This part remains mostly the same, it shows a mock dashboard
    return (
      <div className="bg-card border border-border rounded-2xl p-8 shadow-strong">
        {/* Mock Dashboard UI */}
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary">Partner Dashboard</h2>
            <Button variant="outline" size="sm" iconName="LogOut" onClick={() => setShowDashboard(false)}>Logout</Button>
        </div>
        <p className="text-text-secondary">Welcome back! This is a preview of your partner dashboard.</p>
        {/* ... (add mock stats here if needed) ... */}
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-8 shadow-strong">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-text-primary">Partner Portal Access</h2>
        <p className="text-text-secondary">Login to your dashboard or apply for a new partnership.</p>
      </div>
      <div className="max-w-md mx-auto">
        <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
          <button onClick={() => { setIsLoginMode(true); setError(''); }} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-smooth ${isLoginMode ? 'bg-card text-primary shadow-soft' : 'text-text-secondary hover:text-text-primary'}`}>Partner Login</button>
          <button onClick={() => { setIsLoginMode(false); setError(''); }} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-smooth ${!isLoginMode ? 'bg-card text-primary shadow-soft' : 'text-text-secondary hover:text-text-primary'}`}>New Partnership</button>
        </div>
        {isLoginMode ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <Input label="Email Address" type="email" name="email" value={loginData.email} onChange={handleInputChange} placeholder="Enter your partner email" required />
            <Input label="Password" type="password" name="password" value={loginData.password} onChange={handleInputChange} placeholder="Enter your password" required />
            {error && <p className="text-sm text-error text-center">{error}</p>}
            <Button type="submit" fullWidth iconName="LogIn" iconPosition="left" className="shadow-strong hover-glow">Access Partner Portal</Button>
            <div className="bg-muted/50 rounded-lg p-4 mt-4 text-sm">
                <h4 className="font-semibold text-text-primary mb-2 text-center">Demo Credentials</h4>
                <p className="text-text-secondary text-center">Use any email below with the password: <strong className="text-primary">Password123</strong></p>
                <ul className="mt-2 text-center text-text-secondary text-xs space-y-1">
                    <li>hotel@partner.com</li>
                    <li>tour@partner.com</li>
                    <li>agency@partner.com</li>
                </ul>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <Icon name="Wrench" size={48} className="text-secondary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-text-primary">Partnership Applications are Opening Soon!</h3>
            <p className="text-text-secondary mt-2">Our portal is currently in a demo phase. Please check back later to submit your partnership application.</p>
             <Button fullWidth className="mt-6" disabled>Submit Application (Upcoming)</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerLoginSection;
