import { useEffect, useRef, useState } from 'react';
import { useI18n } from '../context/I18nContext';

const TOP_STRIP_IMAGES = [
  '/assets/products-assets/landing-page/1.webp',
  '/assets/products-assets/landing-page/2.webp',
  '/assets/products-assets/company-profile/1.webp',
  '/assets/products-assets/company-profile/2.webp',
  '/assets/products-assets/toko-online/1.webp',
  '/assets/products-assets/custom-website/1.webp',
  '/assets/products-assets/landing-page/3.webp',
  '/assets/products-assets/company-profile/3.webp',
];

const BOTTOM_STRIP_IMAGES = [
  '/assets/products-assets/toko-online/2.webp',
  '/assets/products-assets/custom-website/2.webp',
  '/assets/products-assets/landing-page/4.webp',
  '/assets/products-assets/company-profile/4.webp',
  '/assets/products-assets/toko-online/3.webp',
  '/assets/products-assets/custom-website/3.webp',
  '/assets/products-assets/landing-page/2.webp',
  '/assets/products-assets/toko-online/4.webp',
];

function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function ImageStrip({ images, className = '' }: { images: string[]; className?: string }) {
  return (
    <div className={`flex gap-3 md:gap-4 w-max ${className}`}>
      {images.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className="w-[180px] md:w-[220px] lg:w-[260px] flex-shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-2xl"
        >
          <img src={src} alt="" className="w-full h-auto block" loading="lazy" />
        </div>
      ))}
    </div>
  );
}

export function SuccessCtaSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const maxScroll = sectionHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const raw = (window.scrollY - sectionTop) / maxScroll;
      setProgress(easeOutCubic(Math.max(0, Math.min(1, raw))));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const topX = lerp(22, 0, progress);
  const topY = lerp(0, 0, progress);
  const bottomX = lerp(-22, 0, progress);
  const bottomY = lerp(0, 0, progress);
  const topPosition = lerp(46, 0, progress);
  const bottomPosition = lerp(46, 0, progress);
  const textOpacity = lerp(0.15, 1, easeOutCubic(Math.min(1, progress * 1.2)));
  const textScale = lerp(0.9, 1, progress);
  const stripScale = lerp(1.08, 1, progress);

  return (
    <section ref={sectionRef} className="relative h-[220vh] bg-black">
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        <div className="relative h-full w-full max-w-8xl mx-auto">
          {/* Center content */}
          <div
            className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center"
            style={{
              opacity: textOpacity,
              transform: `scale(${textScale})`,
              transition: 'opacity 0.1s linear, transform 0.1s linear',
            }}
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading text-white leading-tight max-w-4xl mb-6">
              {t('cta_title')}
            </h2>
            <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mb-10 font-sans">
              {t('cta_desc')}
            </p>
            <a
              href="https://wa.me/+6285190962301"
              className="inline-flex items-center gap-3 bg-white text-gray-900 px-8 py-3.5 rounded-full text-sm md:text-base font-bold hover:bg-gray-100 transition-colors shadow-xl"
            >
              <i className="fa-brands fa-whatsapp text-xl text-brand" />
              {t('cta_btn')}
            </a>
          </div>

          {/* Top strip — starts top-right covering text, slides to top */}
          <div
            className="absolute left-0 right-0 z-30 pointer-events-none"
            style={{
              top: `${topPosition}%`,
              transform: `translateX(${topX}%) translateY(${topY}px) scale(${stripScale})`,
              transformOrigin: 'top right',
            }}
          >
            <div className="overflow-hidden py-2 md:py-4 bg-black">
              <ImageStrip images={[...TOP_STRIP_IMAGES, ...TOP_STRIP_IMAGES]} />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* Bottom strip — starts bottom-left covering text, slides to bottom */}
          <div
            className="absolute left-0 right-0 z-30 pointer-events-none"
            style={{
              bottom: `${bottomPosition}%`,
              transform: `translateX(${bottomX}%) translateY(${bottomY}px) scale(${stripScale})`,
              transformOrigin: 'bottom left',
            }}
          >
            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="overflow-hidden py-2 md:py-4 bg-black">
              <ImageStrip images={[...BOTTOM_STRIP_IMAGES, ...BOTTOM_STRIP_IMAGES]} />
            </div>
          </div>

          {/* Side vignette so strips feel like they peel from corners */}
          <div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{ opacity: lerp(0.6, 0, progress) }}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#000_75%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
