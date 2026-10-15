import { BackgroundDither } from "@/components/background-dither";
import { AboutWindow } from "@/components/windows/about-window";
import { ContactWindow } from "@/components/windows/contact-window";
import { ExperienceWindow } from "@/components/windows/experience-window";
import { ProjectsWindow } from "@/components/windows/projects-window";
import { WindowSelector } from "@/components/windows/window-selector";
import { WindowPresence } from "@/components/windows/window";
import { computeWindowLayout } from "@/components/windows/layout";
import { useIsMobile } from "@/hooks/use-client";
import { SITE } from "@/data/site";
import { useLayoutEffect, useRef, useState } from "react";

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

  const containerRef = useRef<HTMLDivElement>(null);
  const selectorRef = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState<{
    width: number;
    height: number;
    selectorBottom: number;
  } | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const selector = selectorRef.current;
    if (!container || !selector) return;

    const measure = () =>
      setBounds({
        width: container.clientWidth,
        height: container.clientHeight,
        selectorBottom: selector.offsetTop + selector.offsetHeight,
      });
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(container);
    observer.observe(selector);
    return () => observer.disconnect();
  }, []);

  const layout = bounds && computeWindowLayout(bounds, bounds.selectorBottom, isMobile);

  return (
    <div
      ref={containerRef}
      className="h-full w-full relative isolate overflow-hidden bg-background flex"
    >
      <h1 className="sr-only">
        {SITE.name} · {SITE.jobTitle}
      </h1>

      <BackgroundDither enableMouseInteraction={!isMobile} />

      <WindowSelector
        ref={selectorRef}
        windows={windows}
        toggleWindow={toggleWindow}
      />

      <WindowPresence open={windows.about}>
        <AboutWindow
          toggleWindow={toggleWindow}
          isMobile={isMobile}
          layout={layout?.about ?? null}
        />
      </WindowPresence>
      <WindowPresence open={windows.experience}>
        <ExperienceWindow
          toggleWindow={toggleWindow}
          isMobile={isMobile}
          layout={layout?.experience ?? null}
        />
      </WindowPresence>
      <WindowPresence open={windows.projects}>
        <ProjectsWindow
          toggleWindow={toggleWindow}
          isMobile={isMobile}
          layout={layout?.projects ?? null}
        />
      </WindowPresence>
      <WindowPresence open={windows.contact}>
        <ContactWindow
          toggleWindow={toggleWindow}
          isMobile={isMobile}
          layout={layout?.contact ?? null}
        />
      </WindowPresence>
    </div>
  );
}
