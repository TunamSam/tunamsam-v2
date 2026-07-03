import { Icon } from '../Icon';
import { TestimonialCarousel } from '../TestimonialCarousel';

export function AdditionalServices() {
  return (
    <>
      <section id="layanan-tambahan" className="py-32 bg-white relative z-10">
              <div className="max-w-8xl mx-auto px-6">
                  
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-20 reveal-on-scroll">
                      <h2 className="text-3xl lg:text-5xl font-heading text-gray-900 lg:w-1/2 leading-tight">
                          Layanan Tambahan untuk Optimasi website Anda
                      </h2>
                      <p className="text-gray-800 text-md lg:text-base leading-relaxed lg:w-1/2 self-center">
                          Kami menyediakan berbagai layanan tambahan yang dirancang untuk meningkatkan performa dan
                          efektivitas website Anda. Berikut adalah beberapa pilihan layanan ekstra yang dapat Anda tambahkan.
                      </p>
                  </div>
      
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 reveal-on-scroll">
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="settings-2" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading">Perbaikan Website</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              Kami menawarkan layanan perbaikan untuk memastikan website Anda selalu berjalan optimal. Mulai
                              dari memperbaiki bug, mengatasi masalah performa, hingga mengatasi error coding, tim kami akan
                              memastikan website Anda berfungsi dengan lancar.
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  Dapatkan Layanan
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="search" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">SEO (Search Engine Optimization)</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              Dapatkan peringkat terbaik di mesin pencari dengan layanan SEO kami. Kami melakukan optimasi
                              pada konten dan struktur situs web Anda untuk meningkatkan visibilitas di Google dan
                              mendatangkan lebih banyak lalu lintas organik ke website Anda.
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  Dapatkan Layanan
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="sliders-horizontal" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">Maintenance Website</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              Jaga website Anda selalu up-to-date dan aman dengan layanan maintenance kami. Kami menawarkan
                              pembaruan rutin, backup data, serta optimasi keamanan untuk memastikan situs Anda berjalan
                              stabil dan terlindungi dari ancaman siber.
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  Dapatkan Layanan
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="share-2" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">Manajemen Media Sosial (Sosmed)</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              Optimalkan kehadiran bisnis Anda di media sosial. Kami membantu Anda dalam mengelola akun-akun
                              media sosial, menciptakan konten yang relevan, serta menghubungkan media sosial dengan website
                              untuk meningkatkan engagement dan brand awareness.
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  Dapatkan Layanan
                              </a>
                          </div>
                      </div>
      
                      
                      <div className="flex flex-col gap-5">
                          <Icon name="layout-dashboard" className="w-8 h-8 text-gray-800" />
                          <h3 className="text-2xl font-heading text-gray-900">Manajemen Iklan Digital (Ads)</h3>
                          <p className="text-gray-800 text-md leading-relaxed font-sans">
                              Tingkatkan hasil pemasaran online Anda dengan layanan manajemen iklan digital. Kami mengelola
                              kampanye iklan di platform seperti Google Ads dan media sosial, memastikan bahwa anggaran iklan
                              Anda digunakan secara efektif untuk menghasilkan ROI yang optimal.
                          </p>
                          <div>
                              <a href="#contact"
                                  className="inline-block border border-gray-900 text-gray-900 text-md font-bold px-6 py-2.5 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300">
                                  Dapatkan Layanan
                              </a>
                          </div>
                      </div>
      
                  </div>

                  <TestimonialCarousel />
              </div>
          </section>
    </>
  );
}
