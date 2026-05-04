export interface Testimonial {
  quote: string;
  name: string;
  achievement: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "JIMS IELTS transformed my approach to the exam. The personalized attention and rigorous mock tests gave me the confidence to achieve Band 8.0.",
    name: "Rahman Ahmed",
    achievement: "Band 8.0 → Now studying in Australia",
  },
  {
    quote: "The visa counseling was exceptional. They guided me through every document and step. I'm now living my dream in Canada.",
    name: "Fatima Khan",
    achievement: "Band 7.5 → Now in Canada",
  },
  {
    quote: "From Band 5.5 to Band 7.0 in just 8 weeks! The Fast Track program was intensive but exactly what I needed.",
    name: "Tasnim Hossain",
    achievement: "Band 5.5 → 7.0 → Now in UK",
  },
  {
    quote: "The free weekly mock tests helped me identify my weak areas. The instructors truly care about each student's success.",
    name: "Imran Hossain",
    achievement: "Band 7.5 → Now in Malaysia",
  },
];

export const studentResults = [
  { name: "Rahman", from: "5.5", to: "7.5", destination: "Australia", course: "IELTS Academic" },
  { name: "Fatima", from: "6.0", to: "7.5", destination: "Canada", course: "IELTS General" },
  { name: "Tasnim", from: "5.5", to: "7.0", destination: "UK", course: "Fast Track" },
  { name: "Imran", from: "6.5", to: "8.0", destination: "USA", course: "IELTS Academic" },
  { name: "Sarah", from: "5.0", to: "7.0", destination: "Ireland", course: "IELTS Academic" },
  { name: "Kamal", from: "6.0", to: "7.5", destination: "Malaysia", course: "Online Prep" },
];
