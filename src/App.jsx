import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Surveillance from './pages/services/Surveillance';
import BackgroundChecks from './pages/services/BackgroundChecks';
import DueDiligence from './pages/services/DueDiligence';
import LocateInvestigations from './pages/services/LocateInvestigations';
import CorporateInvestigations from './pages/services/CorporateInvestigations';
import AssetSearches from './pages/services/AssetSearches';
import LegalSupport from './pages/services/LegalSupport';
import ClaimsSupport from './pages/services/ClaimsSupport';
import Miami from './pages/locations/Miami';
import Orlando from './pages/locations/Orlando';
import Tampa from './pages/locations/Tampa';
import Jacksonville from './pages/locations/Jacksonville';
import Naples from './pages/locations/Naples';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/surveillance" element={<Surveillance />} />
              <Route path="/services/background-checks" element={<BackgroundChecks />} />
              <Route path="/services/due-diligence" element={<DueDiligence />} />
              <Route path="/services/locate-investigations" element={<LocateInvestigations />} />
              <Route path="/services/corporate-investigations" element={<CorporateInvestigations />} />
              <Route path="/services/asset-searches" element={<AssetSearches />} />
              <Route path="/services/legal-support" element={<LegalSupport />} />
              <Route path="/services/claims-support" element={<ClaimsSupport />} />
              <Route path="/locations/miami" element={<Miami />} />
              <Route path="/locations/orlando" element={<Orlando />} />
              <Route path="/locations/tampa" element={<Tampa />} />
              <Route path="/locations/jacksonville" element={<Jacksonville />} />
              <Route path="/locations/naples" element={<Naples />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;