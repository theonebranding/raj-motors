import { ChevronLeft, ChevronRight, Image } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import type { MouseEvent } from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

type ProductImageSliderProps = {
  alt: string;
  autoPlay?: boolean;
  className?: string;
  count: number;
  folder: string;
  label?: string;
  startAt?: number;
};

export default function ProductImageSlider({ alt, autoPlay = false, className = '', count, folder, label, startAt = 1 }: ProductImageSliderProps) {
  const sources = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => {
        const imageNumber = startAt + index;
        return `${folder}/${String(imageNumber).padStart(2, '0')}.png`;
      }),
    [count, folder, startAt],
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedSources, setFailedSources] = useState<Set<string>>(() => new Set());

  const visibleSources = sources.filter((source) => !failedSources.has(source));
  const activeSource = visibleSources[activeIndex % Math.max(visibleSources.length, 1)];

  useEffect(() => {
    setActiveIndex(0);
    setFailedSources(new Set());
  }, [folder]);

  useEffect(() => {
    if (activeIndex >= visibleSources.length && visibleSources.length > 0) {
      setActiveIndex(0);
    }
  }, [activeIndex, visibleSources.length]);

  useEffect(() => {
    if (!autoPlay || visibleSources.length < 2) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % visibleSources.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [autoPlay, visibleSources.length]);

  const goToPrevious = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex((current) => (current - 1 + visibleSources.length) % visibleSources.length);
  };

  const goToNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveIndex((current) => (current + 1) % visibleSources.length);
  };

  const markFailed = () => {
    if (!activeSource) {
      return;
    }

    setFailedSources((current) => {
      const next = new Set(current);
      next.add(activeSource);
      return next;
    });
  };

  if (!activeSource) {
    return (
      <div className={className}>
        <ImagePlaceholder label={label ?? alt} />
      </div>
    );
  }

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <img
        src={activeSource}
        alt={alt}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        onError={markFailed}
        loading="lazy"
      />

      {visibleSources.length > 1 ? (
        <>
          <div className="absolute inset-x-4 top-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/95 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.12em] text-tata-navy shadow-[0_12px_30px_rgba(15,23,42,0.16)]">
              <Image className="h-3.5 w-3.5 text-brand-700" />
              {activeIndex + 1}/{visibleSources.length}
            </span>
          </div>
          <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 justify-between opacity-0 transition group-hover:opacity-100">
            <button
              type="button"
              aria-label="Previous image"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-tata-navy shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:bg-brand-600 hover:text-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/95 text-tata-navy shadow-[0_12px_30px_rgba(15,23,42,0.18)] transition hover:bg-brand-600 hover:text-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {visibleSources.map((source, index) => (
              <span
                key={source}
                className={`h-1.5 rounded-full transition-all ${index === activeIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/55'}`}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
