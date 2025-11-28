import Dither from "@/components/dither";
import { AboutWindow } from "@/components/windows/about-window";
import { ContactWindow } from "@/components/windows/contact-window";
import { ExperienceWindow } from "@/components/windows/experience-window";
import { ProjectsWindow } from "@/components/windows/projects-window";
import { WindowSelector } from "@/components/windows/window-selector";
import { useEffect, useState } from "react";

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

  // Forzamos que todas las ventanas estén centradas y con tamaño razonable al montar
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="h-screen w-screen relative overflow-hidden bg-background">
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction={!isMobile}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.01}
      />

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
