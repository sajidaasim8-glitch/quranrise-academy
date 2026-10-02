import React from 'react';
import { ArrowRight, BookOpen, MessageCircle } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academyData';
import { GeometricPattern } from './GeometricPattern';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onStartTrial: () => void;
  onViewCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartTrial, onViewCourses }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#04392A] via-[#064E3B] to-[#053B2C] py-16 text-white sm:py-20 lg:py-28"
    >
      <GeometricPattern className="text-[#E5C687]" opacity="opacity-[0.045]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-5 flex items-center gap-2.5 text-xs font-medium tracking-widest text-[#E5C687] uppercase">
              <span className="h-[1px] w-8 bg-[#C5A059]" aria-hidden="true" />
              <span>One-to-One Online Quran Education</span>
            </div>

            <h1
              className="font-serif-display text-4xl font-bold leading-[1.12] tracking-normal text-white sm:text-5xl lg:text-6xl"
              style={{ textWrap: 'balance' }}
            >
              Learn Quran Online With QuranRise Academy
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-emerald-50/90 sm:text-lg sm:leading-relaxed">
              Learn Quran, Tajweed, Hifz and Islamic Studies from the comfort of your home with qualified teachers and flexible one-to-one online classes.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onStartTrial}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#C5A059] px-7 py-3.5 text-sm font-semibold tracking-wider text-[#072219] transition-all duration-150 hover:bg-[#D4B26A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5C687] whitespace-nowrap cursor-pointer shadow-sm"
              >
                <span>START FREE TRIAL</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onViewCourses}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg border border-white/25 bg-white/5 px-6 py-3.5 text-sm font-semibold tracking-wider text-white transition-all duration-150 hover:border-[#E5C687]/60 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white whitespace-nowrap cursor-pointer"
              >
                <BookOpen className="h-4 w-4 text-[#E5C687]" aria-hidden="true" />
                <span>VIEW COURSES</span>
              </button>

              <a
                href={ACADEMY_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#C5A059]/50 bg-[#04392A]/80 px-5 py-3.5 text-sm font-semibold tracking-wider text-white transition-all duration-150 hover:bg-[#064E3B] hover:border-[#E5C687] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 text-[#E5C687]" aria-hidden="true" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium tracking-wide text-emerald-100/85 sm:text-sm">
                <span>Individual Live Classes</span>
                <span className="text-[#C5A059]" aria-hidden="true">·</span>
                <span>For Children &amp; Adults</span>
                <span className="text-[#C5A059]" aria-hidden="true">·</span>
                <span>Flexible Scheduling</span>
                <span className="text-[#C5A059]" aria-hidden="true">·</span>
                <span>Free Trial Session</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="rounded-t-[120px] rounded-b-2xl border border-[#C5A059]/40 bg-[#03261C]/60 p-3 sm:p-4">
                <div className="relative overflow-hidden rounded-t-[108px] rounded-b-xl border border-[#C5A059]/25">
                  <ResilientImage
                    src={ACADEMY_CONFIG.images.heroVisual}
                    alt="Open Holy Quran on a carved wooden book stand in warm sunlight"
                    className="aspect-4/3 w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    fallbackTitle="Learn Quran Online"
                    fallbackSubtitle="Tajweed · Recitation · Hifz · Islamic Studies"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#032219]/85 via-[#032219]/30 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-emerald-50/90">
                    <span className="font-serif-display text-sm italic text-[#E5C687]">
                      Structured One-to-One Instruction
                    </span>
                    <span className="text-[11px] tracking-wider uppercase text-white/80">
                      Live Online Classes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
