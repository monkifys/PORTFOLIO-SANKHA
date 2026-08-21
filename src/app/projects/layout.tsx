import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Sankha Singhamahapatra | ECE Undergraduate & Developer Portfolio",
  description: "Explore my projects in IoT, AI/ML, and web development including Smart Solar Tracking, Space Cargo Stowage, Brain Tumor Detection, and Camouflaged Object Detection.",
  openGraph: {
    title: "Projects - Sankha Singhamahapatra | ECE Undergraduate & Developer Portfolio",
    description: "Explore my projects in IoT, AI/ML, and web development including Smart Solar Tracking, Space Cargo Stowage, Brain Tumor Detection, and Camouflaged Object Detection.",
    url: "https://sankha-singhamahapatra.vercel.app/projects",
  },
  twitter: {
    title: "Projects - Sankha Singhamahapatra | ECE Undergraduate & Developer Portfolio",
    description: "Explore my projects in IoT, AI/ML, and web development including Smart Solar Tracking, Space Cargo Stowage, Brain Tumor Detection, and Camouflaged Object Detection.",
  },
  alternates: {
    canonical: "https://sankha-singhamahapatra.vercel.app/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
