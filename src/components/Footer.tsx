import React from 'react';
import { MessageCircle, Mail, Clock } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academyData';
import { QuranRiseLogo } from './QuranRiseLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectCourse: (courseTitle: string) => void;
}

const QUICK_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Courses', id: 'courses' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Teachers', id: 'teachers' },
  { label: 'Free Trial', id: 'free-trial' },
  { label: 'Contact', id: 'contact' },
];

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onSelectCourse,
}) => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    onNavigate(sectionId);
  };

  const handleCourseClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    courseTitle: string
  ) => {
    e.preventDefault();
    onSelectCourse(courseTitle);
  };

  return (
    <footer className="bg-[#03261C] text-emerald-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home')}
              className="inline-flex items-center text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5C687]"
              aria-label="QuranRise Academy Home"
            >
              <QuranRiseLogo size="lg" variant="light" showTagline />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-emerald-100/80">
              Accessible, personalized one-to-one online Quran, Tajweed, Hifz, and Islamic Studies classes for children and adults from the comfort of home.
            </p>

            <div className="mt-6">
              <a
                href={ACADEMY_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-[#C5A059]/50 bg-[#064E3B] px-4 py-2 text-xs font-semibold tracking-wider text-white transition-colors duration-150 hover:bg-[#075E47] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4 text-[#E5C687]" aria-hidden="true" />
                <span>WhatsApp: {ACADEMY_CONFIG.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-serif-display text-lg font-bold tracking-wide text-[#E5C687]">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="text-emerald-100/80 transition-colors duration-150 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif-display text-lg font-bold tracking-wide text-[#E5C687]">
              Courses
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {ACADEMY_CONFIG.courses.map((course) => (
                <li key={course.id}>
                  <a
                    href="#free-trial"
                    onClick={(e) => handleCourseClick(e, course.title)}
                    className="text-emerald-100/80 transition-colors duration-150 hover:text-white"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-serif-display text-lg font-bold tracking-wide text-[#E5C687]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3.5 text-sm text-emerald-100/85">
              <li className="flex items-start gap-2.5">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#E5C687]" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-emerald-200/70">WhatsApp</span>
                  <a
                    href={ACADEMY_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono font-medium text-white hover:text-[#E5C687] tabular-nums"
                  >
                    {ACADEMY_CONFIG.contact.whatsappDisplay}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#E5C687]" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-emerald-200/70">Email</span>
                  <a
                    href={`mailto:${ACADEMY_CONFIG.contact.email}`}
                    className="font-medium text-white hover:text-[#E5C687]"
                  >
                    {ACADEMY_CONFIG.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#E5C687]" aria-hidden="true" />
                <div>
                  <span className="block text-xs text-emerald-200/70">Class Timings</span>
                  <span className="font-medium text-white">
                    {ACADEMY_CONFIG.contact.classTimings}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-emerald-100/75 sm:flex-row">
          <p>© 2026 QuranRise Academy. All Rights Reserved.</p>
          <p className="text-emerald-100/60">
            One-to-One Online Quran, Tajweed &amp; Islamic Education
          </p>
        </div>
      </div>
    </footer>
  );
};
