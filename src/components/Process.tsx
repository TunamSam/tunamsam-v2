import { useEffect, useRef, useState, useMemo } from 'react';
import { Icon } from './Icon';
import { useI18n } from '../context/I18nContext';

export function Process() {
  const { t } = useI18n();
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  const STEPS = useMemo(() => [
    {
      step: 1,
      image: '/assets/step-section-assets/1.webp',
      icon: 'hand-coins',
      title: t('proc_step1_title'),
      description: t('proc_step1_desc'),
      titleSize: 'text-3xl lg:text-4xl',
    },
    {
      step: 2,
      image: '/assets/step-section-assets/2.webp',
      icon: 'folder-open',
      title: t('proc_step2_title'),
      description: t('proc_step2_desc'),
      titleSize: 'text-2xl lg:text-3xl',
    },
    {
      step: 3,
      image: '/assets/step-section-assets/3.webp',
      icon: 'code-2',
      title: t('proc_step3_title'),
      description: t('proc_step3_desc'),
      titleSize: 'text-2xl lg:text-3xl',
    },
    {
      step: 4,
      image: '/assets/step-section-assets/4.webp',
      icon: 'sparkles',
      title: t('proc_step4_title'),
      description: t('proc_step4_desc'),
      titleSize: 'text-2xl lg:text-3xl',
    },
    {
      step: 5,
      image: '/assets/step-section-assets/5.webp',
      icon: 'globe',
      title: t('proc_step5_title'),
      description: t('proc_step5_desc'),
      titleSize: 'text-2xl lg:text-3xl',
    },
  ], [t]);

  useEffect(() => {
    const processHeader = headerRef.current;
    const processSection = sectionRef.current;
    if (!processHeader || !processSection) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--process-header-height', `${processHeader.offsetHeight}px`);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    // Watch for header height changes when language switches (text reflow)
    const ro = new ResizeObserver(updateHeaderHeight);
    ro.observe(processHeader);

    const handleScroll = () => {
      const sectionRect = processSection.getBoundingClientRect();
      if (sectionRect.bottom < 0 || sectionRect.top > window.innerHeight) return;

      const steps = processSection.querySelectorAll<HTMLElement>('.process-step[data-step]');
      let nextActive = 1;

      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        const headerH = processHeader.offsetHeight;
        if (rect.top <= headerH + 80) {
          nextActive = parseInt(step.getAttribute('data-step') ?? '1', 10);
        }
      });

      setActiveStep(nextActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', handleScroll);
      ro.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-[#0a0a0a] relative z-10">
      {/* Mobile Title & description — not sticky, scrolls away normally */}
      <div className="block lg:hidden max-w-8xl mx-auto px-6 pt-16 pb-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-heading text-white leading-tight">
            {t('proc_title')}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t('proc_desc')}
          </p>
        </div>
      </div>

      {/* Sticky: Title (desktop only), description (desktop only), and the dots timeline */}
      <div ref={headerRef} id="process-header" className="sticky top-0 z-50 bg-[#0a0a0a] pt-4 lg:pt-16 pb-4 px-6">
        <div className="hidden lg:block max-w-8xl mx-auto mb-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24">
            <h2 className="text-3xl lg:text-5xl font-heading text-white lg:w-1/2 leading-tight">
              {t('proc_title')}
            </h2>
            <p className="text-gray-400 text-sm lg:text-lg leading-relaxed lg:w-1/2">
              {t('proc_desc')}
            </p>
          </div>
        </div>

        <div className="max-w-8xl mx-auto">
          <div className="flex items-center w-full">
            <div className="flex items-center gap-0 w-full">
              {STEPS.map((step, index) => (
                <div key={step.step} className={`flex items-center${index < STEPS.length - 1 ? ' flex-1' : ''}`}>
                  <div
                    data-step={step.step}
                    className="process-dot w-8 h-8 lg:w-14 lg:h-14 rounded-full border-2 text-sm lg:text-xl font-bold flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      borderColor: step.step <= activeStep ? 'white' : '#4b5563',
                      color: step.step === activeStep ? '#0a0a0a' : step.step < activeStep ? 'black' : '#6b7280',
                      background: step.step <= activeStep ? 'white' : '#0a0a0a',
                      fontWeight: step.step === activeStep ? 900 : undefined,
                    }}
                  >
                    {step.step}
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      data-step={step.step}
                      className="process-line h-[3px] lg:h-[4px] flex-1 transition-all duration-500"
                      style={{ backgroundColor: step.step < activeStep ? 'white' : '#374151' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 pb-32">
        {STEPS.map((step) => (
          <div
            key={step.step}
            className="process-step sticky mb-3"
            data-step={step.step}
            style={{
              top: `calc(var(--process-header-height, 220px) + ${(step.step - 1) * 18}px)`,
              zIndex: 10 + step.step,
            }}
          >
            <div className="relative rounded-3xl overflow-hidden h-72 lg:h-[380px]">
              <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute bottom-0 left-0 p-10 lg:p-14">
                <Icon name={step.icon} className="w-10 h-10 text-white mb-5" />
                <h3 className={`${step.titleSize} font-heading text-white mb-3`}>{step.title}</h3>
                <p className="text-gray-300 text-md lg:text-lg leading-relaxed max-w-xl font-sans">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
