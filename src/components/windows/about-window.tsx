import { Window } from "@/components/windows/window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
}

export function AboutWindow({ toggleWindow }: Props) {
  return (
    <Window
      title="whoami"
      onClose={() => toggleWindow("about")}
      defaultPosition={{
        x: 1450,
        y: 50,
      }}
      defaultSize={{
        width: 380,
        height: 300,
      }}
    >
      <div className="text-sm text-muted-foreground space-y-3 leading-relaxed p-1">
        {/* HEADER */}
        <section>
          <h2 className="text-base font-semibold text-foreground">
            Camilo Dávila
          </h2>
          <p className="text-muted-foreground">
            Fullstack Developer (Frontend-focused)
          </p>
        </section>

        {/* ABOUT */}
        <section className="space-y-1">
          <p>
            I build intuitive, scalable and high-performance interfaces using{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span>,{" "}
            <span className="text-foreground font-medium">TypeScript</span> and{" "}
            <span className="text-foreground font-medium">TailwindCSS</span>.
          </p>
          <p>
            Experience with SSR, ISR, CMS (Strapi), authentication, and
            responsive UI systems.
          </p>
        </section>

        {/* CONTACT */}
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
            <span className="text-muted-foreground">+57 xxx xxx xxxx</span>
          </p>
          <p>
            Portfolio:{" "}
            <span className="text-muted-foreground">camilodavila.xyz</span>
          </p>
        </section>
      </div>
    </Window>
  );
}
