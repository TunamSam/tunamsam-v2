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
  | 'pricing_cw_alt_4'
  /* AboutPage */
  | 'about_badge'
  | 'about_title'
  | 'about_visimisi_title'
  | 'about_visimisi_sub'
  | 'about_visimisi_desc'
  | 'about_komitmen_title'
  | 'about_komitmen_sub'
  | 'about_komitmen_desc'
  | 'about_corevalues_title'
  | 'about_value_1_title'
  | 'about_value_1_desc'
  | 'about_value_2_title'
  | 'about_value_2_desc'
  | 'about_value_3_title'
  | 'about_value_3_desc'
  | 'about_value_4_title'
  | 'about_value_4_desc'
  | 'about_value_5_title'
  | 'about_value_5_desc'
  /* BlogPage */
  | 'blog_badge'
  | 'blog_title'
  | 'blog_cat_all'
  | 'blog_cat_tek'
  | 'blog_cat_web'
  | 'blog_cat_dm'
  | 'blog_read_more'
  | 'blog_empty'
  | 'blog_default_cat'
  /* BlogPostPage */
  | 'blog_notfound_title'
  | 'blog_notfound_desc'
  | 'blog_share_title'
  | 'blog_back'
  /* ContactPage */
  | 'contact_hero_title'
  | 'contact_hero_desc'
  | 'contact_sales_title'
  | 'contact_sales_desc'
  | 'contact_sales_btn'
  | 'contact_support_title'
  | 'contact_support_desc'
  | 'contact_support_btn'
  | 'contact_form_title'
  | 'contact_form_desc'
  | 'contact_form_email_placeholder'
  | 'contact_form_name_placeholder'
  | 'contact_form_message_placeholder'
  | 'contact_form_submit'
  /* TestimonialsPage */
  | 'testi_page_title'
  | 'testi_page_desc'
  | 'testi_section_title'
  | 'testi_section_desc'
  | 'testi_quote'
  | 'testi_author'
  /* TestimonialCarousel */
  | 'testi_carousel_quote'
  /* DesignCatalog */
  | 'design_catalog_title'
  | 'design_catalog_desc'
  | 'design_cat_all'
  | 'design_card_desc'
  | 'design_lihat_detail'
  | 'design_pesan_desain'
  /* DesignDetail */
  | 'design_back'
  | 'design_cta'
  | 'design_preview_title'
  | 'design_preview_desktop'
  | 'design_preview_mobile'
  | 'design_underdev_title'
  | 'design_underdev_desc'
  | 'design_default_desc'
  /* NotFoundPage */
  | 'not_found_title'
  | 'not_found_desc'
  | 'not_found_btn'
  /* PricingPage - hero & sections */
  | 'pricing_hero_title'
  | 'pricing_hero_desc'
  | 'pricing_section_title'
  | 'pricing_section_desc'
  | 'pricing_alasan_title'
  | 'pricing_dapat_title'
  | 'pricing_dapat_label'
  | 'pricing_target_label'
  | 'pricing_cta_title'
  | 'pricing_cta_desc'
  | 'pricing_hide_options'
  | 'pricing_show_options'
  /* PricingPage - Landing Page */
  | 'pricing_lp_subtitle'
  | 'pricing_lp_reason_1_desc'
  | 'pricing_lp_reason_2_desc'
  | 'pricing_lp_reason_3_desc'
  | 'pricing_lp_get_1'
  | 'pricing_lp_get_2'
  | 'pricing_lp_get_3'
  | 'pricing_lp_get_4'
  | 'pricing_lp_get_5'
  | 'pricing_lp_get_6'
  | 'pricing_lp_target_1'
  | 'pricing_lp_target_2'
  | 'pricing_lp_target_3'
  | 'pricing_lp_target_4'
  | 'pricing_lp_target_5'
  | 'pricing_lp_target_6'
  | 'pricing_lp_opt_3th'
  | 'pricing_lp_opt_3th_suffix'
  | 'pricing_lp_opt_2th'
  | 'pricing_lp_opt_2th_suffix'
  | 'pricing_lp_opt_1th'
  /* PricingPage - Company Profile */
  | 'pricing_cp_subtitle'
  | 'pricing_cp_reason_1_desc'
  | 'pricing_cp_reason_2_desc'
  | 'pricing_cp_reason_3_desc'
  | 'pricing_cp_get_1'
  | 'pricing_cp_get_2'
  | 'pricing_cp_get_3'
  | 'pricing_cp_get_4'
  | 'pricing_cp_get_5'
  | 'pricing_cp_get_6'
  | 'pricing_cp_target_1'
  | 'pricing_cp_target_2'
  | 'pricing_cp_target_3'
  | 'pricing_cp_target_4'
  | 'pricing_cp_target_5'
  | 'pricing_cp_target_6'
  | 'pricing_cp_opt_2th'
  | 'pricing_cp_opt_2th_suffix'
  | 'pricing_cp_opt_1th'
  /* PricingPage - Toko Online */
  | 'pricing_to_subtitle'
  | 'pricing_to_reason_1_desc'
  | 'pricing_to_reason_2_desc'
  | 'pricing_to_reason_3_desc'
  | 'pricing_to_get_1'
  | 'pricing_to_get_2'
  | 'pricing_to_get_3'
  | 'pricing_to_get_4'
  | 'pricing_to_get_5'
  | 'pricing_to_get_6'
  | 'pricing_to_target_1'
  | 'pricing_to_target_2'
  | 'pricing_to_target_3'
  | 'pricing_to_target_4'
  | 'pricing_to_target_5'
  | 'pricing_to_target_6'
  | 'pricing_to_opt_2th'
  | 'pricing_to_opt_2th_suffix'
  | 'pricing_to_opt_1th'
  /* PricingPage - Custom Website */
  | 'pricing_cw_subtitle'
  | 'pricing_cw_reason_1_desc'
  | 'pricing_cw_reason_2_desc'
  | 'pricing_cw_reason_3_desc'
  | 'pricing_cw_get_1'
  | 'pricing_cw_get_2'
  | 'pricing_cw_get_3'
  | 'pricing_cw_get_4'
  | 'pricing_cw_get_5'
  | 'pricing_cw_get_6'
  | 'pricing_cw_target_1'
  | 'pricing_cw_target_2'
  | 'pricing_cw_target_3'
  | 'pricing_cw_target_4'
  | 'pricing_cw_target_5'
  | 'pricing_cw_target_6'
  /* PricingPage - CTA */
  | 'pricing_cta_lp'
  | 'pricing_cta_cp'
  | 'pricing_cta_to'
  | 'pricing_cta_cw'
  /* Footer */
  | 'footer_service_webdev'
  | 'footer_service_landing'
  | 'footer_service_cp'
  | 'footer_service_ecom'
  | 'footer_service_custom'
  | 'footer_service_maintenance'
  | 'footer_service_redesign'
  | 'footer_service_uiux'
  | 'footer_nav_home'
  | 'footer_nav_design'
  | 'footer_nav_pricing'
  | 'footer_nav_about'
  | 'footer_nav_contact'
  | 'footer_nav_blog'
  /* generated Pricing.tsx */
  | 'pricing_pay_early_lp'
  | 'pricing_pay_early_cp'
  | 'pricing_pay_early_to'
  | 'pricing_save_27'
  | 'pricing_save_15'
  | 'pricing_save_23';

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
    pkg_title: 'Pilihan Paket Website yang Tepat untuk Bisnis Anda',
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
    price_month_lp: '*konversi perbulan : Rp. 167,000/bulan',
    price_month_cp: '*konversi perbulan : Rp. 250,000/bulan',
    price_month_to: '*konversi perbulan : Rp. 417.000/bulan',
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
    footer_rights: '© 2026 TunamSam. All Rights Reserved.',
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
    /* AboutPage */
    about_badge: 'Tentang Kami',
    about_title: 'Merancang Solusi Digital, Mengatasi Kendala Teknis, dan Bersinergi Sebagai Mitra Bisnis Jangka Panjang Anda.',
    about_visimisi_title: 'Visi dan Misi',
    about_visimisi_sub: 'Menjadikan pelaku usaha Go Digital dan mempunyai identitas Online.',
    about_visimisi_desc: 'TunamSam berkomitmen mendukung transformasi digital bagi pelaku usaha melalui layanan pembuatan website yang modern dan responsif. Kami menyediakan platform yang mudah digunakan untuk memperkuat kehadiran online mereka, membantu mereka mengadopsi teknologi digital dengan efisien dan efektif. Dengan fokus pada kebutuhan unik setiap bisnis, kami membangun website yang mencerminkan identitas mereka, memastikan mereka menonjol di pasar digital.',
    about_komitmen_title: 'Komitmen Kami',
    about_komitmen_sub: 'Kami ingin menjadi partner jangka panjang Anda bukan hanya vendor sekali pakai.',
    about_komitmen_desc: 'Kami memahami bahwa website adalah investasi penting dalam pertumbuhan bisnis. Maka, setiap proyek kami kerjakan dengan pendekatan strategis dan rasa tanggung jawab tinggi.',
    about_corevalues_title: 'Nilai Utama Perusahaan',
    about_value_1_title: 'Inovasi',
    about_value_1_desc: 'Kami terus mengeksplorasi teknologi baru agar solusi yang diberikan relevan dan kompetitif.',
    about_value_2_title: 'Berorientasi Hasil',
    about_value_2_desc: 'Fokus kami adalah konversi, efisiensi, dan pertumbuhan nyata untuk klien.',
    about_value_3_title: 'Kemitraan',
    about_value_3_desc: 'Kami percaya bisnis terbaik dibangun melalui kolaborasi yang saling memahami.',
    about_value_4_title: 'Keamanan & Kualitas',
    about_value_4_desc: 'Website Anda dibangun dengan standar keamanan dan kualitas tinggi.',
    about_value_5_title: 'Edukasi & Transparansi',
    about_value_5_desc: 'Kami membimbing klien memahami proses dan pilihan mereka.',
    /* BlogPage */
    blog_badge: 'Blog & Artikel',
    blog_title: 'Temukan Inspirasi, Strategi, dan Solusi Digital Terbaik untuk Pertumbuhan Bisnis Anda.',
    blog_cat_all: 'Semua',
    blog_cat_tek: 'Teknologi',
    blog_cat_web: 'Website',
    blog_cat_dm: 'Digital Marketing',
    blog_read_more: 'Baca Selengkapnya',
    blog_empty: 'Belum ada artikel untuk kategori ini.',
    blog_default_cat: 'Artikel',
    /* BlogPostPage */
    blog_notfound_title: 'Artikel Tidak Ditemukan',
    blog_notfound_desc: 'Maaf, artikel yang Anda cari tidak tersedia atau mungkin telah dipindahkan.',
    blog_share_title: 'Bagikan Artikel Ini',
    blog_back: 'Kembali ke Blog',
    /* ContactPage */
    contact_hero_title: 'Mulai Perjalanan Digital Anda Bersama TunamSam',
    contact_hero_desc: 'Kami siap membantu Anda membangun website profesional yang sesuai kebutuhan bisnis. Baik untuk konsultasi awal, pertanyaan teknis, atau penawaran kerjasama — kami siap mendengar.',
    contact_sales_title: 'Sales',
    contact_sales_desc: 'Hubungi tim sales kami untuk konsultasi pembuatan website, informasi paket layanan, atau penawaran kerja sama. Kami siap membantu Anda memilih solusi terbaik sesuai kebutuhan bisnis.',
    contact_sales_btn: 'Chat Admin',
    contact_support_title: 'Support',
    contact_support_desc: 'Punya kendala teknis atau butuh bantuan seputar website Anda? Tim support kami siap memberikan bantuan teknis dengan cepat dan efisien.',
    contact_support_btn: 'Bantuan Teknis',
    contact_form_title: 'Ajukan Penawaran, Tanyakan Kebutuhan, atau Mulai Konsultasi Website Anda',
    contact_form_desc: 'Isi formulir berikut untuk mendiskusikan pembuatan website, permintaan penawaran, atau pertanyaan teknis. Tim TunamSam siap membantu Anda.',
    contact_form_email_placeholder: 'Email',
    contact_form_name_placeholder: 'Nama Anda',
    contact_form_message_placeholder: 'Tulis Pesan Anda',
    contact_form_submit: 'Kirim Pesan',
    /* TestimonialsPage */
    testi_page_title: 'Apa Kata Mereka Tentang Kami?',
    testi_page_desc: 'Kepercayaan dan kepuasan klien adalah prioritas utama kami. Berikut adalah pengalaman mereka berkolaborasi dengan TunamSam.',
    testi_section_title: 'Kisah Sukses Bersama TunamSam',
    testi_section_desc: 'Bukan sekadar janji, ini adalah bukti nyata dari mereka yang telah mempercayakan perjalanan digitalnya kepada kami.',
    testi_quote: 'Website company profile kami jadi terlihat jauh lebih profesional. Tim TunamSam responsif dan mudah diajak diskusi dari awal hingga launching.',
    testi_author: 'Mbak Win',
    /* TestimonialCarousel */
    testi_carousel_quote: 'Website company profile kami jadi terlihat jauh lebih profesional. Tim TunamSam responsif dan mudah diajak diskusi dari awal hingga launching.',
    /* DesignCatalog */
    design_catalog_title: 'Pilih Desain Sesuai Kebutuhan Anda',
    design_catalog_desc: 'Kami telah menyiapkan berbagai pilihan desain premium yang bisa langsung disesuaikan dengan identitas brand Anda. Gunakan filter di bawah ini untuk menemukan desain yang paling cocok.',
    design_cat_all: 'Semua',
    design_card_desc: 'Desain responsif dengan performa optimal untuk',
    design_lihat_detail: 'Lihat Detail',
    design_pesan_desain: 'Pesan Desain',
    /* DesignDetail */
    design_back: 'Pilihan Desain',
    design_cta: 'Bikin website sekarang!',
    design_preview_title: 'Full Preview',
    design_preview_desktop: 'Desktop',
    design_preview_mobile: 'Mobile',
    design_underdev_title: 'Under Development',
    design_underdev_desc: 'Tampilan preview lengkap sedang dalam tahap pengembangan.',
    design_default_desc: 'Desain website yang ceria dan ramah pengguna, dirancang khusus untuk {category}. Desain ini menonjolkan tampilan yang bersih dan modern. Fitur-fitur utama meliputi galeri yang menarik, halaman produk dengan deskripsi lengkap, sistem pencarian yang canggih, serta proses yang mudah digunakan. Template ini sangat cocok untuk bisnis yang ingin memberikan pengalaman online yang nyaman dan menyenangkan bagi para pengunjung.',
    /* NotFoundPage */
    not_found_title: 'Waduh, Halaman Tidak Ditemukan',
    not_found_desc: 'Sepertinya halaman yang Anda cari sudah dipindahkan atau ada kesalahan penulisan link. Tenang, mari kita kembali ke beranda!',
    not_found_btn: 'Kembali ke Beranda',
    /* PricingPage - hero & sections */
    pricing_hero_title: 'Jasa Pembuatan Website Profesional untuk Bisnis Anda',
    pricing_hero_desc: 'Kami hadir untuk membantu Anda membangun website yang sesuai kebutuhan dengan harga yang transparan dan fitur premium. Pilih paket jasa pembuatan website yang paling cocok untuk bisnis Anda',
    pricing_section_title: 'Paket Harga Jasa Pembuatan Website TunamSam',
    pricing_section_desc: 'Kami menyediakan Paket Pembuatan Website sesuai kebutuhan dan kategori bisnis Anda.',
    pricing_alasan_title: 'Alasan {pkg} Tepat untuk Anda',
    pricing_dapat_title: 'Apa yang Anda Dapatkan & Untuk Siapa?',
    pricing_dapat_label: 'Yang Anda dapatkan',
    pricing_target_label: 'Cocok untuk berbagai Industri',
    pricing_cta_title: 'Mulai dari Sini, Bawa Bisnismu ke Dunia Digital.',
    pricing_cta_desc: '{pkg} simpel, cepat jadi, dan langsung bisa dipakai promosi',
    pricing_hide_options: 'Sembunyikan opsi',
    pricing_show_options: 'Lihat opsi lainnya',
    /* PricingPage - Landing Page */
    pricing_lp_subtitle: 'Bayar di awal untuk 3 tahun dan hemat 27%',
    pricing_lp_reason_1_desc: 'Ideal untuk kampanye promosi produk atau layanan tunggal dengan desain yang fokus pada satu tujuan spesifik.',
    pricing_lp_reason_2_desc: 'Setiap elemen pada landing page didesain untuk mengarahkan pengunjung melakukan tindakan tertentu, seperti mengisi formulir, mendaftar, atau melakukan pembelian.',
    pricing_lp_reason_3_desc: 'Dengan biaya yang lebih rendah dibanding website lengkap, landing page adalah solusi cepat dan efisien untuk memulai kehadiran digital Anda.',
    pricing_lp_get_1: '1 halaman landing page dengan desain eksklusif',
    pricing_lp_get_2: '3x revisi desain sebelum launching',
    pricing_lp_get_3: 'Gratis hosting & domain 1 tahun',
    pricing_lp_get_4: 'Optimasi Mobile-Friendly & SEO dasar',
    pricing_lp_get_5: 'Formulir kontak atau CTA (Call-to-Action) sesuai kebutuhan',
    pricing_lp_get_6: 'Integrasi Google Analytics & Facebook Pixel untuk tracking performa',
    pricing_lp_target_1: 'Promosi Produk Baru',
    pricing_lp_target_2: 'Pre-Order atau Launching Campaign',
    pricing_lp_target_3: 'Kampanye Iklan Digital (Google Ads/FB Ads)',
    pricing_lp_target_4: 'Event atau Webinar',
    pricing_lp_target_5: 'Pebisnis yang Baru Mulai Online',
    pricing_lp_target_6: 'Startup atau UMKM yang Baru Memulai Kehadiran Digital',
    pricing_lp_opt_3th: '3 Tahun',
    pricing_lp_opt_3th_suffix: 'Hemat 27%',
    pricing_lp_opt_2th: '2 Tahun',
    pricing_lp_opt_2th_suffix: '(Rp. 650.000 / tahun)',
    pricing_lp_opt_1th: '1 Tahun',
    /* PricingPage - Company Profile */
    pricing_cp_subtitle: 'Bayar di awal untuk 2 tahun dan hemat 15%',
    pricing_cp_reason_1_desc: 'Membangun citra profesional yang kuat untuk bisnis Anda di mata klien dan mitra kerja.',
    pricing_cp_reason_2_desc: 'Menampilkan portofolio, layanan, dan informasi perusahaan dengan rapi dan mudah diakses.',
    pricing_cp_reason_3_desc: 'Memperluas jangkauan bisnis Anda ke pasar yang lebih besar melalui kehadiran digital yang solid.',
    pricing_cp_get_1: 'Hingga 5 halaman (Home, About, Services, Portfolio, Contact)',
    pricing_cp_get_2: 'Desain kustom sesuai identitas brand',
    pricing_cp_get_3: 'Gratis hosting & domain 1 tahun',
    pricing_cp_get_4: 'Optimasi SEO on-page',
    pricing_cp_get_5: 'Integrasi media sosial',
    pricing_cp_get_6: 'Dukungan teknis selama 3 bulan',
    pricing_cp_target_1: 'Perusahaan B2B & B2C',
    pricing_cp_target_2: 'Agensi Kreatif & Konsultan',
    pricing_cp_target_3: 'Klinik & Rumah Sakit',
    pricing_cp_target_4: 'Firma Hukum & Akuntan',
    pricing_cp_target_5: 'Kontraktor & Properti',
    pricing_cp_target_6: 'Lembaga Pendidikan',
    pricing_cp_opt_2th: '2 Tahun',
    pricing_cp_opt_2th_suffix: 'Hemat 15%',
    pricing_cp_opt_1th: '1 Tahun',
    /* PricingPage - Toko Online */
    pricing_to_subtitle: 'Bayar di awal untuk 2 tahun dan hemat 23%',
    pricing_to_reason_1_desc: 'Toko Anda buka 24 jam sehari, 7 hari seminggu, tanpa batasan waktu dan lokasi.',
    pricing_to_reason_2_desc: 'Sistem pengelolaan stok, harga, dan varian produk yang mudah dipahami.',
    pricing_to_reason_3_desc: 'Terhubung dengan berbagai metode pembayaran (transfer bank, e-wallet, kartu kredit) dan kurir.',
    pricing_to_get_1: 'Sistem E-Commerce lengkap (Cart, Checkout, Payment Gateway)',
    pricing_to_get_2: 'Upload hingga 50 produk awal',
    pricing_to_get_3: 'Gratis hosting & domain 1 tahun',
    pricing_to_get_4: 'Kalkulasi ongkos kirim otomatis',
    pricing_to_get_5: 'Laporan penjualan dasar',
    pricing_to_get_6: 'Pelatihan penggunaan sistem',
    pricing_to_target_1: 'Toko Retail & Fashion',
    pricing_to_target_2: 'Penjual Gadget & Elektronik',
    pricing_to_target_3: 'Toko Buku & Alat Tulis',
    pricing_to_target_4: 'Kosmetik & Skincare',
    pricing_to_target_5: 'F&B (Makanan & Minuman Kemasan)',
    pricing_to_target_6: 'Distributor Produk',
    pricing_to_opt_2th: '2 Tahun',
    pricing_to_opt_2th_suffix: 'Hemat 23%',
    pricing_to_opt_1th: '1 Tahun',
    /* PricingPage - Custom Website */
    pricing_cw_subtitle: 'Solusi spesifik sesuai kebutuhan sistem Anda',
    pricing_cw_reason_1_desc: 'Tampilan visual yang dibuat dari nol, 100% eksklusif untuk brand Anda.',
    pricing_cw_reason_2_desc: 'Pengembangan fitur khusus yang tidak ada di platform standar (misal: sistem booking kompleks, portal member).',
    pricing_cw_reason_3_desc: 'Dibangun dengan arsitektur yang siap menampung pertumbuhan trafik dan data di masa depan.',
    pricing_cw_get_1: 'Analisis kebutuhan sistem mendalam',
    pricing_cw_get_2: 'UI/UX Design eksklusif (Figma prototype)',
    pricing_cw_get_3: 'Pengembangan fitur custom (Frontend & Backend)',
    pricing_cw_get_4: 'Pengujian keamanan dan performa',
    pricing_cw_get_5: 'Server setup & deployment',
    pricing_cw_get_6: 'Maintenance & Support jangka panjang',
    pricing_cw_target_1: 'Startup Teknologi',
    pricing_cw_target_2: 'Marketplace Niche',
    pricing_cw_target_3: 'Portal Berita & Media Berskala Besar',
    pricing_cw_target_4: 'Sistem Manajemen Internal (ERP/CRM mini)',
    pricing_cw_target_5: 'Platform E-Learning',
    pricing_cw_target_6: 'Sistem Booking & Reservasi Kompleks',
    /* PricingPage - CTA */
    pricing_cta_lp: 'Buat Landingpage sekarang!',
    pricing_cta_cp: 'Buat Company Profile sekarang!',
    pricing_cta_to: 'Buat Toko Online sekarang!',
    pricing_cta_cw: 'Konsultasi Custom Website!',
    /* Footer */
    footer_service_webdev: 'Website Development',
    footer_service_landing: 'Landing Page',
    footer_service_cp: 'Company Profile',
    footer_service_ecom: 'E-Commerce Website',
    footer_service_custom: 'Custom Web App',
    footer_service_maintenance: 'Website Maintenance',
    footer_service_redesign: 'Website Redesign',
    footer_service_uiux: 'UI/UX Design',
    footer_nav_home: 'Home',
    footer_nav_design: 'Pilihan Desain',
    footer_nav_pricing: 'Harga Website',
    footer_nav_about: 'Tentang Kami',
    footer_nav_contact: 'Kontak',
    footer_nav_blog: 'Blog',
    /* generated Pricing.tsx */
    pricing_pay_early_lp: 'Bayar di awal untuk 3 tahun dan hemat 27%',
    pricing_pay_early_cp: 'Bayar di awal untuk 2 tahun dan hemat 15%',
    pricing_pay_early_to: 'Bayar di awal untuk 2 tahun dan hemat 23%',
    pricing_save_27: 'Hemat 27%',
    pricing_save_15: 'Hemat 15%',
    pricing_save_23: 'Hemat 23%',
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
    footer_rights: '© 2026 TunamSam. All Rights Reserved.',
    /* AboutPage */
    about_badge: 'About Us',
    about_title: 'Designing Digital Solutions, Overcoming Technical Challenges, and Synergizing as Your Long-Term Business Partner.',
    about_visimisi_title: 'Vision and Mission',
    about_visimisi_sub: 'Empowering businesses to Go Digital and have an Online identity.',
    about_visimisi_desc: 'TunamSam is committed to supporting digital transformation for business owners through modern and responsive website creation services. We provide an easy-to-use platform to strengthen their online presence, helping them adopt digital technology efficiently and effectively. With a focus on each business\'s unique needs, we build websites that reflect their identity, ensuring they stand out in the digital market.',
    about_komitmen_title: 'Our Commitment',
    about_komitmen_sub: 'We want to be your long-term partner, not just a one-time vendor.',
    about_komitmen_desc: 'We understand that a website is an important investment in business growth. Therefore, we approach every project with a strategic mindset and a strong sense of responsibility.',
    about_corevalues_title: 'Core Values',
    about_value_1_title: 'Innovation',
    about_value_1_desc: 'We continuously explore new technologies to ensure our solutions remain relevant and competitive.',
    about_value_2_title: 'Result-Oriented',
    about_value_2_desc: 'Our focus is on conversion, efficiency, and real growth for our clients.',
    about_value_3_title: 'Partnership',
    about_value_3_desc: 'We believe the best businesses are built through collaboration and mutual understanding.',
    about_value_4_title: 'Security & Quality',
    about_value_4_desc: 'Your website is built with high security and quality standards.',
    about_value_5_title: 'Education & Transparency',
    about_value_5_desc: 'We guide our clients to understand the process and their choices.',
    /* BlogPage */
    blog_badge: 'Blog & Articles',
    blog_title: 'Find Inspiration, Strategies, and the Best Digital Solutions for Your Business Growth.',
    blog_cat_all: 'All',
    blog_cat_tek: 'Technology',
    blog_cat_web: 'Website',
    blog_cat_dm: 'Digital Marketing',
    blog_read_more: 'Read More',
    blog_empty: 'No articles yet for this category.',
    blog_default_cat: 'Article',
    /* BlogPostPage */
    blog_notfound_title: 'Article Not Found',
    blog_notfound_desc: 'Sorry, the article you\'re looking for is not available or may have been moved.',
    blog_share_title: 'Share This Article',
    blog_back: 'Back to Blog',
    /* ContactPage */
    contact_hero_title: 'Start Your Digital Journey with TunamSam',
    contact_hero_desc: 'We are ready to help you build a professional website that suits your business needs. Whether for initial consultation, technical questions, or partnership inquiries — we are ready to listen.',
    contact_sales_title: 'Sales',
    contact_sales_desc: 'Contact our sales team for website creation consultations, service package information, or partnership offers. We are ready to help you choose the best solution for your business needs.',
    contact_sales_btn: 'Chat Admin',
    contact_support_title: 'Support',
    contact_support_desc: 'Having technical issues or need help with your website? Our support team is ready to provide technical assistance quickly and efficiently.',
    contact_support_btn: 'Technical Support',
    contact_form_title: 'Submit a Proposal, Ask About Your Needs, or Start Your Website Consultation',
    contact_form_desc: 'Fill out the following form to discuss website creation, requests for proposals, or technical questions. The TunamSam team is ready to help you.',
    contact_form_email_placeholder: 'Email',
    contact_form_name_placeholder: 'Your Name',
    contact_form_message_placeholder: 'Write Your Message',
    contact_form_submit: 'Send Message',
    /* TestimonialsPage */
    testi_page_title: 'What Are They Saying About Us?',
    testi_page_desc: 'Client trust and satisfaction are our top priorities. Here are their experiences collaborating with TunamSam.',
    testi_section_title: 'Success Stories with TunamSam',
    testi_section_desc: 'More than just promises, these are real testimonials from those who have entrusted their digital journey to us.',
    testi_quote: 'Our company profile website looks much more professional now. The TunamSam team is responsive and easy to discuss with from start to launch.',
    testi_author: 'Mbak Win',
    /* TestimonialCarousel */
    testi_carousel_quote: 'Our company profile website looks much more professional now. The TunamSam team is responsive and easy to discuss with from start to launch.',
    /* DesignCatalog */
    design_catalog_title: 'Choose a Design That Fits Your Needs',
    design_catalog_desc: 'We have prepared a variety of premium design options that can be customized to your brand identity. Use the filters below to find the most suitable design.',
    design_cat_all: 'All',
    design_card_desc: 'Responsive design with optimal performance for your',
    design_lihat_detail: 'View Details',
    design_pesan_desain: 'Order Design',
    /* DesignDetail */
    design_back: 'Design Choices',
    design_cta: 'Create a website now!',
    design_preview_title: 'Full Preview',
    design_preview_desktop: 'Desktop',
    design_preview_mobile: 'Mobile',
    design_underdev_title: 'Under Development',
    design_underdev_desc: 'Full preview display is currently under development.',
    design_default_desc: 'A cheerful and user-friendly website design, specially crafted for {category}. This design highlights a clean and modern look. Key features include an attractive gallery, product pages with complete descriptions, an advanced search system, and an easy-to-use process. This template is perfect for businesses that want to provide a comfortable and enjoyable online experience for their visitors.',
    /* NotFoundPage */
    not_found_title: 'Oops, Page Not Found',
    not_found_desc: 'It looks like the page you are looking for has been moved or the link is incorrect. Don\'t worry, let\'s head back to the homepage!',
    not_found_btn: 'Back to Home',
    /* PricingPage - hero & sections */
    pricing_hero_title: 'Professional Website Creation Service for Your Business',
    pricing_hero_desc: 'We are here to help you build a website that suits your needs with transparent pricing and premium features. Choose the website creation package that best fits your business.',
    pricing_section_title: 'TunamSam Website Creation Price Packages',
    pricing_section_desc: 'We provide Website Creation Packages tailored to your business needs and category.',
    pricing_alasan_title: 'Why {pkg} is Right for You',
    pricing_dapat_title: 'What You Get & Who Is It For?',
    pricing_dapat_label: 'What You Get',
    pricing_target_label: 'Suitable for Various Industries',
    pricing_cta_title: 'Start Here, Take Your Business to the Digital World.',
    pricing_cta_desc: '{pkg} simple, quick to build, and ready for promotion',
    pricing_hide_options: 'Hide options',
    pricing_show_options: 'View other options',
    /* PricingPage - Landing Page */
    pricing_lp_subtitle: 'Pay upfront for 3 years and save 27%',
    pricing_lp_reason_1_desc: 'Ideal for promoting a single product or service campaign with a design focused on a specific goal.',
    pricing_lp_reason_2_desc: 'Every element on the landing page is designed to direct visitors to take a specific action, such as filling out a form, signing up, or making a purchase.',
    pricing_lp_reason_3_desc: 'With a lower cost than a full website, a landing page is a quick and efficient solution to start your digital presence.',
    pricing_lp_get_1: '1 landing page with exclusive design',
    pricing_lp_get_2: '3x design revisions before launch',
    pricing_lp_get_3: 'Free hosting & domain for 1 year',
    pricing_lp_get_4: 'Mobile-Friendly optimization & basic SEO',
    pricing_lp_get_5: 'Contact form or CTA (Call-to-Action) as needed',
    pricing_lp_get_6: 'Google Analytics & Facebook Pixel integration for performance tracking',
    pricing_lp_target_1: 'New Product Promotions',
    pricing_lp_target_2: 'Pre-Order or Launch Campaigns',
    pricing_lp_target_3: 'Digital Ad Campaigns (Google Ads/FB Ads)',
    pricing_lp_target_4: 'Events or Webinars',
    pricing_lp_target_5: 'Businesses Just Starting Online',
    pricing_lp_target_6: 'Startups or SMEs Beginning Their Digital Presence',
    pricing_lp_opt_3th: '3 Years',
    pricing_lp_opt_3th_suffix: 'Save 27%',
    pricing_lp_opt_2th: '2 Years',
    pricing_lp_opt_2th_suffix: '(Rp. 650,000 / year)',
    pricing_lp_opt_1th: '1 Year',
    /* PricingPage - Company Profile */
    pricing_cp_subtitle: 'Pay upfront for 2 years and save 15%',
    pricing_cp_reason_1_desc: 'Builds a strong professional image for your business in the eyes of clients and partners.',
    pricing_cp_reason_2_desc: 'Displays portfolio, services, and company information neatly and accessibly.',
    pricing_cp_reason_3_desc: 'Expands your business reach to a larger market through a solid digital presence.',
    pricing_cp_get_1: 'Up to 5 pages (Home, About, Services, Portfolio, Contact)',
    pricing_cp_get_2: 'Custom design according to brand identity',
    pricing_cp_get_3: 'Free hosting & domain for 1 year',
    pricing_cp_get_4: 'On-page SEO optimization',
    pricing_cp_get_5: 'Social media integration',
    pricing_cp_get_6: 'Technical support for 3 months',
    pricing_cp_target_1: 'B2B & B2C Companies',
    pricing_cp_target_2: 'Creative Agencies & Consultants',
    pricing_cp_target_3: 'Clinics & Hospitals',
    pricing_cp_target_4: 'Law Firms & Accountants',
    pricing_cp_target_5: 'Contractors & Property',
    pricing_cp_target_6: 'Educational Institutions',
    pricing_cp_opt_2th: '2 Years',
    pricing_cp_opt_2th_suffix: 'Save 15%',
    pricing_cp_opt_1th: '1 Year',
    /* PricingPage - Toko Online */
    pricing_to_subtitle: 'Pay upfront for 2 years and save 23%',
    pricing_to_reason_1_desc: 'Your store is open 24 hours a day, 7 days a week, with no time or location limits.',
    pricing_to_reason_2_desc: 'An easy-to-understand system for managing stock, prices, and product variants.',
    pricing_to_reason_3_desc: 'Connected to various payment methods (bank transfer, e-wallet, credit card) and couriers.',
    pricing_to_get_1: 'Complete E-Commerce system (Cart, Checkout, Payment Gateway)',
    pricing_to_get_2: 'Upload up to 50 initial products',
    pricing_to_get_3: 'Free hosting & domain for 1 year',
    pricing_to_get_4: 'Automatic shipping cost calculation',
    pricing_to_get_5: 'Basic sales reports',
    pricing_to_get_6: 'System usage training',
    pricing_to_target_1: 'Retail & Fashion Stores',
    pricing_to_target_2: 'Gadget & Electronics Sellers',
    pricing_to_target_3: 'Bookstores & Stationery',
    pricing_to_target_4: 'Cosmetics & Skincare',
    pricing_to_target_5: 'F&B (Packaged Food & Beverages)',
    pricing_to_target_6: 'Product Distributors',
    pricing_to_opt_2th: '2 Years',
    pricing_to_opt_2th_suffix: 'Save 23%',
    pricing_to_opt_1th: '1 Year',
    /* PricingPage - Custom Website */
    pricing_cw_subtitle: 'Specific solutions tailored to your system needs',
    pricing_cw_reason_1_desc: 'Visual design created from scratch, 100% exclusive to your brand.',
    pricing_cw_reason_2_desc: 'Development of unique features not available on standard platforms (e.g., complex booking systems, member portals).',
    pricing_cw_reason_3_desc: 'Built with an architecture ready to accommodate future traffic and data growth.',
    pricing_cw_get_1: 'In-depth system needs analysis',
    pricing_cw_get_2: 'Exclusive UI/UX Design (Figma prototype)',
    pricing_cw_get_3: 'Custom feature development (Frontend & Backend)',
    pricing_cw_get_4: 'Security and performance testing',
    pricing_cw_get_5: 'Server setup & deployment',
    pricing_cw_get_6: 'Long-term Maintenance & Support',
    pricing_cw_target_1: 'Technology Startups',
    pricing_cw_target_2: 'Niche Marketplaces',
    pricing_cw_target_3: 'Large-Scale News Portals & Media',
    pricing_cw_target_4: 'Internal Management Systems (mini ERP/CRM)',
    pricing_cw_target_5: 'E-Learning Platforms',
    pricing_cw_target_6: 'Complex Booking & Reservation Systems',
    /* PricingPage - CTA */
    pricing_cta_lp: 'Create Landing Page now!',
    pricing_cta_cp: 'Create Company Profile now!',
    pricing_cta_to: 'Create Online Store now!',
    pricing_cta_cw: 'Consult Custom Website!',
    /* Footer */
    footer_service_webdev: 'Website Development',
    footer_service_landing: 'Landing Page',
    footer_service_cp: 'Company Profile',
    footer_service_ecom: 'E-Commerce Website',
    footer_service_custom: 'Custom Web App',
    footer_service_maintenance: 'Website Maintenance',
    footer_service_redesign: 'Website Redesign',
    footer_service_uiux: 'UI/UX Design',
    footer_nav_home: 'Home',
    footer_nav_design: 'Design Choices',
    footer_nav_pricing: 'Website Pricing',
    footer_nav_about: 'About Us',
    footer_nav_contact: 'Contact',
    footer_nav_blog: 'Blog',
    /* generated Pricing.tsx */
    pricing_pay_early_lp: 'Pay upfront for 3 years and save 27%',
    pricing_pay_early_cp: 'Pay upfront for 2 years and save 15%',
    pricing_pay_early_to: 'Pay upfront for 2 years and save 23%',
    pricing_save_27: 'Save 27%',
    pricing_save_15: 'Save 15%',
    pricing_save_23: 'Save 23%',
  },
};

export const FLAG_URLS: Record<Lang, string> = {
  ID: 'https://flagcdn.com/w20/id.webp',
  EN: 'https://flagcdn.com/w20/gb.webp',
};
