import React, { useState, useEffect } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  Calendar,
  Clock,
  ShieldCheck,
  RotateCcw,
  MessageCircle,
  Send,
} from 'lucide-react';
import {
  ACADEMY_CONFIG,
  TrialFormPayload,
  submitFreeTrialRequest,
  buildBookingWhatsAppUrl,
} from '../config/academyData';
import { SectionOrnament } from './GeometricPattern';

interface FreeTrialFormProps {
  preselectedCourse: string;
  preferredTeacher?: string;
}

interface FormState {
  studentName: string;
  parentGuardianName: string;
  age: string;
  whatsappNumber: string;
  email: string;
  selectedCourse: string;
  preferredClassTime: string;
  message: string;
}

interface FormErrors {
  studentName?: string;
  parentGuardianName?: string;
  age?: string;
  whatsappNumber?: string;
  email?: string;
  selectedCourse?: string;
  preferredClassTime?: string;
  submit?: string;
}

const INITIAL_STATE: FormState = {
  studentName: '',
  parentGuardianName: '',
  age: '',
  whatsappNumber: '',
  email: '',
  selectedCourse: '',
  preferredClassTime: '',
  message: '',
};

export const FreeTrialForm: React.FC<FreeTrialFormProps> = ({
  preselectedCourse,
  preferredTeacher,
}) => {
  const [formData, setFormData] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<TrialFormPayload | null>(
    null
  );

  // Sync course dropdown when user clicks "ENROLL NOW" on a course card
  useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({
        ...prev,
        selectedCourse: preselectedCourse,
      }));
      setErrors((prev) => ({ ...prev, selectedCourse: undefined }));
      setSubmittedData(null);
    }
  }, [preselectedCourse]);

  // Sync teacher preference into message if requested
  useEffect(() => {
    if (preferredTeacher) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message
          ? `${prev.message} | Preferred Teacher: ${preferredTeacher}`
          : `Preferred Teacher: ${preferredTeacher}`,
      }));
      setSubmittedData(null);
    }
  }, [preferredTeacher]);

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.studentName.trim()) {
      newErrors.studentName = 'Please enter the student name.';
    } else if (formData.studentName.trim().length < 2) {
      newErrors.studentName = 'Student name must be at least 2 characters.';
    }

    if (!formData.parentGuardianName.trim()) {
      newErrors.parentGuardianName =
        'Please enter the parent or guardian name (or "Self" for adult students).';
    }

    const ageNum = Number(formData.age.trim());
    if (!formData.age.trim()) {
      newErrors.age = 'Please enter the student age.';
    } else if (Number.isNaN(ageNum) || ageNum < 3 || ageNum > 99) {
      newErrors.age = 'Please enter a valid age between 3 and 99.';
    }

    const phoneClean = formData.whatsappNumber.replace(/[\s\-()]/g, '');
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'Please enter a WhatsApp contact number.';
    } else if (!/^\+?[0-9]{7,15}$/.test(phoneClean)) {
      newErrors.whatsappNumber =
        'Please enter a valid WhatsApp number with country code (e.g. +923088848681).';
    }

    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      newErrors.email = 'Please enter an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.email = 'Please enter a valid email address (e.g. name@example.com).';
    }

    if (!formData.selectedCourse) {
      newErrors.selectedCourse = 'Please select a course from the list.';
    }

    if (!formData.preferredClassTime) {
      newErrors.preferredClassTime = 'Please select a preferred class time.';
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    const payload: TrialFormPayload = {
      studentName: formData.studentName.trim(),
      parentGuardianName: formData.parentGuardianName.trim(),
      age: formData.age.trim(),
      whatsappNumber: formData.whatsappNumber.trim(),
      email: formData.email.trim(),
      selectedCourse: formData.selectedCourse,
      preferredClassTime: formData.preferredClassTime,
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      await submitFreeTrialRequest(payload);
      setSubmittedData(payload);
      setFormData(INITIAL_STATE);
    } catch (err) {
      setErrors({
        submit:
          err instanceof Error
            ? err.message
            : 'An error occurred while submitting your request. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="free-trial"
      className="relative border-b border-[#064E3B]/10 bg-[#FAF9F5] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Information & Trust */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <SectionOrnament />
            </div>
            <h2
              className="font-serif-display text-3xl font-bold tracking-tight text-[#064E3B] sm:text-4xl lg:text-[42px]"
              style={{ textWrap: 'balance' }}
            >
              Start Your Free Trial Today
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#2C4438] sm:text-lg">
              Take the first step toward better Quran learning. Register for a free trial class and choose a convenient time.
            </p>

            {/* Academy Features Panel */}
            <div className="mt-8 space-y-5 rounded-2xl border border-[#064E3B]/12 bg-white p-6 shadow-xs">
              <div className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#064E3B]/8 text-[#064E3B]">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#0F291E]">
                    Complimentary One-to-One Evaluation
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#3B5246]">
                    Meet your teacher in a live individual session to experience our teaching approach before enrolling.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#064E3B]/10 pt-4 flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#064E3B]/8 text-[#064E3B]">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#0F291E]">
                    Convenient Scheduling
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#3B5246]">
                    We coordinate directly via WhatsApp or email to confirm a class time that suits your schedule.
                  </p>
                </div>
              </div>

              <div className="border-t border-[#064E3B]/10 pt-4 flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#064E3B]/8 text-[#064E3B]">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif-display text-lg font-bold text-[#0F291E]">
                    No Obligation To Continue
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#3B5246]">
                    Your trial class is completely free and helps us recommend the right course level for the student.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout for Instant Scheduling */}
            <div className="mt-6 rounded-xl border border-[#C5A059]/40 bg-[#064E3B] p-5 text-white shadow-xs">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
                  <MessageCircle className="h-5 w-5 fill-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#E5C687]">
                    Prefer Instant WhatsApp Booking?
                  </p>
                  <p className="mt-0.5 text-xs text-emerald-100/90">
                    Chat with us on WhatsApp for fast response and instant trial scheduling.
                  </p>
                </div>
              </div>
              <div className="mt-3.5 pt-3 border-t border-white/15">
                <a
                  href={ACADEMY_CONFIG.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#E5C687] hover:text-white transition-colors"
                >
                  <span>Chat on WhatsApp (+923088848681)</span>
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form or Booking Confirmation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#064E3B]/15 bg-white p-6 sm:p-9 shadow-xs">
              {submittedData ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-6 text-center"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#064E3B]/10 text-[#064E3B]">
                    <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                  </div>

                  <h3 className="font-serif-display text-2xl font-bold text-[#064E3B] sm:text-3xl">
                    Thank you! Your free trial request has been received. We will contact you soon.
                  </h3>

                  <p className="mt-2 text-xs text-[#4E675A]">
                    A copy of your registration has been logged. You can also send the details directly to our WhatsApp for immediate scheduling.
                  </p>

                  <div className="mx-auto mt-6 max-w-md rounded-xl border border-[#064E3B]/12 bg-[#FAF9F5] p-5 text-left text-xs text-[#2C4438]">
                    <p className="mb-3 font-semibold tracking-wider text-[#064E3B] uppercase">
                      Registration Summary
                    </p>
                    <dl className="space-y-2">
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#4E675A]">Student Name:</dt>
                        <dd className="font-medium text-[#0F291E]">
                          {submittedData.studentName}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#4E675A]">Parent/Guardian:</dt>
                        <dd className="font-medium text-[#0F291E]">
                          {submittedData.parentGuardianName}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#4E675A]">Student Age:</dt>
                        <dd className="font-medium text-[#0F291E]">
                          {submittedData.age}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#4E675A]">Course:</dt>
                        <dd className="font-medium text-[#0F291E]">
                          {submittedData.selectedCourse}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#4E675A]">Preferred Time:</dt>
                        <dd className="font-medium text-[#0F291E]">
                          {submittedData.preferredClassTime}
                        </dd>
                      </div>
                      <div className="flex justify-between gap-4">
                        <dt className="text-[#4E675A]">WhatsApp:</dt>
                        <dd className="font-mono font-medium text-[#0F291E] tabular-nums">
                          {submittedData.whatsappNumber}
                        </dd>
                      </div>
                      {submittedData.message && (
                        <div className="flex justify-between gap-4 border-t border-[#064E3B]/10 pt-2">
                          <dt className="text-[#4E675A]">Notes:</dt>
                          <dd className="font-medium text-[#0F291E] text-right">
                            {submittedData.message}
                          </dd>
                        </div>
                      )}
                    </dl>
                  </div>

                  {/* Functional Action Buttons on Confirmation */}
                  <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <a
                      href={buildBookingWhatsAppUrl(submittedData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-[#064E3B] px-6 py-2.5 text-xs font-semibold tracking-wider text-white transition-colors duration-150 hover:bg-[#04392A] shadow-xs"
                    >
                      <Send className="h-4 w-4 text-[#E5C687]" aria-hidden="true" />
                      <span>SEND DETAILS ON WHATSAPP</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex min-h-[46px] w-full sm:w-auto items-center justify-center gap-2 rounded-lg border border-[#064E3B]/25 bg-white px-5 py-2.5 text-xs font-semibold tracking-wider text-[#064E3B] transition-colors duration-150 hover:bg-[#064E3B]/5 cursor-pointer"
                    >
                      <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>SUBMIT ANOTHER REQUEST</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6 border-b border-[#064E3B]/10 pb-4">
                    <h3 className="font-serif-display text-2xl font-bold text-[#0F291E]">
                      Free Trial Registration Form
                    </h3>
                    <p className="mt-1 text-xs text-[#4E675A]">
                      Please complete the fields below to book your free one-to-one trial lesson.
                    </p>
                  </div>

                  {errors.submit && (
                    <div
                      role="alert"
                      className="mb-6 flex items-start gap-2.5 rounded-lg border border-red-700/25 bg-red-50 p-4 text-xs text-red-800"
                    >
                      <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-700" aria-hidden="true" />
                      <span>{errors.submit}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    {/* Student Name */}
                    <div>
                      <label
                        htmlFor="studentName"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        Student Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="studentName"
                        name="studentName"
                        type="text"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student's full name"
                        aria-invalid={Boolean(errors.studentName)}
                        aria-describedby={
                          errors.studentName ? 'studentName-error' : undefined
                        }
                        className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F291E] placeholder:text-[#4E675A]/60 focus:outline-none ${
                          errors.studentName
                            ? 'border-red-600 bg-red-50/40 focus:border-red-700'
                            : 'border-[#064E3B]/20 bg-[#FAF9F5] focus:border-[#064E3B] focus:bg-white'
                        }`}
                      />
                      {errors.studentName && (
                        <p
                          id="studentName-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.studentName}</span>
                        </p>
                      )}
                    </div>

                    {/* Parent/Guardian Name */}
                    <div>
                      <label
                        htmlFor="parentGuardianName"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        Parent/Guardian Name <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="parentGuardianName"
                        name="parentGuardianName"
                        type="text"
                        value={formData.parentGuardianName}
                        onChange={handleChange}
                        placeholder="Parent name (or Self if adult)"
                        aria-invalid={Boolean(errors.parentGuardianName)}
                        aria-describedby={
                          errors.parentGuardianName
                            ? 'parentGuardianName-error'
                            : undefined
                        }
                        className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F291E] placeholder:text-[#4E675A]/60 focus:outline-none ${
                          errors.parentGuardianName
                            ? 'border-red-600 bg-red-50/40 focus:border-red-700'
                            : 'border-[#064E3B]/20 bg-[#FAF9F5] focus:border-[#064E3B] focus:bg-white'
                        }`}
                      />
                      {errors.parentGuardianName && (
                        <p
                          id="parentGuardianName-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.parentGuardianName}</span>
                        </p>
                      )}
                    </div>

                    {/* Age */}
                    <div>
                      <label
                        htmlFor="age"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        Age <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        min={3}
                        max={99}
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="e.g. 8"
                        aria-invalid={Boolean(errors.age)}
                        aria-describedby={errors.age ? 'age-error' : undefined}
                        className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F291E] tabular-nums placeholder:text-[#4E675A]/60 focus:outline-none ${
                          errors.age
                            ? 'border-red-600 bg-red-50/40 focus:border-red-700'
                            : 'border-[#064E3B]/20 bg-[#FAF9F5] focus:border-[#064E3B] focus:bg-white'
                        }`}
                      />
                      {errors.age && (
                        <p
                          id="age-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.age}</span>
                        </p>
                      )}
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label
                        htmlFor="whatsappNumber"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        WhatsApp Number <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="whatsappNumber"
                        name="whatsappNumber"
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={handleChange}
                        placeholder="+92 308 8848681"
                        aria-invalid={Boolean(errors.whatsappNumber)}
                        aria-describedby={
                          errors.whatsappNumber
                            ? 'whatsappNumber-error'
                            : undefined
                        }
                        className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F291E] tabular-nums placeholder:text-[#4E675A]/60 focus:outline-none ${
                          errors.whatsappNumber
                            ? 'border-red-600 bg-red-50/40 focus:border-red-700'
                            : 'border-[#064E3B]/20 bg-[#FAF9F5] focus:border-[#064E3B] focus:bg-white'
                        }`}
                      />
                      {errors.whatsappNumber && (
                        <p
                          id="whatsappNumber-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.whatsappNumber}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        Email <span className="text-red-700">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? 'email-error' : undefined
                        }
                        className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F291E] placeholder:text-[#4E675A]/60 focus:outline-none ${
                          errors.email
                            ? 'border-red-600 bg-red-50/40 focus:border-red-700'
                            : 'border-[#064E3B]/20 bg-[#FAF9F5] focus:border-[#064E3B] focus:bg-white'
                        }`}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* Select Course */}
                    <div>
                      <label
                        htmlFor="selectedCourse"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        Select Course <span className="text-red-700">*</span>
                      </label>
                      <select
                        id="selectedCourse"
                        name="selectedCourse"
                        value={formData.selectedCourse}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.selectedCourse)}
                        aria-describedby={
                          errors.selectedCourse
                            ? 'selectedCourse-error'
                            : undefined
                        }
                        className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F291E] focus:outline-none ${
                          errors.selectedCourse
                            ? 'border-red-600 bg-red-50/40 focus:border-red-700'
                            : 'border-[#064E3B]/20 bg-[#FAF9F5] focus:border-[#064E3B] focus:bg-white'
                        }`}
                      >
                        <option value="">Choose a course...</option>
                        {ACADEMY_CONFIG.courses.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title} ({course.level})
                          </option>
                        ))}
                      </select>
                      {errors.selectedCourse && (
                        <p
                          id="selectedCourse-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.selectedCourse}</span>
                        </p>
                      )}
                    </div>

                    {/* Preferred Class Time */}
                    <div>
                      <label
                        htmlFor="preferredClassTime"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        Preferred Class Time <span className="text-red-700">*</span>
                      </label>
                      <select
                        id="preferredClassTime"
                        name="preferredClassTime"
                        value={formData.preferredClassTime}
                        onChange={handleChange}
                        aria-invalid={Boolean(errors.preferredClassTime)}
                        aria-describedby={
                          errors.preferredClassTime
                            ? 'preferredClassTime-error'
                            : undefined
                        }
                        className={`mt-1.5 block w-full rounded-lg border px-3.5 py-2.5 text-sm text-[#0F291E] focus:outline-none ${
                          errors.preferredClassTime
                            ? 'border-red-600 bg-red-50/40 focus:border-red-700'
                            : 'border-[#064E3B]/20 bg-[#FAF9F5] focus:border-[#064E3B] focus:bg-white'
                        }`}
                      >
                        <option value="">Select preferred timing...</option>
                        {ACADEMY_CONFIG.preferredTimes.map((timeOption) => (
                          <option key={timeOption} value={timeOption}>
                            {timeOption}
                          </option>
                        ))}
                      </select>
                      {errors.preferredClassTime && (
                        <p
                          id="preferredClassTime-error"
                          className="mt-1.5 flex items-center gap-1.5 text-xs text-red-700"
                        >
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.preferredClassTime}</span>
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold text-[#0F291E]"
                      >
                        Message <span className="font-normal text-[#4E675A]">(Optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share any details about current reading level, time zone, teacher preference, or learning goals..."
                        className="mt-1.5 block w-full rounded-lg border border-[#064E3B]/20 bg-[#FAF9F5] px-3.5 py-2.5 text-sm text-[#0F291E] placeholder:text-[#4E675A]/60 focus:border-[#064E3B] focus:bg-white focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-7">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-[#064E3B] px-7 py-3.5 text-sm font-semibold tracking-wider text-white transition-colors duration-150 hover:bg-[#04392A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#064E3B] disabled:opacity-60 whitespace-nowrap cursor-pointer shadow-xs"
                    >
                      {isSubmitting ? 'SUBMITTING REQUEST...' : 'BOOK FREE TRIAL'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
