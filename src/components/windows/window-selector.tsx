import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface Props {
  windows: {
    about: boolean;
    experience: boolean;
    projects: boolean;
    contact: boolean;
  };
  toggleWindow: (key: any) => void;
}

export function WindowSelector({ windows, toggleWindow }: Props) {
  return (
    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Checkbox
          id="about"
          checked={windows.about}
          onCheckedChange={() => toggleWindow("about")}
        />
        <Label htmlFor="about" className="text-sm cursor-pointer">
          About
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="experience"
          checked={windows.experience}
          onCheckedChange={() => toggleWindow("experience")}
        />
        <Label htmlFor="experience" className="text-sm cursor-pointer">
          Experience
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="projects"
          checked={windows.projects}
          onCheckedChange={() => toggleWindow("projects")}
        />
        <Label htmlFor="projects" className="text-sm cursor-pointer">
          Featured Projects
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="contact"
          checked={windows.contact}
          onCheckedChange={() => toggleWindow("contact")}
        />
        <Label htmlFor="contact" className="text-sm cursor-pointer">
          Contact
        </Label>
      </div>
    </div>
  );
}
