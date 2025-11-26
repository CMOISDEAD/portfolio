import Dither from "@/components/dither";
import { AboutWindow } from "@/components/windows/about-window";
import { ContactWindow } from "@/components/windows/contact-window";
import { ExperienceWindow } from "@/components/windows/experience-window";
import { ProjectsWindow } from "@/components/windows/projects-window";
import { WindowSelector } from "@/components/windows/window-selector";
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

  return (
    <div className="h-full relative">
      {true && (
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.3}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.01}
        />
      )}
      <WindowSelector windows={windows} toggleWindow={toggleWindow} />

      {windows.about && <AboutWindow toggleWindow={toggleWindow} />}
      {windows.experience && <ExperienceWindow toggleWindow={toggleWindow} />}
      {windows.projects && <ProjectsWindow toggleWindow={toggleWindow} />}
      {windows.contact && <ContactWindow toggleWindow={toggleWindow} />}
    </div>
  );
}
