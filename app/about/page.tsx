"use client";

import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Youtube, Linkedin } from "lucide-react";
import { Timeline } from "@/components/Timeline";
import { CredentialCard } from "@/components/CredentialCard";
import { ScrollReveal } from "@/components/ScrollReveal";
import { studentResults } from "@/data/testimonials";

const timelineItems = [
  {
    year: "2019",
    title: "Founded",
    description: "JIMS IELTS established in Jessore with a vision to help students achieve their dreams of studying abroad.",
  },
  {
    year: "2020",
    title: "First Batch Placed Abroad",
    description: "Our first cohort of students successfully placed in universities across Australia and Canada.",
  },
  {
    year: "2022",
    title: "Mock Test Program Launched",
    description: "Introduced free weekly mock tests, making quality IELTS practice accessible to all students in the region.",
  },
  {
    year: "2026",
    title: "500+ Students Placed",
    description: "Milestone achievement with over 500 students successfully placed in 6 destination countries worldwide.",
  },
];

const credentials = [
  { label: "Qualifications", value: "CELTA Certified, MA in TESOL" },
  { label: "Years of Experience", value: "15+ Years" },
  { label: "Specialization", value: "IELTS Training, Academic Writing" },
  { label: "Languages", value: "English · Bengali" },
];

const pillars = [
  {
    number: "01",
    title: "Expert Instruction",
    description: "Learn from certified trainers with proven track records and years of IELTS teaching experience.",
  },
  {
    number: "02",
    title: "Proven Results",
    description: "Consistent band score improvements with hundreds of success stories from our alumni.",
  },
  {
    number: "03",
    title: "Global Reach",
    description: "Strong network of partner institutions and alumni across 6 major destination countries.",
  },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: MessageCircle, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function AboutPage() {
  return (
    <>
      {/* Split Hero */}
      <section className="relative min-h-screen pt-20">
        <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          {/* Left - Text */}
          <div className="bg-gradient-to-br from-deep-forest to-dark-emerald flex items-center p-8 lg:p-16">
            <ScrollReveal>
              <h1 className="font-display text-hero text-white leading-tight">
                Rooted in Jessore.
                <br />
                <span className="text-brand-gold italic">Reaching the world.</span>
              </h1>
            </ScrollReveal>
          </div>

          {/* Right - Founder Portrait */}
          <div className="bg-dark-emerald relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/50 to-transparent z-10" />
            <img
              src="/images/founder-portrait.png"
              alt="JIMS IELTS Founder"
              className="w-full h-full object-cover object-center min-h-[500px] lg:min-h-full"
            />
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-soft-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Bio */}
            <ScrollReveal>
              <div>
                <h2 className="font-display text-4xl text-deep-forest mb-2">
                  Md. Mahmudul Hasan
                </h2>
                <p className="text-body-text mb-4">Founder & Lead Instructor</p>
                <span className="block w-10 h-0.5 bg-brand-gold mb-8" />
                
                <div className="space-y-4 text-body">
                  <p>
                    With over 15 years of experience in English language teaching and IELTS training, 
                    our founder established JIMS IELTS in 2019 with a singular vision: to make quality 
                    IELTS preparation accessible to students in Jessore and beyond.
                  </p>
                  <p>
                    Having personally guided hundreds of students to achieve their target band scores, 
                    he understands the unique challenges Bangladeshi students face when preparing for 
                    international English proficiency exams.
                  </p>
                  <p>
                    His teaching philosophy centers on personalized attention, rigorous practice, and 
                    building genuine confidence in every student who walks through our doors.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Right - Credentials Card */}
            <ScrollReveal delay={200}>
              <CredentialCard credentials={credentials} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* One-on-One Coaching Image Section */}
      <section className="bg-soft-white pb-20 lg:pb-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/images/one-on-one-coaching.png"
                alt="One-on-one IELTS coaching session"
                className="w-full h-auto object-cover aspect-video"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/40 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-label text-brand-gold mb-1">PERSONAL ATTENTION</p>
                <p className="font-display text-2xl">One-on-one mentoring for every student</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Institute Story Timeline */}
      <section className="bg-dark-emerald py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-white text-center mb-16">
              Our Journey
            </h2>
          </ScrollReveal>
          
          <Timeline items={timelineItems} />
        </div>
      </section>

      {/* Three Pillars */}
      <section className="bg-soft-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.number} delay={index * 150}>
                <div className="relative p-8">
                  {/* Background Number */}
                  <span className="absolute top-0 left-0 font-display text-[120px] text-deep-forest/[0.06] leading-none select-none">
                    {pillar.number}
                  </span>
                  
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl text-deep-forest mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-body">{pillar.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Wall */}
      <section className="bg-dark-emerald py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-white text-center mb-4">
              Our students, now living their global dreams.
            </h2>
            <p className="text-white/60 text-center mb-12">
              Real results from real students
            </p>
          </ScrollReveal>

          {/* Student Success Image */}
          <ScrollReveal delay={100}>
            <div className="relative rounded-lg overflow-hidden mb-12 max-w-3xl mx-auto">
              <img
                src="/images/student-success.png"
                alt="JIMS IELTS student success abroad"
                className="w-full h-auto object-cover aspect-[3/4] max-h-[500px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-emerald/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-label text-brand-gold mb-1">SUCCESS STORIES</p>
                <p className="font-display text-xl">From Jessore to the world</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {studentResults.map((student, index) => (
              <ScrollReveal key={student.name} delay={index * 100}>
                <div className="bg-deep-forest/50 border border-mid-green/30 rounded-lg p-6 text-center hover:border-brand-gold/50 transition-colors">
                  <p className="font-display text-xl text-white mb-3">{student.name}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-white/50">{student.from}</span>
                    <span className="text-brand-gold">→</span>
                    <span className="text-brand-gold font-semibold">{student.to}</span>
                  </div>
                  <p className="text-sm text-bright-lime">{student.destination}</p>
                  <p className="text-xs text-white/40 mt-1">{student.course}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Contact Section */}
      <section className="bg-soft-white py-20 lg:py-28">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* JIMS Exterior Image */}
          <ScrollReveal>
            <div className="relative rounded-lg overflow-hidden mb-12">
              <img
                src="/images/jims-exterior.png"
                alt="JIMS IELTS Institute Exterior"
                className="w-full h-auto object-cover aspect-video max-h-[400px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-label text-brand-gold mb-1">VISIT US</p>
                <p className="font-display text-2xl">Mujib Sarok, Jessore</p>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Map */}
            <ScrollReveal>
              <div className="h-[400px] bg-mid-green/10 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.204!2d89.2138!3d23.1703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff107c00000000%3A0x0!2zMjPCsDEwJzEzLjEiTiA4OcKwMTInNTYuNSJF!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JIMS IELTS Location"
                />
              </div>
            </ScrollReveal>

            {/* Right - Contact Card */}
            <ScrollReveal delay={200}>
              <div className="bg-deep-forest border-2 border-brand-gold rounded-lg p-8 h-full">
                <h3 className="font-display text-2xl text-white mb-6">Contact Us</h3>
                
                <div className="space-y-4 mb-8">
                  <a
                    href="tel:01711579970"
                    className="flex items-center gap-3 text-white/80 hover:text-brand-gold transition-colors"
                  >
                    <Phone size={18} className="text-brand-gold" />
                    01711-579970
                  </a>
                  <a
                    href="mailto:info@jimsielts.com"
                    className="flex items-center gap-3 text-white/80 hover:text-brand-gold transition-colors"
                  >
                    <Mail size={18} className="text-brand-gold" />
                    info@jimsielts.com
                  </a>
                  <a
                    href="https://wa.me/8801711579970"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/80 hover:text-brand-gold transition-colors"
                  >
                    <MessageCircle size={18} className="text-brand-gold" />
                    WhatsApp
                  </a>
                  <div className="flex items-start gap-3 text-white/80">
                    <MapPin size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                    Mujib Sarok, Jessore, Bangladesh
                  </div>
                  <div className="flex items-center gap-3 text-white/80">
                    <Clock size={18} className="text-brand-gold" />
                    Always Open
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-mid-green/30">
                  <p className="text-label text-white/50 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className="text-white/50 hover:text-brand-gold transition-colors"
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-brand-gold py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-display text-section-title text-deep-forest mb-6">
              Your dream is one exam away.
            </h2>
            <Link
              href="/courses"
              className="btn-outline border-deep-forest text-deep-forest hover:bg-deep-forest hover:text-brand-gold inline-flex items-center gap-2"
            >
              Explore Our Courses
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
