import { useI18n } from '../context/I18nContext';
import { Icon } from './Icon';

export function AboutPage() {
  const { t } = useI18n();

    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Hero Section */}
            <div className="relative pt-32 md:pt-28 pb-24 md:pb-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/assets/about-me-assets/about-me.webp" 
                        alt="Background TunamSam" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                
                <div className="max-w-8xl mx-auto px-6 relative z-10">
                    <div className="max-w-6xl">
                        <p className="text-brand-light font-bold text-sm md:text-base uppercase tracking-widest mb-4 reveal-on-scroll">
                            {t('about_badge')}
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 reveal-on-scroll stagger-1 leading-tight text-white/95">
                            {t('about_title')}
                        </h1>
                    </div>
                </div>
            </div>

            {/* Visi dan Misi & Komitmen Kami */}
            <div className="max-w-8xl mx-auto px-6 py-20 md:py-32">
                {/* Visi dan Misi */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
                    <div className="reveal-on-scroll">
                        <h2 className="text-3xl md:text-5xl font-heading mb-6 leading-tight text-gray-900">
                            {t('about_visimisi_title')}
                        </h2>
                        <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-snug">
                            {t('about_visimisi_sub')}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t('about_visimisi_desc')}
                        </p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-lg reveal-on-scroll stagger-1 h-[350px] md:h-[450px]">
                        <img 
                            src="/assets/about-me-assets/about-me2.webp" 
                            alt="Tim berdiskusi" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Komitmen Kami */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-lg reveal-on-scroll h-[350px] md:h-[450px]">
                        <img 
                            src="/assets/about-me-assets/about-me1.webp" 
                            alt="Jabat tangan" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 reveal-on-scroll stagger-1">
                        <h2 className="text-3xl md:text-5xl font-heading mb-6 leading-tight text-gray-900">
                            {t('about_komitmen_title')}
                        </h2>
                        <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-snug">
                            {t('about_komitmen_sub')}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t('about_komitmen_desc')}
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-8xl mx-auto px-6 py-20 md:py-32">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-heading text-gray-900">{t('about_corevalues_title')}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
                    {/* Card 1: Inovasi (span 2) */}
                    <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="lightbulb" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">{t('about_value_1_title')}</h4>
                        <p className="leading-relaxed text-sm md:text-base">{t('about_value_1_desc')}</p>
                    </div>

                    {/* Card 2: Berorientasi Hasil (span 2) */}
                    <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll stagger-1 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="target" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">{t('about_value_2_title')}</h4>
                        <p className="leading-relaxed text-sm md:text-base">{t('about_value_2_desc')}</p>
                    </div>

                    {/* Card 3: Kemitraan (span 2) */}
                    <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll stagger-2 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="share-2" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">{t('about_value_3_title')}</h4>
                        <p className="leading-relaxed text-sm md:text-base">{t('about_value_3_desc')}</p>
                    </div>

                    {/* Card 4: Keamanan & Kualitas (span 3) */}
                    <div className="col-span-1 md:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="fingerprint" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">{t('about_value_4_title')}</h4>
                        <p className="leading-relaxed text-sm md:text-base">{t('about_value_4_desc')}</p>
                    </div>

                    {/* Card 5: Edukasi & Transparansi (span 3) */}
                    <div className="col-span-1 md:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll stagger-1 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="handshake" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">{t('about_value_5_title')}</h4>
                        <p className="leading-relaxed text-sm md:text-base">{t('about_value_5_desc')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
