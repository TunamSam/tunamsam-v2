import { Icon } from './Icon';

export function AboutPage() {

    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Hero Section */}
            <div className="relative pt-32 md:pt-28 pb-24 md:pb-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/assets/about-me-assets/about-me.webp" 
                        alt="Background TunamSam" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                
                <div className="max-w-8xl mx-auto px-6 relative z-10">
                    <div className="max-w-6xl">
                        <p className="text-brand-light font-bold text-sm md:text-base uppercase tracking-widest mb-4 reveal-on-scroll">
                            Tentang Kami
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 reveal-on-scroll stagger-1 leading-tight text-white/95">
                            Merancang Solusi Digital, Mengatasi Kendala Teknis, dan Bersinergi Sebagai Mitra Bisnis Jangka Panjang Anda.
                        </h1>
                    </div>
                </div>
            </div>

            {/* Visi dan Misi & Komitmen Kami */}
            <div className="max-w-8xl mx-auto px-6 py-20 md:py-32">
                {/* Visi dan Misi */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 md:mb-32">
                    <div className="reveal-on-scroll">
                        <h2 className="text-3xl md:text-5xl font-heading mb-6 leading-tight text-gray-900">
                            Visi dan Misi
                        </h2>
                        <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-snug">
                            Menjadikan pelaku usaha Go Digital dan mempunyai identitas Online.
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            TunamSam berkomitmen mendukung transformasi digital bagi pelaku usaha melalui layanan pembuatan website yang modern dan responsif. Kami menyediakan platform yang mudah digunakan untuk memperkuat kehadiran online mereka, membantu mereka mengadopsi teknologi digital dengan efisien dan efektif. Dengan fokus pada kebutuhan unik setiap bisnis, kami membangun website yang mencerminkan identitas mereka, memastikan mereka menonjol di pasar digital.
                        </p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-lg reveal-on-scroll stagger-1 h-[350px] md:h-[450px]">
                        <img 
                            src="/assets/about-me-assets/about-me2.webp" 
                            alt="Tim berdiskusi" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Komitmen Kami */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 lg:order-1 rounded-3xl overflow-hidden shadow-lg reveal-on-scroll h-[350px] md:h-[450px]">
                        <img 
                            src="/assets/about-me-assets/about-me1.webp" 
                            alt="Jabat tangan" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2 reveal-on-scroll stagger-1">
                        <h2 className="text-3xl md:text-5xl font-heading mb-6 leading-tight text-gray-900">
                            Komitmen Kami
                        </h2>
                        <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-snug">
                            Kami ingin menjadi partner jangka panjang Anda bukan hanya vendor sekali pakai.
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Kami memahami bahwa website adalah investasi penting dalam pertumbuhan bisnis. Maka, setiap proyek kami kerjakan dengan pendekatan strategis dan rasa tanggung jawab tinggi.
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="max-w-8xl mx-auto px-6 py-20 md:py-32">
                <div className="text-center mb-16 reveal-on-scroll">
                    <h2 className="text-3xl md:text-5xl font-heading text-gray-900">Nilai Utama Perusahaan</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8">
                    {/* Card 1: Inovasi (span 2) */}
                    <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="lightbulb" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">Inovasi</h4>
                        <p className="leading-relaxed text-sm md:text-base">Kami terus mengeksplorasi teknologi baru agar solusi yang diberikan relevan dan kompetitif.</p>
                    </div>

                    {/* Card 2: Berorientasi Hasil (span 2) */}
                    <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll stagger-1 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="target" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">Berorientasi Hasil</h4>
                        <p className="leading-relaxed text-sm md:text-base">Fokus kami adalah konversi, efisiensi, dan pertumbuhan nyata untuk klien.</p>
                    </div>

                    {/* Card 3: Kemitraan (span 2) */}
                    <div className="col-span-1 md:col-span-2 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll stagger-2 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="share-2" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">Kemitraan</h4>
                        <p className="leading-relaxed text-sm md:text-base">Kami percaya bisnis terbaik dibangun melalui kolaborasi yang saling memahami.</p>
                    </div>

                    {/* Card 4: Keamanan & Kualitas (span 3) */}
                    <div className="col-span-1 md:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="fingerprint" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">Keamanan & Kualitas</h4>
                        <p className="leading-relaxed text-sm md:text-base">Website Anda dibangun dengan standar keamanan dan kualitas tinggi.</p>
                    </div>

                    {/* Card 5: Edukasi & Transparansi (span 3) */}
                    <div className="col-span-1 md:col-span-3 bg-white p-8 rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] reveal-on-scroll stagger-1 hover:shadow-md transition-shadow">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                            <Icon name="handshake" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h4 className="text-xl md:text-2xl font-medium text-gray-900 mb-4">Edukasi & Transparansi</h4>
                        <p className="leading-relaxed text-sm md:text-base">Kami membimbing klien memahami proses dan pilihan mereka.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
