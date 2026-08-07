import { ChevronDown, Mail, MapPin, Phone, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';
import { FLAG_URLS, type Lang } from '../i18n/translations';

const NAV_LINKS = [
  { href: '/', key: 'home' as const },
  { href: '/katalog-desain', key: 'nav_design' as const },
  { href: '/harga-website', key: 'nav_pricing' as const },
  { href: '/tentang-kami', key: 'nav_about' as const },
  { href: '/kontak', key: 'contact' as const },
  { href: '/blog', key: 'nav_blog' as const },
];

const LANGUAGES: { lang: Lang; label: string }[] = [
  { lang: 'ID', label: 'ID - Indonesia' },
  { lang: 'EN', label: 'EN - English' },
];

export function Header() {
  const { lang, flagUrl, t, changeLang } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pillMenuOpen, setPillMenuOpen] = useState(false);
  const [pillMobileMenuOpen, setPillMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pillMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => {
      setMenuOpen(false);
      setPillMenuOpen(false);
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLinks = (onClick?: () => void) => (
    <>
      {NAV_LINKS.map((link) => {
        const isActive = location.pathname === link.href || (location.pathname + location.hash) === link.href;
        return (
          <Link
            key={link.key}
            to={link.href}
            className={`transition-all cursor-pointer pb-1 border-b-2 ${
              isActive ? 'border-white opacity-100' : 'border-transparent hover:opacity-70'
            } ${onClick ? 'w-max' : ''}`}
            onClick={onClick}
          >
            {t(link.key)}
          </Link>
        );
      })}
    </>
  );

  return (
    <>
      <header className="bg-brand text-white relative z-50">
      {isHomePage ? (
        // --- 1. FULL HEADER (HOME PAGE) ---
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-6">
          <div className="flex justify-between items-center lg:mb-4">
            <div className="relative h-16 w-48 lg:w-64 xl:w-80 flex items-center">
              <Link to="/" className="absolute -top-6 lg:-top-10 xl:-top-12 left-0 z-50">
                <img
                  src="/assets/tunamsam-assets/tunamsam.webp"
                  alt="TunamSam Logo"
                  className="h-32 lg:h-40 xl:h-48 w-auto object-contain"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center lg:space-x-4 xl:space-x-10 text-[13px] xl:text-[14px] font-medium whitespace-nowrap">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white opacity-80" />
                <span>Bali, Indonesia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white opacity-80" />
                <span>tunamsam@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white opacity-80" />
                <span>+62 851-9096-2301</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <a
                href="https://www.instagram.com/tunamsam/"
                aria-label="Instagram"
                className="w-8 h-8 xl:w-10 xl:h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md"
              >
                <i className="fa-brands fa-instagram text-lg xl:text-xl" />
              </a>
              <a
                href="https://www.tiktok.com/@tunamsam"
                aria-label="TikTok"
                className="w-8 h-8 xl:w-10 xl:h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md"
              >
                <i className="fa-brands fa-tiktok text-base xl:text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/tunamsam"
                aria-label="LinkedIn"
                className="w-8 h-8 xl:w-10 xl:h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md"
              >
                <i className="fa-brands fa-linkedin-in text-lg xl:text-xl" />
              </a>
            </div>

            <button
              className="lg:hidden text-white p-2 z-50"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          <div className="hidden lg:flex flex-col md:flex-row justify-between items-center pt-6">
            <nav className="relative z-[60] flex flex-wrap justify-center md:justify-start items-center gap-4 xl:gap-10 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider mb-6 md:mb-0">
              {renderNavLinks()}
            </nav>

            <div className="flex items-center space-x-6">
              <div className="relative group" ref={menuRef}>
                <button
                  type="button"
                  className="flex items-center space-x-2 text-[13px] font-bold uppercase cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen((open) => !open);
                  }}
                >
                  <img src={flagUrl} alt={lang} className="w-5 h-auto" />
                  <span>{lang}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`lang-dropdown${menuOpen ? ' show' : ''}`}>
                  <div className="py-1">
                    {LANGUAGES.map((item) => (
                      <button
                        key={item.lang}
                        type="button"
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-[12px] font-bold w-full text-left"
                        onClick={() => changeLang(item.lang)}
                      >
                        <img src={FLAG_URLS[item.lang]} alt={item.lang} className="w-5 h-auto" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/+6285190962301"
                className="px-8 py-2 bg-brand-light hover:bg-white hover:text-brand-light text-white text-[13px] font-bold rounded-full flex items-center space-x-3 shadow-xl transition-all"
              >
                <i className="fa-brands fa-whatsapp text-xl" />
                <span>{t('contact_us')}</span>
              </a>
            </div>
          </div>
        </div>
      ) : (
        // --- 2. COMPACT HEADER (NON-HOME PAGES) ---
        <div className="max-w-8xl mx-auto px-6 md:px-12 py-3 lg:py-4">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="relative h-10 lg:h-12 xl:h-14 w-32 lg:w-40 xl:w-48 flex items-center shrink-0 z-50">
              <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0">
                <img
                  src="/assets/tunamsam-assets/tunamsam.webp"
                  alt="TunamSam Logo"
                  className="h-[125px] lg:h-12 xl:mt-[20px] xl:h-[155px] w-auto object-contain"
                />
              </Link>
            </div>

            {/* Nav (Desktop) */}
            <nav className="hidden lg:flex relative z-[60] justify-center items-center gap-4 xl:gap-8 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider mx-auto">
              {renderNavLinks()}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-4 lg:gap-6 shrink-0 z-[60]">
              {/* Lang + WA (Desktop) */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                <div className="relative group" ref={menuRef}>
                  <button
                    type="button"
                    className="flex items-center space-x-2 text-[13px] font-bold uppercase cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen((open) => !open);
                    }}
                  >
                    <img src={flagUrl} alt={lang} className="w-5 h-auto" />
                    <span>{lang}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className={`lang-dropdown${menuOpen ? ' show' : ''}`}>
                    <div className="py-1">
                      {LANGUAGES.map((item) => (
                        <button
                          key={item.lang}
                          type="button"
                          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-[12px] font-bold w-full text-left"
                          onClick={() => changeLang(item.lang)}
                        >
                          <img src={FLAG_URLS[item.lang]} alt={item.lang} className="w-5 h-auto" />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/+6285190962301"
                  className="px-6 py-2 bg-white text-brand hover:bg-brand-light hover:text-white text-[13px] font-bold rounded-full flex items-center space-x-2 shadow-xl transition-all"
                >
                  <i className="fa-brands fa-whatsapp text-lg" />
                  <span>{t('contact_us')}</span>
                </a>
              </div>

              {/* Hamburger (Mobile) */}
              <button
                className="lg:hidden text-white p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Shared Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-brand p-6 border-t border-white/20 flex flex-col space-y-6 z-[60] shadow-2xl"
          >
            <nav className="flex flex-col space-y-4 text-[13px] font-bold uppercase tracking-wider">
              {renderNavLinks(() => setMobileMenuOpen(false))}
            </nav>

            <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
              <a href="https://www.instagram.com/tunamsam/" aria-label="Instagram" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                <i className="fa-brands fa-instagram text-xl" />
              </a>
              <a href="https://www.tiktok.com/@tunamsam" aria-label="TikTok" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                <i className="fa-brands fa-tiktok text-lg" />
              </a>
              <a href="https://www.linkedin.com/company/tunamsam" aria-label="LinkedIn" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                <i className="fa-brands fa-linkedin-in text-xl" />
              </a>
            </div>

            <div className="flex flex-col space-y-6 pt-4 border-t border-white/20">
              <div className="relative" ref={mobileMenuRef}>
                <button
                  type="button"
                  className="flex items-center space-x-2 text-[13px] font-bold uppercase cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    setMenuOpen((open) => !open);
                  }}
                >
                  <img src={flagUrl} alt={lang} className="w-5 h-auto" />
                  <span>{lang}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`lang-dropdown${menuOpen ? ' show' : ''}`} style={{ left: 0, right: 'auto' }}>
                  <div className="py-1">
                    {LANGUAGES.map((item) => (
                      <button
                        key={item.lang}
                        type="button"
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-[12px] font-bold w-full text-left"
                        onClick={() => {
                          changeLang(item.lang);
                          setMenuOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <img src={FLAG_URLS[item.lang]} alt={item.lang} className="w-5 h-auto" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/+6285190962301"
                className="px-8 py-3 bg-brand-light hover:bg-white hover:text-brand-light text-white text-[13px] font-bold rounded-full flex items-center justify-center space-x-3 shadow-xl transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fa-brands fa-whatsapp text-xl" />
                <span>{t('contact_us')}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>

      {/* 3. STICKY PILL HEADER */}
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-[1200px] transition-all duration-500 ease-in-out ${
          isScrolled && !isHomePage ? 'top-4 md:top-6 opacity-100 pointer-events-auto translate-y-0' : '-top-20 opacity-0 pointer-events-none -translate-y-full'
        } ${pillMobileMenuOpen ? 'rounded-3xl' : 'rounded-[2rem] lg:rounded-full'} text-white shadow-2xl backdrop-blur-md border border-white/10 ${
          isHovered || pillMobileMenuOpen ? 'bg-brand' : 'bg-brand/80'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="px-6 md:px-8 py-3">
          
          {/* Mobile Pill View */}
          <div className="flex lg:hidden justify-between items-center w-full">
            <div className="relative h-10 w-24 flex items-center shrink-0 z-50">
              <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0">
                <img
                  src="/assets/tunamsam-assets/tunamsam.webp"
                  alt="TunamSam Logo"
                  className="h-[120px] mt-2 w-auto object-contain"
                />
              </Link>
            </div>
            <button
              className="text-white p-2 z-50"
              onClick={() => setPillMobileMenuOpen(!pillMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {pillMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>

          {/* Desktop Pill View */}
          <div className="hidden lg:flex items-center justify-between w-full">
            <div className="relative h-10 xl:h-12 w-32 xl:w-40 flex items-center shrink-0 z-50">
              <Link to="/" className="absolute top-1/2 -translate-y-1/2 left-0">
                <img
                  src="/assets/tunamsam-assets/tunamsam.webp"
                  alt="TunamSam Logo"
                  className="h-[125px] xl:h-[110px] mt-3 w-auto object-contain"
                />
              </Link>
            </div>
            
            <nav className="relative z-[60] flex justify-center items-center gap-4 xl:gap-8 text-[12px] xl:text-[13px] font-bold uppercase tracking-wider mx-auto">
              {renderNavLinks()}
            </nav>

            <div className="flex items-center space-x-4 xl:space-x-6 shrink-0">
              <div className="relative group" ref={pillMenuRef}>
                <button
                  type="button"
                  className="flex items-center space-x-2 text-[13px] font-bold uppercase cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={(e) => {
                    e.stopPropagation();
                    setPillMenuOpen((open) => !open);
                  }}
                >
                  <img src={flagUrl} alt={lang} className="w-5 h-auto" />
                  <span>{lang}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className={`lang-dropdown${pillMenuOpen ? ' show' : ''}`}>
                  <div className="py-1">
                    {LANGUAGES.map((item) => (
                      <button
                        key={item.lang}
                        type="button"
                        className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-[12px] font-bold w-full text-left"
                        onClick={() => changeLang(item.lang)}
                      >
                        <img src={FLAG_URLS[item.lang]} alt={item.lang} className="w-5 h-auto" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/+6285190962301"
                className="px-5 py-2 bg-white text-brand hover:bg-brand-light hover:text-white text-[13px] font-bold rounded-full flex items-center space-x-2 shadow-xl transition-all"
              >
                <i className="fa-brands fa-whatsapp text-lg" />
                <span>{t('contact_us')}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Pill Mobile Menu Dropdown */}
        <AnimatePresence>
          {pillMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-brand p-6 mt-2 rounded-3xl border border-white/20 flex flex-col space-y-6 z-[60] shadow-2xl"
            >
              <nav className="flex flex-col space-y-4 text-[13px] font-bold uppercase tracking-wider">
                {renderNavLinks(() => setPillMobileMenuOpen(false))}
              </nav>

              <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                <a href="https://www.instagram.com/tunamsam/" aria-label="Instagram" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                  <i className="fa-brands fa-instagram text-xl" />
                </a>
                <a href="https://www.tiktok.com/@tunamsam" aria-label="TikTok" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                  <i className="fa-brands fa-tiktok text-lg" />
                </a>
                <a href="https://www.linkedin.com/company/tunamsam" aria-label="LinkedIn" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                  <i className="fa-brands fa-linkedin-in text-xl" />
                </a>
              </div>

              <div className="flex flex-col space-y-6 pt-4 border-t border-white/20">
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center space-x-2 text-[13px] font-bold uppercase cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={(e) => {
                      e.stopPropagation();
                      setPillMenuOpen((open) => !open);
                    }}
                  >
                    <img src={flagUrl} alt={lang} className="w-5 h-auto" />
                    <span>{lang}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className={`lang-dropdown${pillMenuOpen ? ' show' : ''}`} style={{ left: 0, right: 'auto' }}>
                    <div className="py-1">
                      {LANGUAGES.map((item) => (
                        <button
                          key={item.lang}
                          type="button"
                          className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800 text-[12px] font-bold w-full text-left"
                          onClick={() => {
                            changeLang(item.lang);
                            setPillMenuOpen(false);
                            setPillMobileMenuOpen(false);
                          }}
                        >
                          <img src={FLAG_URLS[item.lang]} alt={item.lang} className="w-5 h-auto" />
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/+6285190962301"
                  className="px-8 py-3 bg-brand-light hover:bg-white hover:text-brand-light text-white text-[13px] font-bold rounded-full flex items-center justify-center space-x-3 shadow-xl transition-all"
                  onClick={() => setPillMobileMenuOpen(false)}
                >
                  <i className="fa-brands fa-whatsapp text-xl" />
                  <span>{t('contact_us')}</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
