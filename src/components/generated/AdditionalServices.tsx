import { Icon } from '../Icon';
import { useI18n } from '../../context/I18nContext';

export function AdditionalServices() {
  const { t } = useI18n();

  return (
    <>
      <section id="layanan-tambahan" className="py-32 bg-white relative z-10">
              <div className="max-w-8xl mx-auto px-6">
                  
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 reveal-on-scroll">
                      <h2 className="text-3xl lg:text-5xl font-heading text-gray-900 lg:w-1/2 leading-tight">
                          {t('addserv_title')}
                      </h2>
                      <p className="text-gray-800 text-md lg:text-base leading-relaxed lg:w-1/2 self-center">
                          {t('addserv_desc')}
                      </p>
                  </div>
      
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 reveal-on-scroll">
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="settings-2" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading">{t('addserv_1_title')}</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              {t('addserv_1_desc')}
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  {t('addserv_btn')}
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="search" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">{t('addserv_2_title')}</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              {t('addserv_2_desc')}
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  {t('addserv_btn')}
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="sliders-horizontal" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">{t('addserv_3_title')}</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              {t('addserv_3_desc')}
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  {t('addserv_btn')}
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="share-2" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">{t('addserv_4_title')}</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              {t('addserv_4_desc')}
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  {t('addserv_btn')}
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="layout-dashboard" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">{t('addserv_5_title')}</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              {t('addserv_5_desc')}
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  {t('addserv_btn')}
                              </a>
                          </div>
                      </div>
      
                  </div>

              </div>
          </section>
    </>
  );
}
