import { Helmet } from 'react-helmet-async';
import { useI18n } from '../context/I18nContext';

const DOMAIN = 'https://tunamsam.biz.id';
const OG_IMAGE = `${DOMAIN}/assets/logo/tunamsam.webp`;

export function SEOHead() {
  const { lang, t } = useI18n();
  const title = t('seo_title');
  const description = t('seo_description');

  return (
    <Helmet>
      <html lang={lang.toLowerCase()} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={DOMAIN} />
      <link rel="apple-touch-icon" href="/assets/logo/tunamsam.webp" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:url" content={DOMAIN} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={lang === 'ID' ? 'id_ID' : 'en_US'} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TunamSam',
          url: DOMAIN,
          logo: `${DOMAIN}/assets/logo/tunamsam.webp`,
          description:
            'Software House Indonesia specializing in website development, custom software, web applications, dashboards, UI/UX, and digital solutions.',
          email: 'tunamsam@gmail.com',
          telephone: '+62 856-5563-9206',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Kediri',
            addressCountry: 'ID',
          },
          sameAs: [
            'https://www.instagram.com/tunamsam/',
            'https://www.tiktok.com/@tunamsam',
            'https://www.linkedin.com/company/tunamsam',
          ],
        })}
      </script>

      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'TunamSam',
          url: DOMAIN,
          description,
          inLanguage: lang === 'ID' ? 'id' : 'en',
        })}
      </script>

      <script async src="https://www.googletagmanager.com/gtag/js?id=G-9G7NZC7CN9" />
      <script>
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9G7NZC7CN9');`}
      </script>
    </Helmet>
  );
}
