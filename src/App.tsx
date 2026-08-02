import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Criteria } from './components/Criteria';
import { Process } from './components/Process';
import { useRevealOnScroll } from './hooks/useRevealOnScroll';
import { I18nProvider, useI18n } from './context/I18nContext';
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
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { NotFoundPage } from './components/NotFoundPage';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
    }
  }, [hash, pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased">
        <Hero />
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

function AboutPageRoute() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased min-h-screen bg-white">
        <AboutPage />
        <TechnicalSupportBanner />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}



function ContactPageRoute() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased min-h-screen bg-white">
        <ContactPage />
        <TechnicalSupportBanner />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

function BlogPageRoute() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased min-h-screen bg-white">
        <BlogPage />
        <SuccessCtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

function BlogPostPageRoute() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased min-h-screen bg-white">
        <BlogPostPage />
        <SuccessCtaSection />
        <FaqSection />
      </main>
      <Footer />
    </>
  );
}

function NotFoundPageRoute() {
  return (
    <>
      <Header />
      <main className="font-sans antialiased bg-white flex flex-col min-h-[70vh]">
        <div className="flex-grow flex items-center justify-center">
          <NotFoundPage />
        </div>
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
        <Route path="/tentang-kami" element={<AboutPageRoute />} />
        <Route path="/kontak" element={<ContactPageRoute />} />
        <Route path="/blog" element={<BlogPageRoute />} />
        <Route path="/blog/:slug" element={<BlogPostPageRoute />} />
        <Route path="*" element={<NotFoundPageRoute />} />
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