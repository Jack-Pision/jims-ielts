"use client";

interface CourseFilterProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "ielts", label: "IELTS PREPARATION" },
  { id: "mock", label: "MOCK TESTS" },
  { id: "visa", label: "VISA COUNSELING" },
];

export function CourseFilter({ activeTab, onTabChange }: CourseFilterProps) {
  return (
    <div className="sticky top-20 z-40 bg-dark-emerald/95 backdrop-blur-sm border-b border-[#1a4028]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                relative py-4 px-6 text-nav whitespace-nowrap
                transition-colors duration-200
                ${
                  activeTab === tab.id
                    ? "text-brand-gold"
                    : "text-white/60 hover:text-white"
                }
              `}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
