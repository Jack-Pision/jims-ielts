"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Check } from "lucide-react";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  courseInterest: string;
  message: string;
}

export function EnquiryForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const courses = [
    "IELTS Academic",
    "IELTS General Training",
    "Fast Track IELTS",
    "Weekly Mock Test",
    "Visa Counseling",
    "Online IELTS Prep",
  ];

  if (isSubmitted) {
    return (
      <div className="text-center py-8 animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-gold/20 mb-4">
          <Check size={32} className="text-brand-gold" />
        </div>
        <p className="font-display text-pull-quote text-white italic">
          Thank you!
        </p>
        <p className="text-white/60 mt-2">
          We&apos;ll contact you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Full Name"
          className="input-gold-focus w-full"
          {...register("fullName", { required: "Full name is required" })}
        />
        {errors.fullName && (
          <p className="text-bright-lime text-xs mt-1">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Phone Number"
          className="input-gold-focus w-full"
          {...register("phone", { required: "Phone number is required" })}
        />
        {errors.phone && (
          <p className="text-bright-lime text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="input-gold-focus w-full"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
        {errors.email && (
          <p className="text-bright-lime text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <select
          className="input-gold-focus w-full appearance-none cursor-pointer"
          {...register("courseInterest", { required: "Please select a course" })}
        >
          <option value="">Select Course Interest</option>
          {courses.map((course) => (
            <option key={course} value={course} className="bg-deep-forest">
              {course}
            </option>
          ))}
        </select>
        {errors.courseInterest && (
          <p className="text-bright-lime text-xs mt-1">{errors.courseInterest.message}</p>
        )}
      </div>

      <div>
        <textarea
          placeholder="Message (optional)"
          rows={4}
          className="input-gold-focus w-full resize-none"
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        className="btn-gold w-full"
      >
        Submit Enquiry
      </button>
    </form>
  );
}
