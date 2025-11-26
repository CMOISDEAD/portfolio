import { Window } from "./window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
}

export function ContactWindow({ toggleWindow }: Props) {
  return (
    <Window
      title="Contact"
      onClose={() => toggleWindow("contact")}
      defaultPosition={{ x: 1530, y: 350 }}
      defaultSize={{ width: 320, height: 200 }}
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
            href="#"
            className="block text-foreground hover:text-primary underline underline-offset-2"
          >
            Email
          </a>
        </div>
      </div>
    </Window>
  );
}
