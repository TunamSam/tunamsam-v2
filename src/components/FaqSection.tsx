import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Apa itu Website?",
    answer: "Website adalah kumpulan halaman online yang dapat diakses melalui internet. Website berfungsi sebagai representasi digital dari bisnis, organisasi, atau individu, memungkinkan mereka untuk berbagi informasi, menjual produk, atau berinteraksi dengan audiens secara global."
  },
  {
    question: "Mengapa harus memiliki website?",
    answer: "Memiliki website penting untuk membangun kredibilitas, menjangkau audiens yang lebih luas, dan beroperasi 24/7. Website adalah aset digital yang memberikan kendali penuh atas brand Anda dibandingkan hanya mengandalkan media sosial."
  },
  {
    question: "Jenis website apa saja yang Nuhaweb kerjakan?",
    answer: "Kami mengerjakan berbagai jenis website termasuk Company Profile, Toko Online (E-commerce), Landing Page, Blog, Portal Berita, hingga Custom Web Application sesuai kebutuhan spesifik bisnis Anda."
  },
  {
    question: "Bagaimana jika saya kesulitan mengelola website?",
    answer: "Jangan khawatir! Kami menyediakan layanan support dan maintenance. Selain itu, kami juga memberikan panduan penggunaan (tutorial) dan dashboard yang user-friendly agar Anda dapat mengelola konten dengan mudah."
  },
  {
    question: "Apakah jasa pembuatan website murah Nuhaweb memberikan domain gratis?",
    answer: "Ya, sebagian besar paket pembuatan website kami sudah termasuk gratis domain (.com, .net, .id, dll) dan hosting untuk tahun pertama."
  },
  {
    question: "Apakah saya bisa dilakukan penambahan halaman baru?",
    answer: "Tentu bisa. Sistem yang kami buat memungkinkan Anda untuk menambah halaman baru tanpa batas. Jika Anda membutuhkan bantuan teknis untuk penambahan fitur, tim kami siap membantu."
  },
  {
    question: "Apakah saya akan mendapatkan alamat email dengan nama domain sendiri?",
    answer: "Ya, Anda akan mendapatkan alamat email profesional dengan nama domain Anda sendiri (contoh: info@nama-bisnis.com) yang akan meningkatkan kredibilitas bisnis Anda."
  },
  {
    question: "Apakah saya bisa mengubah desain webnya setelah website jadi?",
    answer: "Bisa. Website yang kami bangun bersifat dinamis dan fleksibel. Perubahan kecil bisa Anda lakukan sendiri melalui dashboard, sedangkan perubahan desain mayor (redesign) bisa didiskusikan lebih lanjut dengan tim kami."
  },
  {
    question: "Saya sudah memiliki domain dan hosting di layanan lain, apakah saya bisa membuat website di Nuhaweb?",
    answer: "Sangat bisa. Kami hanya memerlukan akses ke domain manager atau cPanel/hosting Anda untuk melakukan instalasi dan konfigurasi website baru Anda."
  },
  {
    question: "Apakah saya bisa mendapatkan fitur tambahan atau custom?",
    answer: "Tentu saja. Jika paket standar kami belum memenuhi semua kebutuhan Anda, kami melayani pembuatan fitur custom yang dirancang khusus sesuai dengan alur kerja bisnis Anda."
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-heading text-gray-900 text-center mb-16">
          FAQ Jasa Pembuatan website di nuhaweb
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-xl overflow-hidden bg-white transition-all duration-300 hover:border-gray-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className="text-2xl font-heading font-sans pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600 font-sans leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
