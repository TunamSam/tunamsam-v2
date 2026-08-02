import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';
import { useI18n } from '../context/I18nContext';

const CARDS = [
  { id: 'card-1', position: 'card-top-left', icon: 'heart-handshake', titleKey: 'c1_title' as const, descKey: 'c1_desc' as const },
  { id: 'card-2', position: 'card-top-right', icon: 'person-standing', titleKey: 'c2_title' as const, descKey: 'c2_desc' as const },
  { id: 'card-3', position: 'card-bottom-left', icon: 'headset', titleKey: 'c3_title' as const, descKey: 'c3_desc' as const },
  { id: 'card-4', position: 'card-bottom-right', icon: 'trending-up', titleKey: 'c4_title' as const, descKey: 'c4_desc' as const },
];

export function Criteria() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const [activeCards, setActiveCards] = useState<[boolean, boolean, boolean, boolean]>([false, false, false, false]);
  const [laptopScale, setLaptopScale] = useState(1.1);

  useEffect(() => {
    const handleScroll = () => {
      const criteriaSection = sectionRef.current;
      const laptop = laptopRef.current;
      if (!criteriaSection || !laptop) return;

      const sectionTop = criteriaSection.offsetTop;
      const sectionHeight = criteriaSection.offsetHeight;
      const scrollY = window.scrollY;

      if (scrollY < sectionTop || scrollY > sectionTop + sectionHeight - window.innerHeight) {
        if (scrollY < sectionTop) {
          setLaptopScale(1.1);
          setActiveCards([false, false, false, false]);
        }
        return;
      }

      const startOffset = 500;
      let scrollProgress =
        (scrollY - (sectionTop + startOffset)) / (sectionHeight - window.innerHeight - startOffset);
      scrollProgress = Math.max(0, Math.min(1, scrollProgress));

      setLaptopScale(1.1 - scrollProgress * 0.1);
      setActiveCards([
        scrollProgress > 0.5,
        scrollProgress > 0.5,
        scrollProgress > 0.8,
        scrollProgress > 0.8,
      ]);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="criteria-section" id="criteria-trigger">
      <div className="criteria-sticky">
        <h2 className="text-3xl md:mt-4 lg:text-5xl font-heading text-gray-900 leading-[1.2] text-center max-w-[850px] mx-auto px-4 criteria-dynamic-title">
          {t('criteria_title')}
        </h2>

        <div className="max-w-8xl mx-auto px-6 relative">
          <div
            ref={laptopRef}
            className="laptop-mockup-container"
            id="laptop-mockup"
            style={{ transform: `scale(${laptopScale})` }}
          >
            <img src="/assets/criteria-section-assets/mockup.webp" alt="MacBook Mockup" className="w-full h-auto" />

            {CARDS.map((card, index) => (
              <div
                key={card.id}
                id={card.id}
                className={`criteria-card-reveal ${card.position}${activeCards[index] ? ' active' : ''}`}
              >
                <div className="feature-icon">
                  <Icon name={card.icon} className="w-5 h-5" />
                </div>
                <h3 className="text-2xl mb-2">{t(card.titleKey)}</h3>
                <p className="text-md leading-relaxed">{t(card.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
