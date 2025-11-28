import { Window } from "./window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
  isMobile: boolean;
}

export function ContactWindow({ toggleWindow, isMobile }: Props) {
  return (
    <Window
      title="cat ./contact.txt"
      onClose={() => toggleWindow("contact")}
      defaultPosition={isMobile ? { x: 30, y: 30 } : { x: 1530, y: 350 }}
      defaultSize={
        isMobile ? { width: 290, height: 200 } : { width: 320, height: 200 }
      }
      isMobile={isMobile}
    >
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">You can find me on:</p>
        <div className="space-y-2">
          <a
            href="https://github.com/CMOISDEAD"
            className="block text-foreground hover:text-primary underline underline-offset-2"
          >
            GitHub
          </a>
          <a
            href="#"
            className="block text-foreground hover:text-primary underline underline-offset-2"
          >
            LinkedIn
          </a>
          <a
            href="mailto:camiloesteban661@gmail.com"
            className="block text-foreground hover:text-primary underline underline-offset-2"
          >
            Email
          </a>
        </div>
      </div>
    </Window>
  );
}
