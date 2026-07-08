export type Lang = 'ID' | 'EN';

export type TranslationKey =
  | 'seo_title'
  | 'seo_description'
  | 'home'
  | 'services'
  | 'portfolio'
  | 'profile'
  | 'contact'
  | 'contact_us'
  | 'nav_design'
  | 'nav_pricing'
  | 'nav_about'
  | 'nav_testimonials'
  | 'nav_blog'
  | 'trusted_by'
  | 'p1_title'
  | 'p1_desc1'
  | 'p1_desc2'
  | 's1_title'
  | 's1_desc'
  | 'p2_title'
  | 'p2_desc1'
  | 'p2_desc2'
  | 's2_title'
  | 's2_desc'
  | 's2_btn'
  | 'criteria_title'
  | 'c1_title'
  | 'c1_desc'
  | 'c2_title'
  | 'c2_desc'
  | 'c3_title'
  | 'c3_desc'
  | 'c4_title'
  | 'c4_desc'
  | 'pkg_title'
  | 'pkg_subtitle'
  | 'pkg_desc'
  | 'pkg_desc_cp'
  | 'pkg_desc_to'
  | 'pkg_desc_custom'
  | 'process'
  | 'proc_title'
  | 'step1_title'
  | 'step1_desc'
  | 'step2_title'
  | 'step2_desc'
  | 'step3_title'
  | 'step3_desc'
  | 'step4_title'
  | 'step4_desc'
  | 'proc_desc'
  | 'proc_step1_title'
  | 'proc_step1_desc'
  | 'proc_step2_title'
  | 'proc_step2_desc'
  | 'proc_step3_title'
  | 'proc_step3_desc'
  | 'proc_step4_title'
  | 'proc_step4_desc'
  | 'proc_step5_title'
  | 'proc_step5_desc'
  | 'testi_title'
  | 'testi_desc'
  | 'cta_title'
  | 'cta_desc'
  | 'cta_btn'
  | 'design_title'
  | 'design_desc'
  | 'design_landing'
  | 'design_company'
  | 'design_toko'
  | 'design_btn'
  | 'tech_title'
  | 'tech_desc'
  | 'why_title'
  | 'why_desc'
  | 'why_1_title'
  | 'why_1_desc'
  | 'why_2_title'
  | 'why_2_desc'
  | 'why_3_title'
  | 'why_3_desc'
  | 'why_4_title'
  | 'why_4_desc'
  | 'why_5_title'
  | 'why_5_desc'
  | 'why_6_title'
  | 'why_6_desc'
  | 'why_7_title'
  | 'why_7_desc'
  | 'why_8_title'
  | 'why_8_desc'
  | 'why_9_title'
  | 'why_9_desc'
  | 'why_10_title'
  | 'why_10_desc'
  | 'why_10_desc'
  | 'price_start_from'
  | 'price_year'
  | 'price_month_lp'
  | 'price_month_cp'
  | 'price_month_to'
  | 'price_btn_lp'
  | 'price_btn_cp'
  | 'price_btn_to'
  | 'price_btn_custom'
  | 'price_custom_price'
  | 'price_custom_desc'
  | 'price_free_trans'
  | 'price_best_choice'
  | 'lp_f1_t'
  | 'lp_f1_d'
  | 'lp_f2_t'
  | 'lp_f2_d'
  | 'lp_f3_t'
  | 'lp_f3_d'
  | 'cp_f1_t'
  | 'cp_f1_d'
  | 'cp_f2_t'
  | 'cp_f2_d'
  | 'cp_f3_t'
  | 'cp_f3_d'
  | 'to_f1_t'
  | 'to_f1_d'
  | 'to_f2_t'
  | 'to_f2_d'
  | 'to_f3_t'
  | 'to_f3_d'
  | 'cw_f1_t'
  | 'cw_f1_d'
  | 'cw_f2_t'
  | 'cw_f2_d'
  | 'cw_f3_t'
  | 'cw_f3_d'
  | 'addserv_title'
  | 'addserv_desc'
  | 'addserv_btn'
  | 'addserv_1_title'
  | 'addserv_1_desc'
  | 'addserv_2_title'
  | 'addserv_2_desc'
  | 'addserv_3_title'
  | 'addserv_3_desc'
  | 'addserv_4_title'
  | 'addserv_4_desc'
  | 'addserv_5_title'
  | 'addserv_5_desc'
  | 'faq_title'
  | 'faq_1_q'
  | 'faq_1_a'
  | 'faq_2_q'
  | 'faq_2_a'
  | 'faq_3_q'
  | 'faq_3_a'
  | 'faq_4_q'
  | 'faq_4_a'
  | 'faq_5_q'
  | 'faq_5_a'
  | 'faq_6_q'
  | 'faq_6_a'
  | 'faq_7_q'
  | 'faq_7_a'
  | 'faq_8_q'
  | 'faq_8_a'
  | 'faq_9_q'
  | 'faq_9_a'
  | 'faq_10_q'
  | 'faq_10_a'
  | 'footer_tag'
  | 'footer_quick'
  | 'footer_connect'
  | 'footer_rights'
  | 'footer_about'
  | 'footer_content'
  | 'price_landing_page'
  | 'price_company_profile'
  | 'price_online_store'
  | 'price_custom_website'
  | 'hero_alt_1'
  | 'hero_alt_2'
  | 'hero_alt_3'
  | 'hero_alt_4'
  | 'pricing_lp_alt_1'
  | 'pricing_lp_alt_2'
  | 'pricing_lp_alt_3'
  | 'pricing_lp_alt_4'
  | 'pricing_cp_alt_1'
  | 'pricing_cp_alt_2'
  | 'pricing_cp_alt_3'
  | 'pricing_cp_alt_4'
  | 'pricing_to_alt_1'
  | 'pricing_to_alt_2'
  | 'pricing_to_alt_3'
  | 'pricing_to_alt_4'
  | 'pricing_cw_alt_1'
  | 'pricing_cw_alt_2'
  | 'pricing_cw_alt_3'
  | 'pricing_cw_alt_4';

export const translations: Record<Lang, Partial<Record<TranslationKey, string>>> = {
  ID: {
    seo_title: 'TunamSam — Jasa Pembuatan Website & Software House Indonesia',
    seo_description:
      'TunamSam adalah Software House Indonesia yang menyediakan jasa pembuatan website, aplikasi web, dashboard, UI/UX design, dan solusi digital untuk bisnis Anda.',
    home: 'Home',
    services: 'Layanan',
    portfolio: 'Portfolio',
    profile: 'Profil',
    contact: 'Kontak',
    contact_us: 'Hubungi Kami',
    nav_design: 'Pilihan Desain',
    nav_pricing: 'Harga Website',
    nav_about: 'Tentang Kami',
    nav_testimonials: 'Testimoni',
    nav_blog: 'Blog',
    trusted_by: 'Telah dipercaya oleh:',
    p1_title: 'Website Tanpa Strategi Akan Sulit Berkembang',
    p1_desc1:
      'Tidak semua website mampu menghasilkan traffic dan pelanggan. Tanpa SEO, struktur yang baik, dan pengalaman pengguna yang nyaman, website akan sulit bersaing di tengah banyaknya kompetitor digital saat ini.',
    p1_desc2:
      'Begitu juga dengan dunia online. Website yang hanya ada tanpa strategi yang matang dan desain yang user-friendly akan sulit menarik perhatian, apalagi menghasilkan penjualan.',
    s1_title: 'Lebih Dari Sekadar Tampilan Menarik',
    s1_desc:
      'Website profesional dirancang untuk membantu bisnis Anda tumbuh. Mulai dari desain modern, navigasi yang jelas, hingga optimasi SEO, semuanya berperan penting dalam meningkatkan kredibilitas dan menjangkau lebih banyak pelanggan.',
    p2_title: 'Sulit Mencari Talenta IT yang Tepat?',
    p2_desc1:
      'Proses rekrutmen yang panjang, biaya overhead yang tinggi, dan risiko turnover seringkali menghambat inovasi perusahaan Anda. Menemukan tim yang tidak hanya bisa ngoding, tapi benar-benar mengerti visi bisnis Anda adalah tantangan besar.',
    p2_desc2:
      'Banyak bisnis kehilangan waktu dan biaya besar hanya karena kesalahan dalam memilih partner teknologi atau kegagalan dalam menjaga stabilitas tim IT internal.',
    s2_title: 'TunamSam: IT Outsourcing & Talent Sourcing',
    s2_desc:
      'Tingkatkan kapasitas bisnis Anda dengan tenaga ahli IT yang berdedikasi. Kami menyediakan pengembang, desainer, dan ahli IT yang sudah terkurasi dan siap bergabung dengan tim Anda. Dengan model outsourcing kami, Anda bisa fokus pada strategi bisnis utama sementara kami menangani talenta teknologi terbaik.',
    s2_btn: 'Cari Talenta IT',
    criteria_title:
      'Website Anda perlu memiliki aspek berikut agar mampu menarik perhatian serta mempertahankan pengunjung dengan lebih efektif.',
    c1_title: 'SEO Friendly',
    c1_desc:
      'Membantu website Anda lebih mudah ditemukan di mesin pencari seperti Google. Website yang dioptimalkan dengan baik memiliki peluang lebih besar untuk menjangkau calon pelanggan secara online.',
    c2_title: 'Cepat dan Responsif',
    c2_desc:
      'Website yang cepat dan responsif memberikan pengalaman yang lebih nyaman di berbagai perangkat, termasuk mobile. Pengunjung cenderung meninggalkan website yang lambat atau sulit digunakan.',
    c3_title: 'Navigasi Terstruktur',
    c3_desc:
      'Struktur yang rapi dan navigasi yang jelas membantu pengunjung menemukan informasi dengan lebih mudah dan nyaman saat menjelajahi website Anda.',
    c4_title: 'Desain Modern',
    c4_desc:
      'Tampilan yang modern dan konsisten membantu membangun kesan profesional serta meningkatkan kepercayaan pengunjung terhadap bisnis Anda.',
    pkg_title: 'Paket jasa pembuatan website sesuai kebutuhan bisnis Anda',
    pkg_subtitle:
      'Pilih paket yang paling sesuai dengan tujuan bisnis Anda. Kami menawarkan transparansi harga dan fitur lengkap untuk setiap tingkat pertumbuhan.',
    pkg_desc:
      'Paket ini ideal untuk bisnis pemula yang ingin mulai berjualan secara online dengan biaya terjangkau. Landing page kami fokus pada konversi, memastikan setiap pengunjung diarahkan untuk mengambil tindakan yang Anda inginkan, seperti mendaftar, membeli produk, atau menghubungi Anda. Solusi yang cepat dan efektif ini sangat cocok untuk peluncuran produk, promosi khusus, atau kampanye pemasaran yang berfokus pada satu tujuan utama.',
    pkg_desc_cp:
      'Website company profile kami dirancang untuk meningkatkan kredibilitas perusahaan dan membuat bisnis Anda lebih terpercaya serta dikenal luas. Dengan tampilan profesional dan informasi yang terstruktur, paket ini membantu Anda membangun kepercayaan di antara calon pelanggan, mitra bisnis, dan investor. Solusi ini cocok bagi perusahaan yang ingin memperkuat kehadiran digital mereka dan memberikan citra profesional yang solid.',
    pkg_desc_to:
      'Bagi bisnis atau UKM yang menjual produk atau jasa langsung ke konsumen, seperti kuliner, properti, konveksi, atau travel, paket Toko Online kami adalah solusi yang tepat. Website ini dilengkapi dengan sistem e-commerce lengkap untuk mengelola produk, transaksi, dan pengiriman, sehingga memudahkan bisnis Anda dalam menjual secara online dan meningkatkan omzet melalui pengalaman belanja yang nyaman bagi pelanggan.',
    pkg_desc_custom:
      'Layanan custom kami dirancang untuk memenuhi kebutuhan unik dan spesifik dari bisnis Anda. Apapun visi dan kebutuhan Anda, kami siap merealisasikannya dengan solusi website yang sepenuhnya disesuaikan. Cocok bagi bisnis yang membutuhkan integrasi sistem tertentu, desain dan fungsi yang sangat spesifik, atau fitur yang tidak tercakup dalam paket standar. Paket ini menawarkan fleksibilitas tanpa batas, menjadikannya ideal untuk perusahaan yang memerlukan solusi khusus untuk mendukung operasional mereka.',
    process: 'Our Process',
    proc_title: 'Bagaimana Kami Membangun Kesuksesan Anda',
    step1_title: 'Discovery',
    step1_desc:
      'Kami mendalami visi bisnis Anda, memahami target audiens, dan mengidentifikasi tantangan yang perlu diselesaikan.',
    step2_title: 'Strategy',
    step2_desc:
      'Menyusun roadmap teknologi yang tepat, struktur website yang optimal, dan desain yang memikat hati pengunjung.',
    step3_title: 'Development',
    step3_desc:
      'Membangun website Anda dengan standar coding terbaik, performa tinggi, dan keamanan yang terjamin.',
    step4_title: 'Launch & Support',
    step4_desc:
      'Kami mendampingi proses peluncuran dan memberikan dukungan berkelanjutan untuk memastikan website Anda berjalan maksimal.',
    proc_desc: 'Kami mengutamakan kualitas dan kepuasan klien dalam setiap langkah proses. Jasa pembuatan website yang murah dan terpercaya, memulai pembuatan website dengan analisis mendalam terhadap kebutuhan dan visi bisnis Anda untuk memastikan hasil akhir yang memuaskan.',
    proc_step1_title: 'Konsultasi',
    proc_step1_desc: 'Tim profesional Kami memulai dengan berdiskusi untuk memahami kebutuhan, tujuan, dan gambaran website yang Anda inginkan.',
    proc_step2_title: 'Perencanaan',
    proc_step2_desc: 'Setelah memahami kebutuhan Anda, kami menyusun konsep, fitur, serta rencana pengerjaan yang sesuai dengan bisnis Anda.',
    proc_step3_title: 'Pengerjaan',
    proc_step3_desc: 'Tim kami mulai mengerjakan website dengan fokus pada tampilan yang menarik, cepat, dan nyaman digunakan.',
    proc_step4_title: 'Review',
    proc_step4_desc: 'Anda dapat melihat hasil website dan memberikan masukan. Kami akan melakukan penyesuaian agar hasilnya sesuai harapan.',
    proc_step5_title: 'Website Siap Digunakan',
    proc_step5_desc: 'Setelah semuanya disetujui, website akan dipublikasikan dan siap digunakan untuk mendukung bisnis Anda.',
    testi_title: 'Bukti TunamSam telah dipercaya oleh pemilik bisnis se-Indonesia',
    testi_desc: 'Jasa pembuatan website TunamSam telah menjadi solusi digital bagi pelaku bisnis di seluruh Indonesia, membantu mereka bertransformasi ke era digital dengan layanan yang terpercaya dan hasil yang memuaskan.',
    cta_title: 'Raih Kesuksesan dengan Website Berkelas',
    cta_desc: 'Website yang dirancang dengan hati, dikembangkan dengan keahlian, dan dioptimalkan untuk pengalaman pengguna yang luar biasa',
    cta_btn: 'Buat website sekarang',
    design_title: 'Pilihan Desain website yang memukau langkah awal menuju kesuksesan',
    design_desc: 'Tampilan visual yang mengesankan dan pengalaman pengguna yang menyenangkan adalah kunci untuk meninggalkan kesan positif dan mendalam. Setiap elemen dari desain kami, dipilih dengan hati-hati untuk memastikan bahwa website Anda tidak hanya terlihat profesional, tetapi juga efektif dalam mencapai tujuan bisnis Anda.',
    design_landing: 'Landingpage',
    design_company: 'Company Profile',
    design_toko: 'Toko Online',
    design_btn: 'Lihat pilihan desain lainnya',
    tech_title: 'Kami membantu membuat website, mengelola, dan menyelesaikan hal teknis.',
    tech_desc: 'TunamSam menyediakan layanan pembuatan dan pengelolaan website lengkap, serta menangani hal teknis agar bisnis Anda tumbuh dengan kehadiran online yang kuat dan efisien.',
    why_title: 'Mengapa harus TunamSam?',
    why_desc: 'TunamSam jasa pembuatan website professional yang layaknya sebagai partner bisnis anda untuk menciptakan website berkualitas dan sesuai tujuan bisnis.',
    why_1_title: 'Lebih dari 10 tahun pengalaman',
    why_1_desc: 'Berpengalaman lebih dari 10+ tahun dalam transformasi digital di Indonesia. Ahli pada bidang pengembangan web dan digital marketing.',
    why_2_title: 'Pendekatan Berorientasi Hasil',
    why_2_desc: 'Tidak hanya membuat situs web, tapi juga menciptakan pengalaman online yang menghasilkan hasil yang terukur untuk bisnis Anda, dan juga memberikan bantuan dalam mengarahkan lalu lintas dan mengonversi lalu lintas tersebut menjadi pencapaian tujuan online mereka, seperti prospek, kontak, pembelian, dan tampilan.',
    why_3_title: 'User Centric dan Desain kekinian',
    why_3_desc: 'Menciptakan tampilan visual website yang menawan dan memastikan setiap elemen website memberikan pengalaman pengguna yang menyenangkan dan efektif.',
    why_4_title: 'Pengembangan yang efisien',
    why_4_desc: 'Komunikasi yang terbuka dan transparan dengan memastikan klien selalu mendapatkan informasi pada setiap tahap pengembangan dengan mengirimkan pemberitahuan melalui email dan WhatsApp.',
    why_5_title: 'Inovasi keamanan Cyber dan Persiapan masa depan',
    why_5_desc: 'Menjaga website Anda tetap aman dan terdepan dengan mencakup cadangan web berkala, pembaharuan domain dan hosting, dan penerapan keamanan teknologi hosting.',
    why_6_title: 'Kolaborasi',
    why_6_desc: 'Visi Anda, keahlian kami - Pendekatan kolaboratif yang memastikan keterlibatan aktif Anda dalam proses pengembangan situs web untuk hasil yang sempurna. Kami juga sangat peduli dengan Unique Selling Point (USP) bisnis klien agar kami dapat menciptakan imajinasi dan pengalaman bisnis yang lebih baik.',
    why_7_title: 'Dukungan berkelanjutan',
    why_7_desc: 'Kami menawarkan layanan dukungan dan pemeliharaan berkelanjutan untuk menjaga situs web Anda berjalan lancar dan kontennya tetap mengikuti tren terbaru. Kami akan selalu berada di sisi Anda. Biarkan Anda menjalankan bisnis mereka dengan tenang, sementara kami mengelola kehadiran online mereka.',
    why_8_title: 'Kualitas dengan harga yang transparan',
    why_8_desc: 'Membangun kepercayaan Anda dengan menyediakan layanan pengembangan situs web kelas atas dengan harga yang kompetitif dan transparan.',
    why_9_title: 'Teknologi berbasis AI',
    why_9_desc: 'Memanfaatkan teknologi AI terkini untuk memastikan konten situs web Anda dibuat sebaik mungkin serta mengoreksi dan menyempurnakan konten situs web.',
    why_10_title: 'Customer Support yang Responsif',
    why_10_desc: 'Kami selalu berusaha responsif untuk memenuhi kebutuhan Anda dengan cepat dan efektif.',
    price_start_from: 'Mulai dari',
    price_year: '/ Tahun',
    price_month_lp: '*konversi perbulan : Rp. 125.000/bulan',
    price_month_cp: '*konversi perbulan : Rp. 133.000/bulan',
    price_month_to: '*konversi perbulan : Rp. 206.000/bulan',
    price_btn_lp: 'Buat Landingpage sekarang!',
    price_btn_cp: 'Buat Company Profile sekarang!',
    price_btn_to: 'Buat Toko Online sekarang!',
    price_btn_custom: 'Buat Website Custom sekarang!',
    price_custom_price: 'Harga Khusus',
    price_custom_desc: '*Diskusikan dengan kami untuk harga sesuai permintaan anda',
    price_free_trans: 'Terjemahan Bahasa Gratis',
    price_best_choice: 'Best Choice',
    lp_f1_t: 'Sederhana dan Efektif',
    lp_f1_d: 'Ideal untuk kampanye promosi produk atau layanan tunggal dengan desain yang fokus pada satu tujuan spesifik.',
    lp_f2_t: 'Optimal untuk Konversi',
    lp_f2_d: 'Setiap elemen pada landing page didesain untuk mengarahkan pengunjung melakukan tindakan tertentu, seperti mengisi formulir, mendaftar, atau melakukan pembelian.',
    lp_f3_t: 'Cocok untuk Pemula',
    lp_f3_d: 'Dengan biaya yang lebih rendah dibanding website lengkap, landing page adalah solusi cepat dan efisien untuk memulai kehadiran digital Anda.',
    cp_f1_t: 'Citra Profesional',
    cp_f1_d: 'Mencerminkan profesionalisme dan nilai-nilai perusahaan Anda, membantu meningkatkan kepercayaan calon klien.',
    cp_f2_t: 'Informasi Terstruktur',
    cp_f2_d: 'Memberikan informasi penting tentang perusahaan, mulai dari sejarah, visi, misi, hingga portofolio layanan atau produk yang Anda tawarkan.',
    cp_f3_t: 'Dikenal Lebih Luas',
    cp_f3_d: 'Dengan kehadiran online, perusahaan Anda dapat menjangkau pasar yang lebih besar dan memperkuat posisi di industri.',
    to_f1_t: 'Solusi E-commerce Lengkap',
    to_f1_d: 'Website toko online kami mendukung fitur pengelolaan produk, keranjang belanja, pembayaran, dan pengiriman secara terintegrasi.',
    to_f2_t: 'Cocok untuk Bisnis Retail',
    to_f2_d: 'Sangat direkomendasikan bagi bisnis yang menjual produk fisik atau layanan langsung kepada pelanggan, memudahkan proses transaksi online.',
    to_f3_t: 'Optimasi untuk Penjualan',
    to_f3_d: 'Fitur checkout yang mudah digunakan dan integrasi dengan metode pembayaran lokal membuat pengalaman belanja lebih nyaman bagi konsumen.',
    cw_f1_t: 'Desain dan Fitur Sepenuhnya Kustom',
    cw_f1_d: 'Solusi yang fleksibel dan dirancang khusus untuk memenuhi kebutuhan dan tujuan spesifik bisnis Anda.',
    cw_f2_t: 'Integrasi Sistem yang Komprehensif',
    cw_f2_d: 'Dapat diintegrasikan dengan sistem manajemen perusahaan, seperti ERP, CRM, atau platform teknologi lainnya untuk mendukung efisiensi operasional.',
    cw_f3_t: 'Ideal untuk Bisnis dengan Kebutuhan Khusus',
    cw_f3_d: 'Direkomendasikan bagi perusahaan yang memerlukan desain, fungsionalitas, atau integrasi yang sangat spesifik, serta solusi yang mampu berkembang sesuai kebutuhan.',
    addserv_title: 'Layanan Tambahan untuk Optimasi website Anda',
    addserv_desc: 'Kami menyediakan berbagai layanan tambahan yang dirancang untuk meningkatkan performa dan efektivitas website Anda. Berikut adalah beberapa pilihan layanan ekstra yang dapat Anda tambahkan.',
    addserv_btn: 'Dapatkan Layanan',
    addserv_1_title: 'Perbaikan Website',
    addserv_1_desc: 'Kami menawarkan layanan perbaikan untuk memastikan website Anda selalu berjalan optimal. Mulai dari memperbaiki bug, mengatasi masalah performa, hingga mengatasi error coding, tim kami akan memastikan website Anda berfungsi dengan lancar.',
    addserv_2_title: 'SEO (Search Engine Optimization)',
    addserv_2_desc: 'Dapatkan peringkat terbaik di mesin pencari dengan layanan SEO kami. Kami melakukan optimasi pada konten dan struktur situs web Anda untuk meningkatkan visibilitas di Google dan mendatangkan lebih banyak lalu lintas organik ke website Anda.',
    addserv_3_title: 'Maintenance Website',
    addserv_3_desc: 'Jaga website Anda selalu up-to-date dan aman dengan layanan maintenance kami. Kami menawarkan pembaruan rutin, backup data, serta optimasi keamanan untuk memastikan situs Anda berjalan stabil dan terlindungi dari ancaman siber.',
    addserv_4_title: 'Manajemen Media Sosial (Sosmed)',
    addserv_4_desc: 'Optimalkan kehadiran bisnis Anda di media sosial. Kami membantu Anda dalam mengelola akun-akun media sosial, menciptakan konten yang relevan, serta menghubungkan media sosial dengan website untuk meningkatkan engagement dan brand awareness.',
    addserv_5_title: 'Manajemen Iklan Digital (Ads)',
    addserv_5_desc: 'Tingkatkan hasil pemasaran online Anda dengan layanan manajemen iklan digital. Kami mengelola kampanye iklan di platform seperti Google Ads dan media sosial, memastikan bahwa anggaran iklan Anda digunakan secara efektif untuk menghasilkan ROI yang optimal.',
    faq_title: 'FAQ Jasa Pembuatan website di TunamSam',
    faq_1_q: 'Apa itu Website?',
    faq_1_a: 'Website adalah kumpulan halaman online yang dapat diakses melalui internet. Website berfungsi sebagai representasi digital dari bisnis, organisasi, atau individu, memungkinkan mereka untuk berbagi informasi, menjual produk, atau berinteraksi dengan audiens secara global.',
    faq_2_q: 'Mengapa harus memiliki website?',
    faq_2_a: 'Memiliki website penting untuk membangun kredibilitas, menjangkau audiens yang lebih luas, dan beroperasi 24/7. Website adalah aset digital yang memberikan kendali penuh atas brand Anda dibandingkan hanya mengandalkan media sosial.',
    faq_3_q: 'Jenis website apa saja yang TunamSam kerjakan?',
    faq_3_a: 'Kami mengerjakan berbagai jenis website termasuk Company Profile, Toko Online (E-commerce), Landing Page, Blog, Portal Berita, hingga Custom Web Application sesuai kebutuhan spesifik bisnis Anda.',
    faq_4_q: 'Bagaimana jika saya kesulitan mengelola website?',
    faq_4_a: 'Jangan khawatir! Kami menyediakan layanan support dan maintenance. Selain itu, kami juga memberikan panduan penggunaan (tutorial) dan dashboard yang user-friendly agar Anda dapat mengelola konten dengan mudah.',
    faq_5_q: 'Apakah jasa pembuatan website murah TunamSam memberikan domain gratis?',
    faq_5_a: 'Ya, sebagian besar paket pembuatan website kami sudah termasuk gratis domain (.com, .net, .id, dll) dan hosting untuk tahun pertama.',
    faq_6_q: 'Apakah saya bisa dilakukan penambahan halaman baru?',
    faq_6_a: 'Tentu bisa. Sistem yang kami buat memungkinkan Anda untuk menambah halaman baru tanpa batas. Jika Anda membutuhkan bantuan teknis untuk penambahan fitur, tim kami siap membantu.',
    faq_7_q: 'Apakah saya akan mendapatkan alamat email dengan nama domain sendiri?',
    faq_7_a: 'Ya, Anda akan mendapatkan alamat email profesional dengan nama domain Anda sendiri (contoh: info@nama-bisnis.com) yang akan meningkatkan kredibilitas bisnis Anda.',
    faq_8_q: 'Apakah saya bisa mengubah desain webnya setelah website jadi?',
    faq_8_a: 'Bisa. Website yang kami bangun bersifat dinamis dan fleksibel. Perubahan kecil bisa Anda lakukan sendiri melalui dashboard, sedangkan perubahan desain mayor (redesign) bisa didiskusikan lebih lanjut dengan tim kami.',
    faq_9_q: 'Saya sudah memiliki domain dan hosting di layanan lain, apakah saya bisa membuat website di TunamSam?',
    faq_9_a: 'Sangat bisa. Kami hanya memerlukan akses ke domain manager atau cPanel/hosting Anda untuk melakukan instalasi dan konfigurasi website baru Anda.',
    faq_10_q: 'Apakah saya bisa mendapatkan fitur tambahan atau custom?',
    faq_10_a: 'Tentu saja. Jika paket standar kami belum memenuhi semua kebutuhan Anda, kami melayani pembuatan fitur custom yang dirancang khusus sesuai dengan alur kerja bisnis Anda.',
    footer_tag: 'Membangun masa depan digital yang lebih cerah, satu website dalam satu waktu.',
    footer_quick: 'Tautan Cepat',
    footer_connect: 'Terhubung',
    footer_rights: 'Hak Cipta Dilindungi.',
    footer_about:
      'Kami membantu bisnis membangun website modern yang cepat, profesional, dan dirancang untuk meningkatkan kredibilitas serta pertumbuhan bisnis di era digital.',
    footer_content: 'Konten',
    price_landing_page: 'Landing Page',
    price_company_profile: 'Company Profile',
    price_online_store: 'Online Store',
    price_custom_website: 'Custom Website',
    hero_alt_1: 'Portfolio website — tampilan landing page modern',
    hero_alt_2: 'Portfolio website — tampilan company profile profesional',
    hero_alt_3: 'Portfolio website — tampilan toko online',
    hero_alt_4: 'Portfolio website — tampilan custom web application',
    pricing_lp_alt_1: 'Contoh desain landing page — hero section',
    pricing_lp_alt_2: 'Contoh desain landing page — fitur utama',
    pricing_lp_alt_3: 'Contoh desain landing page — testimoni klien',
    pricing_lp_alt_4: 'Contoh desain landing page — call to action',
    pricing_cp_alt_1: 'Contoh desain company profile — halaman depan',
    pricing_cp_alt_2: 'Contoh desain company profile — halaman tentang',
    pricing_cp_alt_3: 'Contoh desain company profile — halaman layanan',
    pricing_cp_alt_4: 'Contoh desain company profile — halaman kontak',
    pricing_to_alt_1: 'Contoh desain toko online — halaman produk',
    pricing_to_alt_2: 'Contoh desain toko online — detail produk',
    pricing_to_alt_3: 'Contoh desain toko online — keranjang belanja',
    pricing_to_alt_4: 'Contoh desain toko online — halaman checkout',
    pricing_cw_alt_1: 'Contoh desain custom website — dashboard',
    pricing_cw_alt_2: 'Contoh desain custom website — halaman data',
    pricing_cw_alt_3: 'Contoh desain custom website — halaman laporan',
    pricing_cw_alt_4: 'Contoh desain custom website — halaman pengaturan',
  },
  EN: {
    seo_title: 'TunamSam — Website Development & Software House Indonesia',
    seo_description:
      'TunamSam is an Indonesian Software House providing website development, web applications, dashboards, UI/UX design, and digital solutions for your business.',
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    profile: 'Profile',
    contact: 'Contact',
    contact_us: 'Contact Us',
    nav_design: 'Design Choices',
    nav_pricing: 'Website Pricing',
    nav_about: 'About Us',
    nav_testimonials: 'Testimonials',
    nav_blog: 'Blog',
    trusted_by: 'Trusted by:',
    p1_title: 'A Website Without Strategy Will Struggle to Grow',
    p1_desc1:
      'Not all websites are capable of generating traffic and customers. Without SEO, a good structure, and a comfortable user experience, a website will find it hard to compete amidst today\'s digital competitors.',
    p1_desc2:
      'The same goes for the online world. A website that merely exists without a mature strategy and user-friendly design will struggle to attract attention, let alone generate sales.',
    s1_title: 'More Than Just an Attractive Appearance',
    s1_desc:
      'A professional website is designed to help your business grow. From modern design, clear navigation, to SEO optimization, everything plays an important role in increasing credibility and reaching more customers.',
    p2_title: 'Finding the Right IT Talent is Hard?',
    p2_desc1:
      'Long recruitment processes, high overhead costs, and turnover risks often hinder your company\'s innovation. Finding a team that doesn\'t just code, but truly understands your business vision is a major challenge.',
    p2_desc2:
      'Many businesses lose a lot of time and money just because of choosing the wrong technology partner or failing to maintain internal IT team stability.',
    s2_title: 'TunamSam: IT Outsourcing & Talent Sourcing',
    s2_desc:
      'Increase your business capacity with dedicated IT experts. We provide curated developers, designers, and IT experts ready to join your team. With our outsourcing model, you can focus on your core business strategy while we handle the best technology talents.',
    s2_btn: 'Find IT Talents',
    criteria_title:
      'Your website needs the following elements to attract attention and retain visitors more effectively.',
    c1_title: 'SEO Friendly',
    c1_desc:
      'Ensures your business is easily discoverable on search engines like Google. A well-optimized website significantly improves your chances of reaching more potential customers and outperforming your digital competitors.',
    c2_title: 'Fast and Responsive',
    c2_desc:
      'Fast loading speeds and a responsive layout ensure a seamless experience across all devices, including mobile. This prevents visitors from leaving your site due to slow performance or poor usability on smartphones.',
    c3_title: 'Structured Navigation',
    c3_desc:
      'A clean structure and intuitive navigation help visitors find exactly what they are looking for with minimal effort. Well-organized content keeps users engaged and encourages them to explore your website further.',
    c4_title: 'Modern Design',
    c4_desc:
      'A modern, clean design that accurately reflects your brand identity creates a strong first impression. It signals to your visitors that your business is professional, trustworthy, and committed to high quality.',
    pkg_title: 'Website creation packages according to your business needs',
    pkg_subtitle:
      "TunamSam's trusted website creation service understands that every business has different needs, we are ready to work with you.",
    pkg_desc:
      'This package is ideal for start-up businesses that want to start selling online at an affordable cost. Our landing pages focus on conversion, ensuring every visitor is directed to take the action you want, such as registering, buying a product, or contacting you. This fast and effective solution is perfect for product launches, special promotions, or marketing campaigns focused on a single primary goal.',
    pkg_desc_cp:
      'Our company profile website is designed to enhance corporate credibility and make your business more trusted and widely known. With a professional appearance and structured information, this package helps you build trust among potential customers, business partners, and investors. This solution is suitable for companies looking to strengthen their digital presence and project a solid professional image.',
    pkg_desc_to:
      'For businesses or SMEs selling products or services directly to consumers, such as culinary, property, apparel, or travel, our Online Store package is the perfect solution. This website comes with a complete e-commerce system to manage products, transactions, and shipping, making it easier for your business to sell online and increase revenue through a seamless shopping experience for customers.',
    pkg_desc_custom:
      'Our custom service is designed to meet the unique and specific needs of your business. Whatever your vision and requirements, we are ready to realize them with a fully customized website solution. Suitable for businesses that require specific system integrations, highly specific designs and functions, or features not covered in standard packages. This package offers unlimited flexibility, making it ideal for companies needing specialized solutions to support their operations.',
    process: 'Our Process',
    proc_title: 'How We Build Your Success',
    step1_title: 'Discovery',
    step1_desc: 'We dive deep into your vision, understand your audience, and identify challenges.',
    step2_title: 'Strategy',
    step2_desc: 'Crafting the right roadmap, optimal structure, and captivating designs.',
    step3_title: 'Development',
    step3_desc: 'Our expert team builds your solution with high-quality code and fast performance.',
    step4_title: 'Launch & Support',
    step4_desc:
      'We accompany the launch process and provide ongoing support to ensure your website runs at its maximum potential.',
    proc_desc: 'We prioritize quality and client satisfaction in every step of the process. Our reliable and affordable website creation services start with an in-depth analysis of your business needs and vision to ensure a satisfactory final outcome.',
    proc_step1_title: 'Consultation',
    proc_step1_desc: 'Our professional team begins by discussing to understand the needs, goals, and vision of the website you want.',
    proc_step2_title: 'Planning',
    proc_step2_desc: 'After understanding your needs, we prepare the concepts, features, and an execution plan suited for your business.',
    proc_step3_title: 'Development',
    proc_step3_desc: 'Our team starts working on the website focusing on an attractive layout, fast performance, and a user-friendly experience.',
    proc_step4_title: 'Review',
    proc_step4_desc: 'You can see the website results and provide feedback. We will make adjustments to ensure the outcome meets your expectations.',
    proc_step5_title: 'Ready to Launch',
    proc_step5_desc: 'Once everything is approved, the website will be published and ready to support your business.',
    testi_title: 'Proof that TunamSam is trusted by business owners across Indonesia',
    testi_desc: 'TunamSam website creation services have become a digital solution for business owners across Indonesia, helping them transform into the digital era with reliable services and satisfactory results.',
    cta_title: 'Achieve Success with a High-Class Website',
    cta_desc: 'A website designed with heart, developed with expertise, and optimized for an exceptional user experience',
    cta_btn: 'Create website now',
    design_title: 'Stunning website design choices, the first step towards success',
    design_desc: 'An impressive visual appearance and an enjoyable user experience are keys to leaving a positive and profound impression. Every element of our design is carefully selected to ensure that your website not only looks professional, but is also effective in achieving your business goals.',
    design_landing: 'Landing Page',
    design_company: 'Company Profile',
    design_toko: 'Online Store',
    design_btn: 'See other design choices',
    tech_title: 'We help you build, manage, and solve technical matters for your website.',
    tech_desc: 'TunamSam provides complete website creation and management services, handling technical matters so your business grows with a strong and efficient online presence.',
    why_title: 'Why choose TunamSam?',
    why_desc: 'TunamSam is a professional website creation service that acts as your business partner to create high-quality websites aligned with your business goals.',
    why_1_title: 'Over 10 years of experience',
    why_1_desc: 'More than 10+ years of experience in digital transformation in Indonesia. Experts in web development and digital marketing.',
    why_2_title: 'Result-Oriented Approach',
    why_2_desc: 'Not only building websites, but also creating online experiences that generate measurable results for your business, providing help in driving traffic and converting it into achieving their online goals such as prospects, contacts, purchases, and views.',
    why_3_title: 'User Centric & Modern Design',
    why_3_desc: 'Creating captivating visual website designs and ensuring every website element provides a pleasant and effective user experience.',
    why_4_title: 'Efficient Development',
    why_4_desc: 'Open and transparent communication by ensuring clients are always informed at every stage of development through email and WhatsApp notifications.',
    why_5_title: 'Cybersecurity Innovation & Future Preparation',
    why_5_desc: 'Keeping your website safe and ahead of the curve, including periodic web backups, domain and hosting renewals, and implementing hosting security technology.',
    why_6_title: 'Collaboration',
    why_6_desc: 'Your vision, our expertise - A collaborative approach that ensures your active involvement in the website development process for perfect results. We also care deeply about our clients\' Unique Selling Point (USP) so we can create better business imagination and experience.',
    why_7_title: 'Continuous Support',
    why_7_desc: 'We offer continuous support and maintenance services to keep your website running smoothly and its content following the latest trends. We will always be by your side. Letting you run your business with peace of mind, while we manage your online presence.',
    why_8_title: 'Quality with Transparent Pricing',
    why_8_desc: 'Building your trust by providing top-tier website development services with competitive and transparent pricing.',
    why_9_title: 'AI-Based Technology',
    why_9_desc: 'Utilizing the latest AI technology to ensure your website content is created as best as possible, as well as correcting and refining website content.',
    why_10_title: 'Responsive Customer Support',
    why_10_desc: 'We always strive to be responsive to fulfill your needs quickly and effectively.',
    price_start_from: 'Starting from',
    price_year: '/ Year',
    price_month_lp: '*monthly equivalent: Rp. 125,000/month',
    price_month_cp: '*monthly equivalent: Rp. 133,000/month',
    price_month_to: '*monthly equivalent: Rp. 206,000/month',
    price_btn_lp: 'Create Landing Page now!',
    price_btn_cp: 'Create Company Profile now!',
    price_btn_to: 'Create Online Store now!',
    price_btn_custom: 'Create Custom Website now!',
    price_custom_price: 'Custom Price',
    price_custom_desc: '*Discuss with us for a price tailored to your request',
    price_free_trans: 'Free Language Translation',
    price_best_choice: 'Best Choice',
    lp_f1_t: 'Simple and Effective',
    lp_f1_d: 'Ideal for promoting a single product or service with a design focused on a specific goal.',
    lp_f2_t: 'Optimized for Conversions',
    lp_f2_d: 'Every element on the landing page is designed to direct visitors to take a specific action, such as filling out a form, signing up, or making a purchase.',
    lp_f3_t: 'Perfect for Beginners',
    lp_f3_d: 'With a lower cost than a full website, a landing page is a quick and efficient solution to start your digital presence.',
    cp_f1_t: 'Professional Image',
    cp_f1_d: 'Reflects your company\'s professionalism and values, helping to increase trust from potential clients.',
    cp_f2_t: 'Structured Information',
    cp_f2_d: 'Provides important information about the company, from history, vision, mission, to the portfolio of services or products you offer.',
    cp_f3_t: 'Wider Recognition',
    cp_f3_d: 'With an online presence, your company can reach a larger market and strengthen its position in the industry.',
    to_f1_t: 'Complete E-commerce Solution',
    to_f1_d: 'Our online store website supports integrated product management, shopping cart, payment, and shipping features.',
    to_f2_t: 'Suitable for Retail Businesses',
    to_f2_d: 'Highly recommended for businesses selling physical products or direct services to customers, easing the online transaction process.',
    to_f3_t: 'Optimized for Sales',
    to_f3_d: 'Easy-to-use checkout features and integration with local payment methods make the shopping experience more comfortable for consumers.',
    cw_f1_t: 'Fully Custom Design and Features',
    cw_f1_d: 'A flexible solution custom-designed to meet your specific business needs and goals.',
    cw_f2_t: 'Comprehensive System Integration',
    cw_f2_d: 'Can be integrated with company management systems, such as ERP, CRM, or other technology platforms to support operational efficiency.',
    cw_f3_t: 'Ideal for Businesses with Special Needs',
    cw_f3_d: 'Recommended for companies requiring highly specific design, functionality, or integration, as well as a solution capable of growing as needed.',
    addserv_title: 'Additional Services to Optimize Your Website',
    addserv_desc: 'We provide a variety of additional services designed to enhance the performance and effectiveness of your website. Here are some extra service options you can add on.',
    addserv_btn: 'Get Service',
    addserv_1_title: 'Website Repair',
    addserv_1_desc: 'We offer repair services to ensure your website is always running optimally. From fixing bugs and resolving performance issues to handling coding errors, our team will make sure your website functions smoothly.',
    addserv_2_title: 'SEO (Search Engine Optimization)',
    addserv_2_desc: 'Achieve the best rankings on search engines with our SEO service. We optimize your website content and structure to increase visibility on Google and drive more organic traffic to your site.',
    addserv_3_title: 'Website Maintenance',
    addserv_3_desc: 'Keep your website up-to-date and secure with our maintenance service. We offer regular updates, data backups, and security optimization to ensure your site runs stably and is protected from cyber threats.',
    addserv_4_title: 'Social Media Management',
    addserv_4_desc: 'Optimize your business presence on social media. We help you manage your social media accounts, create relevant content, and connect social media with your website to increase engagement and brand awareness.',
    addserv_5_title: 'Digital Advertising Management (Ads)',
    addserv_5_desc: 'Boost your online marketing results with our digital advertising management service. We manage advertising campaigns on platforms like Google Ads and social media, ensuring your ad budget is used effectively to generate optimal ROI.',
    faq_title: 'FAQ — Website Creation Services at TunamSam',
    faq_1_q: 'What is a Website?',
    faq_1_a: 'A website is a collection of online pages accessible via the internet. It serves as the digital representation of a business, organization, or individual, enabling them to share information, sell products, or interact with a global audience.',
    faq_2_q: 'Why should I have a website?',
    faq_2_a: 'Having a website is essential for building credibility, reaching a wider audience, and operating 24/7. A website is a digital asset that gives you full control over your brand, unlike relying solely on social media.',
    faq_3_q: 'What types of websites does TunamSam build?',
    faq_3_a: 'We build a wide variety of websites including Company Profiles, Online Stores (E-commerce), Landing Pages, Blogs, News Portals, and Custom Web Applications tailored to your specific business needs.',
    faq_4_q: 'What if I have trouble managing my website?',
    faq_4_a: "Don't worry! We provide support and maintenance services. We also offer usage guides (tutorials) and a user-friendly dashboard so you can manage your content with ease.",
    faq_5_q: 'Does TunamSam include a free domain with their website packages?',
    faq_5_a: 'Yes, most of our website packages include a free domain (.com, .net, .id, etc.) and hosting for the first year.',
    faq_6_q: 'Can I add new pages to my website?',
    faq_6_a: 'Absolutely. The system we build allows you to add unlimited new pages. If you need technical assistance for adding new features, our team is ready to help.',
    faq_7_q: 'Will I get a professional email address with my own domain name?',
    faq_7_a: 'Yes, you will receive a professional email address using your own domain name (e.g., info@your-business.com), which will enhance your business credibility.',
    faq_8_q: 'Can I change the website design after it is completed?',
    faq_8_a: 'Yes. The websites we build are dynamic and flexible. Minor changes can be done by yourself through the dashboard, while major design changes (redesigns) can be discussed further with our team.',
    faq_9_q: 'I already have a domain and hosting elsewhere — can I still build my website with TunamSam?',
    faq_9_a: 'Absolutely. We only need access to your domain manager or cPanel/hosting to install and configure your new website.',
    faq_10_q: 'Can I request additional or custom features?',
    faq_10_a: 'Of course. If our standard packages do not cover all your needs, we offer custom feature development designed specifically to fit your business workflow.',
    footer_about:
      'We help businesses build modern, fast, and professional websites designed to enhance credibility and drive business growth in the digital era.',
    footer_content: 'Content',
    price_landing_page: 'Landing Page',
    price_company_profile: 'Company Profile',
    price_online_store: 'Online Store',
    price_custom_website: 'Custom Website',
    hero_alt_1: 'Portfolio website — modern landing page design',
    hero_alt_2: 'Portfolio website — professional company profile design',
    hero_alt_3: 'Portfolio website — online store design',
    hero_alt_4: 'Portfolio website — custom web application design',
    pricing_lp_alt_1: 'Landing page design example — hero section',
    pricing_lp_alt_2: 'Landing page design example — key features',
    pricing_lp_alt_3: 'Landing page design example — client testimonials',
    pricing_lp_alt_4: 'Landing page design example — call to action',
    pricing_cp_alt_1: 'Company profile design example — homepage',
    pricing_cp_alt_2: 'Company profile design example — about page',
    pricing_cp_alt_3: 'Company profile design example — services page',
    pricing_cp_alt_4: 'Company profile design example — contact page',
    pricing_to_alt_1: 'Online store design example — product page',
    pricing_to_alt_2: 'Online store design example — product detail',
    pricing_to_alt_3: 'Online store design example — shopping cart',
    pricing_to_alt_4: 'Online store design example — checkout page',
    pricing_cw_alt_1: 'Custom website design example — dashboard',
    pricing_cw_alt_2: 'Custom website design example — data page',
    pricing_cw_alt_3: 'Custom website design example — reports page',
    pricing_cw_alt_4: 'Custom website design example — settings page',
    footer_tag: 'Building a brighter digital future, one website at a time.',
    footer_quick: 'Quick Links',
    footer_connect: 'Connect',
    footer_rights: '© 2024 TunamSam. All rights reserved.',
  },
};

export const FLAG_URLS: Record<Lang, string> = {
  ID: 'https://flagcdn.com/w20/id.webp',
  EN: 'https://flagcdn.com/w20/gb.webp',
};
