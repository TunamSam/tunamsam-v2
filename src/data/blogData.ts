import type { Lang } from '../i18n/translations';
import { BLOG_POSTS_ID } from './blogData.id';
import { BLOG_POSTS_EN } from './blogData.en';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export function getBlogPosts(lang: Lang): BlogPost[] {
  return lang === 'EN' ? BLOG_POSTS_EN : BLOG_POSTS_ID;
}

export function getBlogPost(slug: string, lang: Lang): BlogPost | undefined {
  const posts = getBlogPosts(lang);
  return posts.find(p => p.slug === slug);
}
