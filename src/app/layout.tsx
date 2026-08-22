import { ThemeProvider } from "@/lib/theme-provider";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sankha-singhamahapatra.vercel.app"),
  title: "Sankha Singhamahapatra - ECE Undergraduate | Researcher | Developer",
  description: "Electronics & Communication Engineering undergraduate at Techno Main Salt Lake. Experienced in AI/ML, IoT, and research internships. Winner of National Space Hackathon 2025 (AIR 1). Skilled in Python, Java, JavaScript, MATLAB.",
  keywords: ["Sankha Singhamahapatra", "ECE Undergraduate", "Electronics Engineer", "AI ML Developer", "Python Developer", "IoT Developer", "Machine Learning", "Deep Learning", "Computer Vision", "MATLAB", "Research Intern", "VECC", "National Space Hackathon", "Smart India Hackathon", "Techno Main Salt Lake", "Kolkata"],
  authors: [{ name: "Sankha Singhamahapatra" }],
  creator: "Sankha Singhamahapatra",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",

  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sankha-singhamahapatra.vercel.app/",
    title: "Sankha Singhamahapatra - ECE Undergraduate | Researcher | Developer",
    description: "Electronics & Communication Engineering undergraduate. Experienced in AI/ML, IoT, and research. Winner of National Space Hackathon 2025 (AIR 1).",
    siteName: "Sankha Singhamahapatra Portfolio",
    images: [{
      url: "https://sankha-singhamahapatra.vercel.app/logo.png",
      width: 1200,
      height: 630,
      alt: "Sankha Singhamahapatra - ECE Undergraduate",
    }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SankhaMahapatr5",
    creator: "@SankhaMahapatr5",
    title: "Sankha Singhamahapatra - ECE Undergraduate | Researcher | Developer",
    description: "Electronics & Communication Engineering undergraduate. Experienced in AI/ML, IoT, and research. Winner of National Space Hackathon 2025.",
    images: ["https://sankha-singhamahapatra.vercel.app/logo.png"],
  },
  alternates: {
    canonical: "https://sankha-singhamahapatra.vercel.app/",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sankha Singhamahapatra",
  jobTitle: "ECE Undergraduate & Researcher",
  description: "Electronics & Communication Engineering undergraduate at Techno Main Salt Lake. Experienced in AI/ML, IoT, and nuclear physics research at VECC.",
  url: "https://sankha-singhamahapatra.vercel.app",
  image: "https://sankha-singhamahapatra.vercel.app/logo.png",
  sameAs: [
    "https://github.com/monkifys",
    "https://www.linkedin.com/in/sankha-singhamahapatra-b2790121b/",
    "https://x.com/SankhaMahapatr5",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  email: "mahapatrasankha8@gmail.com",
  knowsAbout: ["Java", "Python", "JavaScript", "Machine Learning", "Deep Learning", "Computer Vision", "MATLAB", "IoT", "ESP32", "PHP", "MySQL", "HTML", "CSS", "Signal Processing", "Data Structures"],
  workExample: [
    { "@type": "CreativeWork", name: "Smart Solar Tracking System", description: "IoT-based solar tracking system with ESP32 and MATLAB" },
    { "@type": "CreativeWork", name: "AI-Based Brain Tumor Detection", description: "Deep learning model for brain tumor detection from MRI images" },
    { "@type": "CreativeWork", name: "Space Cargo Stowage System", description: "Database-driven spacecraft cargo optimization system" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`}>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <ThemeProvider>
          <div className="flex justify-center">
            <Navbar />
          </div>
          {children}
          <Footer />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
