import { Icon } from '../Icon';
import { useI18n } from '../../context/I18nContext';

export function WhyUs() {
  const { t } = useI18n();
  return (
    <>
      <section id="why-us" className="py-32 bg-white overflow-hidden relative z-10">
              <div className="max-w-8xl mx-auto px-6">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-16 reveal-on-scroll">
                      <h2 className="text-4xl lg:text-5xl font-heading text-gray-900 md:w-1/2 leading-tight">
                          {t('why_title')}
                      </h2>
                      <p className="text-gray-600 text-lg font-sans md:w-1/2">
                          {t('why_desc')}
                      </p>
                  </div>
      
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative reveal-on-scroll">
      
                      
                      <div
                          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="award" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_1_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_1_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-4 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="hand-heart" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_2_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_2_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="user-check" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_3_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_3_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="atom" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_4_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_4_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="fingerprint" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_5_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_5_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="users" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_6_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_6_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="life-buoy" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_7_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_7_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="coins" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_8_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_8_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="bot" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_9_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_9_desc')}</p>
                      </div>
      
                      
                      <div
                          className="lg:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                          <Icon name="headset" className="w-8 h-8 text-gray-900 mb-6" />
                          <h3 className="text-2xl font-heading text-gray-900 mb-3">{t('why_10_title')}</h3>
                          <p className="text-md leading-relaxed font-sans">{t('why_10_desc')}</p>
                      </div>
      
                  </div>
              </div>
          </section>
    </>
  );
}