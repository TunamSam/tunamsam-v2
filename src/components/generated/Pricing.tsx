import { Icon } from '../Icon';
import { useI18n } from '../../context/I18nContext';

export function Pricing() {
  const { t } = useI18n();
  return (
    <>
      <section id="pricing" className="py-32 bg-[#fafafa]">
              <div className="max-w-8xl mx-auto px-6">
                  
                  <div className="text-center max-w-4xl mx-auto mb-20 reveal-on-scroll">
                      <h2 className="text-4xl lg:text-6xl font-heading text-gray-900 mb-8 leading-tight">{t('pkg_title')}</h2>
                      <p className="text-lg leading-relaxed font-sans">{t('pkg_subtitle')}</p>
                  </div>
      
                  
                  <div className="reveal-on-scroll">
                      
                      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
                          
                          <div className="lg:w-1/3 space-y-8">
                              <div>
                                  <h3 className="text-5xl font-heading text-gray-900 mb-6">Landing Page</h3>
                                  <div className="space-y-1">
                                      <p className="text-lg">Mulai dari <span className="line-through text-gray-400">Rp.
                                              2.750.000</span></p>
                                      <div className="flex items-baseline gap-2">
                                          <span className="text-gray-900 text-lg">Rp</span>
                                          <span className="text-4xl text-gray-900">1,5 Juta</span>
                                          <span className="text-gray-500 text-lg">/ Tahun</span>
                                      </div>
                                      <p className="text-gray-400 text-sm italic">*konversi perbulan : Rp. 125.000/bulan</p>
                                  </div>
                              </div>
                              <a href="https://wa.me/+6285655639206"
                                  className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                  Buat Landingpage sekarang!
                              </a>
                          </div>
      
                          
                          <div className="lg:w-2/3">
                              <div className="flex flex-col items-start gap-8">
                                  
                                  <div
                                      className="bg-brand rounded-xl p-4 text-white flex items-center gap-6 shadow-lg shadow-brand/20">
                                      <span
                                          className="text-xs font-bold leading-tight font-heading uppercase text-white/90">Best<br />Choice</span>
                                      <div className="w-px h-10 bg-white/20"></div>
                                      <div className="flex items-baseline gap-1">
                                          <span className="text-5xl font-black font-heading">45%</span>
                                          <span className="text-xl font-bold font-heading text-white/80 uppercase">Off</span>
                                      </div>
                                  </div>
                                  
                                  <p className="text-lg leading-relaxed font-sans">{t('pkg_desc')}</p>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                          
                          <div
                              className="lg:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                              <div className="flex gap-8 marquee-content animate-marquee-slow whitespace-nowrap">
                                  
                                  <div className="flex gap-8 items-center">
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/landing-page/1.png" alt="Web 1" className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/landing-page/2.png" alt="Web 2" className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/landing-page/3.png" alt="Web 3" className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/landing-page/4.png" alt="Web 4" className="w-full h-auto" />
                                      </div>
                                  </div>
                              </div>
                              
                              <div
                                  className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                              </div>
                              <div
                                  className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                              </div>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="maximize" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Sederhana dan Efektif</h4>
                              <p className="text-md leading-relaxed font-sans">Ideal untuk kampanye promosi produk atau layanan
                                  tunggal dengan desain yang fokus pada satu tujuan spesifik.</p>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="target" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Optimal untuk Konversi</h4>
                              <p className="text-md leading-relaxed font-sans">Setiap elemen pada landing page didesain untuk
                                  mengarahkan pengunjung melakukan tindakan tertentu, seperti mengisi formulir, mendaftar,
                                  atau melakukan pembelian.</p>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="book-open" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Cocok untuk Pemula</h4>
                              <p className="text-md leading-relaxed font-sans">Dengan biaya yang lebih rendah dibanding website
                                  lengkap, landing page adalah solusi cepat dan efisien untuk memulai kehadiran digital Anda.
                              </p>
                          </div>
                      </div>
                  </div>
      
                  
                  <div className="h-px bg-gray-200 my-24"></div>
      
                  
                  <div className="reveal-on-scroll">
                      
                      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
                          
                          <div className="lg:w-1/3 space-y-8">
                              <div>
                                  <h3 className="text-5xl font-heading text-gray-900 mb-6">Company Profile</h3>
                                  <div className="space-y-1">
                                      <p className="text-lg">Mulai dari <span className="line-through text-gray-400">Rp.
                                              2.900.000</span></p>
                                      <div className="flex items-baseline gap-2">
                                          <span className="text-gray-900 text-lg">Rp</span>
                                          <span className="text-4xl text-gray-900">1,595,000</span>
                                          <span className="text-gray-500 text-lg">/ Tahun</span>
                                      </div>
                                      <p className="text-gray-400 text-sm italic">*konversi perbulan : Rp. 133.000/bulan</p>
                                  </div>
                              </div>
                              <a href="https://wa.me/+6285655639206"
                                  className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                  Buat Company Profile sekarang!
                              </a>
                          </div>
      
                          
                          <div className="lg:w-2/3">
                              <div className="flex flex-col items-start gap-8">
                                  
                                  <div className="flex flex-wrap gap-4">
                                      
                                      <div
                                          className="bg-brand rounded-xl p-4 text-white flex items-center gap-4 shadow-lg shadow-brand/20">
                                          <Icon name="languages" className="w-8 h-8 text-white/90" />
                                          <span
                                              className="text-sm font-bold leading-tight font-heading uppercase text-white/90">Terjemahan<br />Bahasa
                                              Gratis</span>
                                      </div>
                                      
                                      <div
                                          className="bg-brand rounded-xl p-4 text-white flex items-center gap-6 shadow-lg shadow-brand/20">
                                          <span
                                              className="text-xs font-bold leading-tight font-heading uppercase text-white/90">Best<br />Choice</span>
                                          <div className="w-px h-10 bg-white/20"></div>
                                          <div className="flex items-baseline gap-1">
                                              <span className="text-5xl font-black font-heading">45%</span>
                                              <span className="text-xl font-bold font-heading text-white/80 uppercase">Off</span>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <p className="text-lg leading-relaxed font-sans">{t('pkg_desc_cp')}</p>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                          
                          <div
                              className="lg:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                              <div className="flex gap-8 marquee-content animate-marquee-slow whitespace-nowrap">
                                  <div className="flex gap-8 items-center">
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/company-profile/1.png" alt="Web CP 1"
                                              className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/company-profile/2.png" alt="Web CP 2"
                                              className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/company-profile/3.png" alt="Web CP 3"
                                              className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/company-profile/4.png" alt="Web CP 4"
                                              className="w-full h-auto" />
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                              </div>
                              <div
                                  className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                              </div>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="gem" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Citra Profesional</h4>
                              <p className="text-md leading-relaxed font-sans">Mencerminkan profesionalisme dan nilai-nilai
                                  perusahaan Anda, membantu meningkatkan kepercayaan calon klien.</p>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="network" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Informasi Terstruktur</h4>
                              <p className="text-md leading-relaxed font-sans">Memberikan informasi penting tentang perusahaan,
                                  mulai dari sejarah, visi, misi, hingga portofolio layanan atau produk yang Anda tawarkan.
                              </p>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="globe" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Dikenal Lebih Luas</h4>
                              <p className="text-md leading-relaxed font-sans">Dengan kehadiran online, perusahaan Anda dapat
                                  menjangkau pasar yang lebih besar dan memperkuat posisi di industri.</p>
                          </div>
                      </div>
                  </div>
      
                  
                  <div className="h-px bg-gray-200 my-24"></div>
      
                  
                  <div className="reveal-on-scroll">
                      
                      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
                          
                          <div className="lg:w-1/3 space-y-8">
                              <div>
                                  <h3 className="text-5xl font-heading text-gray-900 mb-6">Toko Online</h3>
                                  <div className="space-y-1">
                                      <p className="text-lg">Mulai dari <span className="line-through text-gray-400">Rp.
                                              4.500.000</span></p>
                                      <div className="flex items-baseline gap-2">
                                          <span className="text-gray-900 text-lg">Rp</span>
                                          <span className="text-4xl text-gray-900">2,469,000</span>
                                          <span className="text-gray-500 text-lg">/ Tahun</span>
                                      </div>
                                      <p className="text-gray-400 text-sm italic">*konversi perbulan : Rp. 206.000/bulan</p>
                                  </div>
                              </div>
                              <a href="https://wa.me/+6285655639206"
                                  className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                  Buat Toko Online sekarang!
                              </a>
                          </div>
      
                          
                          <div className="lg:w-2/3">
                              <div className="flex flex-col items-start gap-8">
                                  
                                  <div className="flex flex-wrap gap-4">
                                      
                                      <div
                                          className="bg-brand rounded-xl p-4 text-white flex items-center gap-4 shadow-lg shadow-brand/20">
                                          <Icon name="languages" className="w-8 h-8 text-white/90" />
                                          <span
                                              className="text-sm font-bold leading-tight font-heading uppercase text-white/90">Terjemahan<br />Bahasa
                                              Gratis</span>
                                      </div>
                                      
                                      <div
                                          className="bg-brand rounded-xl p-4 text-white flex items-center gap-6 shadow-lg shadow-brand/20">
                                          <span
                                              className="text-xs font-bold leading-tight font-heading uppercase text-white/90">Best<br />Choice</span>
                                          <div className="w-px h-10 bg-white/20"></div>
                                          <div className="flex items-baseline gap-1">
                                              <span className="text-5xl font-black font-heading">45%</span>
                                              <span className="text-xl font-bold font-heading text-white/80 uppercase">Off</span>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  <p className="text-lg leading-relaxed font-sans">{t('pkg_desc_to')}</p>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                          
                          <div
                              className="lg:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                              <div className="flex gap-8 marquee-content animate-marquee-slow whitespace-nowrap">
                                  <div className="flex gap-8 items-center">
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/toko-online/1.png" alt="Web TO 1" className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/toko-online/2.png" alt="Web TO 2" className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/toko-online/3.png" alt="Web TO 3" className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/toko-online/4.png" alt="Web TO 4" className="w-full h-auto" />
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                              </div>
                              <div
                                  className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                              </div>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="shopping-bag" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Solusi E-commerce Lengkap</h4>
                              <p className="text-md leading-relaxed font-sans">Website toko online kami mendukung fitur
                                  pengelolaan produk, keranjang belanja, pembayaran, dan pengiriman secara terintegrasi.</p>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="building" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Cocok untuk Bisnis Retail</h4>
                              <p className="text-md leading-relaxed font-sans">Sangat direkomendasikan bagi bisnis yang menjual
                                  produk fisik atau layanan langsung kepada pelanggan, memudahkan proses transaksi online.</p>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="credit-card" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Optimasi untuk Penjualan</h4>
                              <p className="text-md leading-relaxed font-sans">Fitur checkout yang mudah digunakan dan integrasi
                                  dengan metode pembayaran lokal membuat pengalaman belanja lebih nyaman bagi konsumen.</p>
                          </div>
                      </div>
                  </div>
      
                  
                  <div className="h-px bg-gray-200 my-24"></div>
      
                  
                  <div className="reveal-on-scroll">
                      
                      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-12">
                          
                          <div className="lg:w-1/3 space-y-8">
                              <div>
                                  <h3 className="text-5xl font-heading text-gray-900 mb-6">Custom website</h3>
                                  <div className="space-y-1">
                                      <h4 className="text-4xl font-heading text-gray-900">Harga Khusus</h4>
                                      <p className="text-gray-400 text-sm italic">*Diskusikan dengan kami untuk harga sesuai
                                          permintaan anda</p>
                                  </div>
                              </div>
                              <a href="https://wa.me/+6285655639206"
                                  className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg hover:bg-gray-800 transition-all shadow-xl shadow-black/10">
                                  Buat Website Custom sekarang!
                              </a>
                          </div>
      
                          
                          <div className="lg:w-2/3">
                              <div className="flex flex-col items-start gap-8">
                                  
                                  <div className="flex flex-wrap gap-4">
                                      
                                      <div
                                          className="bg-brand rounded-xl p-4 text-white flex items-center gap-4 shadow-lg shadow-brand/20">
                                          <Icon name="languages" className="w-8 h-8 text-white/90" />
                                          <span
                                              className="text-sm font-bold leading-tight font-heading uppercase text-white/90">Terjemahan<br />Bahasa
                                              Gratis</span>
                                      </div>
                                  </div>
                                  
                                  <p className="text-lg leading-relaxed font-sans">{t('pkg_desc_custom')}</p>
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                          
                          <div
                              className="lg:col-span-2 bg-white rounded-[2rem] border-2 border-gray-300 p-6 flex items-center overflow-hidden relative marquee-container">
                              <div className="flex gap-8 marquee-content animate-marquee-slow whitespace-nowrap">
                                  <div className="flex gap-8 items-center">
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/custom-website/1.png" alt="Custom Web 1"
                                              className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/custom-website/2.png" alt="Custom Web 2"
                                              className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/custom-website/3.png" alt="Custom Web 3"
                                              className="w-full h-auto" />
                                      </div>
                                      <div
                                          className="w-[450px] rounded-xl overflow-hidden shadow-2xl border border-gray-100 flex-shrink-0">
                                          <img src="/assets/products/custom-website/4.png" alt="Custom Web 4"
                                              className="w-full h-auto" />
                                      </div>
                                  </div>
                              </div>
                              <div
                                  className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10">
                              </div>
                              <div
                                  className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10">
                              </div>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="palette" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Desain dan Fitur Sepenuhnya Kustom</h4>
                              <p className="text-md leading-relaxed font-sans">Solusi yang fleksibel dan dirancang khusus untuk
                                  memenuhi kebutuhan dan tujuan spesifik bisnis Anda.</p>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="crosshair" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Integrasi Sistem yang Komprehensif</h4>
                              <p className="text-md leading-relaxed font-sans">Dapat diintegrasikan dengan sistem manajemen
                                  perusahaan, seperti ERP, CRM, atau platform teknologi lainnya untuk mendukung efisiensi
                                  operasional.</p>
                          </div>
      
                          
                          <div className="bg-white rounded-[2rem] border-2 border-gray-300 p-10">
                              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-8">
                                  <Icon name="shopping-basket" className="w-6 h-6 text-gray-900" />
                              </div>
                              <h4 className="text-2xl font-heading mb-4">Ideal untuk Bisnis dengan Kebutuhan Khusus</h4>
                              <p className="text-md leading-relaxed font-sans">Direkomendasikan bagi perusahaan yang memerlukan
                                  desain, fungsionalitas, atau integrasi yang sangat spesifik, serta solusi yang mampu
                                  berkembang sesuai kebutuhan.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </>
  );
}
