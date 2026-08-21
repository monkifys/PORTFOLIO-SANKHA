"use client";
import { achievements } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "@/lib/theme-provider";
import { Trophy, Award, Sparkles, Star } from "lucide-react";

export const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
  const cardBg = theme === "dark" ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.02)";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return Trophy;
      case 1:
        return Award;
      default:
        return Sparkles;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto px-4 py-20 lg:py-32"
      id="achievements"
    >
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-wide mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          ACHIEVEMENTS
        </h2>
        <div
          className={`w-16 md:w-24 h-1 mx-auto mb-6 md:mb-8 rounded-full transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
          }}
        />
        <p
          className={`text-foreground/60 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto px-2 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Recognitions, national hackathon victories, and academic milestones
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {achievements.map((item, index) => {
          const Icon = getIcon(index);
          return (
            <div
              key={item.id}
              className={`relative border border-foreground/20 p-6 md:p-8 rounded-3xl transition-all duration-500 group flex flex-col justify-between ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${300 + index * 150}ms`,
                background: cardBg,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`;
                e.currentTarget.style.boxShadow = `0 0 30px rgba(${accentRgb}, 0.15)`;
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
              }}
            >
              {/* Subtle top glow line on hover */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                  boxShadow: `0 0 15px rgba(${accentRgb}, 0.6)`,
                }}
              />

              {/* Background gradient hint */}
              <div
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at top, rgba(${accentRgb}, 0.08), transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                {/* Header with Icon and Year */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="p-3 rounded-2xl border transition-all duration-300"
                    style={{
                      backgroundColor: `rgba(${accentRgb}, 0.1)`,
                      borderColor: `rgba(${accentRgb}, 0.25)`,
                    }}
                  >
                    <Icon
                      size={24}
                      style={{ color: accentColor }}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full border uppercase tracking-wider"
                      style={{
                        backgroundColor: `rgba(${accentRgb}, 0.12)`,
                        borderColor: `rgba(${accentRgb}, 0.3)`,
                        color: accentColor,
                        filter: `drop-shadow(0 0 8px rgba(${accentRgb}, 0.2))`,
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Title and Award */}
                <h3
                  className="text-lg md:text-xl font-bold mb-1 transition-colors duration-300 leading-tight"
                  style={{ ["--accent" as string]: accentColor }}
                >
                  <span className="group-hover:text-(--accent)">{item.title}</span>
                </h3>

                <p
                  className="text-xs md:text-sm font-semibold mb-3 flex items-center gap-1.5"
                  style={{ color: accentColor }}
                >
                  <Star size={14} className="fill-current" />
                  {item.award}
                </p>

                {/* Description */}
                <p className="text-xs text-foreground/60 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Footer details */}
              <div
                className="relative z-10 pt-4 border-t flex items-center justify-between text-xs text-foreground/40"
                style={{ borderColor: `rgba(${accentRgb}, 0.1)` }}
              >
                <span className="truncate max-w-[70%]">{item.organization}</span>
                <span className="font-medium text-foreground/50">{item.year}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
