"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ExperienceSection } from "@/components/sections/experience";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="snap-y snap-mandatory overflow-y-scroll h-screen">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <section className="min-h-screen bg-secondary/20 snap-start snap-always flex items-center">
          <div className="w-full">
            <SkillsSection />
            <ProjectsSection />
          </div>
        </section>
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
