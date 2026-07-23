import { Icon } from './Icon';

export function ContactPage() {
    return (
        <div className="w-full bg-white pb-24 text-gray-900 font-sans">
            {/* Hero Section */}
            <div className="pt-32 md:pt-40 pb-16 md:pb-24">
                <div className="max-w-7xl mx-auto px-6 text-center reveal-on-scroll">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight text-gray-900">
                        Mulai Perjalanan Digital Anda<br className="hidden md:block" /> Bersama TunamSam
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        Kami siap membantu Anda membangun website profesional yang sesuai kebutuhan bisnis. Baik untuk konsultasi awal, pertanyaan teknis, atau penawaran kerjasama — kami siap mendengar.
                    </p>
                </div>
            </div>

            {/* Contact Options Cards */}
            <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Sales Card */}
                    <div className="p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-brand/30 transition-colors reveal-on-scroll shadow-sm hover:shadow-md bg-white flex flex-col h-full">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
                            <Icon name="message-square" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">Sales</h3>
                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm md:text-base">
                            Hubungi tim sales kami untuk konsultasi pembuatan website, informasi paket layanan, atau penawaran kerja sama. Kami siap membantu Anda memilih solusi terbaik sesuai kebutuhan bisnis.
                        </p>
                        <a href="https://wa.me/+6285655639206" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-brand transition-colors w-fit">
                            <Icon name="message-circle" className="w-4 h-4" />
                            Chat Admin
                        </a>
                    </div>

                    {/* Support Card */}
                    <div className="p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-brand/30 transition-colors reveal-on-scroll stagger-1 shadow-sm hover:shadow-md bg-white flex flex-col h-full">
                        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900 border border-gray-100">
                            <Icon name="code" className="w-7 h-7" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-gray-900 mb-3">Support</h3>
                        <p className="text-gray-600 mb-8 flex-grow leading-relaxed text-sm md:text-base">
                            Punya kendala teknis atau butuh bantuan seputar website Anda? Tim support kami siap memberikan bantuan teknis dengan cepat dan efisien.
                        </p>
                        <a href="mailto:tunamsam@gmail.com" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-full font-medium hover:border-brand hover:text-brand transition-colors w-fit">
                            <Icon name="mail" className="w-4 h-4" />
                            Bantuan Teknis
                        </a>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <div className="reveal-on-scroll">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading leading-tight text-gray-900">
                            Ajukan Penawaran,<br />
                            Tanyakan Kebutuhan,<br />
                            atau Mulai Konsultasi<br />
                            Website Anda
                        </h2>
                    </div>
                    
                    <div className="reveal-on-scroll stagger-1">
                        <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed">
                            Isi formulir berikut untuk mendiskusikan pembuatan website, permintaan penawaran, atau pertanyaan teknis. Tim TunamSam siap membantu Anda.
                        </p>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors bg-gray-50/50"
                                    required
                                />
                                <input 
                                    type="text" 
                                    placeholder="Nama Anda" 
                                    className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors bg-gray-50/50"
                                    required
                                />
                            </div>
                            <textarea 
                                placeholder="Tulis Pesan Anda" 
                                rows={5}
                                className="w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors bg-gray-50/50 resize-none"
                                required
                            ></textarea>
                            <button 
                                type="submit"
                                className="w-full bg-gray-900 text-white font-medium py-4 rounded-2xl hover:bg-brand transition-colors flex items-center justify-center gap-2"
                            >
                                <Icon name="send" className="w-4 h-4" />
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
