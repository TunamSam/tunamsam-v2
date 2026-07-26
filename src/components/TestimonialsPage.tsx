import { useI18n } from '../context/I18nContext';
import { Icon } from './Icon';
import type { TranslationKey } from '../i18n/translations';

type Testimonial = {
  quoteKey: TranslationKey;
  authorKey: TranslationKey;
  website: string;
  websiteUrl?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quoteKey: 'testi_quote',
    authorKey: 'testi_author',
    website: 'Nasi Goreng Mbak Win',
  },
];

export function TestimonialsPage() {
    const { t } = useI18n();
    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Hero Section */}
            <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10 reveal-on-scroll">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-gray-900 leading-tight">
                        {t('testi_page_title')}
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 font-light leading-relaxed mb-12 md:mb-16">
                        {t('testi_page_desc')}
                    </p>
                </div>
                
                {/* Hero Image Collage Placeholder */}
                <div className="max-w-6xl mx-auto px-6 relative z-10 reveal-on-scroll stagger-1">
                    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] bg-gray-50 overflow-hidden flex flex-col items-center justify-center text-gray-400 border-b-0 md:border-b-4 border-black">
                        <img src="/assets/testimoni-assets/testimoni.webp" alt={t('testi_page_title')} className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Testimonials Grid & Header */}
            <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
                {/* Testimonials Header */}
                <div className="text-center max-w-4xl mx-auto pt-16 md:pt-24 pb-12 md:pb-16 reveal-on-scroll">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 text-gray-900">
                        {t('testi_section_title')}
                    </h2>
                    <p className="text-sm md:text-lg text-gray-600">
                        {t('testi_section_desc')}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:gap-8 max-w-3xl mx-auto">
                    {TESTIMONIALS.map((tItem, idx) => (
                        <div key={idx} className="bg-gray-50 p-8 md:p-12 rounded-3xl reveal-on-scroll border border-gray-100 hover:-translate-y-2 transition-all duration-300">
                            <div className="flex text-amber-400 mb-6 space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Icon key={i} name="star" className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <blockquote className="text-xl md:text-2xl text-gray-900 font-heading leading-relaxed mb-8">
                                &ldquo;{t(tItem.quoteKey)}&rdquo;
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center font-bold text-xl">
                                    {t(tItem.authorKey).charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{t(tItem.authorKey)}</h4>
                                    {tItem.websiteUrl ? (
                                        <a href={tItem.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline text-sm font-medium">
                                            {tItem.website}
                                        </a>
                                    ) : (
                                        <span className="text-gray-500 text-sm">{tItem.website}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
