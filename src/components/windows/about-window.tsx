import { Window } from "@/components/windows/window";
import { Spoiler } from "spoiled";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
  isMobile: boolean;
}

export function AboutWindow({ toggleWindow, isMobile }: Props) {
  return (
    <Window
      title="whoami"
      anchor="top-right"
      offset={isMobile ? { x: 10, y: 10 } : { x: 80, y: 40 }}
      defaultSize={
        isMobile ? { width: 350, height: 420 } : { width: 380, height: 415 }
      }
      onClose={() => toggleWindow("about")}
      isMobile={isMobile}
    >
      <div className="text-sm text-muted-foreground space-y-3 leading-relaxed p-1">
        <section>
          <h2 className="text-base font-semibold text-foreground">
            Camilo Dávila
          </h2>
          <p className="text-blue-300">Fullstack Developer</p>
        </section>

        <section className="space-y-1">
          <p>
            I build intuitive, scalable and high-performance interfaces using{" "}
            <span className="text-blue-300 font-medium">
              React, Next.js, TypeScript, TailwindCSS
            </span>
            .
          </p>
          <p>
            Experience with SSR, ISR, CMS (Strapi), authentication, and
            responsive UI systems.
          </p>
        </section>

        <section className="space-y-1">
          <h3 className="text-sm font-medium text-foreground">Contact</h3>
          <p>
            Email:{" "}
            <span className="text-muted-foreground">
              camiloesteban661@gmail.com
            </span>
          </p>
          <p>
            Phone:{" "}
            <span className="text-muted-foreground">
              +57 <Spoiler>313 389 6428</Spoiler>
            </span>
          </p>
          <p>
            Portfolio:{" "}
            <span className="text-muted-foreground">camilodavila.space</span>
          </p>
        </section>
      </div>
    </Window>
  );
}
