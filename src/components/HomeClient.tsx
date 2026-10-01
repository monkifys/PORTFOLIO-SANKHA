"use client";

import { lazy, Suspense, useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { ProjectModal } from "@/components/ProjectModal";
import { WorkSection } from "@/components/WorkSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { useLenis } from "@/lib/useLenis";
import type { projects as projectsData } from "@/lib/data";

const MoreProjectsSection = lazy(() =>
   import("@/components/MoreProjectsSection").then((m) => ({
      default: m.MoreProjectsSection,
   })),
);
const Achievements = lazy(() =>
   import("@/components/Achievements").then((m) => ({
      default: m.Achievements,
   })),
);
const Patents = lazy(() =>
   import("@/components/Patents").then((m) => ({
      default: m.Patents,
   })),
);
const SkillsSection = lazy(() =>
   import("@/components/SkillsSection").then((m) => ({
      default: m.SkillsSection,
   })),
);
const ServicesSection = lazy(() =>
   import("@/components/ServicesSection").then((m) => ({
      default: m.ServicesSection,
   })),
);
const ContactSection = lazy(() =>
   import("@/components/ContactSection").then((m) => ({
      default: m.ContactSection,
   })),
);
const FooterSection = lazy(() =>
   import("@/components/FooterSection").then((m) => ({
      default: m.FooterSection,
   })),
);

type Project = (typeof projectsData)[number];

function SectionFallback() {
   return <div className="min-h-80" aria-hidden="true" />;
}

export function HomeClient() {
   useLenis();
   const [selectedProject, setSelectedProject] = useState<Project | null>(null);
   const [isModalOpen, setIsModalOpen] = useState(false);

   const openProjectModal = (project: Project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
   };

   const closeProjectModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
   };

   return (
      <>
         <div className="relative min-h-screen bg-bg-primary text-fg-primary">
            <section
               id="home"
               className="fixed top-0 left-0 right-0 h-screen z-10"
            >
               <HeroSection />
            </section>

            <div className="h-screen pointer-events-none relative z-0" />

            <main className="relative z-30 bg-bg-primary text-fg-primary">
               {/* 01: Featured Projects */}
               <section id="work" className="inverted bg-bg-primary">
                  <WorkSection onProjectClick={openProjectModal} />
               </section>

               {/* 02: More Projects Archive */}
               <Suspense fallback={<SectionFallback />}>
                  <section id="more-projects">
                     <MoreProjectsSection onProjectClick={openProjectModal} />
                  </section>
               </Suspense>

               {/* 03: Achievements (AIR 1 Space Hackathon, GATE, AFCAT, SIH) */}
               <Suspense fallback={<SectionFallback />}>
                  <section id="achievements" className="inverted bg-bg-primary">
                     <Achievements />
                  </section>
               </Suspense>

               {/* 04: UK Granted Patents */}
               <Suspense fallback={<SectionFallback />}>
                  <section id="patents">
                     <Patents />
                  </section>
               </Suspense>

               {/* 05: Experience */}
               <Suspense fallback={<SectionFallback />}>
                  <section id="experience" className="inverted bg-bg-primary">
                     <ExperienceSection />
                  </section>
               </Suspense>

               {/* 06: Skills & Technologies */}
               <Suspense fallback={<SectionFallback />}>
                  <section id="skills">
                     <SkillsSection />
                  </section>
               </Suspense>

               {/* 07: Services */}
               <Suspense fallback={<SectionFallback />}>
                  <section id="services" className="inverted bg-bg-primary">
                     <ServicesSection />
                  </section>
               </Suspense>

               {/* 08: Contact */}
               <Suspense fallback={<SectionFallback />}>
                  <section id="contact">
                     <ContactSection />
                  </section>
               </Suspense>

               {/* Footer */}
               <Suspense fallback={<SectionFallback />}>
                  <FooterSection />
               </Suspense>
            </main>
         </div>

         <ProjectModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={closeProjectModal}
         />
      </>
   );
}
