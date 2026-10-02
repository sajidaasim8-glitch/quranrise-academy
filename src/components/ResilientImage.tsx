import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle = 'QuranRise Academy',
  fallbackSubtitle = 'One-to-One Quran & Tajweed Education',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#064E3B] via-[#053F30] to-[#022C22] p-8 text-center text-white ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#C5A059]/40 bg-[#C5A059]/10 text-[#E5C687]">
          <BookOpen className="h-8 w-8" />
        </div>
        <p className="font-serif-display text-xl font-semibold tracking-wide text-white">
          {fallbackTitle}
        </p>
        {fallbackSubtitle && (
          <p className="mt-1 text-xs text-emerald-100/80">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      loading="lazy"
    />
  );
};
