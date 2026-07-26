import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Icon } from './Icon';
import { getBlogPost } from '../data/blogData';
import { useI18n } from '../context/I18nContext';

export function BlogPostPage() {
    const { t, lang } = useI18n();
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getBlogPost(slug, lang) : undefined;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!post) {
        return (
            <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 text-center">
                <Icon name="search" className="w-16 h-16 text-gray-300 mb-6" />
                <h1 className="text-3xl font-bold font-heading text-gray-900 mb-4">{t('blog_notfound_title')}</h1>
                <p className="text-gray-600 mb-8 max-w-md">{t('blog_notfound_desc')}</p>
                <Link to="/blog" className="bg-brand text-white px-8 py-3 rounded-full font-bold hover:bg-brand-dark transition-colors">
                    {t('blog_back')}
                </Link>
            </div>
        );
    }

    return (
        <div className="w-full bg-white pb-24 text-gray-900">
            {/* Article Header */}
            <div className="relative pt-32 md:pt-40 pb-16 md:pb-20">
                <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                    <Link to="/blog" className="inline-flex items-center gap-2 text-brand font-bold mb-8 reveal-on-scroll">
                        <Icon name="arrow-left" className="w-4 h-4" />
                        {t('blog_back')}
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-heading mb-6 reveal-on-scroll stagger-1 leading-tight text-gray-900">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-6 text-md reveal-on-scroll stagger-2">
                        <div className="flex items-center gap-2">
                            <Icon name="calendar" className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icon name="user" className="w-4 h-4" />
                            <span>{post.author}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Image */}
            <div className="max-w-5xl mx-auto px-6 -mt-10 md:-mt-12 relative z-20 reveal-on-scroll">
                <div className="w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    <img src={post.imageUrl} alt={t('blog_badge')} className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Article Content */}
            <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
                <div 
                    className="prose prose-lg prose-brand max-w-none font-light leading-relaxed [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:font-heading [&>h3]:mt-12 [&>h3]:mb-4 [&>p]:mb-6 [&>p]:text-lg"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
            
            {/* Share & CTA */}
            <div className="max-w-3xl mx-auto px-6 pb-12 border-t border-gray-100 pt-12 text-center">
                <h3 className="text-2xl font-bold font-heading text-gray-900 mb-6">{t('blog_share_title')}</h3>
                <div className="flex justify-center gap-4">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 text-brand rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-sm">
                        <i className="fa-brands fa-facebook-f text-lg" />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 text-brand rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-sm">
                        <i className="fa-brands fa-twitter text-lg" />
                    </a>
                    <a href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-50 text-brand rounded-full flex items-center justify-center hover:bg-brand hover:text-white transition-all shadow-sm">
                        <i className="fa-brands fa-whatsapp text-xl" />
                    </a>
                </div>
            </div>
        </div>
    );
}
