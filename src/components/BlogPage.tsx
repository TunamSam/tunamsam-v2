import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { BLOG_POSTS } from '../data/blogData';

const CATEGORIES = ['Semua', 'Teknologi', 'Website', 'Digital Marketing'];
const POSTS_PER_PAGE = 6;

export function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('Semua');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'Semua') return BLOG_POSTS;
        return BLOG_POSTS.filter(post => post.category === activeCategory);
    }, [activeCategory]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    const handleCategoryChange = (cat: string) => {
        setActiveCategory(cat);
        setCurrentPage(1); // Reset to page 1 on category change
    };

    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Hero Section */}
            <div className="relative pt-32 md:pt-28 pb-24 md:pb-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/assets/blog.jpg" 
                        alt="Background Blog TunamSam" 
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                
                <div className="max-w-8xl mx-auto px-6 relative z-10">
                    <div className="max-w-6xl">
                        <p className="text-brand-light font-bold text-sm md:text-base uppercase tracking-widest mb-4 reveal-on-scroll">
                            Blog & Artikel
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 reveal-on-scroll stagger-1 leading-tight text-white/95">
                            Temukan Inspirasi, Strategi, dan Solusi Digital Terbaik untuk Pertumbuhan Bisnis Anda.
                        </h1>
                    </div>
                </div>
            </div>

            {/* Categories */}
            <div className="max-w-7xl mx-auto px-6 pt-16 md:pt-24 pb-8 flex justify-center reveal-on-scroll">
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                    {CATEGORIES.map((cat, idx) => (
                        <button 
                            key={idx}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-6 py-2.5 rounded-full font-medium transition-colors ${
                                activeCategory === cat 
                                ? 'bg-brand text-white shadow-md' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
                {paginatedPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {paginatedPosts.map((post, idx) => (
                            <div 
                                key={post.slug}
                                className={`bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 reveal-on-scroll stagger-${(idx % 3) + 1} flex flex-col`}
                            >
                                <div className="relative h-56 md:h-64 overflow-hidden">
                                    <img 
                                        src={post.imageUrl} 
                                        alt={post.title} 
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-brand uppercase tracking-wider">
                                        {post.category || 'Artikel'}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Icon name="calendar" className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Icon name="user" className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link 
                                        to={`/blog/${post.slug}`} 
                                        className="group inline-flex items-center text-brand font-bold gap-2 mt-auto w-fit"
                                    >
                                        Baca Selengkapnya
                                        <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">Belum ada artikel untuk kategori ini.</p>
                    </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2">
                        <button 
                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Icon name="chevron-left" className="w-5 h-5" />
                        </button>
                        
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors ${
                                    currentPage === i + 1
                                    ? 'bg-brand text-white'
                                    : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button 
                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Icon name="chevron-right" className="w-5 h-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
