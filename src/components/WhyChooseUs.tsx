import React from 'react';
import {
  Award,
  UserCheck,
  CalendarClock,
  UsersRound,
  Globe,
  CheckCircle2,
} from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academyData';
import { SectionOrnament } from './GeometricPattern';
import { ResilientImage } from './ResilientImage';

const WHY_ICONS = [
  Award,
  UserCheck,
  CalendarClock,
  UsersRound,
  Globe,
  CheckCircle2,
];

interface WhyChooseUsProps {
  onStartTrial: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onStartTrial }) => {
  return (
    <section
      id="why-us"
      className="relative border-b border-[#064E3B]/10 bg-[#FAF9F5] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-4">
              <SectionOrnament />
            </div>
            <h2
              className="font-serif-display text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-[42px]"
              style={{ textWrap: 'balance' }}
            >
              Why Choose QuranRise Academy?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#2C4438] sm:text-lg">
              At QuranRise Academy, we focus on attentive, one-to-one online Quran instruction that adapts to each student’s learning pace, schedule, and familiarity with Arabic reading.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-xl border border-[#064E3B]/15 bg-white p-2.5">
              <div className="relative overflow-hidden rounded-lg">
                <ResilientImage
                  src={ACADEMY_CONFIG.images.whyChooseUsVisual}
                  alt="Peaceful Islamic study space with an open Quran and study materials"
                  className="aspect-4/3 w-full object-cover"
                  fallbackTitle="Dedicated Learning Environment"
                  fallbackSubtitle="Personalized One-to-One Online Sessions"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#042F23]/85 via-[#042F23]/35 to-transparent p-4">
                  <p className="font-serif-display text-base font-semibold text-white">
                    Personalized Online Learning From Home
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ACADEMY_CONFIG.whyChooseUs.map((item, idx) => {
            const IconComponent = WHY_ICONS[idx] || CheckCircle2;
            return (
              <div
                key={item.title}
                className="group rounded-xl border border-[#064E3B]/12 bg-white p-7 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#C5A059]/60"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#064E3B]/8 text-[#064E3B] transition-colors duration-150 group-hover:bg-[#064E3B] group-hover:text-[#E5C687]">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-medium text-[#8B7344] tabular-nums">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl font-bold text-[#0F291E]">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#3B5246]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-xl border border-[#064E3B]/15 bg-[#064E3B] px-6 py-6 text-white sm:flex-row sm:px-8">
          <div>
            <p className="font-serif-display text-xl font-semibold text-white sm:text-2xl">
              Experience a live one-to-one class before enrolling
            </p>
            <p className="mt-1 text-xs text-emerald-100/85 sm:text-sm">
              Register for a complimentary trial lesson at a time that suits your family.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartTrial}
            className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-lg bg-[#C5A059] px-6 py-2.5 text-xs font-semibold tracking-wider text-[#072219] transition-colors duration-150 hover:bg-[#D4B26A] whitespace-nowrap cursor-pointer"
          >
            START FREE TRIAL
          </button>
        </div>
      </div>
    </section>
  );
};
