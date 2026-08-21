"use client";
import { useTheme } from "@/lib/theme-provider";
import { useEffect, useRef, useState } from "react";
import {
  SiJavascript, SiPython,
  SiHtml5, SiCss, SiPhp,
  SiMysql, SiGit, SiGithub,
  SiC, SiCplusplus,
} from 'react-icons/si';
import { Code2, Cpu, Database, Wrench, Brain, Wifi, CircuitBoard } from 'lucide-react';

const technologies = [
  // Programming Languages
  { name: 'Java', icon: Code2, light: '#ED8B00', dark: '#ED8B00' },
  { name: 'Python', icon: SiPython, light: '#3776AB', dark: '#3776AB' },
  { name: 'JavaScript', icon: SiJavascript, light: '#F7DF1E', dark: '#F7DF1E' },
  { name: 'C', icon: SiC, light: '#555555', dark: '#A8B9CC' },
  { name: 'C++', icon: SiCplusplus, light: '#00599C', dark: '#00599C' },

  // Web Development
  { name: 'HTML', icon: SiHtml5, light: '#E34F26', dark: '#E34F26' },
  { name: 'CSS', icon: SiCss, light: '#1572B6', dark: '#1572B6' },
  { name: 'PHP', icon: SiPhp, light: '#777BB4', dark: '#777BB4' },
  { name: 'MySQL', icon: SiMysql, light: '#4479A1', dark: '#4479A1' },

  // Tools & Platforms
  { name: 'Git', icon: SiGit, light: '#F05032', dark: '#F05032' },
  { name: 'GitHub', icon: SiGithub, light: '#181717', dark: '#FFFFFF' },
  { name: 'MATLAB', icon: Wrench, light: '#0076A8', dark: '#0076A8' },
  { name: 'VS Code', icon: Code2, light: '#007ACC', dark: '#007ACC' },
  { name: 'Arduino', icon: CircuitBoard, light: '#00979D', dark: '#00979D' },

  // AI / ML
  { name: 'Machine Learning', icon: Brain, light: '#FF6F00', dark: '#FF6F00' },
  { name: 'Deep Learning', icon: Brain, light: '#FF0000', dark: '#FF4444' },
  { name: 'Computer Vision', icon: Cpu, light: '#9C27B0', dark: '#CE93D8' },

  // Electronics & IoT
  { name: 'ESP32', icon: Wifi, light: '#E7352C', dark: '#E7352C' },
  { name: 'Xilinx', icon: Cpu, light: '#E01F27', dark: '#E01F27' },
  { name: 'PSPICE', icon: Cpu, light: '#4CAF50', dark: '#66BB6A' },
  { name: 'Signal Processing', icon: Wrench, light: '#2196F3', dark: '#64B5F6' },

  // Core Subjects
  { name: 'Data Structures', icon: Database, light: '#795548', dark: '#A1887F' },
  { name: 'DBMS', icon: Database, light: '#FF9800', dark: '#FFB74D' },
  { name: 'Computer Networks', icon: Wifi, light: '#009688', dark: '#4DB6AC' },
];

export const TechStack = () => {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";

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

  return (
    <section ref={sectionRef} className="max-w-7xl mx-auto px-4 pb-16 md:pb-24">
      <div className="text-center mb-8 md:mb-12">
        <h2
          className={`text-2xl md:text-4xl font-bold tracking-wide mb-3 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          TECH STACK
        </h2>
        <div
          className={`w-16 md:w-24 h-1 mx-auto mb-4 md:mb-6 rounded-full transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
          style={{
            background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
            boxShadow: `0 0 20px rgba(${accentRgb}, 0.5)`,
          }}
        />
        <p
          className={`text-foreground/60 text-xs md:text-sm max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Technologies & tools I use for research, development, and engineering
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-6xl mx-auto">
        {technologies.map(({ name, icon: Icon, light, dark }, index) => (
          <div
            key={name}
            className={`group relative flex flex-col items-center gap-2 transition-all duration-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: `${Math.min(300 + index * 20, 1000)}ms` }}
          >
            <div
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl border border-foreground/20 bg-background transition-all duration-300"
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${accentRgb}, 0.5)`;
                e.currentTarget.style.boxShadow = `0 0 20px rgba(${accentRgb}, 0.2)`;
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.transform = "";
                e.currentTarget.style.backgroundColor = "";
              }}
            >
              <Icon
                className="w-5 h-5 md:w-6 md:h-6 transition-all duration-300"
                style={{ color: theme === 'dark' ? dark : light }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
