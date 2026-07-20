import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Monitor, ShoppingCart, Layout, ChevronLeft, ChevronRight } from 'lucide-react';
import { SuccessCtaSection } from './SuccessCtaSection';
import { FaqSection } from './FaqSection';

type Category = 'Semua' | 'Landing Page' | 'Company Profile' | 'Online Store';

const SLIDE_IMAGES = [
  { src: '/assets/nasi.png', alt: 'Design 1' },
  { src: '/assets/sate.png', alt: 'Design 2' },
  { src: '/assets/kangkung.png', alt: 'Design 3' },
  { src: '/assets/pecel.png', alt: 'Design 4' },
];
const INTERVAL_MS = 5000;

const MOCK_DESIGNS = [
  { id: 1, title: 'Modern Landing Page', category: 'Landing Page', video: '/assets/videos/landingpage.mp4', icon: Layout },
  { id: 2, title: 'Corporate Profile', category: 'Company Profile', video: '/assets/videos/company-profile.mp4', icon: Monitor },
  { id: 3, title: 'E-Commerce Plus', category: 'Online Store', video: '/assets/videos/toko-online.mp4', icon: ShoppingCart },
  { id: 4, title: 'Tech Startup Landing', category: 'Landing Page', video: '/assets/videos/landingpage.mp4', icon: Layout },
  { id: 5, title: 'Creative Agency', category: 'Company Profile', video: '/assets/videos/company-profile.mp4', icon: Monitor },
  { id: 6, title: 'Fashion Store', category: 'Online Store', video: '/assets/videos/toko-online.mp4', icon: ShoppingCart },
  { id: 7, title: 'Business Consulting', category: 'Company Profile', video: '/assets/videos/company-profile.mp4', icon: Monitor },
  { id: 8, title: 'Gadget Store', category: 'Online Store', video: '/assets/videos/toko-online.mp4', icon: ShoppingCart },
  { id: 9, title: 'App Promo', category: 'Landing Page', video: '/assets/videos/landingpage.mp4', icon: Layout },
  { id: 10, title: 'Food Delivery', category: 'Online Store', video: '/assets/videos/toko-online.mp4', icon: ShoppingCart },
  { id: 11, title: 'Real Estate Agency', category: 'Company Profile', video: '/assets/videos/company-profile.mp4', icon: Monitor },
  { id: 12, title: 'Event Registration', category: 'Landing Page', video: '/assets/videos/landingpage.mp4', icon: Layout },
  { id: 13, title: 'Fitness Center', category: 'Landing Page', video: '/assets/videos/landingpage.mp4', icon: Layout },
  { id: 14, title: 'Law Firm', category: 'Company Profile', video: '/assets/videos/company-profile.mp4', icon: Monitor },
  { id: 15, title: 'Bookstore', category: 'Online Store', video: '/assets/videos/toko-online.mp4', icon: ShoppingCart },
  { id: 16, title: 'SaaS Platform', category: 'Landing Page', video: '/assets/videos/landingpage.mp4', icon: Layout },
  { id: 17, title: 'Architecture Studio', category: 'Company Profile', video: '/assets/videos/company-profile.mp4', icon: Monitor },
  { id: 18, title: 'Automotive Parts', category: 'Online Store', video: '/assets/videos/toko-online.mp4', icon: ShoppingCart },
  { id: 19, title: 'Webinar Promo', category: 'Landing Page', video: '/assets/videos/landingpage.mp4', icon: Layout },
  { id: 20, title: 'Medical Clinic', category: 'Company Profile', video: '/assets/videos/company-profile.mp4', icon: Monitor },
  { id: 21, title: 'Beauty Cosmetics', category: 'Online Store', video: '/assets/videos/toko-online.mp4', icon: ShoppingCart },
];

const CATEGORIES: Category[] = ['Semua', 'Landing Page', 'Company Profile', 'Online Store'];
const ITEMS_PER_PAGE = 6;

export function DesignCatalog() {
  const [activeCategory, setActiveCategory] = useState<Category>('Semua');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, []);

  const handleCategoryChange = (category: Category) => {
    setActiveCategory(category);
    setCurrentPage(1);
  };

  const filteredDesigns = activeCategory === 'Semua'
    ? MOCK_DESIGNS
    : MOCK_DESIGNS.filter(d => d.category === activeCategory);

  const totalPages = Math.ceil(filteredDesigns.length / ITEMS_PER_PAGE);
  const paginatedDesigns = filteredDesigns.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      {/* Header & Banner Section in 2 Columns */}
      <div className="max-w-8xl mx-auto px-6 pt-12 md:pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Section Header (Left on Desktop, Bottom on Mobile) */}
          <div className="max-w-xl order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 mb-6 leading-tight">
              Pilih Desain Sesuai Kebutuhan Anda
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Kami telah menyiapkan berbagai pilihan desain premium yang bisa langsung disesuaikan dengan identitas brand Anda. Gunakan filter di bawah ini untuk menemukan desain yang paling cocok.
            </p>
          </div>

          {/* Slider (Right on Desktop, Top on Mobile) */}
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[250px] rounded-3xl overflow-hidden group bg-black order-1 lg:order-2">
            {/* Slider Background */}
            <div className="slider-container absolute inset-0 z-0">
              {SLIDE_IMAGES.map(({ src, alt }, index) => (
                <div key={src} className={`slide${index === currentSlide ? ' active' : ''}`}>
                  <img src={src} alt={alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Slider Dots */}
            <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
              {SLIDE_IMAGES.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => goToSlide(index)}
                  className={`slide-dot cursor-pointer transition-all duration-300 relative overflow-hidden rounded-full bg-white/40 hover:bg-white/70 ${
                    index === currentSlide ? 'w-8 h-2 md:w-12 md:h-2' : 'w-2 h-2 md:w-2 md:h-2'
                  }`}
                >
                  {index === currentSlide && (
                    <div className="absolute top-0 left-0 h-full bg-white animate-slider-progress" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-8xl mx-auto px-6">
        {/* Category Navigation */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-4 border-b border-gray-200">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-brand text-white shadow-lg shadow-brand/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedDesigns.map((design, idx) => (
            <div 
              key={`${design.id}-${idx}`}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative aspect-video bg-gray-900 overflow-hidden">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                >
                  <source src={design.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-brand" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-brand/10 rounded-lg text-brand">
                    <design.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-brand uppercase tracking-wider">
                    {design.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand transition-colors">
                  {design.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  Desain responsif dengan performa optimal untuk {design.category.toLowerCase()} Anda.
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button className="text-sm font-bold text-gray-900 hover:text-brand transition-colors flex items-center gap-2">
                    Lihat Detail
                  </button>
                  <a 
                    href="https://wa.me/+6285655639206"
                    className="px-4 py-2 bg-gray-900 hover:bg-brand text-white text-xs font-bold rounded-full transition-colors"
                  >
                    Pesan Desain
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12 mb-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  currentPage === i + 1
                    ? 'bg-brand text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-100 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
      <SuccessCtaSection />
      <FaqSection />
    </div>
  );
}
