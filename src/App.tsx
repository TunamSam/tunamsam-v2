import { useEffect, useState } from 'react';
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

function AppContent() {
  const { lang } = useI18n();
  useRevealOnScroll();
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang.toLowerCase();
  }, [lang]);

  if (currentHash === '#katalog-desain') {
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

  return (
    <>
      <Header />
      <main className="font-sans antialiased">
        <Hero />
        <TrustedBy />
        <ProblemSolution />
        <Criteria />
        <Pricing />
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

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}