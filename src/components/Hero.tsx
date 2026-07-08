import { useCallback, useEffect, useState } from 'react';
import { useI18n } from '../context/I18nContext';

const SLIDE_IMAGES = [
  { src: '/assets/1.webp', altKey: 'hero_alt_1' as const },
  { src: '/assets/2.webp', altKey: 'hero_alt_2' as const },
  { src: '/assets/3.webp', altKey: 'hero_alt_3' as const },
  { src: '/assets/4.webp', altKey: 'hero_alt_4' as const },
];
const INTERVAL_MS = 5000;

export function Hero() {
  const { t } = useI18n();
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative bg-brand pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mt-7 md:mt-7 md:px-12 relative z-20">
        <h1 className="sr-only">{t('seo_title')}</h1>
        <div className="relative">
          <div className="slider-container aspect-[21/9] md:aspect-[16/7] rounded-none md:rounded-[2.5rem] overflow-hidden shadow-2xl bg-black">
            {SLIDE_IMAGES.map(({ src, altKey }, index) => (
              <div key={src} className={`slide${index === currentSlide ? ' active' : ''}`}>
                <img src={src} alt={t(altKey)} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {SLIDE_IMAGES.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`slide-dot cursor-pointer transition-all duration-300 relative overflow-hidden rounded-full bg-[#d4d4d4] ${
                  index === currentSlide ? 'w-8 h-2 md:w-12 md:h-3' : 'w-2 h-2 md:w-3 md:h-3'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute top-0 left-0 h-full bg-brand animate-slider-progress" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="wave-container">
        <svg viewBox="0 0 1920 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            className="wave-path-3"
            fill="#ffffff"
            fillOpacity="0.3"
            d="M0,160 C320,300 640,20 960,160 C1280,300 1600,20 1920,160 L1920,320 L0,320 Z"
          />
          <path
            className="wave-path-2"
            fill="#ffffff"
            fillOpacity="0.6"
            d="M0,160 C320,20 640,300 960,160 C1280,20 1600,300 1920,160 L1920,320 L0,320 Z"
          />
          <path
            className="wave-path-1"
            fill="#ffffff"
            d="M0,192 C240,320 720,64 960,192 C1200,320 1680,64 1920,192 L1920,320 L0,320 Z"
          />
        </svg>
      </div>
    </section>
  );
}
