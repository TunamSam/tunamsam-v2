import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { getBlogPosts } from '../data/blogData';
import { useI18n } from '../context/I18nContext';
import type { TranslationKey } from '../i18n/translations';

const CATEGORIES = ['all', 'website', 'technology', 'digital_marketing'] as const;
type Category = (typeof CATEGORIES)[number];
const CATEGORY_KEYS: Record<string, TranslationKey> = {
  'all': 'blog_cat_all',
  'website': 'blog_cat_web',
  'technology': 'blog_cat_tek',
  'digital_marketing': 'blog_cat_dm',
};
const CATEGORY_BADGE_KEYS: Record<string, TranslationKey> = {
  'website': 'blog_cat_web',
  'technology': 'blog_cat_tek',
  'digital_marketing': 'blog_cat_dm',
};
const POSTS_PER_PAGE = 6;

export function BlogPage() {
    const { t, lang } = useI18n();
    const [activeCategory, setActiveCategory] = useState<Category>('all');
    const [currentPage, setCurrentPage] = useState(1);

    const blogPosts = getBlogPosts(lang);

    const filteredPosts = useMemo(() => {
        if (activeCategory === 'all') return blogPosts;
        return blogPosts.filter(post => post.category === activeCategory);
    }, [activeCategory, blogPosts]);

    const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    
    const paginatedPosts = useMemo(() => {
        const start = (currentPage - 1) * POSTS_PER_PAGE;
        return filteredPosts.slice(start, start + POSTS_PER_PAGE);
    }, [filteredPosts, currentPage]);

    const handleCategoryChange = (cat: Category) => {
        setActiveCategory(cat);
        setCurrentPage(1); // Reset to page 1 on category change
    };

    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Hero Section */}
            <div className="relative pt-32 md:pt-28 pb-24 md:pb-32 bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src="/assets/blog-assets/blog.webp" 
                        alt={t('blog_badge')} 
                        className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                
                <div className="max-w-8xl mx-auto px-6 relative z-10">
                    <div className="max-w-6xl">
                        <p className="text-brand-light font-bold text-sm md:text-base uppercase tracking-widest mb-4 reveal-on-scroll">
                            {t('blog_badge')}
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 reveal-on-scroll stagger-1 leading-tight text-white/95">
                            {t('blog_title')}
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
                            {t(CATEGORY_KEYS[cat])}
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
                                        {t(CATEGORY_BADGE_KEYS[post.category] || 'blog_default_cat')}
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
                                        {t('blog_read_more')}
                                        <Icon name="arrow-right" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">{t('blog_empty')}</p>
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
