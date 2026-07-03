import { useEffect, useRef, useState } from 'react';
import { Icon } from './Icon';

const STEPS = [
  {
    step: 1,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1400',
    icon: 'hand-coins',
    title: 'Konsultasi',
    description:
      'Tim profesional Kami memulai dengan berdiskusi untuk memahami kebutuhan, tujuan, dan gambaran website yang Anda inginkan.',
    titleSize: 'text-3xl lg:text-4xl',
  },
  {
    step: 2,
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1400',
    icon: 'folder-open',
    title: 'Perencanaan',
    description:
      'Setelah memahami kebutuhan Anda, kami menyusun konsep, fitur, serta rencana pengerjaan yang sesuai dengan bisnis Anda.',
    titleSize: 'text-2xl lg:text-3xl',
  },
  {
    step: 3,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1400',
    icon: 'code-2',
    title: 'Pengerjaan',
    description:
      'Tim kami mulai mengerjakan website dengan fokus pada tampilan yang menarik, cepat, dan nyaman digunakan.',
    titleSize: 'text-2xl lg:text-3xl',
  },
  {
    step: 4,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400',
    icon: 'sparkles',
    title: 'Review',
    description:
      'Anda dapat melihat hasil website dan memberikan masukan. Kami akan melakukan penyesuaian agar hasilnya sesuai harapan.',
    titleSize: 'text-2xl lg:text-3xl',
  },
  {
    step: 5,
    image: '/assets/step-section/5.png',
    icon: 'globe',
    title: 'Website Siap Digunakan',
    description:
      'Setelah semuanya disetujui, website akan dipublikasikan dan siap digunakan untuk mendukung bisnis Anda.',
    titleSize: 'text-2xl lg:text-3xl',
  },
];

export function Process() {
  const headerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  useEffect(() => {
    const processHeader = headerRef.current;
    const processSection = sectionRef.current;
    if (!processHeader || !processSection) return;

    const updateHeaderHeight = () => {
      document.documentElement.style.setProperty('--process-header-height', `${processHeader.offsetHeight}px`);
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

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
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-[#0a0a0a] relative z-10">
      <div ref={headerRef} id="process-header" className="sticky top-0 z-50 bg-[#0a0a0a] pt-16 pb-6 px-6">
        <div className="max-w-8xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-24 mb-10">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold text-white lg:w-1/2 leading-tight">
              Bagaimana proses kami <br />
              membuat website
            </h2>
            <p className="text-gray-400 text-sm lg:text-base leading-relaxed lg:w-1/2">
              Kami mengutamakan kualitas dan kepuasan klien dalam setiap langkah proses. Jasa pembuatan website yang
              murah dan terpercaya, memulai pembuatan website dengan analisis mendalam terhadap kebutuhan dan visi bisnis
              Anda untuk memastikan hasil akhir yang memuaskan.
            </p>
          </div>

          <div className="flex items-center w-full">
            <div className="flex items-center gap-0 w-full">
              {STEPS.map((step, index) => (
                <div key={step.step} className={`flex items-center${index < STEPS.length - 1 ? ' flex-1' : ''}`}>
                  <div
                    data-step={step.step}
                    className="process-dot w-14 h-14 rounded-full border-2 text-xl font-bold flex items-center justify-center flex-shrink-0 transition-all duration-300"
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
                      className="process-line h-[4px] flex-1 transition-all duration-500"
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
