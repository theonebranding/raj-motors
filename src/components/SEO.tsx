import { useEffect } from 'react';

type SEOProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
};

const setMeta = (name: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
};

const setPropertyMeta = (property: string, content: string) => {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }

  element.content = content;
};

const setCanonical = (href: string) => {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.rel = 'canonical';
    document.head.appendChild(element);
  }

  element.href = href;
};

export default function SEO({ title, description, keywords, image = '/og-image.svg' }: SEOProps) {
  useEffect(() => {
    const fullTitle = `${title} | Raj Motors Godhra`;
    const canonicalUrl = `${window.location.origin}${window.location.pathname}`;
    const imageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;

    document.title = fullTitle;
    setMeta('description', description);
    setMeta('keywords', keywords ?? 'Raj Motors, Tata commercial vehicles, Godhra, commercial vehicles, Ace, Intra, Yodha, Magic, EV');
    setMeta('robots', 'index, follow');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', imageUrl);
    setCanonical(canonicalUrl);
    setPropertyMeta('og:title', fullTitle);
    setPropertyMeta('og:description', description);
    setPropertyMeta('og:type', 'website');
    setPropertyMeta('og:site_name', 'Raj Motors');
    setPropertyMeta('og:url', canonicalUrl);
    setPropertyMeta('og:image', imageUrl);
    setPropertyMeta('og:image:alt', 'Raj Motors Godhra commercial vehicles');
  }, [description, image, keywords, title]);

  return null;
}
