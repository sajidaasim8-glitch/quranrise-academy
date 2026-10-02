import { useState, useCallback, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { ACADEMY_CONFIG } from './config/academyData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Courses } from './components/Courses';
import { WhyChooseUs } from './components/WhyChooseUs';
import { HowItWorks } from './components/HowItWorks';
import { Teachers } from './components/Teachers';
import { FreeTrialForm } from './components/FreeTrialForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedCourse, setPreselectedCourse] = useState<string>('');
  const [preferredTeacher, setPreferredTeacher] = useState<string>('');

  useEffect(() => {
    if (!document.querySelector('meta[content="bdJijo6w8rNi1ntflmavOilR9pfAvaz9EWguvi4ZntA"]')) {
      const meta = document.createElement('meta');
      meta.name = 'google-site-verification';
      meta.content = 'bdJijo6w8rNi1ntflmavOilR9pfAvaz9EWguvi4ZntA';
      document.head.prepend(meta);
    }
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  const handleSelectCourseAndEnroll = useCallback(
    (courseTitle: string) => {
      setPreselectedCourse(courseTitle);
      scrollToSection('free-trial');
      setTimeout(() => {
        const studentNameInput = document.getElementById('studentName');
        if (studentNameInput) {
          studentNameInput.focus({ preventScroll: true });
        }
      }, 450);
    },
    [scrollToSection]
  );

  const handleRequestTeacher = useCallback(
    (teacherName: string) => {
      setPreferredTeacher(teacherName);
      scrollToSection('free-trial');
      setTimeout(() => {
        const studentNameInput = document.getElementById('studentName');
        if (studentNameInput) {
          studentNameInput.focus({ preventScroll: true });
        }
      }, 450);
    },
    [scrollToSection]
  );

  const handleStartFreeTrial = useCallback(() => {
    scrollToSection('free-trial');
    setTimeout(() => {
      const studentNameInput = document.getElementById('studentName');
      if (studentNameInput) {
        studentNameInput.focus({ preventScroll: true });
      }
    }, 450);
  }, [scrollToSection]);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-[#0F291E]">
      <Header onNavigate={scrollToSection} />

      <main className="flex-1">
        <Hero
          onStartTrial={handleStartFreeTrial}
          onViewCourses={() => scrollToSection('courses')}
        />
        <About />
        <Courses onSelectCourse={handleSelectCourseAndEnroll} />
        <WhyChooseUs onStartTrial={handleStartFreeTrial} />
        <HowItWorks onStartTrial={handleStartFreeTrial} />
        <Teachers onRequestTeacher={handleRequestTeacher} />
        <FreeTrialForm
          preselectedCourse={preselectedCourse}
          preferredTeacher={preferredTeacher}
        />
        <Contact onBookTrial={handleStartFreeTrial} />
      </main>

      <Footer
        onNavigate={scrollToSection}
        onSelectCourse={handleSelectCourseAndEnroll}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <aside aria-label="WhatsApp Quick Contact">
        <a
          href={ACADEMY_CONFIG.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with QuranRise Academy on WhatsApp (+923088848681)"
          className="group fixed bottom-5 right-5 z-40 flex items-center gap-2.5 rounded-full border border-[#C5A059]/40 bg-[#064E3B] pl-3 pr-4 py-2.5 text-xs font-semibold text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-[#04392A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064E3B]"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xs">
            <MessageCircle className="h-4 w-4 fill-white" aria-hidden="true" />
            {/* Live pulsating dot indicating active WhatsApp availability */}
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E5C687] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#E5C687]" />
            </span>
          </span>
          <div className="flex flex-col text-left">
            <span className="text-[10px] text-emerald-200/90 leading-none">Questions?</span>
            <span className="font-bold text-white leading-tight">WhatsApp Us</span>
          </div>
        </a>
      </aside>
    </div>
  );
}
