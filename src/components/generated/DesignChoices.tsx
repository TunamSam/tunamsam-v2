import { ArrowUpRight } from 'lucide-react';

export function DesignChoices() {
  return (
    <>
      <section id="pilihan-desain" className="py-32 bg-black overflow-hidden relative z-10">
              <div className="max-w-8xl mx-auto px-6">
                  
                  <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 reveal-on-scroll">
                      <h2 className="text-4xl lg:text-5xl font-heading text-white lg:w-1/2 leading-tight">
                          Pilihan Desain website yang memukau langkah awal menuju kesuksesan
                      </h2>
                      <p className="text-gray-400 text-md lg:text-lg leading-relaxed lg:w-1/2">
                          Tampilan visual yang mengesankan dan pengalaman pengguna yang menyenangkan adalah kunci untuk
                          meninggalkan kesan positif dan mendalam. Setiap elemen dari desain kami, dipilih dengan hati-hati
                          untuk memastikan bahwa website Anda tidak hanya terlihat profesional, tetapi juga efektif dalam
                          mencapai tujuan bisnis Anda.
                      </p>
                  </div>
      
                  
                  <div className="flex flex-col gap-6 reveal-on-scroll">
                      
                      <div
                          className="relative rounded-3xl overflow-hidden aspect-[16/9] lg:aspect-[21/9] bg-gray-900 group cursor-pointer">
                          <video autoPlay loop muted playsInline
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                              <source src="/assets/videos/landingpage.mp4" type="video/mp4" />
                              Your browser does not support the video tag.
                          </video>
                          
                          <div className="absolute bottom-0 left-0 w-full">
                              
                              <div
                                  className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                              </div>
                              
                              <div
                                  className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                              </div>
                              
                              <div className="relative z-10 w-full p-8 lg:p-10 flex items-center gap-3">
                                  <h3 className="text-white text-2xl lg:text-4xl font-sans">
                                      Landingpage
                                  </h3>
                                  <ArrowUpRight
                                      className="w-8 h-8 lg:w-10 lg:h-10 text-white border-2 border-white rounded-full p-1.5 transition-transform duration-500 group-hover:rotate-45"
                                  />
                              </div>
                          </div>
                      </div>
      
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          
                          <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-900 group cursor-pointer">
                              <video autoPlay loop muted playsInline
                                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                  <source src="/assets/videos/company-profile.mp4" type="video/mp4" />
                              </video>
                              <div className="absolute bottom-0 left-0 w-full">
                                  <div
                                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                  </div>
                                  
                                  <div
                                      className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                  </div>
                                  <div className="relative z-10 w-full p-8 flex items-center gap-3">
                                      <h3 className="text-white text-xl lg:text-3xl font-sans">
                                          Company Profile
                                      </h3>
                                      <ArrowUpRight
                                          className="w-6 h-6 lg:w-8 lg:h-8 text-white border-2 border-white rounded-full p-1 transition-transform duration-500 group-hover:rotate-45"
                                      />
                                  </div>
                              </div>
                          </div>
      
                          
                          <div className="relative rounded-3xl overflow-hidden aspect-video bg-gray-900 group cursor-pointer">
                              <video autoPlay loop muted playsInline
                                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                                  <source src="/assets/videos/toko-online.mp4" type="video/mp4" />
                              </video>
                              <div className="absolute bottom-0 left-0 w-full">
                                  <div
                                      className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500">
                                  </div>
                                  
                                  <div
                                      className="absolute inset-0 bg-gradient-to-r from-brand-dark to-brand-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                  </div>
                                  <div className="relative z-10 w-full p-8 flex items-center gap-3">
                                      <h3 className="text-white text-xl lg:text-3xl font-sans">
                                          Toko Online
                                      </h3>
                                      <ArrowUpRight
                                          className="w-6 h-6 lg:w-8 lg:h-8 text-white border-2 border-white rounded-full p-1 transition-transform duration-500 group-hover:rotate-45"
                                      />
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      
                  
                  <div className="text-center mt-16 reveal-on-scroll">
                      <a href="#"
                          className="inline-block bg-white text-black px-8 py-3 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
                          Lihat pilihan desain lainnya
                      </a>
                  </div>
              </div>
          </section>
    </>
  );
}
