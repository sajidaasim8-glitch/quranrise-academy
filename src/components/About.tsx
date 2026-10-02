import React from 'react';
import { Users, Clock, Home } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academyData';
import { SectionOrnament } from './GeometricPattern';

const FEATURE_ICONS = [Users, Clock, Home];

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative border-b border-[#064E3B]/10 bg-[#FAF9F5] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <SectionOrnament />
          </div>
          <h2
            className="font-serif-display text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-[42px]"
            style={{ textWrap: 'balance' }}
          >
            About QuranRise Academy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-[#2C4438] sm:text-lg sm:leading-relaxed">
            QuranRise Academy provides convenient and personalized Quran education for children and adults. Our goal is to make Quran learning accessible from anywhere through online one-to-one classes.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {ACADEMY_CONFIG.aboutFeatures.map((feature, index) => {
            const IconComponent = FEATURE_ICONS[index] || Users;
            return (
              <div
                key={feature.title}
                className="group relative rounded-xl border border-[#064E3B]/12 bg-white p-7 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#C5A059]/60"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#064E3B]/8 text-[#064E3B] transition-colors duration-150 group-hover:bg-[#064E3B] group-hover:text-[#E5C687]">
                    <IconComponent className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs font-medium text-[#8B7344] tabular-nums">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl font-bold text-[#0F291E]">
                  {feature.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#3B5246]">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
