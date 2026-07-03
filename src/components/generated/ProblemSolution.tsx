import { useI18n } from '../../context/I18nContext';

const PROBLEM_IMAGES = [
  { src: '/assets/section-2/problem1.jpg', alt: 'Wireframe Draft' },
  { src: '/assets/section-2/problem2.jpg', alt: 'Error Screen' },
  { src: '/assets/section-2/problem3.jpg', alt: 'Frustrated Dev' },
  { src: '/assets/section-2/problem4.jpg', alt: 'Unorganized UI' },
  { src: '/assets/section-2/problem5.jpg', alt: 'Loading State' },
];

const SOLUTION_IMAGES = [
  { src: '/assets/section-2/view1.png', alt: 'Mobile UI' },
  { src: '/assets/section-2/view2.jpg', alt: 'Dashboard View' },
  { src: '/assets/section-2/view3.png', alt: 'Finished Web Project' },
  { src: '/assets/section-2/view4.jpg', alt: 'Design System' },
  { src: '/assets/section-2/view5.jpg', alt: 'UI Kit' },
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
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-12 space-y-40">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading leading-[1.3]">{t('p1_title')}</h2>
            <div className="space-y-4 text-md leading-relaxed">
              <p>{t('p1_desc1')}</p>
              {t('p1_desc2') && <p>{t('p1_desc2')}</p>}
            </div>
          </div>
          <div className="lg:w-1/2">
            <CollageImages variant="collage-v1" images={PROBLEM_IMAGES} />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl lg:text-5xl font-heading leading-[1.3]">{t('s1_title')}</h2>
            <div className="space-y-6">
              <p className="text-md leading-relaxed">{t('s1_desc')}</p>
              <button type="button" className="btn-black">
                {t('s1_btn')}
              </button>
            </div>
          </div>
          <div className="lg:w-1/2">
            <CollageImages variant="collage-v2" images={SOLUTION_IMAGES} />
          </div>
        </div>
      </div>
    </section>
  );
}
