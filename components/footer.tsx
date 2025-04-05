import SocialLinks from "./social-links";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface Props {
  socialLinks: SocialLink[];
}

export default function Footer({ socialLinks }: Props) {
  return (
    <footer className="px-6 md:px-20 lg:px-32 py-10 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-zinc-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} Camilo Davila. All rights reserved.
        </div>
        <SocialLinks links={socialLinks} />
      </div>
    </footer>
  );
}
