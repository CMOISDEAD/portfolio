import { Window } from "@/components/windows/window";

interface Props {
  toggleWindow: (key: "projects" | "about" | "experience" | "contact") => void;
}

export function ExperienceWindow({ toggleWindow }: Props) {
  return (
    <Window
      title="Experience"
      onClose={() => toggleWindow("experience")}
      defaultPosition={{
        x: 300,
        y: 500,
      }}
      defaultSize={{
        width: 820,
        height: 200,
      }}
    >
      <p>Experience</p>
    </Window>
  );
}
