import { Link } from 'react-router-dom';
import { useI18n } from '../context/I18nContext';
import { Icon } from './Icon';

export function NotFoundPage() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-xs md:max-w-md mx-auto mb-8">
        <img src="/assets/not-found-assets/not-found.webp" alt="404 Not Found" className="w-full h-auto object-contain" />
      </div>
      <h2 className="text-3xl font-heading text-gray-800 mb-4">{t('not_found_title')}</h2>
      <p className="text-lg text-gray-500 max-w-md mx-auto mb-10">
        {t('not_found_desc')}
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 bg-brand text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-colors"
      >
        <Icon name="arrow-left" className="w-5 h-5" />
        {t('not_found_btn')}
      </Link>
    </div>
  );
}
