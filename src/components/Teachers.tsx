import React from 'react';
import {
  MessageCircle,
  CalendarCheck,
  Languages,
  CheckCircle2,
  Users,
} from 'lucide-react';
import {
  ACADEMY_CONFIG,
  buildTeacherWhatsAppUrl,
} from '../config/academyData';
import { SectionOrnament } from './GeometricPattern';
import { ResilientImage } from './ResilientImage';

interface TeachersProps {
  onRequestTeacher?: (teacherName: string) => void;
}

export const Teachers: React.FC<TeachersProps> = ({ onRequestTeacher }) => {
  return (
    <section
      id="teachers"
      className="relative border-b border-[#064E3B]/10 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex justify-center">
            <SectionOrnament />
          </div>
          <h2
            className="font-serif-display text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-[42px]"
            style={{ textWrap: 'balance' }}
          >
            Our Teachers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3B5246] sm:text-lg">
            Our instructors provide patient, attentive one-to-one guidance in Quran reading, Tajweed rules, and foundational Islamic teachings.
          </p>
        </div>

        {/* Reassuring Gender Accommodations Banner */}
        <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-[#064E3B]/15 bg-emerald-50/60 p-4 text-center text-xs text-[#064E3B]">
          <div className="flex items-center justify-center gap-2 font-semibold">
            <Users className="h-4 w-4 text-[#064E3B]" aria-hidden="true" />
            <span>Male &amp; Female Quran Teachers Available</span>
          </div>
          <p className="mt-1 text-[#2C4438]">
            We accommodate family preferences with dedicated male teachers for boys and brothers, and female teachers for young children and sisters.
          </p>
        </div>

        {/* 3 Enhanced Teacher Profile Cards */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {ACADEMY_CONFIG.teachers.map((teacher, index) => (
            <article
              key={teacher.id}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#064E3B]/12 bg-[#FAF9F5] transition-all duration-200 hover:-translate-y-1 hover:border-[#064E3B]/35 hover:shadow-md hover:shadow-[#064E3B]/5"
            >
              <div>
                {/* Profile Portrait */}
                <div className="relative mx-auto mt-8 h-40 w-40 overflow-hidden rounded-full border-2 border-[#C5A059]/50 bg-[#064E3B]/5 p-1.5 shadow-xs">
                  <ResilientImage
                    src={teacher.image}
                    alt={`${teacher.name} - ${teacher.role}`}
                    className="h-full w-full rounded-full object-cover transition-transform duration-200 group-hover:scale-105"
                    fallbackTitle={teacher.name}
                    fallbackSubtitle={teacher.role}
                  />
                </div>

                {/* Card Content */}
                <div className="p-7 pb-4 text-center">
                  <span className="font-mono text-xs font-semibold text-[#8B7344] tabular-nums">
                    Instructor Profile 0{index + 1}
                  </span>

                  {/* Teacher Name Placeholder */}
                  <h3 className="mt-1 font-serif-display text-2xl font-bold text-[#0F291E]">
                    {teacher.name}
                  </h3>

                  {/* Role Title */}
                  <p className="mt-0.5 text-sm font-semibold text-[#064E3B]">
                    {teacher.role}
                  </p>

                  {/* Specialization pill badge */}
                  <p className="mt-2 text-xs font-medium text-[#8B7344] bg-[#C5A059]/15 inline-block px-3 py-1 rounded-full border border-[#C5A059]/30">
                    {teacher.specialization}
                  </p>

                  {/* Short Generic Description */}
                  <p className="mt-4 text-xs leading-relaxed text-[#3B5246]">
                    {teacher.description}
                  </p>

                  {/* Languages Spoken */}
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-[#4E675A] border-t border-[#064E3B]/10 pt-3">
                    <Languages className="h-3.5 w-3.5 text-[#064E3B]" aria-hidden="true" />
                    <span>Languages:</span>
                    <span className="font-medium text-[#0F291E]">
                      {teacher.languages.join(' · ')}
                    </span>
                  </div>

                  {/* Key Features */}
                  <div className="mt-3 space-y-1.5 text-left text-xs text-[#2C4438] bg-white/70 p-3 rounded-lg border border-[#064E3B]/10">
                    {teacher.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#064E3B]" aria-hidden="true" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => onRequestTeacher?.(teacher.name)}
                  className="inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-[#064E3B] px-4 py-2 text-xs font-semibold tracking-wider text-white transition-colors duration-150 hover:bg-[#04392A] cursor-pointer"
                >
                  <CalendarCheck className="h-3.5 w-3.5 text-[#E5C687]" aria-hidden="true" />
                  <span>REQUEST IN TRIAL FORM</span>
                </button>

                <a
                  href={buildTeacherWhatsAppUrl(teacher.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[38px] w-full items-center justify-center gap-1.5 rounded-lg border border-[#064E3B]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#064E3B] transition-colors duration-150 hover:bg-[#064E3B]/5 hover:border-[#064E3B]/40"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-[#064E3B]" aria-hidden="true" />
                  <span>Ask about this teacher</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
