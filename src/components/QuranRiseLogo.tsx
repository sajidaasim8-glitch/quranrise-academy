import React from 'react';

interface QuranRiseLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'auto';
  showTagline?: boolean;
  className?: string;
}

/**
 * Professional Vector Emblem Logo for QuranRise Academy.
 * Features an Islamic eight-pointed Khatam star, an open illuminated Holy Quran,
 * radiant dawn rays (evoking "Rise"), and refined gold/emerald typography.
 */
export const QuranRiseLogo: React.FC<QuranRiseLogoProps> = ({
  size = 'md',
  variant = 'auto',
  showTagline = false,
  className = '',
}) => {
  const iconSizes = {
    sm: 'h-9 w-9',
    md: 'h-11 w-11',
    lg: 'h-14 w-14',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl sm:text-3xl',
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Emblem SVG Icon */}
      <div
        className={`relative flex shrink-0 items-center justify-center rounded-xl border ${
          isLight
            ? 'border-[#E5C687]/50 bg-[#04392A] shadow-md shadow-black/20'
            : 'border-[#C5A059]/40 bg-gradient-to-br from-[#064E3B] to-[#03261C] shadow-xs'
        } ${iconSizes[size]} transition-transform duration-200 group-hover:scale-105`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full p-1.5"
        >
          {/* Subtle Octagram / Khatam outer star */}
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="4"
            stroke="#C5A059"
            strokeWidth="1.25"
            strokeOpacity="0.6"
          />
          <rect
            x="8"
            y="8"
            width="32"
            height="32"
            rx="4"
            transform="rotate(45 24 24)"
            stroke="#C5A059"
            strokeWidth="1.25"
            strokeOpacity="0.6"
          />

          {/* Dawn / Rise rays radiating from Quran spine */}
          <path
            d="M24 16 L24 9"
            stroke="#E5C687"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M19 18 L14 13"
            stroke="#E5C687"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />
          <path
            d="M29 18 L34 13"
            stroke="#E5C687"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeOpacity="0.8"
          />

          {/* Open Quran Pages */}
          <path
            d="M24 33 C20 30 14 30 11 31.5 V21 C15 19.5 20 20 24 22 C28 20 33 19.5 37 21 V31.5 C34 30 28 30 24 33 Z"
            fill="#FFFFFF"
            fillOpacity="0.12"
            stroke="#FBF7EE"
            strokeWidth="1.75"
            strokeLinejoin="round"
          />

          {/* Quran Page fold / Book Spine */}
          <path
            d="M24 22 V34"
            stroke="#E5C687"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Delicate Quran page lines */}
          <path
            d="M15 24.5 C18 24 21 24.5 22 25.5"
            stroke="#C5A059"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M15 27.5 C18 27 21 27.5 22 28.5"
            stroke="#C5A059"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M33 24.5 C30 24 27 24.5 26 25.5"
            stroke="#C5A059"
            strokeWidth="1"
            strokeLinecap="round"
          />
          <path
            d="M33 27.5 C30 27 27 27.5 26 28.5"
            stroke="#C5A059"
            strokeWidth="1"
            strokeLinecap="round"
          />

          {/* Small Rehal Stand Support */}
          <path
            d="M17 35 L31 35"
            stroke="#C5A059"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col leading-tight">
        <span
          className={`font-serif-display font-bold tracking-wide ${titleSizes[size]} ${
            isLight ? 'text-white' : 'text-[#064E3B]'
          } whitespace-nowrap`}
        >
          <span>Quran</span>
          <span className="text-[#C5A059]">Rise</span>{' '}
          <span className={isLight ? 'text-emerald-100 font-semibold' : 'text-[#0F291E]'}>
            Academy
          </span>
        </span>
        {showTagline && (
          <span
            className={`text-[10px] font-medium tracking-widest uppercase ${
              isLight ? 'text-emerald-200/80' : 'text-[#5A7366]'
            }`}
          >
            One-to-One Online Quran
          </span>
        )}
      </div>
    </div>
  );
};
