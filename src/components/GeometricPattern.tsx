import React from 'react';

interface GeometricPatternProps {
  className?: string;
  opacity?: string;
}

export const GeometricPattern: React.FC<GeometricPatternProps> = ({
  className = '',
  opacity = 'opacity-[0.035]',
}) => {
  const patternId = React.useId();

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${opacity} ${className}`}
      aria-hidden="true"
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={patternId}
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M40 0 L80 40 L40 80 L0 40 Z" />
              <rect x="18" y="18" width="44" height="44" />
              <rect
                x="18"
                y="18"
                width="44"
                height="44"
                transform="rotate(45 40 40)"
              />
              <circle cx="40" cy="40" r="10" />
              <path d="M0 16 L16 0 M64 0 L80 16 M0 64 L16 80 M64 80 L80 64" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
};

export const SectionOrnament: React.FC<{ light?: boolean }> = ({ light = false }) => {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span
        className={`h-[1px] w-10 ${
          light ? 'bg-[#C5A059]/50' : 'bg-[#C5A059]/60'
        }`}
      />
      <svg
        width="14"
        height="14"
        viewBox="0 0 16 16"
        fill="none"
        className="text-[#C5A059]"
      >
        <rect
          x="3"
          y="3"
          width="10"
          height="10"
          stroke="currentColor"
          strokeWidth="1.25"
        />
        <rect
          x="3"
          y="3"
          width="10"
          height="10"
          transform="rotate(45 8 8)"
          stroke="currentColor"
          strokeWidth="1.25"
        />
      </svg>
      <span
        className={`h-[1px] w-10 ${
          light ? 'bg-[#C5A059]/50' : 'bg-[#C5A059]/60'
        }`}
      />
    </div>
  );
};
