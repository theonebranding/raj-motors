import { useEffect } from 'react';
import { contactDetails } from '@/data/siteData';

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

const setJsonLd = (id: string, json: Record<string, unknown>) => {
  let element = document.querySelector<HTMLScriptElement>(`script#${id}`);

  if (!element) {
    element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(json);
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

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': ['AutoDealer', 'LocalBusiness', 'AutoRepair'],
      name: 'Raj Motors',
      image: 'https://www.rajmotorsgujarat.com/logo%20raaj-03.png',
      description:
        'Authorized Tata Motors Light Commercial Vehicle dealer and service center in Godhra, Gujarat. Serving Panchmahal, Dahod, Mahisagar and all Gujarat.',
      url: 'https://www.rajmotorsgujarat.com/',
      telephone: contactDetails.phone,
      priceRange: '₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: contactDetails.address,
        addressLocality: 'Godhra',
        addressRegion: 'Gujarat',
        postalCode: '389001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.7789',
        longitude: '73.6143',
      },
      areaServed: [
        { '@type': 'City', name: 'Godhra' },
        { '@type': 'City', name: 'Panchmahal' },
        { '@type': 'City', name: 'Dahod' },
        { '@type': 'City', name: 'Mahisagar' },
        { '@type': 'State', name: 'Gujarat' },
      ],
      brand: {
        '@type': 'Brand',
        name: 'Raj Motors',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tata LCV Vehicles',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tata Ace' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tata Intra' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tata Yodha' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Product', name: 'Tata Super Ace' } },
        ],
      },
      sameAs: [
        'https://www.facebook.com/your-page',
        'https://www.instagram.com/your-handle',
        'https://www.google.com/maps/place/your-business',
      ],
    };

    setJsonLd('raj-motors-local-business-schema', localBusinessSchema);
  }, [description, image, keywords, title]);

  return null;
}
