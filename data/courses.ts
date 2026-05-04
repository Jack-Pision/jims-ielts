export interface Course {
  id: string;
  category: "ielts" | "mock" | "visa";
  title: string;
  duration: string;
  mode: string;
  badge?: string;
  features: string[];
  price?: string;
  curriculum?: string[];
}

export const courses: Course[] = [
  {
    id: "ielts-academic",
    category: "ielts",
    title: "IELTS Academic",
    duration: "3 months",
    mode: "In-person",
    badge: "FLAGSHIP",
    features: [
      "Comprehensive all-modules training",
      "Weekly mock tests included",
      "Personalized feedback sessions",
      "Study materials provided",
    ],
    price: "Contact for pricing",
    curriculum: [
      "Diagnostic test & goal setting",
      "Listening strategies & practice",
      "Reading techniques & time management",
      "Writing task 1 & 2 mastery",
      "Speaking fluency development",
      "Full mock tests & review",
    ],
  },
  {
    id: "ielts-general",
    category: "ielts",
    title: "IELTS General Training",
    duration: "2 months",
    mode: "Flexible",
    features: [
      "Tailored for immigration/ work",
      "Letter writing focus",
      "Everyday English emphasis",
      "Flexible scheduling",
    ],
    price: "Contact for pricing",
    curriculum: [
      "General Training overview",
      "Listening & Reading basics",
      "Letter writing formats",
      "Essay writing practice",
      "Speaking for daily situations",
    ],
  },
  {
    id: "fast-track",
    category: "ielts",
    title: "Fast Track IELTS",
    duration: "4 weeks",
    mode: "Daily",
    badge: "INTENSIVE",
    features: [
      "Intensive daily sessions",
      "Rapid skill improvement",
      "Exam-focused strategies",
      "Priority mock test slots",
    ],
    price: "Contact for pricing",
    curriculum: [
      "Intensive diagnostic",
      "Accelerated module training",
      "Daily practice tests",
      "Exam day preparation",
    ],
  },
  {
    id: "mock-test",
    category: "mock",
    title: "Weekly Mock Test",
    duration: "Every weekend",
    mode: "Open",
    badge: "FREE",
    features: [
      "Full IELTS exam simulation",
      "Evaluated answer sheets",
      "Predicted band score report",
      "Open to all students",
    ],
    price: "Free",
  },
  {
    id: "visa-counseling",
    category: "visa",
    title: "Visa Counseling",
    duration: "Flexible",
    mode: "All 6 destinations",
    badge: "SERVICE",
    features: [
      "Document preparation guidance",
      "Application review",
      "Interview preparation",
      "Post-approval support",
    ],
    price: "Contact for pricing",
  },
  {
    id: "online-prep",
    category: "ielts",
    title: "Online IELTS Prep",
    duration: "Flexible schedule",
    mode: "Online",
    features: [
      "Live online sessions",
      "Recorded lessons access",
      "Digital study materials",
      "Online mock tests",
    ],
    price: "Contact for pricing",
  },
];
