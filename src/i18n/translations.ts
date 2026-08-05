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
  | 'footer_tag'
  | 'footer_quick'
  | 'footer_connect'
  | 'footer_rights'
  | 'footer_about'
  | 'footer_content'
  | 'price_landing_page'
  | 'price_landing_page_sub'
  | 'price_company_profile'
  | 'price_company_profile_sub'
  | 'price_online_store'
  | 'price_online_store_sub'
  | 'price_custom_website'
  | 'price_custom_website_sub'
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
  | 'blog_cat_web'
  | 'blog_cat_seo'
  | 'blog_cat_bali'
  | 'blog_cat_hosp'
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
  | 'pricing_lp_get_7'
  | 'pricing_lp_get_8'
  | 'pricing_lp_target_1'
  | 'pricing_lp_target_2'
  | 'pricing_lp_target_3'
  | 'pricing_lp_target_4'
  | 'pricing_lp_target_5'
  | 'pricing_lp_target_6'
  | 'pricing_lp_target_7'
  | 'pricing_lp_target_8'
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
  | 'pricing_cp_get_7'
  | 'pricing_cp_get_8'
  | 'pricing_cp_target_1'
  | 'pricing_cp_target_2'
  | 'pricing_cp_target_3'
  | 'pricing_cp_target_4'
  | 'pricing_cp_target_5'
  | 'pricing_cp_target_6'
  | 'pricing_cp_target_7'
  | 'pricing_cp_target_8'
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
  | 'pricing_to_get_7'
  | 'pricing_to_target_1'
  | 'pricing_to_target_2'
  | 'pricing_to_target_3'
  | 'pricing_to_target_4'
  | 'pricing_to_target_5'
  | 'pricing_to_target_6'
  | 'pricing_to_target_7'
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
  | 'pricing_cw_get_7'
  | 'pricing_cw_target_1'
  | 'pricing_cw_target_2'
  | 'pricing_cw_target_3'
  | 'pricing_cw_target_4'
  | 'pricing_cw_target_5'
  | 'pricing_cw_target_6'
  | 'pricing_cw_target_7'
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
    seo_title: 'TunamSam — Jasa Pembuatan Website & Software House Bali, Indonesia',
    seo_description:
      'TunamSam adalah Software House Bali, Indonesia yang menyediakan jasa pembuatan website, aplikasi web, dashboard, UI/UX design, dan solusi digital untuk bisnis Anda.',
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
    p1_title: 'Dibuat Khusus untuk Bisnis di Bali',
    p1_desc1:
      'Kami membantu villa, rental kendaraan, cafe, restoran, dan berbagai bisnis lokal membangun website profesional yang mencerminkan kualitas bisnis Anda. Setiap website dirancang untuk meningkatkan kepercayaan pelanggan dan memperkuat identitas brand.',
    p1_desc2:
      'Dengan desain modern, performa yang cepat, dan pengalaman pengguna yang optimal, website Anda siap membantu menghasilkan lebih banyak reservasi, inquiry, dan peluang bisnis baru.',
    s1_title: 'Lebih dari Sekadar Website yang Menarik',
    s1_desc:
      'Website yang baik bukan hanya terlihat profesional, tetapi juga memberikan pengalaman terbaik bagi setiap pengunjung. Kami membangun website yang cepat, responsif, ramah SEO, dan mudah digunakan di semua perangkat untuk membantu bisnis Anda menjangkau lebih banyak pelanggan dan menghasilkan lebih banyak peluang.',
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
      'Kami Membangun Website untuk Membantu Bisnis Anda Bertumbuh.',
    c1_title: 'Bangun Kepercayaan Pelanggan',
    c1_desc:
      'Website profesional memberikan kesan pertama yang kuat sehingga pelanggan lebih yakin untuk memilih bisnis Anda.',
    c2_title: 'Dapatkan Lebih Banyak Pelanggan',
    c2_desc:
      'Website yang dioptimalkan membantu bisnis Anda lebih mudah ditemukan di Google dan menjangkau lebih banyak calon pelanggan.',
    c3_title: 'Permudah Pelanggan Menghubungi Anda',
    c3_desc:
      'Integrasi WhatsApp, formulir kontak, dan tombol Call to Action memudahkan pelanggan melakukan reservasi maupun konsultasi.',
    c4_title: 'Cepat, Responsif & Siap Berkembang',
    c4_desc:
      'Website yang cepat, mobile-friendly, dan mudah dikembangkan memastikan bisnis Anda siap tumbuh dalam jangka panjang.',
    pkg_title: 'Temukan Website yang Tepat untuk Bisnis Anda',
    pkg_subtitle:
      'Setiap bisnis memiliki kebutuhan yang berbeda. Mulai dari landing page sederhana hingga website lengkap, kami membantu Anda memilih solusi yang sesuai dengan tujuan dan anggaran bisnis.',
    pkg_desc:
      'Landing page adalah solusi ideal untuk bisnis yang ingin mulai membangun kehadiran online dengan cepat dan profesional. Cocok untuk villa, rental kendaraan, cafe, restoran, laundry, maupun promosi produk atau layanan tertentu. Dirancang dengan fokus pada konversi, setiap halaman mengarahkan pengunjung untuk melakukan tindakan seperti menghubungi WhatsApp, mengisi formulir, atau melakukan reservasi sehingga peluang mendapatkan pelanggan menjadi lebih besar.',
    pkg_desc_cp:
      'Website Company Profile membantu bisnis membangun citra profesional, meningkatkan kepercayaan pelanggan, dan memperkuat kehadiran digital. Sangat cocok untuk villa management, hotel, restoran, kontraktor, travel agency, maupun perusahaan yang ingin tampil lebih kredibel. Tampilkan informasi bisnis, layanan, portofolio, dan kontak secara profesional dalam satu website yang mudah diakses kapan saja.',
    pkg_desc_to:
      'Jual produk Anda secara online melalui website e-commerce yang profesional, cepat, dan mudah dikelola. Cocok untuk UMKM, fashion, skincare, makanan & minuman, souvenir, hingga produk lokal Bali yang ingin menjangkau lebih banyak pelanggan. Dilengkapi dengan fitur pengelolaan produk, checkout, dan pembayaran online untuk memberikan pengalaman belanja yang mudah sekaligus membantu meningkatkan penjualan.',
    pkg_desc_custom:
      'Layanan Custom Website kami dirancang untuk bisnis yang membutuhkan fitur di luar website standar. Mulai dari sistem booking khusus, dashboard admin, integrasi API, CRM, hingga solusi yang disesuaikan dengan alur operasional bisnis Anda. Cocok untuk villa management, rental kendaraan, restoran, maupun bisnis lain di Bali yang membutuhkan website dengan fungsi yang lebih kompleks dan fleksibel.',
    process: 'Our Process',
    proc_title: 'Proses Pembuatan Website yang Mudah dan Transparan',
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
    proc_desc: 'Setiap proyek dimulai dengan memahami kebutuhan dan tujuan bisnis Anda. Kami menangani seluruh proses, mulai dari konsultasi hingga website siap digunakan, sehingga Anda dapat fokus mengembangkan bisnis.',
    proc_step1_title: 'Konsultasi',
    proc_step1_desc: 'Kami mempelajari bisnis, target pelanggan, dan tujuan website Anda untuk menentukan solusi yang paling tepat sejak awal.',
    proc_step2_title: 'Perencanaan',
    proc_step2_desc: 'Kami menyusun struktur website, fitur, dan strategi konten yang sesuai dengan kebutuhan dan tujuan bisnis Anda.',
    proc_step3_title: 'Pengerjaan',
    proc_step3_desc: 'Website dikembangkan dengan desain modern, performa optimal, serta pengalaman pengguna yang nyaman di semua perangkat.',
    proc_step4_title: 'Review',
    proc_step4_desc: 'Anda dapat meninjau hasil website dan memberikan masukan. Kami akan menyempurnakan setiap detail hingga sesuai dengan harapan Anda.',
    proc_step5_title: 'Website Siap Digunakan',
    proc_step5_desc: 'Setelah semua disetujui, website dipublikasikan dan siap membantu meningkatkan kredibilitas bisnis, menarik pelanggan, dan mengembangkan bisnis Anda secara online.',
    testi_title: 'Dipercaya Bisnis di Bali untuk Membangun Website Profesional',
    testi_desc: 'Dari villa, restoran, hingga bisnis lokal, kami membantu menghadirkan website profesional yang meningkatkan kepercayaan pelanggan dan mendukung pertumbuhan bisnis.',
    cta_title: 'Wujudkan Website Profesional untuk Bisnis Anda',
    cta_desc: 'Kami membantu villa, restoran, dan bisnis lokal di Bali memiliki website yang menarik, cepat, dan siap mendukung pertumbuhan bisnis.',
    cta_btn: 'Buat website sekarang',
    design_title: 'Temukan Inspirasi Website untuk Bisnis Anda',
    design_desc: 'Setiap website dirancang sesuai kebutuhan bisnis, mulai dari villa, hospitality, toko online, hingga company profile. Jelajahi beberapa contoh desain yang kami buat untuk membantu Anda membayangkan website bisnis Anda sendiri.',
    design_landing: 'Landing Page',
    design_company: 'Website Bisnis Profesional',
    design_toko: 'Website Toko Online',
    design_btn: 'Lihat pilihan desain lainnya',
    tech_title: 'Website yang Dirancang untuk Membantu Bisnis Anda Bertumbuh',
    tech_desc: 'Kami tidak hanya membuat website yang menarik secara visual, tetapi juga merancang pengalaman yang memudahkan pelanggan menemukan informasi, menghubungi bisnis Anda, hingga melakukan booking atau pembelian. Mulai dari villa, rental kendaraan, cafe, restoran, hingga bisnis lokal lainnya di Bali, setiap website dibuat agar cepat, profesional, dan mendukung pertumbuhan bisnis Anda.',
    why_title: 'Mengapa Memilih TunamSam?',
    why_desc: 'TunamSam jasa pembuatan website professional yang layaknya sebagai partner bisnis anda untuk menciptakan website berkualitas dan sesuai tujuan bisnis.',
    why_1_title: 'Fokus pada Bisnis di Bali',
    why_1_desc: 'Kami memahami kebutuhan villa, rental, cafe, restoran, dan bisnis lokal sehingga website dibuat sesuai target pelanggan Anda.',
    why_2_title: 'Website yang Siap Menghasilkan Inquiry',
    why_2_desc: 'Setiap halaman dirancang agar pengunjung lebih mudah menghubungi WhatsApp, melakukan booking, atau mengirim formulir.',
    why_3_title: 'SEO Friendly',
    why_3_desc: 'Website dibuat dengan struktur yang ramah mesin pencari sehingga lebih mudah ditemukan di Google.',
    why_4_title: 'Cepat dan Responsif',
    why_4_desc: 'Website tampil optimal di desktop maupun mobile sehingga memberikan pengalaman yang nyaman.',
    why_5_title: 'Dukungan Setelah Website Selesai',
    why_5_desc: 'Kami tetap membantu apabila Anda membutuhkan update, perbaikan, maupun pengembangan website.',
    why_6_title: 'Gratis Bahasa Inggris & Indonesia',
    why_6_desc: 'Cocok untuk menjangkau wisatawan internasional maupun pelanggan lokal.',
    why_7_title: 'Harga Transparan',
    why_7_desc: 'Tidak ada biaya tersembunyi. Semua fitur dan harga dijelaskan sejak awal.',
    why_8_title: 'Website Mudah Dikembangkan',
    why_8_desc: 'Website dapat ditambahkan fitur baru kapan saja seiring berkembangnya bisnis Anda.',
    why_9_title: 'Teknologi berbasis AI',
    why_9_desc: 'Memanfaatkan teknologi AI terkini untuk memastikan konten situs web Anda dibuat sebaik mungkin serta mengoreksi dan menyempurnakan konten situs web.',
    why_10_title: 'Customer Support yang Responsif',
    why_10_desc: 'Kami selalu berusaha responsif untuk memenuhi kebutuhan Anda dengan cepat dan efektif.',
    price_start_from: 'Mulai dari',
    price_year: '/ Tahun',
    price_month_lp: '*konversi perbulan : Rp. 167,000/bulan',
    price_month_cp: '*konversi perbulan : Rp. 250,000/bulan',
    price_month_to: '*konversi perbulan : Rp. 417.000/bulan',
    price_btn_lp: 'Buat Landing Page Sekarang!',
    price_btn_cp: 'Buat Website Bisnis Profesional Sekarang!',
    price_btn_to: 'Buat Website Toko Online Sekarang!',
    price_btn_custom: 'Buat Website Kustom Sekarang!',
    price_custom_price: 'Harga Khusus',
    price_custom_desc: '*Diskusikan dengan kami untuk harga sesuai permintaan anda',
    price_free_trans: 'Terjemahan Bahasa Gratis',
    price_best_choice: 'Best Choice',
    lp_f1_t: 'Fokus pada Konversi',
    lp_f1_d: 'Setiap bagian dirancang untuk mendorong pengunjung melakukan tindakan, seperti menghubungi WhatsApp, melakukan booking, atau mengirim inquiry.',
    lp_f2_t: 'Cepat Diluncurkan',
    lp_f2_d: 'Landing page dapat diselesaikan lebih cepat dibanding website lengkap, sehingga bisnis Anda dapat segera dipromosikan.',
    lp_f3_t: 'Optimal di Semua Perangkat',
    lp_f3_d: 'Dirancang agar tampil sempurna di desktop, tablet, maupun smartphone untuk memberikan pengalaman terbaik kepada setiap pengunjung.',
    cp_f1_t: 'Bangun Kepercayaan',
    cp_f1_d: 'Website profesional membantu meningkatkan kredibilitas bisnis dan memberikan kesan pertama yang meyakinkan bagi calon pelanggan maupun mitra.',
    cp_f2_t: 'Informasi Mudah Diakses',
    cp_f2_d: 'Tampilkan profil perusahaan, layanan, portofolio, dan informasi penting dalam struktur yang mudah dipahami.',
    cp_f3_t: 'Perkuat Kehadiran Digital',
    cp_f3_d: 'Jadikan bisnis Anda lebih mudah ditemukan dan tampil profesional di hadapan pelanggan, mitra, maupun investor.',
    to_f1_t: 'Toko Online Buka 24/7',
    to_f1_d: 'Kelola produk, kategori, stok, dan pesanan melalui dashboard yang sederhana dan mudah digunakan.',
    to_f2_t: 'Mudah Dikelola',
    to_f2_d: 'Checkout yang mudah dan alur pembelian yang jelas membantu pelanggan menyelesaikan transaksi dengan lebih cepat.',
    to_f3_t: 'Siap Meningkatkan Penjualan',
    to_f3_d: 'Website dirancang untuk menampilkan produk secara menarik dan memberikan pengalaman belanja yang mendorong lebih banyak penjualan.',
    cw_f1_t: 'Dibangun Sesuai Kebutuhan Bisnis',
    cw_f1_d: 'Setiap website dirancang berdasarkan kebutuhan bisnis Anda, bukan menggunakan template yang sama untuk semua klien.',
    cw_f2_t: 'Integrasi Sistem yang Fleksibel',
    cw_f2_d: 'Dapat dihubungkan dengan payment gateway, WhatsApp, booking system, CRM, ERP, atau layanan pihak ketiga lainnya.',
    cw_f3_t: 'Siap Bertumbuh Bersama Bisnis',
    cw_f3_d: 'Website dibangun dengan struktur yang mudah dikembangkan ketika bisnis Anda semakin besar.',
    addserv_title: 'Layanan Tambahan untuk Mengembangkan Bisnis Anda',
    addserv_desc: 'Website yang baik adalah awal dari pertumbuhan bisnis. Kami juga menyediakan berbagai layanan tambahan untuk meningkatkan performa website, menjangkau lebih banyak pelanggan, dan mendukung perkembangan bisnis Anda secara berkelanjutan.',
    addserv_btn: 'Dapatkan Layanan',
    addserv_1_title: 'Optimasi & Perbaikan Website',
    addserv_1_desc: 'Membantu memperbaiki bug, meningkatkan performa, serta mengoptimalkan website agar tetap cepat, stabil, aman, dan memberikan pengalaman terbaik bagi pengunjung.',
    addserv_2_title: 'Search Engine Optimization (SEO)',
    addserv_2_desc: 'Tingkatkan visibilitas website Anda di Google melalui optimasi teknis, struktur halaman, dan strategi konten yang membantu menarik lebih banyak trafik organik.',
    addserv_3_title: 'Maintenance Website',
    addserv_3_desc: 'Pastikan website Anda selalu berjalan optimal dengan layanan pembaruan rutin, backup data, monitoring, dan perlindungan keamanan secara berkala.',
    addserv_4_title: 'Manajemen Media Sosial',
    addserv_4_desc: 'Bangun kehadiran digital yang konsisten melalui pengelolaan media sosial, pembuatan konten, dan strategi komunikasi yang sesuai dengan karakter bisnis Anda.',
    addserv_5_title: 'Digital Advertising',
    addserv_5_desc: 'Jangkau lebih banyak calon pelanggan melalui kampanye Google Ads dan Meta Ads yang dirancang untuk meningkatkan trafik, prospek, dan konversi bisnis.',
    faq_title: 'FAQ Jasa Pembuatan Website TunamSam',

    faq_1_q: 'Berapa lama proses pembuatan website?',
    faq_1_a: 'Lama pengerjaan bergantung pada jenis dan kompleksitas website yang dibuat. Sebagian besar website bisnis, website villa, dan company profile dapat diselesaikan dalam waktu 2–4 minggu setelah seluruh materi dan kebutuhan proyek diterima.',

    faq_2_q: 'Apakah Anda dapat membantu jika saya belum memiliki desain website?',
    faq_2_a: 'Tentu. Kami membantu mulai dari konsultasi, perencanaan struktur website (sitemap), hingga desain UI/UX yang disesuaikan dengan identitas brand dan tujuan bisnis Anda.',

    faq_3_q: 'Apakah website akan berfungsi dengan baik di perangkat mobile?',
    faq_3_a: 'Ya. Semua website yang kami bangun bersifat responsive dan dioptimalkan untuk desktop, tablet, maupun smartphone sehingga memberikan pengalaman terbaik bagi setiap pengunjung.',

    faq_4_q: 'Apakah saya bisa mengelola isi website sendiri setelah selesai?',
    faq_4_a: 'Ya. Kami membangun website menggunakan Content Management System (CMS) yang mudah digunakan, sehingga Anda dapat mengubah teks, gambar, artikel, maupun konten lainnya tanpa memerlukan kemampuan teknis.',

    faq_5_q: 'Apakah domain dan hosting sudah termasuk dalam paket?',
    faq_5_a: 'Sebagian besar paket kami sudah termasuk domain dan hosting selama 1 tahun. Jika Anda sudah memiliki domain atau hosting sendiri, kami juga dapat menggunakan layanan yang sudah Anda miliki.',

    faq_6_q: 'Apakah tersedia layanan maintenance setelah website selesai?',
    faq_6_a: 'Ya. Kami menyediakan layanan maintenance yang mencakup pembaruan website, monitoring keamanan, backup data, optimasi performa, serta dukungan teknis agar website Anda tetap berjalan dengan optimal.',

    faq_7_q: 'Jenis bisnis apa saja yang dilayani oleh TunamSam?',
    faq_7_a: 'Kami berfokus membantu villa, hotel, restoran, café, tour & travel, spa, serta berbagai bisnis lokal di Bali memiliki website profesional. Selain itu, kami juga melayani perusahaan dan startup dari berbagai industri lainnya.',

    faq_8_q: 'Apakah Anda bisa membuat website dengan sistem booking atau reservasi?',
    faq_8_a: 'Ya. Kami dapat mengembangkan website dengan fitur booking atau reservasi untuk villa, hotel, restoran, aktivitas wisata, tour, maupun bisnis lain yang membutuhkan sistem pemesanan online.',

    faq_9_q: 'Apakah website saya akan muncul di Google?',
    faq_9_a: 'Ya. Setiap website yang kami bangun mengikuti praktik terbaik SEO, mulai dari performa yang cepat, desain mobile-friendly, struktur kode yang rapi, hingga optimasi teknis agar website lebih mudah diindeks oleh Google. Kami juga menyediakan layanan SEO untuk membantu meningkatkan visibilitas website Anda.',
    footer_tag: 'Membangun masa depan digital yang lebih cerah, satu website dalam satu waktu.',
    footer_quick: 'Tautan Cepat',
    footer_connect: 'Terhubung',
    footer_rights: '© 2026 TunamSam. All Rights Reserved.',
    footer_about:
      'Kami membantu bisnis membangun website modern yang cepat, profesional, dan dirancang untuk meningkatkan kredibilitas serta pertumbuhan bisnis di era digital.',
    footer_content: 'Konten',
    price_landing_page: 'Landing Page',
    price_landing_page_sub: 'untuk Villa & Bisnis Lokal',
    price_company_profile: 'Website Bisnis Profesional',
    price_company_profile_sub: 'untuk Membangun Kredibilitas Bisnis',
    price_online_store: 'Website Toko Online',
    price_online_store_sub: 'untuk Menjual Produk Secara Online',
    price_custom_website: 'Website Kustom',
    price_custom_website_sub: 'untuk Solusi Bisnis yang Spesifik',
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
    about_title: 'Partner Website Profesional untuk Villa, Hospitality, dan Bisnis Lokal di Bali',
    about_visimisi_title: 'Visi dan Misi',
    about_visimisi_sub: 'Membantu bisnis di Bali membangun kehadiran digital yang profesional.',
    about_visimisi_desc: 'TunamSam berkomitmen membantu villa, bisnis hospitality, restoran, dan berbagai bisnis lokal di Bali memiliki website yang modern, cepat, dan mudah digunakan. Kami percaya bahwa website bukan sekadar identitas online, tetapi juga fondasi untuk membangun kepercayaan pelanggan, memperkuat brand, dan mendukung pertumbuhan bisnis. Dengan pendekatan yang kolaboratif dan berorientasi pada kebutuhan setiap klien, kami menghadirkan solusi website yang dirancang untuk memberikan hasil nyata.',
    about_komitmen_title: 'Komitmen Kami',
    about_komitmen_sub: 'Menjadi partner digital yang mendukung pertumbuhan bisnis Anda.',
    about_komitmen_desc: 'Kami percaya bahwa website adalah investasi jangka panjang, bukan sekadar proyek sekali selesai. Karena itu, kami membangun setiap website dengan kualitas terbaik, komunikasi yang transparan, dan dukungan berkelanjutan agar bisnis Anda terus berkembang.',
    about_corevalues_title: 'Nilai Utama Perusahaan',
    about_value_1_title: 'Fokus pada Bisnis Lokal',
    about_value_1_desc: 'Kami memahami kebutuhan villa, hospitality, dan UMKM di Bali sehingga setiap website dibuat sesuai target pasar Anda.',
    about_value_2_title: 'Berorientasi pada Hasil',
    about_value_2_desc: 'Website bukan sekadar terlihat bagus, tetapi membantu meningkatkan kepercayaan, menghasilkan lebih banyak inquiry, dan mendukung pertumbuhan bisnis.',
    about_value_3_title: 'Kemitraan Jangka Panjang',
    about_value_3_desc: 'Kami ingin menjadi partner digital yang terus mendukung perkembangan bisnis Anda, bukan hanya menyelesaikan satu proyek.',
    about_value_4_title: 'Kualitas & Keandalan',
    about_value_4_desc: 'Website dibangun dengan performa, keamanan, dan pengalaman pengguna sebagai prioritas utama.',
    about_value_5_title: 'Komunikasi yang Transparan',
    about_value_5_desc: 'Kami percaya proses yang jelas, komunikasi yang cepat, dan keterbukaan adalah kunci keberhasilan setiap proyek.',
    /* BlogPage */
    blog_badge: 'Blog & Insight',
    blog_title: 'Temukan tips, strategi, dan wawasan seputar website, SEO, dan digital marketing untuk membantu villa, hospitality, dan bisnis lokal di Bali berkembang secara online.',
    blog_cat_all: 'Semua',
    blog_cat_web: 'Website',
    blog_cat_seo: 'SEO',
    blog_cat_bali: 'Bisnis Bali',
    blog_cat_hosp: 'Hospitality',
    blog_read_more: 'Baca Selengkapnya',
    blog_empty: 'Belum ada artikel untuk kategori ini.',
    blog_default_cat: 'Artikel',
    /* BlogPostPage */
    blog_notfound_title: 'Artikel Tidak Ditemukan',
    blog_notfound_desc: 'Maaf, artikel yang Anda cari tidak tersedia atau mungkin telah dipindahkan.',
    blog_share_title: 'Bagikan Artikel Ini',
    blog_back: 'Kembali ke Blog',
    /* ContactPage */
    contact_hero_title: 'Mari Wujudkan Website untuk Bisnis Anda',
    contact_hero_desc: 'Kami siap membantu villa, bisnis hospitality, dan berbagai bisnis lokal di Bali memiliki website yang profesional, cepat, dan sesuai dengan kebutuhan bisnis. Mulai dari konsultasi awal hingga website siap digunakan, tim TunamSam siap mendampingi Anda di setiap langkah.',
    contact_sales_title: 'Konsultasi Penjualan',
    contact_sales_desc: 'Diskusikan kebutuhan website Anda, pelajari paket yang tersedia, atau minta penawaran yang sesuai dengan bisnis Anda. Kami siap membantu menemukan solusi terbaik.',
    contact_sales_btn: 'Chat Admin',
    contact_support_title: 'Dukungan Teknis',
    contact_support_desc: 'Butuh bantuan terkait website yang sudah berjalan? Tim support kami siap membantu proses maintenance, pembaruan, maupun kendala teknis dengan cepat dan responsif.',
    contact_support_btn: 'Bantuan Teknis',
    contact_form_title: 'Konsultasikan Kebutuhan Website untuk Bisnis Anda',
    contact_form_desc: 'Isi formulir di bawah ini untuk berkonsultasi mengenai website baru, meminta penawaran, atau mendiskusikan kebutuhan bisnis Anda. Kami akan menghubungi Anda secepat mungkin.',
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
    pricing_hero_title: 'Jasa Pembuatan Website Profesional untuk Villa, Hospitality, dan Bisnis Lokal di Bali',
    pricing_hero_desc: 'Pilih paket website yang dirancang untuk membantu bisnis Anda tampil lebih profesional, meningkatkan kepercayaan pelanggan, dan menghasilkan lebih banyak inquiry. Semua harga transparan tanpa biaya tersembunyi.',
    pricing_section_title: 'Pilih Paket Website yang Sesuai Kebutuhan Bisnis Anda',
    pricing_section_desc: 'Setiap paket dirancang untuk berbagai kebutuhan bisnis, mulai dari company profile, villa, restoran, hingga website booking dan e-commerce. Pilih paket yang paling sesuai dengan target bisnis Anda.',
    pricing_alasan_title: 'Mengapa Memilih {pkg}?',
    pricing_dapat_title: 'Apa yang Anda Dapatkan?',
    pricing_dapat_label: 'Yang Anda dapatkan',
    pricing_target_label: 'Cocok untuk',
    pricing_cta_title: 'Mulai dari Sini, Bawa Bisnismu ke Dunia Digital.',
    pricing_cta_desc: '{pkg} simpel, cepat jadi, dan langsung bisa dipakai promosi',
    pricing_hide_options: 'Sembunyikan opsi',
    pricing_show_options: 'Lihat opsi lainnya',
    /* PricingPage - Landing Page */
    pricing_lp_subtitle: 'Bayar di awal untuk 3 tahun dan hemat 27%',
    pricing_lp_reason_1_desc: 'Setiap bagian dirancang untuk mengarahkan pengunjung melakukan tindakan, seperti menghubungi WhatsApp, mengisi formulir, atau melakukan booking.',
    pricing_lp_reason_2_desc: 'Landing page dapat diselesaikan lebih cepat dibanding website lengkap, sehingga bisnis Anda bisa segera dipromosikan secara online.',
    pricing_lp_reason_3_desc: 'Website dioptimalkan untuk smartphone, tablet, dan desktop agar setiap pengunjung mendapatkan pengalaman terbaik di semua perangkat.',
    pricing_lp_get_1: 'Landing page profesional dengan desain eksklusif',
    pricing_lp_get_2: 'Desain responsif untuk semua perangkat',
    pricing_lp_get_3: 'Gratis domain & hosting selama 1 tahun',
    pricing_lp_get_4: 'Optimasi SEO dasar',
    pricing_lp_get_5: 'Tombol WhatsApp & formulir inquiry',
    pricing_lp_get_6: 'Integrasi Google Analytics',
    pricing_lp_get_7: 'Kecepatan website yang optimal',
    pricing_lp_get_8: 'Revisi sebelum website dipublikasikan',
    pricing_lp_target_1: 'Villa & Private Villa',
    pricing_lp_target_2: 'Hotel & Guest House',
    pricing_lp_target_3: 'Restoran & Café',
    pricing_lp_target_4: 'Spa & Wellness',
    pricing_lp_target_5: 'Tour & Travel',
    pricing_lp_target_6: 'Event & Wedding Organizer',
    pricing_lp_target_7: 'Properti',
    pricing_lp_target_8: 'Bisnis Lokal di Bali',
    pricing_lp_opt_3th: '3 Tahun',
    pricing_lp_opt_3th_suffix: 'Hemat 27%',
    pricing_lp_opt_2th: '2 Tahun',
    pricing_lp_opt_2th_suffix: '(Rp. 650.000 / tahun)',
    pricing_lp_opt_1th: '1 Tahun',
    /* PricingPage - Company Profile */
    pricing_cp_subtitle: 'Bayar di awal untuk 2 tahun dan hemat 15%',
    pricing_cp_reason_1_desc: 'Website profesional membantu meningkatkan kredibilitas bisnis dan memberikan kesan pertama yang meyakinkan kepada calon pelanggan.',
    pricing_cp_reason_2_desc: 'Tampilkan profil perusahaan, layanan, portofolio, dan informasi kontak dalam satu tempat yang mudah diakses kapan saja.',
    pricing_cp_reason_3_desc: 'Perluas jangkauan bisnis Anda dan hadir secara profesional di dunia digital untuk menarik lebih banyak pelanggan.',
    pricing_cp_get_1: 'Hingga 5 halaman website profesional',
    pricing_cp_get_2: 'Desain eksklusif sesuai identitas brand',
    pricing_cp_get_3: 'Gratis domain & hosting selama 1 tahun',
    pricing_cp_get_4: 'Optimasi SEO dasar',
    pricing_cp_get_5: 'Formulir kontak & tombol WhatsApp',
    pricing_cp_get_6: 'Integrasi Google Maps & media sosial',
    pricing_cp_get_7: 'Website responsif di semua perangkat',
    pricing_cp_get_8: 'Dukungan teknis setelah website selesai',
    pricing_cp_target_1: 'Villa & Guest House',
    pricing_cp_target_2: 'Hotel & Resort',
    pricing_cp_target_3: 'Restoran & Café',
    pricing_cp_target_4: 'Spa & Wellness',
    pricing_cp_target_5: 'Tour & Travel',
    pricing_cp_target_6: 'Event Organizer',
    pricing_cp_target_7: 'Kontraktor & Properti',
    pricing_cp_target_8: 'Bisnis Lokal di Bali',
    pricing_cp_opt_2th: '2 Tahun',
    pricing_cp_opt_2th_suffix: 'Hemat 15%',
    pricing_cp_opt_1th: '1 Tahun',
    /* PricingPage - Toko Online */
    pricing_to_subtitle: 'Bayar di awal untuk 2 tahun dan hemat 23%',
    pricing_to_reason_1_desc: 'Website toko online memungkinkan pelanggan melihat produk dan berbelanja kapan saja, sehingga bisnis Anda tetap menghasilkan penjualan bahkan di luar jam operasional.',
    pricing_to_reason_2_desc: 'Kelola produk, stok, harga, promo, dan pesanan melalui dashboard yang sederhana, sehingga Anda dapat fokus mengembangkan bisnis.',
    pricing_to_reason_3_desc: 'Terintegrasi dengan berbagai metode pembayaran dan layanan pengiriman untuk memberikan pengalaman belanja yang cepat, aman, dan nyaman.',
    pricing_to_get_1: 'Website e-commerce lengkap (Cart, Checkout & Payment Gateway)',
    pricing_to_get_2: 'Upload hingga 50 produk awal',
    pricing_to_get_3: 'Gratis hosting & domain selama 1 tahun',
    pricing_to_get_4: 'Integrasi ongkos kirim otomatis',
    pricing_to_get_5: 'Dashboard pesanan & laporan penjualan',
    pricing_to_get_6: 'Pelatihan penggunaan website',
    pricing_to_get_7: 'Mobile Responsive & SEO Friendly',
    pricing_to_target_1: 'Brand Fashion & Clothing',
    pricing_to_target_2: 'Produk Lokal Bali',
    pricing_to_target_3: 'Souvenir & Gift Shop',
    pricing_to_target_4: 'Coffee Roaster & Specialty Coffee',
    pricing_to_target_5: 'Kosmetik & Skincare',
    pricing_to_target_6: 'Distributor & Grosir',
    pricing_to_target_7: 'UMKM & Brand Lokal',
    pricing_to_opt_2th: '2 Tahun',
    pricing_to_opt_2th_suffix: 'Hemat 23%',
    pricing_to_opt_1th: '1 Tahun',
    /* PricingPage - Custom Website */
    pricing_cw_subtitle: 'Solusi spesifik sesuai kebutuhan sistem Anda',
    pricing_cw_reason_1_desc: 'Setiap fitur dan tampilan dirancang khusus mengikuti alur kerja, proses operasional, dan identitas bisnis Anda tanpa batasan template.',
    pricing_cw_reason_2_desc: 'Hubungkan website dengan sistem booking, CRM, ERP, payment gateway, API pihak ketiga, atau fitur khusus sesuai kebutuhan bisnis.',
    pricing_cw_reason_3_desc: 'Dibangun menggunakan arsitektur yang aman, cepat, dan mudah dikembangkan seiring pertumbuhan bisnis Anda.',
    pricing_cw_get_1: 'Analisis kebutuhan bisnis & sistem secara mendalam',
    pricing_cw_get_2: 'UI/UX Design eksklusif (Prototype Figma)',
    pricing_cw_get_3: 'Pengembangan Frontend & Backend kustom',
    pricing_cw_get_4: 'Integrasi API & sistem pihak ketiga',
    pricing_cw_get_5: 'Pengujian keamanan dan performa',
    pricing_cw_get_6: 'Deployment, hosting setup, dan dokumentasi',
    pricing_cw_get_7: 'Maintenance & technical support',
    pricing_cw_target_1: 'Sistem Booking & Reservasi',
    pricing_cw_target_2: 'Portal Villa & Hospitality',
    pricing_cw_target_3: 'Startup & Platform Digital',
    pricing_cw_target_4: 'Marketplace Niche',
    pricing_cw_target_5: 'CRM / ERP Internal',
    pricing_cw_target_6: 'Portal Membership',
    pricing_cw_target_7: 'Sistem Manajemen Operasional',
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
    seo_title: 'TunamSam — Website Development & Software House Bali, Indonesia',
    seo_description:
      'TunamSam is a Bali, Indonesia based Software House providing website development, web applications, dashboards, UI/UX design, and digital solutions for your business.',
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
    p1_title: 'Built for Businesses in Bali',
    p1_desc1:
      'We help villas, vehicle rentals, cafés, restaurants, and other local businesses build professional websites that reflect the quality of their brand. Every website is designed to build customer trust and strengthen your online presence.',
    p1_desc2:
      'With modern design, fast performance, and an excellent user experience, your website is built to generate more bookings, inquiries, and new business opportunities.',
    s1_title: 'More Than Just a Beautiful Website',
    s1_desc:
      'A great website is more than just an attractive design—it should deliver an exceptional user experience. We build websites that are fast, responsive, SEO-friendly, and optimized for every device to help your business reach more customers and generate more opportunities.',
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
      'We Build Websites That Help Your Business Grow.',
    c1_title: 'Build Customer Trust',
    c1_desc:
      'A professional website creates a strong first impression and gives customers more confidence in choosing your business.',
    c2_title: 'Reach More Customers',
    c2_desc:
      'An optimized website helps your business appear in Google Search and reach more potential customers online.',
    c3_title: 'Make It Easy to Get in Touch',
    c3_desc:
      'WhatsApp integration, contact forms, and clear call-to-action buttons make it simple for customers to contact or book your services.',
    c4_title: 'Fast, Responsive & Built to Grow',
    c4_desc:
      'Fast loading, mobile-friendly, and scalable websites ensure your business is ready to grow in the long run.',
    pkg_title: 'Find the Right Website for Your Business',
    pkg_subtitle:
      "Every business has unique needs. From simple landing pages to full-featured websites, we'll help you choose the right solution based on your goals and budget.",
    pkg_desc:
      `A landing page is the perfect solution for businesses looking to establish a professional online presence quickly. Ideal for villas, vehicle rentals, cafés, restaurants, laundries, and businesses promoting a specific product or service. Built with conversion in mind, every page is designed to encourage visitors to take action whether it's contacting you via WhatsApp, submitting an inquiry, or making a reservation.`,
    pkg_desc_cp:
      `A Company Profile website helps your business build credibility, strengthen your online presence, and earn customer trust. Perfect for villa management companies, hotels, restaurants, contractors, travel agencies, and businesses that want to present a more professional image. Showcase your company, services, portfolio, and contact information in one professional website that's accessible anytime.`,
    pkg_desc_to:
      'Sell your products online with a professional, fast, and easy-to-manage e-commerce website. Perfect for SMEs, fashion brands, skincare, food & beverage, souvenirs, and local Bali products looking to reach more customers. Complete with product management, checkout, and online payment features to provide a seamless shopping experience and help increase sales.',
    pkg_desc_custom:
      'Our Custom Website service is built for businesses that need features beyond a standard website. From custom booking systems, admin dashboards, API integrations, and CRM solutions to fully tailored business workflows. Perfect for villa management, vehicle rentals, restaurants, and other businesses in Bali that require a more advanced and flexible web solution.',
    process: 'Our Process',
    proc_title: 'Our Website Development Process',
    step1_title: 'Discovery',
    step1_desc: 'We dive deep into your vision, understand your audience, and identify challenges.',
    step2_title: 'Strategy',
    step2_desc: 'Crafting the right roadmap, optimal structure, and captivating designs.',
    step3_title: 'Development',
    step3_desc: 'Our expert team builds your solution with high-quality code and fast performance.',
    step4_title: 'Launch & Support',
    step4_desc:
      'We accompany the launch process and provide ongoing support to ensure your website runs at its maximum potential.',
    proc_desc: 'Every project starts with understanding your business goals. From planning to launch, we manage every step to deliver a website that looks professional, performs well, and supports your business growth.',
    proc_step1_title: 'Consultation',
    proc_step1_desc: 'We learn about your business, target audience, and website goals to ensure the right solution from the start.',
    proc_step2_title: 'Planning',
    proc_step2_desc: 'We create the website structure, features, and content strategy that best fit your business objectives.',
    proc_step3_title: 'Development',
    proc_step3_desc: 'Your website is built with a modern design, optimized performance, and a seamless experience across all devices.',
    proc_step4_title: 'Review',
    proc_step4_desc: 'Review your website and share your feedback. We refine every detail until everything meets your expectations.',
    proc_step5_title: 'Ready to Launch',
    proc_step5_desc: 'Once approved, your website goes live and is ready to strengthen your brand, attract customers, and grow your business online.',
    testi_title: 'Trusted by Bali Businesses',
    testi_desc: 'From villas and restaurants to local businesses, we build professional websites that inspire trust and help businesses grow.',
    cta_title: 'Build a Professional Website for Your Business',
    cta_desc: 'We help villas, restaurants, and local businesses in Bali create beautiful, fast, and business-focused websites.',
    cta_btn: 'Create website now',
    design_title: 'Find Inspiration for Your Business Website',
    design_desc: `Every website is designed to match the unique needs of each business—from villas and hospitality to online stores and company profiles. Explore our portfolio and discover what's possible for your business.`,
    design_landing: 'Landing Page',
    design_company: 'Professional Business Website',
    design_toko: 'E-Commerce Website',
    design_btn: 'See other design choices',
    tech_title: 'Websites Designed to Help Your Business Grow',
    tech_desc: `We don't just build beautiful websites. We create digital experiences that help customers find information easily, contact your business, and complete bookings or purchases. From villas and vehicle rentals to cafés, restaurants, and other local businesses in Bali, every website is built to be fast, professional, and growth-focused.`,
    why_title: 'Why choose TunamSam?',
    why_desc: 'TunamSam is a professional website creation service that acts as your business partner to create high-quality websites aligned with your business goals.',
    why_1_title: 'Built for Bali Businesses',
    why_1_desc: 'We understand the needs of villas, rentals, cafés, restaurants, and local businesses, so every website is tailored to your audience.',
    why_2_title: 'Designed to Generate Inquiries',
    why_2_desc: 'Every page is built to encourage visitors to contact you via WhatsApp, submit forms, or make reservations.',
    why_3_title: 'SEO-Friendly Structure',
    why_3_desc: 'Built with SEO best practices to help your business appear in Google search results.',
    why_4_title: 'Fast & Responsive',
    why_4_desc: 'Optimized for desktop and mobile to ensure a smooth browsing experience.',
    why_5_title: 'Ongoing Support',
    why_5_desc: `Need updates or improvements? We're here even after your website goes live.`,
    why_6_title: 'Free English & Indonesian Version',
    why_6_desc: 'Reach both international visitors and local customers with a bilingual website.',
    why_7_title: 'Transparent Pricing',
    why_7_desc: 'Clear pricing with no hidden costs.',
    why_8_title: 'Ready to Grow',
    why_8_desc: 'Your website can easily be expanded with new features as your business grows.',
    why_9_title: 'AI-Based Technology',
    why_9_desc: 'Utilizing the latest AI technology to ensure your website content is created as best as possible, as well as correcting and refining website content.',
    why_10_title: 'Responsive Customer Support',
    why_10_desc: 'We always strive to be responsive to fulfill your needs quickly and effectively.',
    price_start_from: 'Starting from',
    price_year: '/ Year',
    price_month_lp: '*monthly equivalent: Rp. 125,000/month',
    price_month_cp: '*monthly equivalent: Rp. 133,000/month',
    price_month_to: '*monthly equivalent: Rp. 206,000/month',
    price_btn_lp: 'Create Landing Page Now!',
    price_btn_cp: 'Create Professional Business Website Now!',
    price_btn_to: 'Create E-Commerce Website Now!',
    price_btn_custom: 'Create Custom Website Now!',
    price_custom_price: 'Custom Price',
    price_custom_desc: '*Discuss with us for a price tailored to your request',
    price_free_trans: 'Free Language Translation',
    price_best_choice: 'Best Choice',
    lp_f1_t: 'Built for Conversions',
    lp_f1_d: `Every section is designed to encourage visitors to take action—whether it's contacting you via WhatsApp, making a booking, or sending an inquiry.`,
    lp_f2_t: 'Fast to Launch',
    lp_f2_d: 'A landing page can be completed much faster than a full website, allowing your business to go online quickly.',
    lp_f3_t: 'Fully Responsive',
    lp_f3_d: 'Designed to look great on desktops, tablets, and smartphones, ensuring a seamless experience across all devices.',
    cp_f1_t: 'Build Trust',
    cp_f1_d: 'A professional website strengthens your business credibility and creates a strong first impression for customers and partners.',
    cp_f2_t: 'Clear Business Information',
    cp_f2_d: 'Present your company profile, services, portfolio, and essential information in a clear and organized way.',
    cp_f3_t: 'Strengthen Your Online Presence',
    cp_f3_d: 'Establish a professional online presence that helps customers, partners, and investors discover and trust your business.',
    to_f1_t: '24/7 Online Store',
    to_f1_d: 'Manage products, categories, inventory, and orders through a simple and user-friendly dashboard.',
    to_f2_t: 'Easy to Manage',
    to_f2_d: 'An intuitive checkout process and clear shopping flow make it easier for customers to complete their purchases.',
    to_f3_t: 'Built to Increase Sales',
    to_f3_d: 'Designed to showcase your products professionally and deliver a shopping experience that encourages more sales.',
    cw_f1_t: 'Tailored Features',
    cw_f1_d: 'Every website is designed around your business needs instead of using a one-size-fits-all template.',
    cw_f2_t: 'System Integration',
    cw_f2_d: 'Integrate your website with payment gateways, WhatsApp, booking systems, CRM, ERP, or other third-party services.',
    cw_f3_t: 'Built to Scale',
    cw_f3_d: 'Your website is built with a scalable architecture that grows alongside your business.',
    addserv_title: 'Additional Services to Grow Your Business',
    addserv_desc: `A great website is just the beginning. We also provide additional services to improve your website's performance, reach more customers, and support your business growth over time.`,
    addserv_btn: 'Get Service',
    addserv_1_title: 'Website Optimization & Support',
    addserv_1_desc: 'Fix bugs, improve performance, and optimize your website to keep it fast, secure, stable, and delivering the best experience for your visitors.',
    addserv_2_title: 'Search Engine Optimization (SEO)',
    addserv_2_desc: `Increase your website's visibility on Google through technical optimization, better site structure, and content strategies that drive more organic traffic.`,
    addserv_3_title: 'Website Maintenance',
    addserv_3_desc: 'Keep your website running smoothly with regular updates, backups, performance monitoring, and ongoing security protection.',
    addserv_4_title: 'Social Media Management',
    addserv_4_desc: 'Build a stronger online presence with consistent social media management, engaging content, and strategies tailored to your brand.',
    addserv_5_title: 'Digital Advertising',
    addserv_5_desc: 'Reach more potential customers with strategic Google Ads and Meta Ads campaigns designed to increase traffic, leads, and conversions.',
    faq_title: 'FAQ Website Development Services by TunamSam',

    faq_1_q: 'How long does it take to build a website?',
    faq_1_a: 'The timeline depends on the type and complexity of your website. Most business websites, villa websites, and company profiles are completed within 2–4 weeks once all required materials have been provided.',

    faq_2_q: 'Can you help if I do not have a website design yet?',
    faq_2_a: 'Absolutely. We handle everything from planning and sitemap creation to UI/UX design, ensuring your website reflects your brand and business goals.',

    faq_3_q: 'Will my website work well on mobile devices?',
    faq_3_a: 'Yes. Every website we build is fully responsive and optimized for desktop, tablet, and smartphone, providing the best user experience across all devices.',

    faq_4_q: 'Can I update the website myself after it is finished?',
    faq_4_a: 'Yes. We build websites with an easy-to-manage content management system (CMS), allowing you to edit text, images, blog posts, and other content without technical knowledge.',

    faq_5_q: 'Do your packages include domain and hosting?',
    faq_5_a: 'Most of our packages include one year of domain registration and hosting. If you already have your own hosting or domain, we can also work with your existing setup.',

    faq_6_q: 'Do you provide maintenance after the website is launched?',
    faq_6_a: 'Yes. We offer ongoing maintenance, security monitoring, backups, performance optimization, and technical support to keep your website running smoothly.',

    faq_7_q: 'What types of businesses do you work with?',
    faq_7_a: 'We specialize in websites for villas, hotels, restaurants, cafés, tour operators, spas, and local businesses across Bali, while also serving companies and startups in other industries.',

    faq_8_q: 'Can you build booking or reservation websites?',
    faq_8_a: 'Yes. We can develop booking systems for villas, accommodations, restaurants, activities, tours, and other businesses that require online reservations.',

    faq_9_q: 'Will my website appear on Google?',
    faq_9_a: 'Yes. Every website is built with SEO best practices, including fast performance, mobile optimization, clean code, and proper page structure to help search engines index your website effectively.',
    footer_about:
      'We help businesses build modern, fast, and professional websites designed to enhance credibility and drive business growth in the digital era.',
    footer_content: 'Content',
    price_landing_page: 'Landing Page',
    price_landing_page_sub: 'for Villas & Local Businesses',
    price_company_profile: 'Professional Business Website',
    price_company_profile_sub: 'for Building Business Credibility',
    price_online_store: 'E-Commerce Website',
    price_online_store_sub: 'for Selling Products Online',
    price_custom_website: 'Custom Website',
    price_custom_website_sub: 'for Specific Business Solutions',
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
    about_title: 'Professional Website Partner for Villas, Hospitality, and Local Businesses in Bali.',
    about_visimisi_title: 'Vision and Mission',
    about_visimisi_sub: 'Helping businesses in Bali build a professional digital presence.',
    about_visimisi_desc: `TunamSam is committed to helping villas, hospitality businesses, restaurants, and local businesses across Bali create modern, fast, and user-friendly websites. We believe a website is more than just an online presence—it's a foundation for building trust, strengthening your brand, and supporting long- term business growth.Through a collaborative and client- focused approach, we deliver website solutions designed to achieve real results.efficiently and effectively.With a focus on each business\'s unique needs, we build websites that reflect their identity, ensuring they stand out in the digital market.`,
    about_komitmen_title: 'Our Commitment',
    about_komitmen_sub: 'Your long-term digital partner for business growth.',
    about_komitmen_desc: `We believe a website is a long-term investment, not just a one-time project. That's why we build every website with quality, transparent communication, and ongoing support to help your business continue to grow.`,
    about_corevalues_title: 'Core Values',
    about_value_1_title: 'Local Business Focus',
    about_value_1_desc: 'We understand the needs of villas, hospitality businesses, and local companies in Bali, allowing us to build websites tailored to your audience.',
    about_value_2_title: 'Results-Driven',
    about_value_2_desc: 'A website should do more than look good—it should build trust, generate more inquiries, and support business growth.',
    about_value_3_title: 'Long-Term Partnership',
    about_value_3_desc: 'We aim to become your long-term digital partner, supporting your business beyond the initial website launch.',
    about_value_4_title: 'Quality & Reliability',
    about_value_4_desc: 'Every website is built with performance, security, and user experience as top priorities.',
    about_value_5_title: 'Transparent Communication',
    about_value_5_desc: 'Clear processes, responsive communication, and transparency are at the heart of every successful project.',
    /* BlogPage */
    blog_badge: 'Blog & Insights',
    blog_title: 'Explore tips, strategies, and insights on websites, SEO, and digital marketing to help villas, hospitality businesses, and local businesses in Bali grow online.',
    blog_cat_all: 'All',
    blog_cat_web: 'Website',
    blog_cat_seo: 'SEO',
    blog_cat_bali: 'Bali Business',
    blog_cat_hosp: 'Hospitality',
    blog_read_more: 'Read More',
    blog_empty: 'No articles yet for this category.',
    blog_default_cat: 'Article',
    /* BlogPostPage */
    blog_notfound_title: 'Article Not Found',
    blog_notfound_desc: 'Sorry, the article you\'re looking for is not available or may have been moved.',
    blog_share_title: 'Share This Article',
    blog_back: 'Back to Blog',
    /* ContactPage */
    contact_hero_title: `Let's Build Your Business Website`,
    contact_hero_desc: `We're here to help villas, hospitality businesses, and local businesses in Bali build professional, high-performance websites tailored to their goals. From the initial consultation to launch, TunamSam is with you every step of the way.`,
    contact_sales_title: 'Sales Consultation',
    contact_sales_desc: `Discuss your website requirements, explore our service packages, or request a personalized quotation. We're here to help you find the right solution.`,
    contact_sales_btn: 'Chat Admin',
    contact_support_title: 'Technical Support',
    contact_support_desc: 'Need assistance with your existing website? Our support team is ready to help with maintenance, updates, and technical issues quickly and efficiently.',
    contact_support_btn: 'Technical Support',
    contact_form_title: `Let's Discuss Your Business Website Needs`,
    contact_form_desc: `Fill out the form below to discuss your new website, request a quotation, or share your business requirements. We'll get back to you as soon as possible.`,
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
    pricing_hero_title: 'Professional Website Development for Villas, Hospitality, and Local Businesses in Bali',
    pricing_hero_desc: 'Choose a website package designed to help your business look more professional, build customer trust, and generate more inquiries. Enjoy transparent pricing with no hidden fees.',
    pricing_section_title: 'Choose the Right Website Package for Your Business',
    pricing_section_desc: 'Each package is tailored to different business needs—from company profile websites, villas, and restaurants to booking systems and e-commerce solutions. Choose the package that best fits your business goals.',
    pricing_alasan_title: 'Why Choose {pkg}?',
    pricing_dapat_title: `What's Included?`,
    pricing_dapat_label: 'What You Get',
    pricing_target_label: 'Suitable for Various Industries',
    pricing_cta_title: 'Start Here, Take Your Business to the Digital World.',
    pricing_cta_desc: '{pkg} simple, quick to build, and ready for promotion',
    pricing_hide_options: 'Hide options',
    pricing_show_options: 'View other options',
    /* PricingPage - Landing Page */
    pricing_lp_subtitle: 'Pay upfront for 3 years and save 27%',
    pricing_lp_reason_1_desc: 'Ideal for promoting a single product or service campaign with a design focused on a specific goal.',
    pricing_lp_reason_2_desc: 'A landing page can be delivered much faster than a full website, allowing your business to establish an online presence sooner.',
    pricing_lp_reason_3_desc: 'Optimized for smartphones, tablets, and desktops to ensure a seamless browsing experience across all devices.',
    pricing_lp_get_1: 'Professionally designed landing page',
    pricing_lp_get_2: 'Fully responsive design',
    pricing_lp_get_3: 'Free domain & hosting for 1 year',
    pricing_lp_get_4: 'Basic SEO optimization',
    pricing_lp_get_5: 'WhatsApp button & inquiry form',
    pricing_lp_get_6: 'Google Analytics integration',
    pricing_lp_get_7: 'Optimized website performance',
    pricing_lp_get_8: 'Revisions before launch',
    pricing_lp_target_1: 'Villas & Private Villas',
    pricing_lp_target_2: 'Hotels & Guest Houses',
    pricing_lp_target_3: 'Restaurants & Cafés',
    pricing_lp_target_4: 'Spa & Wellness Businesses',
    pricing_lp_target_5: 'Tour & Travel Agencies',
    pricing_lp_target_6: 'Event & Wedding Organizers',
    pricing_lp_target_7: 'Property Businesses',
    pricing_lp_target_8: 'Local Businesses in Bali',
    pricing_lp_opt_3th: '3 Years',
    pricing_lp_opt_3th_suffix: 'Save 27%',
    pricing_lp_opt_2th: '2 Years',
    pricing_lp_opt_2th_suffix: '(Rp. 650,000 / year)',
    pricing_lp_opt_1th: '1 Year',
    /* PricingPage - Company Profile */
    pricing_cp_subtitle: 'Pay upfront for 2 years and save 15%',
    pricing_cp_reason_1_desc: 'A professional website strengthens your credibility and creates a strong first impression for potential customers.',
    pricing_cp_reason_2_desc: 'Showcase your company profile, services, portfolio, and contact information in one easy-to-access place.',
    pricing_cp_reason_3_desc: 'Expand your reach and establish a professional online presence to attract more customers.',
    pricing_cp_get_1: 'Up to 5 professionally designed pages',
    pricing_cp_get_2: 'Custom design tailored to your brand',
    pricing_cp_get_3: 'Free domain & hosting for 1 year',
    pricing_cp_get_4: 'Basic SEO optimization',
    pricing_cp_get_5: 'Contact form & WhatsApp integration',
    pricing_cp_get_6: 'Google Maps & social media integration',
    pricing_cp_get_7: 'Fully responsive design',
    pricing_cp_get_8: 'Post-launch technical support',
    pricing_cp_target_1: 'Villas & Guest Houses',
    pricing_cp_target_2: 'Hotels & Resorts',
    pricing_cp_target_3: 'Restaurants & Cafés',
    pricing_cp_target_4: 'Spa & Wellness Businesses',
    pricing_cp_target_5: 'Tour & Travel Agencies',
    pricing_cp_target_6: 'Event Organizers',
    pricing_cp_target_7: 'Property & Construction Companies',
    pricing_cp_target_8: 'Local Businesses in Bali',
    pricing_cp_opt_2th: '2 Years',
    pricing_cp_opt_2th_suffix: 'Save 15%',
    pricing_cp_opt_1th: '1 Year',
    /* PricingPage - Toko Online */
    pricing_to_subtitle: 'Pay upfront for 2 years and save 23%',
    pricing_to_reason_1_desc: 'Your online store allows customers to browse and shop anytime, helping your business generate sales beyond regular business hours.',
    pricing_to_reason_2_desc: 'Manage products, inventory, pricing, promotions, and orders through an intuitive dashboard, so you can focus on growing your business.',
    pricing_to_reason_3_desc: 'Integrated with multiple payment methods and shipping services to provide a fast, secure, and seamless shopping experience.',
    pricing_to_get_1: 'Complete e-commerce website (Cart, Checkout & Payment Gateway)',
    pricing_to_get_2: 'Upload up to 50 initial products',
    pricing_to_get_3: 'Free hosting & domain for 1 year',
    pricing_to_get_4: 'Automatic shipping cost integration',
    pricing_to_get_5: 'Order dashboard & sales reports',
    pricing_to_get_6: 'Website training session',
    pricing_to_get_7: 'Mobile Responsive & SEO Friendly',
    pricing_to_target_1: 'Fashion & Clothing Brands',
    pricing_to_target_2: 'Local Bali Products',
    pricing_to_target_3: 'Souvenir & Gift Shops',
    pricing_to_target_4: 'Coffee Roasters & Specialty Coffee',
    pricing_to_target_5: 'Cosmetics & Skincare',
    pricing_to_target_6: 'Distributors & Wholesalers',
    pricing_to_target_7: 'SMEs & Local Brands',
    pricing_to_opt_2th: '2 Years',
    pricing_to_opt_2th_suffix: 'Save 23%',
    pricing_to_opt_1th: '1 Year',
    /* PricingPage - Custom Website */
    pricing_cw_subtitle: 'Specific solutions tailored to your system needs',
    pricing_cw_reason_1_desc: 'Every feature and interface is designed around your workflow, business processes, and brand identity—without template limitations.',
    pricing_cw_reason_2_desc: 'Integrate your website with booking systems, CRM, ERP, payment gateways, third-party APIs, or any custom functionality your business requires.',
    pricing_cw_reason_3_desc: 'Developed with a secure, high-performance architecture that can grow alongside your business.',
    pricing_cw_get_1: 'In-depth business & system requirement analysis',
    pricing_cw_get_2: 'Exclusive UI/UX Design (Figma Prototype)',
    pricing_cw_get_3: 'Custom Frontend & Backend development',
    pricing_cw_get_4: 'API & third-party system integration',
    pricing_cw_get_5: 'Security and performance testing',
    pricing_cw_get_6: 'Deployment, hosting setup, and documentation',
    pricing_cw_get_7: 'Ongoing maintenance & technical support',
    pricing_cw_target_1: 'Booking & Reservation Systems',
    pricing_cw_target_2: 'Villa & Hospitality Platforms',
    pricing_cw_target_3: 'Startups & Digital Platforms',
    pricing_cw_target_4: 'Niche Marketplaces',
    pricing_cw_target_5: 'Internal CRM / ERP Systems',
    pricing_cw_target_6: 'Membership Portals',
    pricing_cw_target_7: 'Operational Management Systems',
    /* PricingPage - CTA */
    pricing_cta_lp: 'Create Landing Page now!',
    pricing_cta_cp: 'Create Professional Business Website Now!',
    pricing_cta_to: 'Create E-Commerce Website Now!',
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
