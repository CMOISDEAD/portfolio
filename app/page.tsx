"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import SideNavigation from "@/components/navigation/side-navigation";
import MobileNavigation from "@/components/navigation/mobile-navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

import {
  navItems,
  skills,
  projects,
  experiences,
  aboutText,
} from "@/data/portfolio-data";
import Crosshair from "@/components/ui/crosshair";

export default function Page() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <div>
      <SideNavigation
        navItems={navItems}
        activeSection={activeSection}
        onNavItemClick={scrollToSection}
      />
      <MobileNavigation
        navItems={navItems}
        activeSection={activeSection}
        onNavItemClick={scrollToSection}
      />

      <main className="pt-20 md:pt-0 md:pl-20 p-6">
        <Hero onClickAction={scrollToSection} />
        <About paragraphs={aboutText} skills={skills} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills />
        <Contact />
        <Footer />
      </main>
      <Crosshair />
    </div>
  );
}
