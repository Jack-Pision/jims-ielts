import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JIMS IELTS | Dream Big. Go Global.",
  description: "Bangladesh's leading IELTS institute. Expert-led instruction, free weekly mock exams, personalized band score tracking, and end-to-end visa counseling. Located in Jessore, Bangladesh.",
  keywords: "IELTS, IELTS preparation, IELTS Bangladesh, IELTS Jessore, study abroad, visa counseling, mock tests",
  openGraph: {
    title: "JIMS IELTS | Dream Big. Go Global.",
    description: "Bangladesh's leading IELTS institute in Jessore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
