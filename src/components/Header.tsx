import { ChevronDown, Mail, MapPin, Phone, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../context/I18nContext';
import { FLAG_URLS, type Lang } from '../i18n/translations';

const NAV_LINKS = [
  { href: '#', key: 'home' as const },
  { href: '#pilihan-desain', key: 'nav_design' as const },
  { href: '#pricing', key: 'nav_pricing' as const },
  { href: '#about', key: 'nav_about' as const },
  { href: '#testimonials', key: 'nav_testimonials' as const },
  { href: '#contact', key: 'contact' as const },
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
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = () => setMenuOpen(false);
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <header className="bg-brand text-white relative z-50">
      <div className="max-w-8xl mx-auto px-6 md:px-12 py-6">
        <div className="flex justify-between items-center lg:mb-4">
          <div className="relative h-16 w-48 lg:w-80 flex items-center">
            <img
              src="/assets/logo/tunamsam.webp"
              alt="TunamSam Logo"
              className="absolute -top-6 lg:-top-12 left-0 h-32 lg:h-48 w-auto object-contain z-50"
            />
          </div>

          <div className="hidden lg:flex items-center lg:space-x-6 xl:space-x-10 text-[14px] font-medium whitespace-nowrap">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-white opacity-80" />
              <span>Kediri, Indonesia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-white opacity-80" />
              <span>tunamsam@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-white opacity-80" />
              <span>+62 856-5563-9206</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-2">
            <a
              href="https://www.instagram.com/tunamsam/"
              className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md"
            >
              <i className="fa-brands fa-instagram text-xl" />
            </a>
            <a
              href="https://www.tiktok.com/@tunamsam"
              className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md"
            >
              <i className="fa-brands fa-tiktok text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/tunamsam"
              className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md"
            >
              <i className="fa-brands fa-linkedin-in text-xl" />
            </a>
          </div>

          <button
            className="lg:hidden text-white p-2 z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        <div className="hidden lg:flex flex-col md:flex-row justify-between items-center pt-6">
          <nav className="relative z-[60] flex flex-wrap justify-center md:justify-start items-center gap-6 lg:gap-10 text-[13px] font-bold uppercase tracking-wider mb-6 md:mb-0">
            {NAV_LINKS.map((link) => (
              <a key={link.key} href={link.href} className="hover:opacity-70 transition-opacity cursor-pointer" style={{ cursor: 'pointer' }}>
                {t(link.key)}
              </a>
            ))}
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
              href="https://wa.me/+6285655639206"
              className="px-8 py-2 bg-brand-light hover:bg-white hover:text-brand-light text-white text-[13px] font-bold rounded-full flex items-center space-x-3 shadow-xl transition-all"
            >
              <i className="fa-brands fa-whatsapp text-xl" />
              <span>{t('contact_us')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
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
              {NAV_LINKS.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  className="hover:opacity-70 transition-opacity cursor-pointer"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(link.key)}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
              <a href="https://www.instagram.com/tunamsam/" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                <i className="fa-brands fa-instagram text-xl" />
              </a>
              <a href="https://www.tiktok.com/@tunamsam" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
                <i className="fa-brands fa-tiktok text-lg" />
              </a>
              <a href="https://www.linkedin.com/company/tunamsam" className="w-10 h-10 bg-white text-brand rounded-full flex items-center justify-center hover:bg-brand-light hover:text-white transition-all shadow-md">
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
                href="https://wa.me/+6285655639206"
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
  );
}
