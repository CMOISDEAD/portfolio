import { BackgroundDither } from "@/components/background-dither";
import { AboutWindow } from "@/components/windows/about-window";
import { ContactWindow } from "@/components/windows/contact-window";
import { ExperienceWindow } from "@/components/windows/experience-window";
import { ProjectsWindow } from "@/components/windows/projects-window";
import { WindowSelector } from "@/components/windows/window-selector";
import { useIsMobile } from "@/hooks/use-client";
import { SITE } from "@/data/site";
import { useState } from "react";

export function HomePage() {
  const [windows, setWindows] = useState({
    about: true,
    experience: true,
    projects: true,
    contact: true,
  });

  const toggleWindow = (key: keyof typeof windows) => {
    setWindows((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isMobile = useIsMobile();
  const [prevIsMobile, setPrevIsMobile] = useState(isMobile);

  if (isMobile !== prevIsMobile) {
    setPrevIsMobile(isMobile);
    if (isMobile) {
      setWindows((p) => ({ ...p, contact: false, experience: false }));
    }
  }

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-background flex">
      <h1 className="sr-only">
        {SITE.name} · {SITE.jobTitle}
      </h1>

      <BackgroundDither enableMouseInteraction={!isMobile} />

      <WindowSelector windows={windows} toggleWindow={toggleWindow} />

      {windows.about && (
        <AboutWindow toggleWindow={toggleWindow} isMobile={isMobile} />
      )}
      {windows.experience && (
        <ExperienceWindow toggleWindow={toggleWindow} isMobile={isMobile} />
      )}
      {windows.projects && (
        <ProjectsWindow toggleWindow={toggleWindow} isMobile={isMobile} />
      )}
      {windows.contact && (
        <ContactWindow toggleWindow={toggleWindow} isMobile={isMobile} />
      )}
    </div>
  );
}
