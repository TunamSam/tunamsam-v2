import { Icon } from './Icon';
import { useI18n } from '../context/I18nContext';
import { CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PACKAGES = [
    {
        id: 'landing-page',
        title: 'Landing Page',
        price: '550 ribu',
        period: '/ tahun',
        badge: 'Best Choice',
        subtitle: 'Langganan 3 tahun, bayar di awal hemat 27%',
        otherOptions: [
            { period: '2 Tahun', price: 'Rp. 650 ribu', suffix: '/Tahun (Hemat 14%)' },
            { period: '1 Tahun', price: 'Rp. 750 ribu', suffix: '/Tahun' }
        ],
        images: [
            '/assets/products/landing-page/1.webp',
            '/assets/products/landing-page/2.webp',
            '/assets/products/landing-page/3.webp',
        ],
        btnText: 'Buat Landing Page sekarang!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'maximize', title: 'Sederhana dan Efektif', desc: 'Ideal untuk kampanye promosi produk atau layanan tunggal dengan desain yang fokus pada satu tujuan spesifik.' },
            { icon: 'target', title: 'Optimal untuk Konversi', desc: 'Setiap elemen pada landing page didesain untuk mengarahkan pengunjung melakukan tindakan tertentu, seperti mengisi formulir, mendaftar, atau melakukan pembelian.' },
            { icon: 'book-open', title: 'Cocok untuk Pemula', desc: 'Dengan biaya yang lebih rendah dibanding website lengkap, landing page adalah solusi cepat dan efisien untuk memulai kehadiran digital Anda.' },
        ],
        gets: [
            '1 halaman landing page dengan desain eksklusif',
            '3x revisi desain sebelum launching',
            'Gratis hosting & domain 1 tahun',
            'Optimasi Mobile-Friendly & SEO dasar',
            'Formulir kontak atau CTA (Call-to-Action) sesuai kebutuhan',
            'Integrasi Google Analytics & Facebook Pixel untuk tracking performa',
        ],
        targets: [
            'Promosi Produk Baru',
            'Pre-Order atau Launching Campaign',
            'Kampanye Iklan Digital (Google Ads/FB Ads)',
            'Event atau Webinar',
            'Pebisnis yang Baru Mulai Online',
            'Startup atau UMKM yang Baru Memulai Kehadiran Digital',
        ]
    },
    {
        id: 'company-profile',
        title: 'Company Profile',
        price: '1.5 juta',
        period: '/ tahun',
        badge: 'Popular',
        subtitle: 'Langganan 1 tahun, bayar di awal hemat 15%',
        images: [
            '/assets/products/company-profile/1.webp',
            '/assets/products/company-profile/2.webp',
            '/assets/products/company-profile/3.webp',
        ],
        btnText: 'Buat Company Profile sekarang!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'gem', title: 'Profesional & Terpercaya', desc: 'Membangun citra profesional yang kuat untuk bisnis Anda di mata klien dan mitra kerja.' },
            { icon: 'network', title: 'Informasi Terstruktur', desc: 'Menampilkan portofolio, layanan, dan informasi perusahaan dengan rapi dan mudah diakses.' },
            { icon: 'globe', title: 'Jangkauan Lebih Luas', desc: 'Memperluas jangkauan bisnis Anda ke pasar yang lebih besar melalui kehadiran digital yang solid.' },
        ],
        gets: [
            'Hingga 5 halaman (Home, About, Services, Portfolio, Contact)',
            'Desain kustom sesuai identitas brand',
            'Gratis hosting & domain 1 tahun',
            'Optimasi SEO on-page',
            'Integrasi media sosial',
            'Dukungan teknis selama 3 bulan',
        ],
        targets: [
            'Perusahaan B2B & B2C',
            'Agensi Kreatif & Konsultan',
            'Klinik & Rumah Sakit',
            'Firma Hukum & Akuntan',
            'Kontraktor & Properti',
            'Lembaga Pendidikan',
        ]
    },
    {
        id: 'toko-online',
        title: 'Toko Online',
        price: '2.4 juta',
        period: '/ tahun',
        badge: 'Business',
        subtitle: 'Langganan 1 tahun, fitur e-commerce lengkap',
        images: [
            '/assets/products/toko-online/1.webp',
            '/assets/products/toko-online/2.webp',
            '/assets/products/toko-online/3.webp',
        ],
        btnText: 'Buat Toko Online sekarang!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'shopping-bag', title: 'Belanja 24/7', desc: 'Toko Anda buka 24 jam sehari, 7 hari seminggu, tanpa batasan waktu dan lokasi.' },
            { icon: 'building', title: 'Manajemen Produk Mudah', desc: 'Sistem pengelolaan stok, harga, dan varian produk yang mudah dipahami.' },
            { icon: 'credit-card', title: 'Integrasi Pembayaran', desc: 'Terhubung dengan berbagai metode pembayaran (transfer bank, e-wallet, kartu kredit) dan kurir.' },
        ],
        gets: [
            'Sistem E-Commerce lengkap (Cart, Checkout, Payment Gateway)',
            'Upload hingga 50 produk awal',
            'Gratis hosting & domain 1 tahun',
            'Kalkulasi ongkos kirim otomatis',
            'Laporan penjualan dasar',
            'Pelatihan penggunaan sistem',
        ],
        targets: [
            'Toko Retail & Fashion',
            'Penjual Gadget & Elektronik',
            'Toko Buku & Alat Tulis',
            'Kosmetik & Skincare',
            'F&B (Makanan & Minuman Kemasan)',
            'Distributor Produk',
        ]
    },
    {
        id: 'custom-website',
        title: 'Custom Website',
        price: 'Hubungi Kami',
        period: '',
        badge: 'Enterprise',
        subtitle: 'Solusi spesifik sesuai kebutuhan sistem Anda',
        images: [
            '/assets/products/custom-website/1.webp',
            '/assets/products/custom-website/2.webp',
            '/assets/products/custom-website/3.webp',
        ],
        btnText: 'Konsultasi Custom Website!',
        btnLink: 'https://wa.me/+6285655639206',
        reasons: [
            { icon: 'palette', title: 'Desain Unik', desc: 'Tampilan visual yang dibuat dari nol, 100% eksklusif untuk brand Anda.' },
            { icon: 'crosshair', title: 'Fitur Spesifik', desc: 'Pengembangan fitur khusus yang tidak ada di platform standar (misal: sistem booking kompleks, portal member).' },
            { icon: 'shopping-basket', title: 'Skalabilitas Tinggi', desc: 'Dibangun dengan arsitektur yang siap menampung pertumbuhan trafik dan data di masa depan.' },
        ],
        gets: [
            'Analisis kebutuhan sistem mendalam',
            'UI/UX Design eksklusif (Figma prototype)',
            'Pengembangan fitur custom (Frontend & Backend)',
            'Pengujian keamanan dan performa',
            'Server setup & deployment',
            'Maintenance & Support jangka panjang',
        ],
        targets: [
            'Startup Teknologi',
            'Marketplace Niche',
            'Portal Berita & Media Berskala Besar',
            'Sistem Manajemen Internal (ERP/CRM mini)',
            'Platform E-Learning',
            'Sistem Booking & Reservasi Kompleks',
        ]
    }
];

export function PricingPage() {
    const [activeSection, setActiveSection] = useState('landing-page');
    const [expandedOptions, setExpandedOptions] = useState<Record<string, boolean>>({});

    const toggleOptions = (id: string) => {
        setExpandedOptions(prev => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            
            // Find the last section that we have scrolled past
            for (let i = PACKAGES.length - 1; i >= 0; i--) {
                const section = document.getElementById(PACKAGES[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(PACKAGES[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 100; // offset for header
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Header Section */}
            <div className="pt-24 md:pt-32 pb-6 md:pb-8 bg-white">
                <div className="text-center max-w-4xl mx-auto px-6">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-heading mb-4 text-gray-900">
                        Paket Harga Jasa Pembuatan Website TunamSam
                    </h1>
                    <p className="text-sm md:text-lg max-w-2xl mx-auto">
                        Kami menyediakan Paket Pembuatan Website sesuai kebutuhan dan kategori bisnis Anda.
                    </p>
                </div>
            </div>

            <div className="max-w-8xl mx-auto px-6">
                {/* Anchor Navigation */}
                <div className="pt-6 pb-4 border-b border-gray-100 flex md:justify-center mb-10 md:mb-16 overflow-x-auto bg-white snap-x">
                    <div className="flex gap-4 md:gap-8 min-w-max px-2 md:px-0">
                        {PACKAGES.map((pkg) => (
                            <button
                                key={pkg.id}
                                onClick={() => scrollToSection(pkg.id)}
                                className={`px-2 py-2 text-sm md:text-md font-medium hover:text-brand transition-colors relative group ${activeSection === pkg.id ? 'text-brand' : 'text-gray-500'}`}
                            >
                                {pkg.title}
                                <div className={`absolute bottom-0 left-0 w-full h-[2px] bg-brand transition-transform origin-left ${activeSection === pkg.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Packages List */}
                <div className="space-y-24 md:space-y-32">
                    {PACKAGES.map((pkg) => (
                        <div key={pkg.id} id={pkg.id} className="scroll-mt-32">
                            {/* Top Row: Info & Previews */}
                            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-20 items-start">
                                {/* Left Column: Pricing Info */}
                                <div className="lg:w-1/3 flex flex-col items-start gap-4 w-full">
                                    <h3 className="text-4xl md:text-5xl font-heading font-normal text-gray-900">{pkg.title}</h3>
                                    
                                    <div className="flex flex-col gap-1">
                                        <span className="text-base md:text-lg">Mulai dari</span>
                                        <div className="flex items-center gap-2 flex-wrap">
                                            {pkg.price !== 'Hubungi Kami' && <span className="text-sm md:text-base">Rp</span>}
                                            <span className="text-3xl md:text-4xl tracking-tight">{pkg.price}</span>
                                            <span className="text-sm md:text-md">{pkg.period}</span>
                                            
                                            {pkg.badge && (
                                                <span className="ml-2 bg-[#00a859] text-white text-sm font-bold px-3 py-1 rounded-md tracking-wide">
                                                    {pkg.badge}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm mt-1">{pkg.subtitle}</p>
                                    
                                    <div className="w-full h-[1px] bg-gray-200 my-4"></div>

                                    <button 
                                        onClick={() => toggleOptions(pkg.id)}
                                        className="text-gray-900 text-sm flex items-center gap-1 font-medium hover:text-brand transition-colors"
                                    >
                                        {expandedOptions[pkg.id] ? 'Sembunyikan opsi' : 'Lihat opsi lainnya'}
                                        <Icon name={expandedOptions[pkg.id] ? 'chevron-up' : 'chevron-down'} className="w-4 h-4 text-gray-500" />
                                    </button>

                                    <AnimatePresence>
                                        {expandedOptions[pkg.id] && (pkg as any).otherOptions && (
                                            <motion.div 
                                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                                animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
                                                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="flex flex-col gap-3 text-sm md:text-base text-gray-800 overflow-hidden"
                                            >
                                                {(pkg as any).otherOptions.map((opt: any, i: number) => (
                                                    <div key={i} className="flex items-center gap-1">
                                                        <span className="w-16">{opt.period}</span>
                                                        <span className="font-bold">{opt.price}</span>
                                                        <span>{opt.suffix}</span>
                                                    </div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                    
                                    <a 
                                        href={pkg.btnLink}
                                        className="mt-6 inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-md font-medium hover:bg-gray-800 transition-colors"
                                    >
                                        {pkg.btnText}
                                        <Icon name="rocket" className="w-4 h-4" />
                                    </a>
                                </div>

                                {/* Right Column: Image Previews */}
                                <div className="lg:w-2/3 w-full flex items-center overflow-hidden rounded-2xl bg-white border border-gray-100 p-2 shadow-sm relative marquee-container">
                                    <div className="flex marquee-content animate-marquee-slow">
                                        <div className="flex gap-3 md:gap-4 items-center flex-shrink-0 pr-3 md:pr-4">
                                            {pkg.images.map((img, idx) => (
                                                <div key={idx} className="w-[240px] md:w-[350px] lg:w-[400px] rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
                                                    <img src={img} alt={`${pkg.title} preview ${idx + 1}`} className="w-full h-auto object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-3 md:gap-4 items-center flex-shrink-0 pr-3 md:pr-4" aria-hidden="true">
                                            {pkg.images.map((img, idx) => (
                                                <div key={`dup-${idx}`} className="w-[240px] md:w-[350px] lg:w-[400px] rounded-xl overflow-hidden flex-shrink-0 shadow-sm border border-gray-50">
                                                    <img src={img} alt="" className="w-full h-auto object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Reasons Section */}
                            <div className="mb-16 md:mb-20">
                                <h3 className="text-2xl md:text-3xl font-heading text-center mb-8 md:mb-10 text-gray-900 px-4">
                                    Alasan {pkg.title} Tepat untuk Anda
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                                    {pkg.reasons.map((reason, idx) => (
                                        <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="mb-4">
                                                <Icon name={reason.icon as any} className="w-8 h-8 text-gray-900" strokeWidth={1.5} />
                                            </div>
                                            <h4 className="text-xl font-medium text-gray-900 mb-2">{reason.title}</h4>
                                            <p className="text-md leading-relaxed">{reason.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Features & Target Section */}
                            <div className="mb-16 md:mb-20">
                                <h3 className="text-2xl md:text-3xl font-heading text-center mb-8 md:mb-10 px-4">
                                    Apa yang Anda Dapatkan & Untuk Siapa?
                                </h3>
                                <div className="bg-gray-50 rounded-3xl p-6 md:p-12 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                    
                                    {/* Yang Anda dapatkan */}
                                    <div>
                                        <h4 className="text-md md:text-lg font-medium mb-4 md:mb-6 border-b border-gray-200 pb-3 md:pb-4">Yang Anda dapatkan</h4>
                                        <ul className="space-y-4">
                                            {pkg.gets.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm">
                                                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Cocok untuk industri */}
                                    <div>
                                        <h4 className="text-md md:text-lg font-medium mb-4 md:mb-6 border-b border-gray-200 pb-3 md:pb-4">Cocok untuk berbagai Industri</h4>
                                        <ul className="space-y-4">
                                            {pkg.targets.map((item, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-sm">
                                                    <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                </div>
                            </div>

                            {/* Bottom CTA Banner */}
                            <div className="bg-[#0b1c11] rounded-3xl p-6 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 mt-8 md:mt-12 bg-gradient-to-r from-[#0b1c11] to-[#0d2616] overflow-hidden relative text-center md:text-left">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full"></div>
                                <div className="relative z-10">
                                    <h3 className="text-white text-xl md:text-3xl font-heading font-medium mb-2 md:mb-3">
                                        Mulai dari Sini, Bawa Bisnismu ke Dunia Digital.
                                    </h3>
                                    <p className="text-gray-400 text-sm md:text-md">
                                        {pkg.title} simpel, cepat jadi, dan langsung bisa dipakai promosi
                                    </p>
                                </div>
                                <a 
                                    href={pkg.btnLink}
                                    className="relative z-10 w-full md:w-auto shrink-0 bg-white text-black px-6 py-3 md:py-4 rounded-full text-sm md:text-base font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                                >
                                    {pkg.btnText}
                                    <Icon name="arrow-up-right" className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
