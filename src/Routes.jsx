import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import HomepageUnifiedLandingExperience from './pages/homepage-unified-landing-experience';
import ResponderCommandDashboard from './pages/responder-command-dashboard';
import IntegrationPartnershipPortal from './pages/integration-partnership-portal';
import TrustSecurityCenter from './pages/trust-security-center';
import MultilingualOnboardingHub from './pages/multilingual-onboarding-hub';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<HomepageUnifiedLandingExperience />} />
        <Route path="/homepage-unified-landing-experience" element={<HomepageUnifiedLandingExperience />} />
        <Route path="/responder-command-dashboard" element={<ResponderCommandDashboard />} />
        <Route path="/integration-partnership-portal" element={<IntegrationPartnershipPortal />} />
        <Route path="/trust-security-center" element={<TrustSecurityCenter />} />
        <Route path="/multilingual-onboarding-hub" element={<MultilingualOnboardingHub />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;