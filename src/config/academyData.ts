/**
 * CENTRALIZED ACADEMY CONFIGURATION
 * ==================================
 * Easily customize branding, contact numbers, teacher placeholders,
 * course curricula, and backend integration settings.
 */

export interface CourseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focusAreas: string;
  level: string;
  format: string;
  highlights: string[];
  iconName: 'BookOpen' | 'BookMarked' | 'Mic' | 'BookmarkCheck' | 'Compass' | 'Sparkles';
}

export interface TeacherProfile {
  id: string;
  name: string;
  role: string;
  specialization: string;
  description: string;
  image: string;
  focus: string;
  languages: string[];
  features: string[];
}

export interface TrialFormPayload {
  studentName: string;
  parentGuardianName: string;
  age: string;
  whatsappNumber: string;
  email: string;
  selectedCourse: string;
  preferredClassTime: string;
  message: string;
  submittedAt: string;
}

export const ACADEMY_CONFIG = {
  siteName: 'QuranRise Academy',
  tagline: 'Personalized One-to-One Quran & Islamic Studies',

  // ==========================================
  // CONTACT INFORMATION
  // ==========================================
  contact: {
    whatsappDisplay: '0308 8848681',
    whatsappInternational: '+923088848681',
    whatsappRawNumber: '923088848681',
    whatsappUrl:
      'https://wa.me/923088848681?text=Assalam-o-Alaikum%2C%20I%20would%20like%20to%20book%20a%20free%20trial%20class%20at%20QuranRise%20Academy.',
    email: 'worldquran313@gmail.com',
    classTimings: 'Flexible Timings',
  },

  backend: {
    formEndpointUrl: '',
  },

  // ==========================================
  // GENERATED VISUAL ASSETS
  // ==========================================
  images: {
    heroVisual: '/src/assets/images/hero_quran_rehal_1790852081367.jpg',
    whyChooseUsVisual: '/src/assets/images/why_choose_us_study_1790852093291.jpg',
    teacherPlaceholder: '/src/assets/images/teacher_placeholder_portrait_1790852102585.jpg',
  },

  aboutFeatures: [
    {
      title: 'One-to-One Classes',
      description: 'Individual live sessions where the teacher focuses entirely on one student at a time.',
    },
    {
      title: 'Flexible Timings',
      description: 'Arrange class schedules around school, work, and family commitments across time zones.',
    },
    {
      title: 'Learn From Home',
      description: 'Connect safely and comfortably from home using a computer, tablet, or smartphone.',
    },
  ],

  courses: [
    {
      id: 'noorani-qaida',
      number: '01',
      title: 'Noorani Qaida',
      description: 'Learn the basics of Quran reading and Arabic letters.',
      focusAreas: 'Arabic Alphabet · Letter Recognition · Joining Words',
      level: 'Beginner Friendly',
      format: '30-min 1-to-1 Live Session',
      highlights: [
        'Accurate Makharij (letter articulation points)',
        'Harakaat, Sukoon, Tanween & Tashdeed rules',
        'Word-by-word reading practice with tutor',
      ],
      iconName: 'BookOpen',
    },
    {
      id: 'quran-reading',
      number: '02',
      title: 'Quran Reading',
      description: 'Improve Quran reading with proper pronunciation and guidance.',
      focusAreas: 'Fluent Recitation · Verse-by-Verse Practice · Guided Correction',
      level: 'Elementary to Intermediate',
      format: '30-min 1-to-1 Live Session',
      highlights: [
        'Fluent reading without pausing hesitancy',
        'Direct verse-by-verse recitation with instructor',
        'Real-time pronunciation and breath control guidance',
      ],
      iconName: 'BookMarked',
    },
    {
      id: 'quran-with-tajweed',
      number: '03',
      title: 'Quran With Tajweed',
      description: 'Learn the rules of Tajweed and improve Quran recitation.',
      focusAreas: 'Makharij (Articulation) · Rules of Noon & Meem · Elongation',
      level: 'All Levels (Beginner to Advanced)',
      format: '30-min 1-to-1 Live Session',
      highlights: [
        'Rules of Noon Saakin, Tanween & Meem Saakin',
        'Madd rules (elongation) & stopping signs (Waqf)',
        'Melodic, reverent, and accurate Quranic recitation',
      ],
      iconName: 'Mic',
    },
    {
      id: 'hifz-ul-quran',
      number: '04',
      title: 'Hifz-ul-Quran',
      description: 'A structured program for students who want to memorize the Quran.',
      focusAreas: 'Daily New Lesson · Recent Revision · Long-Term Retention',
      level: 'Dedicated Students',
      format: 'Personalized Daily Retention Plan',
      highlights: [
        'Sabaq (daily new lesson) memorization',
        'Sabqi (recent lessons revision system)',
        'Manzil (retention of previous completed Juz)',
      ],
      iconName: 'BookmarkCheck',
    },
    {
      id: 'islamic-studies',
      number: '05',
      title: 'Islamic Studies',
      description: 'Learn essential Islamic knowledge, manners and basic teachings.',
      focusAreas: 'Daily Duas · Pillars of Islam · Prophetic Manners (Adab)',
      level: 'For Children & Adults',
      format: 'Interactive 1-to-1 Guidance',
      highlights: [
        'Daily Duas, Kalimas, Salah & Wudhu steps',
        'Stories of the Prophets and Islamic character',
        'Basic Fiqh and Islamic moral values (Adab & Akhlaq)',
      ],
      iconName: 'Compass',
    },
    {
      id: 'quran-classes-for-kids',
      number: '06',
      title: 'Quran Classes For Kids',
      description: 'Friendly and engaging Quran education designed for children.',
      focusAreas: 'Step-by-Step Pacing · Patient Instruction · Foundational Habits',
      level: 'Ages 4 to 15',
      format: 'Engaging, Patient & Interactive',
      highlights: [
        'Gentle, encouraging teaching methodology',
        'Visual aids, interactive repetition & rewards',
        'Regular progress updates shared with parents',
      ],
      iconName: 'Sparkles',
    },
  ] as CourseItem[],

  whyChooseUs: [
    {
      title: 'Qualified Quran Teachers',
      description: 'Dedicated teachers experienced in guiding students through proper Quran recitation and Tajweed.',
    },
    {
      title: 'One-to-One Attention',
      description: 'Personalized live sessions ensure every student progresses at a comfortable and steady pace.',
    },
    {
      title: 'Flexible Class Timings',
      description: 'Select convenient lesson hours that adapt smoothly to your daily routine.',
    },
    {
      title: 'Classes For Kids & Adults',
      description: 'Structured learning paths suitable for young beginners as well as adult learners.',
    },
    {
      title: 'Learn From Anywhere',
      description: 'Attend online Quran lessons from home without commuting, anywhere in the world.',
    },
    {
      title: 'Free Trial Class',
      description: 'Experience our one-to-one teaching method firsthand before committing to regular classes.',
    },
  ],

  steps: [
    {
      stepNumber: '01',
      title: 'Register For Free Trial',
      description: 'Fill out the online free trial registration form with your basic details.',
    },
    {
      stepNumber: '02',
      title: 'Choose Your Course',
      description: 'Select the Quran, Tajweed, Hifz, or Islamic Studies program that matches your goals.',
    },
    {
      stepNumber: '03',
      title: 'Select A Convenient Time',
      description: 'Pick a preferred class schedule that fits comfortably into your routine.',
    },
    {
      stepNumber: '04',
      title: 'Start Learning Quran Online',
      description: 'Join your one-to-one live online class and begin your Quran learning journey.',
    },
  ],

  teachers: [
    {
      id: 'teacher-01',
      name: 'Quran Teacher 01',
      role: 'Quran & Tajweed Teacher',
      specialization: 'Noorani Qaida & Kids Pronunciation Specialist',
      description:
        'Experienced in teaching Noorani Qaida, foundational Arabic pronunciation, and step-by-step Quran reading in one-to-one sessions.',
      image: '/src/assets/images/teacher_placeholder_portrait_1790852102585.jpg',
      focus: 'Noorani Qaida · Quran Reading · Tajweed',
      languages: ['English', 'Urdu', 'Arabic'],
      features: ['Patient with Young Learners', 'Step-by-step Makharij', '1-to-1 Live Guidance'],
    },
    {
      id: 'teacher-02',
      name: 'Quran Teacher 02',
      role: 'Quran & Tajweed Teacher',
      specialization: 'Tajweed Rules & Recitation Fluency Mentor',
      description:
        'Focused on helping children and adults improve recitation accuracy, apply Tajweed rules, and build consistent reading fluency.',
      image: '/src/assets/images/teacher_placeholder_portrait_1790852102585.jpg',
      focus: 'Tajweed Rules · Recitation Correction · Hifz Support',
      languages: ['English', 'Urdu', 'Arabic'],
      features: ['Adults & Youth Instruction', 'Stopping Signs & Waqf', 'Continuous Fluency'],
    },
    {
      id: 'teacher-03',
      name: 'Quran Teacher 03',
      role: 'Quran & Tajweed Teacher',
      specialization: 'Hifz Revision & Islamic Studies Instructor',
      description:
        'Dedicated to patient, structured instruction for young learners and adults across Quran reading and essential Islamic Studies.',
      image: '/src/assets/images/teacher_placeholder_portrait_1790852102585.jpg',
      focus: 'Kids Quran Classes · Islamic Studies · Daily Duas',
      languages: ['English', 'Urdu', 'Arabic'],
      features: ['Memorization Retention (Sabaq)', 'Prophetic Duas & Adab', 'Interactive Learning'],
    },
  ] as TeacherProfile[],

  preferredTimes: [
    'Morning (8:00 AM – 12:00 PM)',
    'Afternoon (12:00 PM – 4:00 PM)',
    'Evening (4:00 PM – 8:00 PM)',
    'Night (8:00 PM – 11:00 PM)',
    'Weekend Classes Only',
    'Flexible / Discuss on WhatsApp',
  ],
};

/**
 * Builds a direct WhatsApp link pre-filled with an inquiry about a specific course.
 */
export function buildCourseWhatsAppUrl(courseTitle: string): string {
  const message = `Assalam-o-Alaikum, I would like to inquire about the ${courseTitle} course at QuranRise Academy.`;
  return `https://wa.me/${ACADEMY_CONFIG.contact.whatsappRawNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a direct WhatsApp link pre-filled with an inquiry for a specific teacher.
 */
export function buildTeacherWhatsAppUrl(teacherName: string): string {
  const message = `Assalam-o-Alaikum, I would like to book a free trial with ${teacherName} at QuranRise Academy.`;
  return `https://wa.me/${ACADEMY_CONFIG.contact.whatsappRawNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds a WhatsApp link with complete submitted trial registration details.
 */
export function buildBookingWhatsAppUrl(payload: TrialFormPayload): string {
  const message = `Assalam-o-Alaikum QuranRise Academy!
I have registered for a Free Trial:
• Student Name: ${payload.studentName}
• Parent/Guardian: ${payload.parentGuardianName}
• Age: ${payload.age}
• Course: ${payload.selectedCourse}
• Preferred Time: ${payload.preferredClassTime}
• Contact: ${payload.whatsappNumber}
${payload.message ? `• Note: ${payload.message}` : ''}

Please confirm my free trial schedule.`;

  return `https://wa.me/${ACADEMY_CONFIG.contact.whatsappRawNumber}?text=${encodeURIComponent(message)}`;
}

export async function submitFreeTrialRequest(payload: TrialFormPayload): Promise<{ ok: boolean }> {
  // Store locally for quick access & reliability
  try {
    const existing = JSON.parse(localStorage.getItem('quranrise_trial_bookings') || '[]');
    existing.push(payload);
    localStorage.setItem('quranrise_trial_bookings', JSON.stringify(existing));
  } catch {
    // Graceful fallback if localStorage is restricted
  }

  if (ACADEMY_CONFIG.backend.formEndpointUrl) {
    const response = await fetch(ACADEMY_CONFIG.backend.formEndpointUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Unable to submit your request at this moment. Please try again or contact us on WhatsApp.');
    }
    return { ok: true };
  }

  await new Promise((resolve) => setTimeout(resolve, 350));
  return { ok: true };
}
