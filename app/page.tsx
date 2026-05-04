import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Diamond } from "lucide-react";
import { IELTSScoreCard } from "@/components/IELTSScoreCard";
import { DestinationPills } from "@/components/DestinationPills";
import { StatCounter } from "@/components/StatCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Testimonial } from "@/components/Testimonial";
import { testimonials } from "@/data/testimonials";

const stats = [
  { value: 500, suffix: "+", label: "Students Placed" },
  { value: 6, suffix: "", label: "Destination Countries" },
  { value: 100, suffix: "%", label: "Recommend" },
  { value: 2019, suffix: "", label: "Est. 2019" },
];

const differentiators = [
  {
    title: "Expert-led instruction",
    description: "Learn from certified IELTS trainers with years of experience.",
  },
  {
    title: "Free weekly mock exams",
    description: "Practice in real exam conditions every weekend, completely free.",
  },
  {
    title: "Personalized band score tracking",
    description: "Track your progress with detailed analytics and feedback.",
  },
  {
    title: "End-to-end visa counseling",
    description: "From application to approval, we guide you through every step.",
  },
];

const destinations = [
  { name: "Australia", code: "AU" },
  { name: "UK", code: "GB" },
  { name: "USA", code: "US" },
  { name: "Canada", code: "CA" },
  { name: "Malaysia", code: "MY" },
  { name: "Ireland", code: "IE" },
];

const courses = [
  {
    name: "IELTS Academic",
    duration: "3 months",
    format: "In-person",
    features: ["All modules covered", "Weekly mock tests", "Personalized feedback"],
  },
  {
    name: "IELTS General",
    duration: "2 months",
    format: "Flexible",
    features: ["Immigration focus", "Letter writing", "Flexible timing"],
  },
  {
    name: "Fast Track IELTS",
    duration: "4 weeks",
    format: "Daily intensive",
    features: ["Rapid improvement", "Daily sessions", "Priority slots"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-deep-forest to-dark-emerald pt-20 overflow-hidden">
        {/* Background Image - IELTS Exam Sheet */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img
            src="/images/ielts-exam-sheet.png"
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <p className="text-label text-bright-lime">
                BANGLADESH&apos;S LEADING IELTS INSTITUTE
              </p>
              
              <h1 className="space-y-2">
                <span className="font-display text-hero text-white/80 block">
                  Dream
                </span>
                <span className="font-display text-hero text-white block">
                  Big.
                </span>
                <span className="font-display text-hero text-brand-gold italic block">
                  Go Global.
                </span>
              </h1>

              <DestinationPills />

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="tel:01711579970"
                  className="btn-gold inline-flex items-center gap-2"
                >
                  Enroll Now
                </Link>
                <Link
                  href="/courses#mock"
                  className="btn-outline border-bright-lime text-bright-lime hover:bg-bright-lime hover:text-deep-forest inline-flex items-center gap-2"
                >
                  Free Mock Test
                  <ArrowRight size={16} />
                </Link>
              </div>

              <p className="text-sm text-white/50 pt-4">
                IELTS · OVERSEAS · MOCK TESTS
              </p>
            </div>

            {/* Right Content - Score Card */}
            <div className="hidden lg:flex justify-center items-center">
              <IELTSScoreCard />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-deep-forest py-12">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <StatCounter stats={stats} />
        </div>
      </section>

      {/* Why JIMS Section */}
      <section className="bg-soft-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left - Heading */}
            <ScrollReveal>
              <h2 className="font-display text-section-title text-deep-forest">
                Why students choose JIMS.
                <span className="block w-16 h-0.5 bg-brand-gold mt-4" />
              </h2>
            </ScrollReveal>

            {/* Right - Differentiators */}
            <div className="space-y-8">
              {differentiators.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 100}>
                  <div className="flex items-start gap-4">
                    <Diamond
                      size={12}
                      className="text-brand-gold mt-2 flex-shrink-0"
                      fill="currentColor"
                    />
                    <div>
                      <h3 className="font-display text-xl text-deep-forest mb-1">
                        {item.title}
                      </h3>
                      <p className="text-body">{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Classroom Image */}
          <ScrollReveal delay={300}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/images/classroom-session.png"
                alt="IELTS classroom session at JIMS"
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-label text-brand-gold mb-1">OUR CLASSROOM</p>
                <p className="font-display text-2xl">Focused learning environment</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Destination Showcase */}
      <section className="bg-dark-emerald py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-white text-center mb-16">
              We&apos;ve placed students in 6 countries.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {destinations.map((dest, index) => (
              <ScrollReveal key={dest.code} delay={index * 100}>
                <div className="group relative p-6 border border-mid-green/30 rounded-lg hover:border-brand-gold transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* Background code */}
                  <span className="absolute top-2 right-2 font-display text-6xl text-brand-gold/10 select-none">
                    {dest.code}
                  </span>
                  
                  <h3 className="font-display text-2xl text-white group-hover:text-brand-gold transition-colors relative z-10">
                    {dest.name}
                  </h3>
                  
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-300" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-soft-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <Testimonial testimonials={testimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="bg-soft-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-deep-forest text-center mb-16">
              Our Programs
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <ScrollReveal key={course.name} delay={index * 100}>
                <div className="card-gold-accent p-6 h-full flex flex-col">
                  <h3 className="font-display text-card-title text-deep-forest mb-3">
                    {course.name}
                  </h3>
                  <div className="flex gap-2 mb-4">
                    <span className="pill bg-soft-white text-mid-green text-xs">
                      {course.duration}
                    </span>
                    <span className="pill bg-soft-white text-mid-green text-xs">
                      {course.format}
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6 flex-1">
                    {course.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-body-text flex items-center gap-2"
                      >
                        <Diamond
                          size={8}
                          className="text-brand-gold flex-shrink-0"
                          fill="currentColor"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/courses"
                    className="text-brand-gold text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    See Course
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Band */}
      <section className="bg-brand-gold py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-deep-forest mb-4">
              Ready to start your journey?
            </h2>
            <p className="text-badge-number text-deep-forest font-semibold mb-8">
              01711-579970
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:01711579970"
                className="btn-gold bg-deep-forest text-white hover:bg-deep-forest/90 inline-flex items-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </a>
              <a
                href="https://wa.me/8801711579970"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-deep-forest text-deep-forest hover:bg-deep-forest hover:text-white inline-flex items-center gap-2"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                WhatsApp
                <ArrowRight size={16} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
