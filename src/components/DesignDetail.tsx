import { useState } from 'react';
import { ArrowLeft, Monitor, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '../context/I18nContext';

export interface Design {
  id: number;
  title: string;
  category: string;
  icon: any;
  image?: string;
  description?: string;
  images?: string[];
  previewDesktop?: string;
  previewMobile?: string;
}

interface DesignDetailProps {
  design: Design;
  onBack: () => void;
}

export function DesignDetail({ design, onBack }: DesignDetailProps) {
  const { t } = useI18n();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previewMode, setPreviewMode] = useState<'desktop' | 'mobile'>('desktop');

  const images = design.images || (design.image ? [design.image] : [
    '/assets/design-catalog-assets/design-banner/designbanner1.webp',
    '/assets/design-catalog-assets/design-banner/designbanner2.webp',
  ]);

  const description = design.description || t('design_default_desc').replace('{category}', design.category.toLowerCase());

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full bg-white min-h-screen pb-24 pt-12 md:pt-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 mb-8 text-md">
          <button onClick={onBack} className="flex items-center gap-2 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{t('design_back')}</span>
          </button>
          <span>/</span>
          <span className="font-bold text-gray-900">{design.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-20">
          {/* Image Slider */}
          <div className="lg:col-span-3 relative bg-gray-100 rounded-2xl overflow-hidden aspect-video group">
            <img
              src={images[currentImageIndex]}
              alt={`${design.title} preview ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Slider Controls */}
            <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImage}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${currentImageIndex === idx ? 'bg-white w-4' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
              {design.title}
            </h1>
            <div className="prose prose-gray max-w-none mb-8">
              <p className="text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
            <a
              href="https://wa.me/+6285655639206"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-brand transition-colors"
            >
              {t('design_cta')}
            </a>
          </div>
        </div>

        {/* Full Preview */}
        <div className="border-t border-gray-200 pt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
              {t('design_preview_title')}
            </h2>

            {/* Toggle Desktop/Mobile */}
            <div className="inline-flex bg-black rounded-full p-1">
              <button
                onClick={() => setPreviewMode('desktop')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${previewMode === 'desktop'
                    ? 'bg-white text-black'
                    : 'text-white hover:text-gray-300'
                  }`}
              >
                <Monitor className="w-4 h-4" />
                {t('design_preview_desktop')}
              </button>
              <button
                onClick={() => setPreviewMode('mobile')}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all ${previewMode === 'mobile'
                    ? 'bg-white text-black'
                    : 'text-white hover:text-gray-300'
                  }`}
              >
                <Smartphone className="w-4 h-4" />
                {t('design_preview_mobile')}
              </button>
            </div>
          </div>

          {/* Preview Image/Iframe container */}
          <div className="flex justify-center rounded-3xl p-4 md:p-12">
            <div className={`relative transition-all duration-500 overflow-hidden rounded-lg shadow-2xl bg-white ${previewMode === 'desktop' ? 'w-full max-w-5xl aspect-video' : 'w-[375px] h-[812px]'
              }`}>
              {/* Fake Browser header for desktop */}
              {previewMode === 'desktop' && (
                <div className="h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
              )}

              <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-400 p-6 text-center">
                <div className="w-16 h-16 mb-4 opacity-50">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.936 10.134A2.25 2.25 0 0110.12 7.73l1.83 2.112A2.25 2.25 0 0113.882 13H15.75a2.25 2.25 0 012.25 2.25v2.25A2.25 2.25 0 0115.75 19.5H8.25a2.25 2.25 0 01-2.25-2.25v-2.25A2.25 2.25 0 018.25 12.75v-1.636a2.25 2.25 0 01-.19-.48l-1.124-2.5zM12 2.25A2.25 2.25 0 0114.25 4.5v1.5a2.25 2.25 0 01-4.5 0v-1.5A2.25 2.25 0 0112 2.25zM4.5 10.5A2.25 2.25 0 016.75 12.75v1.5a2.25 2.25 0 01-4.5 0v-1.5A2.25 2.25 0 014.5 10.5zm15 0a2.25 2.25 0 012.25 2.25v1.5a2.25 2.25 0 01-4.5 0v-1.5A2.25 2.25 0 0119.5 10.5z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-600 mb-2">{t('design_underdev_title')}</h3>
                <p className="text-sm md:text-base">{t('design_underdev_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
