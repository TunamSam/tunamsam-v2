import { useI18n } from '../../context/I18nContext';

const PROBLEM_IMAGES = [
  { src: '/assets/problem-solution-section-assets/problem-assets/problem1new.webp', alt: 'Wireframe Draft' },
  { src: '/assets/problem-solution-section-assets/problem-assets/problem2new.webp', alt: 'Error Screen' },
  { src: '/assets/problem-solution-section-assets/problem-assets/problem3new.webp', alt: 'Frustrated Dev' },
  { src: '/assets/problem-solution-section-assets/problem-assets/problem4new.webp', alt: 'Unorganized UI' },
  { src: '/assets/problem-solution-section-assets/problem-assets/problem5new.webp', alt: 'Loading State' },
];

const SOLUTION_IMAGES = [
  { src: '/assets/problem-solution-section-assets/view-assets/view1new.webp', alt: 'Mobile UI' },
  { src: '/assets/problem-solution-section-assets/view-assets/view2new.webp', alt: 'Dashboard View' },
  { src: '/assets/problem-solution-section-assets/view-assets/view3new.webp', alt: 'Finished Web Project' },
  { src: '/assets/problem-solution-section-assets/view-assets/view4new.webp', alt: 'Design System' },
  { src: '/assets/problem-solution-section-assets/view-assets/view5new.webp', alt: 'UI Kit' },
];

function CollageImages({ variant, images }: { variant: string; images: { src: string; alt: string }[] }) {
  return (
    <div className={`collage-container ${variant}`}>
      {images.map((image, index) => (
        <div key={image.src} className={`elementor-element elementor-absolute img-${index + 1}`}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}

export function ProblemSolution() {
  const { t } = useI18n();

  return (
    <section className="pt-[360px] pb-16 lg:pb-24 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-12 space-y-20 lg:space-y-40">
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading leading-[1.3]">{t('p1_title')}</h2>
            <div className="space-y-4 text-md leading-relaxed">
              <p>{t('p1_desc1')}</p>
              {t('p1_desc2') && <p>{t('p1_desc2')}</p>}
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <CollageImages variant="collage-v1" images={PROBLEM_IMAGES} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 lg:gap-20">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading leading-[1.3]">{t('s1_title')}</h2>
            <div className="space-y-6">
              <p className="text-md leading-relaxed">{t('s1_desc')}</p>
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <CollageImages variant="collage-v2" images={SOLUTION_IMAGES} />
          </div>
        </div>
      </div>
    </section>
  );
}