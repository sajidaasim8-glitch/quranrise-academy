import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academyData';
import { QuranRiseLogo } from './QuranRiseLogo';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
}

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Courses', id: 'courses' },
  { label: 'Teachers', id: 'teachers' },
  { label: 'Why Us', id: 'why-us' },
  { label: 'Contact', id: 'contact' },
];

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-colors duration-150 ${
        scrolled
          ? 'border-b border-[#064E3B]/10 bg-[#FAF9F5]/95 shadow-xs backdrop-blur-md'
          : 'border-b border-[#064E3B]/10 bg-[#FAF9F5]'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, 'home')}
          className="group flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#064E3B]"
          aria-label="QuranRise Academy Home"
        >
          <QuranRiseLogo size="md" />
        </a>

        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex lg:items-center lg:gap-7"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleLinkClick(e, item.id)}
              className="relative py-1 text-sm font-medium text-[#1F3A2E] transition-colors duration-150 hover:text-[#064E3B] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#C5A059] after:transition-all after:duration-150 hover:after:w-full whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#064E3B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={ACADEMY_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-[#064E3B]/20 bg-white px-3.5 py-2 text-xs font-semibold text-[#064E3B] transition-colors duration-150 hover:bg-[#064E3B]/5 hover:border-[#064E3B]/40 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="h-3.5 w-3.5 text-[#064E3B]" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#free-trial"
            onClick={(e) => handleLinkClick(e, 'free-trial')}
            className="inline-flex items-center justify-center rounded-lg bg-[#064E3B] px-5 py-2.5 text-xs font-semibold tracking-wider text-white transition-all duration-150 hover:bg-[#04392A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064E3B] whitespace-nowrap shrink-0 shadow-xs"
          >
            FREE TRIAL
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#064E3B]/15 text-[#064E3B] transition-colors duration-150 hover:bg-[#064E3B]/5 lg:hidden focus-visible:outline-2 focus-visible:outline-[#064E3B]"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Mobile Navigation"
          className="border-t border-[#064E3B]/10 bg-[#FAF9F5] px-4 pt-3 pb-6 shadow-lg lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className="flex min-h-[44px] items-center rounded-lg px-3 py-2.5 text-base font-medium text-[#0F291E] transition-colors duration-150 hover:bg-[#064E3B]/5 hover:text-[#064E3B]"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-3 space-y-2">
              <a
                href={ACADEMY_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#064E3B]/25 bg-white px-4 py-2.5 text-sm font-semibold text-[#064E3B] transition-colors hover:bg-[#064E3B]/5"
              >
                <MessageCircle className="h-4 w-4 text-[#064E3B]" aria-hidden="true" />
                <span>Chat on WhatsApp ({ACADEMY_CONFIG.contact.whatsappDisplay})</span>
              </a>

              <a
                href="#free-trial"
                onClick={(e) => handleLinkClick(e, 'free-trial')}
                className="flex min-h-[46px] w-full items-center justify-center rounded-lg bg-[#064E3B] px-5 py-3 text-sm font-semibold tracking-wider text-white transition-colors duration-150 hover:bg-[#04392A]"
              >
                START FREE TRIAL
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
