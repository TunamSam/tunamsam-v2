import { useI18n } from '../../context/I18nContext';

export function TrustedBy() {
  const { t } = useI18n();
  return (
    <>
      <section className="pt-32 pb-32 bg-white">
              <div className="max-w-6xl mx-auto px-6 text-center">
                  <p className="text-gray-500 font-sans mb-10">{t('trusted_by')}</p>
      
                  <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-20">
                      <img src="/assets/client-logo-assets/nasi-goreng-mbak-win.webp" alt="Nasi Goreng Mbak Win" style={{ width: '110px', height: 'auto' }}
                          className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
                  </div>
              </div>
          </section>
    </>
  );
}
