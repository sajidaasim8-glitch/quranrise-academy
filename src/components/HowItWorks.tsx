import React from 'react';
import { ClipboardCheck, BookOpenCheck, Clock, Laptop } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academyData';
import { GeometricPattern, SectionOrnament } from './GeometricPattern';

const STEP_ICONS = [ClipboardCheck, BookOpenCheck, Clock, Laptop];

interface HowItWorksProps {
  onStartTrial: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartTrial }) => {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#053B2C] py-20 text-white sm:py-24"
    >
      <GeometricPattern className="text-[#E5C687]" opacity="opacity-[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <SectionOrnament light />
          </div>
          <h2
            className="font-serif-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]"
            style={{ textWrap: 'balance' }}
          >
            Start Learning In 4 Easy Steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-100/85 sm:text-lg">
            Begin your online Quran classes smoothly with a simple four-step onboarding process.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {ACADEMY_CONFIG.steps.map((step, index) => {
            const IconComponent = STEP_ICONS[index] || ClipboardCheck;
            return (
              <div
                key={step.stepNumber}
                className="relative flex flex-col justify-between rounded-xl border border-white/12 bg-[#064E3B]/70 p-7 transition-colors duration-150 hover:border-[#C5A059]/60"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-[#C5A059]/40 bg-[#04392A] text-[#E5C687]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-sm font-semibold tracking-wider text-[#E5C687] tabular-nums">
                      Step { index + 1 }
                    </span>
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-emerald-100/85">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-3">
                  <span className="font-mono text-xs text-[#E5C687]/80 tabular-nums">
                    0{index + 1} / 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onStartTrial}
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#C5A059] px-8 py-3.5 text-xs font-semibold tracking-wider text-[#072219] transition-colors duration-150 hover:bg-[#D4B26A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E5C687] whitespace-nowrap cursor-pointer"
          >
            REGISTER FOR FREE TRIAL
          </button>
        </div>
      </div>
    </section>
  );
};
