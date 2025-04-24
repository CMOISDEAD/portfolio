"use client";

import { useActiveSection } from "@/hooks/use-active-section";
import SideNavigation from "@/components/navigation/side-navigation";
import MobileNavigation from "@/components/navigation/mobile-navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Experience from "@/components/sections/experience";
// import Testimonials from "@/components/sections/testimonials";
// import Blog from "@/components/sections/blog";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

import {
  navItems,
  socialLinks,
  skills,
  skillBars,
  projects,
  experiences,
  // testimonials,
  // blogPosts,
  aboutText,
} from "@/data/portfolio-data";
import Crosshair from "@/components/ui/crosshair";

export default function Page() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <SideNavigation
        navItems={navItems}
        socialLinks={socialLinks}
        activeSection={activeSection}
        onNavItemClick={scrollToSection}
      />
      <MobileNavigation
        navItems={navItems}
        activeSection={activeSection}
        onNavItemClick={scrollToSection}
      />

      <div className="md:pl-20">
        <Crosshair color="#ffffff" />
        <Hero
          onContactClick={() => scrollToSection("contact")}
          onProjectsClick={() => scrollToSection("projects")}
        />
        <About paragraphs={aboutText} skills={skills} />
        <Experience experiences={experiences} />
        <Projects projects={projects} />
        <Skills skills={skillBars} />
        {/* <Testimonials testimonials={testimonials} /> */}
        {/* <Blog posts={blogPosts} /> */}
        <Contact socialLinks={socialLinks} />
        <Footer socialLinks={socialLinks} />
      </div>
    </div>
  );
}
