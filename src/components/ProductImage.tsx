import { useState } from 'react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

type ProductImageProps = {
  alt: string;
  className?: string;
  label?: string;
  src: string;
};

export default function ProductImage({ alt, className = '', label, src }: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={className}>
        <ImagePlaceholder label={label ?? alt} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover ${className}`}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
