import { useEffect, useMemo, useState } from 'react';

type HeroImageSliderProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  intervalMs?: number;
  sources: string[];
};

export default function HeroImageSlider({ alt, className = '', imageClassName = 'object-cover', intervalMs = 4200, sources }: HeroImageSliderProps) {
  const validSources = useMemo(() => sources.filter(Boolean), [sources]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [validSources.join('|')]);

  useEffect(() => {
    if (validSources.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % validSources.length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, validSources.length]);

  if (validSources.length === 0) {
    return null;
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {validSources.map((source, index) => (
        <img
          key={source}
          src={source}
          alt={alt}
          className={`absolute inset-0 h-full w-full ${imageClassName} transition-opacity duration-700 ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}
    </div>
  );
}
