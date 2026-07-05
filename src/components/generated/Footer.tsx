import { Mail, MapPin, Phone } from 'lucide-react';
import { useI18n } from '../../context/I18nContext';

export function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="pt-24 pb-12 bg-gray-900 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="relative h-12 flex items-center mb-4">
              <img src="/assets/logo/tunamsam.webp" alt="TunamSam Logo" className="absolute -top-12 -left-4 h-36 w-auto object-contain max-w-none" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-sans">{t('footer_about')}</p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/tunamsam/"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-light transition-all"
              >
                <i className="fa-brands fa-instagram text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/company/tunamsam"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-light transition-all"
              >
                <i className="fa-brands fa-linkedin-in text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6 uppercase tracking-wider">{t('services')}</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li className="hover:text-brand-light cursor-pointer transition-colors">Website Development</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">Landing Page</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">Company Profile</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">E-Commerce Website</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">Custom Web App</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">Website Maintenance</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">Website Redesign</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6 uppercase tracking-wider">{t('profile')}</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li className="hover:text-brand-light cursor-pointer transition-colors">Tentang Kami</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">{t('portfolio')}</li>
              <li className="hover:text-brand-light cursor-pointer transition-colors">Karir</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-bold mb-6 uppercase tracking-wider">{t('contact')}</h4>
            <ul className="space-y-4 text-sm text-gray-400 font-sans">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-light" />
                <span>tunamsam@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-light" />
                <span>Kediri, Indonesia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-light" />
                <span>+62 856-5563-9206</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-xs text-gray-500 text-center font-sans">
          <p>{t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  );
}
