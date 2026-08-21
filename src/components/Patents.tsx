"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "@/lib/theme-provider";
import { ChevronLeft, ChevronRight, Award, ExternalLink, ZoomIn, X } from "lucide-react";

const patentPages = [
  "/images/patent/patent-page-1.png",
  "/images/patent/patent-page-2.png",
  "/images/patent/patent-page-3.png",
  "/images/patent/patent-page-4.png",
  "/images/patent/patent-page-5.png",
];

const patentInfo = {
  title: "Photovoltaic Panel Solar Tracking Device",
  designNumber: "6514788",
  grantDate: "10 April 2026",
  registrationDate: "24 March 2026",
  status: "Granted",
  authority: "UK Intellectual Property Office",
  classification: "Class 13 — Solar Equipment",
  inventors: [
    "Sankha Singhamahapatra",
    "Aditi Tokder",
    "Dr. Subhankar Chatterjee",
    "Dr. Anirban Bose",
    "Dr. Anandaprova Majumder",
    "Dr. Sumana Kundu",
    "Amitabha Mandal",
    "Rajib Kumar Mondal",
  ],
};

export const Patents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxPage, setLightboxPage] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { theme } = useTheme();

  const accentColor = theme === "dark" ? "#00ff88" : "#FFB800";
  const accentRgb = theme === "dark" ? "0, 255, 136" : "255, 184, 0";
  const cardBg = theme === "dark" ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)";

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

  const nextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1) % patentPages.length);
  }, []);

  const prevPage = useCallback(() => {
    setCurrentPage((prev) => (prev - 1 + patentPages.length) % patentPages.length);
  }, []);

  const nextLightboxPage = useCallback(() => {
    setLightboxPage((prev) => (prev + 1) % patentPages.length);
  }, []);

  const prevLightboxPage = useCallback(() => {
    setLightboxPage((prev) => (prev - 1 + patentPages.length) % patentPages.length);
  }, []);

  const openLightbox = (pageIndex: number) => {
    setLightboxPage(pageIndex);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "";
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightboxPage();
      if (e.key === "ArrowLeft") prevLightboxPage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isLightboxOpen, nextLightboxPage, prevLightboxPage]);

  return (
    <>
      <section
        ref={sectionRef}
        className="max-w-7xl mx-auto px-4 py-20 lg:py-32"
        id="patents"
      >
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            className={`text-3xl md:text-5xl font-bold tracking-wide mb-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            PATENTS & DESIGNS
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
            Registered intellectual property and design innovations
          </p>
        </div>

        {/* Patent Card */}
        <div
          className={`max-w-5xl mx-auto border border-foreground/20 rounded-3xl overflow-hidden transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{ background: cardBg }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Page Viewer */}
            <div className="relative group">
              {/* Main Image */}
              <div
                className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                onClick={() => openLightbox(currentPage)}
              >
                <img
                  src={patentPages[currentPage]}
                  alt={`Patent page ${currentPage + 1}`}
                  className="w-full h-full object-contain bg-white transition-transform duration-500"
                  style={{ padding: "8px" }}
                />
                {/* Zoom overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <ZoomIn
                    size={40}
                    className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevPage(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                style={{
                  boxShadow: `0 0 15px rgba(${accentRgb}, 0.3)`,
                }}
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextPage(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                style={{
                  boxShadow: `0 0 15px rgba(${accentRgb}, 0.3)`,
                }}
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>

              {/* Page indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm">
                {patentPages.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrentPage(i); }}
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: i === currentPage ? accentColor : "rgba(255,255,255,0.4)",
                      boxShadow: i === currentPage ? `0 0 8px rgba(${accentRgb}, 0.6)` : "none",
                      transform: i === currentPage ? "scale(1.3)" : "scale(1)",
                    }}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Patent Details */}
            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              {/* Status badge */}
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase"
                  style={{
                    backgroundColor: `rgba(${accentRgb}, 0.15)`,
                    color: accentColor,
                    border: `1px solid rgba(${accentRgb}, 0.3)`,
                    boxShadow: `0 0 15px rgba(${accentRgb}, 0.1)`,
                  }}
                >
                  <Award size={14} />
                  {patentInfo.status}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold mb-4 leading-tight"
                style={{
                  background: `linear-gradient(135deg, ${theme === "dark" ? "#fff" : "#1a1a1a"}, ${accentColor})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {patentInfo.title}
              </h3>

              {/* Details grid */}
              <div className="space-y-4 mb-6">
                <DetailRow label="Design Number" value={patentInfo.designNumber} accentColor={accentColor} />
                <DetailRow label="Grant Date" value={patentInfo.grantDate} accentColor={accentColor} />
                <DetailRow label="Registration Date" value={patentInfo.registrationDate} accentColor={accentColor} />
                <DetailRow label="Authority" value={patentInfo.authority} accentColor={accentColor} />
                <DetailRow label="Classification" value={patentInfo.classification} accentColor={accentColor} />
              </div>

              {/* Inventors */}
              <div className="mb-6">
                <p className="text-xs font-semibold tracking-wider uppercase text-foreground/50 mb-3">
                  Inventors & Co-applicants
                </p>
                <div className="flex flex-wrap gap-2">
                  {patentInfo.inventors.map((name) => (
                    <span
                      key={name}
                      className="text-xs px-3 py-1.5 rounded-full border transition-all duration-300"
                      style={{
                        borderColor: name === "Sankha Singhamahapatra"
                          ? `rgba(${accentRgb}, 0.5)`
                          : "rgba(128,128,128,0.2)",
                        backgroundColor: name === "Sankha Singhamahapatra"
                          ? `rgba(${accentRgb}, 0.1)`
                          : "transparent",
                        color: name === "Sankha Singhamahapatra" ? accentColor : undefined,
                        fontWeight: name === "Sankha Singhamahapatra" ? 600 : 400,
                      }}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Page count info */}
              <div
                className="flex items-center gap-2 text-xs text-foreground/40 pt-4 border-t"
                style={{ borderColor: `rgba(${accentRgb}, 0.1)` }}
              >
                <span>
                  Viewing page{" "}
                  <span style={{ color: accentColor, fontWeight: 600 }}>
                    {currentPage + 1}
                  </span>{" "}
                  of {patentPages.length}
                </span>
                <span className="ml-auto text-foreground/30">Click image to enlarge</span>
              </div>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div
            className="border-t px-4 py-3 flex gap-2 overflow-x-auto"
            style={{ borderColor: `rgba(${accentRgb}, 0.1)`, background: cardBg }}
          >
            {patentPages.map((page, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className="relative flex-shrink-0 w-16 h-20 md:w-20 md:h-26 rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105"
                style={{
                  borderColor: i === currentPage ? accentColor : "rgba(128,128,128,0.2)",
                  boxShadow: i === currentPage ? `0 0 12px rgba(${accentRgb}, 0.3)` : "none",
                }}
              >
                <img
                  src={page}
                  alt={`Page ${i + 1} thumbnail`}
                  className="w-full h-full object-cover bg-white"
                />
                {i === currentPage && (
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, rgba(${accentRgb}, 0.2), transparent)`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300 z-50"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Page counter */}
          <div
            className="absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-medium z-50"
            style={{
              backgroundColor: `rgba(${accentRgb}, 0.2)`,
              color: accentColor,
              border: `1px solid rgba(${accentRgb}, 0.3)`,
            }}
          >
            {lightboxPage + 1} / {patentPages.length}
          </div>

          {/* Image */}
          <div
            className="relative max-w-4xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={patentPages[lightboxPage]}
              alt={`Patent page ${lightboxPage + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              style={{ background: "white" }}
            />
          </div>

          {/* Navigation */}
          <button
            onClick={(e) => { e.stopPropagation(); prevLightboxPage(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Previous page"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextLightboxPage(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all duration-300"
            aria-label="Next page"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
};

const DetailRow = ({
  label,
  value,
  accentColor,
}: {
  label: string;
  value: string;
  accentColor: string;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
    <span className="text-xs font-semibold tracking-wider uppercase text-foreground/50 min-w-[140px]">
      {label}
    </span>
    <span className="text-sm font-medium" style={{ color: accentColor }}>
      {value}
    </span>
  </div>
);
