import React, { useState } from 'react';
import {
  BookOpen,
  BookMarked,
  Mic,
  BookmarkCheck,
  Compass,
  Sparkles,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import {
  ACADEMY_CONFIG,
  CourseItem,
  buildCourseWhatsAppUrl,
} from '../config/academyData';
import { SectionOrnament } from './GeometricPattern';

interface CoursesProps {
  onSelectCourse: (courseTitle: string) => void;
}

const ICON_MAP: Record<CourseItem['iconName'], React.ComponentType<{ className?: string }>> = {
  BookOpen,
  BookMarked,
  Mic,
  BookmarkCheck,
  Compass,
  Sparkles,
};

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const [expandedCourseId, setExpandedCourseId] = useState<string | null>(null);

  const toggleCourseDetails = (courseId: string) => {
    setExpandedCourseId((prev) => (prev === courseId ? null : courseId));
  };

  return (
    <section
      id="courses"
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
            Our Courses
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3B5246] sm:text-lg">
            Structured one-to-one courses designed for beginners, children, and adults seeking accurate Quran recitation and essential Islamic learning.
          </p>
        </div>

        {/* 6 Enhanced Course Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {ACADEMY_CONFIG.courses.map((course) => {
            const IconComponent = ICON_MAP[course.iconName] || BookOpen;
            const isExpanded = expandedCourseId === course.id;

            return (
              <article
                key={course.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#064E3B]/12 bg-[#FAF9F5] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[#064E3B]/35 hover:shadow-md hover:shadow-[#064E3B]/5"
              >
                <div>
                  {/* Top Row: Icon + Level + Index */}
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C5A059]/40 bg-[#064E3B] text-[#E5C687] shadow-xs transition-transform duration-200 group-hover:scale-105">
                      <IconComponent className="h-6 w-6" aria-hidden="true" />
                    </div>

                    <div className="flex flex-col items-end">
                      <span className="font-mono text-xs font-semibold text-[#8B7344] tabular-nums">
                        {course.number}
                      </span>
                      <span className="mt-1 rounded-md bg-[#064E3B]/8 px-2 py-0.5 text-[11px] font-semibold text-[#064E3B]">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="font-serif-display text-2xl font-bold text-[#0F291E]">
                    {course.title}
                  </h3>

                  {/* Course Short Description */}
                  <p className="mt-2.5 text-sm leading-relaxed text-[#2C4438]">
                    {course.description}
                  </p>

                  {/* Format & Key Focus */}
                  <div className="mt-4 rounded-lg border border-[#064E3B]/10 bg-white/70 p-3">
                    <p className="text-[11px] font-medium text-[#4E675A]">
                      <span className="font-semibold text-[#064E3B]">Format:</span>{' '}
                      {course.format}
                    </p>
                    <p className="mt-1 text-[11px] text-[#4E675A]">
                      <span className="font-semibold text-[#064E3B]">Key Scope:</span>{' '}
                      {course.focusAreas}
                    </p>
                  </div>

                  {/* Key Learning Highlights */}
                  <div className="mt-4 border-t border-[#064E3B]/10 pt-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#8B7344]">
                      Core Learning Milestones:
                    </p>
                    <ul className="mt-2 space-y-1.5 text-xs text-[#2C4438]">
                      {course.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#064E3B]"
                            aria-hidden="true"
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expandable Syllabus Toggle */}
                  <div className="mt-3">
                    <button
                      type="button"
                      onClick={() => toggleCourseDetails(course.id)}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#064E3B] hover:text-[#04392A] hover:underline"
                    >
                      <span>
                        {isExpanded ? 'Hide Details' : 'View Course Highlights'}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="h-3 w-3" aria-hidden="true" />
                      ) : (
                        <ChevronDown className="h-3 w-3" aria-hidden="true" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="mt-2 rounded-lg bg-emerald-50/70 p-3 text-xs leading-relaxed text-[#0F291E] border border-emerald-900/10">
                        <p className="font-semibold text-[#064E3B]">
                          Why take this course at QuranRise?
                        </p>
                        <p className="mt-1">
                          Tailored one-to-one instruction with daily progress tracking, individual recitation feedback, and male or female instructors available to accommodate your family.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons: ENROLL NOW & Ask on WhatsApp */}
                <div className="mt-6 flex flex-col gap-2 pt-4 border-t border-[#064E3B]/10">
                  <button
                    type="button"
                    onClick={() => onSelectCourse(course.title)}
                    className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#064E3B] px-5 py-2.5 text-xs font-semibold tracking-wider text-white transition-colors duration-150 hover:bg-[#04392A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064E3B] whitespace-nowrap cursor-pointer shadow-xs"
                  >
                    <span>ENROLL NOW</span>
                    <ArrowRight
                      className="h-3.5 w-3.5 text-[#E5C687] transition-transform duration-150 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>

                  <a
                    href={buildCourseWhatsAppUrl(course.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[38px] w-full items-center justify-center gap-1.5 rounded-lg border border-[#064E3B]/20 bg-white px-4 py-2 text-xs font-semibold text-[#064E3B] transition-colors duration-150 hover:bg-[#064E3B]/5 hover:border-[#064E3B]/40 whitespace-nowrap"
                  >
                    <MessageCircle className="h-3.5 w-3.5 text-[#064E3B]" aria-hidden="true" />
                    <span>Ask about this course on WhatsApp</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
