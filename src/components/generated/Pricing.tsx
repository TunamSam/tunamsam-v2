import { Icon } from '../Icon';
import { useI18n } from '../../context/I18nContext';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Pricing() {
    const { t } = useI18n();
    const [expandedOptions, setExpandedOptions] = useState<Record<string, boolean>>({});

    const toggleOptions = (id: string) => {
        setExpandedOptions(prev => ({ ...prev, [id]: !prev[id] }));
    };
    return (
        <>
            <section id="pricing" className="py-32 bg-[#fafafa]">
                <div className="max-w-8xl mx-auto px-6">

                    <div className="text-center max-w-4xl mx-auto mb-20 reveal-on-scroll">
                        <h2 className="text-4xl md:text-6xl font-heading text-gray-900 mb-8 leading-tight">{t('pkg_title')}</h2>
                        <p className="text-lg leading-relaxed font-sans">{t('pkg_subtitle')}</p>
                    </div>


                    <div className="reveal-on-scroll">

                        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-12">

                            <div className="md:w-1/3 space-y-8">
                                <div>
                                    <h3 className="text-5xl font-heading text-gray-900 mb-6">{t('price_landing_page')}</h3>
                                    <div className="space-y-1">
                                        <p className="text-lg">{t('price_start_from')} <span className="line-through text-gray-400">Rp.
                                            2,750,000</span></p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-gray-900 text-lg">Rp</span>
                                            <span className="text-4xl text-gray-900">1,999,000</span>
                                            <span className="text-gray-500 text-lg">/ 3 tahun</span>
                                        </div>
                                        <p className="text-gray-400 text-sm italic mb-4">{t('pricing_pay_early_lp')}</p>
                                        
                                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                                        <button
                                            onClick={() => toggleOptions('landing-page')}
                                            className="text-gray-900 text-sm flex items-center gap-1 font-medium hover:text-brand transition-colors"
                                        >
                                            {expandedOptions['landing-page'] ? t('pricing_hide_options') : t('pricing_show_options')}
                                            <Icon name={expandedOptions['landing-page'] ? 'chevron-up' : 'chevron-down'} className="w-4 h-4 text-gray-500" />
                                        </button>

                                        <AnimatePresence>
                                            {expandedOptions['landing-page'] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="flex flex-col gap-3 text-sm md:text-base text-gray-800 overflow-hidden"
                                                >
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-16">{t('pricing_lp_opt_3th')}</span>
                                                        <span className="font-bold">Rp. 1,999,000</span>
                                                        <span>{t('pricing_lp_opt_3th_suffix')}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-16">{t('pricing_lp_opt_2th')}</span>
                                                        <span className="font-bold">Rp. 1,300,000</span>
                                                        <span>{t('pricing_lp_opt_2th_suffix')}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-16">{t('pricing_lp_opt_1th')}</span>
                                                        <span className="font-bold">Rp. 750,000</span>
                                                        <span></span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <a href="https://wa.me/+6285655639206"
                                    className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                    {t('price_btn_lp')}
                                </a>
                            </div>

                            <div className="md:w-2/3">
                                <div className="flex flex-col items-start gap-8">
                                    <div
                                        className="bg-brand rounded-xl p-4 text-white flex items-center gap-6 shadow-lg shadow-brand/20">
                                        <span
                                            className="text-xs font-bold leading-tight font-heading uppercase text-white/90">{t('price_best_choice')}</span>
                                        <div className="w-px h-10 bg-white/20"></div>
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-5xl font-black font-heading">27%</span>
                                            <span className="text-xl font-bold font-heading text-white/80 uppercase">Off</span>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed font-sans">{t('pkg_desc')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
                            <div
                                className="md:col-span-4 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                                <div className="flex marquee-content animate-marquee-slow whitespace-nowrap">
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/1.webp" alt={t('pricing_lp_alt_1')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/2.webp" alt={t('pricing_lp_alt_2')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/3.webp" alt={t('pricing_lp_alt_3')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/4.webp" alt={t('pricing_lp_alt_4')} className="w-full h-auto" />
                                        </div>
                                    </div>
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8" aria-hidden="true">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/1.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/2.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/3.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/landing-page/4.webp" alt="" className="w-full h-auto" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                                </div>
                                <div
                                    className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="maximize" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('lp_f1_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('lp_f1_d')}</p>
                            </div>
                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="target" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('lp_f2_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('lp_f2_d')}</p>
                            </div>

                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="book-open" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('lp_f3_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('lp_f3_d')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gray-200 my-24"></div>

                    <div className="reveal-on-scroll">
                        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-12">
                            <div className="md:w-1/3 space-y-8">
                                <div>
                                    <h3 className="text-5xl font-heading text-gray-900 mb-6">{t('price_company_profile')}</h3>
                                    <div className="space-y-1">
                                        <p className="text-lg">{t('price_start_from')} <span className="line-through text-gray-400">Rp.
                                            3,500,000</span></p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-gray-900 text-lg">Rp</span>
                                            <span className="text-4xl text-gray-900">2,999,000</span>
                                            <span className="text-gray-500 text-lg">/ 2 tahun</span>
                                        </div>
                                        <p className="text-gray-400 text-sm italic mb-4">{t('pricing_pay_early_cp')}</p>
                                        
                                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                                        <button
                                            onClick={() => toggleOptions('company-profile')}
                                            className="text-gray-900 text-sm flex items-center gap-1 font-medium hover:text-brand transition-colors"
                                        >
                                            {expandedOptions['company-profile'] ? t('pricing_hide_options') : t('pricing_show_options')}
                                            <Icon name={expandedOptions['company-profile'] ? 'chevron-up' : 'chevron-down'} className="w-4 h-4 text-gray-500" />
                                        </button>

                                        <AnimatePresence>
                                            {expandedOptions['company-profile'] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="flex flex-col gap-3 text-sm md:text-base text-gray-800 overflow-hidden"
                                                >
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-16">{t('pricing_cp_opt_2th')}</span>
                                                        <span className="font-bold">Rp. 2,999,000</span>
                                                        <span>{t('pricing_cp_opt_2th_suffix')}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-16">{t('pricing_cp_opt_1th')}</span>
                                                        <span className="font-bold">Rp. 1,750,000</span>
                                                        <span></span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <a href="https://wa.me/+6285655639206"
                                    className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                    {t('price_btn_cp')}
                                </a>
                            </div>

                            <div className="md:w-2/3">
                                <div className="flex flex-col items-start gap-8">
                                    <div className="flex flex-wrap gap-4">
                                        <div
                                            className="bg-brand rounded-xl p-4 text-white flex items-center gap-4 shadow-lg shadow-brand/20">
                                            <Icon name="languages" className="w-8 h-8 text-white/90" />
                                            <span
                                                className="text-sm font-bold leading-tight font-heading uppercase text-white/90">{t('price_free_trans')}</span>
                                        </div>
                                        <div
                                            className="bg-brand rounded-xl p-4 text-white flex items-center gap-6 shadow-lg shadow-brand/20">
                                            <span
                                                className="text-xs font-bold leading-tight font-heading uppercase text-white/90">{t('price_best_choice')}</span>
                                            <div className="w-px h-10 bg-white/20"></div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-5xl font-black font-heading">15%</span>
                                                <span className="text-xl font-bold font-heading text-white/80 uppercase">Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed font-sans">{t('pkg_desc_cp')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
                            <div
                                className="md:col-span-4 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                                <div className="flex marquee-content animate-marquee-slow whitespace-nowrap">
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/1.webp" alt={t('pricing_cp_alt_1')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/2.webp" alt={t('pricing_cp_alt_2')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/3.webp" alt={t('pricing_cp_alt_3')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/4.webp" alt={t('pricing_cp_alt_4')} className="w-full h-auto" />
                                        </div>
                                    </div>
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8" aria-hidden="true">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/1.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/2.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/3.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/company-profile/4.webp" alt="" className="w-full h-auto" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                                </div>
                                <div
                                    className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="gem" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('cp_f1_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('cp_f1_d')}</p>
                            </div>
                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="network" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('cp_f2_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('cp_f2_d')}</p>
                            </div>

                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="globe" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('cp_f3_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('cp_f3_d')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gray-200 my-24"></div>

                    <div className="reveal-on-scroll">
                        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-12">
                            <div className="md:w-1/3 space-y-8">
                                <div>
                                    <h3 className="text-5xl font-heading text-gray-900 mb-6">{t('price_online_store')}</h3>
                                    <div className="space-y-1">
                                        <p className="text-lg">{t('price_start_from')} <span className="line-through text-gray-400">Rp.
                                            6.500.000</span></p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-gray-900 text-lg">Rp</span>
                                            <span className="text-4xl text-gray-900">4,999,000</span>
                                            <span className="text-gray-500 text-lg">/ 2 tahun</span>
                                        </div>
                                        <p className="text-gray-400 text-sm italic mb-4">{t('pricing_pay_early_to')}</p>
                                        
                                        <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                                        <button
                                            onClick={() => toggleOptions('toko-online')}
                                            className="text-gray-900 text-sm flex items-center gap-1 font-medium hover:text-brand transition-colors"
                                        >
                                            {expandedOptions['toko-online'] ? t('pricing_hide_options') : t('pricing_show_options')}
                                            <Icon name={expandedOptions['toko-online'] ? 'chevron-up' : 'chevron-down'} className="w-4 h-4 text-gray-500" />
                                        </button>

                                        <AnimatePresence>
                                            {expandedOptions['toko-online'] && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                    exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                    className="flex flex-col gap-3 text-sm md:text-base text-gray-800 overflow-hidden"
                                                >
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-16">{t('pricing_to_opt_2th')}</span>
                                                        <span className="font-bold">Rp. 4,999,000</span>
                                                        <span>{t('pricing_to_opt_2th_suffix')}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="w-16">{t('pricing_to_opt_1th')}</span>
                                                        <span className="font-bold">Rp. 3,250,000</span>
                                                        <span></span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                                <a href="https://wa.me/+6285655639206"
                                    className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                    {t('price_btn_to')}
                                </a>
                            </div>

                            <div className="md:w-2/3">
                                <div className="flex flex-col items-start gap-8">
                                    <div className="flex flex-wrap gap-4">
                                        <div
                                            className="bg-brand rounded-xl p-4 text-white flex items-center gap-4 shadow-lg shadow-brand/20">
                                            <Icon name="languages" className="w-8 h-8 text-white/90" />
                                            <span
                                                className="text-sm font-bold leading-tight font-heading uppercase text-white/90">{t('price_free_trans')}</span>
                                        </div>
                                        <div
                                            className="bg-brand rounded-xl p-4 text-white flex items-center gap-6 shadow-lg shadow-brand/20">
                                            <span
                                                className="text-xs font-bold leading-tight font-heading uppercase text-white/90">{t('price_best_choice')}</span>
                                            <div className="w-px h-10 bg-white/20"></div>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-5xl font-black font-heading">23%</span>
                                                <span className="text-xl font-bold font-heading text-white/80 uppercase">Off</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed font-sans">{t('pkg_desc_to')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
                            <div
                                className="md:col-span-4 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                                <div className="flex marquee-content animate-marquee-slow whitespace-nowrap">
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/1.webp" alt={t('pricing_to_alt_1')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/2.webp" alt={t('pricing_to_alt_2')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/3.webp" alt={t('pricing_to_alt_3')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/4.webp" alt={t('pricing_to_alt_4')} className="w-full h-auto" />
                                        </div>
                                    </div>
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8" aria-hidden="true">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/1.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/2.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/3.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/toko-online/4.webp" alt="" className="w-full h-auto" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                                </div>
                                <div
                                    className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="shopping-bag" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('to_f1_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('to_f1_d')}</p>
                            </div>
                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="building" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('to_f2_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('to_f2_d')}</p>
                            </div>

                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="credit-card" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('to_f3_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('to_f3_d')}</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-gray-200 my-24"></div>

                    <div className="reveal-on-scroll">
                        <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-12">
                            <div className="md:w-1/3 space-y-8">
                                <div>
                                    <h3 className="text-5xl font-heading text-gray-900 mb-6">{t('price_custom_website')}</h3>
                                    <div className="space-y-1">
                                        <h4 className="text-4xl font-heading text-gray-900">{t('price_custom_price')}</h4>
                                        <p className="text-gray-400 text-sm italic">{t('price_custom_desc')}</p>
                                    </div>
                                </div>
                                <a href="https://wa.me/+6285655639206"
                                    className="inline-block bg-black text-white px-10 py-4 rounded-full text-md md:text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                    {t('price_btn_custom')}
                                </a>
                            </div>

                            <div className="md:w-2/3">
                                <div className="flex flex-col items-start gap-8">
                                    <div className="flex flex-wrap gap-4">
                                        <div
                                            className="bg-brand rounded-xl p-4 text-white flex items-center gap-4 shadow-lg shadow-brand/20">
                                            <Icon name="languages" className="w-8 h-8 text-white/90" />
                                            <span
                                                className="text-sm font-bold leading-tight font-heading uppercase text-white/90">{t('price_free_trans')}</span>
                                        </div>
                                    </div>
                                    <p className="text-lg leading-relaxed font-sans">{t('pkg_desc_custom')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
                            <div
                                className="md:col-span-4 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                                <div className="flex marquee-content animate-marquee-slow whitespace-nowrap">
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/1.webp" alt={t('pricing_cw_alt_1')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/2.webp" alt={t('pricing_cw_alt_2')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/3.webp" alt={t('pricing_cw_alt_3')} className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/4.webp" alt={t('pricing_cw_alt_4')} className="w-full h-auto" />
                                        </div>
                                    </div>
                                    <div className="flex gap-8 items-center flex-shrink-0 pr-8" aria-hidden="true">
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/1.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/2.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/3.webp" alt="" className="w-full h-auto" />
                                        </div>
                                        <div className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                            <img src="/assets/products-assets/custom-website/4.webp" alt="" className="w-full h-auto" />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                                </div>
                                <div
                                    className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                                </div>
                            </div>

                            <div className="md:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="palette" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('cw_f1_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('cw_f1_d')}</p>
                            </div>
                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="crosshair" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('cw_f2_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('cw_f2_d')}</p>
                            </div>

                            <div className="md:col-span-3 bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                    <Icon name="shopping-basket" className="w-6 h-6 text-gray-900" />
                                </div>
                                <h4 className="text-2xl font-heading mb-4">{t('cw_f3_t')}</h4>
                                <p className="text-md leading-relaxed font-sans">{t('cw_f3_d')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}