import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Criteria } from './components/Criteria';
import { Process } from './components/Process';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { I18nProvider } from './context/I18nContext';
import { SEOHead } from './components/SEOHead';
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

function AppContent() {
  useRevealOnScroll();

  return (
    <>
      <SEOHead />
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
    <HelmetProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </HelmetProvider>
  );
}
