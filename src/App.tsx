import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Criteria } from './components/Criteria';
import { Process } from './components/Process';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { I18nProvider, useI18n } from './context/I18nContext';
import { TrustedBy } from './components/generated/TrustedBy';
import { ProblemSolution } from './components/generated/ProblemSolution';
import { Pricing } from './components/generated/Pricing';
import { TechnicalSupportBanner } from './components/generated/TechnicalSupportBanner';
import { WhyUs } from './components/generated/WhyUs';
import { DesignChoices } from './components/generated/DesignChoices';
import { AdditionalServices } from './components/generated/AdditionalServices';
import { SuccessCtaSection } from './components/SuccessCtaSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/generated/Footer';
import { DesignCatalog } from './components/DesignCatalog';
import { PricingPage } from './components/PricingPage';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);
  return null;
}

function HomePage() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased">
        <Hero />
        <TrustedBy />
        <ProblemSolution />
        <Pricing />
        <Criteria />
        <TechnicalSupportBanner />
        <WhyUs />
        <DesignChoices />
        <Process />
        <AdditionalServices />
        <SuccessCtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

function DesignCatalogRoute() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased min-h-screen bg-gray-50">
        <DesignCatalog />
      </main>
      <Footer />
    </>
  );
}

function PricingPageRoute() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased min-h-screen bg-white">
        <PricingPage />
        <TechnicalSupportBanner />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

function AppContent() {
  const { lang } = useI18n();
  useRevealOnScroll();

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  return (
    <Router>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/katalog-desain" element={<DesignCatalogRoute />} />
        <Route path="/harga-website" element={<PricingPageRoute />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}