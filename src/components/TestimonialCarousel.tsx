import { useCallback, useEffect, useState } from 'react';
import { useI18n } from '../context/I18nContext';
import type { TranslationKey } from '../i18n/translations';

type Testimonial = {
  quoteKey: TranslationKey;
  author: string;
  website: string;
  websiteUrl?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quoteKey: 'testi_carousel_quote',
    author: 'Mbak Win',
    website: 'Nasi Goreng Mbak Win',
  },
];

const AUTO_INTERVAL_MS = 6000;

export function TestimonialCarousel() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, AUTO_INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[activeIndex];

  return (
    <section id="testimonials" className="my-24 px-6 reveal-on-scroll">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl lg:text-5xl font-heading text-gray-900 leading-tight mb-6">
          {t('testi_title')}
        </h2>
        <p className="text-gray-500 text-sm lg:text-base leading-relaxed font-sans">
          {t('testi_desc')}
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] bg-black px-8 py-16 md:px-16 md:py-20 min-h-[320px] flex flex-col items-center justify-center">
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100%,480px)] h-[200px] bg-brand-light/35 blur-[90px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[min(80%,360px)] h-[140px] bg-brand/25 blur-[70px] rounded-full" />
          </div>

          <div className="relative z-10 text-center max-w-3xl transition-opacity duration-500">
            <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-sans mb-10">
              &ldquo;{t(current.quoteKey)}&rdquo;
            </p>
            <p className="text-brand-light text-xl md:text-2xl font-heading font-bold mb-2">{current.author}</p>
            {current.websiteUrl ? (
              <a
                href={current.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-sm md:text-base font-sans hover:text-brand-light transition-colors"
              >
                {current.website}
              </a>
            ) : (
              <p className="text-white/80 text-sm md:text-base font-sans">{current.website}</p>
            )}
          </div>

          <div className="relative z-10 flex items-center justify-center gap-2.5 mt-12">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Testimonial ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-2.5 h-2.5 bg-brand-light scale-110'
                    : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
