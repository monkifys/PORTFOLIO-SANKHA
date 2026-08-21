"use client";
import { achievements } from "@/lib/data";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "@/lib/theme-provider";
import {
  Trophy,
  Award,
  Sparkles,
  Star,
  CheckCircle,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  FileText,
} from "lucide-react";

export const Achievements = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    title: string;
    award: string;
    pdf?: string | null;
  } | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});
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

  const getIcon = (id: number) => {
    switch (id) {
      case 1:
        return Trophy;
      case 2:
        return CheckCircle;
      case 3:
        return Award;
      default:
        return Sparkles;
    }
  };

  const photoAchievements = achievements.filter((a) => a.image && !imageErrorMap[a.id]);

  const openLightbox = (index: number) => {
    const item = achievements[index];
    if (item && item.image && !imageErrorMap[item.id]) {
      setSelectedPhoto({
        url: item.image,
        title: item.title,
        award: item.award,
        pdf: item.certificatePdf,
      });
      setCurrentPhotoIndex(index);
      document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
    document.body.style.overflow = "";
  };

  const nextPhoto = useCallback(() => {
    if (photoAchievements.length === 0) return;
    const photoIndices = achievements
      .map((a, idx) => (a.image && !imageErrorMap[a.id] ? idx : null))
      .filter((idx): idx is number => idx !== null);

    const currentPos = photoIndices.indexOf(currentPhotoIndex);
    const nextPos = (currentPos + 1) % photoIndices.length;
    const nextIdx = photoIndices[nextPos];
    const nextItem = achievements[nextIdx];

    setSelectedPhoto({
      url: nextItem.image || "",
      title: nextItem.title,
      award: nextItem.award,
      pdf: nextItem.certificatePdf,
    });
    setCurrentPhotoIndex(nextIdx);
  }, [currentPhotoIndex, imageErrorMap, photoAchievements.length]);

  const prevPhoto = useCallback(() => {
    if (photoAchievements.length === 0) return;
    const photoIndices = achievements
      .map((a, idx) => (a.image && !imageErrorMap[a.id] ? idx : null))
      .filter((idx): idx is number => idx !== null);

    const currentPos = photoIndices.indexOf(currentPhotoIndex);
    const prevPos = (currentPos - 1 + photoIndices.length) % photoIndices.length;
    const prevIdx = photoIndices[prevPos];
    const prevItem = achievements[prevIdx];

    setSelectedPhoto({
      url: prevItem.image || "",
      title: prevItem.title,
      award: prevItem.award,
      pdf: prevItem.certificatePdf,
    });
    setCurrentPhotoIndex(prevIdx);
  }, [currentPhotoIndex, imageErrorMap, photoAchievements.length]);

  useEffect(() => {
    if (!selectedPhoto) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, nextPhoto, prevPhoto]);

  return (
    <>
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
            National hackathon championships, competitive exam qualifications, and verified certificates
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {achievements.map((item, index) => {
            const Icon = getIcon(item.id);
            const hasImage = item.image && !imageErrorMap[item.id];

            return (
              <div
                key={item.id}
                className={`relative border border-foreground/20 rounded-3xl transition-all duration-500 group flex flex-col justify-between overflow-hidden ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
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
                  className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
                    boxShadow: `0 0 15px rgba(${accentRgb}, 0.6)`,
                  }}
                />

                {/* Background gradient hint */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                  style={{
                    background: `radial-gradient(ellipse at top, rgba(${accentRgb}, 0.08), transparent 70%)`,
                  }}
                />

                {/* Certificate Preview Image if available */}
                {hasImage && (
                  <div
                    className="relative w-full h-40 overflow-hidden bg-foreground/5 cursor-pointer group/thumb border-b border-foreground/10"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={item.image || ""}
                      alt={item.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/thumb:scale-105"
                      onError={() => {
                        setImageErrorMap((prev) => ({ ...prev, [item.id]: true }));
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover/thumb:bg-black/50 transition-colors flex items-center justify-center">
                      <div
                        className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 opacity-90 group-hover/thumb:opacity-100 group-hover/thumb:scale-105 transition-all shadow-lg border border-white/20"
                      >
                        <ZoomIn size={13} style={{ color: accentColor }} />
                        <span>Preview Certificate</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Card Content */}
                <div className="p-6 relative z-10 flex-1 flex flex-col">
                  {/* Header with Icon and Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="p-2.5 rounded-2xl border transition-all duration-300"
                      style={{
                        backgroundColor: `rgba(${accentRgb}, 0.1)`,
                        borderColor: `rgba(${accentRgb}, 0.25)`,
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: accentColor }}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full border uppercase tracking-wider"
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

                  {/* Title and Award */}
                  <h3
                    className="text-base font-bold mb-1.5 transition-colors duration-300 leading-tight"
                    style={{ ["--accent" as string]: accentColor }}
                  >
                    <span className="group-hover:text-(--accent)">{item.title}</span>
                  </h3>

                  <p
                    className="text-xs font-semibold mb-2.5 flex items-center gap-1.5"
                    style={{ color: accentColor }}
                  >
                    <Star size={12} className="fill-current shrink-0" />
                    {item.award}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-foreground/60 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>

                  {/* PDF Link Button if available */}
                  {item.certificatePdf && (
                    <div className="mt-auto pt-2">
                      <a
                        href={item.certificatePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-foreground/15 text-xs font-medium hover:border-foreground/30 transition-all duration-300"
                        style={{
                          backgroundColor: `rgba(${accentRgb}, 0.05)`,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.15)`;
                          e.currentTarget.style.borderColor = accentColor;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `rgba(${accentRgb}, 0.05)`;
                          e.currentTarget.style.borderColor = "";
                        }}
                      >
                        <FileText size={14} style={{ color: accentColor }} />
                        <span className="text-[11px]">View Official PDF</span>
                        <ExternalLink size={12} className="text-foreground/40" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Footer details */}
                <div
                  className="relative z-10 px-6 py-3 border-t flex items-center justify-between text-[11px] text-foreground/40 bg-foreground/[0.01]"
                  style={{ borderColor: `rgba(${accentRgb}, 0.1)` }}
                >
                  <span className="truncate max-w-[70%]">{item.organization}</span>
                  <span className="font-semibold text-foreground/60">{item.year}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fullscreen Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 z-50 cursor-pointer"
            aria-label="Close certificate modal"
          >
            <X size={24} />
          </button>

          {/* Photo Info Banner */}
          <div
            className="absolute top-6 left-6 max-w-md px-4 py-2.5 rounded-2xl z-50 flex flex-col gap-1"
            style={{
              backgroundColor: `rgba(${accentRgb}, 0.15)`,
              borderColor: `rgba(${accentRgb}, 0.3)`,
              border: "1px solid",
            }}
          >
            <p className="text-xs font-bold text-white leading-tight">{selectedPhoto.title}</p>
            <div className="flex items-center gap-3">
              <span className="text-[11px]" style={{ color: accentColor }}>
                {selectedPhoto.award}
              </span>
              {selectedPhoto.pdf && (
                <a
                  href={selectedPhoto.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] underline text-white hover:text-white/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText size={12} />
                  <span>Open PDF</span>
                  <ExternalLink size={10} />
                </a>
              )}
            </div>
          </div>

          {/* Image Container */}
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl bg-white border border-white/20"
              onError={() => {
                closeLightbox();
              }}
            />
          </div>

          {/* Navigation Controls */}
          {photoAchievements.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 cursor-pointer"
                aria-label="Next certificate"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};
