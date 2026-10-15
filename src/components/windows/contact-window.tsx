import { Window } from "@/components/windows/window";
import type { WindowProps } from "@/components/windows/types";
import { SITE } from "@/data/site";

type Props = WindowProps;

export function ContactWindow({ toggleWindow, isMobile, layout }: Props) {
  return (
    <Window
      title="cat ./contact.txt"
      layout={layout}
      onClose={() => toggleWindow("contact")}
      isMobile={isMobile}
    >
      <div className="space-y-3 text-sm">
        <p className="text-muted-foreground">You can find me on:</p>
        <div className="space-y-2">
          <a
            href={SITE.github}
            target="_blank"
            rel="me noopener noreferrer"
            className="block text-foreground hover:text-primary underline underline-offset-2"
          >
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="me noopener noreferrer"
            className="block text-foreground hover:text-primary underline underline-offset-2"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="block text-foreground hover:text-primary underline underline-offset-2"
          >
            Email
          </a>
        </div>
      </div>
    </Window>
  );
}
