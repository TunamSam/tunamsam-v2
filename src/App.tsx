import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Criteria } from './components/Criteria';
import { Process } from './components/Process';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { I18nProvider } from './context/I18nContext';
import { TrustedBy } from './components/generated/TrustedBy';
import { ProblemSolution } from './components/generated/ProblemSolution';
import { Pricing } from './components/generated/Pricing';
import { TechnicalSupportBanner } from './components/generated/TechnicalSupportBanner';
import { WhyUs } from './components/generated/WhyUs';
import { DesignChoices } from './components/generated/DesignChoices';
import { AdditionalServices } from './components/generated/AdditionalServices';
import { Footer } from './components/generated/Footer';

function AppContent() {
  useRevealOnScroll();

  return (
    <div className="font-sans antialiased">
      <Header />
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
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppContent />
    </I18nProvider>
  );
}
