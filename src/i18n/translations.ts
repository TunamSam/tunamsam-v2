export type Lang = 'ID' | 'EN';

export type TranslationKey =
  | 'home'
  | 'services'
  | 'portfolio'
  | 'profile'
  | 'contact'
  | 'contact_us'
  | 'trusted_by'
  | 'p1_title'
  | 'p1_desc1'
  | 'p1_desc2'
  | 's1_title'
  | 's1_desc'
  | 's1_btn'
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
  | 'footer_tag'
  | 'footer_quick'
  | 'footer_connect'
  | 'footer_rights'
  | 'footer_about';

export const translations: Record<Lang, Partial<Record<TranslationKey, string>>> = {
  ID: {
    home: 'Beranda',
    services: 'Layanan',
    portfolio: 'Portfolio',
    profile: 'Profil',
    contact: 'Kontak',
    contact_us: 'Hubungi Kami',
    trusted_by: 'Telah dipercaya oleh:',
    p1_title: 'Website Tanpa Strategi Akan Sulit Berkembang',
    p1_desc1:
      'Tidak semua website mampu menghasilkan traffic dan pelanggan. Tanpa SEO, struktur yang baik, dan pengalaman pengguna yang nyaman, website akan sulit bersaing di tengah banyaknya kompetitor digital saat ini.',
    p1_desc2:
      'Begitu juga dengan dunia online. Website yang hanya ada tanpa strategi yang matang dan desain yang user-friendly akan sulit menarik perhatian, apalagi menghasilkan penjualan.',
    s1_title: 'Lebih Dari Sekadar Tampilan Menarik',
    s1_desc:
      'Website profesional dirancang untuk membantu bisnis Anda tumbuh. Mulai dari desain modern, navigasi yang jelas, hingga optimasi SEO, semuanya berperan penting dalam meningkatkan kredibilitas dan menjangkau lebih banyak pelanggan.',
    s1_btn: 'Bikin website',
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
    footer_tag: 'Membangun masa depan digital yang lebih cerah, satu website dalam satu waktu.',
    footer_quick: 'Tautan Cepat',
    footer_connect: 'Terhubung',
    footer_rights: 'Hak Cipta Dilindungi.',
    footer_about:
      'Kami membantu bisnis membangun website modern yang cepat, profesional, dan dirancang untuk meningkatkan kredibilitas serta pertumbuhan bisnis di era digital.',
  },
  EN: {
    home: 'Home',
    services: 'Services',
    portfolio: 'Portfolio',
    profile: 'Profile',
    contact: 'Contact',
    contact_us: 'Contact Us',
    trusted_by: 'Trusted by:',
    p1_title: 'A Website Without Strategy Will Struggle to Grow',
    p1_desc1:
      'Not all websites are capable of generating traffic and customers. Without SEO, a good structure, and a comfortable user experience, a website will find it hard to compete amidst today\'s digital competitors.',
    p1_desc2:
      'The same goes for the online world. A website that merely exists without a mature strategy and user-friendly design will struggle to attract attention, let alone generate sales.',
    s1_title: 'More Than Just an Attractive Appearance',
    s1_desc:
      'A professional website is designed to help your business grow. From modern design, clear navigation, to SEO optimization, everything plays an important role in increasing credibility and reaching more customers.',
    s1_btn: 'Create a website',
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
    footer_about:
      'We help businesses build modern, fast, and professional websites designed to enhance credibility and drive business growth in the digital era.',
    footer_tag: 'Building a brighter digital future, one website at a time.',
    footer_quick: 'Quick Links',
    footer_connect: 'Connect',
    footer_rights: '© 2024 TunamSam. All rights reserved.',
  },
};

export const FLAG_URLS: Record<Lang, string> = {
  ID: 'https://flagcdn.com/w20/id.png',
  EN: 'https://flagcdn.com/w20/gb.png',
};
