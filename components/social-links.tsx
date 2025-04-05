import type { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  username?: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  direction?: "horizontal" | "vertical";
  showLabels?: boolean;
  iconSize?: number;
  className?: string;
}

export default function SocialLinks({
  links,
  direction = "horizontal",
  showLabels = false,
  iconSize = 20,
  className = "",
}: SocialLinksProps) {
  return (
    <div
      className={`flex ${direction === "vertical" ? "flex-col space-y-4" : "space-x-6"} ${className}`}
    >
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 hover:text-white transition-colors flex items-center w-fit"
        >
          {link.icon && (
            <link.icon size={iconSize} className={showLabels ? "mr-3" : ""} />
          )}
          {showLabels && link.username && <span>{link.username}</span>}
        </a>
      ))}
    </div>
  );
}
