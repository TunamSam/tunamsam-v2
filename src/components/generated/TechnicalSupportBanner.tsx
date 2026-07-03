export function TechnicalSupportBanner() {
  return (
    <>
      <section className="relative h-[600px] flex items-center overflow-hidden sticky top-0 z-0">
              
              <div className="absolute inset-0 z-[-1] bg-[url('/assets/technical-support-banner.png')] bg-cover bg-center">
                  <div className="absolute inset-0 bg-black/60"></div>
              </div>
      
              
              <svg className="absolute right-0 top-0 h-full w-auto text-brand/20 z-0 opacity-50 pointer-events-none"
                  viewBox="0 0 400 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M400 0C300 100 200 50 100 200C0 350 150 500 50 700C-50 900 100 800 100 800H400V0Z"
                      fill="currentColor" />
                  <path d="M400 100C320 180 240 140 160 260C80 380 200 500 120 660C40 820 160 740 160 740H400V100Z"
                      stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
      
              
              <div className="max-w-8xl mx-auto px-6 w-full relative z-10">
                  <div className="max-w-3xl reveal-on-scroll">
                      <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
                          Kami membantu membuat website, mengelola, dan menyelesaikan hal teknis.
                      </h2>
                      <p className="text-xl text-white/80 font-sans leading-relaxed">
                          TunamSam menyediakan layanan pembuatan dan pengelolaan website lengkap, serta menangani hal teknis
                          agar bisnis Anda tumbuh dengan kehadiran online yang kuat dan efisien.
                      </p>
                  </div>
              </div>
          </section>
    </>
  );
}
