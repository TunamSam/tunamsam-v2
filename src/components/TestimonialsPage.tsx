import { Icon } from './Icon';

type Testimonial = {
  quote: string;
  author: string;
  website: string;
  websiteUrl?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Overall semuanya masih bagus dan sangat memuaskan. Pengerjaan lumayan cepat dan tanggap, saya sudah beberapa kali meminta bantuan, hasilnya sangat memuaskan.',
    author: 'Adur',
    website: 'www.kurniaphone.id',
    websiteUrl: 'https://www.kurniaphone.id',
  },
  {
    quote:
      'Website company profile kami jadi terlihat jauh lebih profesional. Tim TunamSam responsif dan mudah diajak diskusi dari awal hingga launching.',
    author: 'Mbak Win',
    website: 'Nasi Goreng Mbak Win',
  },
  {
    quote:
      'Toko online kami langsung bisa berjalan dengan lancar. Fitur pembayaran dan pengelolaan produknya mudah dipahami, sangat membantu penjualan.',
    author: 'Rizky',
    website: 'www.tokorizky.id',
  },
  {
    quote:
      'Landing page yang dibuat fokus ke konversi dan hasilnya terasa. Banyak pengunjung yang langsung menghubungi lewat WhatsApp setelah website live.',
    author: 'Dewi',
    website: 'www.dewiconsulting.com',
  },
  {
    quote:
      'Layanannya top banget. Tampilannya modern, kodenya bersih, dan SEO-nya juga diperhatikan dengan baik. Puas banget dengan hasilnya!',
    author: 'Budi',
    website: 'Budi Tech',
  },
  {
    quote:
      'Saya sangat terkesan dengan komitmen mereka terhadap kualitas. Proyek selesai lebih cepat dari jadwal dan hasilnya di atas ekspektasi.',
    author: 'Siti',
    website: 'Klinik Sehat Siti',
  },
  {
    quote:
      'Desain UI/UX-nya luar biasa! Pelanggan kami sering memuji betapa mudahnya menggunakan website kami sekarang. Terima kasih TunamSam!',
    author: 'Agus',
    website: 'www.agusfashion.id',
    websiteUrl: 'https://www.agusfashion.id',
  },
];

export function TestimonialsPage() {
    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Hero Section */}
            <div className="pt-20 md:pt-32 pb-16 md:pb-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10 reveal-on-scroll">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 text-gray-900 leading-tight">
                        Apa Kata Mereka<br className="hidden md:block" />Tentang Kami?
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-600 font-light leading-relaxed mb-12 md:mb-16">
                        Kepercayaan dan kepuasan klien adalah prioritas utama kami. Berikut adalah pengalaman mereka berkolaborasi dengan TunamSam.
                    </p>
                </div>
                
                {/* Hero Image Collage Placeholder */}
                <div className="max-w-6xl mx-auto px-6 relative z-10 reveal-on-scroll stagger-1">
                    <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] bg-gray-50 overflow-hidden flex flex-col items-center justify-center text-gray-400 border-b-0 md:border-b-4 border-black">
                        <img src="/assets/testimoni-assets/testimoni.webp" alt="Website Collage" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Testimonials Grid & Header */}
            <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
                {/* Testimonials Header */}
                <div className="text-center max-w-4xl mx-auto pt-16 md:pt-24 pb-12 md:pb-16 reveal-on-scroll">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading mb-4 text-gray-900">
                        Kisah Sukses Bersama TunamSam
                    </h2>
                    <p className="text-sm md:text-lg text-gray-600">
                        Bukan sekadar janji, ini adalah bukti nyata dari mereka yang telah mempercayakan perjalanan digitalnya kepada kami.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
                    {TESTIMONIALS.map((t, idx) => {
                        const styleIdx = idx % 5;
                        const colSpanClass = styleIdx === 0 ? 'md:col-span-3' 
                                           : styleIdx === 1 ? 'md:col-span-3' 
                                           : styleIdx === 2 ? 'md:col-span-2' 
                                           : styleIdx === 3 ? 'md:col-span-4'
                                           : 'md:col-span-6'; // full width for variation
                        
                        return (
                            <div key={idx} className={`col-span-1 ${colSpanClass} bg-gray-50 p-8 md:p-12 rounded-3xl reveal-on-scroll border border-gray-100 hover:-translate-y-2 transition-all duration-300`}>
                                <div className="flex text-amber-400 mb-6 space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Icon key={i} name="star" className="w-5 h-5 fill-current" />
                                    ))}
                                </div>
                                <blockquote className="text-xl md:text-2xl text-gray-900 font-heading leading-relaxed mb-8">
                                    "{t.quote}"
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center font-bold text-xl">
                                        {t.author.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900">{t.author}</h4>
                                        {t.websiteUrl ? (
                                            <a href={t.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline text-sm font-medium">
                                                {t.website}
                                            </a>
                                        ) : (
                                            <span className="text-gray-500 text-sm">{t.website}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
