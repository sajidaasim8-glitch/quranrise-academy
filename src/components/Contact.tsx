import React from 'react';
import { MessageCircle, Mail, Clock, CalendarCheck } from 'lucide-react';
import { ACADEMY_CONFIG } from '../config/academyData';
import { SectionOrnament } from './GeometricPattern';

interface ContactProps {
  onBookTrial: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onBookTrial }) => {
  return (
    <section
      id="contact"
      className="relative border-b border-[#064E3B]/10 bg-white py-20 sm:py-24"
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
            Contact Us
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3B5246] sm:text-lg">
            Have questions about our courses, one-to-one sessions, or class timings? Reach out to us directly via WhatsApp or email.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 lg:gap-8">
          {/* WhatsApp Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[#064E3B]/12 bg-[#FAF9F5] p-7 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#064E3B]/30">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#064E3B] text-[#E5C687]">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif-display text-xl font-bold text-[#0F291E]">
                WhatsApp
              </h3>
              <p className="mt-2 font-mono text-lg font-bold text-[#064E3B] tabular-nums">
                <a
                  href={ACADEMY_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-[#064E3B]"
                >
                  {ACADEMY_CONFIG.contact.whatsappDisplay}
                </a>
              </p>
              <p className="mt-1 text-xs text-[#4E675A]">
                International: {ACADEMY_CONFIG.contact.whatsappInternational}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#4E675A]">
                Message us directly on WhatsApp for quick inquiries and free trial scheduling.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#064E3B]/10">
              <a
                href={ACADEMY_CONFIG.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064E3B] hover:text-[#04392A] hover:underline"
              >
                <span>Chat on WhatsApp</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[#064E3B]/12 bg-[#FAF9F5] p-7 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#064E3B]/30">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#064E3B] text-[#E5C687]">
                <Mail className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif-display text-xl font-bold text-[#0F291E]">
                Email
              </h3>
              <p className="mt-2 text-base font-semibold text-[#064E3B] break-all">
                <a
                  href={`mailto:${ACADEMY_CONFIG.contact.email}`}
                  className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064E3B]"
                >
                  {ACADEMY_CONFIG.contact.email}
                </a>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#4E675A]">
                Send us an email anytime with your questions or preferred class schedule. Tapping opens your mail app.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#064E3B]/10">
              <a
                href={`mailto:${ACADEMY_CONFIG.contact.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#064E3B] hover:text-[#04392A] hover:underline"
              >
                <span>Send an Email</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Class Timings Card */}
          <div className="flex flex-col justify-between rounded-xl border border-[#064E3B]/12 bg-[#FAF9F5] p-7 transition-all duration-150 hover:-translate-y-0.5 hover:border-[#064E3B]/30">
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#064E3B] text-[#E5C687]">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="font-serif-display text-xl font-bold text-[#0F291E]">
                Class Timings
              </h3>
              <p className="mt-2 text-lg font-bold text-[#064E3B]">
                {ACADEMY_CONFIG.contact.classTimings}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#4E675A]">
                One-to-one classes scheduled around your local time zone for children and adults.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#064E3B]/10">
              <span className="text-xs font-medium text-[#4E675A]">
                Available 7 Days a Week
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons: CONTACT ON WHATSAPP & BOOK FREE TRIAL */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={ACADEMY_CONFIG.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#064E3B] px-8 py-3.5 text-sm font-semibold tracking-wider text-white transition-colors duration-150 hover:bg-[#04392A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064E3B] whitespace-nowrap sm:w-auto shadow-sm"
          >
            <MessageCircle className="h-4 w-4 text-[#E5C687]" aria-hidden="true" />
            <span>CONTACT ON WHATSAPP</span>
          </a>

          <button
            type="button"
            onClick={onBookTrial}
            className="inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-lg border border-[#064E3B] bg-white px-8 py-3.5 text-sm font-semibold tracking-wider text-[#064E3B] transition-colors duration-150 hover:bg-[#064E3B]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064E3B] whitespace-nowrap sm:w-auto cursor-pointer"
          >
            <CalendarCheck className="h-4 w-4 text-[#064E3B]" aria-hidden="true" />
            <span>BOOK FREE TRIAL</span>
          </button>
        </div>
      </div>
    </section>
  );
};
