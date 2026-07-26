import { Icon } from './Icon';
import { CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '../context/I18nContext';
import type { TranslationKey } from '../i18n/translations';

const PACKAGES = [
    {
        id: 'landing-page',
        titleKey: 'price_landing_page',
        title: 'Landing Page',
        real_price: '2,750,000',
        price: '1,999,000',
        period: '/ 3 tahun',
        badge: 'Best Choice',
        subtitleKey: 'pricing_lp_subtitle',
        btnKey: 'price_btn_lp',
        otherOptions: [
            { periodKey: 'pricing_lp_opt_3th', price: 'Rp. 1,999,000', suffixKey: 'pricing_lp_opt_3th_suffix' },
            { periodKey: 'pricing_lp_opt_2th', price: 'Rp. 1,300,000', suffixKey: 'pricing_lp_opt_2th_suffix' },
            { periodKey: 'pricing_lp_opt_1th', price: 'Rp. 750,000', suffixKey: '' },
        ],
        images: [
            '/assets/products-assets/landing-page/1.webp',
            '/assets/products-assets/landing-page/2.webp',
            '/assets/products-assets/landing-page/3.webp',
        ],
        btnText: 'Buat Landing Page sekarang!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'maximize', titleKey: 'lp_f1_t', descKey: 'pricing_lp_reason_1_desc' },
            { icon: 'target', titleKey: 'lp_f2_t', descKey: 'pricing_lp_reason_2_desc' },
            { icon: 'book-open', titleKey: 'lp_f3_t', descKey: 'pricing_lp_reason_3_desc' },
        ],
        gets: [
            'pricing_lp_get_1',
            'pricing_lp_get_2',
            'pricing_lp_get_3',
            'pricing_lp_get_4',
            'pricing_lp_get_5',
            'pricing_lp_get_6',
        ],
        targets: [
            'pricing_lp_target_1',
            'pricing_lp_target_2',
            'pricing_lp_target_3',
            'pricing_lp_target_4',
            'pricing_lp_target_5',
            'pricing_lp_target_6',
        ]
    },
    {
        id: 'company-profile',
        titleKey: 'price_company_profile',
        title: 'Company Profile',
        real_price: '3,500,000',
        price: '2,999,000',
        period: '/ 2 tahun',
        badge: 'Popular',
        subtitleKey: 'pricing_cp_subtitle',
        btnKey: 'price_btn_cp',
        otherOptions: [
            { periodKey: 'pricing_cp_opt_2th', price: 'Rp. 2,999,000', suffixKey: 'pricing_cp_opt_2th_suffix' },
            { periodKey: 'pricing_cp_opt_1th', price: 'Rp. 1,750,000', suffixKey: '' },
        ],
        images: [
            '/assets/products-assets/company-profile/1.webp',
            '/assets/products-assets/company-profile/2.webp',
            '/assets/products-assets/company-profile/3.webp',
        ],
        btnText: 'Buat Company Profile sekarang!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'gem', titleKey: 'cp_f1_t', descKey: 'pricing_cp_reason_1_desc' },
            { icon: 'network', titleKey: 'cp_f2_t', descKey: 'pricing_cp_reason_2_desc' },
            { icon: 'globe', titleKey: 'cp_f3_t', descKey: 'pricing_cp_reason_3_desc' },
        ],
        gets: [
            'pricing_cp_get_1',
            'pricing_cp_get_2',
            'pricing_cp_get_3',
            'pricing_cp_get_4',
            'pricing_cp_get_5',
            'pricing_cp_get_6',
        ],
        targets: [
            'pricing_cp_target_1',
            'pricing_cp_target_2',
            'pricing_cp_target_3',
            'pricing_cp_target_4',
            'pricing_cp_target_5',
            'pricing_cp_target_6',
        ]
    },
    {
        id: 'toko-online',
        titleKey: 'price_online_store',
        title: 'Toko Online',
        real_price: '6,500,000',
        price: '4,999,000',
        period: '/ 2 tahun',
        badge: 'Business',
        subtitleKey: 'pricing_to_subtitle',
        btnKey: 'price_btn_to',
        otherOptions: [
            { periodKey: 'pricing_to_opt_2th', price: 'Rp. 4,999,000', suffixKey: 'pricing_to_opt_2th_suffix' },
            { periodKey: 'pricing_to_opt_1th', price: 'Rp. 3,250,000', suffixKey: '' },
        ],
        images: [
            '/assets/products-assets/toko-online/1.webp',
            '/assets/products-assets/toko-online/2.webp',
            '/assets/products-assets/toko-online/3.webp',
        ],
        btnText: 'Buat Toko Online sekarang!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'shopping-bag', titleKey: 'to_f1_t', descKey: 'pricing_to_reason_1_desc' },
            { icon: 'building', titleKey: 'to_f2_t', descKey: 'pricing_to_reason_2_desc' },
            { icon: 'credit-card', titleKey: 'to_f3_t', descKey: 'pricing_to_reason_3_desc' },
        ],
        gets: [
            'pricing_to_get_1',
            'pricing_to_get_2',
            'pricing_to_get_3',
            'pricing_to_get_4',
            'pricing_to_get_5',
            'pricing_to_get_6',
        ],
        targets: [
            'pricing_to_target_1',
            'pricing_to_target_2',
            'pricing_to_target_3',
            'pricing_to_target_4',
            'pricing_to_target_5',
            'pricing_to_target_6',
        ]
    },
    {
        id: 'custom-website',
        titleKey: 'price_custom_website',
        title: 'Custom Website',
        price: 'Hubungi Kami',
        period: '',
        badge: 'Enterprise',
        subtitleKey: 'pricing_cw_subtitle',
        btnKey: 'price_btn_custom',
        images: [
            '/assets/products-assets/custom-website/1.webp',
            '/assets/products-assets/custom-website/2.webp',
            '/assets/products-assets/custom-website/3.webp',
        ],
        btnText: 'Konsultasi Custom Website!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'palette', titleKey: 'cw_f1_t', descKey: 'pricing_cw_reason_1_desc' },
            { icon: 'crosshair', titleKey: 'cw_f2_t', descKey: 'pricing_cw_reason_2_desc' },
            { icon: 'shopping-basket', titleKey: 'cw_f3_t', descKey: 'pricing_cw_reason_3_desc' },
        ],
        gets: [
            'pricing_cw_get_1',
            'pricing_cw_get_2',
            'pricing_cw_get_3',
            'pricing_cw_get_4',
            'pricing_cw_get_5',
            'pricing_cw_get_6',
        ],
        targets: [
            'pricing_cw_target_1',
            'pricing_cw_target_2',
            'pricing_cw_target_3',
            'pricing_cw_target_4',
            'pricing_cw_target_5',
            'pricing_cw_target_6',
        ]
    }
];

export function PricingPage() {
    const { t } = useI18n();
    const [activeSection, setActiveSection] = useState('landing-page');
    const [expandedOptions, setExpandedOptions] = useState<Record<string, boolean>>({});

    const toggleOptions = (id: string) => {
        setExpandedOptions(prev => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (let i = PACKAGES.length - 1; i >= 0; i--) {
                const section = document.getElementById(PACKAGES[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(PACKAGES[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Hero Section */}
            <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 text-center relative z-10 reveal-on-scroll">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-gray-900 leading-tight">
                        {t('pricing_hero_title')}
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 font-light leading-relaxed mb-12 md:mb-16">
                        {t('pricing_hero_desc')}
                    </p>
                </div>

                {/* Hero Image Collage Placeholder */}
                <div className="max-w-6xl mx-auto px-6 relative z-10 reveal-on-scroll stagger-1">
                    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] bg-gray-50 md:rounded-[3rem] flex flex-col items-center justify-center text-gray-400">
                        <img src="/assets/pricing-assets/pricing-hero.webp" alt="Pricing Hero" className="w-full h-full object-cover" />
                    </div>
                </div>

            </div>

            <div className="max-w-8xl mx-auto px-6">
                {/* Pricing Title */}
                <div className="text-center max-w-4xl mx-auto pb-8 md:pt-0 md:pb-12 reveal-on-scroll">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 text-gray-900">
                        {t('pricing_section_title')}
                    </h2>
                    <p className="text-sm md:text-lg max-w-2xl mx-auto text-gray-600">
                        {t('pricing_section_desc')}
                    </p>
                </div>

                {/* Anchor Navigation */}
                <div className="pt-2 pb-4 border-b border-gray-100 flex md:justify-center mb-10 md:mb-16 overflow-x-auto bg-white snap-x">
                    <div className="flex gap-4 md:gap-8 min-w-max px-2 md:px-0">
                        {PACKAGES.map((pkg) => (
                            <button
                                key={pkg.id}
                                onClick={() => scrollToSection(pkg.id)}
                                className={`px-2 py-2 text-sm md:text-md font-medium hover:text-brand transition-colors relative group ${activeSection === pkg.id ? 'text-brand' : 'text-gray-500'}`}
                            >
                                {t(pkg.titleKey as TranslationKey)}
                                <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand transition-transform origin-left ${activeSection === pkg.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Packages List */}
                <div className="space-y-24 md:space-y-32">
                    {PACKAGES.map((pkg) => (
                        <div key={pkg.id} id={pkg.id} className="scroll-mt-32">
                            {/* Top Row: Info & Previews */}
                            <div className="flex flex-col md:flex-row gap-8 md:gap-12 mb-16 md:mb-20 items-start">
                                {/* Left Column: Pricing Info */}
                                <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col items-start gap-4">
                                    <h3 className="text-4xl md:text-5xl font-heading font-normal text-gray-900">{t(pkg.titleKey as TranslationKey)}</h3>

                                    <div className="flex flex-col gap-1">
                                        {pkg.price !== 'Hubungi Kami' && (
                                            <span className="text-base md:text-lg">{t('price_start_from')} <span className="text-sm md:text-lg line-through text-gray-400">Rp. {pkg.real_price}</span></span>
                                        )}
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {pkg.price !== 'Hubungi Kami' && <span className="text-sm md:text-base">Rp</span>}
                                            <span className="text-3xl md:text-4xl tracking-tight">{pkg.price}</span>
                                            <span className="text-sm md:text-md">{pkg.period}</span>

                                            {pkg.badge && (
                                                <span className="ml-2 bg-[#00a859] text-white text-sm font-bold px-3 py-1 rounded-md tracking-wide">
                                                    {pkg.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-sm mt-1">{t(pkg.subtitleKey as TranslationKey)}</p>

                                    <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                                    <button
                                        onClick={() => toggleOptions(pkg.id)}
                                        className="text-gray-900 text-sm flex items-center gap-1 font-medium hover:text-brand transition-colors"
                                    >
                                        {expandedOptions[pkg.id] ? t('pricing_hide_options') : t('pricing_show_options')}
                                        <Icon name={expandedOptions[pkg.id] ? 'chevron-up' : 'chevron-down'} className="w-4 h-4 text-gray-500" />
                                    </button>

                                    <AnimatePresence>
                                        {expandedOptions[pkg.id] && (pkg as any).otherOptions && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="flex flex-col gap-3 text-sm md:text-base text-gray-800 overflow-hidden"
                                            >
                                                {(pkg as any).otherOptions.map((opt: any, i: number) => (
                                                    <div key={i} className="flex items-center gap-1">
                                                        <span className="w-16">{t(opt.periodKey as TranslationKey)}</span>
                                                        <span className="font-bold">{opt.price}</span>
                                                        <span>{opt.suffixKey ? t(opt.suffixKey as TranslationKey) : ''}</span>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <a
                                        href={pkg.btnLink}
                                        className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-md font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        {t(pkg.btnKey as TranslationKey)}
                                        <Icon name="rocket" className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Right Column: Image Previews */}
                                <div className="w-full md:w-1/2 lg:w-2/3 flex items-center overflow-hidden rounded-2xl bg-white border border-gray-100 p-2 shadow-sm relative marquee-container">
                                    <div className="flex marquee-content animate-marquee-slow">
                                        <div className="flex gap-3 md:gap-4 items-center flex-shrink-0 pr-3 md:pr-4">
                                            {pkg.images.map((img, idx) => (
                                                <div key={idx} className="w-[240px] md:w-[320px] lg:w-[400px] rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
                                                    <img src={img} alt={`${t(pkg.titleKey as TranslationKey)} preview ${idx + 1}`} className="w-full h-auto object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 md:gap-4 items-center flex-shrink-0 pr-3 md:pr-4" aria-hidden="true">
                                            {pkg.images.map((img, idx) => (
                                                <div key={`dup-${idx}`} className="w-[240px] md:w-[320px] lg:w-[400px] rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
                                                    <img src={img} alt="" className="w-full h-auto object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Reasons Section */}
                            <div className="mb-16 md:mb-20">
                                <h3 className="text-2xl md:text-3xl font-heading text-center mb-8 md:mb-10 text-gray-900 px-4">
                                    {t('pricing_alasan_title').replace('{pkg}', t(pkg.titleKey as TranslationKey))}
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                                    {pkg.reasons.map((reason, idx) => (
                                        <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="mb-4">
                                                <Icon name={reason.icon as any} className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                                            </div>
                                            <h4 className="text-xl font-medium text-gray-900 mb-2">{t(reason.titleKey as TranslationKey)}</h4>
                                            <p className="text-md leading-relaxed">{t(reason.descKey as TranslationKey)}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features & Target Section */}
                            <div className="mb-16 md:mb-20">
                                <h3 className="text-2xl md:text-3xl font-heading text-center mb-8 md:mb-10 px-4">
                                    {t('pricing_dapat_title')}
                                </h3>
                                <div className="bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

                                    {/* Yang Anda dapatkan */}
                                    <div>
                                        <h4 className="text-md md:text-lg font-medium mb-4 md:mb-6 border-b border-gray-200 pb-3 md:pb-4">{t('pricing_dapat_label')}</h4>
                                        <ul className="space-y-4">
                                            {pkg.gets.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm">
                                                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">{t(item as TranslationKey)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Cocok untuk industri */}
                                    <div>
                                        <h4 className="text-md md:text-lg font-medium mb-4 md:mb-6 border-b border-gray-200 pb-3 md:pb-4">{t('pricing_target_label')}</h4>
                                        <ul className="space-y-4">
                                            {pkg.targets.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm">
                                                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">{t(item as TranslationKey)}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {/* Bottom CTA Banner */}
                            <div className="bg-[#0b1c11] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mt-8 md:mt-12 bg-gradient-to-r from-[#0b1c11] to-[#0d2616] overflow-hidden relative text-center md:text-left">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full"></div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-xl md:text-3xl font-heading font-medium mb-2 md:mb-3">
                                        {t('pricing_cta_title')}
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-md">
                                        {t('pricing_cta_desc').replace('{pkg}', t(pkg.titleKey as TranslationKey))}
                                    </p>
                                </div>
                                <a
                                    href={pkg.btnLink}
                                    className="relative z-10 w-full md:w-auto shrink-0 bg-white text-black px-6 py-3 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    {t(pkg.btnKey as TranslationKey)}
                                    <Icon name="arrow-up-right" className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
