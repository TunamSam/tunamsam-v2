export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // We can use HTML or simple text here for now
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'pentingnya-website-untuk-bisnis-lokal',
    title: 'Pentingnya Memiliki Website untuk Bisnis Lokal di Era Digital',
    excerpt: 'Mengapa bisnis lokal Anda butuh website? Pelajari bagaimana kehadiran online dapat meningkatkan penjualan dan kredibilitas usaha Anda.',
    content: `...`,
    date: '12 Jul 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    category: 'Website'
  },
  {
    slug: 'tips-memilih-jasa-pembuatan-website',
    title: '5 Tips Memilih Jasa Pembuatan Website yang Tepat',
    excerpt: 'Jangan sampai salah pilih! Berikut adalah hal-hal yang wajib Anda perhatikan sebelum menyewa jasa web developer untuk bisnis Anda.',
    content: `...`,
    date: '08 Jul 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    category: 'Website'
  },
  {
    slug: 'mengenal-ui-ux-design',
    title: 'Mengenal UI/UX Design dan Dampaknya Bagi Penjualan',
    excerpt: 'Tampilan yang cantik saja tidak cukup. Kenali apa itu UI/UX dan bagaimana desain yang baik dapat meroketkan konversi Anda.',
    content: `...`,
    date: '01 Jul 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    category: 'Teknologi'
  },
  {
    slug: 'strategi-digital-marketing-2026',
    title: 'Strategi Digital Marketing Paling Ampuh di Tahun 2026',
    excerpt: 'Tingkatkan brand awareness dan penjualan Anda dengan menerapkan strategi digital marketing terbaru dan paling relevan tahun ini.',
    content: `...`,
    date: '25 Jun 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80',
    category: 'Digital Marketing'
  },
  {
    slug: 'optimasi-seo-untuk-pemula',
    title: 'Panduan Lengkap Optimasi SEO untuk Pemula',
    excerpt: 'Ingin website Anda tampil di halaman pertama Google? Pelajari dasar-dasar SEO yang mudah dipahami dan dipraktikkan.',
    content: `...`,
    date: '18 Jun 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1572177191856-3cde618dec2f?auto=format&fit=crop&w=1200&q=80',
    category: 'Digital Marketing'
  },
  {
    slug: 'teknologi-ai-dalam-bisnis',
    title: 'Memanfaatkan Teknologi AI untuk Efisiensi Bisnis',
    excerpt: 'Kecerdasan Buatan (AI) kini bukan sekadar tren. Ketahui bagaimana AI dapat membantu memangkas biaya operasional Anda.',
    content: `...`,
    date: '10 Jun 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    category: 'Teknologi'
  },
  {
    slug: 'tren-desain-website-terbaru',
    title: 'Tren Desain Website yang Akan Mendominasi Tahun Depan',
    excerpt: 'Dari glassmorphism hingga interaksi 3D, lihat apa saja yang akan menjadi tren desain web agar situs Anda tetap relevan.',
    content: `...`,
    date: '02 Jun 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1507238692062-5a042e9a7e6e?auto=format&fit=crop&w=1200&q=80',
    category: 'Website'
  },
  {
    slug: 'keamanan-cyber-untuk-umkm',
    title: 'Pentingnya Keamanan Siber bagi Pelaku UMKM',
    excerpt: 'UMKM juga sering menjadi target serangan siber. Lindungi data pelanggan dan bisnis Anda dengan langkah-langkah praktis ini.',
    content: `...`,
    date: '25 May 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    category: 'Teknologi'
  },
  {
    slug: 'cara-meningkatkan-konversi-toko-online',
    title: 'Cara Jitu Meningkatkan Konversi di Toko Online Anda',
    excerpt: 'Banyak pengunjung tapi sedikit yang beli? Berikut teknik-teknik jitu untuk mengubah pengunjung menjadi pelanggan setia.',
    content: `...`,
    date: '18 May 2026',
    author: 'TunamSam Team',
    imageUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
    category: 'Digital Marketing'
  }
];
